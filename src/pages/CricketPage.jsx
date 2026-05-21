import React from 'react';
import CricketDashboard from '../components/CricketDashboard';
import Footer from '../components/Footer';

export default function CricketPage() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        <CricketDashboard />
        <Footer />
      </div>
    </div>
  );
}
