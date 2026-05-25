import React from 'react';
import SectionPage from '../components/SectionPage';

export default function HandballPage() {
  return (
    <SectionPage
      title="Handball"
      subtitle="Handball odds, match totals, and live handball markets."
      intro="This page highlights handball markets for match winners, total goals, and halftime/fulltime lines."
      sections={[
        {
          heading: 'Match Layout',
          content: [
            'Handball markets are grouped by winner and total goals for fast-paced games.',
            'This page is built for easy match navigation and live selection.',
          ],
        },
        {
          heading: 'Live Scoring',
          content: [
            'In-play handball odds move quickly with each goal.',
            'The page lets users see live totals and key match shifts.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Fast game lines',
          description: 'Handball betting is shown in a compact, action-friendly format.',
        },
        {
          title: 'Live momentum',
          description: 'Follow scoring runs and market changes easily.',
        },
      ]}
    />
  );
}
