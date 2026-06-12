import { IIntegration, TIntegrationCategory } from '../models/Unified';
import { PropType } from 'vue';
declare type UnifiedTheme = 'dark' | 'light' | 'auto';
declare const _default: import("vue").DefineComponent<{
    workspace_id: {
        type: StringConstructor;
        required: true;
    };
    categories: PropType<string[]>;
    external_xref: StringConstructor;
    state: StringConstructor;
    scopes: PropType<string[]>;
    success_redirect: StringConstructor;
    failure_redirect: StringConstructor;
    nostyle: BooleanConstructor;
    environment: StringConstructor;
    lang: StringConstructor;
    notabs: BooleanConstructor;
    nocategories: BooleanConstructor;
    dc: StringConstructor;
    theme: StringConstructor;
}, unknown, {
    search: string;
    INTEGRATIONS: IIntegration[];
    selectedCategory: "passthrough" | "hris" | "ats" | "auth" | "crm" | "enrich" | "martech" | "ticketing" | "uc" | "accounting" | "storage" | "commerce" | "payment" | "genai" | "messaging" | "kms" | "task" | "scim" | "lms" | "repo" | "metadata" | "calendar" | "verification" | "ads" | "forms" | "shipping" | "assessment" | "signing" | "clubs" | "datastore" | undefined;
    CATEGORIES: ("passthrough" | "hris" | "ats" | "auth" | "crm" | "enrich" | "martech" | "ticketing" | "uc" | "accounting" | "storage" | "commerce" | "payment" | "genai" | "messaging" | "kms" | "task" | "scim" | "lms" | "repo" | "metadata" | "calendar" | "verification" | "ads" | "forms" | "shipping" | "assessment" | "signing" | "clubs" | "datastore")[];
    CATEGORY_MAP: Record<"passthrough" | "hris" | "ats" | "auth" | "crm" | "enrich" | "martech" | "ticketing" | "uc" | "accounting" | "storage" | "commerce" | "payment" | "genai" | "messaging" | "kms" | "task" | "scim" | "lms" | "repo" | "metadata" | "calendar" | "verification" | "ads" | "forms" | "shipping" | "assessment" | "signing" | "clubs" | "datastore", string>;
}, {
    API_URL(): string;
    resolvedTheme(): UnifiedTheme;
    themeClass(): string;
}, {
    filter(integrations: IIntegration[]): IIntegration[];
    unified_get_auth_url(integration: IIntegration): string;
    unified_select_category(category?: TIntegrationCategory): void;
    load_data(url: string): Promise<any>;
    setup(): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    workspace_id: {
        type: StringConstructor;
        required: true;
    };
    categories: PropType<string[]>;
    external_xref: StringConstructor;
    state: StringConstructor;
    scopes: PropType<string[]>;
    success_redirect: StringConstructor;
    failure_redirect: StringConstructor;
    nostyle: BooleanConstructor;
    environment: StringConstructor;
    lang: StringConstructor;
    notabs: BooleanConstructor;
    nocategories: BooleanConstructor;
    dc: StringConstructor;
    theme: StringConstructor;
}>>, {
    nostyle: boolean;
    notabs: boolean;
    nocategories: boolean;
}>;
export default _default;
