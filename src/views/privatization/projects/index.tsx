import Copy from '@/components/Copy';
import SpinSuspense from '@/components/SpinSuspense';
import DataTable from '@/components/Table';
import {
  v1GitlabList,
  V1GitlabListResponse,
  v1GitlabPullGitlabProjectList,
  v1GitlabSet,
} from '@/generated';
import useModal from '@/hooks/useModal';
import { IFormValue } from '@/views/privatization/projects/type';
import { Box, Button, Flex, Switch, useToast } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import { useRequest } from 'ahooks';

import ProjectForm from './form';

type IColumnData = V1GitlabListResponse['list'][0];

const columnHelper = createColumnHelper<
  IColumnData & {
    operation?: string;
  }
>();

const Projects = () => {
  const toast = useToast();
  const { isOpen, open, close, id, extra } = useModal<IFormValue>();
  const {
    loading,
    data,
    refresh,
    run: fetchTableList,
  } = useRequest(v1GitlabList, {
    manual: false,
    defaultParams: [
      {
        current: 1,
        limit: 10,
      },
    ],
  });

  const { loading: pullLoading, run } = useRequest(
    v1GitlabPullGitlabProjectList,
    {
      manual: true,
    }
  );

  const handlePagination = (current: number) => {
    fetchTableList({ current, limit: 10 });
  };

  // 设置项目为私有化项目
  const handleSetProjectToPrivate = async (
    project: IColumnData,
    isPrivatization: boolean
  ) => {
    const res = await v1GitlabSet({
      id: project.id,
      is_privatization_project: isPrivatization,
    });
    toast({
      position: 'top',
      duration: 3000,
      status: 'info',
      description: res as string,
    });
    refresh();
  };

  const columns = [
    columnHelper.accessor('repo_url', {
      cell: (info) => <Copy text={info.getValue()} />,
      header: 'Gitlab地址',
    }),
    columnHelper.accessor('name', {
      cell: (info) => info.getValue() || '-',
      header: '自定义名称',
    }),
    columnHelper.accessor('repo_name', {
      cell: (info) => info.getValue() || '-',
      header: 'Gitlab 仓库名称',
    }),
    columnHelper.accessor('description', {
      cell: (info) => info.getValue() || '-',
      header: '项目描述',
    }),
    columnHelper.accessor('operation', {
      cell: (info) => (
        <Flex alignItems="center">
          <Switch
            onChange={(event) => {
              handleSetProjectToPrivate(
                info.row.original,
                event.target.checked
              );
            }}
            isChecked={info.row.original.is_privatization_project}
          />
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
            设置名称
          </Button>
        </Flex>
      ),
      header: '是否私有化项目',
    }),
  ];

  return (
    <Box padding="32px">
      <Flex mb="24px">
        <Button isLoading={pullLoading} loadingText={'请求中...'} onClick={run}>
          拉取 Gitlab 项目
        </Button>
      </Flex>
      <SpinSuspense>
        <DataTable
          pagination={{
            current: data?.current || 1,
            limit: 10,
            total: data?.total || 0,
          }}
          columns={columns}
          data={data?.list || []}
          onPagination={handlePagination}
          loading={loading}
        />
      </SpinSuspense>
      <ProjectForm
        id={id}
        extra={extra}
        isOpen={isOpen}
        onClose={() => close()}
      />
    </Box>
  );
};

export default Projects;
