/// <reference types="koa" />
/// <reference types="koa-bodyparser" />
import { KOARequest, KOAResponse } from "./source";
export interface IENV {
    mode?: "development" | "production";
    trace?: boolean;
}
export interface IDepolyENV {
    port?: number;
}
export interface IConstructor<T> {
    new (...args: any[]): T;
}
export interface IStaticTypedResolver {
    /** Convert static typed instance to JSON text */
    ToJSON(obj: any, format?: boolean): string;
    /** Convert JSON text to static typed instance */
    FromJSON<T>(json: string, type?: IConstructor<T>): T;
    /** Convert static typed instance to javascript object */
    ToObject(obj: any, format?: boolean): any;
    /** Convert javascript object to static typed instance */
    FromObject<T>(json: any, type?: IConstructor<T>): T;
}
export declare enum FormType {
    MultipleFormData = "multiple",
    MultipleFile = "files",
    ApplicationJson = "json",
    UrlEncoded = "url",
    TextPlain = "text",
    Raw = "raw"
}
export declare type Async<T> = Promise<T>;
export interface IBonbonsContext {
    request: KOARequest;
    response: KOAResponse;
    views: {
        [prop: string]: any;
    };
    query: {
        [prop: string]: any;
    };
    params: {
        [prop: string]: any;
    };
    form: {
        [prop: string]: any;
    };
    get(name: string, type: NumberConstructor): number | null;
    get(name: string, type: BooleanConstructor): boolean | null;
    get(name: string, type: StringConstructor): string | null;
    get(name: string): string | null;
    getNumber(name: string): number | null;
    getBoolean(name: string): boolean | null;
    setStatus(status: number): IBonbonsContext;
    setType(type: string): IBonbonsContext;
}