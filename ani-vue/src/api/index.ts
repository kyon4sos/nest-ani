import request from './request';

const get = async (url: string) => await request.get(url);

const post = async (url: string, data: any) => await request.post(url, data);

const del = async (url: string) => await request.delete(url);

const put = async (url: string, data: any) => await request.put(url, data);

const login = (data: any) => {
  const url = '/auth/login';
  console.log(url);
  return post(url, data);
};
const getMenus = () => {
  const url = '/api/profile/menus';

  return get(url);
};
export { login, getMenus };
