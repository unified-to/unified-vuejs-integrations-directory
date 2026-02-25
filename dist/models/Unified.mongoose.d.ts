export declare const schemaApiCall: {
    connection_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    integration_type: {
        type: StringConstructor;
        index: boolean;
    };
    external_xref: {
        type: StringConstructor;
        index: boolean;
    };
    name: {
        type: StringConstructor;
        index: boolean;
    };
    path: {
        type: StringConstructor;
    };
    size: {
        type: NumberConstructor;
    };
    status: {
        type: StringConstructor;
        index: boolean;
    };
    error: {
        type: StringConstructor;
    };
    ip_address: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        enum: string[];
    };
    method: {
        type: StringConstructor;
    };
    environment: {
        type: StringConstructor;
        index: boolean;
        default: string;
    };
    webhook_id: {
        type: any;
        ref: string;
    };
    is_billable: {
        type: BooleanConstructor;
    };
    user_agent: {
        type: StringConstructor;
    };
    unified_response_time: {
        type: NumberConstructor;
    };
    endapi_response_time: {
        type: NumberConstructor;
    };
};
export declare const schemaCategories: {};
export declare const schemaConnectionAuth: {
    token: {
        type: StringConstructor;
    };
    access_token: {
        type: StringConstructor;
    };
    refresh_token: {
        type: StringConstructor;
    };
    expiry_date: {
        type: DateConstructor;
    };
    expires_in: {
        type: NumberConstructor;
    };
    emails: {
        type: StringConstructor[];
    };
    name: {
        type: StringConstructor;
    };
    user_id: {
        type: StringConstructor;
    };
    app_id: {
        type: StringConstructor;
    };
    client_id: {
        type: StringConstructor;
    };
    client_secret: {
        type: StringConstructor;
    };
    consumer_key: {
        type: StringConstructor;
    };
    consumer_secret: {
        type: StringConstructor;
    };
    meta: {
        type: ObjectConstructor;
    };
    state: {
        type: StringConstructor;
    };
    other_auth_info: {
        type: StringConstructor[];
    };
    api_url: {
        type: StringConstructor;
    };
    authorize_url: {
        type: StringConstructor;
    };
    token_url: {
        type: StringConstructor;
    };
    refresh_url: {
        type: StringConstructor;
    };
    pem: {
        type: StringConstructor;
    };
    key: {
        type: StringConstructor;
    };
    refresh_token_expires_in: {
        type: NumberConstructor;
    };
    refresh_token_expires_date: {
        type: DateConstructor;
    };
    dev_api_key: {
        type: StringConstructor;
    };
};
export declare const schemaConnection: {
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    integration_type: {
        type: StringConstructor;
        index: boolean;
    };
    integration_name: {
        type: StringConstructor;
    };
    external_xref: {
        type: StringConstructor;
        index: boolean;
    };
    permissions: {
        type: StringConstructor[];
        enum: string[];
    };
    categories: {
        type: StringConstructor[];
        enum: string[];
        index: boolean;
    };
    auth: {
        type: {
            token: {
                type: StringConstructor;
            };
            access_token: {
                type: StringConstructor;
            };
            refresh_token: {
                type: StringConstructor;
            };
            expiry_date: {
                type: DateConstructor;
            };
            expires_in: {
                type: NumberConstructor;
            };
            emails: {
                type: StringConstructor[];
            };
            name: {
                type: StringConstructor;
            };
            user_id: {
                type: StringConstructor;
            };
            app_id: {
                type: StringConstructor;
            };
            client_id: {
                type: StringConstructor;
            };
            client_secret: {
                type: StringConstructor;
            };
            consumer_key: {
                type: StringConstructor;
            };
            consumer_secret: {
                type: StringConstructor;
            };
            meta: {
                type: ObjectConstructor;
            };
            state: {
                type: StringConstructor;
            };
            other_auth_info: {
                type: StringConstructor[];
            };
            api_url: {
                type: StringConstructor;
            };
            authorize_url: {
                type: StringConstructor;
            };
            token_url: {
                type: StringConstructor;
            };
            refresh_url: {
                type: StringConstructor;
            };
            pem: {
                type: StringConstructor;
            };
            key: {
                type: StringConstructor;
            };
            refresh_token_expires_in: {
                type: NumberConstructor;
            };
            refresh_token_expires_date: {
                type: DateConstructor;
            };
            dev_api_key: {
                type: StringConstructor;
            };
        };
    };
    is_paused: {
        type: BooleanConstructor;
    };
    auth_aws_arn: {
        type: StringConstructor;
    };
    environment: {
        type: StringConstructor;
        default: string;
    };
    auth_azure_keyvault_id: {
        type: StringConstructor;
    };
    auth_gcp_secret_name: {
        type: StringConstructor;
    };
    auth_hashi_vault_path: {
        type: StringConstructor;
    };
    last_healthy_at: {
        type: DateConstructor;
    };
    last_unhealthy_at: {
        type: DateConstructor;
    };
};
export declare const schemaIntegrationSupport: {
    methods: {
        type: ObjectConstructor;
    };
    inbound_fields: {
        type: ObjectConstructor;
    };
    outbound_fields: {
        type: ObjectConstructor;
    };
    webhook_events: {
        type: ObjectConstructor[];
    };
    raw_objects: {
        type: StringConstructor[];
    };
    slow_fields: {
        type: StringConstructor[];
    };
    from_webhook: {
        type: StringConstructor;
        enum: string[];
    };
    list_sort_by_name: {
        type: StringConstructor;
        enum: string[];
    };
    list_sort_by_created_at: {
        type: StringConstructor;
        enum: string[];
    };
    list_sort_by_updated_at: {
        type: StringConstructor;
        enum: string[];
    };
    list_updated_gte: {
        type: StringConstructor;
        enum: string[];
    };
    list_user_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_user_mentioned_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_customer_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_company_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_contact_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_application_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_candidate_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_deal_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_job_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_invoice_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_order: {
        type: StringConstructor;
        enum: string[];
    };
    list_query: {
        type: StringConstructor;
        enum: string[];
    };
    list_limit: {
        type: StringConstructor;
        enum: string[];
    };
    list_offset: {
        type: StringConstructor;
        enum: string[];
    };
    list_root_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_list_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_interview_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_location_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_collection_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_ticket_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_parent_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_account_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_item_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_space_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_channel_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_page_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_type: {
        type: StringConstructor;
        enum: string[];
    };
    list_link_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_project_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_item_variant_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_raw_fields: {
        type: StringConstructor;
        enum: string[];
    };
    list_student_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_class_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_instructor_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_course_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_teacher_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_repo_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_org_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_calendar_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_task_id: {
        type: StringConstructor;
        enum: string[];
    };
    search_twitter: {
        type: StringConstructor;
        enum: string[];
    };
    search_name: {
        type: StringConstructor;
        enum: string[];
    };
    search_linkedinurl: {
        type: StringConstructor;
        enum: string[];
    };
    search_email: {
        type: StringConstructor;
        enum: string[];
    };
    search_domain: {
        type: StringConstructor;
        enum: string[];
    };
    list_event_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_start_gte: {
        type: StringConstructor;
        enum: string[];
    };
    list_end_lt: {
        type: StringConstructor;
        enum: string[];
    };
    list_lead_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_call_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_document_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_payment_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_status: {
        type: StringConstructor;
        enum: string[];
    };
    list_branch_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_pipeline_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_category_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_package_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_expand: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_parent_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_project_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_company_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_task_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_channel_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_calendar_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_event_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_updated_gte: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_limit: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_channel_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_parent_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_contact_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_deal_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_company_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_user_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_user_mentioned_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_type: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_ticket_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_expand: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_status: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_start_gte: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_end_lt: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_task_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_space_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_repo_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_project_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_pipeline_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_page_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_org_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_location_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_list_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_job_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_item_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_fields: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_event_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_customer_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_collection_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_candidate_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_call_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_branch_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_application_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_item_variant_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_calendar_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_lead_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_payslip_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_benefit_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_saleschannel_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_saleschannel_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_campaign_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_ad_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_group_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_campaign_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_ad_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_group_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_form_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_form_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_form_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_order_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_order_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_order_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_carrier_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_carrier_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_carrier_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_shipment_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_shipment_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_shipment_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_label_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_label_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_label_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_member_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_member_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_member_id: {
        type: StringConstructor;
        enum: string[];
    };
    list_content_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_course_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_course_id: {
        type: StringConstructor;
        enum: string[];
    };
    virtual_webhook_student_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_student_id: {
        type: StringConstructor;
        enum: string[];
    };
    native_webhook_type: {
        type: StringConstructor;
        enum: string[];
    };
};
export declare const schemaInvoice: {};
export declare const schemaIssue: {
    title: {
        type: StringConstructor;
    };
    status: {
        type: StringConstructor;
        enum: string[];
    };
    url: {
        type: StringConstructor;
    };
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    type: {
        type: StringConstructor[];
    };
    resolution_time: {
        type: NumberConstructor;
    };
    ticket_ref: {
        type: StringConstructor;
        index: boolean;
    };
    size: {
        type: NumberConstructor;
    };
    importance: {
        type: NumberConstructor;
    };
};
export declare const schemaNotification: {
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    description: {
        type: StringConstructor;
    };
    user_id: {
        type: any;
        ref: string;
    };
    user_name: {
        type: StringConstructor;
    };
    workspace_name: {
        type: StringConstructor;
    };
    webhook_id: {
        type: any;
        ref: string;
    };
    connection_id: {
        type: any;
        ref: string;
    };
    integration_type: {
        type: StringConstructor;
    };
    integration_name: {
        type: StringConstructor;
    };
    sent_at: {
        type: DateConstructor;
    };
    event: {
        type: StringConstructor;
        enum: string[];
    };
};
export declare const schemaUser: {
    name: {
        type: StringConstructor;
    };
    email: {
        type: StringConstructor;
        index: boolean;
    };
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    workspace_ids: {
        type: any[];
        index: boolean;
        ref: string;
    };
    environment: {
        type: StringConstructor;
        default: string;
    };
    meta: {
        type: ObjectConstructor;
    };
};
export declare const schemaWebhook: {
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    connection_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    hook_url: {
        type: StringConstructor;
    };
    object_type: {
        type: StringConstructor;
        enum: string[];
    };
    interval: {
        type: NumberConstructor;
    };
    checked_at: {
        type: DateConstructor;
    };
    integration_type: {
        type: StringConstructor;
    };
    environment: {
        type: StringConstructor;
        default: string;
    };
    event: {
        type: StringConstructor;
        enum: string[];
    };
    runs: {
        type: StringConstructor[];
    };
    fields: {
        type: StringConstructor;
    };
    webhook_type: {
        type: StringConstructor;
        enum: string[];
    };
    meta: {
        type: ObjectConstructor;
    };
    is_healthy: {
        type: BooleanConstructor;
    };
    page_max_limit: {
        type: NumberConstructor;
    };
    filters: {
        type: ObjectConstructor;
    };
    db_type: {
        type: StringConstructor;
        enum: string[];
    };
    db_url: {
        type: StringConstructor;
    };
    db_schema: {
        type: StringConstructor;
    };
    db_name_prefix: {
        type: StringConstructor;
    };
    is_paused: {
        type: BooleanConstructor;
    };
};
export declare const schemaWebhookData: {
    data: {
        type: ObjectConstructor[];
    };
    webhook: {
        type: {
            workspace_id: {
                type: any;
                index: boolean;
                ref: string;
            };
            connection_id: {
                type: any;
                index: boolean;
                ref: string;
            };
            hook_url: {
                type: StringConstructor;
            };
            object_type: {
                type: StringConstructor;
                enum: string[];
            };
            interval: {
                type: NumberConstructor;
            };
            checked_at: {
                type: DateConstructor;
            };
            integration_type: {
                type: StringConstructor;
            };
            environment: {
                type: StringConstructor;
                default: string;
            };
            event: {
                type: StringConstructor;
                enum: string[];
            };
            runs: {
                type: StringConstructor[];
            };
            fields: {
                type: StringConstructor;
            };
            webhook_type: {
                type: StringConstructor;
                enum: string[];
            };
            meta: {
                type: ObjectConstructor;
            };
            is_healthy: {
                type: BooleanConstructor;
            };
            page_max_limit: {
                type: NumberConstructor;
            };
            filters: {
                type: ObjectConstructor;
            };
            db_type: {
                type: StringConstructor;
                enum: string[];
            };
            db_url: {
                type: StringConstructor;
            };
            db_schema: {
                type: StringConstructor;
            };
            db_name_prefix: {
                type: StringConstructor;
            };
            is_paused: {
                type: BooleanConstructor;
            };
        };
    };
    nonce: {
        type: StringConstructor;
    };
    sig: {
        type: StringConstructor;
    };
    sig256: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        enum: string[];
    };
    external_xref: {
        type: StringConstructor;
    };
};
export declare const schemaWorkspaceIntegrationAuth: {
    client_id: {
        type: any;
        index: boolean;
    };
    client_secret: {
        type: StringConstructor;
    };
    consumer_key: {
        type: StringConstructor;
    };
    consumer_secret: {
        type: StringConstructor;
    };
    pem: {
        type: StringConstructor;
    };
    key: {
        type: StringConstructor;
    };
    dev_api_key: {
        type: StringConstructor;
    };
};
export declare const schemaWorkspaceIntegration: {
    created_at: {
        type: DateConstructor;
    };
    updated_at: {
        type: DateConstructor;
    };
    workspace_id: {
        type: any;
        index: boolean;
        ref: string;
    };
    integration_type: {
        type: StringConstructor;
    };
    client_id: {
        type: StringConstructor;
    };
    client_secret: {
        type: StringConstructor;
    };
    consumer_key: {
        type: StringConstructor;
    };
    consumer_secret: {
        type: StringConstructor;
    };
    is_active: {
        type: BooleanConstructor;
    };
    api_url: {
        type: StringConstructor;
    };
    authorize_url: {
        type: StringConstructor;
    };
    token_url: {
        type: StringConstructor;
    };
    refresh_url: {
        type: StringConstructor;
    };
    base_url: {
        type: StringConstructor;
    };
    pem: {
        type: StringConstructor;
    };
    key: {
        type: StringConstructor;
    };
    environment: {
        type: StringConstructor;
        default: string;
    };
    categories: {
        type: StringConstructor[];
        enum: string[];
    };
    dev_api_key: {
        type: StringConstructor;
    };
    overriden_scopes: {
        type: ObjectConstructor;
    };
    auth: {
        type: {
            client_id: {
                type: any;
                index: boolean;
            };
            client_secret: {
                type: StringConstructor;
            };
            consumer_key: {
                type: StringConstructor;
            };
            consumer_secret: {
                type: StringConstructor;
            };
            pem: {
                type: StringConstructor;
            };
            key: {
                type: StringConstructor;
            };
            dev_api_key: {
                type: StringConstructor;
            };
        };
    };
    auth_aws_arn: {
        type: StringConstructor;
    };
    auth_azure_keyvault_id: {
        type: StringConstructor;
    };
    auth_gcp_secret_name: {
        type: StringConstructor;
    };
    auth_hashi_vault_path: {
        type: StringConstructor;
    };
};
export declare const schemaWorkspace: {
    name: {
        type: StringConstructor;
    };
    admin_ids: {
        type: any[];
        index: boolean;
        ref: string;
    };
    invited_emails: {
        type: StringConstructor[];
        index: boolean;
    };
    pay_user_id: {
        type: StringConstructor;
    };
    plan: {
        type: StringConstructor;
    };
    stripe_customer: {
        type: StringConstructor;
    };
    stripe_subscriptions: {
        type: StringConstructor[];
    };
    stripe_prices: {
        type: StringConstructor[];
    };
    secret: {
        type: StringConstructor;
    };
    integrations: {
        type: {
            created_at: {
                type: DateConstructor;
            };
            updated_at: {
                type: DateConstructor;
            };
            workspace_id: {
                type: any;
                index: boolean;
                ref: string;
            };
            integration_type: {
                type: StringConstructor;
            };
            client_id: {
                type: StringConstructor;
            };
            client_secret: {
                type: StringConstructor;
            };
            consumer_key: {
                type: StringConstructor;
            };
            consumer_secret: {
                type: StringConstructor;
            };
            is_active: {
                type: BooleanConstructor;
            };
            api_url: {
                type: StringConstructor;
            };
            authorize_url: {
                type: StringConstructor;
            };
            token_url: {
                type: StringConstructor;
            };
            refresh_url: {
                type: StringConstructor;
            };
            base_url: {
                type: StringConstructor;
            };
            pem: {
                type: StringConstructor;
            };
            key: {
                type: StringConstructor;
            };
            environment: {
                type: StringConstructor;
                default: string;
            };
            categories: {
                type: StringConstructor[];
                enum: string[];
            };
            dev_api_key: {
                type: StringConstructor;
            };
            overriden_scopes: {
                type: ObjectConstructor;
            };
            auth: {
                type: {
                    client_id: {
                        type: any;
                        index: boolean;
                    };
                    client_secret: {
                        type: StringConstructor;
                    };
                    consumer_key: {
                        type: StringConstructor;
                    };
                    consumer_secret: {
                        type: StringConstructor;
                    };
                    pem: {
                        type: StringConstructor;
                    };
                    key: {
                        type: StringConstructor;
                    };
                    dev_api_key: {
                        type: StringConstructor;
                    };
                };
            };
            auth_aws_arn: {
                type: StringConstructor;
            };
            auth_azure_keyvault_id: {
                type: StringConstructor;
            };
            auth_gcp_secret_name: {
                type: StringConstructor;
            };
            auth_hashi_vault_path: {
                type: StringConstructor;
            };
        }[];
    };
    ip_addresses: {
        type: StringConstructor[];
    };
    aws_region: {
        type: StringConstructor;
    };
    aws_key: {
        type: StringConstructor;
    };
    aws_secret: {
        type: StringConstructor;
    };
    datadog_apikey: {
        type: StringConstructor;
    };
    datadog_site: {
        type: StringConstructor;
    };
    environments: {
        type: StringConstructor[];
    };
    add_ons: {
        type: StringConstructor[];
    };
    checklist: {
        type: ObjectConstructor;
    };
    plan_term: {
        type: StringConstructor;
        enum: string[];
        default: string;
    };
    stripe_canceling_at: {
        type: DateConstructor;
    };
    domain: {
        type: StringConstructor;
    };
    event_webhook_url: {
        type: StringConstructor;
    };
    event_webhook_events: {
        type: StringConstructor[];
        enum: string[];
    };
    custom_auth_domain: {
        type: StringConstructor;
    };
    custom_auth_domain_valid: {
        type: BooleanConstructor;
    };
    custom_api_domain: {
        type: StringConstructor;
    };
    slow_fields_opt_in: {
        type: BooleanConstructor;
    };
    notion_verification_token: {
        type: StringConstructor;
    };
    favicon_url: {
        type: StringConstructor;
    };
    is_baa: {
        type: BooleanConstructor;
    };
    saml_integration_type: {
        type: StringConstructor;
    };
    saml_idp_url: {
        type: StringConstructor;
    };
    saml_idp_entity_id: {
        type: StringConstructor;
    };
    saml_pem: {
        type: StringConstructor;
    };
    saml_only_login: {
        type: BooleanConstructor;
    };
    azure_keyvault_url: {
        type: StringConstructor;
    };
    azure_tenant_id: {
        type: StringConstructor;
    };
    azure_client_id: {
        type: StringConstructor;
    };
    azure_client_secret: {
        type: StringConstructor;
    };
    gcp_project_id: {
        type: StringConstructor;
    };
    gcp_client_email: {
        type: StringConstructor;
    };
    gcp_private_key: {
        type: StringConstructor;
    };
    hashicorp_vault_url: {
        type: StringConstructor;
    };
    hashicorp_vault_token: {
        type: StringConstructor;
    };
    hashicorp_vault_namespace: {
        type: StringConstructor;
    };
    hashicorp_vault_kv_mount: {
        type: StringConstructor;
    };
    hashicorp_vault_kv_version: {
        type: StringConstructor;
    };
    grafana_apikey: {
        type: StringConstructor;
    };
    grafana_site: {
        type: StringConstructor;
    };
    clickhouse_url: {
        type: StringConstructor;
    };
    clickhouse_username: {
        type: StringConstructor;
    };
    clickhouse_password: {
        type: StringConstructor;
    };
};
