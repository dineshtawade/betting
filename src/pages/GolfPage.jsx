import React from 'react';
import { Pin, Tv, Volume2 } from 'lucide-react';

export default function GolfPage() {
  const tournaments = [
    {
      event: "THE MASTERS",
      course: "AUGUSTA NATIONAL",
      isLive: true,
      round: "FINAL ROUND",
      date: "14 APR",
      time: "02:00 PM",
      icons: { tv: true, star: true, major: true },
      odds: {
        back1: "4.50", back1Vol: "123,456", lay1: "4.55", lay1Vol: "98,765",
        back2: "8.00", back2Vol: "67,890", lay2: "8.10", lay2Vol: "54,321",
        back3: "12.00", back3Vol: "45,678", lay3: "12.50", lay3Vol: "32,109"
      }
    },
    {
      event: "PGA CHAMPIONSHIP",
      course: "VALHALLA",
      isLive: false,
      round: "R2/4",
      date: "19 MAY",
      time: "08:00 AM",
      icons: { tv: true, star: true, major: true },
      odds: {
        back1: "5.00", back1Vol: "98,765", lay1: "5.05", lay1Vol: "76,543",
        back2: "9.00", back2Vol: "54,321", lay2: "9.10", lay2Vol: "43,210",
        back3: "14.00", back3Vol: "34,567", lay3: "14.50", lay3Vol: "23,456"
      }
    },
    {
      event: "US OPEN",
      course: "PINEHURST NO.2",
      isLive: false,
      round: "R1/4",
      date: "16 JUN",
      time: "10:00 AM",
      icons: { tv: true, star: true, major: true },
      odds: {
        back1: "5.50", back1Vol: "87,654", lay1: "5.55", lay1Vol: "65,432",
        back2: "10.00", back2Vol: "43,210", lay2: "10.10", lay2Vol: "32,109",
        back3: "15.00", back3Vol: "28,901", lay3: "15.50", lay3Vol: "19,876"
      }
    },
    {
      event: "THE OPEN CHAMPIONSHIP",
      course: "ROYAL TROON",
      isLive: false,
      round: "R1/4",
      date: "21 JUL",
      time: "06:30 AM",
      icons: { tv: true, star: true, major: true },
      odds: {
        back1: "6.00", back1Vol: "76,543", lay1: "6.10", lay1Vol: "54,321",
        back2: "11.00", back2Vol: "38,765", lay2: "11.10", lay2Vol: "27,654",
        back3: "16.00", back3Vol: "23,456", lay3: "16.50", lay3Vol: "16,543"
      }
    },
    {
      event: "THE PLAYERS CHAMPIONSHIP",
      course: "TPC SAWGRASS",
      isLive: true,
      round: "R3/4",
      date: "16 MAR",
      time: "01:00 PM",
      icons: { tv: true, star: false, major: false },
      odds: {
        back1: "7.00", back1Vol: "65,432", lay1: "7.10", lay1Vol: "43,210",
        back2: "12.00", back2Vol: "32,109", lay2: "12.10", lay2Vol: "21,098",
        back3: "18.00", back3Vol: "19,876", lay3: "18.50", lay3Vol: "12,345"
      }
    },
    {
      event: "RYDER CUP",
      course: "BETHAPAGE BLACK",
      isLive: false,
      round: "FINAL DAY",
      date: "29 SEP",
      time: "08:00 AM",
      icons: { tv: true, star: true, major: false },
      odds: {
        back1: "1.80", back1Vol: "234,567", lay1: "1.81", lay1Vol: "198,765",
        back2: "2.10", back2Vol: "187,654", lay2: "2.11", lay2Vol: "156,543",
        back3: "-", back3Vol: "-", lay3: "-", lay3Vol: "-"
      }
    },
    {
      event: "RBC HERITAGE",
      course: "HARBOUR TOWN",
      isLive: false,
      round: "FINAL",
      date: "22 APR",
      time: "03:00 PM",
      icons: { tv: true, star: false, major: false },
      odds: {
        back1: "8.50", back1Vol: "43,210", lay1: "8.60", lay1Vol: "32,109",
        back2: "15.00", back2Vol: "21,098", lay2: "15.50", lay2Vol: "14,567",
        back3: "22.00", back3Vol: "12,345", lay3: "23.00", lay3Vol: "8,765"
      }
    },
    {
      event: "MEMORIAL TOURNAMENT",
      course: "MUIRFIELD VILLAGE",
      isLive: false,
      round: "R2/4",
      date: "09 JUN",
      time: "09:30 AM",
      icons: { tv: true, star: true, major: false },
      odds: {
        back1: "9.00", back1Vol: "38,765", lay1: "9.10", lay1Vol: "27,654",
        back2: "16.00", back2Vol: "18,234", lay2: "16.50", lay2Vol: "12,345",
        back3: "25.00", back3Vol: "9,876", lay3: "26.00", lay3Vol: "6,543"
      }
    }
  ];

  // Top players list for player props section
  const topPlayers = [
    { name: "Scottie Scheffler", odds: "5.00", vol: "234,567" },
    { name: "Rory McIlroy", odds: "7.00", vol: "187,654" },
    { name: "Jon Rahm", odds: "8.00", vol: "165,432" },
    { name: "Brooks Koepka", odds: "12.00", vol: "98,765" },
    { name: "Viktor Hovland", odds: "14.00", vol: "87,654" },
    { name: "Xander Schauffele", odds: "16.00", vol: "76,543" },
    { name: "Patrick Cantlay", odds: "18.00", vol: "65,432" },
    { name: "Collin Morikawa", odds: "20.00", vol: "54,321" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300 mt-4">
      
      {/* Top Header Sound Bar */}
      <div className="bg-[#4a0612] p-1.5 flex items-center gap-2">
        <div className="bg-[#1e70b8] text-white p-1 rounded cursor-pointer hover:bg-blue-600 transition-colors">
          <Volume2 size={16} />
        </div>
      </div>

      {/* Golf Title Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">⛳</span> GOLF
        </div>
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Filters & Labels row */}
      <div className="bg-white px-3 py-2 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Majors</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ PGA Tour</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ DP World</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ LIV</button>
        </div>

        <div className="hidden md:flex w-[480px] justify-between text-center text-xs font-bold text-gray-700 pr-2 select-none">
          <div className="w-[154px]">Winner</div>
          <div className="w-[154px]">Top 5</div>
          <div className="w-[154px]">Top 10</div>
        </div>
      </div>

      {/* Tournaments List */}
      <div className="divide-y divide-gray-200 bg-white">
        {tournaments.map((tournament, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
            
            {/* Tournament details */}
            <div className="p-3 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-w-0">
              <div>
                <h3 className="text-[13px] font-bold text-gray-900 leading-snug tracking-tight truncate cursor-pointer hover:text-blue-900">
                  {tournament.event}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">({tournament.course})</span>
                  <span className="text-[9px] bg-green-600/10 text-green-700 rounded-full px-1.5 py-0.5 font-semibold">{tournament.round}</span>
                </div>
              </div>

              {/* Timing and badge icons */}
              <div className="flex items-center gap-4 min-w-max text-right">
                {tournament.isLive && (
                  <span className="text-emerald-500 font-extrabold text-[12px] border-b-2 border-emerald-500 pb-0.5 tracking-wider px-1">
                    LIVE
                  </span>
                )}
                
                <div className="text-center">
                  <div className="text-[10px] text-red-500 font-bold whitespace-nowrap">{tournament.date}</div>
                  <div className="text-[10px] text-amber-600 font-semibold whitespace-nowrap">{tournament.time}</div>
                </div>

                {/* Specific Badges (TV, Star, Major, Pin) */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 select-none">
                  {tournament.icons.tv && <Tv size={14} className="text-gray-700" />}
                  {tournament.icons.star && <span className="text-yellow-500 text-[11px] font-black">⭐</span>}
                  {tournament.icons.major && <span className="bg-[#c9a03d] text-white rounded text-[8px] font-black px-1 py-0.5">MAJOR</span>}
                  <Pin size={13} className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors ml-1 rotate-45" />
                </div>
              </div>
            </div>

            {/* Odds Cell Layout - Winner / Top 5 / Top 10 */}
            <div className="flex w-full md:w-[480px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
              {/* Winner Market */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{tournament.odds.back1}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{tournament.odds.back1Vol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{tournament.odds.lay1}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{tournament.odds.lay1Vol}</span>
                </div>
              </div>

              {/* Top 5 Market */}
              <div className={`flex flex-1 divide-x divide-white ${tournament.odds.back2 === "-" ? "opacity-50" : ""}`}>
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{tournament.odds.back2}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{tournament.odds.back2Vol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{tournament.odds.lay2}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{tournament.odds.lay2Vol}</span>
                </div>
              </div>

              {/* Top 10 Market */}
              <div className={`flex flex-1 divide-x divide-white ${tournament.odds.back3 === "-" ? "opacity-50" : ""}`}>
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{tournament.odds.back3}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{tournament.odds.back3Vol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{tournament.odds.lay3}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{tournament.odds.lay3Vol}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Player Props Section - Top Players for Current Tournament */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="p-3">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>🏆 Top Outright Markets - The Masters</span>
            <span className="text-[9px] text-emerald-500 font-normal">LIVE</span>
          </div>
        </div>
        
        {/* Player props header */}
        <div className="bg-white px-3 py-1.5 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200">
          <div className="text-[11px] font-bold text-gray-700">Selected Players</div>
          <div className="hidden md:flex w-[320px] justify-between text-center text-[10px] font-bold text-gray-500 pr-2">
            <div className="w-[154px]">To Win</div>
            <div className="w-[154px]">Top 5</div>
          </div>
        </div>

        {/* Players list */}
        <div className="divide-y divide-gray-100 bg-white">
          {topPlayers.map((player, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="p-2 flex-1">
                <h4 className="text-[12px] font-semibold text-gray-800">{player.name}</h4>
              </div>
              <div className="flex w-full md:w-[320px] h-[40px] border-t md:border-t-0 border-gray-100 divide-x divide-white">
                <div className="flex flex-1 divide-x divide-white">
                  <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <span className="text-[12px] font-black text-gray-900">{player.odds}</span>
                  </div>
                  <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <span className="text-[12px] font-black text-gray-900">Lay</span>
                  </div>
                </div>
                <div className="flex flex-1 divide-x divide-white">
                  <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <span className="text-[12px] font-black text-gray-900">{parseFloat(player.odds) * 1.5}</span>
                  </div>
                  <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <span className="text-[12px] font-black text-gray-900">Lay</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional golf props */}
        <div className="bg-gray-50 border-t border-gray-200 p-3">
          <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-2">Available Props</div>
          <div className="flex flex-wrap gap-2 text-[9px] text-gray-600">
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🏌️ First Round Leader</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🎯 Made Cut</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">📊 Top 20 Finish</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">⚡ Low Round of Day</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🇺🇸 Nationality Winner</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🏆 Group Betting</span>
          </div>
        </div>
      </div>

    </div>
  );
}