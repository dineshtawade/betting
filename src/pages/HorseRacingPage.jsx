import React from 'react';
import SectionPage from '../components/SectionPage';

export default function HorseRacingPage() {
  return (
    <SectionPage
      title="Horse Racing"
      subtitle="Horse racing odds, win-place-show markets, and live race updates."
      intro="This page covers win, place, show, and exotic markets for horse racing events."
      sections={[
        {
          heading: 'Race Cards',
          content: [
            'View upcoming horse races, jockey details, and the most competitive market favorites.',
            'The page is built to help users find top races quickly and clearly.',
          ],
        },
        {
          heading: 'Betting Types',
          content: [
            'Horse racing offers win, place, show, and exotic betting lines like exacta and trifecta.',
            'This section explains how each betting type works for quick decisions.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Race favorites',
          description: 'Find the leading horses and jockeys for every active race.',
        },
        {
          title: 'Exotic bets explained',
          description: 'Learn the basics of exacta, trifecta, and quinella markets.',
        },
      ]}
    />
  );
}
