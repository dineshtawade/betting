import React from 'react';
import FootballDashboard from '../components/FootballDashboard';
import Footer from '../components/Footer';

export default function FootballPage() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        <FootballDashboard />
        <Footer />
      </div>
    </div>
  );
}
