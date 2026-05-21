import React from 'react';
import { Pin, Tv, Volume2 } from 'lucide-react';

export default function TennisDashboard() {
  const matches = [
    {
      teams: "CARLOS ALCARAZ V JANIK SINNER",
      league: "ATP FRENCH OPEN",
      isLive: true,
      date: "21 MAY",
      time: "04:30 PM",
      icons: { bm: true, g: true, tv: true },
      odds: {
        back1: "1.85", back1Vol: "2451.00", lay1: "1.87", lay1Vol: "850.50",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-", // Tennis me draw (X) usually khali hota hai
        back2: "1.95", back2Vol: "1920.00", lay2: "1.98", lay2Vol: "1120.40"
      }
    },
    {
      teams: "IGA SWIATEK V ARYNA SABALENKA",
      league: "WTA FRENCH OPEN",
      isLive: true,
      date: "21 MAY",
      time: "06:00 PM",
      icons: { bm: true, g: false, tv: true },
      odds: {
        back1: "1.42", back1Vol: "5120.00", lay1: "1.44", lay1Vol: "3100.00",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "2.85", back2Vol: "650.00", lay2: "2.92", lay2Vol: "420.00"
      }
    },
    {
      teams: "NOVAK DJOKOVIC V ALEXANDER ZVEREV",
      league: "ATP ROME MASTER",
      isLive: false,
      date: "22 MAY",
      time: "08:15 PM",
      icons: { bm: false, g: true, tv: false },
      odds: {
        back1: "1.65", back1Vol: "120.50", lay1: "1.68", lay1Vol: "95.00",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "2.25", back2Vol: "310.00", lay2: "2.30", lay2Vol: "150.00"
      }
    }
  ];

  return (
    <div className="w-full bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300 mt-4">
      
      {/* Top Header Sound Bar */}
      <div className="bg-[#4a0612] p-1.5 flex items-center gap-2">
        <div className="bg-[#1e70b8] text-white p-1 rounded cursor-pointer hover:bg-blue-600 transition-colors">
          <Volume2 size={16} />
        </div>
      </div>

      {/* Tennis Title Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">🎾</span> TENNIS
        </div>
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Filters & Labels row */}
      <div className="bg-white px-3 py-2 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2">
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Live</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Virtual</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Premium</button>
        </div>

        <div className="hidden md:flex w-[480px] justify-between text-center text-xs font-bold text-gray-700 pr-2 select-none">
          <div className="w-[154px]">1</div>
          <div className="w-[154px]">X</div>
          <div className="w-[154px]">2</div>
        </div>
      </div>

      {/* Matches List */}
      <div className="divide-y divide-gray-200 bg-white">
        {matches.map((match, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
            
            {/* Match info details */}
            <div className="p-3 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-w-0">
              <div>
                <h3 className="text-[13px] font-bold text-gray-900 leading-snug tracking-tight truncate cursor-pointer hover:text-blue-900">
                  {match.teams}
                </h3>
                <span className="text-[10px] text-gray-400 uppercase font-semibold">({match.league})</span>
              </div>

              {/* Timing and badge icons */}
              <div className="flex items-center gap-4 min-w-max text-right">
                {match.isLive && (
                  <span className="text-emerald-500 font-extrabold text-[12px] border-b-2 border-emerald-500 pb-0.5 tracking-wider px-1">
                    LIVE
                  </span>
                )}
                
                <div className="text-center">
                  <div className="text-[10px] text-red-500 font-bold whitespace-nowrap">{match.date}</div>
                  <div className="text-[10px] text-amber-600 font-semibold whitespace-nowrap">{match.time}</div>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 select-none">
                  {match.icons.tv && <Tv size={14} className="text-gray-700" />}
                  {match.icons.bm && <span className="bg-red-600 text-white rounded-full text-[9px] font-black w-4 h-4 flex items-center justify-center scale-95">BM</span>}
                  {match.icons.g && <span className="bg-red-600 text-white rounded-full text-[10px] font-black w-4 h-4 flex items-center justify-center scale-95">G</span>}
                  <Pin size={13} className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors ml-1 rotate-45" />
                </div>
              </div>
            </div>

            {/* Odds Cells Matrix */}
            <div className="flex w-full md:w-[480px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
              {/* Player 1 Odds */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.back1}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.back1Vol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.lay1}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.lay1Vol}</span>
                </div>
              </div>

              {/* Draw Odds (X) */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.backX}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.backXVol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.layX}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.layXVol}</span>
                </div>
              </div>

              {/* Player 2 Odds */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.back2}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.back2Vol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.lay2}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.lay2Vol}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}