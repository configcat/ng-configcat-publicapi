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
import { ConfigSettingValuesModel } from '../model/configSettingValuesModel';
// @ts-ignore
import { JsonPatchOperation } from '../model/jsonPatchOperation';
// @ts-ignore
import { SettingValueModel } from '../model/settingValueModel';
// @ts-ignore
import { UpdateSettingValueModel } from '../model/updateSettingValueModel';
// @ts-ignore
import { UpdateSettingValuesWithIdModel } from '../model/updateSettingValuesWithIdModel';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class FeatureFlagSettingValuesService {

    protected basePath = 'https://api.configcat.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            const firstBasePath = Array.isArray(basePath) ? basePath[0] : undefined;
            if (firstBasePath != undefined) {
                basePath = firstBasePath;
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Get value
     * This endpoint returns the value of a Feature Flag or Setting  in a specified Environment identified by the &#x60;environmentId&#x60; parameter.  The most important attributes in the response are the &#x60;value&#x60;, &#x60;rolloutRules&#x60; and &#x60;percentageRules&#x60;. The &#x60;value&#x60; represents what the clients will get when the evaluation requests of our SDKs  are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.  The &#x60;rolloutRules&#x60; and &#x60;percentageRules&#x60; attributes are representing the current  Targeting and Percentage Rules configuration of the actual Feature Flag or Setting  in an **ordered** collection, which means the order of the returned rules is matching to the evaluation order. You can read more about these rules [here](https://configcat.com/docs/targeting/targeting-overview).
     * @param environmentId The identifier of the Environment.
     * @param settingId The id of the Setting.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSettingValue(environmentId: string, settingId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<SettingValueModel>;
    public getSettingValue(environmentId: string, settingId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<SettingValueModel>>;
    public getSettingValue(environmentId: string, settingId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<SettingValueModel>>;
    public getSettingValue(environmentId: string, settingId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (environmentId === null || environmentId === undefined) {
            throw new Error('Required parameter environmentId was null or undefined when calling getSettingValue.');
        }
        if (settingId === null || settingId === undefined) {
            throw new Error('Required parameter settingId was null or undefined when calling getSettingValue.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Basic) required
        localVarCredential = this.configuration.lookupCredential('Basic');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Basic ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
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

        let localVarPath = `/v1/environments/${this.configuration.encodeParam({name: "environmentId", value: environmentId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/settings/${this.configuration.encodeParam({name: "settingId", value: settingId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int32"})}/value`;
        return this.httpClient.request<SettingValueModel>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * Get values
     * This endpoint returns the value of a specified Config\&#39;s Feature Flags or Settings identified by the &#x60;configId&#x60; parameter in a specified Environment identified by the &#x60;environmentId&#x60; parameter.  The most important attributes in the response are the &#x60;value&#x60;, &#x60;rolloutRules&#x60; and &#x60;percentageRules&#x60;. The &#x60;value&#x60; represents what the clients will get when the evaluation requests of our SDKs  are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.  The &#x60;rolloutRules&#x60; and &#x60;percentageRules&#x60; attributes are representing the current  Targeting and Percentage Rules configuration of the actual Feature Flag or Setting  in an **ordered** collection, which means the order of the returned rules is matching to the evaluation order. You can read more about these rules [here](https://configcat.com/docs/targeting/targeting-overview/).
     * @param configId The identifier of the Config.
     * @param environmentId The identifier of the Environment.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSettingValues(configId: string, environmentId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<ConfigSettingValuesModel>;
    public getSettingValues(configId: string, environmentId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<ConfigSettingValuesModel>>;
    public getSettingValues(configId: string, environmentId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<ConfigSettingValuesModel>>;
    public getSettingValues(configId: string, environmentId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (configId === null || configId === undefined) {
            throw new Error('Required parameter configId was null or undefined when calling getSettingValues.');
        }
        if (environmentId === null || environmentId === undefined) {
            throw new Error('Required parameter environmentId was null or undefined when calling getSettingValues.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Basic) required
        localVarCredential = this.configuration.lookupCredential('Basic');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Basic ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
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

        let localVarPath = `/v1/configs/${this.configuration.encodeParam({name: "configId", value: configId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/environments/${this.configuration.encodeParam({name: "environmentId", value: environmentId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/values`;
        return this.httpClient.request<ConfigSettingValuesModel>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * Post values
     * This endpoint replaces the values of a specified Config\&#39;s Feature Flags or Settings identified by the &#x60;configId&#x60; parameter in a specified Environment identified by the &#x60;environmentId&#x60; parameter.  Only the &#x60;value&#x60;, &#x60;rolloutRules&#x60; and &#x60;percentageRules&#x60; attributes are modifiable by this endpoint.  **Important:** As this endpoint is doing a complete replace, it\&#39;s important to set every other attribute that you don\&#39;t  want to change in its original state. Not listing one means it will reset.  For example: We have the following resource. &#x60;&#x60;&#x60;json {   \&quot;settingValues\&quot;: [     {       \&quot;rolloutPercentageItems\&quot;: [         {           \&quot;percentage\&quot;: 30,           \&quot;value\&quot;: true         },         {           \&quot;percentage\&quot;: 70,           \&quot;value\&quot;: false         }       ],       \&quot;rolloutRules\&quot;: [],       \&quot;value\&quot;: false,       \&quot;settingId\&quot;: 1     }   ] } &#x60;&#x60;&#x60; If we send a replace request body as below: &#x60;&#x60;&#x60;json {    \&quot;settingValues\&quot;: [     {       \&quot;value\&quot;: true,       \&quot;settingId\&quot;: 1     }   ] } &#x60;&#x60;&#x60; Then besides that the default value is set to &#x60;true&#x60;, all the Percentage Rules are deleted.  So we get a response like this: &#x60;&#x60;&#x60;json {   \&quot;settingValues\&quot;: [     {       \&quot;rolloutPercentageItems\&quot;: [],       \&quot;rolloutRules\&quot;: [],       \&quot;value\&quot;: true,       \&quot;setting\&quot;:        {         \&quot;settingId\&quot;: 1       }     }   ] } &#x60;&#x60;&#x60;  The &#x60;rolloutRules&#x60; property describes two types of rules:  - **Targeting rules**: When you want to add or update a targeting rule, the &#x60;comparator&#x60;, &#x60;comparisonAttribute&#x60;, and &#x60;comparisonValue&#x60; members are required. - **Segment rules**: When you want to add add or update a segment rule, the &#x60;segmentId&#x60; which identifies the desired segment and the &#x60;segmentComparator&#x60; members are required.
     * @param configId The identifier of the Config.
     * @param environmentId The identifier of the Environment.
     * @param updateSettingValuesWithIdModel 
     * @param reason The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postSettingValues(configId: string, environmentId: string, updateSettingValuesWithIdModel: UpdateSettingValuesWithIdModel, reason?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<ConfigSettingValuesModel>;
    public postSettingValues(configId: string, environmentId: string, updateSettingValuesWithIdModel: UpdateSettingValuesWithIdModel, reason?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<ConfigSettingValuesModel>>;
    public postSettingValues(configId: string, environmentId: string, updateSettingValuesWithIdModel: UpdateSettingValuesWithIdModel, reason?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<ConfigSettingValuesModel>>;
    public postSettingValues(configId: string, environmentId: string, updateSettingValuesWithIdModel: UpdateSettingValuesWithIdModel, reason?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (configId === null || configId === undefined) {
            throw new Error('Required parameter configId was null or undefined when calling postSettingValues.');
        }
        if (environmentId === null || environmentId === undefined) {
            throw new Error('Required parameter environmentId was null or undefined when calling postSettingValues.');
        }
        if (updateSettingValuesWithIdModel === null || updateSettingValuesWithIdModel === undefined) {
            throw new Error('Required parameter updateSettingValuesWithIdModel was null or undefined when calling postSettingValues.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (reason !== undefined && reason !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>reason, 'reason');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Basic) required
        localVarCredential = this.configuration.lookupCredential('Basic');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Basic ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


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

        let localVarPath = `/v1/configs/${this.configuration.encodeParam({name: "configId", value: configId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/environments/${this.configuration.encodeParam({name: "environmentId", value: environmentId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/values`;
        return this.httpClient.request<ConfigSettingValuesModel>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: updateSettingValuesWithIdModel,
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
     * Replace value
     * This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.  Only the &#x60;value&#x60;, &#x60;rolloutRules&#x60; and &#x60;percentageRules&#x60; attributes are modifiable by this endpoint.  **Important:** As this endpoint is doing a complete replace, it\&#39;s important to set every other attribute that you don\&#39;t  want to change in its original state. Not listing one means it will reset.  For example: We have the following resource. &#x60;&#x60;&#x60;json {   \&quot;rolloutPercentageItems\&quot;: [     {       \&quot;percentage\&quot;: 30,       \&quot;value\&quot;: true     },     {       \&quot;percentage\&quot;: 70,       \&quot;value\&quot;: false     }   ],   \&quot;rolloutRules\&quot;: [],   \&quot;value\&quot;: false } &#x60;&#x60;&#x60; If we send a replace request body as below: &#x60;&#x60;&#x60;json {   \&quot;value\&quot;: true } &#x60;&#x60;&#x60; Then besides that the default value is set to &#x60;true&#x60;, all the Percentage Rules are deleted.  So we get a response like this: &#x60;&#x60;&#x60;json {   \&quot;rolloutPercentageItems\&quot;: [],   \&quot;rolloutRules\&quot;: [],   \&quot;value\&quot;: true } &#x60;&#x60;&#x60;  The &#x60;rolloutRules&#x60; property describes two types of rules:  - **Targeting rules**: When you want to add or update a targeting rule, the &#x60;comparator&#x60;, &#x60;comparisonAttribute&#x60;, and &#x60;comparisonValue&#x60; members are required. - **Segment rules**: When you want to add add or update a segment rule, the &#x60;segmentId&#x60; which identifies the desired segment and the &#x60;segmentComparator&#x60; members are required.
     * @param environmentId The identifier of the Environment.
     * @param settingId The id of the Setting.
     * @param updateSettingValueModel 
     * @param reason The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public replaceSettingValue(environmentId: string, settingId: number, updateSettingValueModel: UpdateSettingValueModel, reason?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<SettingValueModel>;
    public replaceSettingValue(environmentId: string, settingId: number, updateSettingValueModel: UpdateSettingValueModel, reason?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<SettingValueModel>>;
    public replaceSettingValue(environmentId: string, settingId: number, updateSettingValueModel: UpdateSettingValueModel, reason?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<SettingValueModel>>;
    public replaceSettingValue(environmentId: string, settingId: number, updateSettingValueModel: UpdateSettingValueModel, reason?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (environmentId === null || environmentId === undefined) {
            throw new Error('Required parameter environmentId was null or undefined when calling replaceSettingValue.');
        }
        if (settingId === null || settingId === undefined) {
            throw new Error('Required parameter settingId was null or undefined when calling replaceSettingValue.');
        }
        if (updateSettingValueModel === null || updateSettingValueModel === undefined) {
            throw new Error('Required parameter updateSettingValueModel was null or undefined when calling replaceSettingValue.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (reason !== undefined && reason !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>reason, 'reason');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Basic) required
        localVarCredential = this.configuration.lookupCredential('Basic');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Basic ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


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

        let localVarPath = `/v1/environments/${this.configuration.encodeParam({name: "environmentId", value: environmentId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/settings/${this.configuration.encodeParam({name: "settingId", value: settingId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int32"})}/value`;
        return this.httpClient.request<SettingValueModel>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: updateSettingValueModel,
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
     * This endpoint updates the value of a Feature Flag or Setting  with a collection of [JSON Patch](https://jsonpatch.com) operations in a specified Environment.  Only the &#x60;value&#x60;, &#x60;rolloutRules&#x60; and &#x60;percentageRules&#x60; attributes are modifiable by this endpoint.  The advantage of using JSON Patch is that you can describe individual update operations on a resource without touching attributes that you don\&#39;t want to change. It supports collection reordering, so it also  can be used for reordering the targeting rules of a Feature Flag or Setting.  For example: We have the following resource. &#x60;&#x60;&#x60;json {   \&quot;rolloutPercentageItems\&quot;: [     {       \&quot;percentage\&quot;: 30,       \&quot;value\&quot;: true     },     {       \&quot;percentage\&quot;: 70,       \&quot;value\&quot;: false     }   ],   \&quot;rolloutRules\&quot;: [],   \&quot;value\&quot;: false } &#x60;&#x60;&#x60; If we send an update request body as below: &#x60;&#x60;&#x60;json [   {     \&quot;op\&quot;: \&quot;replace\&quot;,     \&quot;path\&quot;: \&quot;/value\&quot;,     \&quot;value\&quot;: true   } ] &#x60;&#x60;&#x60; Only the default value is going to be set to &#x60;true&#x60; and all the Percentage Rules are remaining unchanged. So we get a response like this: &#x60;&#x60;&#x60;json {   \&quot;rolloutPercentageItems\&quot;: [     {       \&quot;percentage\&quot;: 30,       \&quot;value\&quot;: true     },     {       \&quot;percentage\&quot;: 70,       \&quot;value\&quot;: false     }   ],   \&quot;rolloutRules\&quot;: [],   \&quot;value\&quot;: true } &#x60;&#x60;&#x60;  The &#x60;rolloutRules&#x60; property describes two types of rules:  - **Targeting rules**: When you want to add or update a targeting rule, the &#x60;comparator&#x60;, &#x60;comparisonAttribute&#x60;, and &#x60;comparisonValue&#x60; members are required. - **Segment rules**: When you want to add add or update a segment rule, the &#x60;segmentId&#x60; which identifies the desired segment and the &#x60;segmentComparator&#x60; members are required.
     * @param environmentId The identifier of the Environment.
     * @param settingId The id of the Setting.
     * @param jsonPatchOperation 
     * @param reason The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSettingValue(environmentId: string, settingId: number, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<SettingValueModel>;
    public updateSettingValue(environmentId: string, settingId: number, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<SettingValueModel>>;
    public updateSettingValue(environmentId: string, settingId: number, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<SettingValueModel>>;
    public updateSettingValue(environmentId: string, settingId: number, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (environmentId === null || environmentId === undefined) {
            throw new Error('Required parameter environmentId was null or undefined when calling updateSettingValue.');
        }
        if (settingId === null || settingId === undefined) {
            throw new Error('Required parameter settingId was null or undefined when calling updateSettingValue.');
        }
        if (jsonPatchOperation === null || jsonPatchOperation === undefined) {
            throw new Error('Required parameter jsonPatchOperation was null or undefined when calling updateSettingValue.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (reason !== undefined && reason !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>reason, 'reason');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (Basic) required
        localVarCredential = this.configuration.lookupCredential('Basic');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Basic ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


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

        let localVarPath = `/v1/environments/${this.configuration.encodeParam({name: "environmentId", value: environmentId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/settings/${this.configuration.encodeParam({name: "settingId", value: settingId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int32"})}/value`;
        return this.httpClient.request<SettingValueModel>('patch', `${this.configuration.basePath}${localVarPath}`,
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
