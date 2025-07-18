/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface UpdateProductRequest { 
    /**
     * The name of the Product.
     */
    name?: string | null;
    /**
     * The description of the Product.
     */
    description?: string | null;
    /**
     * The order of the Product represented on the ConfigCat Dashboard. Determined from an ascending sequence of integers.
     */
    order?: number | null;
}

