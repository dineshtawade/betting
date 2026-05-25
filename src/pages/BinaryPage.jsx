import React from 'react';
import SectionPage from '../components/SectionPage';

export default function BinaryPage() {
  return (
    <SectionPage
      title="Binary"
      subtitle="Binary betting markets, yes/no event lines, and outcome-based wagers."
      intro="This page explains binary markets and simple outcome betting for quick yes/no events."
      sections={[
        {
          heading: 'How Binary Works',
          content: [
            'Binary betting is centered on a single event outcome with two possible results.',
            'This page explains what makes binary markets different from traditional sports betting.',
          ],
        },
        {
          heading: 'Common Use Cases',
          content: [
            'Binary markets are often used for political outcomes, events, and quick prop questions.',
            'The page shows how to read and place simple binary wagers.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Simple odds',
          description: 'Binary markets are designed for clear yes/no outcomes and quick decisions.',
        },
        {
          title: 'Event-based',
          description: 'This page groups the most common binary market scenarios in one place.',
        },
      ]}
    />
  );
}
