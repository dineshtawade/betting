import React from "react";

export default function Terms() {
  return (
    <div className="p-4 md:p-12 max-w-4xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4a121a] mb-8 border-b pb-4 tracking-tight">
          Terms and Conditions
        </h1>

        <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">

          <section>
            <h3 className="font-bold text-lg mb-2">User Agreement</h3>
            <p>
              By accessing this platform, you agree to comply with all applicable
              terms, policies, and regulations.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">Account Responsibility</h3>
            <p>
              Users are responsible for maintaining account confidentiality and activity.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">Fair Usage</h3>
            <p>
              Fraudulent activity, abuse, or manipulation may result in account suspension.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">Policy Updates</h3>
            <p>
              We reserve the right to update these terms without prior notice.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

