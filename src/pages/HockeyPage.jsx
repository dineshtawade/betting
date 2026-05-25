import React from 'react';
import SectionPage from '../components/SectionPage';

export default function HockeyPage() {
  return (
    <SectionPage
      title="Hockey"
      subtitle="Hockey odds, puck line markets, and live game betting for major hockey leagues."
      intro="This page highlights hockey odds, goals totals, and period-based betting options."
      sections={[
        {
          heading: 'Goal and Puck Lines',
          content: [
            'Hockey markets often focus on puck line spreads and total goals.',
            'The page organizes markets for quick selection across periods and full games.',
          ],
        },
        {
          heading: 'Live Period Betting',
          content: [
            'In-play hockey odds update between periods and after penalties.',
            'This page highlights the most common live bet categories for hockey.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Goal totals',
          description: 'Totals and puck line markets are easy to compare on this hockey page.',
        },
        {
          title: 'Fast in-play',
          description: 'Hockey live bets are best followed using a simple market layout.',
        },
      ]}
    />
  );
}
