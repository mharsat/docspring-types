/**
 * API v1
 * DocSpring is a service that helps you fill out and sign PDF templates.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { HtmlTemplateData } from './htmlTemplateData';

export class CreateHtmlTemplateData {
    'template': HtmlTemplateData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "template",
            "baseName": "template",
            "type": "HtmlTemplateData"
        }    ];

    static getAttributeTypeMap() {
        return CreateHtmlTemplateData.attributeTypeMap;
    }
}

