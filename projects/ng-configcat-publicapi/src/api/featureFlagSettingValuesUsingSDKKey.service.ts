/**
 * ConfigCat Public Management API
 * **Base API URL**: https://test-api.configcat.com  If you prefer the swagger documentation, you can find it here: [Swagger UI](https://test-api.configcat.com/swagger).  The purpose of this API is to access the ConfigCat platform programmatically.  You can **Create**, **Read**, **Update** and **Delete** any entities like **Feature Flags, Configs, Environments** or **Products** within ConfigCat.   The API is based on HTTP REST, uses resource-oriented URLs, status codes and supports JSON  and JSON+HAL format. Do not use this API for accessing and evaluating feature flag values. Use the [SDKs instead](https://configcat.com/docs/sdk-reference/overview).   # OpenAPI Specification  The complete specification is publicly available in the following formats:  - [OpenAPI v3](https://test-api.configcat.com/docs/v1/swagger.json) - [Swagger v2](https://test-api.configcat.com/docs/v1/swagger.v2.json)  You can use it to generate client libraries in various languages with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) to interact with this API.  # Authentication This API uses the [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication).   <!-- ReDoc-Inject: <security-definitions> -->  # Throttling and rate limits All the rate limited API calls are returning information about the current rate limit period in the following HTTP headers:  | Header | Description | | :- | :- | | X-Rate-Limit-Remaining | The maximum number of requests remaining in the current rate limit period. | | X-Rate-Limit-Reset     | The time when the current rate limit period resets.        |  When the rate limit is exceeded by a request, the API returns with a `HTTP 429 - Too many requests` status along with a `Retry-After` HTTP header. 
 *
 * The version of the OpenAPI document: v1
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
import { SettingValueModel } from '../model/settingValueModel';
// @ts-ignore
import { SettingValueModelHaljson } from '../model/settingValueModelHaljson';
// @ts-ignore
import { UpdateSettingValueModel } from '../model/updateSettingValueModel';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class FeatureFlagSettingValuesUsingSDKKeyService {

    protected basePath = 'https://test-api.configcat.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
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
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
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
     * This endpoint returns the value of a Feature Flag or Setting  in a specified Environment identified by the &lt;a target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot; href&#x3D;\&quot;https://app.configcat.com/sdkkey\&quot;&gt;SDK key&lt;/a&gt; passed in the &#x60;X-CONFIGCAT-SDKKEY&#x60; header.  The most important attributes in the response are the &#x60;value&#x60;, &#x60;rolloutRules&#x60; and &#x60;percentageRules&#x60;. The &#x60;value&#x60; represents what the clients will get when the evaluation requests of our SDKs  are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.  The &#x60;rolloutRules&#x60; and &#x60;percentageRules&#x60; attributes are representing the current  Targeting and Percentage Rules configuration of the actual Feature Flag or Setting  in an **ordered** collection, which means the order of the returned rules is matching to the evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
     * @param settingKeyOrId The key or id of the Setting.
     * @param xCONFIGCATSDKKEY The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSettingValueBySdkkey(settingKeyOrId: string, xCONFIGCATSDKKEY?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<SettingValueModel>;
    public getSettingValueBySdkkey(settingKeyOrId: string, xCONFIGCATSDKKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpResponse<SettingValueModel>>;
    public getSettingValueBySdkkey(settingKeyOrId: string, xCONFIGCATSDKKEY?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpEvent<SettingValueModel>>;
    public getSettingValueBySdkkey(settingKeyOrId: string, xCONFIGCATSDKKEY?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<any> {
        if (settingKeyOrId === null || settingKeyOrId === undefined) {
            throw new Error('Required parameter settingKeyOrId was null or undefined when calling getSettingValueBySdkkey.');
        }

        let localVarHeaders = this.defaultHeaders;
        if (xCONFIGCATSDKKEY !== undefined && xCONFIGCATSDKKEY !== null) {
            localVarHeaders = localVarHeaders.set('X-CONFIGCAT-SDKKEY', String(xCONFIGCATSDKKEY));
        }

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
                'application/json',
                'application/hal+json'
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

        let localVarPath = `/v1/settings/${this.configuration.encodeParam({name: "settingKeyOrId", value: settingKeyOrId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/value`;
        return this.httpClient.request<SettingValueModel>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Replace value
     * This endpoint replaces the value of a Feature Flag or Setting  in a specified Environment identified by the &lt;a target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot; href&#x3D;\&quot;https://app.configcat.com/sdkkey\&quot;&gt;SDK key&lt;/a&gt; passed in the &#x60;X-CONFIGCAT-SDKKEY&#x60; header.  Only the &#x60;value&#x60;, &#x60;rolloutRules&#x60; and &#x60;percentageRules&#x60; attributes are modifiable by this endpoint.  **Important:** As this endpoint is doing a complete replace, it\&#39;s important to set every other attribute that you don\&#39;t  want to change to its original state. Not listing one means that it will reset.  For example: We have the following resource. &#x60;&#x60;&#x60; {  \&quot;rolloutPercentageItems\&quot;: [   {    \&quot;percentage\&quot;: 30,    \&quot;value\&quot;: true   },   {    \&quot;percentage\&quot;: 70,    \&quot;value\&quot;: false   }  ],  \&quot;rolloutRules\&quot;: [],  \&quot;value\&quot;: false } &#x60;&#x60;&#x60; If we send a replace request body as below: &#x60;&#x60;&#x60; {  \&quot;value\&quot;: true } &#x60;&#x60;&#x60; Then besides that the default served value is set to &#x60;true&#x60;, all the Percentage Rules are deleted.  So we get a response like this: &#x60;&#x60;&#x60; {  \&quot;rolloutPercentageItems\&quot;: [],  \&quot;rolloutRules\&quot;: [],  \&quot;value\&quot;: true } &#x60;&#x60;&#x60;
     * @param settingKeyOrId The key or id of the Setting.
     * @param updateSettingValueModel 
     * @param reason The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on.
     * @param xCONFIGCATSDKKEY The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public replaceSettingValueBySdkkey(settingKeyOrId: string, updateSettingValueModel: UpdateSettingValueModel, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<SettingValueModel>;
    public replaceSettingValueBySdkkey(settingKeyOrId: string, updateSettingValueModel: UpdateSettingValueModel, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpResponse<SettingValueModel>>;
    public replaceSettingValueBySdkkey(settingKeyOrId: string, updateSettingValueModel: UpdateSettingValueModel, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpEvent<SettingValueModel>>;
    public replaceSettingValueBySdkkey(settingKeyOrId: string, updateSettingValueModel: UpdateSettingValueModel, reason?: string, xCONFIGCATSDKKEY?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<any> {
        if (settingKeyOrId === null || settingKeyOrId === undefined) {
            throw new Error('Required parameter settingKeyOrId was null or undefined when calling replaceSettingValueBySdkkey.');
        }
        if (updateSettingValueModel === null || updateSettingValueModel === undefined) {
            throw new Error('Required parameter updateSettingValueModel was null or undefined when calling replaceSettingValueBySdkkey.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (reason !== undefined && reason !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>reason, 'reason');
        }

        let localVarHeaders = this.defaultHeaders;
        if (xCONFIGCATSDKKEY !== undefined && xCONFIGCATSDKKEY !== null) {
            localVarHeaders = localVarHeaders.set('X-CONFIGCAT-SDKKEY', String(xCONFIGCATSDKKEY));
        }

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
                'application/json',
                'application/hal+json'
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

        let localVarPath = `/v1/settings/${this.configuration.encodeParam({name: "settingKeyOrId", value: settingKeyOrId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/value`;
        return this.httpClient.request<SettingValueModel>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: updateSettingValueModel,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update value
     * This endpoint updates the value of a Feature Flag or Setting  with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment identified by the &lt;a target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot; href&#x3D;\&quot;https://app.configcat.com/sdkkey\&quot;&gt;SDK key&lt;/a&gt; passed in the &#x60;X-CONFIGCAT-SDKKEY&#x60; header.  Only the &#x60;value&#x60;, &#x60;rolloutRules&#x60; and &#x60;percentageRules&#x60; attributes are modifiable by this endpoint.  The advantage of using JSON Patch is that you can describe individual update operations on a resource without touching attributes that you don\&#39;t want to change. It supports collection reordering, so it also  can be used for reordering the targeting rules of a Feature Flag or Setting.  For example: We have the following resource. &#x60;&#x60;&#x60; {  \&quot;rolloutPercentageItems\&quot;: [   {    \&quot;percentage\&quot;: 30,    \&quot;value\&quot;: true   },   {    \&quot;percentage\&quot;: 70,    \&quot;value\&quot;: false   }  ],  \&quot;rolloutRules\&quot;: [],  \&quot;value\&quot;: false } &#x60;&#x60;&#x60; If we send an update request body as below: &#x60;&#x60;&#x60; [  {   \&quot;op\&quot;: \&quot;replace\&quot;,   \&quot;path\&quot;: \&quot;/value\&quot;,   \&quot;value\&quot;: true  } ] &#x60;&#x60;&#x60; Only the default served value is going to be set to &#x60;true&#x60; and all the Percentage Rules are remaining unchanged. So we get a response like this: &#x60;&#x60;&#x60; {  \&quot;rolloutPercentageItems\&quot;: [   {    \&quot;percentage\&quot;: 30,    \&quot;value\&quot;: true   },   {    \&quot;percentage\&quot;: 70,    \&quot;value\&quot;: false   }  ],  \&quot;rolloutRules\&quot;: [],  \&quot;value\&quot;: true } &#x60;&#x60;&#x60;
     * @param settingKeyOrId The key or id of the Setting.
     * @param jsonPatchOperation 
     * @param reason The reason note for the Audit Log if the Product\&#39;s \&quot;Config changes require a reason\&quot; preference is turned on.
     * @param xCONFIGCATSDKKEY The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSettingValueBySdkkey(settingKeyOrId: string, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<SettingValueModel>;
    public updateSettingValueBySdkkey(settingKeyOrId: string, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpResponse<SettingValueModel>>;
    public updateSettingValueBySdkkey(settingKeyOrId: string, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, xCONFIGCATSDKKEY?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpEvent<SettingValueModel>>;
    public updateSettingValueBySdkkey(settingKeyOrId: string, jsonPatchOperation: Array<JsonPatchOperation>, reason?: string, xCONFIGCATSDKKEY?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<any> {
        if (settingKeyOrId === null || settingKeyOrId === undefined) {
            throw new Error('Required parameter settingKeyOrId was null or undefined when calling updateSettingValueBySdkkey.');
        }
        if (jsonPatchOperation === null || jsonPatchOperation === undefined) {
            throw new Error('Required parameter jsonPatchOperation was null or undefined when calling updateSettingValueBySdkkey.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (reason !== undefined && reason !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>reason, 'reason');
        }

        let localVarHeaders = this.defaultHeaders;
        if (xCONFIGCATSDKKEY !== undefined && xCONFIGCATSDKKEY !== null) {
            localVarHeaders = localVarHeaders.set('X-CONFIGCAT-SDKKEY', String(xCONFIGCATSDKKEY));
        }

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
                'application/json',
                'application/hal+json'
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

        let localVarPath = `/v1/settings/${this.configuration.encodeParam({name: "settingKeyOrId", value: settingKeyOrId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/value`;
        return this.httpClient.request<SettingValueModel>('patch', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: jsonPatchOperation,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
