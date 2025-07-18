/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { JsonPatchOperation } from '../model/jsonPatchOperation';
// @ts-ignore
import { SettingFormulaModel } from '../model/settingFormulaModel';
// @ts-ignore
import { UpdateEvaluationFormulaModel } from '../model/updateEvaluationFormulaModel';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { BaseService } from '../api.base.service';



@Injectable({
  providedIn: 'root'
})
export class FeatureFlagSettingValuesUsingSDKKeyV2Service extends BaseService {

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string|string[], @Optional() configuration?: Configuration) {
        super(basePath, configuration);
    }

    /**
     * Get value
     * This endpoint returns the value of a Feature Flag or Setting in a specified Environment identified by the &lt;a target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot; href&#x3D;\&quot;https://app.configcat.com/sdkkey\&quot;&gt;SDK key&lt;/a&gt; passed in the &#x60;X-CONFIGCAT-SDKKEY&#x60; header.  The most important fields in the response are the &#x60;defaultValue&#x60;, &#x60;targetingRules&#x60;. The &#x60;defaultValue&#x60; represents what the clients will get when the evaluation requests of our SDKs are not matching to any of the defined Targeting Rules, or when there are no additional rules to evaluate.  The &#x60;targetingRules&#x60; represents the current Targeting Rule configuration of the actual Feature Flag or Setting in an **ordered** collection, which means the order of the returned rules is matching to the evaluation order. You can read more about these rules [here](https://configcat.com/docs/targeting/targeting-overview/).  The &#x60;percentageEvaluationAttribute&#x60; represents the custom [User Object](https://configcat.com/docs/targeting/user-object/) attribute that must be used at the [percentage evaluation](https://configcat.com/docs/advanced/targeting/#anatomy-of-the-percentage-based-targeting) of the Feature Flag or Setting.
     * @param settingKeyOrId The key or id of the Setting.
     * @param xCONFIGCATSDKKEY The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSettingValueBySdkkeyV2(settingKeyOrId: string, xCONFIGCATSDKKEY?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<SettingFormulaModel>;
    public getSettingValueBySdkkeyV2(settingKeyOrId: string, xCONFIGCATSDKKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<SettingFormulaModel>>;
    public getSettingValueBySdkkeyV2(settingKeyOrId: string, xCONFIGCATSDKKEY?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<SettingFormulaModel>>;
    public getSettingValueBySdkkeyV2(settingKeyOrId: string, xCONFIGCATSDKKEY?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (settingKeyOrId === null || settingKeyOrId === undefined) {
            throw new Error('Required parameter settingKeyOrId was null or undefined when calling getSettingValueBySdkkeyV2.');
        }

        let localVarHeaders = this.defaultHeaders;
        if (xCONFIGCATSDKKEY !== undefined && xCONFIGCATSDKKEY !== null) {
            localVarHeaders = localVarHeaders.set('X-CONFIGCAT-SDKKEY', String(xCONFIGCATSDKKEY));
        }

        // authentication (Basic) required
        localVarHeaders = this.configuration.addCredentialToHeaders('Basic', 'Authorization', localVarHeaders, 'Basic ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/v2/settings/${this.configuration.encodeParam({name: "settingKeyOrId", value: settingKeyOrId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/value`;
        return this.httpClient.request<SettingFormulaModel>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Replace value
     * This endpoint replaces the value and the Targeting Rules of a Feature Flag or Setting in a specified Environment identified by the &lt;a target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot; href&#x3D;\&quot;https://app.configcat.com/sdkkey\&quot;&gt;SDK key&lt;/a&gt; passed in the &#x60;X-CONFIGCAT-SDKKEY&#x60; header.  Only the &#x60;defaultValue&#x60;, &#x60;targetingRules&#x60;, and &#x60;percentageEvaluationAttribute&#x60; fields are modifiable by this endpoint.  **Important:** As this endpoint is doing a complete replace, it\&#39;s important to set every other field that you don\&#39;t want to change to its original state. Not listing one means it will reset.  For example: We have the following resource of a Feature Flag. &#x60;&#x60;&#x60;json {   \&quot;defaultValue\&quot;: {     \&quot;boolValue\&quot;: false   },   \&quot;targetingRules\&quot;: [     {       \&quot;conditions\&quot;: [         {           \&quot;userCondition\&quot;: {             \&quot;comparisonAttribute\&quot;: \&quot;Email\&quot;,             \&quot;comparator\&quot;: \&quot;sensitiveTextEquals\&quot;,             \&quot;comparisonValue\&quot;: {               \&quot;stringValue\&quot;: \&quot;test@example.com\&quot;             }           }         }       ],       \&quot;percentageOptions\&quot;: [],       \&quot;value\&quot;: {         \&quot;boolValue\&quot;: true       }     }   ] } &#x60;&#x60;&#x60; If we send a replace request body as below: &#x60;&#x60;&#x60;json {   \&quot;defaultValue\&quot;: {     \&quot;boolValue\&quot;: true   } } &#x60;&#x60;&#x60; Then besides that the default served value is set to &#x60;true&#x60;, all the Targeting Rules are deleted. So we get a response like this: &#x60;&#x60;&#x60;json {   \&quot;defaultValue\&quot;: {     \&quot;boolValue\&quot;: true   },   \&quot;targetingRules\&quot;: [] } &#x60;&#x60;&#x60;
     * @param settingKeyOrId The key or id of the Setting.
     * @param updateEvaluationFormulaModel 
     * @param reason The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on.
     * @param xCONFIGCATSDKKEY The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public replaceSettingValueBySdkkeyV2(settingKeyOrId: string, updateEvaluationFormulaModel: UpdateEvaluationFormulaModel, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<SettingFormulaModel>;
    public replaceSettingValueBySdkkeyV2(settingKeyOrId: string, updateEvaluationFormulaModel: UpdateEvaluationFormulaModel, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<SettingFormulaModel>>;
    public replaceSettingValueBySdkkeyV2(settingKeyOrId: string, updateEvaluationFormulaModel: UpdateEvaluationFormulaModel, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<SettingFormulaModel>>;
    public replaceSettingValueBySdkkeyV2(settingKeyOrId: string, updateEvaluationFormulaModel: UpdateEvaluationFormulaModel, reason?: string, xCONFIGCATSDKKEY?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (settingKeyOrId === null || settingKeyOrId === undefined) {
            throw new Error('Required parameter settingKeyOrId was null or undefined when calling replaceSettingValueBySdkkeyV2.');
        }
        if (updateEvaluationFormulaModel === null || updateEvaluationFormulaModel === undefined) {
            throw new Error('Required parameter updateEvaluationFormulaModel was null or undefined when calling replaceSettingValueBySdkkeyV2.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>reason, 'reason');

        let localVarHeaders = this.defaultHeaders;
        if (xCONFIGCATSDKKEY !== undefined && xCONFIGCATSDKKEY !== null) {
            localVarHeaders = localVarHeaders.set('X-CONFIGCAT-SDKKEY', String(xCONFIGCATSDKKEY));
        }

        // authentication (Basic) required
        localVarHeaders = this.configuration.addCredentialToHeaders('Basic', 'Authorization', localVarHeaders, 'Basic ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/v2/settings/${this.configuration.encodeParam({name: "settingKeyOrId", value: settingKeyOrId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/value`;
        return this.httpClient.request<SettingFormulaModel>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: updateEvaluationFormulaModel,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update value
     * This endpoint updates the value of a Feature Flag or Setting with a collection of [JSON Patch](https://jsonpatch.com) operations in a specified Environment.  Only the &#x60;defaultValue&#x60;, &#x60;targetingRules&#x60;, and &#x60;percentageEvaluationAttribute&#x60; fields are modifiable by this endpoint.  The advantage of using JSON Patch is that you can describe individual update operations on a resource without touching attributes that you don\&#39;t want to change. It supports collection reordering, so it also can be used for reordering the targeting rules of a Feature Flag or Setting.  For example: We have the following resource of a Feature Flag. &#x60;&#x60;&#x60;json {   \&quot;defaultValue\&quot;: {     \&quot;boolValue\&quot;: false   },   \&quot;targetingRules\&quot;: [     {       \&quot;conditions\&quot;: [         {           \&quot;userCondition\&quot;: {             \&quot;comparisonAttribute\&quot;: \&quot;Email\&quot;,             \&quot;comparator\&quot;: \&quot;sensitiveTextEquals\&quot;,             \&quot;comparisonValue\&quot;: {               \&quot;stringValue\&quot;: \&quot;test@example.com\&quot;             }           }         }       ],       \&quot;percentageOptions\&quot;: [],       \&quot;value\&quot;: {         \&quot;boolValue\&quot;: true       }     }   ] } &#x60;&#x60;&#x60; If we send an update request body as below: &#x60;&#x60;&#x60;json [   {     \&quot;op\&quot;: \&quot;replace\&quot;,     \&quot;path\&quot;: \&quot;/targetingRules/0/value/boolValue\&quot;,     \&quot;value\&quot;: true   } ] &#x60;&#x60;&#x60; Only the first Targeting Rule\&#39;s &#x60;value&#x60; is going to be set to &#x60;false&#x60; and all the other fields are remaining unchanged.  So we get a response like this: &#x60;&#x60;&#x60;json {   \&quot;defaultValue\&quot;: {     \&quot;boolValue\&quot;: false   },   \&quot;targetingRules\&quot;: [     {       \&quot;conditions\&quot;: [         {           \&quot;userCondition\&quot;: {             \&quot;comparisonAttribute\&quot;: \&quot;Email\&quot;,             \&quot;comparator\&quot;: \&quot;sensitiveTextEquals\&quot;,             \&quot;comparisonValue\&quot;: {               \&quot;stringValue\&quot;: \&quot;test@example.com\&quot;             }           }         }       ],       \&quot;percentageOptions\&quot;: [],       \&quot;value\&quot;: {         \&quot;boolValue\&quot;: false       }     }   ] } &#x60;&#x60;&#x60;
     * @param settingKeyOrId The key or id of the Setting.
     * @param jsonPatchOperation 
     * @param reason The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on.
     * @param xCONFIGCATSDKKEY The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSettingValueBySdkkeyV2(settingKeyOrId: string, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<SettingFormulaModel>;
    public updateSettingValueBySdkkeyV2(settingKeyOrId: string, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<SettingFormulaModel>>;
    public updateSettingValueBySdkkeyV2(settingKeyOrId: string, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<SettingFormulaModel>>;
    public updateSettingValueBySdkkeyV2(settingKeyOrId: string, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, xCONFIGCATSDKKEY?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (settingKeyOrId === null || settingKeyOrId === undefined) {
            throw new Error('Required parameter settingKeyOrId was null or undefined when calling updateSettingValueBySdkkeyV2.');
        }
        if (jsonPatchOperation === null || jsonPatchOperation === undefined) {
            throw new Error('Required parameter jsonPatchOperation was null or undefined when calling updateSettingValueBySdkkeyV2.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
          <any>reason, 'reason');

        let localVarHeaders = this.defaultHeaders;
        if (xCONFIGCATSDKKEY !== undefined && xCONFIGCATSDKKEY !== null) {
            localVarHeaders = localVarHeaders.set('X-CONFIGCAT-SDKKEY', String(xCONFIGCATSDKKEY));
        }

        // authentication (Basic) required
        localVarHeaders = this.configuration.addCredentialToHeaders('Basic', 'Authorization', localVarHeaders, 'Basic ');

        const localVarHttpHeaderAcceptSelected: string | undefined = options?.httpHeaderAccept ?? this.configuration.selectHeaderAccept([
            'application/json'
        ]);
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        const localVarHttpContext: HttpContext = options?.context ?? new HttpContext();

        const localVarTransferCache: boolean = options?.transferCache ?? true;


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/v2/settings/${this.configuration.encodeParam({name: "settingKeyOrId", value: settingKeyOrId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/value`;
        return this.httpClient.request<SettingFormulaModel>('patch', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: jsonPatchOperation,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

}
