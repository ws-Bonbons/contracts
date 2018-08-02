"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 描述了依赖项在整个容器中的生命周期情况
 * @description
 * @export
 * @enum {number}
 */
var InjectScope;
(function (InjectScope) {
    InjectScope[InjectScope["Singleton"] = 0] = "Singleton";
    InjectScope[InjectScope["Scope"] = 1] = "Scope";
    InjectScope[InjectScope["New"] = 2] = "New";
})(InjectScope = exports.InjectScope || (exports.InjectScope = {}));
//# sourceMappingURL=injectable.js.map