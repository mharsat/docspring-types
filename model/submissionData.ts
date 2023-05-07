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
import { CreateSubmissionDataRequestData } from './createSubmissionDataRequestData';

export class SubmissionData {
    'css'?: string;
    'data': object;
    'dataRequests'?: Array<CreateSubmissionDataRequestData>;
    'expiresIn'?: number;
    'fieldOverrides'?: object;
    'html'?: string;
    'metadata'?: object;
    'password'?: string;
    'test'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "css",
            "baseName": "css",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "object"
        },
        {
            "name": "dataRequests",
            "baseName": "data_requests",
            "type": "Array<CreateSubmissionDataRequestData>"
        },
        {
            "name": "expiresIn",
            "baseName": "expires_in",
            "type": "number"
        },
        {
            "name": "fieldOverrides",
            "baseName": "field_overrides",
            "type": "object"
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SubmissionData.attributeTypeMap;
    }
}

