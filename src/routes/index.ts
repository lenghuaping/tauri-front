import { IRoute } from '@/type/base';

export enum ROUTE_MAP {
  PROJECT = '/privatization/projects',
}

export const BASE_ROUTES: IRoute[] = [
  // {
  //   path: '/time',
  //   key: 'time',
  //   name: '时间戳工具',
  // },
  {
    path: '/privatization',
    key: 'privatization',
    name: '私有化',
    routes: [
      {
        path: '/privatization/secret',
        key: 'secret',
        name: '密钥管理',
      },
      {
        path: '/privatization/projects',
        key: 'projects',
        name: '项目管理',
      },
      {
        path: '/privatization/deployment',
        key: 'deployment',
        name: '部署管理',
      },
    ],
  },
];
