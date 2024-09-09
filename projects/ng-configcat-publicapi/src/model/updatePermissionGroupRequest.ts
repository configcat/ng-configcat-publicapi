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
import { EnvironmentAccessType } from './environmentAccessType';
import { CreateOrUpdateEnvironmentAccessModel } from './createOrUpdateEnvironmentAccessModel';
import { AccessType } from './accessType';


export interface UpdatePermissionGroupRequest { 
    /**
     * Name of the Permission Group.
     */
    name?: string | null;
    /**
     * Group members can manage team members.
     */
    canManageMembers?: boolean | null;
    /**
     * Group members can create/update Configs.
     */
    canCreateOrUpdateConfig?: boolean | null;
    /**
     * Group members can delete Configs.
     */
    canDeleteConfig?: boolean | null;
    /**
     * Group members can create/update Environments.
     */
    canCreateOrUpdateEnvironment?: boolean | null;
    /**
     * Group members can delete Environments.
     */
    canDeleteEnvironment?: boolean | null;
    /**
     * Group members can create/update Feature Flags and Settings.
     */
    canCreateOrUpdateSetting?: boolean | null;
    /**
     * Group members can attach/detach Tags to Feature Flags and Settings.
     */
    canTagSetting?: boolean | null;
    /**
     * Group members can delete Feature Flags and Settings.
     */
    canDeleteSetting?: boolean | null;
    /**
     * Group members can create/update Tags.
     */
    canCreateOrUpdateTag?: boolean | null;
    /**
     * Group members can delete Tags.
     */
    canDeleteTag?: boolean | null;
    /**
     * Group members can create/update/delete Webhooks.
     */
    canManageWebhook?: boolean | null;
    /**
     * Group members can use the export/import feature.
     */
    canUseExportImport?: boolean | null;
    /**
     * Group members can update Product preferences.
     */
    canManageProductPreferences?: boolean | null;
    /**
     * Group members can add and configure integrations.
     */
    canManageIntegrations?: boolean | null;
    /**
     * Group members has access to SDK keys.
     */
    canViewSdkKey?: boolean | null;
    /**
     * Group members can rotate SDK keys.
     */
    canRotateSdkKey?: boolean | null;
    /**
     * Group members can create/update Segments.
     */
    canCreateOrUpdateSegments?: boolean | null;
    /**
     * Group members can delete Segments.
     */
    canDeleteSegments?: boolean | null;
    /**
     * Group members has access to audit logs.
     */
    canViewProductAuditLog?: boolean | null;
    /**
     * Group members has access to product statistics.
     */
    canViewProductStatistics?: boolean | null;
    accessType?: AccessType;
    newEnvironmentAccessType?: EnvironmentAccessType;
    /**
     * List of environment specific permissions.
     */
    environmentAccesses?: Array<CreateOrUpdateEnvironmentAccessModel> | null;
}
export namespace UpdatePermissionGroupRequest {
}


