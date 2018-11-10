import { default as axios, AxiosRequestConfig, AxiosResponse } from "axios";

export {
  axios as Axios
};

export interface HttpConfig extends AxiosRequestConfig {
  contentType?: string;
}

export interface HttpResponse<T = any> extends AxiosResponse<T> { }

// const x = axios.p

export class HttpClient {

  constructor(private host: string) { }

  private request<T = any>(method: string, url: string, config?: HttpConfig): Promise<HttpResponse<T>> {
    const cfg = config || {};
    const headers = cfg.headers || {};
    const data = cfg.data || {};
    if (cfg.contentType) {
      headers["Content-Type"] = cfg.contentType;
    }
    return axios[method.toLowerCase()](this.host + url, {
      ...cfg,
      data: method === "GET" ? null : data,
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
    } as AxiosRequestConfig);
  }

  public get<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>> {
    return this.request<T>("GET", url, config);
  }

  public post<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>> {
    return this.request<T>("POST", url, config);
  }

  public put<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>> {
    return this.request<T>("PUT", url, config);
  }

  public delete<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>> {
    return this.request<T>("DELETE", url, config);
  }

  public patch<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>> {
    return this.request<T>("PATCH", url, config);
  }

  public head<T = any>(url: string, config?: HttpConfig): Promise<HttpResponse<T>> {
    return this.request<T>("HEAD", url, config);
  }
}