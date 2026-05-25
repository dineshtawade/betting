import React, { useEffect, useState } from "react";
import { X, Download } from "lucide-react";

export default function InstallAppPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popup-shown");

    if (!popupShown) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("popup-shown", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-3xl border border-cyan-400/20 bg-[#0b0317] p-6 text-white shadow-2xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4"
        >
          <X size={22} />
        </button>

        {/* HEADING */}
        <h1 className="text-3xl font-bold text-[#ffd79a] leading-tight">
          Install Application
        </h1>

        <p className="mt-2 text-lg font-semibold">
          Fake Link Pe Login Karne Se Bacho ✨
        </p>

        {/* DESCRIPTION */}
        <p className="mt-5 text-sm text-gray-300">
          Official app install karke smooth aur secure access pao.
        </p>

        {/* FEATURES */}
        <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-white/5 p-4">
          <ul className="space-y-3 text-sm">
            <li>✅ Smooth 24x7 Access</li>
            <li>✅ Faster Performance</li>
            <li>✅ Safe & Secure Entry</li>
            <li>✅ Seamless Gameplay</li>
          </ul>
        </div>

        {/* BUTTON */}
        <button
          onClick={closePopup}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 py-4 text-lg font-bold text-black"
        >
          <Download size={20} />
          INSTALL OFFICIAL APP
        </button>
      </div>
    </div>
  );
}