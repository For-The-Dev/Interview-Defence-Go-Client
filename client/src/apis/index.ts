import axios, { AxiosError } from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL;

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

Api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const originConfig = err.config;
    if (err.response?.status === 401) {
      alert('다시 로그인해주세요');
      localStorage.removeItem('token');
    } else {
      return Promise.reject(err);
    }
  },
);
export default Api;
