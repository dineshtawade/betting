import React from 'react';
import SectionPage from '../components/SectionPage';

export default function RugbyPage() {
  return (
    <SectionPage
      title="Rugby"
      subtitle="Rugby match odds, handicap lines, and total points markets."
      intro="This page explains rugby markets for match winners, totals, and live momentum during the game."
      sections={[
        {
          heading: 'Market Access',
          content: [
            'Rugby markets are grouped by match winner, handicap, and total points.',
            'The page is structured to support both pre-match and live action.',
          ],
        },
        {
          heading: 'Live Momentum',
          content: [
            'Rugby in-play odds change with every try, penalty, and red card.',
            'Quick access to live markets is essential for this page layout.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Match winner focus',
          description: 'Rugby markets are easy to compare across tournaments and divisions.',
        },
        {
          title: 'Total points lines',
          description: 'Totals are shown with clear scoring expectations for each game.',
        },
      ]}
    />
  );
}
