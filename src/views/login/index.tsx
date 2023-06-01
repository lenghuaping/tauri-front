import {
  v1CenterLogin,
  V1CenterLoginRequest,
  v1CenterSendEmailCode,
} from '@/generated';
import { ROUTE_MAP } from '@/routes';

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  useToast,
} from '@chakra-ui/react';
import { useCountDown, useSafeState } from 'ahooks';
import dayjs from 'dayjs';

import type { FieldProps } from 'formik';
import { Field, Form, Formik } from 'formik';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useSafeState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const [targetDate, setTargetDate] = useSafeState<number>();
  const [countdown] = useCountDown({
    targetDate,
  });

  const codeLoading = useMemo(
    () => Math.round(countdown / 1000) > 0,
    [countdown]
  );

  const handleSendCode = async (
    form: FieldProps<any, V1CenterLoginRequest>['form']
  ) => {
    setTargetDate(dayjs().add(3, 'seconds').valueOf());
    const { email } = form.values;
    await v1CenterSendEmailCode({ email });
    setTargetDate(0);
  };

  const handleLogin = async (values: V1CenterLoginRequest) => {
    setLoading(true);
    const result = await v1CenterLogin(values);
    if (result?.id) {
      toast({
        duration: 3000,
        position: 'top',
        title: '登录成功',
        status: 'success',
      });
      localStorage.setItem('access_token', result.access_token);
      navigate(ROUTE_MAP.PROJECT);
    }
    setLoading(false);
  };

  return (
    <Flex width="100vw" alignItems="center" justifyContent="center">
      <Formik initialValues={{ code: '', email: '' }} onSubmit={handleLogin}>
        <Form>
          <Field name="email">
            {({ field, form }: FieldProps<any, V1CenterLoginRequest>) => (
              <FormControl className="form-field" isRequired>
                <FormLabel>邮箱</FormLabel>
                <Input {...field} placeholder="邮箱" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="code">
            {({ field, form }: FieldProps<any, V1CenterLoginRequest>) => (
              <FormControl className="form-field">
                <FormLabel>验证码</FormLabel>
                <InputGroup>
                  <Input {...field} placeholder="请输入验证码" />
                  <InputRightAddon>
                    <Button
                      variant="ghost"
                      onClick={() => handleSendCode(form)}
                      isLoading={codeLoading}
                      loadingText={`${Math.round(countdown / 1000)}S`}
                    >
                      发送验证码
                    </Button>
                  </InputRightAddon>
                </InputGroup>
                <FormErrorMessage>
                  {form.errors.code as string}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="telegram"
            isLoading={loading}
            type="submit"
            loadingText="正在登录..."
          >
            登录
          </Button>
        </Form>
      </Formik>
    </Flex>
  );
};

export default Login;
