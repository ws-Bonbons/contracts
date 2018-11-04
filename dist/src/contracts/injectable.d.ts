import { Constructor, AbstractType, ScopeID } from "./base";
/**
 * 描述了依赖项在整个容器中的生命周期情况
 * @description
 * @export
 * @enum {number}
 */
export declare enum InjectScope {
    Singleton = 0,
    Scope = 1,
    New = 2
}
export interface IBonbonsInjectable {
    __valid?: boolean;
}
export declare type InjectableToken<T> = AbstractType<T>;
/**
 * 描述一个实现类型的构造函数
 * @description
 * @author Big Mogician
 * @export
 * @interface ImplementType
 * @template T
 */
export interface ImplementType<T extends any> {
    prototype?: T;
}
export declare type ImplementToken<T> = ImplementType<T>;
export declare type IInjectable = Constructor<IBonbonsInjectable>;
/** 依赖注入项工长 */
export declare type ImplementFactory<T> = (scopeId?: ScopeID, scopeData?: any) => T;
export declare type BonbonsDeptFactory<T> = ImplementFactory<T>;
export declare type InjectDIToken<T = any> = Constructor<T> | AbstractType<T>;
export declare type InjectToken<T = any> = InjectDIToken<T>;
export declare type ImplementDIValue<T = any> = ImplementType<T> | T | ImplementFactory<T>;
export declare type Implement<T = any> = ImplementDIValue<T>;
