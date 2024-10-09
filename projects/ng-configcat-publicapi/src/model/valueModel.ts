/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Represents the value of a Feature Flag or Setting.
 */
export interface ValueModel { 
    /**
     * The served value in case of a boolean Feature Flag.
     */
    boolValue?: boolean | null;
    /**
     * The served value in case of a text Setting.
     */
    stringValue?: string | null;
    /**
     * The served value in case of a whole number Setting.
     */
    intValue?: number | null;
    /**
     * The served value in case of a decimal number Setting.
     */
    doubleValue?: number | null;
}

