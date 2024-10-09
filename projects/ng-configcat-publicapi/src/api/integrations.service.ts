/**
 * ConfigCat Public Management API
 * The purpose of this API is to access the ConfigCat platform programmatically. You can **Create**, **Read**, **Update** and **Delete** any entities like **Feature Flags, Configs, Environments** or **Products** within ConfigCat.  **Base API URL**: https://api.configcat.com  If you prefer the swagger documentation, you can find it here: [Swagger UI](https://api.configcat.com/swagger).  The API is based on HTTP REST, uses resource-oriented URLs, status codes and supports JSON  format.   **Important:** Do not use this API for accessing and evaluating feature flag values. Use the [SDKs](https://configcat.com/docs/sdk-reference/overview) or the [ConfigCat Proxy](https://configcat.com/docs/advanced/proxy/proxy-overview/) instead.  # OpenAPI Specification  The complete specification is publicly available in the following formats:  - [OpenAPI v3](https://api.configcat.com/docs/v1/swagger.json) - [Swagger v2](https://api.configcat.com/docs/v1/swagger.v2.json)  You can use it to generate client libraries in various languages with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) to interact with this API.  # Authentication This API uses the [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication).   <!-- ReDoc-Inject: <security-definitions> -->  # Throttling and rate limits All the rate limited API calls are returning information about the current rate limit period in the following HTTP headers:  | Header | Description | | :- | :- | | X-Rate-Limit-Remaining | The maximum number of requests remaining in the current rate limit period. | | X-Rate-Limit-Reset     | The time when the current rate limit period resets.        |  When the rate limit is exceeded by a request, the API returns with a `HTTP 429 - Too many requests` status along with a `Retry-After` HTTP header. 
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
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent, HttpParameterCodec, HttpContext }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { CreateIntegrationModel } from '../model/createIntegrationModel';
// @ts-ignore
import { IntegrationModel } from '../model/integrationModel';
// @ts-ignore
import { IntegrationsModel } from '../model/integrationsModel';
// @ts-ignore
import { ModifyIntegrationRequest } from '../model/modifyIntegrationRequest';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class IntegrationsService {

    protected basePath = 'https://api.configcat.com';
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
     * Create Integration
     * This endpoint creates a new Integration in a specified Product  identified by the &#x60;productId&#x60; parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.  The Parameters dictionary differs for each IntegrationType: - Datadog  - &#x60;apikey&#x60;: Required. Datadog API key.  - &#x60;site&#x60;: Datadog site. Available values: &#x60;Us&#x60;, &#x60;Eu&#x60;, &#x60;Us1Fed&#x60;, &#x60;Us3&#x60;, &#x60;Us5&#x60;. Default: &#x60;Us&#x60;. - Slack    Connecting the Slack integration through the Public Management API will not post messages with the ConfigCat Feature Flags Slack app but with an incoming webhook.  - &#x60;incoming_webhook.url&#x60;: Required. The [incoming webhook URL](https://api.slack.com/messaging/webhooks) where the integration should post messages. - Amplitude  - &#x60;apiKey&#x60;: Required. Amplitude API Key.  - &#x60;secretKey&#x60;: Required. Amplitude Secret Key. - Mixpanel  - &#x60;serviceAccountUserName&#x60;: Required. Mixpanel Service Account Username.  - &#x60;serviceAccountSecret&#x60;: Required. Mixpanel Service Account Secret.  - &#x60;projectId&#x60;: Required. Mixpanel Project ID.  - &#x60;server&#x60;: Mixpanel Server. Available values: &#x60;StandardServer&#x60;, &#x60;EUResidencyServer&#x60;. Default: &#x60;StandardServer&#x60;. - Twilio Segment  - &#x60;writeKey&#x60;: Required. Twilio Segment Write Key.  - &#x60;server&#x60;: Twilio Segment Server. Available values: &#x60;Us&#x60;, &#x60;Eu&#x60;. Default: &#x60;Us&#x60;. - PubNub (work in progress)
     * @param productId The identifier of the Product.
     * @param createIntegrationModel 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createIntegration(productId: string, createIntegrationModel: CreateIntegrationModel, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<IntegrationModel>;
    public createIntegration(productId: string, createIntegrationModel: CreateIntegrationModel, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<IntegrationModel>>;
    public createIntegration(productId: string, createIntegrationModel: CreateIntegrationModel, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<IntegrationModel>>;
    public createIntegration(productId: string, createIntegrationModel: CreateIntegrationModel, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling createIntegration.');
        }
        if (createIntegrationModel === null || createIntegrationModel === undefined) {
            throw new Error('Required parameter createIntegrationModel was null or undefined when calling createIntegration.');
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

        let localVarPath = `/v1/products/${this.configuration.encodeParam({name: "productId", value: productId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/integrations`;
        return this.httpClient.request<IntegrationModel>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createIntegrationModel,
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
     * Delete Integration
     * This endpoint removes a Integration identified by the &#x60;integrationId&#x60; parameter.
     * @param integrationId The identifier of the Integration.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteIntegration(integrationId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext, transferCache?: boolean}): Observable<any>;
    public deleteIntegration(integrationId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
    public deleteIntegration(integrationId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<any>>;
    public deleteIntegration(integrationId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined, context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (integrationId === null || integrationId === undefined) {
            throw new Error('Required parameter integrationId was null or undefined when calling deleteIntegration.');
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

        let localVarPath = `/v1/integrations/${this.configuration.encodeParam({name: "integrationId", value: integrationId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}`;
        return this.httpClient.request<any>('delete', `${this.configuration.basePath}${localVarPath}`,
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
     * Get Integration
     * This endpoint returns the metadata of an Integration identified by the &#x60;integrationId&#x60;.
     * @param integrationId The identifier of the Integration.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getIntegration(integrationId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<IntegrationModel>;
    public getIntegration(integrationId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<IntegrationModel>>;
    public getIntegration(integrationId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<IntegrationModel>>;
    public getIntegration(integrationId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (integrationId === null || integrationId === undefined) {
            throw new Error('Required parameter integrationId was null or undefined when calling getIntegration.');
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

        let localVarPath = `/v1/integrations/${this.configuration.encodeParam({name: "integrationId", value: integrationId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}`;
        return this.httpClient.request<IntegrationModel>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * List Integrations
     * This endpoint returns the list of the Integrations that belongs to the given Product identified by the &#x60;productId&#x60; parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     * @param productId The identifier of the Product.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getIntegrations(productId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<IntegrationsModel>;
    public getIntegrations(productId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<IntegrationsModel>>;
    public getIntegrations(productId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<IntegrationsModel>>;
    public getIntegrations(productId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling getIntegrations.');
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

        let localVarPath = `/v1/products/${this.configuration.encodeParam({name: "productId", value: productId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/integrations`;
        return this.httpClient.request<IntegrationsModel>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * Update Integration
     * This endpoint updates a Config identified by the &#x60;integrationId&#x60; parameter.  The Parameters dictionary differs for each IntegrationType: - Datadog  - &#x60;apikey&#x60;: Required. Datadog API key.  - &#x60;site&#x60;: Datadog site. Available values: &#x60;Us&#x60;, &#x60;Eu&#x60;, &#x60;Us1Fed&#x60;, &#x60;Us3&#x60;, &#x60;Us5&#x60;. Default: &#x60;Us&#x60;. - Slack    Connecting the Slack integration through the Public Management API will not post messages with the ConfigCat Feature Flags Slack app but with an incoming webhook.  - &#x60;incoming_webhook.url&#x60;: Required. The [incoming webhook URL](https://api.slack.com/messaging/webhooks) where the integration should post messages. - Amplitude  - &#x60;apiKey&#x60;: Required. Amplitude API Key.  - &#x60;secretKey&#x60;: Required. Amplitude Secret Key. - Mixpanel  - &#x60;serviceAccountUserName&#x60;: Required. Mixpanel Service Account Username.  - &#x60;serviceAccountSecret&#x60;: Required. Mixpanel Service Account Secret.  - &#x60;projectId&#x60;: Required. Mixpanel Project ID.  - &#x60;server&#x60;: Mixpanel Server. Available values: &#x60;StandardServer&#x60;, &#x60;EUResidencyServer&#x60;. Default: &#x60;StandardServer&#x60;. - Twilio Segment  - &#x60;writeKey&#x60;: Required. Twilio Segment Write Key.  - &#x60;server&#x60;: Twilio Segment Server. Available values: &#x60;Us&#x60;, &#x60;Eu&#x60;. Default: &#x60;Us&#x60;. - PubNub (work in progress)
     * @param integrationId The identifier of the Integration.
     * @param modifyIntegrationRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateIntegration(integrationId: string, modifyIntegrationRequest: ModifyIntegrationRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<IntegrationModel>;
    public updateIntegration(integrationId: string, modifyIntegrationRequest: ModifyIntegrationRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<IntegrationModel>>;
    public updateIntegration(integrationId: string, modifyIntegrationRequest: ModifyIntegrationRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<IntegrationModel>>;
    public updateIntegration(integrationId: string, modifyIntegrationRequest: ModifyIntegrationRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (integrationId === null || integrationId === undefined) {
            throw new Error('Required parameter integrationId was null or undefined when calling updateIntegration.');
        }
        if (modifyIntegrationRequest === null || modifyIntegrationRequest === undefined) {
            throw new Error('Required parameter modifyIntegrationRequest was null or undefined when calling updateIntegration.');
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

        let localVarPath = `/v1/integrations/${this.configuration.encodeParam({name: "integrationId", value: integrationId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}`;
        return this.httpClient.request<IntegrationModel>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: modifyIntegrationRequest,
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
