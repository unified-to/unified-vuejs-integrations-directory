<template>
    <div class="unified">
        <div class="unified_menu" v-if="!notabs && CATEGORIES.length > 0 && filter(INTEGRATIONS).length">
            <button class="unified_button unified_button_all" :class="selectedCategory ? '' : 'active'" @click="unified_select_category()">All</button>
            <button
                v-for="cat of CATEGORIES"
                v-bind:key="cat"
                :class="`unified_button unified_button_${cat} ${selectedCategory === cat ? 'active' : ''}`"
                @click="unified_select_category(cat)"
            >
                {{ CATEGORY_MAP[cat as TIntegrationCategoryType] }}
            </button>
        </div>
        <div class="unified_vendors">
            <a v-for="integration of filter(INTEGRATIONS)" :href="unified_get_auth_url(integration)" v-bind:key="integration.type" class="unified_vendor">
                <img :src="`https://api.unified.to${integration.logo_url}`" class="unified_image" />
                <div class="unified_vendor_inner">
                    <div class="unified_vendor_name">{{ integration.name }}</div>
                    <div
                        v-if="!nocategories"
                        class="unified_vendor_cats"
                        v-for="cat of integration.categories.filter((c) => !CATEGORIES || CATEGORIES.indexOf(c) > -1).filter((c) => CATEGORY_MAP[c as TIntegrationCategoryType])"
                        v-bind:key="cat"
                    >
                        <span>{{ CATEGORY_MAP[cat as TIntegrationCategoryType] }}</span>
                    </div>
                </div>
            </a>
            <div v-if="!filter(INTEGRATIONS).length">No integrations available</div>
        </div>
    </div>
</template>

<script lang="ts">
import { IIntegration, TIntegrationCategory } from '../models/Unified';
import { PropType, defineComponent } from 'vue';

const API_URL = 'https://api.unified.to';

type TIntegrationCategoryType = Exclude<TIntegrationCategory, 'auth' | 'passthrough'>;

export default defineComponent({
    name: 'IntegrationsDirectory',
    props: {
        workspace_id: {
            type: String,
            required: true,
        },
        categories: Array as PropType<string[]>,
        external_xref: String,
        state: String,
        scopes: Array as PropType<string[]>,
        success_redirect: String,
        failure_redirect: String,
        nostyle: Boolean,
        environment: String,
        lang: String,
        nocategories: Boolean,
        notabs: Boolean,
    },
    watch: {
        async workspaceId() {
            await this.setup();
        },
        async 'categories.length'() {
            await this.setup();
        },
        async environment() {
            await this.setup();
        },
        async lang() {
            await this.setup();
        },
        async 'scopes.length'() {
            await this.setup();
        },
        async state() {
            await this.setup();
        },
        async external_xref() {
            await this.setup();
        },
    },
    data() {
        return {
            INTEGRATIONS: [] as IIntegration[],
            selectedCategory: undefined as TIntegrationCategory | undefined,
            CATEGORIES: [] as TIntegrationCategory[],
            CATEGORY_MAP: {
                crm: 'CRM',
                martech: 'Marketing',
                ticketing: 'Ticketing',
                uc: 'Unified Communications',
                enrich: 'Enrichment',
                ats: 'ATS',
                hris: 'HR',
            } as { [path in TIntegrationCategoryType]: string },
        };
    },
    methods: {
        filter(integrations: IIntegration[]) {
            return integrations?.filter((integration) => !this.selectedCategory || integration.categories.includes(this.selectedCategory)) || [];
        },
        unified_get_auth_url(integration: IIntegration) {
            let url = `${API_URL}/unified/integration/auth/${this.workspace_id}/${integration.type}?redirect=1`;

            if (this.external_xref) {
                url += `&user_xref=${encodeURIComponent(this.external_xref)}`;
            }
            if (this.state) {
                url += `&state=${encodeURIComponent(this.state)}`;
            }
            if (this.scopes?.length) {
                url += `&scopes=${encodeURIComponent(this.scopes.join(','))}`;
            }
            if (this.environment && this.environment !== 'Production') {
                url += `&env=${encodeURIComponent(this.environment)}`;
            }
            if (this.lang) {
                url += `&lang=${this.lang}`;
            }

            // if (this.success_redirect) {
            url += `&success_redirect=${encodeURIComponent(this.success_redirect || window.location.href)}`;
            // }
            // if (this.failure_redirect) {
            url += `&failure_redirect=${encodeURIComponent(this.failure_redirect || window.location.href)}`;
            // }
            return url;
        },
        unified_select_category(category?: TIntegrationCategory) {
            this.selectedCategory = category;
        },
        async load_data(url: string) {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                return response.json();
            } catch {
                return;
            }
        },

        async setup() {
            this.selectedCategory = undefined;
            const url = `${API_URL}/unified/integration/workspace/${this.workspace_id}?summary=1${
                this.categories?.length ? '&categories=' + this.categories.join(',') : ''
            }${this.environment === 'Production' || !this.environment ? '' : '&env=' + encodeURIComponent(this.environment)}`;

            this.INTEGRATIONS = ((await this.load_data(url)) || []) as IIntegration[];

            this.CATEGORIES = [];
            this.INTEGRATIONS.forEach((integration) => {
                integration.categories?.forEach((c) => {
                    if (this.CATEGORY_MAP[c as TIntegrationCategoryType] && (!this.categories?.length || this.categories.includes(c))) {
                        this.CATEGORIES.push(c);
                    }
                });
            });
            this.CATEGORIES = [...new Set(this.CATEGORIES)];
            if (this.CATEGORIES.length === 1) {
                this.CATEGORIES = [];
            } else {
                this.CATEGORIES = this.CATEGORIES.sort(function (a, b) {
                    return a.localeCompare(b);
                });
            }

            if (!this.nostyle) {
                const link = document.createElement('link');
                link.href = `${API_URL}/docs/unified.css`;
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            }
        },
    },
    async mounted() {
        await this.setup();
    },
});
</script>
