import React from 'react';
import SectionPage from '../components/SectionPage';

export default function PoliticsPage() {
  return (
    <SectionPage
      title="Politics"
      subtitle="Politics markets, election odds, and event-based political betting lines."
      intro="Politics betting covers election outcomes, leadership races, and event-based prop markets."
      sections={[
        {
          heading: 'Election Markets',
          content: [
            'Politics pages include national, state, and leadership election odds.',
            'The page is structured for readers to find event outcomes quickly.',
          ],
        },
        {
          heading: 'Event Props',
          content: [
            'Common politics markets include winner lines and margin outcomes.',
            'This section explains the main political betting categories.',
          ],
        },
      ]}
      featureCards={[
        {
          title: 'Outcome lines',
          description: 'Politics markets are arranged around clear winner and result options.',
        },
        {
          title: 'Event updates',
          description: 'The page keeps political betting information simple and focused.',
        },
      ]}
    />
  );
}
