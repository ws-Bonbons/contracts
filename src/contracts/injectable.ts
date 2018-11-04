import { Constructor, AbstractType, ScopeID } from "./base";

/**
 * 描述了依赖项在整个容器中的生命周期情况
 * @description
 * @export
 * @enum {number}
 */
export enum InjectScope {
  Singleton = 0,
  Scope = 1,
  New = 2
}

export interface IBonbonsInjectable {
  __valid?: boolean;
}

export type InjectableToken<T> = AbstractType<T>;

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

export type ImplementToken<T> = ImplementType<T>;

export type IInjectable = Constructor<IBonbonsInjectable>;

/** 依赖注入项工长 */
export type ImplementFactory<T> = (scopeId?: ScopeID, scopeData?: any) => T;
export type BonbonsDeptFactory<T> = ImplementFactory<T>;

export type InjectDIToken<T = any> = Constructor<T> | AbstractType<T>;
export type InjectToken<T = any> = InjectDIToken<T>;
export type ImplementDIValue<T = any> = ImplementType<T> | T | ImplementFactory<T>;
export type Implement<T = any> = ImplementDIValue<T>;
