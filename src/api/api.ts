import { ENV } from "../constants/env";
import axios, { AxiosResponse, AxiosError } from "axios";

// const requestInterceptor = (
//   request: AxiosRequestConfig
// ): AxiosRequestConfig => {
//   console.log("Request Interceptor:", request);
//   return request;
// };

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  console.log("Response Interceptor:", response);
  return response;
};

const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  console.error("Interceptor Error:", error);
  return Promise.reject(error);
};

console.log(ENV.API_HOST);

export const api = axios.create({
  baseURL: ENV.API_HOST,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(responseInterceptor, errorInterceptor);
