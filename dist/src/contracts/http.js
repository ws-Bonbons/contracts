"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.Axios = axios_1.default;
// const x = axios.p
class HttpClient {
    constructor(host) {
        this.host = host;
    }
    request(method, url, config) {
        const cfg = config || {};
        const headers = cfg.headers || {};
        const data = cfg.data || {};
        if (cfg.contentType) {
            headers["Content-Type"] = cfg.contentType;
        }
        return axios_1.default[method.toLowerCase()](this.host + url, Object.assign({}, cfg, { data: method === "GET" ? null : data, headers: Object.assign({ "Content-Type": "application/json" }, headers) }));
    }
    get(url, config) {
        return this.request("GET", url, config);
    }
    post(url, config) {
        return this.request("POST", url, config);
    }
    put(url, config) {
        return this.request("PUT", url, config);
    }
    delete(url, config) {
        return this.request("DELETE", url, config);
    }
    patch(url, config) {
        return this.request("PATCH", url, config);
    }
    head(url, config) {
        return this.request("HEAD", url, config);
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=http.js.map