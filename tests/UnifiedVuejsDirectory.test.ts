import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import UnifiedVuejsDirectory from '../src/components/UnifiedVuejsDirectory.vue';

// What the workspace integrations endpoint returns; the mock records the request URL
const INTEGRATIONS = [
    { type: 'hubspot', name: 'HubSpot', categories: ['crm', 'martech'], logo_url: '/hubspot.png' },
    { type: 'greenhouse', name: 'Greenhouse', categories: ['ats', 'hris'], logo_url: '/greenhouse.png' },
];

let requested: string[] = [];

async function renderDirectory(props: Record<string, unknown>) {
    const wrapper = mount(UnifiedVuejsDirectory, { props: { workspace_id: 'ws_123', ...props } });
    await flushPromises();
    const listUrl = new URL(requested[requested.length - 1]);
    const authUrls = wrapper.findAll('a.unified_vendor').map((a) => new URL(a.attributes('href')!));
    expect(authUrls).toHaveLength(INTEGRATIONS.length);
    wrapper.unmount();
    return { listUrl, authUrls };
}

describe('UnifiedVuejsDirectory categories and scopes (backward compatibility)', () => {
    beforeEach(() => {
        requested = [];
        vi.stubGlobal(
            'fetch',
            vi.fn(async (url: string) => {
                requested.push(url);
                return { ok: true, json: async () => INTEGRATIONS };
            })
        );
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    test('without categories or scopes: no filter, and auth links request no scopes (unchanged)', async () => {
        const { listUrl, authUrls } = await renderDirectory({});
        expect(listUrl.searchParams.has('categories')).toBe(false);
        expect(authUrls.map((url) => url.pathname)).toEqual(['/unified/integration/auth/ws_123/hubspot', '/unified/integration/auth/ws_123/greenhouse']);
        expect(authUrls.every((url) => !url.searchParams.has('scopes'))).toBe(true);
    });

    test('with categories: filters by them (unchanged)', async () => {
        const { listUrl } = await renderDirectory({ categories: ['crm'] });
        expect(listUrl.searchParams.get('categories')).toBe('crm');
    });

    test('with scopes only: filters by the categories of the scopes and requests the scopes', async () => {
        const { listUrl, authUrls } = await renderDirectory({ scopes: ['crm_contact_read', 'martech_list_read', 'webhook'] });
        expect(listUrl.searchParams.get('categories')).toBe('crm,martech');
        expect(authUrls[0].searchParams.get('scopes')).toBe('crm_contact_read,martech_list_read,webhook');
    });

    test('with categories and scopes: categories win', async () => {
        const { listUrl, authUrls } = await renderDirectory({ categories: ['ats'], scopes: ['crm_contact_read'] });
        expect(listUrl.searchParams.get('categories')).toBe('ats');
        expect(authUrls[0].searchParams.get('scopes')).toBe('crm_contact_read');
    });
});
