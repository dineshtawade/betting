import React from 'react';
// import MainLayout from '../layouts/MainLayout';

export default function About() {
  return (
      <div className="p-4 md:p-12 max-w-4xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">
          
          {/* Page Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#4a121a] mb-8 border-b pb-4 tracking-tight">
            About Us
          </h1>
          
          <div className="text-gray-700 leading-relaxed space-y-8 text-sm md:text-base">
            
            {/* Section 1 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#a60a27] pl-3">
                Welcome to Reddybook.club
              </h3>
              <p>
                Reddybook.club is a leading online sports exchange platform, designed to provide 
                sports enthusiasts and gamers with a safe, transparent, and fast-paced betting environment. 
                Our platform is built to offer a seamless experience for those who value speed, 
                reliability, and global sports coverage.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#a60a27] pl-3">
                Our Vision
              </h3>
              <p>
                Our vision is to create an ecosystem where betting is more than just an activity; 
                it is a smooth, enjoyable, and engaging experience. We leverage cutting-edge 
                technology and user-centric design to ensure you have access to real-time odds, 
                instant updates, and intuitive navigation.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#a60a27] pl-3">
                Why Choose Us?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded border border-gray-100">
                  <h4 className="font-bold text-[#4a121a] mb-1">Security First</h4>
                  <p className="text-xs">We prioritize your data privacy and security with advanced encryption protocols.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded border border-gray-100">
                  <h4 className="font-bold text-[#4a121a] mb-1">Real-Time Odds</h4>
                  <p className="text-xs">Stay ahead of the game with our competitive and live-updating market odds.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded border border-gray-100">
                  <h4 className="font-bold text-[#4a121a] mb-1">24/7 Support</h4>
                  <p className="text-xs">Our dedicated team is always ready to assist you whenever you need help.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded border border-gray-100">
                  <h4 className="font-bold text-[#4a121a] mb-1">Fair Play</h4>
                  <p className="text-xs">We ensure a transparent platform where every user enjoys fair chances.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#a60a27] pl-3">
                Our Commitment
              </h3>
              <p>
                At Reddybook.club, we emphasize <strong>Responsible Gaming</strong>. We encourage 
                our users to treat sports betting as a form of entertainment and to always play 
                within their limits. Your safety and enjoyment remain our ultimate goals.
              </p>
            </section>
          </div>
        </div>
      </div>
  );
}