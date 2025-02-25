/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface UpdateMemberPermissionsRequest { 
    /**
     * List of Permission Group identifiers to where the Member should be added.
     */
    permissionGroupIds?: Array<number> | null;
    /**
     * Indicates that the member must be Organization Admin.
     */
    isAdmin?: boolean | null;
    /**
     * Indicates that the member must be Billing Manager.
     */
    isBillingManager?: boolean | null;
    /**
     * When `true`, the member will be removed from those Permission Groups that are not listed in the `permissionGroupIds` field.
     */
    removeFromPermissionGroupsWhereIdNotSet?: boolean;
}

