import { InjectScope, IBonbonsInjectable, InjectDIToken, BonbonsDeptFactory, ImplementDIValue, InjectableToken } from "./injectable";
import { Constructor } from "./base";
export interface BonbonsToken<T> {
    key: symbol;
}
export interface BonbonsEntry<T> {
    token: BonbonsToken<T>;
    value: T;
}
export declare type BonbonsTokenGenerator = <T>(key: string) => BonbonsToken<T>;
export interface ConfigsCollection {
    get<T>(token: BonbonsToken<T>): T;
}
export interface BonbonsConfigCollection extends ConfigsCollection {
    set<T>(token: BonbonsToken<T>, entry: T): void;
    toArray(): BonbonsEntry<any>[];
}
export interface BonbonsDIEntry {
    getInstance(): any;
}
export interface ReadonlyDIContainer {
    get<T>(token: Constructor<T> | InjectableToken<T>): T;
}
export interface BonbonsDIContainer extends ReadonlyDIContainer {
    count: number;
    register(selector: InjectDIToken, value: any, scope: InjectScope): any;
    resolveDeps<T>(value: Constructor<T>): any[];
    complete(): void;
}
export interface BonbonsDeptNode<T extends IBonbonsInjectable = IBonbonsInjectable> {
    el: InjectDIToken<T>;
    realel: ImplementDIValue<T>;
    deps: Constructor<any>[];
    scope: InjectScope;
    fac?: BonbonsDeptFactory<T>;
}
