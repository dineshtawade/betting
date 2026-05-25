import React from 'react';
import SectionPage from '../components/SectionPage';

export default function Formula1Page() {
  return (
    <SectionPage
      title="Formula 1"
      subtitle="Formula 1 odds, grand prix markets, and driver props for the world championship."
      intro="This page brings together F1 race winner, podium, and fastest lap markets in one place."
      sections={[
        {
          heading: 'Driver Markets',
          content: [
            'See market lines for race winners, podium finishes, and top drivers.',
            'The page helps users compare favourites across each grand prix.',
          ],
        },
        {
          heading: 'Session Coverage',
          content: [
            'Formula 1 also has qualifying and sprint event markets.',
            'This page presents the main F1 race markets clearly for fast reference.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Grand prix coverage',
          description: 'Browse F1 markets organized by event and track.',
        },
        {
          title: 'Driver odds',
          description: 'Driver market comparisons are presented with simple labels and colours.',
        },
      ]}
    />
  );
}
