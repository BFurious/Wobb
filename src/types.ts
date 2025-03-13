// src/types/campaign.ts
export interface SocialMedia {
  instagram: string;
  facebook: string;
  twitter: string;
  linkedin: string;
}

export interface CampaignDetails {
  description: string;
  timeline: string;
  deliverables: string[];
  guidelines: string[];
}

export interface Campaign {
  id: string;
  brandName: string;
  brandLogo: string;
  description: string;
  cashReward: number;
  barterValue: number;
  hiredCount: number;
  totalSlots: number;
  status: 'active' | 'pending' | 'closed';
  images: string[];
  socialMedia: SocialMedia;
  filters: string[];
  requirements: string[];
  details: CampaignDetails;
}

export interface Filter {
  id: string;
  label: string;
  count?: number;
}