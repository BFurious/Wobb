import React, { useState } from 'react';
import { FilterBar } from '../FilterBar/index';
import {
    BackContent,
    DetailSections,
    ActionButton,
    DetailPayoutSection,
    EligibilitySection, InstructionSection
} from './styles';
import { Campaign } from '../../types';

interface BackCardContentProps {
    campaignDetails: Campaign
    setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>
}

export const BackCardContent: React.FC<BackCardContentProps> = ({
    campaignDetails,
    setIsFlipped
}) => {
    const [activeDetailSection, setActiveDetailSection] = useState<string>('eligibility');

    const sections = [
        { id: 'eligibility', label: 'Eligibility' },
        { id: 'instructions', label: 'Instructions' },
        { id: 'payouts', label: 'Payouts' },
    ];

    return (
        <BackContent>
            <FilterBar
                filters={sections}
                selectedFilter={activeDetailSection}
                onFilterSelect={setActiveDetailSection}
                style={{ padding: '0', margin: '0', fontSize: '0.6rem' }}
            />

            <DetailSections>
                <div className="section-content">
                    {activeDetailSection === sections[0].id && (
                        <EligibilitySection>
                            <h4>Eligibility</h4>
                            <ul className="filter-list">
                                <li>
                                    <input type="checkbox" id="followers" />
                                    <label htmlFor="followers">Minimum 10k followers</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="engagement" />
                                    <label htmlFor="engagement">Minimum 5% engagement rate</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="location" />
                                    <label htmlFor="location">Based in India</label>
                                </li>
                            </ul>
                        </EligibilitySection>
                    )}

                    {activeDetailSection === sections[1].id && (
                        <InstructionSection>
                            <h4>Campaign Instructions</h4>
                            <ol className="instructions-list">
                                <li>Create 2 high-quality reels showcasing the product</li>
                                <li>Post 1 Instagram story with proper tagging</li>
                                <li>Use hashtag #BrandCampaign in all posts</li>
                                <li>Maintain brand aesthetics and guidelines</li>
                                <li>Submit content for approval before posting</li>
                            </ol>

                            <div className="timeline">
                                <h4>Timeline</h4>
                                <div className="timeline-steps">
                                    <div className="step">
                                        <div className="step-icon">1</div>
                                        <div className="step-content">
                                            <strong>Content Creation</strong>
                                            <span>2 days</span>
                                        </div>
                                    </div>
                                    <div className="step">
                                        <div className="step-icon">2</div>
                                        <div className="step-content">
                                            <strong>Approval</strong>
                                            <span>1 day</span>
                                        </div>
                                    </div>
                                    <div className="step">
                                        <div className="step-icon">3</div>
                                        <div className="step-content">
                                            <strong>Posting</strong>
                                            <span>3 days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </InstructionSection>
                    )}

                    {activeDetailSection === sections[2].id && (
                        <DetailPayoutSection>
                            <h4>Payout Details</h4>
                            <div className="payout-breakdown">
                                <div className="payout-item">
                                    <span className="label">Base Payment</span>
                                    <span className="value">₹500</span>
                                </div>
                                <div className="payout-item">
                                    <span className="label">Performance Bonus</span>
                                    <span className="value">Up to ₹200</span>
                                </div>
                                <div className="payout-item">
                                    <span className="label">Barter Value</span>
                                    <span className="value">₹449</span>
                                </div>
                                <div className="payout-total">
                                    <span className="label">Total Potential Earnings</span>
                                    <span className="value">₹1149</span>
                                </div>
                            </div>

                            <h4>Payment Terms</h4>
                            <ul className="terms-list">
                                <li>50% advance after content approval</li>
                                <li>50% after campaign completion</li>
                                <li>Payments processed within 7 working days</li>
                                <li>Taxes as applicable</li>
                            </ul>
                        </DetailPayoutSection>
                    )}
                </div>
            </DetailSections>

            <ActionButton onClick={() => setIsFlipped((val) => !val)}>Back to Main</ActionButton>
        </BackContent>
    );
};