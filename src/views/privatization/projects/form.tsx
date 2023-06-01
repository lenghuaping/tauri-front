import ToolModal from '@/components/Modal';
import { v1GitlabUpdate } from '@/generated';
import type { UseModalProps } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useRequest, useSafeState } from 'ahooks';
import { Field, FieldProps, Form, Formik, useFormik } from 'formik';
import { FC, useEffect } from 'react';
import { IFormValue } from './type';

interface IFormModal {
  isOpen: boolean;
  onClose: UseModalProps['onClose'];
  id?: number;
  extra?: IFormValue;
}

const ProjectForm: FC<IFormModal> = (props) => {
  const { isOpen, onClose, id, extra } = props;
  const [loading, setLoading] = useSafeState(false);
  const toast = useToast();

  const { loading: updateLoading, run } = useRequest(v1GitlabUpdate, {
    manual: true,
  });

  const handleSave = async (values: IFormValue) => {
    setLoading(true);
    const result = await v1GitlabUpdate({ ...values, id: id as number });
    toast({
      position: 'top',
      duration: 3000,
      status: 'info',
      isClosable: true,
      description: result as string,
    });
    setLoading(false);
  };

  const formik = useFormik<IFormValue>({
    initialValues: {
      repo_name: '',
      name: '',
    },
    onSubmit: handleSave,
  });

  useEffect(() => {
    if (isOpen && extra) {
      console.log(extra, 'agagsd ');
      formik.setValues({ name: extra.name, repo_name: extra.repo_name });
    } else {
      formik.resetForm();
    }
  }, [isOpen, extra]);

  return (
    <ToolModal title="设置名称" isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={{ repo_name: '', name: '' }}
        onSubmit={formik.submitForm}
        isSubmitting={loading || updateLoading}
      >
        <Form>
          <Field name="name">
            {({ field }: FieldProps<string, IFormValue>) => {
              return (
                <FormControl className="form-field" isRequired>
                  <FormLabel>名称</FormLabel>
                  <Input
                    {...field}
                    value={formik.values?.name}
                    placeholder="名称"
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.errors?.name}</FormErrorMessage>
                </FormControl>
              );
            }}
          </Field>
          <Field name="repo_name">
            {({ field }: FieldProps<string, IFormValue>) => (
              <FormControl className="form-field" isRequired>
                <FormLabel>Gitlab 仓库名称</FormLabel>
                <Input
                  {...field}
                  value={formik.values?.repo_name}
                  placeholder="Gitlab 仓库名称"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors?.repo_name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            isLoading={loading || updateLoading}
            type="submit"
            loadingText="正在保存..."
          >
            保存
          </Button>
        </Form>
      </Formik>
    </ToolModal>
  );
};

export default ProjectForm;
