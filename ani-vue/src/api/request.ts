import axios from 'axios';
import { message, Spin } from 'ant-design-vue';
import { getToken } from '@/utils';
import { appStore } from '@/store/modules/app';
const authHeader = 'Authorization';

axios.defaults.baseURL == 'localhost:3000/api';
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers[authHeader] = getToken();
    }
    appStore.setLoading(true);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    appStore.setLoading(false);
    return response.data;
  },
  (error) => {
    message.info(error.message);
    console.log(error);
    return Promise.reject(error);
  }
);

export default axios;
