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
import { ConfigModel } from './configModel';
import { IntegrationLinkModel } from './integrationLinkModel';
import { ValueModel } from './valueModel';
import { SettingTagModel } from './settingTagModel';
import { EnvironmentModel } from './environmentModel';
import { TargetingRuleModel } from './targetingRuleModel';
import { SettingDataModel } from './settingDataModel';


export interface SettingFormulaModel { 
    lastVersionId?: string;
    defaultValue?: ValueModel;
    /**
     * The targeting rules of the Feature Flag or Setting.
     */
    targetingRules?: Array<TargetingRuleModel> | null;
    setting?: SettingDataModel;
    /**
     * The last updated date and time when the Feature Flag or Setting.
     */
    updatedAt?: string | null;
    /**
     * The user attribute used for percentage evaluation. If not set, it defaults to the `Identifier` user object attribute.
     */
    percentageEvaluationAttribute?: string | null;
    /**
     * The email of the user who last updated the Feature Flag or Setting.
     */
    lastUpdaterUserEmail?: string | null;
    /**
     * The name of the user who last updated the Feature Flag or Setting.
     */
    lastUpdaterUserFullName?: string | null;
    /**
     * The integration links attached to the Feature Flag or Setting.
     */
    integrationLinks?: Array<IntegrationLinkModel> | null;
    /**
     * The tags attached to the Feature Flag or Setting.
     */
    settingTags?: Array<SettingTagModel> | null;
    config?: ConfigModel;
    environment?: EnvironmentModel;
    readOnly?: boolean;
}

