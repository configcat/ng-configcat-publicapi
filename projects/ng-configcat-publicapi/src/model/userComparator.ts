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
 * The comparison operator which defines the relation between the comparison attribute and the comparison value.
 */
export type UserComparator = 'isOneOf' | 'isNotOneOf' | 'containsAnyOf' | 'doesNotContainAnyOf' | 'semVerIsOneOf' | 'semVerIsNotOneOf' | 'semVerLess' | 'semVerLessOrEquals' | 'semVerGreater' | 'semVerGreaterOrEquals' | 'numberEquals' | 'numberDoesNotEqual' | 'numberLess' | 'numberLessOrEquals' | 'numberGreater' | 'numberGreaterOrEquals' | 'sensitiveIsOneOf' | 'sensitiveIsNotOneOf' | 'dateTimeBefore' | 'dateTimeAfter' | 'sensitiveTextEquals' | 'sensitiveTextDoesNotEqual' | 'sensitiveTextStartsWithAnyOf' | 'sensitiveTextNotStartsWithAnyOf' | 'sensitiveTextEndsWithAnyOf' | 'sensitiveTextNotEndsWithAnyOf' | 'sensitiveArrayContainsAnyOf' | 'sensitiveArrayDoesNotContainAnyOf' | 'textEquals' | 'textDoesNotEqual' | 'textStartsWithAnyOf' | 'textNotStartsWithAnyOf' | 'textEndsWithAnyOf' | 'textNotEndsWithAnyOf' | 'arrayContainsAnyOf' | 'arrayDoesNotContainAnyOf';

export const UserComparator = {

    IsOneOf: 'isOneOf' as UserComparator,

    IsNotOneOf: 'isNotOneOf' as UserComparator,

    ContainsAnyOf: 'containsAnyOf' as UserComparator,

    DoesNotContainAnyOf: 'doesNotContainAnyOf' as UserComparator,

    SemVerIsOneOf: 'semVerIsOneOf' as UserComparator,

    SemVerIsNotOneOf: 'semVerIsNotOneOf' as UserComparator,

    SemVerLess: 'semVerLess' as UserComparator,

    SemVerLessOrEquals: 'semVerLessOrEquals' as UserComparator,

    SemVerGreater: 'semVerGreater' as UserComparator,

    SemVerGreaterOrEquals: 'semVerGreaterOrEquals' as UserComparator,

    NumberEquals: 'numberEquals' as UserComparator,

    NumberDoesNotEqual: 'numberDoesNotEqual' as UserComparator,

    NumberLess: 'numberLess' as UserComparator,

    NumberLessOrEquals: 'numberLessOrEquals' as UserComparator,

    NumberGreater: 'numberGreater' as UserComparator,

    NumberGreaterOrEquals: 'numberGreaterOrEquals' as UserComparator,

    SensitiveIsOneOf: 'sensitiveIsOneOf' as UserComparator,

    SensitiveIsNotOneOf: 'sensitiveIsNotOneOf' as UserComparator,

    DateTimeBefore: 'dateTimeBefore' as UserComparator,

    DateTimeAfter: 'dateTimeAfter' as UserComparator,

    SensitiveTextEquals: 'sensitiveTextEquals' as UserComparator,

    SensitiveTextDoesNotEqual: 'sensitiveTextDoesNotEqual' as UserComparator,

    SensitiveTextStartsWithAnyOf: 'sensitiveTextStartsWithAnyOf' as UserComparator,

    SensitiveTextNotStartsWithAnyOf: 'sensitiveTextNotStartsWithAnyOf' as UserComparator,

    SensitiveTextEndsWithAnyOf: 'sensitiveTextEndsWithAnyOf' as UserComparator,

    SensitiveTextNotEndsWithAnyOf: 'sensitiveTextNotEndsWithAnyOf' as UserComparator,

    SensitiveArrayContainsAnyOf: 'sensitiveArrayContainsAnyOf' as UserComparator,

    SensitiveArrayDoesNotContainAnyOf: 'sensitiveArrayDoesNotContainAnyOf' as UserComparator,

    TextEquals: 'textEquals' as UserComparator,

    TextDoesNotEqual: 'textDoesNotEqual' as UserComparator,

    TextStartsWithAnyOf: 'textStartsWithAnyOf' as UserComparator,

    TextNotStartsWithAnyOf: 'textNotStartsWithAnyOf' as UserComparator,

    TextEndsWithAnyOf: 'textEndsWithAnyOf' as UserComparator,

    TextNotEndsWithAnyOf: 'textNotEndsWithAnyOf' as UserComparator,

    ArrayContainsAnyOf: 'arrayContainsAnyOf' as UserComparator,

    ArrayDoesNotContainAnyOf: 'arrayDoesNotContainAnyOf' as UserComparator
};

