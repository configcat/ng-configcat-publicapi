/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrganizationMemberModel } from './organizationMemberModel';
import { OrganizationAdminModel } from './organizationAdminModel';


export interface OrganizationMembersModel { 
    /**
     * List of Organization Admins.
     */
    admins?: Array<OrganizationAdminModel> | null;
    /**
     * List of Billing Managers.
     */
    billingManagers?: Array<OrganizationAdminModel> | null;
    /**
     * List of Organization Members.
     */
    members?: Array<OrganizationMemberModel> | null;
}

