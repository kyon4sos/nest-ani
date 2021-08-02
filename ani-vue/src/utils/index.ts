import { Menu } from '@/types/menu';
import * as Cookie from 'js-cookie';
import { App, defineAsyncComponent, warn } from 'vue';
import { RouteRecordRaw } from 'vue-router';
const modules = import.meta.glob('../pages/**/**.vue');
const tokenPrefix = 'Bear ';
const getToken = () => {
  return Cookie.get('token');
};

const setToken = (token: string) => {
  Cookie.set('token', tokenPrefix + token);
};

const _componentCache = new Map<string, any>();
function transfromRouter() {
  for (const path in modules) {
    modules[path]().then((mod) => {
      // console.log(path, mod);
      _componentCache.set(path, mod);
    });
  }
}

async function getComponent(key: string) {
  if (_componentCache.get(key)) {
    console.log('_componentCache.get(key)', _componentCache.get(key));

    return _componentCache.get(key);
  }
  for (const path in modules) {
    const mod = await modules[path]();
    _componentCache.set(path, mod);
    if (path == key) {
      return _componentCache.get(key);
    }
    //   // if (key == path) {
    //   //   return modules[path]();
    //   // }
    // }
  }
}
// const asyncComponent = function (): void {
//   const modules = getModules();
//   const components = getComponents();
//   Object.keys(modules).forEach((key: string) => {
//     const viewSrc = components[key];
//     const file = viewSrc.default;
//     if (!file.isComponents) return;
//     const AsyncComponent = defineAsyncComponent(modules[key]);
//   });
// };

// function dynamicImport(
//   dynamicViewsModules: Record<string, () => Promise<Recordable>>,
//   component: string
// ) {
//   const keys = Object.keys(dynamicViewsModules);
//   const matchKeys = keys.filter((key) => {
//     let k = key.replace('../../views', '');
//     const lastIndex = k.lastIndexOf('.');
//     k = k.substring(0, lastIndex);
//     return k === component;
//   });
//   if (matchKeys?.length === 1) {
//     const matchKey = matchKeys[0];
//     console.log(dynamicViewsModules[matchKey]);

//     return dynamicViewsModules[matchKey];
//   }
//   if (matchKeys?.length > 1) {
//     warn(
//       'Please do not create `.vue` and `.TSX` files with the same file name in the same hierarchical directory under the views folder. This will cause dynamic introduction failure'
//     );
//     return;
//   }
// }
// let dynamicViewsModules: Record<string, () => Promise<Recordable>>;
// function asyncImportRoute(routes: AppRouteRecordRaw[] | undefined) {
//   dynamicViewsModules =
//     dynamicViewsModules || import.meta.glob('../../views/**/*.{vue,tsx}');
//   console.log('dynamicViewsModules', typeof dynamicViewsModules);

//   if (!routes) return;
//   routes.forEach((item) => {
//     const { component, name } = item;

//     const { children } = item;
//     if (component) {
//       item.component = dynamicImport(dynamicViewsModules, component as string);
//       console.log(' item.component', typeof item.component);
//     } else if (name) {
//       item.component = getParentLayout();
//     }
//     children && asyncImportRoute(children);
//   });
// }
const routeToMenu = (route: RouteRecordRaw): Menu => {
  if (route.children ?? length > 0) {
    route.children?.map((r) => routeToMenu(r));
  }
  return {
    path: route.path,
    meta: route.meta,
    children: route.children,
  } as Menu;
};
const transformPath = (menus: Menu[]) => {
  const m = JSON.parse(JSON.stringify(menus));
  const t = (menus: Menu[]) =>
    menus.forEach((m) => {
      if (m.children) {
        m.children.forEach((r) => {
          if (!r.path.startsWith('/')) {
            r.path = m.path + '/' + r.path;
          }
        });
        t(m.children);
      }
    });
  t(m);
  return m;
};
export {
  transformPath,
  routeToMenu,
  getToken,
  setToken,
  _componentCache,
  transfromRouter,
  getComponent,
};
