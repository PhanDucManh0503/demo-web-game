import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from ".";
import { deleteStorage, getStorage, setStorage } from "@/utils/localStorage";

const apiInstance = (config) => {
  const api = axios.create(config);
  api.interceptors.request.use((config) => {
    return {
      timeout: 3000,
      headers: {
        Authorization: "Bearer " + getStorage(ACCESS_TOKEN),
      },
      ...config,
    };
  });

  const createAxiosResponseInterceptor = () => {
    const interceptor = api.interceptors.response.use(
      response => response,
      async error => {
        if (error.response.status !== 401) {
          return Promise.reject(error);
        }

        axios.interceptors.response.eject(interceptor);

        return axios
          .post("/api/refresh_token", {
            refresh_token: getStorage(REFRESH_TOKEN),
          })
          .then(({ data }) => {
            setStorage(ACCESS_TOKEN, data.access_token);
            setStorage(REFRESH_TOKEN, data.refresh_Token);

            error.response.config.headers["Authorization"] = "Bearer " + data.access_token;
            return axios(error.response.config);
          })
          .catch((err) => {
            deleteStorage(ACCESS_TOKEN);
            deleteStorage(REFRESH_TOKEN);
            return Promise.reject(err);
          })
          .finally(createAxiosResponseInterceptor);
      },
    );
  };
  createAxiosResponseInterceptor();
  return api;
};

export default apiInstance;
