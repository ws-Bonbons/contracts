import { Async, Constructor, IBonbonsContext } from "./base";

export type PipeParamType = string | number | boolean;
export type PipeArrayParams = Array<PipeParamType>;
export interface PipeMapParams {
  "@params"?: PipeMapParams;
  [key: string]: any;
}

export interface PipeProcessContinueResult {
  breakOut: false;
}

export interface PipeProcessBreakResult {
  breakOut: true;
  error?: Error;
}

export type PipeProcessResult = (PipeProcessContinueResult | PipeProcessBreakResult) | void;

/**
 * Bonbons pipe struct
 * ---
 * @description
 * @author Big Mogician
 * @export
 * @interface IPipe
 * @template T
 */
export interface IPipe<T = any> {
  params: T;
  context: IBonbonsContext;
  process(): Async<PipeProcessResult> | PipeProcessResult;
}

export interface IBonbonsPipeMetadata {
  keyMatch?: Array<[(string | number), string]>;
}

/**
 * Pipe init lifecycle hook
 * ---
 * implement this hook to provide pipe initilalization ability.
 *
 * @description
 * @author Big Mogician
 * @export
 * @interface PipeOnInit
 */
export interface PipeOnInit {
  /**
   * Oninit lifycycle method
   * ---
   * this function will be called automatically when pipe init.
   *
   * @description
   * @author Big Mogician
   * @memberof PipeOnInit
   */
  pipeOnInit(): void;
}

export interface IPipeFactory<T> {
  (): Constructor<IPipe<T>>;
}

/**
 * Pipe bundle
 * ---
 * contains the factory and params for pipe.
 *
 * @description
 * @author Big Mogician
 * @export
 * @interface IPipeBundle
 * @template T
 */
export interface IPipeBundle<T> {
  params: T;
  target: Constructor<IPipe<T>>;
}

export type BonbonsPipeEntry<T = any> = IPipeBundle<T> | Constructor<IPipe<any>>;
