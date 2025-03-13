
import {
  FooterContainer,
  FooterSection,
  FooterLink,
  SocialIcons,
  FooterText,
} from './Footer.style';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <h4>Quick Links</h4>
        <FooterLink href="/about">About Us</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/faq">FAQ</FooterLink>
        <FooterLink href="/terms">Terms & Conditions</FooterLink>
      </FooterSection>

      <FooterSection>
        <h4>Customer Care</h4>
        <FooterLink href="/support">Support</FooterLink>
        <FooterLink href="/help">Help Center</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
      </FooterSection>

      <FooterSection>
        <h4>Follow Us</h4>
        <SocialIcons>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </SocialIcons>
      </FooterSection>

      <FooterText>
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;