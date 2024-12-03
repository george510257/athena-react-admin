import axios from 'axios';
import { message } from 'antd';
import config from '@/config/config';

interface ResponseData<T = any> {
  code: number;
  data: T;
  message: string;
}

const request = axios.create({
  baseURL: config.baseUrl,
  timeout: config.requestTimeout,
});

request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

request.interceptors.response.use(
  response => response.data.data,
  error => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }
    message.error(error.message || '请求失败');
    return Promise.reject(error);
  }
);

const http = {
  get: <T>(url: string) => request.get<ResponseData<T>, T>(url),
  post: <T>(url: string, data?: any) => request.post<ResponseData<T>, T>(url, data),
};

export default http; 