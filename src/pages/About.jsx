import React from 'react';
import MainLayout from '../layouts/MainLayout';

function About() {
  return (
    <MainLayout>
      <div className="p-6 md:p-12 max-w-4xl mx-auto bg-white min-h-[500px] shadow-sm rounded-lg my-4">
        <h1 className="text-3xl font-bold text-[#4a121a] mb-6 border-b pb-4">About Us</h1>
        
        <div className="text-gray-700 leading-relaxed space-y-6 text-sm md:text-base">
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Welcome to Reddybook.club</h3>
            <p>
              Reddybook.club ek leading online sports exchange platform hai, jo sports enthusiasts 
              aur gamers ko ek safe, transparent, aur fast-paced betting environment provide karne 
              ke liye design kiya gaya hai.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Humari Vision</h3>
            <p>
              Humara vision hai ek aisa ecosystem banana jahan betting sirf ek activity na ho, 
              balki ek smooth aur enjoyable experience ho. Hum technology aur user-centric 
              design ka use karte hain taaki aapko real-time odds aur seamless navigation mile.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Humari Khasiyat</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Security First:</strong> Hum aapke data ki privacy ko top priority dete hain.</li>
              <li><strong>Real-Time Odds:</strong> Market ke latest aur most competitive odds.</li>
              <li><strong>24/7 Support:</strong> Humari team hamesha aapki madad ke liye taiyaar hai.</li>
              <li><strong>Fair Play:</strong> Transparent platform aur fair chances for every user.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Humara Commitment</h3>
            <p>
              Reddybook.club par hum <strong>Responsible Gaming</strong> ko bahut importance dete hain. 
              Hum apne users ko encourage karte hain ki wo sports betting ko sirf entertainment 
              ke taur par lein aur apne limits ke andar hi khelein.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;