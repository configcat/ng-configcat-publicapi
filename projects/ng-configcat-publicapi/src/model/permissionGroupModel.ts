/**
 * ConfigCat Public Management API
 * **Base API URL**: https://test-api.configcat.com  If you prefer the swagger documentation, you can find it here: [Swagger UI](https://test-api.configcat.com/swagger).  The purpose of this API is to access the ConfigCat platform programmatically.  You can **Create**, **Read**, **Update** and **Delete** any entities like **Feature Flags, Configs, Environments** or **Products** within ConfigCat.   The API is based on HTTP REST, uses resource-oriented URLs, status codes and supports JSON  and JSON+HAL format. Do not use this API for accessing and evaluating feature flag values. Use the [SDKs instead](https://configcat.com/docs/sdk-reference/overview).   # OpenAPI Specification  The complete specification is publicly available in the following formats:  - [OpenAPI v3](https://test-api.configcat.com/docs/v1/swagger.json) - [Swagger v2](https://test-api.configcat.com/docs/v1/swagger.v2.json)  You can use it to generate client libraries in various languages with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) to interact with this API.  # Authentication This API uses the [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication).   <!-- ReDoc-Inject: <security-definitions> -->  # Throttling and rate limits All the rate limited API calls are returning information about the current rate limit period in the following HTTP headers:  | Header | Description | | :- | :- | | X-Rate-Limit-Remaining | The maximum number of requests remaining in the current rate limit period. | | X-Rate-Limit-Reset     | The time when the current rate limit period resets.        |  When the rate limit is exceeded by a request, the API returns with a `HTTP 429 - Too many requests` status along with a `Retry-After` HTTP header. 
 *
 * The version of the OpenAPI document: v1
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EnvironmentAccessType } from './environmentAccessType';
import { EnvironmentAccessModel } from './environmentAccessModel';
import { AccessType } from './accessType';
import { ProductModel } from './productModel';


export interface PermissionGroupModel { 
    /**
     * Identifier of the Permission Group.
     */
    permissionGroupId?: number;
    /**
     * Name of the Permission Group.
     */
    name?: string | null;
    /**
     * Group members can manage team members.
     */
    canManageMembers?: boolean;
    /**
     * Group members can create/update Configs.
     */
    canCreateOrUpdateConfig?: boolean;
    /**
     * Group members can delete Configs.
     */
    canDeleteConfig?: boolean;
    /**
     * Group members can create/update Environments.
     */
    canCreateOrUpdateEnvironment?: boolean;
    /**
     * Group members can delete Environments.
     */
    canDeleteEnvironment?: boolean;
    /**
     * Group members can create/update Feature Flags and Settings.
     */
    canCreateOrUpdateSetting?: boolean;
    /**
     * Group members can attach/detach Tags to Feature Flags and Settings.
     */
    canTagSetting?: boolean;
    /**
     * Group members can delete Feature Flags and Settings.
     */
    canDeleteSetting?: boolean;
    /**
     * Group members can create/update Tags.
     */
    canCreateOrUpdateTag?: boolean;
    /**
     * Group members can delete Tags.
     */
    canDeleteTag?: boolean;
    /**
     * Group members can create/update/delete Webhooks.
     */
    canManageWebhook?: boolean;
    /**
     * Group members can use the export/import feature.
     */
    canUseExportImport?: boolean;
    /**
     * Group members can update Product preferences.
     */
    canManageProductPreferences?: boolean;
    /**
     * Group members can add and configure integrations.
     */
    canManageIntegrations?: boolean;
    /**
     * Group members has access to SDK keys.
     */
    canViewSdkKey?: boolean;
    /**
     * Group members can rotate SDK keys.
     */
    canRotateSdkKey?: boolean;
    /**
     * Group members can create/update Segments.
     */
    canCreateOrUpdateSegments?: boolean;
    /**
     * Group members can delete Segments.
     */
    canDeleteSegments?: boolean;
    /**
     * Group members has access to audit logs.
     */
    canViewProductAuditLog?: boolean;
    /**
     * Group members has access to product statistics.
     */
    canViewProductStatistics?: boolean;
    accessType?: AccessType;
    newEnvironmentAccessType?: EnvironmentAccessType;
    /**
     * List of environment specific permissions.
     */
    environmentAccesses?: Array<EnvironmentAccessModel> | null;
    product?: ProductModel;
}
export namespace PermissionGroupModel {
}


