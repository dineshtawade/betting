import React from 'react';
import Footer from './Footer';

export default function SectionPage({
  title,
  subtitle,
  intro,
  sections = [],
  featureCards = [],
}) {
  return (
    <div className="min-h-screen bg-[#eef2f5] text-[#111]">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
        <div className="bg-white shadow-sm rounded-3xl p-6 md:p-10">
          <div className="space-y-5">
            <span className="text-sm uppercase tracking-[0.3em] text-[#a60a27]">
              {title} Section
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#4a121a]">
              {title}
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {subtitle}
            </p>
            {intro && (
              <div className="rounded-3xl bg-[#faf9f5] border border-gray-200 p-5 text-sm md:text-base text-[#333]">
                {intro}
              </div>
            )}
          </div>

          <div className="mt-10 space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#4a121a]">
                  {section.heading}
                </h2>
                <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}

            {featureCards.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                {featureCards.map((card, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-gray-200 bg-[#ffffff] p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-semibold text-[#4a121a] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
