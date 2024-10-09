/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface DeleteRepositoryReportsRequest { 
    /**
     * The Config\'s identifier from where the reports should be deleted.
     */
    configId: string;
    /**
     * The source control repository which\'s reports should be deleted.
     */
    repository: string;
    /**
     * If it\'s set, only this branch\'s reports belonging to the given repository will be deleted.
     */
    branch?: string | null;
    /**
     * If it\'s set, only this setting\'s reports belonging to the given repository will be deleted.
     */
    settingId?: number | null;
}

