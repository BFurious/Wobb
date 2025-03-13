// Enhanced CampaignCard with Flip Animation
import { FC, useState } from 'react';
import { Campaign } from '../../types';
import {
  CardContainer,
  FlipContainer,
  FlipContainerOuter
} from './styles';
import { BackCardContent } from './BackCardContent';
import { FrontCardContainer } from './FrontCardContainer';

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  

  return (
    <CardContainer>
      <FlipContainerOuter>
        <FlipContainer $isFlipped={isFlipped}>
          <FrontCardContainer campaign = {campaign} setIsFlipped={setIsFlipped}/>

          <BackCardContent  campaignDetails = {campaign} setIsFlipped={setIsFlipped} />
        </FlipContainer>
      </FlipContainerOuter>
    </CardContainer>
  );
};