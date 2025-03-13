import React from 'react';
import { FaBell, FaQuestionCircle, FaUserCircle, FaBars } from 'react-icons/fa';
import {
  HeaderContainer,
  Logo,
  NavLinks,
  UserActions,
  MobileMenuButton,
  DropdownMenu,
  NotificationBadge,
} from './Header.styles';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = React.useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserDropdown = () => setUserDropdownOpen(!isUserDropdownOpen);

  return (
    <HeaderContainer>
      {/* Logo */}
      <Logo href="/">Wobo</Logo>

      {/* Navigation Links */}
      <NavLinks $isMobileMenuOpen={isMobileMenuOpen}>
        <a href="/">Home</a>
        <a href="/campaigns">Campaigns</a>
        <a href="/influencers">Influencers</a>
        <a href="/analytics">Analytics</a>
      </NavLinks>

      {/* User Actions */}
      <UserActions>
        <button aria-label="Notifications">
          <FaBell />
          <NotificationBadge>3</NotificationBadge>
        </button>
        <button aria-label="Help">
          <FaQuestionCircle />
        </button>
        <button onClick={toggleUserDropdown} aria-label="User Menu">
          <FaUserCircle />
          {isUserDropdownOpen && (
            <DropdownMenu>
              <a href="/profile">Profile</a>
              <a href="/settings">Settings</a>
              <button>Logout</button>
            </DropdownMenu>
          )}
        </button>
      </UserActions>

      {/* Mobile Menu Button */}
      <MobileMenuButton onClick={toggleMobileMenu} aria-label="Menu">
        <FaBars />
      </MobileMenuButton>
    </HeaderContainer>
  );
};

export default Header;