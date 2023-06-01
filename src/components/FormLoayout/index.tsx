import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface IFormLayoutProps {
  title: string;
  helperText?: string;
}

const FormLoyout = (props: PropsWithChildren<IFormLayoutProps>) => {
  const { title, children, helperText } = props;
  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      {children}
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default FormLoyout;
