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
import { CustomFile } from "./customFile";

export class CreateCustomFileResponse {
  "status": CreateCustomFileResponse.StatusEnum;
  "errors"?: Array<string>;
  "customFile": CustomFile;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "status",
      baseName: "status",
      type: "CreateCustomFileResponse.StatusEnum",
    },
    {
      name: "errors",
      baseName: "errors",
      type: "Array<string>",
    },
    {
      name: "customFile",
      baseName: "custom_file",
      type: "CustomFile",
    },
  ];

  static getAttributeTypeMap() {
    return CreateCustomFileResponse.attributeTypeMap;
  }
}

export namespace CreateCustomFileResponse {
  export enum StatusEnum {
    Success = "success",
    Error = "error",
  }
}