/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface RolloutPercentageItemModel { 
    /**
     * The percentage value for the rule.
     */
    percentage: number;
    /**
     * The value to serve when the user falls in the percentage rule. It must respect the setting type.
     */
    value?: any | null;
}

