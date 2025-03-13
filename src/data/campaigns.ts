import { Campaign } from "../types";
import { FaInstagramSquare, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import oziva_1 from "../../public/oziva/pic1.webp"
import oziva_2 from "../../public/oziva/pic2.webp"
import oziva_3 from "../../public/oziva/pic3.webp"
import ozivaLogo from "../../public/oziva/logo.webp"
import healthyfy_1 from "../../public/healthyfy/pic1.webp"
import healthyfy_2 from "../../public/healthyfy/pic2.webp"
import healthyfy_3 from "../../public/healthyfy/pic3.webp"
import healthyfy_4 from "../../public/healthyfy/pic4.webp"
import healthyfy_5 from "../../public/healthyfy/pic5.webp"
import healthyfyLogo from "../../public/healthyfy/logo.webp"


interface Filter {
  id: string;
  label: string;
  count: number;
}

export const campaigns: Campaign[] = [
  {
    id: '1',
    brandName: 'OZIVA',
    brandLogo: ozivaLogo,
    description: 'Get ₹500 cash + barter worth ₹449 for 2 Reels and 1 Story\nManage Weight Naturally',
    cashReward: 500,
    barterValue: 449,
    hiredCount: 45,
    totalSlots: 100,
    status: 'active',
    images: [
      oziva_1,
      oziva_2,
      oziva_3
    ],
    socialMedia: {
      instagram: 'https://instagram.com/oziva',
      facebook: 'https://facebook.com/oziva',
      twitter: 'https://twitter.com/oziva',
      linkedin: 'https://linkedin.com/company/oziva'
    },
    filters: ['Health & Wellness', 'Fitness', 'Nutrition'],
    requirements: [
      'Minimum 10k followers',
      'Post 2 reels and 1 story',
      'Use hashtag #OzivaWellness'
    ],
    details: {
      description: 'Detailed campaign description...',
      timeline: '2 weeks duration',
      deliverables: [
        '2 high-quality reels',
        '1 Instagram story',
        '3 feed posts'
      ],
      guidelines: [
        'Maintain brand aesthetics',
        'No competing brand tags',
        'Mention @oziva in all posts'
      ]
    }
  },
  {
    id: '2',
    brandName: 'HealthifyMe',
    brandLogo: healthyfyLogo,
    description: 'Earn ₹1000 cash + supplements worth ₹799\nFitness Challenge Campaign',
    cashReward: 1000,
    barterValue: 799,
    hiredCount: 78,
    totalSlots: 100,
    status: 'pending',
    images: [
      healthyfy_1,
      healthyfy_2,
      healthyfy_3,
      healthyfy_4,
      healthyfy_5
    ],
    socialMedia: {
      instagram: 'https://instagram.com/healthifyme',
      facebook: 'https://facebook.com/healthifyme',
      twitter: 'https://twitter.com/healthifyme',
      linkedin: 'https://linkedin.com/company/healthifyme'
    },
    filters: ['Fitness', 'Weight Loss', 'Nutrition'],
    requirements: [
      'Minimum 5k followers',
      'Post 1 reel per week',
      'Share transformation story'
    ],
    details: {
      description: 'Detailed campaign description...',
      timeline: '1 month duration',
      deliverables: [
        '4 weekly reels',
        '2 Instagram stories',
        '1 transformation post'
      ],
      guidelines: [
        'Use #HealthifyMeChallenge',
        'Tag @healthifyme',
        'Maintain professional quality'
      ]
    }
  },
  {
    id: '1',
    brandName: 'OZIVA',
    brandLogo: ozivaLogo,
    description: 'Get ₹500 cash + barter worth ₹449 for 2 Reels and 1 Story\nManage Weight Naturally',
    cashReward: 500,
    barterValue: 449,
    hiredCount: 92,
    totalSlots: 100,
    status: 'active',
    images: [
      oziva_1,
      oziva_2,
      oziva_3
    ],
    socialMedia: {
      instagram: 'https://instagram.com/oziva',
      facebook: 'https://facebook.com/oziva',
      twitter: 'https://twitter.com/oziva',
      linkedin: 'https://linkedin.com/company/oziva'
    },
    filters: ['Health & Wellness', 'Fitness', 'Nutrition'],
    requirements: [
      'Minimum 10k followers',
      'Post 2 reels and 1 story',
      'Use hashtag #OzivaWellness'
    ],
    details: {
      description: 'Detailed campaign description...',
      timeline: '2 weeks duration',
      deliverables: [
        '2 high-quality reels',
        '1 Instagram story',
        '3 feed posts'
      ],
      guidelines: [
        'Maintain brand aesthetics',
        'No competing brand tags',
        'Mention @oziva in all posts'
      ]
    }
  },
  {
    id: '2',
    brandName: 'HealthifyMe',
    brandLogo: healthyfyLogo,
    description: 'Earn ₹1000 cash + supplements worth ₹799\nFitness Challenge Campaign',
    cashReward: 1000,
    barterValue: 799,
    hiredCount: 98,
    totalSlots: 100,
    status: 'pending',
    images: [
      healthyfy_1,
      healthyfy_2,
      healthyfy_3,
      healthyfy_4,
      healthyfy_5
    ],
    socialMedia: {
      instagram: 'https://instagram.com/healthifyme',
      facebook: 'https://facebook.com/healthifyme',
      twitter: 'https://twitter.com/healthifyme',
      linkedin: 'https://linkedin.com/company/healthifyme'
    },
    filters: ['Fitness', 'Weight Loss', 'Nutrition'],
    requirements: [
      'Minimum 5k followers',
      'Post 1 reel per week',
      'Share transformation story'
    ],
    details: {
      description: 'Detailed campaign description...',
      timeline: '1 month duration',
      deliverables: [
        '4 weekly reels',
        '2 Instagram stories',
        '1 transformation post'
      ],
      guidelines: [
        'Use #HealthifyMeChallenge',
        'Tag @healthifyme',
        'Maintain professional quality'
      ]
    }
  },
  {
    id: '1',
    brandName: 'OZIVA',
    brandLogo: ozivaLogo,
    description: 'Get ₹500 cash + barter worth ₹449 for 2 Reels and 1 Story\nManage Weight Naturally',
    cashReward: 500,
    barterValue: 449,
    hiredCount: 60,
    totalSlots: 100,
    status: 'active',
    images: [
      oziva_1,
      oziva_2,
      oziva_3
    ],
    socialMedia: {
      instagram: 'https://instagram.com/oziva',
      facebook: 'https://facebook.com/oziva',
      twitter: 'https://twitter.com/oziva',
      linkedin: 'https://linkedin.com/company/oziva'
    },
    filters: ['Health & Wellness', 'Fitness', 'Nutrition'],
    requirements: [
      'Minimum 10k followers',
      'Post 2 reels and 1 story',
      'Use hashtag #OzivaWellness'
    ],
    details: {
      description: 'Detailed campaign description...',
      timeline: '2 weeks duration',
      deliverables: [
        '2 high-quality reels',
        '1 Instagram story',
        '3 feed posts'
      ],
      guidelines: [
        'Maintain brand aesthetics',
        'No competing brand tags',
        'Mention @oziva in all posts'
      ]
    }
  },
  {
    id: '2',
    brandName: 'HealthifyMe',
    brandLogo: healthyfyLogo,
    description: 'Earn ₹1000 cash + supplements worth ₹799\nFitness Challenge Campaign',
    cashReward: 1000,
    barterValue: 799,
    hiredCount: 78,
    totalSlots: 100,
    status: 'active',
    images: [
      healthyfy_1,
      healthyfy_2,
      healthyfy_3,
      healthyfy_4,
      healthyfy_5
    ],
    socialMedia: {
      instagram: 'https://instagram.com/healthifyme',
      facebook: 'https://facebook.com/healthifyme',
      twitter: 'https://twitter.com/healthifyme',
      linkedin: 'https://linkedin.com/company/healthifyme'
    },
    filters: ['Fitness', 'Weight Loss', 'Nutrition'],
    requirements: [
      'Minimum 5k followers',
      'Post 1 reel per week',
      'Share transformation story'
    ],
    details: {
      description: 'Detailed campaign description...',
      timeline: '1 month duration',
      deliverables: [
        '4 weekly reels',
        '2 Instagram stories',
        '1 transformation post'
      ],
      guidelines: [
        'Use #HealthifyMeChallenge',
        'Tag @healthifyme',
        'Maintain professional quality'
      ]
    }
  },
  
];

// src/constants/socialMedia.ts
export const socialMediaIcons = [
  {
    id: 'instagram',
    icon: FaInstagramSquare,
    url: '#'
  },
  {
    id: 'facebook',
    icon: FaFacebook,
    url: '#'
  },
  {
    id: 'twitter',
    icon: FaTwitter,
    url: '#'
  },
  {
    id: 'linkedin',
    icon: FaLinkedin,
    url: '#'
  }
];

// src/constants/colors.ts
export const progressColors = {
  green: '#4CAF50',
  yellow: '#FFEB3B',
  orange: '#FF9800',
  red: '#F44336'
};

export const getProgressColor = (percentage: number) => {
  if (percentage < 70) return progressColors.green;
  if (percentage < 90) return progressColors.orange;
  return progressColors.red;
};

// src/constants/breakpoints.ts
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1440px'
};

// src/constants/filters.ts
export const campaignFilters: Filter[] = [
  { id: 'all', label: 'All', count: 2 },
  { id: 'applied', label: 'Applied', count: 0 },
  { id: 'hired', label: 'Hired', count: 0 },
  { id: 'closed', label: 'Closed', count: 0 },
  { id: 'health', label: 'Health & Wellness', count: 1 },
  { id: 'fitness', label: 'Fitness', count: 2 },
  { id: 'nutrition', label: 'Nutrition', count: 2 },
  { id: 'weight-loss', label: 'Weight Loss', count: 1 }
];