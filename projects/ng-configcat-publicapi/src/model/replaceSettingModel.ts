/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface ReplaceSettingModel { 
    /**
     * A short description for the setting, shown on the Dashboard UI.
     */
    hint?: string | null;
    /**
     * The IDs of the tags which are attached to the setting.
     */
    tags?: Array<number> | null;
    /**
     * The order of the Setting represented on the ConfigCat Dashboard. Determined from an ascending sequence of integers.
     */
    order?: number | null;
    /**
     * The name of the Feature Flag or Setting.
     */
    name?: string | null;
}

