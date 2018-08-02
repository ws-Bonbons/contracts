import { InjectScope, IBonbonsInjectable, InjectDIToken, ImplementToken, BonbonsDeptFactory, ImplementDIValue, InjectableToken, ImplementFactory, InjectToken, Implement } from "./injectable";
import { Constructor, Nullable, ScopeID } from "./base";

export interface BonbonsToken<T> {
  key: symbol;
}

export interface BonbonsEntry<T> {
  token: BonbonsToken<T>;
  value: T;
}

export type BonbonsTokenGenerator = <T>(key: string) => BonbonsToken<T>;

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
  get<T>(token: InjectToken<T>): T;
}

export interface BonbonsDIContainer extends ReadonlyDIContainer {
  count: number;
  register<K, V>(token: InjectToken<K>, imp: Implement<V>, scope: InjectScope);
  getDepedencies<T>(depts: InjectToken[]): any[];
  getConfig(): any;
  complete(): void;
}

/**
 * 在依赖注入容器内部正常运作所需要提供的entry信息
 * @description
 * @author Big Mogician
 * @export
 * @interface DepedencyResolveEntry
 * @template T
 */
export interface DepedencyResolveEntry<T = any> {
  /** 注入令牌 */
  token: InjectToken<T>;
  /** 实现 */
  imp: any;
  /** 依赖的其他令牌数组 */
  depts: InjectToken[];
  /** 注入项的生命周期和解析范围 */
  scope: InjectScope;
}

/**
 * 依赖注入容器内部entry的完整信息
 * @description
 * @author Big Mogician
 * @export
 * @interface DIContainerEntry
 * @extends {DepedencyResolveEntry<T>}
 * @template T
 */
export interface DIContainerEntry<T> extends DepedencyResolveEntry<T> {
  /** 工程方法，手工提供或者由框架生成 */
  fac: Nullable<ImplementFactory<any>>;
  /** 包裹处理scope之后的工程方法，是解析依赖项的最终执行方法 */
  getInstance: Nullable<(scopeId?: ScopeID) => T | null>;
  /** 当前依赖项的依赖层级，高级依赖低级 */
  level: number;
}

