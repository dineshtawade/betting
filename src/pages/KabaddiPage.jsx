import React from 'react';
import { Pin, Tv, Volume2 } from 'lucide-react';

export default function KabaddiPage() {
  const matches = [
    {
      event: "PUNERI PALTAN V U MUMBA",
      league: "PRO KABADDI LEAGUE SEASON 10",
      isLive: true,
      half: "HALF 2",
      date: "20 MAY",
      time: "08:30 PM",
      score: "24 - 18",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "1.42", back1Vol: "156,789", lay1: "1.43", lay1Vol: "123,456",
        backX: "12.00", backXVol: "5,678", layX: "12.50", layXVol: "4,321",
        back2: "3.20", back2Vol: "87,654", lay2: "3.22", lay2Vol: "65,432"
      }
    },
    {
      event: "JAIPUR PINK PANTHERS V GUJARAT GIANTS",
      league: "PRO KABADDI LEAGUE SEASON 10",
      isLive: true,
      half: "HALF 1",
      date: "20 MAY",
      time: "09:00 PM",
      score: "12 - 10",
      icons: { tv: true, star: false, trending: true },
      odds: {
        back1: "1.65", back1Vol: "98,765", lay1: "1.66", lay1Vol: "76,543",
        backX: "10.00", backXVol: "7,890", layX: "10.50", layXVol: "6,543",
        back2: "2.40", back2Vol: "67,890", lay2: "2.42", lay2Vol: "54,321"
      }
    },
    {
      event: "BENGAL WARRIORS V PATNA PIRATES",
      league: "PRO KABADDI LEAGUE SEASON 10",
      isLive: false,
      half: "FULL TIME",
      date: "21 MAY",
      time: "07:30 PM",
      score: "32 - 28",
      icons: { tv: true, star: true, trending: false },
      odds: {
        back1: "1.85", back1Vol: "123,456", lay1: "1.86", lay1Vol: "98,765",
        backX: "9.00", backXVol: "12,345", layX: "9.50", layXVol: "9,876",
        back2: "2.10", back2Vol: "87,654", lay2: "2.12", lay2Vol: "65,432"
      }
    },
    {
      event: "DABANG DELHI V TAMIL THALAIVAS",
      league: "PRO KABADDI LEAGUE SEASON 10",
      isLive: false,
      half: "PRE-MATCH",
      date: "22 MAY",
      time: "08:00 PM",
      score: "-",
      icons: { tv: true, star: false, trending: false },
      odds: {
        back1: "1.95", back1Vol: "76,543", lay1: "1.96", lay1Vol: "54,321",
        backX: "11.00", backXVol: "6,789", layX: "11.50", layXVol: "5,432",
        back2: "2.00", back2Vol: "72,109", lay2: "2.01", lay2Vol: "51,098"
      }
    },
    {
      event: "HARYANA STEELERS V TELUGU TITANS",
      league: "PRO KABADDI LEAGUE SEASON 10",
      isLive: false,
      half: "PRE-MATCH",
      date: "23 MAY",
      time: "07:45 PM",
      score: "-",
      icons: { tv: true, star: false, trending: false },
      odds: {
        back1: "1.88", back1Vol: "65,432", lay1: "1.89", lay1Vol: "43,210",
        backX: "10.50", backXVol: "8,901", layX: "11.00", layXVol: "7,654",
        back2: "2.15", back2Vol: "54,321", lay2: "2.16", lay2Vol: "32,109"
      }
    },
    {
      event: "BENGALURU BULLS V UP YODDHAS",
      league: "PRO KABADDI LEAGUE SEASON 10",
      isLive: true,
      half: "HALF 2",
      date: "20 MAY",
      time: "10:00 PM",
      score: "18 - 22",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "2.50", back1Vol: "45,678", lay1: "2.52", lay1Vol: "34,567",
        backX: "8.50", backXVol: "14,567", layX: "9.00", layXVol: "11,234",
        back2: "1.60", back2Vol: "98,765", lay2: "1.61", lay2Vol: "76,543"
      }
    },
    {
      event: "WHITE WOLVES V TORNADOES",
      league: "KABADDI WORLD CUP",
      isLive: false,
      half: "PRE-MATCH",
      date: "25 MAY",
      time: "06:00 PM",
      score: "-",
      icons: { tv: true, star: true, trending: false },
      odds: {
        back1: "1.55", back1Vol: "34,567", lay1: "1.56", lay1Vol: "23,456",
        backX: "7.50", backXVol: "18,901", layX: "8.00", layXVol: "15,678",
        back2: "2.80", back2Vol: "29,876", lay2: "2.82", lay2Vol: "21,098"
      }
    },
    {
      event: "EAGLES V WARRIORS",
      league: "KABADDI WORLD CUP",
      isLive: false,
      half: "PRE-MATCH",
      date: "26 MAY",
      time: "07:00 PM",
      score: "-",
      icons: { tv: true, star: false, trending: false },
      odds: {
        back1: "1.72", back1Vol: "29,876", lay1: "1.73", lay1Vol: "21,098",
        backX: "9.00", backXVol: "12,345", layX: "9.50", layXVol: "9,876",
        back2: "2.35", back2Vol: "23,456", lay2: "2.36", lay2Vol: "16,543"
      }
    }
  ];

  // Top Raiders section
  const topRaiders = [
    { name: "Pawan Sehrawat", team: "Telugu Titans", raidPoints: "287", odds: "1.85", vol: "45,678" },
    { name: "Naveen Kumar", team: "Dabang Delhi", raidPoints: "276", odds: "2.10", vol: "38,765" },
    { name: "Arjun Deshwal", team: "Jaipur Pink Panthers", raidPoints: "268", odds: "2.50", vol: "32,109" },
    { name: "Maninder Singh", team: "Bengal Warriors", raidPoints: "245", odds: "3.00", vol: "27,654" }
  ];

  // Top Defenders section
  const topDefenders = [
    { name: "Fazel Atrachali", team: "Puneri Paltan", tacklePoints: "72", odds: "2.00", vol: "34,567" },
    { name: "Sunil Kumar", team: "Gujarat Giants", tacklePoints: "68", odds: "2.30", vol: "29,876" },
    { name: "Sandeep Dhull", team: "Jaipur Pink Panthers", tacklePoints: "65", odds: "2.80", vol: "23,456" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300 mt-4">
      
      {/* Top Header Sound Bar */}
      <div className="bg-[#4a0612] p-1.5 flex items-center gap-2">
        <div className="bg-[#1e70b8] text-white p-1 rounded cursor-pointer hover:bg-blue-600 transition-colors">
          <Volume2 size={16} />
        </div>
      </div>

      {/* Kabaddi Title Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">🏐</span> KABADDI
        </div>
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Filters & Labels row */}
      <div className="bg-white px-3 py-2 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ PKL</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ World Cup</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Live</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Upcoming</button>
        </div>

        <div className="hidden md:flex w-[480px] justify-between text-center text-xs font-bold text-gray-700 pr-2 select-none">
          <div className="w-[154px]">Team A</div>
          <div className="w-[154px]">Tie</div>
          <div className="w-[154px]">Team B</div>
        </div>
      </div>

      {/* Matches List */}
      <div className="divide-y divide-gray-200 bg-white">
        {matches.map((match, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
            
            {/* Match details */}
            <div className="p-3 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-w-0">
              <div>
                <h3 className="text-[13px] font-bold text-gray-900 leading-snug tracking-tight truncate cursor-pointer hover:text-blue-900">
                  {match.event}
                </h3>
                <div className="flex items-center gap-2 flex-wrap mt-0.5">
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">({match.league})</span>
                  <span className="text-[9px] bg-orange-600/10 text-orange-700 rounded-full px-1.5 py-0.5 font-semibold">{match.half}</span>
                  {match.score !== "-" && (
                    <span className="text-[10px] font-bold text-gray-700 bg-gray-100 rounded px-1.5 py-0.5">{match.score}</span>
                  )}
                </div>
              </div>

              {/* Timing and badge icons */}
              <div className="flex items-center gap-4 min-w-max text-right">
                {match.isLive && (
                  <span className="text-emerald-500 font-extrabold text-[12px] border-b-2 border-emerald-500 pb-0.5 tracking-wider px-1 animate-pulse">
                    LIVE 🔴
                  </span>
                )}
                
                <div className="text-center">
                  <div className="text-[10px] text-red-500 font-bold whitespace-nowrap">{match.date}</div>
                  <div className="text-[10px] text-amber-600 font-semibold whitespace-nowrap">{match.time}</div>
                </div>

                {/* Specific Badges (TV, Star, Trending, Pin) */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 select-none">
                  {match.icons.tv && <Tv size={14} className="text-gray-700" />}
                  {match.icons.star && <span className="text-yellow-500 text-[11px] font-black">⭐</span>}
                  {match.icons.trending && <span className="text-green-500 text-[9px] font-black px-1 py-0.5">▲</span>}
                  <Pin size={13} className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors ml-1 rotate-45" />
                </div>
              </div>
            </div>

            {/* Odds Cell Layout - Team A / Tie / Team B */}
            <div className="flex w-full md:w-[480px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
              {/* Team A */}
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

              {/* Tie/Draw */}
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

              {/* Team B */}
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

      {/* Top Raiders Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="p-3">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>🏃 Top Raiders - Most Raid Points</span>
            <span className="text-[9px] text-emerald-500 font-normal">SEASON 10</span>
          </div>
        </div>
        
        <div className="bg-white px-3 py-1.5 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200">
          <div className="text-[11px] font-bold text-gray-700">Player / Team</div>
          <div className="hidden md:flex w-[320px] justify-between text-center text-[10px] font-bold text-gray-500 pr-2">
            <div className="w-[80px]">Points</div>
            <div className="w-[110px]">To Win</div>
            <div className="w-[110px]">Lay</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100 bg-white">
          {topRaiders.map((player, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="p-2 flex-1">
                <h4 className="text-[12px] font-semibold text-gray-800">{player.name}</h4>
                <span className="text-[10px] text-gray-500">{player.team}</span>
              </div>
              <div className="flex w-full md:w-[320px] h-[40px] border-t md:border-t-0 border-gray-100">
                <div className="w-[80px] flex items-center justify-center">
                  <span className="text-[11px] font-bold text-gray-700">{player.raidPoints}</span>
                </div>
                <div className="flex flex-1 divide-x divide-white">
                  <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <span className="text-[12px] font-black text-gray-900">{player.odds}</span>
                  </div>
                  <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <span className="text-[12px] font-black text-gray-900">Lay</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Defenders Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="p-3">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>🛡️ Top Defenders - Most Tackle Points</span>
          </div>
        </div>
        
        <div className="bg-white px-3 py-1.5 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200">
          <div className="text-[11px] font-bold text-gray-700">Player / Team</div>
          <div className="hidden md:flex w-[320px] justify-between text-center text-[10px] font-bold text-gray-500 pr-2">
            <div className="w-[80px]">Points</div>
            <div className="w-[110px]">To Win</div>
            <div className="w-[110px]">Lay</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100 bg-white">
          {topDefenders.map((player, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="p-2 flex-1">
                <h4 className="text-[12px] font-semibold text-gray-800">{player.name}</h4>
                <span className="text-[10px] text-gray-500">{player.team}</span>
              </div>
              <div className="flex w-full md:w-[320px] h-[40px] border-t md:border-t-0 border-gray-100">
                <div className="w-[80px] flex items-center justify-center">
                  <span className="text-[11px] font-bold text-gray-700">{player.tacklePoints}</span>
                </div>
                <div className="flex flex-1 divide-x divide-white">
                  <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <span className="text-[12px] font-black text-gray-900">{player.odds}</span>
                  </div>
                  <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <span className="text-[12px] font-black text-gray-900">Lay</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Kabaddi Props */}
        <div className="bg-gray-50 border-t border-gray-200 p-3">
          <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-2">Available Kabaddi Markets</div>
          <div className="flex flex-wrap gap-2 text-[9px] text-gray-600">
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🏆 Match Winner</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">📊 Total Points</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">⚡ Handicap</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🏃 Top Raider</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🛡️ Top Defender</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🎯 Highest Scoring Half</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">💪 All Out Occurrence</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">📈 Super 10</span>
          </div>
        </div>
      </div>

    </div>
  );
}