import React, { useState, FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { socialMediaIcons } from '../../data/campaigns';
import {
    BrandLogo,
    FrontContent,
    CardHeader,
    SocialIcons,
    SwiperContainer,
    OverlayStyle,
    StatusBadge, CardContent, PayoutSection, ProgressContainer, ActionButton, BrandHeader
} from './styles';
import { Campaign } from '../../types';
import { getProgressColor } from '../../data/campaigns';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

interface CampaignCardProps {
    campaign: Campaign;
    setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
}


export const FrontCardContainer: FC<CampaignCardProps> = ({ campaign, setIsFlipped }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <FrontContent>

            <CardHeader
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>

                <SocialIcons $visible={isHovered}>
                    {socialMediaIcons.map(({ id, icon, url }) => (
                        <a key={id} href={url} target="_blank" rel="noreferrer">
                            {React.createElement(icon)}
                        </a>
                    ))}
                </SocialIcons>
                <OverlayStyle $visible={isHovered}>
                </OverlayStyle>
                <SwiperContainer>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                            type: 'bullets',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                    >
                        {campaign.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <BrandLogo src={image} alt={`${campaign.brandName} ${index}`} />
                            </SwiperSlide>
                        ))}

                        {/* Navigation Buttons */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>

                        {/* Pagination */}
                        <div className="swiper-pagination"></div>
                    </Swiper>
                </SwiperContainer>

                <StatusBadge $status={campaign.status}>
                    {campaign.status}
                </StatusBadge>

            </CardHeader>

            <CardContent>

                <BrandHeader>
                    <img src={campaign.brandLogo} alt="Brand Logo" className="brand-logo" />
                    <h3>{campaign.brandName}</h3>
                </BrandHeader>

                <p className="description">{campaign.description}</p>

                <PayoutSection>
                    <div className="cash-reward">
                        <span className="currency">₹</span>
                        <span className="amount">{campaign.cashReward}</span>
                        <span className="label">Cash</span>
                    </div>
                    <div className="barter-value">
                        + Barter
                        <div style={{ display: 'flex', gap: '0.5em', alignItems: "center" }}>
                            <b style={{ fontWeight: '600', fontSize: '1.25rem' }}>(</b>
                            <span className="currency"> ₹</span>
                            <span className="amount">{campaign.barterValue}</span>
                            <b style={{ fontWeight: '600', fontSize: '1.25rem' }}>)</b>
                        </div>
                    </div>
                </PayoutSection>

                <ProgressContainer>
                    <div className="progress-text">
                        {campaign.hiredCount}/{campaign.totalSlots} Hired
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${(campaign.hiredCount / campaign.totalSlots) * 100}%`,
                                backgroundColor: getProgressColor(
                                    (campaign.hiredCount / campaign.totalSlots) * 100
                                )
                            }}
                        />
                    </div>
                </ProgressContainer>

                <ActionButton onClick={() => setIsFlipped((val) => !val)}>
                    View Details
                </ActionButton>
            </CardContent>
        </FrontContent>
    );
}