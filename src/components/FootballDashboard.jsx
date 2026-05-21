import React from 'react';
import { Pin, Tv, Volume2 } from 'lucide-react';

export default function FootballDashboard() {
  const matches = [
    {
      teams: "UEFA CHAMPIONS LEAGUE",
      league: "OTHERS",
      isLive: true,
      date: "30 APR",
      time: "05:05 AM",
      icons: { bm: true, g: false, tv: false },
      odds: {
        back1: "-", back1Vol: "-", lay1: "-", lay1Vol: "-",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "-", back2Vol: "-", lay2: "-", lay2Vol: "-"
      }
    },
    {
      teams: "UEFA EUROPA LEAGUE",
      league: "OTHERS",
      isLive: true,
      date: "30 APR",
      time: "05:06 AM",
      icons: { bm: true, g: false, tv: false },
      odds: {
        back1: "-", back1Vol: "-", lay1: "-", lay1Vol: "-",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "-", back2Vol: "-", lay2: "-", lay2Vol: "-"
      }
    },
    {
      teams: "UEFA EUROPA CONFERENCE LEAGUE",
      league: "OTHERS",
      isLive: true,
      date: "30 APR",
      time: "05:07 AM",
      icons: { bm: true, g: false, tv: false },
      odds: {
        back1: "-", back1Vol: "-", lay1: "-", lay1Vol: "-",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "-", back2Vol: "-", lay2: "-", lay2Vol: "-"
      }
    },
    {
      teams: "PYRAMIDS V SMOUHA",
      league: "EGYPTIAN PREMIER",
      isLive: true,
      date: "20 MAY",
      time: "05:14 PM",
      icons: { bm: false, g: true, tv: true },
      odds: {
        back1: "1.53", back1Vol: "4.89", lay1: "1.59", lay1Vol: "24.82",
        backX: "3.35", backXVol: "8.28", layX: "3.75", layXVol: "3.55",
        back2: "9.4", back2Vol: "1.41", lay2: "14.5", lay2Vol: "2.74"
      }
    },
    {
      teams: "GAIS V HAMMARBY",
      league: "SWEDISH ALLSVENSKAN",
      isLive: true,
      date: "20 MAY",
      time: "05:14 PM",
      icons: { bm: false, g: true, tv: true },
      odds: {
        back1: "1.77", back1Vol: "163.34", lay1: "1.78", lay1Vol: "212.3",
        backX: "3.5", backXVol: "105.19", layX: "3.55", layXVol: "73.07",
        back2: "6.6", back2Vol: "36.8", lay2: "6.8", lay2Vol: "396.89"
      }
    },
    {
      teams: "ZAMALEK V CERAMICA CLEOPATRA",
      league: "EGYPTIAN PREMIER",
      isLive: true,
      date: "20 MAY",
      time: "05:14 PM",
      icons: { bm: false, g: true, tv: true },
      odds: {
        back1: "1.31", back1Vol: "719.24", lay1: "1.32", lay1Vol: "88.9",
        backX: "5.2", backXVol: "22.05", layX: "5.4", layXVol: "1.51",
        back2: "17.5", back2Vol: "2.95", lay2: "19", lay2Vol: "4"
      }
    },
    {
      teams: "AL-MASRY V AL AHLY CAIRO",
      league: "EGYPTIAN PREMIER",
      isLive: true,
      date: "20 MAY",
      time: "05:14 PM",
      icons: { bm: false, g: true, tv: true },
      odds: {
        back1: "9.6", back1Vol: "3.57", lay1: "10", lay1Vol: "5.48",
        backX: "3.95", backXVol: "2.59", layX: "4.1", layXVol: "11.37",
        back2: "1.52", back2Vol: "28.37", lay2: "1.56", lay2Vol: "3.96"
      }
    },
    {
      teams: "RANHEIM IL V HODD",
      league: "NORWEGIAN 1ST DIVISION",
      isLive: true,
      date: "20 MAY",
      time: "05:15 PM",
      icons: { bm: false, g: true, tv: true },
      odds: {
        back1: "4.1", back1Vol: "37.11", lay1: "4.4", lay1Vol: "128.81",
        backX: "3.5", backXVol: "223.72", layX: "3.65", layXVol: "41.25",
        back2: "2.04", back2Vol: "193.94", lay2: "2.12", lay2Vol: "380.47"
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

      {/* Football Title Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">⚽</span> FOOTBALL
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

                {/* Specific Badges (BM, Red G, TV, Pin) */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 select-none">
                  {match.icons.tv && <Tv size={14} className="text-gray-700" />}
                  {match.icons.bm && <span className="bg-red-600 text-white rounded-full text-[9px] font-black w-4 h-4 flex items-center justify-center scale-95">BM</span>}
                  {match.icons.g && <span className="bg-red-600 text-white rounded-full text-[10px] font-black w-4 h-4 flex items-center justify-center scale-95">G</span>}
                  <Pin size={13} className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors ml-1 rotate-45" />
                </div>
              </div>
            </div>

            {/* Odds Cell Layout Matrix */}
            <div className="flex w-full md:w-[480px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
              {/* Box 1 */}
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

              {/* Box X */}
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

              {/* Box 2 */}
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