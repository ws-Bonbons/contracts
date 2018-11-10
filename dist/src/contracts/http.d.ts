import { default as axios, AxiosRequestConfig, AxiosResponse } from "axios";
export { axios as Axios };
export interface HttpConfig extends AxiosRequestConfig {
    contentType?: string;
}
export interface HttpResponse<T = any> extends AxiosResponse<T> {
}
export declare class HttpClient {
    private host;
    constructor(host: string);
    private request;
    get<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>>;
    post<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>>;
    put<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>>;
    delete<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>>;
    patch<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>>;
    head<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>>;
}
