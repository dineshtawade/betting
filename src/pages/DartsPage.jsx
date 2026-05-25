import React from 'react';
import SectionPage from '../components/SectionPage';

export default function DartsPage() {
  return (
    <SectionPage
      title="Darts"
      subtitle="Darts match odds, leg-based markets, and tournament coverage."
      intro="This page explains darts markets including match winners, finish props, and tournament stage bets."
      sections={[
        {
          heading: 'Match Structure',
          content: [
            'Darts betting is normally based on match winner and leg totals.',
            'This page presents markets in a clean, sport-specific format.',
          ],
        },
        {
          heading: 'Live Finishing Lines',
          content: [
            'Live darts odds may change after each set or leg.',
            'The page helps users follow match progression clearly.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Leg betting',
          description: 'Darts markets are grouped by legs and match results.',
        },
        {
          title: 'Tournament format',
          description: 'Track tournament stages and favorite players easily.',
        },
      ]}
    />
  );
}
