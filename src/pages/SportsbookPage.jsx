import React from 'react';
import { Pin, Tv, Volume2 } from 'lucide-react';

export default function SportsbookPage() {
  const sports = [
    {
      event: "INDIA V AUSTRALIA",
      league: "ICC CRICKET WORLD CUP",
      isLive: true,
      date: "20 MAY",
      time: "10:00 AM",
      sportIcon: "🏏",
      icons: { tv: true, star: false, trending: true },
      odds: {
        back1: "1.85", back1Vol: "12,345", lay1: "1.86", lay1Vol: "8,234",
        backX: "4.50", backXVol: "3,456", layX: "4.60", layXVol: "2,123",
        back2: "2.10", back2Vol: "9,876", lay2: "2.12", lay2Vol: "7,654"
      }
    },
    {
      event: "MANCHESTER UNITED V LIVERPOOL",
      league: "PREMIER LEAGUE",
      isLive: true,
      date: "20 MAY",
      time: "07:30 PM",
      sportIcon: "⚽",
      icons: { tv: true, star: true, trending: false },
      odds: {
        back1: "2.50", back1Vol: "23,456", lay1: "2.52", lay1Vol: "15,678",
        backX: "3.40", backXVol: "11,234", layX: "3.45", layXVol: "6,543",
        back2: "2.80", back2Vol: "18,234", lay2: "2.82", lay2Vol: "12,345"
      }
    },
    {
      event: "NOVAK DJOKOVIC V CARLOS ALCARAZ",
      league: "WIMBLEDON FINAL",
      isLive: true,
      date: "21 MAY",
      time: "02:00 PM",
      sportIcon: "🎾",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "1.95", back1Vol: "8,765", lay1: "1.96", lay1Vol: "5,432",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "1.95", back2Vol: "7,654", lay2: "1.96", lay2Vol: "4,321"
      }
    },
    {
      event: "BOSTON CELTICS V LA LAKERS",
      league: "NBA FINALS",
      isLive: false,
      date: "22 MAY",
      time: "08:00 PM",
      sportIcon: "🏀",
      icons: { tv: true, star: false, trending: true },
      odds: {
        back1: "1.75", back1Vol: "45,678", lay1: "1.76", lay1Vol: "32,109",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "2.15", back2Vol: "34,567", lay2: "2.16", lay2Vol: "23,456"
      }
    },
    {
      event: "FLORIDA PANTHERS V EDMONTON OILERS",
      league: "NHL STANLEY CUP",
      isLive: false,
      date: "22 MAY",
      time: "07:00 PM",
      sportIcon: "🏒",
      icons: { tv: false, star: false, trending: false },
      odds: {
        back1: "1.95", back1Vol: "5,678", lay1: "1.96", lay1Vol: "3,456",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "1.95", back2Vol: "4,567", lay2: "1.96", lay2Vol: "2,345"
      }
    },
    {
      event: "REAL MADRID V BARCELONA",
      league: "LA LIGA",
      isLive: false,
      date: "23 MAY",
      time: "09:00 PM",
      sportIcon: "⚽",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "2.20", back1Vol: "34,567", lay1: "2.22", lay1Vol: "21,098",
        backX: "3.60", backXVol: "12,345", layX: "3.65", layXVol: "7,654",
        back2: "3.20", back2Vol: "19,876", lay2: "3.22", lay2Vol: "11,234"
      }
    },
    {
      event: "VERSTAPPEN V HAMILTON",
      league: "F1 MONACO GP",
      isLive: false,
      date: "25 MAY",
      time: "02:00 PM",
      sportIcon: "🏎️",
      icons: { tv: true, star: false, trending: true },
      odds: {
        back1: "1.60", back1Vol: "56,789", lay1: "1.61", lay1Vol: "43,210",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "2.50", back2Vol: "32,109", lay2: "2.52", lay2Vol: "21,098"
      }
    },
    {
      event: "FLYING SCOTSMAN V THUNDERDALE",
      league: "ROYAL ASCOT R4",
      isLive: true,
      date: "20 MAY",
      time: "03:30 PM",
      sportIcon: "🏇",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "3.20", back1Vol: "45,678", lay1: "3.25", lay1Vol: "32,109",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "4.50", back2Vol: "23,456", lay2: "4.55", lay2Vol: "15,678"
      }
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300 mt-4">
      
      {/* Top Header Sound Bar */}
      <div className="bg-[#4a0612] p-1.5 flex items-center gap-2">
        <div className="bg-[#1e70b8] text-white p-1 rounded cursor-pointer hover:bg-blue-600 transition-colors">
          <Volume2 size={16} />
        </div>
      </div>

      {/* Sportsbook Title Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">🏆</span> SPORTS BOOK
        </div>
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Filters & Labels row */}
      <div className="bg-white px-3 py-2 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Cricket</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Football</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Tennis</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Basketball</button>
        </div>

        <div className="hidden md:flex w-[480px] justify-between text-center text-xs font-bold text-gray-700 pr-2 select-none">
          <div className="w-[154px]">1</div>
          <div className="w-[154px]">X</div>
          <div className="w-[154px]">2</div>
        </div>
      </div>

      {/* Sports List */}
      <div className="divide-y divide-gray-200 bg-white">
        {sports.map((sport, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
            
            {/* Sport event details */}
            <div className="p-3 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xl">{sport.sportIcon}</span>
                <div>
                  <h3 className="text-[13px] font-bold text-gray-900 leading-snug tracking-tight truncate cursor-pointer hover:text-blue-900">
                    {sport.event}
                  </h3>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">({sport.league})</span>
                </div>
              </div>

              {/* Timing and badge icons */}
              <div className="flex items-center gap-4 min-w-max text-right">
                {sport.isLive && (
                  <span className="text-emerald-500 font-extrabold text-[12px] border-b-2 border-emerald-500 pb-0.5 tracking-wider px-1">
                    LIVE
                  </span>
                )}
                
                <div className="text-center">
                  <div className="text-[10px] text-red-500 font-bold whitespace-nowrap">{sport.date}</div>
                  <div className="text-[10px] text-amber-600 font-semibold whitespace-nowrap">{sport.time}</div>
                </div>

                {/* Specific Badges (TV, Star, Trending, Pin) */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 select-none">
                  {sport.icons.tv && <Tv size={14} className="text-gray-700" />}
                  {sport.icons.star && <span className="text-yellow-500 text-[11px] font-black">⭐</span>}
                  {sport.icons.trending && <span className="text-green-500 text-[9px] font-black px-1 py-0.5">▲</span>}
                  <Pin size={13} className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors ml-1 rotate-45" />
                </div>
              </div>
            </div>

            {/* Odds Cell Layout Matrix */}
            <div className="flex w-full md:w-[480px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
              {/* Box 1 - Home/Team 1 */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{sport.odds.back1}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{sport.odds.back1Vol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{sport.odds.lay1}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{sport.odds.lay1Vol}</span>
                </div>
              </div>

              {/* Box X - Draw (for sports that have draw) */}
              <div className={`flex flex-1 divide-x divide-white ${sport.odds.backX === "-" ? "opacity-50" : ""}`}>
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{sport.odds.backX}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{sport.odds.backXVol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{sport.odds.layX}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{sport.odds.layXVol}</span>
                </div>
              </div>

              {/* Box 2 - Away/Team 2 */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{sport.odds.back2}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{sport.odds.back2Vol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{sport.odds.lay2}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{sport.odds.lay2Vol}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}