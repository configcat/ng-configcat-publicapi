/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SettingType } from './settingType';
import { TagModel } from './tagModel';


/**
 * Metadata of a Feature Flag or Setting.
 */
export interface SettingModel { 
    /**
     * Identifier of the Feature Flag or Setting.
     */
    settingId: number;
    /**
     * Key of the Feature Flag or Setting.
     */
    key: string;
    /**
     * Name of the Feature Flag or Setting.
     */
    name: string;
    /**
     * Description of the Feature Flag or Setting.
     */
    hint: string | null;
    /**
     * The order of the Feature Flag or Setting represented on the ConfigCat Dashboard.
     */
    order: number;
    settingType: SettingType;
    /**
     * Identifier of the Feature Flag\'s Config.
     */
    configId: string;
    /**
     * Name of the Feature Flag\'s Config.
     */
    configName: string;
    /**
     * The creation time of the Feature Flag or Setting.
     */
    createdAt: string | null;
    /**
     * The tags attached to the Feature Flag or Setting.
     */
    tags: Array<TagModel>;
}
export namespace SettingModel {
}


