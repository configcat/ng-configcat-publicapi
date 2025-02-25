/**
 * ConfigCat Public Management API
 *
 * Contact: support@configcat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { WebhookConfig } from './webhookConfig';
import { WebHookHttpMethod } from './webHookHttpMethod';
import { WebhookEnvironment } from './webhookEnvironment';
import { WebhookHeaderModel } from './webhookHeaderModel';


export interface WebhookModel { 
    /**
     * The identifier of the Webhook.
     */
    webhookId?: number;
    /**
     * The URL of the Webhook.
     */
    url?: string | null;
    httpMethod?: WebHookHttpMethod;
    /**
     * The HTTP body content.
     */
    content?: string | null;
    /**
     * List of HTTP headers that the Webhook must send.
     */
    webHookHeaders?: Array<WebhookHeaderModel> | null;
    config?: WebhookConfig;
    environment?: WebhookEnvironment;
}
export namespace WebhookModel {
}


