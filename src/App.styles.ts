// src/App.styles.ts
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const CampaignsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 0 2rem 2rem;
  background-color:#F9FAFB;
  
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;