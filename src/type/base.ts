import { ReactNode } from 'react';

export interface Pagination {
  total: number;
  size: number;
  index: number;
  length: number;
  beginIndex: number;
  endIndex: number;
}

export interface IRoute {
  path: string;
  key: string;
  name: string;
  element?: ReactNode;
  search?: string;
  routes?: IRoute[];
}
