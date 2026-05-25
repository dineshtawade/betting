import React from 'react';
import SectionPage from '../components/SectionPage';

export default function MotorsportPage() {
  return (
    <SectionPage
      title="Motorsport"
      subtitle="Motorsport odds, race winner markets, and event coverage for major racing series."
      intro="This page covers race winners, podium props, and qualifying lines for top motorsport events."
      sections={[
        {
          heading: 'Race Categories',
          content: [
            'Motorsport pages cover F1, MotoGP, rally, and other major racing series.',
            'Markets are grouped by event type and race status.',
          ],
        },
        {
          heading: 'Betting Types',
          content: [
            'Common markets include race winner, podium finish, and fastest lap.',
            'The page explains how each market type is presented and selected.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Race winner lines',
          description: 'Find the leading betting favorites for every major motorsport event.',
        },
        {
          title: 'Qualifying props',
          description: 'See how qualifying and fastest lap markets are displayed.',
        },
      ]}
    />
  );
}
