"use client";

import React, { useEffect, useState } from "react";
import { X, Download } from "lucide-react";

export default function InstallAppPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("app-popup-shown");

    if (!alreadyVisited) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("app-popup-shown", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0b0317] border border-cyan-400/20 p-6 text-white">

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-white"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#ffd79a] leading-tight">
          Install Application
        </h1>

        <p className="mt-2 text-lg font-semibold">
          Fake Link Pe Login Karne Se Bacho ✨
        </p>

        {/* Description */}
        <p className="mt-5 text-sm text-gray-300">
          Official app install karke smooth aur secure access pao.
        </p>

        {/* Features */}
        <div className="mt-5 rounded-2xl border border-cyan-400/20 p-4 bg-white/5">
          <ul className="space-y-3 text-sm">
            <li>✅ Smooth 24x7 Access</li>
            <li>✅ Faster Performance</li>
            <li>✅ Safe & Secure Entry</li>
            <li>✅ Seamless Gameplay</li>
          </ul>
        </div>

        {/* Install Button */}
        <button
          onClick={closePopup}
          className="mt-6 w-full rounded-2xl bg-cyan-400 py-4 text-black font-bold flex items-center justify-center gap-2"
        >
          <Download size={20} />
          INSTALL OFFICIAL APP
        </button>
      </div>
    </div>
  );
}