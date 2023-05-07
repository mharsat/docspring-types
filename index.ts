export * from "./api";
import {
  PDFApi,
  CreateSubmissionResponse as CreateSubmissionResponseCamel,
} from "./api";

export class Configuration {
  public apiTokenId?: string;
  public apiTokenSecret?: string;
  public basePath?: string;
}

type ParametersExceptLast<T extends (...args: any[]) => any> = T extends (
  ...args: [...infer P, any]
) => any
  ? P
  : never;

type ConcatParameters<T extends any[], U extends any[]> = [...T, ...U];

type CallbackParameter<T extends (...args: any[]) => any> = [
  callback: (
    error?: any,
    data?: SnakeCaseInterface<Awaited<ReturnType<T>>["body"]>,
    response?: any
  ) => void
];

export declare class Client {
  constructor(config: Configuration);
  generatePDF: (
    ...args: ConcatParameters<
      ParametersExceptLast<typeof PDFApi.prototype.generatePDF>,
      CallbackParameter<typeof PDFApi.prototype.generatePDF>
    >
  ) => void;
  getTemplateSchema: (
    ...args: ConcatParameters<
      ParametersExceptLast<typeof PDFApi.prototype.getTemplateSchema>,
      CallbackParameter<typeof PDFApi.prototype.getTemplateSchema>
    >
  ) => void;
}

type SnakeCase<T extends string> = T extends `${infer Head}${infer Tail}`
  ? `${Head extends Capitalize<Head>
      ? "_"
      : ""}${Lowercase<Head>}${SnakeCase<Tail>}`
  : T;

type SnakeCaseInterface<T extends Record<string, any>> = {
  [Key in keyof T as SnakeCase<Key & string>]: SnakeCaseInterface<T[Key]>;
};

export type CreateSubmissionResponse =
  SnakeCaseInterface<CreateSubmissionResponseCamel>;
