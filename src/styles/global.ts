// src/styles/global.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.5;
    background: ${({ theme }) => theme.colors.background};
  }

  @media (prefers-font-smoothing: antialiased) {
    body {
      -webkit-font-smoothing: antialiased;
    }
  }
`;