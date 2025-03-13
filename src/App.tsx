// src/App.tsx
import { useState } from 'react';
import { CampaignCard } from './components/CampaignCard/index.tsx';
import { FilterBar } from './components/FilterBar/index.tsx';
import Header from './components/shared/header.tsx';
import Footer from './components/shared/footer.tsx';
import { PageHeader } from './components/home/home.tsx';
import { campaigns, campaignFilters } from './data/campaigns';
import { LayoutContainer, CampaignsGrid } from './App.styles.ts';

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  return (
    <>
      <Header />
      <LayoutContainer>
        <PageHeader
          title="Today's Recommendation"
          subtitle="2 featured campaigns"
        />
        <FilterBar
          filters={campaignFilters}
          selectedFilter={selectedFilter}
          onFilterSelect={setSelectedFilter}
        />

        <CampaignsGrid>
          {campaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </CampaignsGrid>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default App;