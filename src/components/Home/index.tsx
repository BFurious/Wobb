import { HeaderContainer, Title, Subtitle } from './styles';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <HeaderContainer>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </HeaderContainer>
);