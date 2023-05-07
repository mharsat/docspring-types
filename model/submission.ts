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
import { SubmissionAction } from "./submissionAction";
import { SubmissionDataRequest } from "./submissionDataRequest";

export class Submission {
  "id": string;
  "templateId"?: string;
  "test": boolean;
  "editable"?: boolean | null;
  "expired": boolean;
  "expiresAt"?: string | null;
  "processedAt"?: string | null;
  "state": Submission.StateEnum;
  "data"?: object | null;
  "metadata"?: object;
  "truncatedText"?: object;
  "pdfHash"?: string | null;
  "downloadUrl"?: string | null;
  "permanentDownloadUrl"?: string | null;
  "batchId"?: string | null;
  "dataRequests"?: Array<SubmissionDataRequest>;
  "actions"?: Array<SubmissionAction>;
  "source"?: string | null;
  "referrer"?: string | null;

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
      name: "templateId",
      baseName: "template_id",
      type: "string",
    },
    {
      name: "test",
      baseName: "test",
      type: "boolean",
    },
    {
      name: "editable",
      baseName: "editable",
      type: "boolean",
    },
    {
      name: "expired",
      baseName: "expired",
      type: "boolean",
    },
    {
      name: "expiresAt",
      baseName: "expires_at",
      type: "string",
    },
    {
      name: "processedAt",
      baseName: "processed_at",
      type: "string",
    },
    {
      name: "state",
      baseName: "state",
      type: "Submission.StateEnum",
    },
    {
      name: "data",
      baseName: "data",
      type: "object",
    },
    {
      name: "metadata",
      baseName: "metadata",
      type: "object",
    },
    {
      name: "truncatedText",
      baseName: "truncated_text",
      type: "object",
    },
    {
      name: "pdfHash",
      baseName: "pdf_hash",
      type: "string",
    },
    {
      name: "downloadUrl",
      baseName: "download_url",
      type: "string",
    },
    {
      name: "permanentDownloadUrl",
      baseName: "permanent_download_url",
      type: "string",
    },
    {
      name: "batchId",
      baseName: "batch_id",
      type: "string",
    },
    {
      name: "dataRequests",
      baseName: "data_requests",
      type: "Array<SubmissionDataRequest>",
    },
    {
      name: "actions",
      baseName: "actions",
      type: "Array<SubmissionAction>",
    },
    {
      name: "source",
      baseName: "source",
      type: "string",
    },
    {
      name: "referrer",
      baseName: "referrer",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return Submission.attributeTypeMap;
  }
}

export namespace Submission {
  export enum StateEnum {
    Pending = "pending",
    Processed = "processed",
    InvalidData = "invalid_data",
    Error = "error",
    ImageDownloadFailed = "image_download_failed",
    ImageProcessingFailed = "image_processing_failed",
    WaitingForDataRequests = "waiting_for_data_requests",
    SyntaxError = "syntax_error",
    AccountSuspended = "account_suspended",
    LicenseRevoked = "license_revoked",
    Accidental = "accidental",
  }
}
