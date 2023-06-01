import SpinSuspense from '@/components/SpinSuspense';
import Layouts from '@/layouts';
import { flattenRoutes } from '@/layouts/utils';
import { BASE_ROUTES } from '@/routes';

import '@/styles/index.less';
import { createStandaloneToast } from '@chakra-ui/toast';
import { keys } from 'lodash';
import type { FC, LazyExoticComponent } from 'react';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Projects = lazy(() => import('@/views/privatization/projects'));
const Secret = lazy(() => import('@/views/privatization/secret'));
const Deployment = lazy(() => import('@/views/privatization/deployment'));
const Login = lazy(() => import('@/views/login'));

const { ToastContainer, toast: chakToast } = createStandaloneToast();

export const toast = chakToast;

interface IPCM {
  [key: string]: LazyExoticComponent<any>;
}

const PAGE_COMPONENT_MAP: IPCM = {
  projects: Projects,
  secret: Secret,
  deployment: Deployment,
};

const pageKeys = keys(PAGE_COMPONENT_MAP);

const flatenedRoutes = flattenRoutes(BASE_ROUTES).filter((r) =>
  pageKeys.includes(r.key)
);

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <SpinSuspense>
              <Login />
            </SpinSuspense>
          }
        />
        <Route path="/" element={<Layouts />}>
          {flatenedRoutes.map((route, index) => {
            const ComponentName = PAGE_COMPONENT_MAP[route.key];
            return (
              <Route
                key={route.key}
                path={route.path}
                element={
                  <SpinSuspense>
                    <ComponentName />
                  </SpinSuspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
