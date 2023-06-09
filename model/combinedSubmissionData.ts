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

export class CombinedSubmissionData {
    'expiresIn'?: number;
    'metadata'?: object;
    'password'?: string;
    'submissionIds': Array<string>;
    'test'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expiresIn",
            "baseName": "expires_in",
            "type": "number"
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
            "name": "submissionIds",
            "baseName": "submission_ids",
            "type": "Array<string>"
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CombinedSubmissionData.attributeTypeMap;
    }
}

