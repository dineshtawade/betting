import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    { name: "Responsible Gaming", path: "/responsible-gaming" },
    { name: "About Us", path: "/about-us" },
    { name: "Customer Care", path: "/customer-care" },
    { name: "Terms and Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Blogs", path: "/blogs" },
    { name: "Categories", path: "/categories" },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-8 border-t border-[#333] shrink-0">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[11px] hover:text-[#cca04c] transition-colors uppercase tracking-wider py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="text-[10px] text-center border-t border-[#333] mt-6 pt-4 uppercase tracking-widest text-gray-600">
          © 2026 Reddybook.club | All rights reserved
        </div>

      </div>
    </footer>
  );
}