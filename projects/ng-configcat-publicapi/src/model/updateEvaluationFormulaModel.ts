/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ValueModel } from './valueModel';
import { TargetingRuleModel } from './targetingRuleModel';


export interface UpdateEvaluationFormulaModel { 
    defaultValue: ValueModel;
    /**
     * The targeting rules of the Feature Flag or Setting.
     */
    targetingRules?: Array<TargetingRuleModel> | null;
    /**
     * The user attribute used for percentage evaluation. If not set, it defaults to the `Identifier` user object attribute.
     */
    percentageEvaluationAttribute?: string | null;
}

