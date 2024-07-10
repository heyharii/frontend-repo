'use client'

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Experimental_CssVarsProvider } from '@mui/material/styles';
import theme from '@/theme/theme';
import { AuthContextProvider } from '@/context/AuthContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
        <Experimental_CssVarsProvider theme={theme} defaultMode="light">
          <AuthContextProvider>
            {children}
        </AuthContextProvider>
        </Experimental_CssVarsProvider>
    </Provider>
  );
}