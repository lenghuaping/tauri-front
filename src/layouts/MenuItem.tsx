import { IRoute } from '@/type/base';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import './index.less';

interface IMenuItem {
  route: IRoute;
}

// 菜单是否选中
const useIsMenuSelected = (menu: IRoute) => {
  if (!menu) {
    return null;
  }
  let match = null;
  const { path, routes } = menu;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const resolved = useResolvedPath(path);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  match = useMatch({ path: resolved.pathname, end: true });
  if (routes && routes.length) {
    for (let i = 0; i < routes.length; i++) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const childResolved = useResolvedPath(routes[i].path);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const childMatch = useMatch({ path: childResolved.pathname, end: true });
      if (childMatch) {
        match = childMatch;
      }
    }
  }
  return match;
};

const MenuItem: FC<IMenuItem> = (props) => {
  const { route } = props;
  const { path, name } = route;

  const match = useIsMenuSelected(route);

  return (
    <Box>
      {route.routes?.length ? (
        <>
          <Box className="uniubi-tool-menu-item">{route.name}</Box>
          {/*<DownFilled className={styles.layoutMenuDownIcon}/>*/}
          <Box className={'uniubi-tool-menu-item-children'}>
            {route.routes.map((sr: IRoute) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const childResolved = useResolvedPath(sr.path as string);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const childMatch = useMatch({
                path: childResolved.pathname,
                end: true,
              });
              return (
                <Link to={`${sr.path as string}`} key={sr.key}>
                  {sr.name}
                </Link>
              );
            })}
          </Box>
        </>
      ) : (
        <Link to={`${path as string}`}>{name}</Link>
      )}
    </Box>
  );
};

export default MenuItem;
