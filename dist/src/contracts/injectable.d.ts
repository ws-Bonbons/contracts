import { Constructor } from "./base";
export declare enum InjectScope {
    Singleton = "SINGLETON_INJECTION",
    Scoped = "SCOPED_INJECTION"
}
export interface IBonbonsInjectable {
    __valid?: boolean;
}
export interface InjectableToken<T> {
    prototype?: T;
}
export interface ImplementToken<T extends IBonbonsInjectable> {
    prototype?: T;
}
export declare type IInjectable = Constructor<IBonbonsInjectable>;
export declare type BonbonsDeptFactory<T> = () => T;
export declare type InjectDIToken<T extends IBonbonsInjectable = IBonbonsInjectable> = Constructor<T> | InjectableToken<any>;
export declare type ImplementDIValue<T extends IBonbonsInjectable = IBonbonsInjectable> = ImplementToken<T> | T | BonbonsDeptFactory<T>;
