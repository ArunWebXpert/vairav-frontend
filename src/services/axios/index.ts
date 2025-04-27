import axios, { AxiosError, AxiosResponse } from "axios";
import { HTTP_CODE, IError } from "@/interface";
import { config } from "@/config";
import { extractErrorMessage } from "@/utils/get-error-message";

const ERROR_401 = "/error/401";
const rootApi = config.BASE_URL;

const axiosInstance = axios.create({
  baseURL: rootApi,
  timeout: 30 * 1000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

/*
    request interceptor
    adds accessToken to headers if available
*/
axiosInstance.interceptors.request.use(
  function (config) {
    const accessTokenString = localStorage.getItem("auth-storage");

    if (accessTokenString) {
      const parsedAccessToken = accessTokenString
        ? JSON.parse(accessTokenString)?.state?.token
        : null;

      if (parsedAccessToken) {
        config.headers.Authorization = `Bearer ${parsedAccessToken}`;
      }
    }
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

/*
    response interceptor
    handles response status codes
*/
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === HTTP_CODE.OK) {
      console.log("notify success");
    }
    return response;
  },
  (error: AxiosError<IError>) => {
    if (!error.response) {
      return Promise.reject(error);
    }

    switch (error.response.status) {
      case HTTP_CODE.BAD_REQUEST:
        break;

      case HTTP_CODE.UNAUTHORIZED:
        if (window.location.pathname !== ERROR_401) {
          window.location.href = ERROR_401;
          // TODO:clear storage here
        }
        break;

      case HTTP_CODE.FORBIDDEN:
        break;

      case HTTP_CODE.INTERNAL_SERVER_ERROR:
        break;
    }

    const errorMessage = extractErrorMessage(error);
    return Promise.reject(errorMessage);
  }
);

export default axiosInstance;
