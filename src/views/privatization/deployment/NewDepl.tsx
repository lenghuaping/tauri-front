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

const NewDepl: FC<IFormModal> = (props) => {
  const { isOpen, onClose, id } = props;
  const [loading, setLoading] = useSafeState(false);
  const toast = useToast();

  const { loading: updateLoading, run } = useRequest(v1GitlabUpdate, {
    manual: true,
  });

  const handleSave = async (values: IFormValue) => {
    setLoading(true);

    setLoading(false);
  };

  const formik = useFormik<IFormValue>({
    initialValues: {
      branch_name: '',
      name: '',
    },
    onSubmit: handleSave,
  });

  useEffect(() => {
    if (isOpen && id) {
      // formik.setValues({ name: extra.name, branch_name: extra.branch_name });
    } else {
      formik.resetForm();
    }
  }, [isOpen, id]);

  return (
    <ToolModal title="新增私有化" isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={{ branch_name: '', name: '' }}
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
          <Field name="branch_name">
            {({ field }: FieldProps<string, IFormValue>) => (
              <FormControl className="form-field" isRequired>
                <FormLabel>Gitlab 分支名称</FormLabel>
                <Input
                  {...field}
                  value={formik.values?.branch_name}
                  placeholder="Gitlab 分支名称"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>
                  {formik.errors?.branch_name}
                </FormErrorMessage>
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

export default NewDepl;
