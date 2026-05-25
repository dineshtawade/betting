import React from 'react';
import SectionPage from '../components/SectionPage';

export default function GreyhoundPage() {
  return (
    <SectionPage
      title="Greyhound"
      subtitle="Greyhound racing odds, win-place-show lines, and fast race markets."
      intro="This page highlights short-distance greyhound races, market favorites, and quick odds."
      sections={[
        {
          heading: 'Race Overview',
          content: [
            'See the next greyhound race schedule, competitor names, and market favorites.',
            'The page is designed for swift betting decisions on every race.',
          ],
        },
        {
          heading: 'Market Types',
          content: [
            'Greyhound markets include win, place, and show lines for each race.',
            'This section explains the fastest-moving greyhound odds.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Quick race markets',
          description: 'Races move quickly, so the page keeps odds easy to read and act on.',
        },
        {
          title: 'Short race format',
          description: 'Greyhound odds are updated race by race with minimal delay.',
        },
      ]}
    />
  );
}
