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

export class SubmissionAction {
  "id": string;
  "integrationId": string | null;
  "state": SubmissionAction.StateEnum;
  "actionCategory": SubmissionAction.ActionCategoryEnum;
  "actionType": SubmissionAction.ActionTypeEnum;
  "resultData": object;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "integrationId",
      baseName: "integration_id",
      type: "string",
    },
    {
      name: "state",
      baseName: "state",
      type: "SubmissionAction.StateEnum",
    },
    {
      name: "actionCategory",
      baseName: "action_category",
      type: "SubmissionAction.ActionCategoryEnum",
    },
    {
      name: "actionType",
      baseName: "action_type",
      type: "SubmissionAction.ActionTypeEnum",
    },
    {
      name: "resultData",
      baseName: "result_data",
      type: "object",
    },
  ];

  static getAttributeTypeMap() {
    return SubmissionAction.attributeTypeMap;
  }
}

export namespace SubmissionAction {
  export enum StateEnum {
    Pending = "pending",
    Processed = "processed",
    Failed = "failed",
    Error = "error",
  }
  export enum ActionCategoryEnum {
    Notification = "notification",
    FileUpload = "file_upload",
  }
  export enum ActionTypeEnum {
    Webhook = "webhook",
    SlackWebhook = "slack_webhook",
    Email = "email",
    AwsS3Upload = "aws_s3_upload",
  }
}