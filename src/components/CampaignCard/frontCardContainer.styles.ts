import styled from "styled-components";

export const ProgressContainer = styled.div`
  margin: 1.5rem 0;

  .progress-text {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.5rem;
  }

  .progress-bar {
    height: 8px;
    background: #d3d3d3;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: grey;
    transition: width 0.3s ease;
  }
`;

export const FrontContent = styled.div`
  backface-visibility: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;



export const OverlayStyle = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 7, 19, 0) 0%,
    rgba(0, 23, 45, 0.39) 100%
  );
  backdrop-filter: blur(0.5px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 16px;
  overflow: hidden;

  &::before {
    z-index: 100000000;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 50% 50%,
      rgb(255, 255, 255) 0%,
      transparent 70%
    );
    pointer-events: none;
    animation: pulse 6s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.9);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.9);
      opacity: 0.6;
    }
  }
`;

export const SocialIcons = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 10px;
  left: 20px;
  z-index: 9999;
  display: flex;
  gap: 1rem;
  translate: ${({ $visible }) => ($visible ? 'translateY(-50%) translateX(20px);' : '0')};
  svg {
    color: #FFFFFF;
    font-size: 1.3rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    opacity:1;
    &:hover {
      opacity:1;
      transform: scale(1.5);
      font-weight: 600;
    }
  }
  transition: 0.3s ease ${({ $visible }) => ($visible ? '0.1s' : '0s')};
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  transform-origin: top left;
`;

export const BrandHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .brand-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;




// Updated styles
export const CardHeader = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 16px 16px 0 0;

  &:hover .swiper-button-prev {
    transform: translateY(-50%) translateX(20px);
    opacity: 1;
  }

  &:hover .swiper-button-next {
    transform: translateY(-50%) translateX(-20px);
    opacity: 1;
  }
`;

export const SwiperContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .swiper {
    height: 100%;
    width: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
    border-radius: 10%;
    transition: 0.3s ease;
    opacity: 0;
    background-size: 200% auto;

    &::after {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  .swiper-button-prev {
    left: -20px;
    background-image: linear-gradient(to right, #45fde4, #0057a300, #45fde4);
    background-position: center right;

    &:hover{
      background-position: left center !important;
    }
  }

  .swiper-button-next {
    right: -20px;
    background-image: linear-gradient(to right, #4bc9ff, rgba(255, 255, 255, 0), #4bc9ff);
    background-position: center left;
    &:hover{
      background-position: right center !important;
    }
  }

  .swiper-pagination {
      position: absolute;
      bottom: 20px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      z-index: 10;

      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background: rgba(255, 255, 255, 0.6);
        opacity: 1;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(45deg, #3b82f6, #2dd4bf, #3b82f6);
          opacity: 0;
          background-size: 200% auto;
          background-position:left center;
          transition: opacity 0.3s ease;
        }

        &:hover {
          transform: scale(1.1);
          background-position:center right;
        }

        &-active {
          width: 24px;
          background-position: right center !important;
          transform: scale(1);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          &::before {
            opacity: 1;
            }
            &:hover {
            background-position: right center;
            transform: scale(1.05);
          }
        }
      }

      @media (max-width: 768px) {
        bottom: 15px !important;
        gap: 6px;

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;

          &-active {
            width: 20px;
          }
        }
      }
    }
  }
`;

export const BrandLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export const StatusBadge = styled.div<{ $status: string }>`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  z-index:2;
  background: ${({ $status, theme }) =>
    $status === 'pending' ? theme.colors.warning : theme.colors.success};
  color: white;
`;

export const CardContent = styled.div`
  padding: 1.5rem;

  h3 {
    margin: 0 0 0.75rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .description {
    margin: 0 0 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

export const PayoutSection = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  justify-content: space-between;

  .cash-reward {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #ceeaff;
    padding: 0.75rem 1rem;
    border-radius: 8px;

    .currency {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }

    .amount {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    .label {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 0.875rem;
    }
  }

  .barter-value {
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 8px;

    background: #eedeff;
    color: ${({ theme }) => theme.colors.textSecondary};

      .currency {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }

    .amount {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;