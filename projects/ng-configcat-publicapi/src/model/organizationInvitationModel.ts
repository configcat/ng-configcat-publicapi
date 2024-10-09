/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface OrganizationInvitationModel { 
    /**
     * The identifier of the Invitation.
     */
    invitationId?: string;
    /**
     * The invited user\'s email address.
     */
    email?: string | null;
    /**
     * The identifier of the Product the user was invited to.
     */
    productId?: string;
    /**
     * The name of the Product the user was invited to.
     */
    productName?: string | null;
    /**
     * The identifier of the Permission Group the user was invited to.
     */
    permissionGroupId?: number;
    /**
     * Creation time of the Invitation.
     */
    createdAt?: string;
    /**
     * Determines whether the Invitation is expired.
     */
    expired?: boolean;
    /**
     * Expiration time of the Invitation.
     */
    expires?: string;
}

