import ToolModal from '@/components/Modal';
import { v1UserGetWorkSpace, v1UserSetWorkSpace } from '@/generated';
import {
  Button,
  Container,
  SimpleGrid,
  UseModalProps,
  useToast,
} from '@chakra-ui/react';
import { dialog, invoke, os } from '@tauri-apps/api';
import { useRequest, useSafeState, useUpdateEffect } from 'ahooks';
import { PropsWithChildren, useEffect } from 'react';

interface ISpaceWork {
  work_space: string;
}

interface IWorkSpace {
  isOpen: boolean;
  onClose: UseModalProps['onClose'];
}

const WorkSpace = (props: PropsWithChildren<IWorkSpace>) => {
  const { isOpen, onClose } = props;

  const [loading, setLoading] = useSafeState(false);

  const [dir, setDir] = useSafeState('');

  const toast = useToast();

  const {
    loading: fetchLoading,
    run: fetchData,
    data,
  } = useRequest<ISpaceWork, any>(v1UserGetWorkSpace, {
    manual: true,
  });

  // 文件夹选择
  const handleClickInput = async () => {
    const dir = await dialog.open({
      directory: true,
      defaultPath: data?.work_space || '',
    });
    if (Array.isArray(dir)) {
      // user selected multiple files
    } else if (dir === null) {
      // user cancelled the selection
    } else {
      console.log(dir, 'dir');
      setDir(dir);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    const result = await v1UserSetWorkSpace({ work_space: dir });
    if (result) {
      toast({
        position: 'top',
        duration: 3000,
        status: 'success',
        isClosable: true,
        description: result as string,
      });
    }

    setLoading(false);
  };

  // 系统信息
  const fetchOs = async () => {
    // 平台
    const platform = await os.platform();
    console.log(platform);
  };
  useEffect(() => {
    if (isOpen) {
      fetchOs();
      fetchData();
    }
  }, [isOpen]);

  useUpdateEffect(() => {
    setDir(data?.work_space || '');
  }, [data]);

  return (
    <ToolModal
      width="500px"
      title="设置工作区"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Container>{dir || '--'}</Container>
      <SimpleGrid spacingX="16px" columns={3} mt="24px">
        <Button
          onClick={handleClickInput}
          type="submit"
          loadingText="正在设置..."
        >
          选择工作目录
        </Button>
        <Button
          isLoading={loading || fetchLoading}
          type="submit"
          loadingText="正在设置..."
          onClick={handleSave}
        >
          保存
        </Button>
        <Button
          isLoading={loading || fetchLoading}
          type="submit"
          loadingText="正在设置..."
          onClick={async () => {
            const res = await invoke('git', { path: dir });
            console.log(res, '命令行测试');
          }}
        >
          命令行测试
        </Button>
      </SimpleGrid>
    </ToolModal>
  );
};

export default WorkSpace;
