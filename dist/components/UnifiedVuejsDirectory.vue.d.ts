import { IIntegration, TIntegrationCategory } from '../models/Unified';
import { PropType } from 'vue';
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
}, unknown, {
    search: string;
    API_URL: string;
    INTEGRATIONS: IIntegration[];
    selectedCategory: "passthrough" | "hris" | "ats" | "auth" | "crm" | "enrich" | "martech" | "ticketing" | "uc" | "accounting" | "storage" | "commerce" | "payment" | "genai" | "messaging" | "kms" | "task" | "scim" | "lms" | "repo" | "metadata" | "calendar" | "verification" | "ads" | "forms" | "shipping" | "assessment" | undefined;
    CATEGORIES: ("passthrough" | "hris" | "ats" | "auth" | "crm" | "enrich" | "martech" | "ticketing" | "uc" | "accounting" | "storage" | "commerce" | "payment" | "genai" | "messaging" | "kms" | "task" | "scim" | "lms" | "repo" | "metadata" | "calendar" | "verification" | "ads" | "forms" | "shipping" | "assessment")[];
    CATEGORY_MAP: Record<"passthrough" | "hris" | "ats" | "auth" | "crm" | "enrich" | "martech" | "ticketing" | "uc" | "accounting" | "storage" | "commerce" | "payment" | "genai" | "messaging" | "kms" | "task" | "scim" | "lms" | "repo" | "metadata" | "calendar" | "verification" | "ads" | "forms" | "shipping" | "assessment", string>;
}, {}, {
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
}>>, {
    nostyle: boolean;
    notabs: boolean;
    nocategories: boolean;
}>;
export default _default;
