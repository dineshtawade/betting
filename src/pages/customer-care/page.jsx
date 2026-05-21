
import React from "react";

export default function CustomerCare() {
  return (
    <div className="p-4 md:p-12 max-w-4xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4a121a] mb-8 border-b pb-4 tracking-tight">
          Customer Care
        </h1>

        <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">

          <p>
            Our customer support team is available 24/7 to help you with any
            issues related to your account, deposits, withdrawals, or technical support.
          </p>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="p-4 bg-gray-50 border rounded">
              <h3 className="font-bold text-[#4a121a] mb-2">Live Chat</h3>
              <p className="text-xs">
                Connect instantly with our support executives.
              </p>
            </div>

            <div className="p-4 bg-gray-50 border rounded">
              <h3 className="font-bold text-[#4a121a] mb-2">Email Support</h3>
              <p className="text-xs">
                support@reddybook.club
              </p>
            </div>

            <div className="p-4 bg-gray-50 border rounded">
              <h3 className="font-bold text-[#4a121a] mb-2">Response Time</h3>
              <p className="text-xs">
                Average response time is less than 10 minutes.
              </p>
            </div>

            <div className="p-4 bg-gray-50 border rounded">
              <h3 className="font-bold text-[#4a121a] mb-2">Availability</h3>
              <p className="text-xs">
                24 Hours | 7 Days a Week
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
