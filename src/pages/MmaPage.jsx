import React from 'react';
import { Pin, Tv, Volume2 } from 'lucide-react';

export default function MmaPage() {
  const fights = [
    {
      event: "ISLAM MAKHACHEV V CHARLES OLIVEIRA",
      promotion: "UFC 294",
      isLive: false,
      weight: "LIGHTWEIGHT",
      round: "MAIN EVENT",
      date: "21 OCT",
      time: "11:00 PM",
      icons: { tv: true, star: true, ppv: true },
      odds: {
        back1: "1.62", back1Vol: "45,678", lay1: "1.63", lay1Vol: "32,109",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "2.40", back2Vol: "34,567", lay2: "2.42", lay2Vol: "23,456"
      }
    },
    {
      event: "ALEXANDER VOLKANOVSKI V YAIR RODRIGUEZ",
      promotion: "UFC 290",
      isLive: false,
      weight: "FEATHERWEIGHT",
      round: "CO-MAIN",
      date: "08 JUL",
      time: "10:30 PM",
      icons: { tv: true, star: true, ppv: false },
      odds: {
        back1: "1.45", back1Vol: "67,890", lay1: "1.46", lay1Vol: "54,321",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "2.80", back2Vol: "23,456", lay2: "2.82", lay2Vol: "15,678"
      }
    },
    {
      event: "SEAN STRICKLAND V DRIKUS DU PLESSIS",
      promotion: "UFC 297",
      isLive: true,
      weight: "MIDDLEWEIGHT",
      round: "MAIN EVENT",
      date: "20 JAN",
      time: "11:15 PM",
      icons: { tv: true, star: false, ppv: true },
      odds: {
        back1: "2.10", back1Vol: "34,567", lay1: "2.12", lay1Vol: "23,456",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "1.75", back2Vol: "56,789", lay2: "1.76", lay2Vol: "43,210"
      }
    },
    {
      event: "JON JONES V STIPE MIOCIC",
      promotion: "UFC 295",
      isLive: false,
      weight: "HEAVYWEIGHT",
      round: "MAIN EVENT",
      date: "11 NOV",
      time: "11:00 PM",
      icons: { tv: true, star: true, ppv: true },
      odds: {
        back1: "1.33", back1Vol: "89,012", lay1: "1.34", lay1Vol: "76,543",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "3.50", back2Vol: "12,345", lay2: "3.52", lay2Vol: "8,765"
      }
    },
    {
      event: "ALEXANDRE PANTOJA V BRANDON ROYVAL",
      promotion: "UFC 296",
      isLive: false,
      weight: "FLYWEIGHT",
      round: "CO-MAIN",
      date: "16 DEC",
      time: "10:00 PM",
      icons: { tv: true, star: false, ppv: true },
      odds: {
        back1: "1.85", back1Vol: "23,456", lay1: "1.86", lay1Vol: "15,678",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "2.00", back2Vol: "21,234", lay2: "2.01", lay2Vol: "14,321"
      }
    },
    {
      event: "LEON EDWARDS V BELAL MUHAMMAD",
      promotion: "UFC 304",
      isLive: false,
      weight: "WELTERWEIGHT",
      round: "MAIN EVENT",
      date: "27 JUL",
      time: "11:00 PM",
      icons: { tv: true, star: false, ppv: false },
      odds: {
        back1: "1.72", back1Vol: "43,210", lay1: "1.73", lay1Vol: "32,109",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "2.15", back2Vol: "29,876", lay2: "2.16", lay2Vol: "21,098"
      }
    },
    {
      event: "JUSTIN GAETHJE V MAX HOLLOWAY",
      promotion: "UFC 300",
      isLive: true,
      weight: "BMF TITLE",
      round: "FEATURE",
      date: "13 APR",
      time: "09:30 PM",
      icons: { tv: true, star: true, ppv: true },
      odds: {
        back1: "2.20", back1Vol: "38,901", lay1: "2.22", lay1Vol: "27,890",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "1.70", back2Vol: "52,345", lay2: "1.71", lay2Vol: "41,234"
      }
    },
    {
      event: "ZHANG WEILI V YAN XIAONAN",
      promotion: "UFC 300",
      isLive: true,
      weight: "STRAWWEIGHT",
      round: "PRELIM",
      date: "13 APR",
      time: "08:00 PM",
      icons: { tv: true, star: false, ppv: true },
      odds: {
        back1: "1.55", back1Vol: "32,109", lay1: "1.56", lay1Vol: "24,567",
        backX: "-", backXVol: "-", layX: "-", layXVol: "-",
        back2: "2.60", back2Vol: "18,234", lay2: "2.62", lay2Vol: "12,345"
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

      {/* MMA Title Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">🥊</span> MMA
        </div>
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Filters & Labels row */}
      <div className="bg-white px-3 py-2 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ UFC</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ PFL</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ ONE</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Bellator</button>
        </div>

        <div className="hidden md:flex w-[480px] justify-between text-center text-xs font-bold text-gray-700 pr-2 select-none">
          <div className="w-[230px]">Fighter A</div>
          <div className="w-[230px]">Fighter B</div>
        </div>
      </div>

      {/* Fights List */}
      <div className="divide-y divide-gray-200 bg-white">
        {fights.map((fight, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
            
            {/* Fight details */}
            <div className="p-3 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-w-0">
              <div>
                <h3 className="text-[13px] font-bold text-gray-900 leading-snug tracking-tight truncate cursor-pointer hover:text-blue-900">
                  {fight.event}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">({fight.promotion})</span>
                  <span className="text-[9px] bg-gray-200 text-gray-700 rounded-full px-1.5 py-0.5 font-semibold">{fight.weight}</span>
                  <span className="text-[9px] bg-[#a60a27]/10 text-[#a60a27] rounded-full px-1.5 py-0.5 font-semibold">{fight.round}</span>
                </div>
              </div>

              {/* Timing and badge icons */}
              <div className="flex items-center gap-4 min-w-max text-right">
                {fight.isLive && (
                  <span className="text-emerald-500 font-extrabold text-[12px] border-b-2 border-emerald-500 pb-0.5 tracking-wider px-1">
                    LIVE
                  </span>
                )}
                
                <div className="text-center">
                  <div className="text-[10px] text-red-500 font-bold whitespace-nowrap">{fight.date}</div>
                  <div className="text-[10px] text-amber-600 font-semibold whitespace-nowrap">{fight.time}</div>
                </div>

                {/* Specific Badges (TV, Star, PPV, Pin) */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 select-none">
                  {fight.icons.tv && <Tv size={14} className="text-gray-700" />}
                  {fight.icons.star && <span className="text-yellow-500 text-[11px] font-black">⭐</span>}
                  {fight.icons.ppv && <span className="bg-purple-600 text-white rounded text-[8px] font-black px-1 py-0.5">PPV</span>}
                  <Pin size={13} className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors ml-1 rotate-45" />
                </div>
              </div>
            </div>

            {/* Odds Cell Layout Matrix - Moneyline for MMA (no draw) */}
            <div className="flex w-full md:w-[480px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
              {/* Fighter A / Red Corner */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{fight.odds.back1}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{fight.odds.back1Vol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{fight.odds.lay1}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{fight.odds.lay1Vol}</span>
                </div>
              </div>

              {/* Fighter B / Blue Corner */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{fight.odds.back2}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{fight.odds.back2Vol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{fight.odds.lay2}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{fight.odds.lay2Vol}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Method of Victory Section */}
      <div className="bg-gray-50 border-t border-gray-200 p-3">
        <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Method of Victory Props Available</div>
        <div className="flex flex-wrap gap-2 text-[10px] text-gray-600">
          <span className="bg-white border border-gray-200 rounded px-2 py-1">KO/TKO</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">Submission</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">Decision</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">Round Props</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">Fight to go Distance</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">Fight Starts Round 3</span>
        </div>
      </div>

    </div>
  );
}