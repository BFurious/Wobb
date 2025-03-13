import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

export const NavLinks = styled.nav<{ $isMobileMenuOpen: boolean }>`
  display: flex;
  gap: 2rem;

  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;

    &::after {
      content: '';
      display: block;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      position: absolute;
      left: 50%;
      bottom: -4px;
      width: 0;
      transition: width 0.3s ease, left 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform:scale(1.1);
      &::after {
        width: 100%;
        left: 0%;
      }
    }
  }

  @media (max-width: 768px) {
    display: ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.backgroundLight};
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    a {
      padding: 0.5rem 0;

      &::after {
        bottom: 0;
      }
    }
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textPrimary};
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 768px) {
    display: block;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a,
  button {
    padding: 0.5rem 1rem;
    text-align: left;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.background};
    }
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 50%;
`;