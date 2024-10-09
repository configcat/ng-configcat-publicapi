/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface ModifyIntegrationRequest { 
    /**
     * Name of the Integration.
     */
    name: string;
    /**
     * Parameters of the Integration.
     */
    parameters: { [key: string]: string | null; };
    /**
     * List of Environment IDs that are connected with this Integration. If the list is empty, all of the Environments are connected.
     */
    environmentIds: Array<string>;
    /**
     * List of Config IDs that are connected with this Integration. If the list is empty, all of the Configs are connected.
     */
    configIds: Array<string>;
}

