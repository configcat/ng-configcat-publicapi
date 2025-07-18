/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UpdateConditionModel } from './updateConditionModel';
import { UpdatePercentageOptionModel } from './updatePercentageOptionModel';
import { UpdateValueModel } from './updateValueModel';


export interface UpdateTargetingRuleModel { 
    /**
     * The list of conditions that are combined with logical AND operators. It can be one of the following: - User condition - Segment condition - Prerequisite flag condition
     */
    conditions?: Array<UpdateConditionModel> | null;
    /**
     * The percentage options from where the evaluation process will choose a value based on the flag\'s percentage evaluation attribute.
     */
    percentageOptions?: Array<UpdatePercentageOptionModel> | null;
    value?: UpdateValueModel | null;
}

