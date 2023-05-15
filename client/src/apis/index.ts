import axios, { AxiosError } from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL;
axios.defaults.withCredentials = true;

const Api = axios.create({
  baseURL: baseUrl,
});

Api.interceptors.request.use((config: any) => {
  const accessToken = localStorage.getItem('token');

  // localStorage에 accessToken이 없으면 담아서 request 전달
  if (!accessToken) {
    config.headers['Authorization'] = null;
    return config;
  }
  if (config.headers && accessToken) {
    config.headers['Authorization'] = accessToken;
  }
  return config;
});

export default Api;
