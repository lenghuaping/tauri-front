import { Container, Spinner } from '@chakra-ui/react';
import type { PropsWithChildren, SuspenseProps } from 'react';
import { Suspense } from 'react';

const SpinSuspense = (props: PropsWithChildren<SuspenseProps>) => {
  return (
    <Suspense
      fallback={
        <Container w="100%" h="100%">
          <Spinner
            display="flex"
            alignItems="center"
            justifyContent="center"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Container>
      }
    >
      {props.children}
    </Suspense>
  );
};

export default SpinSuspense;
