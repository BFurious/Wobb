import styled from 'styled-components';

export const BackContent = styled.div`
  backface-visibility: hidden;
  display:flex;
  gap:1.3em;
  flex-direction: column;
  justify-content:space-between;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
  z-index: 1;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const DetailSections = styled.div`
overflow: auto;
  width:100%;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar for all browsers */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */    
  display: flex;
  flex-direction: column;
  height:100%;
  .section-nav {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    button {
      padding: 0.5rem 1rem;
      border: none;
      background: ${({ theme }) => theme.colors.background};
      cursor: pointer;
      
      &.active {
        background: ${({ theme }) => theme.colors.primary};
        color: white;
      }
    }
  }

  .section-content {
    flex: 1;
    overflow-y: auto;
    padding-right: 0.5rem;

    & > div {
      height: 100%;
      padding: 1rem;
      background: ${({ theme }) => theme.colors.background};
      border-radius: 8px;
    }
  }
`;

export const DetailPayoutSection = styled.div`
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar for all browsers */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  h4 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 1rem;
  }

  .payout-breakdown {
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;

    .payout-item {
      display: flex;
      justify-content: space-between;
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      &:last-child {
        border-bottom: none;
      }
      
      &:nth-last-child(2){
        border-bottom: none;
      }

      .label {
        color: ${({ theme }) => theme.colors.textSecondary};
      }

      .value {
        color: ${({ theme }) => theme.colors.textPrimary};
        font-weight: 500;
      }
    }

    .payout-total {
      display:flex;
      justify-content: space-between;
      padding-top: 1rem;
      border-top: 2px solid ${({ theme }) => theme.colors.primary};

      .label {
        font-weight: 600;
      }

      .value {
        font-size: 1.25rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .terms-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0.75rem 0;
      padding-left: 1.5rem;
      position: relative;
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 0.95rem;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const EligibilitySection = styled.div`
  overflow: auto;
  width:100%;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar for all browsers */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */  

  h4 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 1rem;
  }

  .filter-list {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;

    li {
      margin: 0.75rem 0;
      display: flex;
      align-items: center;

      input[type='checkbox'] {
        margin-right: 0.75rem;
        width: 1.1rem;
        height: 1.1rem;
        accent-color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
      }

      label {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 0.95rem;
        cursor: pointer;
      }
    }
  }

  .filter-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 480px) {
      gap: 0.75rem;
    }
  }
`;

export const InstructionSection = styled.div`
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar for all browsers */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */  
  h4 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 1rem;
  }

  .instructions-list {
    list-style-type: decimal;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;

    li {
      margin: 0.75rem 0;
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }

  .timeline {
    h4 {
      margin-bottom: 1rem;
    }

    .timeline-steps {
      display: flex;
      gap: 1.1rem;
      flex-wrap: wrap;

      .step {
        flex: 1;
        background: ${({ theme }) => theme.colors.background};
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

        .step-icon {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: ${({ theme }) => theme.colors.primary};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .step-content {
          strong {
            display: block;
            color: ${({ theme }) => theme.colors.textPrimary};
            margin-bottom: 0.25rem;
          }

          span {
            color: ${({ theme }) => theme.colors.textSecondary};
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;

export const SectionContent = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 500px;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
    max-height: 400px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    max-height: 300px;
  }
`;
