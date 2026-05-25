import React from 'react';
import SectionPage from '../components/SectionPage';

export default function FutsalPage() {
  return (
    <SectionPage
      title="Futsal"
      subtitle="Futsal odds, goal totals, and match winner markets."
      intro="This page focuses on futsal betting with fast scoring markets and halftime-focused options."
      sections={[
        {
          heading: 'Quarter and Half Markets',
          content: [
            'Futsal odds often focus on match winners and goal totals by half.',
            'The page helps users find fast-moving futsal lines quickly.',
          ],
        },
        {
          heading: 'Live Goals',
          content: [
            'Futsal is high-scoring, so live totals and goal props are common.',
            'This page keeps the most useful futsal markets visible and easy to access.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'High-tempo markets',
          description: 'Futsal sections are designed for fast scoring and straightforward odds.',
        },
        {
          title: 'Clear filters',
          description: 'Find the most common futsal markets without extra noise.',
        },
      ]}
    />
  );
}
