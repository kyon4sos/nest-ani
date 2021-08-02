import { RouteMeta, RouteRecordRaw } from 'vue-router';

declare interface Menu {
  path: string;
  name?: string;
  meta: {
    icon?: string;
    title: string;
    show?: boolean;
  };
  children?: Array<Menu>;
}
