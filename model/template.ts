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

export class Template {
  "name": string | null;
  "description": string | null;
  "publicWebForm": boolean;
  "publicSubmissions": boolean;
  "expireSubmissions": boolean;
  "expireAfter": number;
  "expirationInterval": Template.ExpirationIntervalEnum;
  "allowAdditionalProperties": boolean;
  "editableSubmissions": boolean;
  "locked": boolean;
  "webhookUrl": string | null;
  "slackWebhookUrl": string | null;
  "redirectUrl": string | null;
  "id": string;
  "templateType": string;
  "pageDimensions": Array<Array<number>> | null;
  "documentUrl": string | null;
  "permanentDocumentUrl": string | null;
  "path": string;
  "parentFolderId": string | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "description",
      baseName: "description",
      type: "string",
    },
    {
      name: "publicWebForm",
      baseName: "public_web_form",
      type: "boolean",
    },
    {
      name: "publicSubmissions",
      baseName: "public_submissions",
      type: "boolean",
    },
    {
      name: "expireSubmissions",
      baseName: "expire_submissions",
      type: "boolean",
    },
    {
      name: "expireAfter",
      baseName: "expire_after",
      type: "number",
    },
    {
      name: "expirationInterval",
      baseName: "expiration_interval",
      type: "Template.ExpirationIntervalEnum",
    },
    {
      name: "allowAdditionalProperties",
      baseName: "allow_additional_properties",
      type: "boolean",
    },
    {
      name: "editableSubmissions",
      baseName: "editable_submissions",
      type: "boolean",
    },
    {
      name: "locked",
      baseName: "locked",
      type: "boolean",
    },
    {
      name: "webhookUrl",
      baseName: "webhook_url",
      type: "string",
    },
    {
      name: "slackWebhookUrl",
      baseName: "slack_webhook_url",
      type: "string",
    },
    {
      name: "redirectUrl",
      baseName: "redirect_url",
      type: "string",
    },
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "templateType",
      baseName: "template_type",
      type: "string",
    },
    {
      name: "pageDimensions",
      baseName: "page_dimensions",
      type: "Array<Array<number>>",
    },
    {
      name: "documentUrl",
      baseName: "document_url",
      type: "string",
    },
    {
      name: "permanentDocumentUrl",
      baseName: "permanent_document_url",
      type: "string",
    },
    {
      name: "path",
      baseName: "path",
      type: "string",
    },
    {
      name: "parentFolderId",
      baseName: "parent_folder_id",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return Template.attributeTypeMap;
  }
}

export namespace Template {
  export enum ExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days",
  }
}
