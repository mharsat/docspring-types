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

import { RequestFile } from "./models";

export class AddFieldsTemplateResponse {
  "status": AddFieldsTemplateResponse.StatusEnum;
  "errors"?: Array<string>;
  "newFieldIds"?: Array<number>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "status",
      baseName: "status",
      type: "AddFieldsTemplateResponse.StatusEnum",
    },
    {
      name: "errors",
      baseName: "errors",
      type: "Array<string>",
    },
    {
      name: "newFieldIds",
      baseName: "new_field_ids",
      type: "Array<number>",
    },
  ];

  static getAttributeTypeMap() {
    return AddFieldsTemplateResponse.attributeTypeMap;
  }
}

export namespace AddFieldsTemplateResponse {
  export enum StatusEnum {
    Success = "success",
    Error = "error",
  }
}
