import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from './app/store/store';
import { router } from './app/routes';
import { theme } from './common/theme/theme';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement,
);

root.render(
   <ThemeProvider theme={theme}>
      <Provider store={store}>
         <CssBaseline/>
         <RouterProvider router={router}/>
      </Provider>
   </ThemeProvider>,
);