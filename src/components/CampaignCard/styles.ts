// Enhanced styles.ts
import styled from 'styled-components';


// Add these to your theme.ts
export const theme = {
  colors: {
    primary: '#2563EB',
    secondary: '#4F46E5',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    purple: '#eedeff',
    blue: '#e6ebff',

    textPrimary: '#1F2937',
    textSecondary: '#6B7280',
    background: '#F9FAFB',
    backgroundLight: '#FFFFFF',
    instagram: '#C13584',
    twitter: '#1DA1F2',
    linkedin: '#0077B5',
    youtube: '#FF0000',
    discord: '#7289DA',
    telegram: '#2CA5E0',
    facebook: '#3b5998',
    whatsapp: '#25d366',
  },
  typography: {
    heading1: '2rem',
    heading2: '1.5rem',
    body: '1rem',
    caption: '0.875rem',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  shadows: {
    card: '0 4px 24px rgba(0,0,0,0.08)',
    button: '0 2px 4px rgba(0,0,0,0.1)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1200px',
  },
  transitions: {
    flip: '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const CardContainer = styled.article`
  background: #F9FAFB;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadows.card};
  &:hover {
    transform: translateY(-4px);
  }
`;

export const FlipContainerOuter = styled.div`
  position: relative;
  perspective: 1000px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #F9FAFB;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const FlipContainer = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $isFlipped }) =>
    $isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  border-radius: 20px;
   box-shadow: ${({ theme }) => theme.shadows.card};
  background: #F9FAFB;
`;

export const ActionButton = styled.button`
  border: none;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  font-size: 1em;
  background-size: 200% auto;
  color: rgb(255, 255, 255);
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  width:100%;
  background-image: linear-gradient(45deg, #3b82f6, #2dd4bf, #3b82f6);

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
