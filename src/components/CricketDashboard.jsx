import React from 'react';
import { Pin, Tv, Volume2 } from 'lucide-react';

export default function CricketDashboard() {
  // Mock data representing the exact items in your image
  const matches = [
    {
      teams: "KOLKATA KNIGHT RIDERS V MUMBAI INDIANS",
      league: "INDIAN PREMIER LEAGUE",
      isLive: true,
      date: "20 MAY",
      time: "07:30 PM",
      icons: { f: true, tv: true, bm: true, t: true },
      odds: {
        back1: "2.2", back1Volume: "13382.09", lay1: "2.22", lay1Volume: "915.25",
        backX: "-", backXVolume: "", layX: "-", layXVolume: "",
        back2: "1.82", back2Volume: "993.26", lay2: "1.83", lay2Volume: "14633.83"
      }
    },
    {
      teams: "INDIAN PREMIER LEAGUE",
      league: "INDIAN PREMIER LEAGUE",
      isLive: true,
      date: "25 MAR",
      time: "07:30 PM",
      icons: { f: true, tv: false, bm: true, t: false },
      odds: {
        back1: "-", back1Volume: "", lay1: "-", lay1Volume: "",
        backX: "-", backXVolume: "", layX: "-", layXVolume: "",
        back2: "-", back2Volume: "", lay2: "-", lay2Volume: ""
      }
    },
    {
      teams: "BANGLADESH V PAKISTAN",
      league: "TEST MATCHES",
      isLive: true,
      date: "16 MAY",
      time: "09:30 AM",
      icons: { f: true, tv: true, bm: true, t: false },
      odds: {
        back1: "1.07", back1Volume: "6568.44", lay1: "1.08", lay1Volume: "6080.93",
        backX: "110", backXVolume: "1.3", layX: "166", layXVolume: "13.02",
        back2: "15.5", back2Volume: "11.73", lay2: "17", lay2Volume: "153.74"
      }
    },
    {
      teams: "🎮 SOUTH AFRICA T10 VS PAKISTAN T10",
      league: "(OTHERS)",
      isLive: true,
      date: "20 MAY",
      time: "08:40 AM",
      icons: { f: false, tv: true, bm: true, t: false },
      odds: {
        back1: "-", back1Volume: "", lay1: "-", lay1Volume: "",
        backX: "-", backXVolume: "", layX: "-", layXVolume: "",
        back2: "-", back2Volume: "", lay2: "-", lay2Volume: ""
      }
    },
    {
      teams: "🏏 CHENNAI SUPER KINGS SO V DELHI CAPITALS SO",
      league: "(OTHERS)",
      isLive: true,
      date: "20 MAY",
      time: "09:00 AM",
      icons: { f: false, tv: true, bm: true, t: false },
      odds: {
        back1: "-", back1Volume: "", lay1: "-", lay1Volume: "",
        backX: "-", backXVolume: "", layX: "-", layXVolume: "",
        back2: "-", back2Volume: "", lay2: "-", lay2Volume: ""
      }
    },
    {
      teams: "🎮 ENGLAND T10 VS NEW ZEALAND T10",
      league: "(OTHERS)",
      isLive: true,
      date: "20 MAY",
      time: "09:10 AM",
      icons: { f: true, tv: true, bm: false, t: false },
      odds: {
        back1: "-", back1Volume: "", lay1: "-", lay1Volume: "",
        backX: "-", backXVolume: "", layX: "-", layXVolume: "",
        back2: "-", back2Volume: "", lay2: "-", lay2Volume: ""
      }
    },
    {
      teams: "🥊 KEVIN OWENS VS JOSH BRIGGS",
      league: "(OTHERS)",
      isLive: true,
      date: "20 MAY",
      time: "09:10 AM",
      icons: { f: false, tv: true, bm: true, t: false },
      odds: {
        back1: "-", back1Volume: "", lay1: "-", lay1Volume: "",
        backX: "-", backXVolume: "", layX: "-", layXVolume: "",
        back2: "-", back2Volume: "", lay2: "-", lay2Volume: ""
      }
    },
    {
      teams: "SCOTLAND V USA",
      league: "(OTHERS)",
      isLive: true,
      date: "20 MAY",
      time: "09:15 AM",
      icons: { f: false, tv: false, bm: false, t: false, p: true },
      odds: {
        back1: "2", back1Volume: "", lay1: "-", lay1Volume: "",
        backX: "-", backXVolume: "", layX: "-", layXVolume: "",
        back2: "1.72", back2Volume: "", lay2: "-", lay2Volume: ""
      }
    }
  ];

  return (
    <div className="w-full bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300">
      
      {/* Top Header Section (Sound bar & Cricket Title Banner) */}
      <div className="bg-[#4a0612] p-1.5 flex items-center gap-2">
        <div className="bg-[#1e70b8] text-white p-1 rounded cursor-pointer hover:bg-blue-600 transition-colors">
          <Volume2 size={16} />
        </div>
      </div>

      {/* Main Title Cutout Header Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">🥎</span> CRICKET
        </div>
        {/* Sleek slant cutout decoration */}
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform斜切 slant-banner origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Top Section Rows (Filters and 1-X-2 column labels) */}
      <div className="bg-white px-3 py-2 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 gap-3">
        {/* Custom Pill Tags */}
        <div className="flex items-center gap-2">
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">
            + Live
          </button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">
            + Virtual
          </button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">
            + Premium
          </button>
        </div>

        {/* 1 X 2 Columns Marker Alignment */}
        <div className="hidden md:flex w-[480px] justify-between text-center text-xs font-bold text-gray-700 pr-2 select-none">
          <div className="w-[154px]">1</div>
          <div className="w-[154px]">X</div>
          <div className="w-[154px]">2</div>
        </div>
      </div>

      {/* Matches Entries Container */}
      <div className="divide-y divide-gray-200 bg-white">
        {matches.map((match, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
            
            {/* Left Box: Meta Description info */}
            <div className="p-3 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-w-0">
              <div>
                <h3 className="text-[13px] font-bold text-gray-900 leading-snug tracking-tight truncate cursor-pointer hover:text-blue-900">
                  {match.teams}
                </h3>
                <span className="text-[10px] text-gray-400 uppercase font-semibold">
                  ({match.league})
                </span>
              </div>

              {/* Status flags & Schedule block */}
              <div className="flex items-center gap-4 min-w-max text-right">
                {match.isLive && (
                  <span className="text-emerald-500 font-extrabold text-[12px] border-b-2 border-emerald-500 pb-0.5 select-none tracking-wider px-1">
                    LIVE
                  </span>
                )}
                
                <div className="text-center font-sans">
                  <div className="text-[10px] text-red-500 font-bold whitespace-nowrap">{match.date}</div>
                  <div className="text-[10px] text-amber-600 font-semibold whitespace-nowrap">{match.time}</div>
                </div>

                {/* Meta Indicator Badges Row */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 select-none">
                  {match.icons.f && <span className="font-serif italic font-extrabold text-gray-700 text-sm">F</span>}
                  {match.icons.tv && <Tv size={14} className="text-gray-700" />}
                  {match.icons.bm && <span className="bg-red-600 text-white rounded-full text-[9px] font-black w-4 h-4 flex items-center justify-center scale-95">BM</span>}
                  {match.icons.t && <span className="bg-red-800 text-white rounded-full text-[9px] font-black w-4 h-4 flex items-center justify-center scale-95">T</span>}
                  {match.icons.p && <span className="bg-emerald-600 text-white rounded-full text-[9px] font-black w-4 h-4 flex items-center justify-center scale-95">P</span>}
                  
                  <Pin size={13} className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors ml-1 rotate-45" />
                </div>
              </div>
            </div>

            {/* Right Box: Odds Block matrix cells (1 - X - 2) */}
            <div className="flex w-full md:w-[480px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
              
              {/* Column 1 Block (Back / Lay) */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer text-center p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.back1}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.back1Volume}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer text-center p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.lay1}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.lay1Volume}</span>
                </div>
              </div>

              {/* Column X Block (Back / Lay) */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer text-center p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.backX}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.backXVolume}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer text-center p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.layX}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.layXVolume}</span>
                </div>
              </div>

              {/* Column 2 Block (Back / Lay) */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer text-center p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.back2}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.back2Volume}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer text-center p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">{match.odds.lay2}</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{match.odds.lay2Volume}</span>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}