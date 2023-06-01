import { v1SecretFind, v1SecretUpate } from '@/generated';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useRequest, useSafeState } from 'ahooks';

import { Field, FieldProps, Form, Formik, useFormik } from 'formik';
import { useEffect } from 'react';
import { IFormValue } from './type';

const Secret = () => {
  const [loading, setLoading] = useSafeState(false);
  const toast = useToast();

  const { data, loading: fetchLoading } = useRequest(v1SecretFind);

  const handleSave = async (values: IFormValue) => {
    setLoading(true);
    const result = await v1SecretUpate({ ...values, id: data?.id as number });
    toast({
      position: 'top',
      duration: 3000,
      status: 'info',
      isClosable: true,
      description: result,
    });
    setLoading(false);
  };

  const formik = useFormik<IFormValue>({
    initialValues: {
      secret: '',
      name: '',
    },
    onSubmit: handleSave,
  });

  useEffect(() => {
    if (data) {
      const { secret, name } = data;
      formik.setValues({ secret, name });
    }
  }, [data]);

  return (
    <Box width={800} padding={24}>
      <Formik
        initialValues={{ secret: '', name: '' }}
        onSubmit={formik.submitForm}
        isSubmitting={loading || fetchLoading}
      >
        <Form>
          <Field name="name">
            {({ field }: FieldProps<string, IFormValue>) => {
              return (
                <FormControl className="form-field" isRequired>
                  <FormLabel>花名</FormLabel>
                  <Input
                    {...field}
                    value={formik.values?.name}
                    placeholder="花名"
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.errors?.name}</FormErrorMessage>
                </FormControl>
              );
            }}
          </Field>
          <Field name="secret">
            {({ field }: FieldProps<string, IFormValue>) => (
              <FormControl className="form-field" isRequired>
                <FormLabel>密钥</FormLabel>
                <Input
                  {...field}
                  value={formik.values?.secret}
                  placeholder="Gitlab密钥"
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors?.secret}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            isLoading={loading || fetchLoading}
            type="submit"
            loadingText="正在保存..."
          >
            保存
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default Secret;
