import { Constructor } from "./base";

export enum InjectScope {
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

export type IInjectable = Constructor<IBonbonsInjectable>;

export type BonbonsDeptFactory<T> = () => T;

export type InjectDIToken<T extends IBonbonsInjectable = IBonbonsInjectable> = Constructor<T> | InjectableToken<any>;
export type ImplementDIValue<T extends IBonbonsInjectable = IBonbonsInjectable> = ImplementToken<T> | T | BonbonsDeptFactory<T>;
