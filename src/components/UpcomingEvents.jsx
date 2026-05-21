import React from 'react';
import { Pin, Tv } from 'lucide-react';

export default function UpcomingEvents() {
  // Exact upcoming matches data from your image asset
  const upcomingMatches = [
    {
      teams: "INDIAN PREMIER LEAGUE",
      league: "INDIAN PREMIER LEAGUE",
      date: "25 MAR",
      time: "07:30 PM",
      icons: { f: true, tv: false, bm: true }
    },
    {
      teams: "🥊 RANDY ORTON VS JEY USO",
      league: "(OTHERS)",
      date: "20 MAY",
      time: "10:40 PM",
      icons: { f: false, tv: true, bm: true }
    },
    {
      teams: "🏏 DESERT VIPERS SO V SHARJAH WARRIORS SO",
      league: "(OTHERS)",
      date: "20 MAY",
      time: "10:45 PM",
      icons: { f: false, tv: true, bm: true }
    },
    {
      teams: "🏏 PUNJAB KINGS SO V RAJASTHAN ROYALS SO",
      league: "(OTHERS)",
      date: "20 MAY",
      time: "11:15 PM",
      icons: { f: false, tv: false, bm: true }
    },
    {
      teams: "🎮 INDIA T10 VS WEST INDIES T10",
      league: "(OTHERS)",
      date: "20 MAY",
      time: "11:20 PM",
      icons: { f: false, tv: false, bm: true }
    },
    {
      teams: "🏏 NORTHERN SUPERCHARGERS SO V LONDON SPI...",
      league: "(OTHERS)",
      date: "20 MAY",
      time: "11:30 PM",
      icons: { f: false, tv: false, bm: true }
    },
    {
      teams: "PAARL ROYALS SRL V SUNRISERS EASTERN CAPE SRL",
      league: "(SIMULATED REALITY LEAGUE / GT20 LEAGUE SRL)",
      date: "20 MAY",
      time: "11:30 PM",
      icons: { f: false, tv: false, bm: false }
    }
  ];

  return (
    <div className="w-full bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300 mt-4">
      
      {/* --- Main Green Banner Header Section --- */}
      <div className="bg-[#008f1f] text-white font-bold text-sm tracking-wider uppercase px-4 py-2.5 flex items-center gap-2 select-none">
        <span className="text-base">🏆</span> UPCOMING EVENTS
      </div>

      {/* --- Crimson Cricket Sub-Banner --- */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10 select-none">
          <span className="text-base">🥎</span> CRICKET
        </div>
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* --- Filter Pill Tags and Column Mappings --- */}
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

      {/* --- List Entries --- */}
      <div className="divide-y divide-gray-200 bg-white">
        {upcomingMatches.map((match, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
            
            {/* Left Info Column */}
            <div className="p-3 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-w-0">
              <div className="min-w-0 flex-1">
                <h3 className="text-[13px] font-bold text-gray-900 leading-snug tracking-tight truncate cursor-pointer hover:text-blue-900">
                  {match.teams}
                </h3>
                <span className="text-[10px] text-gray-400 uppercase font-semibold block truncate">
                  {match.league}
                </span>
              </div>

              {/* Timestamp & Meta Icons */}
              <div className="flex items-center gap-4 min-w-max justify-end">
                <div className="text-center min-w-[65px]">
                  <div className="text-[10px] text-red-500 font-bold whitespace-nowrap">{match.date}</div>
                  <div className="text-[10px] text-amber-600 font-semibold whitespace-nowrap">{match.time}</div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-400 select-none w-16 justify-end">
                  {match.icons.f && <span className="font-serif italic font-extrabold text-gray-700 text-sm">F</span>}
                  {match.icons.tv && <Tv size={14} className="text-gray-700" />}
                  {match.icons.bm && <span className="bg-red-600 text-white rounded-full text-[9px] font-black w-4 h-4 flex items-center justify-center scale-95">BM</span>}
                  <Pin size={13} className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors ml-1 rotate-45" />
                </div>
              </div>
            </div>

            {/* Right Odds Grid - Consistently Empty Blocks (-) for Upcoming status */}
            <div className="flex w-full md:w-[480px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
              {/* Box 1 */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer text-gray-900 font-bold text-sm transition-colors">-</div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer text-gray-900 font-bold text-sm transition-colors">-</div>
              </div>
              {/* Box X */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer text-gray-900 font-bold text-sm transition-colors">-</div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer text-gray-900 font-bold text-sm transition-colors">-</div>
              </div>
              {/* Box 2 */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer text-gray-900 font-bold text-sm transition-colors">-</div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer text-gray-900 font-bold text-sm transition-colors">-</div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}