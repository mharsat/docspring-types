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

export class FullTemplateDefaults {
    'color': string | null;
    'fontSize': number;
    'typeface': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "fontSize",
            "baseName": "fontSize",
            "type": "number"
        },
        {
            "name": "typeface",
            "baseName": "typeface",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FullTemplateDefaults.attributeTypeMap;
    }
}

