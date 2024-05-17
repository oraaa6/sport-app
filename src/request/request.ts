import axios, { AxiosRequestConfig } from "axios";

export const httpClient = axios.create({
  baseURL: "https://php74.appgo.pl/sport_api/api/public/api/",
});

async function request<T>(config: AxiosRequestConfig) {
  return httpClient
    .request<T>(config)
    .then((response) => response.data)
    .catch((error) => console.log(`Error: ${error}`));
}

export function getRequest<T>(url: string, config?: AxiosRequestConfig) {
  return request<T>({ method: "GET", url, ...config });
}
