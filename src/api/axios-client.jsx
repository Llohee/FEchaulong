import axios from "axios";
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_BACK_END_DOMAIN,
});

axiosClient.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosClient };
