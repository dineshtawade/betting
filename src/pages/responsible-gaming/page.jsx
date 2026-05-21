import React from "react";

export default function ResponsibleGaming() {
  return (
    <div className="p-4 md:p-12 max-w-4xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4a121a] mb-8 border-b pb-4 tracking-tight">
          Responsible Gaming
        </h1>

        <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">

          <p>
            At Reddybook.club, we believe gaming should always remain enjoyable and controlled.
            We encourage all users to participate responsibly and avoid excessive gambling behavior.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded bg-gray-50">
              <h3 className="font-bold text-[#4a121a] mb-2">Set Limits</h3>
              <p className="text-xs">
                Always decide your spending limits before participating.
              </p>
            </div>

            <div className="p-4 border rounded bg-gray-50">
              <h3 className="font-bold text-[#4a121a] mb-2">Play for Fun</h3>
              <p className="text-xs">
                Gaming should be treated as entertainment, not income.
              </p>
            </div>

            <div className="p-4 border rounded bg-gray-50">
              <h3 className="font-bold text-[#4a121a] mb-2">Take Breaks</h3>
              <p className="text-xs">
                Avoid continuous betting sessions and take regular breaks.
              </p>
            </div>

            <div className="p-4 border rounded bg-gray-50">
              <h3 className="font-bold text-[#4a121a] mb-2">Seek Support</h3>
              <p className="text-xs">
                If gaming becomes stressful, seek professional assistance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

