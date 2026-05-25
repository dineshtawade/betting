import React from 'react';
import SectionPage from '../components/SectionPage';

export default function BoxingPage() {
  return (
    <SectionPage
      title="Boxing"
      subtitle="Boxing match odds, round props, and live fight cards."
      intro="This page focuses on boxing markets, including fight winners, round selections, and method props."
      sections={[
        {
          heading: 'Fight Cards',
          content: [
            'Boxing markets show upcoming fights, favourite underdogs, and key title bouts.',
            'The page is designed for fast reference before the bell rings.',
          ],
        },
        {
          heading: 'Round Markets',
          content: [
            'Round count and method props are common in boxing betting.',
            'This section explains the most useful fight market categories.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Winner and round lines',
          description: 'Boxing odds are displayed with winner and round-specific options.',
        },
        {
          title: 'Method props',
          description: 'Explore knockout, decision, and stoppage market categories.',
        },
      ]}
    />
  );
}
