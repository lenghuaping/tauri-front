import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import dayjs from 'dayjs';

import AdvancedFormat from 'dayjs/plugin/advancedFormat';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const customTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'telegram',
  })
);

dayjs.extend(AdvancedFormat);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
