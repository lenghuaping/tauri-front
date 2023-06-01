import MenuItem from '@/layouts/MenuItem';
import { BASE_ROUTES } from '@/routes';
import { IRoute } from '@/type/base';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { useTitle } from 'ahooks';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'dayjs/locale/zh-cn';
import React, { FC } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getTitle } from './utils';

const Layout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // const handleScreenAuto = () => {
  // 	// 设计稿的宽度
  // 	const designDraftWidth = 1920;
  // 	// 设计稿的高度
  // 	const designDraftHeight = 1080;
  // 	//根据屏幕的变化适配的比例
  // 	const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
  // 		(document.documentElement.clientWidth / designDraftWidth) :
  // 		(document.documentElement.clientHeight / designDraftHeight);
  // 	// 缩放比例
  // 	(document.querySelector('#layout') as any).style.transform = `scale(${scale}) translate(-50%)`;
  // }
  //
  // useEffect(() => {
  // 	// 初始化自适应
  // 	handleScreenAuto();
  // 	// 绑定自适应函数 --- 防止浏览器栏变化后不再适配
  // 	window.onresize = () => handleScreenAuto();
  // 	// 退出大屏后自适应消失，最好在退出大屏的时候解除自适应
  // 	return () => {
  // 		window.onresize = null;
  // 	}
  // }, [])

  // useEffect(() => {
  // 	const flatten = flattenMenu([...BASE_ROUTES]);
  // 	if (flatten?.findIndex((r) => r.path === location.pathname) < 0) {
  // 		const routeFirst = BASE_ROUTES[0];
  // 		if (!routeFirst) return;
  // 		const path = routeFirst?.routes?.length
  // 			? routeFirst.routes[0].path
  // 			: routeFirst.path;
  // 		navigate(`${path}${location.search}`);
  // 	}
  // }, [BASE_ROUTES]);

  useTitle(getTitle());

  return (
    <Box>
      <SimpleGrid columns={BASE_ROUTES.length} fontSize="2rem">
        {BASE_ROUTES.map((r: IRoute) => (
          <MenuItem route={r} key={r.key} />
        ))}
      </SimpleGrid>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
