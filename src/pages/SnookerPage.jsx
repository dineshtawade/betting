import React from 'react';
import SectionPage from '../components/SectionPage';

export default function SnookerPage() {
  return (
    <SectionPage
      title="Snooker"
      subtitle="Snooker odds, frame betting, and match winner markets."
      intro="This page covers snooker markets, including frame-based bets and highest break props."
      sections={[
        {
          heading: 'Frame Markets',
          content: [
            'Snooker odds are often organized by frames won and match winner lines.',
            'This page aims to simplify the snooker betting display.',
          ],
        },
        {
          heading: 'Break Props',
          content: [
            'Popular snooker props include highest break and century break lines.',
            'The page highlights both match and frame-level betting options.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Clear frame viewing',
          description: 'Snooker markets are laid out for easy frame-by-frame selection.',
        },
        {
          title: 'Player form',
          description: 'Track player momentum and form through match details.',
        },
      ]}
    />
  );
}
