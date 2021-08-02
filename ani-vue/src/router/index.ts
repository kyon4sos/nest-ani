import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layout/DefaultLayout.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录', show: false },
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/',
    redirect: '/home/home1/home4',
    meta: { title: '跳转', show: false },
  },
  {
    path: '/home',
    meta: { title: '首页1', show: true },
    component: DefaultLayout,
    children: [
      {
        path: 'home1',
        meta: { title: '首页2', show: true },
        component: () => import('@/layout/PageLayout.vue'),
        children: [
          {
            path: 'home4',
            meta: { title: '首页4', show: true },
            component: () => import('@/pages/Test.vue'),
          },
        ],
      },
      {
        path: 'home3',
        meta: { title: '首页3', show: true },
        component: () => import('@/pages/Home.vue'),
      },
    ],
  },
  {
    path: '/manangement',
    meta: { title: '系统管理', show: true },
    component: DefaultLayout,
    children: [
      {
        path: 'permiss',
        meta: { title: '权限管理', show: true },
        component: () => import('@/pages/Permiss.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '/notfound',
    meta: { title: '404', show: false },
    component: () => import('@/pages/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  next();
});

export { router, routes };
