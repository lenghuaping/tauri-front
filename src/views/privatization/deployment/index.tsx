import Copy from '@/components/Copy';
import SpinSuspense from '@/components/SpinSuspense';
import DataTable from '@/components/Table';
import {
  V1GitlabListResponse,
  v1GitlabPullGitlabProjectList,
} from '@/generated';
import useModal from '@/hooks/useModal';
import { IFormValue } from '@/views/privatization/projects/type';
import { Box, Button, Flex, SimpleGrid, useToast } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import { invoke } from '@tauri-apps/api';
import { useRequest, useSafeState } from 'ahooks';

import NewDepl from './NewDepl';
import WorkSpace from './WorkSpace';

// const command = new Command('git add', ['.']);

type IColumnData = V1GitlabListResponse['list'][0];

const columnHelper = createColumnHelper<
  IColumnData & {
    operation?: string;
  }
>();

const Deployment = () => {
  const toast = useToast();
  const { isOpen, open, close, id, extra } = useModal<IFormValue>();
  const { isOpen: isSetOpen, open: openSet, close: closeSet } = useModal();

  const { isOpen: isNewOpen, open: openNew, close: closeNew } = useModal();

  const [commandMessage, setCommandMessage] = useSafeState('');

  // const {
  //   loading,
  //   data,
  //   refresh,
  //   run: fetchTableList,
  // } = useRequest(v1GitlabList, {
  //   manual: false,
  //   defaultParams: [
  //     {
  //       current: 1,
  //       limit: 10,
  //     },
  //   ],
  // });

  const { loading: pullLoading, run } = useRequest(
    v1GitlabPullGitlabProjectList,
    {
      manual: true,
    }
  );

  // const handlePagination = (current: number) => {
  //   fetchTableList({ current, limit: 10 });
  // };

  const checkout = async (branchName: string) => {
    await invoke('checkout', { branchName });
  };

  const addAndCommit = async (message: string) => {
    await invoke('add_and_commit', { message });
  };

  const push = async () => {
    await invoke('push');
  };

  const columns = [
    columnHelper.accessor('repo_url', {
      cell: (info) => <Copy text={info.getValue()} />,
      header: '私有化名称',
    }),
    columnHelper.accessor('branch_name', {
      cell: (info) => info.getValue() || '-',
      header: '分支名称',
    }),
    columnHelper.accessor('description', {
      cell: (info) => info.getValue() || '-',
      header: '私有化文档',
    }),
    columnHelper.accessor('operation', {
      cell: (info) => (
        <Flex alignItems="center">
          <Button
            variant="ghost"
            ml="16px"
            onClick={() => {
              open({
                id: info.row.original.id,
                extra: {
                  name: info.row.original.name,
                  repo_name: info.row.original.repo_name,
                },
              });
            }}
          >
            修改
          </Button>
          <Button
            variant="ghost"
            ml="16px"
            onClick={() => {
              open({
                id: info.row.original.id,
                extra: {
                  name: info.row.original.name,
                  repo_name: info.row.original.repo_name,
                },
              });
            }}
          >
            更新配置
          </Button>
        </Flex>
      ),
      header: '是否私有化项目',
    }),
  ];

  return (
    <Box padding="32px">
      <SimpleGrid spacingX="16px" columns={8} mt="24px">
        <Button
          isLoading={pullLoading}
          loadingText={'请求中...'}
          onClick={() => openSet()}
        >
          设置私有化目录
        </Button>

        <Button
          isLoading={pullLoading}
          loadingText={'请求中...'}
          onClick={() => openNew()}
        >
          新增私有化部署
        </Button>
        <Button
          variant="ghost"
          ml="16px"
          onClick={async () => {
            await checkout('test');
          }}
        >
          命令行测试
        </Button>
      </SimpleGrid>

      <Box color="red" fontSize="16px">
        {commandMessage}
      </Box>

      <SpinSuspense>
        <DataTable
          pagination={{
            current: 1,
            limit: 10,
            total: 0,
          }}
          columns={columns}
          data={[]}
          // onPagination={handlePagination}
          loading={false}
        />
      </SpinSuspense>
      <WorkSpace isOpen={isSetOpen} onClose={() => closeSet()} />
      <NewDepl isOpen={isNewOpen} onClose={() => closeNew()} />
    </Box>
  );
};

export default Deployment;
