// src/index.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyles } from './styles/global.ts';
import { theme } from './styles/theme.ts';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);