import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default function ContentPage({ title, children }) {
  return (
    <MainLayout>
      <div className="p-6 md:p-12 max-w-4xl mx-auto bg-white min-h-[400px] shadow-sm rounded-lg my-4">
        <h1 className="text-2xl md:text-3xl font-bold text-[#4a121a] mb-6 border-b pb-4">{title}</h1>
        <div className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4">
          {children}
        </div>
      </div>
    </MainLayout>
  );
}