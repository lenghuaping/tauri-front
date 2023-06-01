import { BASE_ROUTES } from '@/routes';
import { IRoute } from '@/type/base';

// 根据路由获得站点标题
export const getTitle = () => {
  const {
    location: { pathname },
  } = window;
  let title = 'Dashboard';
  const routes = [...BASE_ROUTES];
  const first = routes.find((r) => r.path === pathname);
  if (first) {
    return first.name;
  }
  for (let index = 0; index < routes.length; index++) {
    const { path, routes: childRoutes, name } = routes[index];
    if (path === pathname) {
      title = name;
      break;
    }

    if (childRoutes?.length) {
      for (let si = 0; si < childRoutes.length; si++) {
        const element = childRoutes[si];
        const { path: subPath, name: subLabel } = element;
        if (subPath === pathname) {
          title = subLabel;
          break;
        }
      }
    }
  }
  return title;
};

/**
 * 拍平菜单数组
 * @params {IRoute[]} menus
 * @returns IRoute[]
 */
export const flattenMenu = (menus: IRoute[]) => {
  if (!menus?.length) return [];
  const routes = [...menus];
  const result: IRoute[] = [];
  routes.forEach((route) => {
    if (!route.routes?.length) {
      result.push(route);
    } else {
      const { routes: _routes, ...rest } = route;
      result.push({ ...rest }, ..._routes);
    }
  });
  return result;
};

interface TreeNode {
  key: string;
  name: string;
  routes?: TreeNode[];
}

export const flattenRoutes = (rootNodes: IRoute[]): IRoute[] => {
  const stack: IRoute[] = [...rootNodes];
  const result: IRoute[] = [];
  while (stack.length > 0) {
    const node = stack.pop()!;
    const { routes, ...others } = node;
    if (routes) {
      stack.push(...routes);
    }
    result.push(others);
  }
  return result;
};
