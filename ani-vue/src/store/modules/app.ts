import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { routes } from '@/router';
import { Menu } from '@/types/menu';
import { routeToMenu } from '@/utils';
import { pushScopeId } from 'vue';
@Module({ name: 'appstore', store, namespaced: true, dynamic: true })
class App extends VuexModule {
  loading: boolean = false;
  routerModel: string = 'front';
  curPath = '/home';
  curTab = '/home';
  menus: Menu[] = [];
  @Mutation
  setLoading(loading: boolean) {
    this.loading = loading;
  }
  @Mutation
  setCurPath(path: string) {
    this.curPath = path;
  }
  @Mutation
  setRouterModel(path: string) {
    this.routerModel = path;
  }
  @Mutation
  setMenus(menus: Menu[]) {
    console.log('menus', menus);

    this.menus = menus;
  }
  @Action
  async reqMenus() {
    // const { data } = await getMenus();
    // const menus = routes
    //   .map((r) => routeToMenu(r))
    //   .filter((r) => r.meta.show == undefined || r.meta.show);
    this.setMenus(routes);
  }
  get getCurPath() {
    return this.curPath;
  }
  get getLoading() {
    return this.loading;
  }
  get getRouterModel() {
    return this.routerModel;
  }

  get getMenus() {
    return this.menus;
  }
}

const appStore = getModule<App>(App);
export { appStore };
