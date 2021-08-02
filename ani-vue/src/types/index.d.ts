import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    // // 是可选的
    // isAdmin?: boolean;
    // // 每个路由都必须声明
    // requiresAuth: boolean;
    title: string;
    icon?: string;
  }
}
type Permission = {
  key: string;
  name: string;
  action: string;
  url: string;
};

type PaginationType = {
  current: number;
  pageSize: number;
};

type FilterType = {
  name: string;
  address: string;
};
