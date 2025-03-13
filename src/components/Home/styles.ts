// src/components/PageHeader/styles.ts
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading1};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;