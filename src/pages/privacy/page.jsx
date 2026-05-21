import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="p-4 md:p-12 max-w-4xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4a121a] mb-8 border-b pb-4 tracking-tight">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">

          <section>
            <h3 className="font-bold text-lg mb-2">Information Collection</h3>
            <p>
              We collect user information to improve platform security,
              account verification, and overall experience.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">Data Protection</h3>
            <p>
              Your data is protected using modern encryption and secure storage methods.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">Cookies</h3>
            <p>
              Cookies may be used to personalize your browsing experience and improve functionality.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">Third-Party Sharing</h3>
            <p>
              We do not sell or misuse user data with unauthorized third parties.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}