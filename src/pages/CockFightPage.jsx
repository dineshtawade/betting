import React from 'react';
import SectionPage from '../components/SectionPage';

export default function CockFightPage() {
  return (
    <SectionPage
      title="Cock Fight"
      subtitle="Cock fight markets, winner odds, and event outcomes."
      intro="This page shows cock fight pairings, head-to-head odds, and fast move markets."
      sections={[
        {
          heading: 'Match Details',
          content: [
            'Cock fight markets are shown with fighter pairings and outcome odds.',
            'The page focuses on the most common match betting types.',
          ],
        },
        {
          heading: 'Live Event Signal',
          content: [
            'Odds often shift quickly based on fight momentum.',
            'This page highlights the fastest-moving cock fight markets.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Pairing odds',
          description: 'Head-to-head odds are presented simply and clearly.',
        },
        {
          title: 'Fast event flow',
          description: 'The page is built for quick selection and rapid market changes.',
        },
      ]}
    />
  );
}
