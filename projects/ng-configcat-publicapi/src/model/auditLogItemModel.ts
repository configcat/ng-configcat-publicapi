/**
 * ConfigCat Public Management API
 * The purpose of this API is to access the ConfigCat platform programmatically. You can **Create**, **Read**, **Update** and **Delete** any entities like **Feature Flags, Configs, Environments** or **Products** within ConfigCat.  **Base API URL**: https://api.configcat.com  If you prefer the swagger documentation, you can find it here: [Swagger UI](https://api.configcat.com/swagger).  The API is based on HTTP REST, uses resource-oriented URLs, status codes and supports JSON  format.   **Important:** Do not use this API for accessing and evaluating feature flag values. Use the [SDKs](https://configcat.com/docs/sdk-reference/overview) or the [ConfigCat Proxy](https://configcat.com/docs/advanced/proxy/proxy-overview/) instead.  # OpenAPI Specification  The complete specification is publicly available in the following formats:  - [OpenAPI v3](https://api.configcat.com/docs/v1/swagger.json) - [Swagger v2](https://api.configcat.com/docs/v1/swagger.v2.json)  You can use it to generate client libraries in various languages with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) to interact with this API.  # Authentication This API uses the [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication).   <!-- ReDoc-Inject: <security-definitions> -->  # Throttling and rate limits All the rate limited API calls are returning information about the current rate limit period in the following HTTP headers:  | Header | Description | | :- | :- | | X-Rate-Limit-Remaining | The maximum number of requests remaining in the current rate limit period. | | X-Rate-Limit-Reset     | The time when the current rate limit period resets.        |  When the rate limit is exceeded by a request, the API returns with a `HTTP 429 - Too many requests` status along with a `Retry-After` HTTP header. 
 *
 * The version of the OpenAPI document: v1
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface AuditLogItemModel { 
    auditLogId?: number;
    auditLogDateTime?: string;
    auditLogTypeEnum?: AuditLogItemModel.AuditLogTypeEnumEnum;
    changeSetId?: string | null;
    truncated?: boolean;
    auditLogType?: string | null;
    userEmail?: string | null;
    userName?: string | null;
    where?: string | null;
    why?: string | null;
    actionTarget?: string | null;
    details?: string | null;
}
export namespace AuditLogItemModel {
    export type AuditLogTypeEnumEnum = 'productCreated' | 'productChanged' | 'productOwnershipTransferred' | 'productDeleted' | 'productsReordered' | 'teamMemberInvited' | 'teamMemberInvitationRevoked' | 'teamMemberJoined' | 'teamMemberPermissionGroupChanged' | 'teamMemberRemoved' | 'teamMemberLeft' | 'teamMemberInvitationChanged' | 'teamMemberInvitationResent' | 'teamMemberInvitationRejected' | 'configCreated' | 'configChanged' | 'configDeleted' | 'configsReordered' | 'environmentCreated' | 'environmentChanged' | 'environmentDeleted' | 'environmentsReordered' | 'settingCreated' | 'settingChanged' | 'settingDeleted' | 'settingsReordered' | 'settingValueChanged' | 'webHookCreated' | 'webHookChanged' | 'webHookDeleted' | 'permissionGroupCreated' | 'permissionGroupChanged' | 'permissionGroupDeleted' | 'permissionGroupDefault' | 'apiKeyAdded' | 'apiKeyRemoved' | 'integrationAdded' | 'integrationChanged' | 'integrationRemoved' | 'apiKeyConnected' | 'integrationLinkAdded' | 'integrationLinkRemoved' | 'organizationAdded' | 'organizationRemoved' | 'organizationChanged' | 'organizationSubscriptionTypeChanged' | 'organizationAdminChanged' | 'organizationAdminLeft' | 'organizationAdminDisabled2FA' | 'tagAdded' | 'tagChanged' | 'tagRemoved' | 'settingTagAdded' | 'settingTagRemoved' | 'publicApiAccessTokenAdded' | 'publicApiAccessTokenRemoved' | 'domainAdded' | 'domainVerified' | 'domainRemoved' | 'domainSamlConfigured' | 'domainSamlDeleted' | 'autoProvisioningConfigurationChanged' | 'samlIdpConfigurationAdded' | 'samlIdpConfigurationRemoved' | 'samlIdpConfigurationUpdated' | 'organizationMemberJoined' | 'organizationMemberProductJoinRequested' | 'organizationMemberProductJoinRequestRejected' | 'organizationMemberProductJoinRequestApproved' | 'codeReferencesUploaded' | 'codeReferenceDeleted' | 'codeReferenceStaleBranchDeleted' | 'segmentCreated' | 'segmentChanged' | 'segmentDeleted' | 'webhookSigningKeyDeleted' | 'webhookSigningKeyCreated';
    export const AuditLogTypeEnumEnum = {
        ProductCreated: 'productCreated' as AuditLogTypeEnumEnum,
        ProductChanged: 'productChanged' as AuditLogTypeEnumEnum,
        ProductOwnershipTransferred: 'productOwnershipTransferred' as AuditLogTypeEnumEnum,
        ProductDeleted: 'productDeleted' as AuditLogTypeEnumEnum,
        ProductsReordered: 'productsReordered' as AuditLogTypeEnumEnum,
        TeamMemberInvited: 'teamMemberInvited' as AuditLogTypeEnumEnum,
        TeamMemberInvitationRevoked: 'teamMemberInvitationRevoked' as AuditLogTypeEnumEnum,
        TeamMemberJoined: 'teamMemberJoined' as AuditLogTypeEnumEnum,
        TeamMemberPermissionGroupChanged: 'teamMemberPermissionGroupChanged' as AuditLogTypeEnumEnum,
        TeamMemberRemoved: 'teamMemberRemoved' as AuditLogTypeEnumEnum,
        TeamMemberLeft: 'teamMemberLeft' as AuditLogTypeEnumEnum,
        TeamMemberInvitationChanged: 'teamMemberInvitationChanged' as AuditLogTypeEnumEnum,
        TeamMemberInvitationResent: 'teamMemberInvitationResent' as AuditLogTypeEnumEnum,
        TeamMemberInvitationRejected: 'teamMemberInvitationRejected' as AuditLogTypeEnumEnum,
        ConfigCreated: 'configCreated' as AuditLogTypeEnumEnum,
        ConfigChanged: 'configChanged' as AuditLogTypeEnumEnum,
        ConfigDeleted: 'configDeleted' as AuditLogTypeEnumEnum,
        ConfigsReordered: 'configsReordered' as AuditLogTypeEnumEnum,
        EnvironmentCreated: 'environmentCreated' as AuditLogTypeEnumEnum,
        EnvironmentChanged: 'environmentChanged' as AuditLogTypeEnumEnum,
        EnvironmentDeleted: 'environmentDeleted' as AuditLogTypeEnumEnum,
        EnvironmentsReordered: 'environmentsReordered' as AuditLogTypeEnumEnum,
        SettingCreated: 'settingCreated' as AuditLogTypeEnumEnum,
        SettingChanged: 'settingChanged' as AuditLogTypeEnumEnum,
        SettingDeleted: 'settingDeleted' as AuditLogTypeEnumEnum,
        SettingsReordered: 'settingsReordered' as AuditLogTypeEnumEnum,
        SettingValueChanged: 'settingValueChanged' as AuditLogTypeEnumEnum,
        WebHookCreated: 'webHookCreated' as AuditLogTypeEnumEnum,
        WebHookChanged: 'webHookChanged' as AuditLogTypeEnumEnum,
        WebHookDeleted: 'webHookDeleted' as AuditLogTypeEnumEnum,
        PermissionGroupCreated: 'permissionGroupCreated' as AuditLogTypeEnumEnum,
        PermissionGroupChanged: 'permissionGroupChanged' as AuditLogTypeEnumEnum,
        PermissionGroupDeleted: 'permissionGroupDeleted' as AuditLogTypeEnumEnum,
        PermissionGroupDefault: 'permissionGroupDefault' as AuditLogTypeEnumEnum,
        ApiKeyAdded: 'apiKeyAdded' as AuditLogTypeEnumEnum,
        ApiKeyRemoved: 'apiKeyRemoved' as AuditLogTypeEnumEnum,
        IntegrationAdded: 'integrationAdded' as AuditLogTypeEnumEnum,
        IntegrationChanged: 'integrationChanged' as AuditLogTypeEnumEnum,
        IntegrationRemoved: 'integrationRemoved' as AuditLogTypeEnumEnum,
        ApiKeyConnected: 'apiKeyConnected' as AuditLogTypeEnumEnum,
        IntegrationLinkAdded: 'integrationLinkAdded' as AuditLogTypeEnumEnum,
        IntegrationLinkRemoved: 'integrationLinkRemoved' as AuditLogTypeEnumEnum,
        OrganizationAdded: 'organizationAdded' as AuditLogTypeEnumEnum,
        OrganizationRemoved: 'organizationRemoved' as AuditLogTypeEnumEnum,
        OrganizationChanged: 'organizationChanged' as AuditLogTypeEnumEnum,
        OrganizationSubscriptionTypeChanged: 'organizationSubscriptionTypeChanged' as AuditLogTypeEnumEnum,
        OrganizationAdminChanged: 'organizationAdminChanged' as AuditLogTypeEnumEnum,
        OrganizationAdminLeft: 'organizationAdminLeft' as AuditLogTypeEnumEnum,
        OrganizationAdminDisabled2Fa: 'organizationAdminDisabled2FA' as AuditLogTypeEnumEnum,
        TagAdded: 'tagAdded' as AuditLogTypeEnumEnum,
        TagChanged: 'tagChanged' as AuditLogTypeEnumEnum,
        TagRemoved: 'tagRemoved' as AuditLogTypeEnumEnum,
        SettingTagAdded: 'settingTagAdded' as AuditLogTypeEnumEnum,
        SettingTagRemoved: 'settingTagRemoved' as AuditLogTypeEnumEnum,
        PublicApiAccessTokenAdded: 'publicApiAccessTokenAdded' as AuditLogTypeEnumEnum,
        PublicApiAccessTokenRemoved: 'publicApiAccessTokenRemoved' as AuditLogTypeEnumEnum,
        DomainAdded: 'domainAdded' as AuditLogTypeEnumEnum,
        DomainVerified: 'domainVerified' as AuditLogTypeEnumEnum,
        DomainRemoved: 'domainRemoved' as AuditLogTypeEnumEnum,
        DomainSamlConfigured: 'domainSamlConfigured' as AuditLogTypeEnumEnum,
        DomainSamlDeleted: 'domainSamlDeleted' as AuditLogTypeEnumEnum,
        AutoProvisioningConfigurationChanged: 'autoProvisioningConfigurationChanged' as AuditLogTypeEnumEnum,
        SamlIdpConfigurationAdded: 'samlIdpConfigurationAdded' as AuditLogTypeEnumEnum,
        SamlIdpConfigurationRemoved: 'samlIdpConfigurationRemoved' as AuditLogTypeEnumEnum,
        SamlIdpConfigurationUpdated: 'samlIdpConfigurationUpdated' as AuditLogTypeEnumEnum,
        OrganizationMemberJoined: 'organizationMemberJoined' as AuditLogTypeEnumEnum,
        OrganizationMemberProductJoinRequested: 'organizationMemberProductJoinRequested' as AuditLogTypeEnumEnum,
        OrganizationMemberProductJoinRequestRejected: 'organizationMemberProductJoinRequestRejected' as AuditLogTypeEnumEnum,
        OrganizationMemberProductJoinRequestApproved: 'organizationMemberProductJoinRequestApproved' as AuditLogTypeEnumEnum,
        CodeReferencesUploaded: 'codeReferencesUploaded' as AuditLogTypeEnumEnum,
        CodeReferenceDeleted: 'codeReferenceDeleted' as AuditLogTypeEnumEnum,
        CodeReferenceStaleBranchDeleted: 'codeReferenceStaleBranchDeleted' as AuditLogTypeEnumEnum,
        SegmentCreated: 'segmentCreated' as AuditLogTypeEnumEnum,
        SegmentChanged: 'segmentChanged' as AuditLogTypeEnumEnum,
        SegmentDeleted: 'segmentDeleted' as AuditLogTypeEnumEnum,
        WebhookSigningKeyDeleted: 'webhookSigningKeyDeleted' as AuditLogTypeEnumEnum,
        WebhookSigningKeyCreated: 'webhookSigningKeyCreated' as AuditLogTypeEnumEnum
    };
}


