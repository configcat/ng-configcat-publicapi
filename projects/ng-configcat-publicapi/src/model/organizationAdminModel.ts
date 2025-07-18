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
 * Describes an Organization Admin.
 */
export interface OrganizationAdminModel { 
    /**
     * Identifier of the Organization Admin.
     */
    userId: string;
    /**
     * Name of the Organization Admin.
     */
    fullName: string;
    /**
     * Email of the OrganizationAdmin.
     */
    email: string;
    /**
     * Determines whether 2FA is enabled for the Organization Admin.
     */
    twoFactorEnabled: boolean;
}

