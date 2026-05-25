import React from 'react';
import SectionPage from '../components/SectionPage';

export default function CyclingPage() {
  return (
    <SectionPage
      title="Cycling"
      subtitle="Cycling odds, stage winner markets, and race coverage."
      intro="This page covers stage winners, overall classification, and the most important cycling market categories."
      sections={[
        {
          heading: 'Race Markets',
          content: [
            'Cycling markets are often split by stage winner, general classification, and jersey competitions.',
            'This page helps users navigate the different race categories and market types.',
          ],
        },
        {
          heading: 'Event Coverage',
          content: [
            'Major cycling races are shown with stage details and rider odds.',
            'The page supports both long-term and stage-specific bets.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Stage winner lines',
          description: 'Cycling pages highlight the key stage favourite and main contenders.',
        },
        {
          title: 'General classification',
          description: 'Compare riders for overall race standings in a single view.',
        },
      ]}
    />
  );
}
