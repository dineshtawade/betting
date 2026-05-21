import React from "react";

export default function Categories() {

  const categories = [
    "Cricket",
    "Football",
    "Tennis",
    "Casino",
    "Sports Book",
    "Horse Racing",
    "Greyhound Racing",
    "Fantasy 11",
    "Politics",
    "Cock Fight",
    "Kabaddi",
    "Basketball",
  ];

  return (
    <div className="p-4 md:p-12 max-w-6xl mx-auto">

      <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4a121a] mb-8 border-b pb-4 tracking-tight">
          Categories
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-lg p-5 text-center hover:shadow-md hover:border-[#a60a27] transition-all cursor-pointer"
            >
              <div className="text-lg font-bold text-[#4a121a]">
                {category}
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

