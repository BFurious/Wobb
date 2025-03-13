import styled from 'styled-components';

export const FilterWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 1.5rem 0;

  /* Gradient fade effect for scroll boundaries */
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60px;
    pointer-events: none;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.background} 30%,
      transparent 100%
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.background} 30%,
      transparent 100%
    );
  }

  @media (max-width: 768px) {
    margin: 1rem 0;

    &::before,
    &::after {
      width: 40px;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
  width: 100%;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar for all browsers */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
    scroll-snap-type: x proximity;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    gap: 0.5rem;
  }
`;

export const ScrollButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ $direction }) => ($direction === 'left' ? 'left: 10px' : 'right: 10px')};
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 3;
  transition: all 0.3s ease;
  opacity: 0.9;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-50%) scale(1.1);
    opacity: 1;
    border-color: transparent;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: ${({ $active }) => ($active ? '600' : '500')};
  text-transform: ${({ $active }) => ($active ? 'uppercase' : 'none')};
  letter-spacing: ${({ $active }) => ($active ? '0.5px' : '0')};
  background-image: ${({ $active, theme }) =>
    $active
      ? 'linear-gradient(45deg, #3b82f6, #2dd4bf, #3b82f6)'
      : theme.colors.background};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.backgroundLight : theme.colors.textPrimary};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ $active }) =>
    $active ? '0 4px 6px rgba(59, 130, 246, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)'};
  overflow: hidden;
  position: relative;
  background-size:200% auto;
  background-position:left center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, #3b82f6, #2dd4bf, #3b82f6);
    opacity: 0;
    background-size:200% auto;
    background-position:left center;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $active }) =>
    $active
      ? '0 6px 12px rgba(59, 130, 246, 0.3)'
      : '0 4px 8px rgba(0, 0, 0, 0.15)'};
    background-position: right center;
        
      &::before {
        background-position: right center;
        opacity: ${({ $active }) => ($active ? '0.4' : '0')};
    }
  }

  span {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    border-radius: 1.5rem;
  }
`;