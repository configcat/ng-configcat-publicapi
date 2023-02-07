/**
 * ConfigCat Public Management API
 * **Base API URL**: https://test-api.configcat.com  If you prefer the swagger documentation, you can find it here: [Swagger UI](https://test-api.configcat.com/swagger).  The purpose of this API is to access the ConfigCat platform programmatically.  You can **Create**, **Read**, **Update** and **Delete** any entities like **Feature Flags, Configs, Environments** or **Products** within ConfigCat.   The API is based on HTTP REST, uses resource-oriented URLs, status codes and supports JSON  and JSON+HAL format. Do not use this API for accessing and evaluating feature flag values. Use the [SDKs instead](https://configcat.com/docs/sdk-reference/overview).   # OpenAPI Specification  The complete specification is publicly available here: [swagger.json](v1/swagger.json).  You can use it to generate client libraries in various languages with [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) or [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) to interact with this API.  # Authentication This API uses the [Basic HTTP Authentication Scheme](https://en.wikipedia.org/wiki/Basic_access_authentication).   <!-- ReDoc-Inject: <security-definitions> -->  # Throttling and rate limits All the rate limited API calls are returning information about the current rate limit period in the following HTTP headers:  | Header | Description | | :- | :- | | X-Rate-Limit-Remaining | The maximum number of requests remaining in the current rate limit period. | | X-Rate-Limit-Reset     | The time when the current rate limit period resets.        |  When the rate limit is exceeded by a request, the API returns with a `HTTP 429 - Too many requests` status along with a `Retry-After` HTTP header. 
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
import { ConfigModel } from '../model/configModel';
// @ts-ignore
import { ConfigModelHaljson } from '../model/configModelHaljson';
// @ts-ignore
import { CreateConfigRequest } from '../model/createConfigRequest';
// @ts-ignore
import { UpdateConfigRequest } from '../model/updateConfigRequest';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

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
     * Create Config
     * This endpoint creates a new Config in a specified Product  identified by the &#x60;productId&#x60; parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     * @param productId The identifier of the Product.
     * @param createConfigRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createConfig(productId: string, createConfigRequest: CreateConfigRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<ConfigModel>;
    public createConfig(productId: string, createConfigRequest: CreateConfigRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpResponse<ConfigModel>>;
    public createConfig(productId: string, createConfigRequest: CreateConfigRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpEvent<ConfigModel>>;
    public createConfig(productId: string, createConfigRequest: CreateConfigRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<any> {
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling createConfig.');
        }
        if (createConfigRequest === null || createConfigRequest === undefined) {
            throw new Error('Required parameter createConfigRequest was null or undefined when calling createConfig.');
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

        let localVarPath = `/v1/products/${this.configuration.encodeParam({name: "productId", value: productId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/configs`;
        return this.httpClient.request<ConfigModel>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createConfigRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete Config
     * This endpoint removes a Config identified by the &#x60;configId&#x60; parameter.
     * @param configId The identifier of the Config.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteConfig(configId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext}): Observable<any>;
    public deleteConfig(configId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext}): Observable<HttpResponse<any>>;
    public deleteConfig(configId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined, context?: HttpContext}): Observable<HttpEvent<any>>;
    public deleteConfig(configId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined, context?: HttpContext}): Observable<any> {
        if (configId === null || configId === undefined) {
            throw new Error('Required parameter configId was null or undefined when calling deleteConfig.');
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

        let localVarPath = `/v1/configs/${this.configuration.encodeParam({name: "configId", value: configId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}`;
        return this.httpClient.request<any>('delete', `${this.configuration.basePath}${localVarPath}`,
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
     * Get Config
     * This endpoint returns the metadata of a Config identified by the &#x60;configId&#x60;.
     * @param configId The identifier of the Config.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getConfig(configId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<ConfigModel>;
    public getConfig(configId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpResponse<ConfigModel>>;
    public getConfig(configId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpEvent<ConfigModel>>;
    public getConfig(configId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<any> {
        if (configId === null || configId === undefined) {
            throw new Error('Required parameter configId was null or undefined when calling getConfig.');
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

        let localVarPath = `/v1/configs/${this.configuration.encodeParam({name: "configId", value: configId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}`;
        return this.httpClient.request<ConfigModel>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * List Configs
     * This endpoint returns the list of the Configs that belongs to the given Product identified by the &#x60;productId&#x60; parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     * @param productId The identifier of the Product.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getConfigs(productId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<Array<ConfigModel>>;
    public getConfigs(productId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpResponse<Array<ConfigModel>>>;
    public getConfigs(productId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpEvent<Array<ConfigModel>>>;
    public getConfigs(productId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<any> {
        if (productId === null || productId === undefined) {
            throw new Error('Required parameter productId was null or undefined when calling getConfigs.');
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

        let localVarPath = `/v1/products/${this.configuration.encodeParam({name: "productId", value: productId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}/configs`;
        return this.httpClient.request<Array<ConfigModel>>('get', `${this.configuration.basePath}${localVarPath}`,
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
     * Update Config
     * This endpoint updates a Config identified by the &#x60;configId&#x60; parameter.
     * @param configId The identifier of the Config.
     * @param updateConfigRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateConfig(configId: string, updateConfigRequest: UpdateConfigRequest, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<ConfigModel>;
    public updateConfig(configId: string, updateConfigRequest: UpdateConfigRequest, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpResponse<ConfigModel>>;
    public updateConfig(configId: string, updateConfigRequest: UpdateConfigRequest, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpEvent<ConfigModel>>;
    public updateConfig(configId: string, updateConfigRequest: UpdateConfigRequest, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<any> {
        if (configId === null || configId === undefined) {
            throw new Error('Required parameter configId was null or undefined when calling updateConfig.');
        }
        if (updateConfigRequest === null || updateConfigRequest === undefined) {
            throw new Error('Required parameter updateConfigRequest was null or undefined when calling updateConfig.');
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

        let localVarPath = `/v1/configs/${this.configuration.encodeParam({name: "configId", value: configId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid"})}`;
        return this.httpClient.request<ConfigModel>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: updateConfigRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
