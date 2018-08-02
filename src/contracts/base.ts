import { KOARequest, KOAResponse } from "./source";

export interface IENV {
  mode: "development" | "production";
  trace: boolean;
}

export interface IDepolyENV {
  port: number;
}

export interface Constructor<T> {
  new(...args: any[]): T;
  prototype: T;
}

export interface AbstractType<T> {
  prototype: T;
}

/** 用来区分范围的id，范围注入依赖于这个id来实现 */
export type ScopeID = string | Symbol;

/** 描述一个类型的变量一定不为undefined */
export type Exist<T> = Exclude<T, undefined>;

/** 描述一个必不为undefined的变量是可能为null的 */
export type Nullable<T> = Exist<T> | null;

export interface IStaticTypedResolver {
  /** Convert static typed instance to JSON text */
  ToJSON(obj: any, format?: boolean): string;
  /** Convert JSON text to static typed instance */
  FromJSON<T>(json: string, type?: Constructor<T>): T;
  /** Convert static typed instance to javascript object */
  ToObject(obj: any, format?: boolean): any;
  /** Convert javascript object to static typed instance */
  FromObject<T>(json: any, type?: Constructor<T>): T;
}

export enum FormType {
  MultipleFormData = "multiple",
  MultipleFile = "files",
  ApplicationJson = "json",
  UrlEncoded = "url",
  TextPlain = "text",
  Raw = "raw"
}

export type Async<T> = Promise<T>;

export interface IBonbonsContext {
  request: KOARequest;
  response: KOAResponse;
  views: { [prop: string]: any };
  query: { [prop: string]: any };
  params: { [prop: string]: any };
  form: { [prop: string]: any };
  get(name: string, type: NumberConstructor): number | null;
  get(name: string, type: BooleanConstructor): boolean | null;
  get(name: string, type: StringConstructor): string | null;
  get(name: string): string | null;
  getNumber(name: string): number | null;
  getBoolean(name: string): boolean | null;
  setStatus(status: number): IBonbonsContext;
  setType(type: string): IBonbonsContext;
}
