
import React from "react";

export default function Blogs() {

  const blogs = [
    {
      title: "Top Cricket Betting Strategies",
      desc: "Learn advanced betting strategies used by experienced players."
    },
    {
      title: "Best Live Casino Games",
      desc: "Explore the most popular live casino games trending this year."
    },
    {
      title: "Football Match Predictions",
      desc: "Expert tips and insights for upcoming football matches."
    },
    {
      title: "Responsible Gaming Tips",
      desc: "How to enjoy betting responsibly and safely."
    }
  ];

  return (
    <div className="p-4 md:p-12 max-w-6xl mx-auto">

      <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4a121a] mb-8 border-b pb-4 tracking-tight">
          Blogs
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="border rounded-lg p-5 hover:shadow-md transition-all bg-gray-50"
            >
              <h3 className="text-lg font-bold text-[#4a121a] mb-2">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {blog.desc}
              </p>

              <button className="mt-4 text-sm font-semibold text-[#a60a27] hover:underline">
                Read More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

