import React from 'react';
import TennisDashboard from '../components/TennisDashboard';
import Footer from '../components/Footer';

export default function TennisPage() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        <TennisDashboard />
        <Footer />
      </div>
    </div>
  );
}
