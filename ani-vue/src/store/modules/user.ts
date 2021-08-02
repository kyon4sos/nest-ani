// // import appStore from '@/store/modules/app';
// import { getMenus } from '@/api';
// import { useRouter } from 'vue-router';
// import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

// @Module
// export default class User extends VuexModule {
//   count = 0;
//   menus: Array<any> = [];
//   @Mutation
//   set_menus(menu: []) {
//     this.menus = menu;
//     console.log(this.menus);
//   }
//   // action 'decr' commits mutation 'decrement' when done with return value as payload
//   // @Action
//   // async reqMenus() {
//   //   const { data } = await getMenus();

//   //   return data;
//   //   // const routerModel = appStore.getters.getRouterModel;
//   //   // if (routerModel == 'front') {
//   //   //   const { data } = await getMenus();
//   //   //   return data;
//   //   // }
//   //   // if (routerModel == 'server') {
//   //   //   const { data } = await getMenus();
//   //   //   return data;
//   //   // }
//   // }
//   get getMenus() {
//     return this.menus;
//   }
// }
