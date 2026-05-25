import React from 'react';
import SectionPage from '../components/SectionPage';

export default function BadmintonPage() {
  return (
    <SectionPage
      title="Badminton"
      subtitle="Badminton odds, match winners, and live rally-based lines."
      intro="This page covers badminton markets, game totals, and live in-play rally updates."
      sections={[
        {
          heading: 'Match Odds',
          content: [
            'Badminton markets include winner lines, game total points, and live momentum adjustments.',
            'This page helps users spot strong badminton betting opportunities.',
          ],
        },
        {
          heading: 'Live Rallies',
          content: [
            'Live badminton odds can move quickly with every game and point swing.',
            'A concise layout helps users keep up with action and market changes.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Quick handicaps',
          description: 'Use badminton handicap lines to compare player strengths efficiently.',
        },
        {
          title: 'Clear presentation',
          description: 'Market details are presented clearly with easy-to-read odds.',
        },
      ]}
    />
  );
}
