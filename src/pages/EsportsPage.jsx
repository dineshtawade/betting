import React from 'react';
import { Pin, Tv, Volume2 } from 'lucide-react';

export default function EsportsPage() {
  const esportsMatches = [
    {
      event: "TEAM SPIRIT V G2 ESPORTS",
      tournament: "IEM KATOWICE 2024",
      game: "CS2",
      isLive: true,
      map: "MAP 3 (INFERNO)",
      date: "20 MAY",
      time: "08:00 PM",
      icons: { tv: true, star: true, live: true },
      odds: {
        back1: "1.85", back1Vol: "45,678", lay1: "1.86", lay1Vol: "32,109",
        back2: "2.05", back2Vol: "38,765", lay2: "2.06", lay2Vol: "27,654"
      }
    },
    {
      event: "FAZE CLAN V VITALITY",
      tournament: "BLAST PREMIER",
      game: "CS2",
      isLive: false,
      map: "BO3 SERIES",
      date: "21 MAY",
      time: "06:00 PM",
      icons: { tv: true, star: false, live: false },
      odds: {
        back1: "1.95", back1Vol: "54,321", lay1: "1.96", lay1Vol: "43,210",
        back2: "1.95", back2Vol: "52,109", lay2: "1.96", lay2Vol: "41,098"
      }
    },
    {
      event: "PSG.LGD V BETBOOM TEAM",
      tournament: "THE INTERNATIONAL 2024",
      game: "DOTA 2",
      isLive: true,
      map: "GAME 2",
      date: "20 MAY",
      time: "07:30 PM",
      icons: { tv: true, star: true, live: true },
      odds: {
        back1: "1.65", back1Vol: "67,890", lay1: "1.66", lay1Vol: "54,321",
        back2: "2.30", back2Vol: "34,567", lay2: "2.32", lay2Vol: "23,456"
      }
    },
    {
      event: "T1 V GEN.G",
      tournament: "LCK SUMMER SPLIT",
      game: "LEAGUE OF LEGENDS",
      isLive: false,
      map: "BO3",
      date: "22 MAY",
      time: "05:00 AM",
      icons: { tv: true, star: true, live: false },
      odds: {
        back1: "1.75", back1Vol: "89,012", lay1: "1.76", lay1Vol: "76,543",
        back2: "2.10", back2Vol: "65,432", lay2: "2.12", lay2Vol: "54,321"
      }
    },
    {
      event: "FNATIC V NAVI",
      tournament: "VALORANT CHAMPIONS",
      game: "VALORANT",
      isLive: true,
      map: "MAP 2 (ASCENT)",
      date: "20 MAY",
      time: "09:00 PM",
      icons: { tv: true, star: false, live: true },
      odds: {
        back1: "2.20", back1Vol: "32,109", lay1: "2.22", lay1Vol: "21,098",
        back2: "1.70", back2Vol: "45,678", lay2: "1.71", lay2Vol: "34,567"
      }
    },
    {
      event: "TEAM LIQUID V SPACESTATION",
      tournament: "RLCS WORLD CHAMPIONSHIP",
      game: "ROCKET LEAGUE",
      isLive: false,
      map: "BO7",
      date: "23 MAY",
      time: "04:00 PM",
      icons: { tv: true, star: false, live: false },
      odds: {
        back1: "1.88", back1Vol: "23,456", lay1: "1.89", lay1Vol: "15,678",
        back2: "2.00", back2Vol: "21,234", lay2: "2.01", lay2Vol: "14,321"
      }
    },
    {
      event: "MOUZ V ENCE",
      tournament: "ESL PRO LEAGUE S19",
      game: "CS2",
      isLive: false,
      map: "BO3",
      date: "24 MAY",
      time: "07:00 PM",
      icons: { tv: true, star: true, live: false },
      odds: {
        back1: "1.55", back1Vol: "76,543", lay1: "1.56", lay1Vol: "65,432",
        back2: "2.60", back2Vol: "43,210", lay2: "2.62", lay2Vol: "32,109"
      }
    },
    {
      event: "KOI V HERETICS",
      tournament: "LVP SUPERLIGA",
      game: "LEAGUE OF LEGENDS",
      isLive: true,
      map: "GAME 3",
      date: "20 MAY",
      time: "06:30 PM",
      icons: { tv: true, star: false, live: true },
      odds: {
        back1: "1.45", back1Vol: "54,321", lay1: "1.46", lay1Vol: "43,210",
        back2: "2.85", back2Vol: "29,876", lay2: "2.87", lay2Vol: "21,098"
      }
    }
  ];

  // Game filters with counts
  const gameFilters = [
    { name: "CS2", count: 3, active: true },
    { name: "DOTA 2", count: 1, active: false },
    { name: "LoL", count: 2, active: false },
    { name: "VALORANT", count: 1, active: false },
    { name: "Rocket League", count: 1, active: false }
  ];

  // Tournament winners section
  const tournamentWinners = [
    { tournament: "IEM Katowice 2024", winner: "Team Spirit", odds: "1.85", vol: "123,456" },
    { tournament: "The International 2024", winner: "Team Falcons", odds: "3.50", vol: "87,654" },
    { tournament: "LCK Summer Split", winner: "T1", odds: "2.10", vol: "98,765" },
    { tournament: "Valorant Champions", winner: "FNATIC", odds: "2.75", vol: "65,432" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300 mt-4">
      
      {/* Top Header Sound Bar */}
      <div className="bg-[#4a0612] p-1.5 flex items-center gap-2">
        <div className="bg-[#1e70b8] text-white p-1 rounded cursor-pointer hover:bg-blue-600 transition-colors">
          <Volume2 size={16} />
        </div>
      </div>

      {/* Esports Title Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">🎮</span> ESPORTS
        </div>
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Game Filters row */}
      <div className="bg-white px-3 py-2 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {gameFilters.map((game, idx) => (
            <button 
              key={idx}
              className={`border rounded-full px-3 py-0.5 text-xs font-bold transition-colors uppercase ${
                game.active 
                  ? 'bg-[#a60a27] text-white border-[#a60a27]' 
                  : 'border-[#a60a27] text-[#a60a27] bg-white hover:bg-red-50'
              }`}
            >
              + {game.name} ({game.count})
            </button>
          ))}
        </div>

        <div className="hidden md:flex w-[320px] justify-between text-center text-xs font-bold text-gray-700 pr-2 select-none">
          <div className="w-[154px]">Team A</div>
          <div className="w-[154px]">Team B</div>
        </div>
      </div>

      {/* Matches List */}
      <div className="divide-y divide-gray-200 bg-white">
        {esportsMatches.map((match, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
            
            {/* Match details */}
            <div className="p-3 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-w-0">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[16px]">
                    {match.game === "CS2" && "🎯"}
                    {match.game === "DOTA 2" && "🗡️"}
                    {match.game === "LEAGUE OF LEGENDS" && "🌊"}
                    {match.game === "VALORANT" && "💥"}
                    {match.game === "ROCKET LEAGUE" && "🚀"}
                  </span>
                  <h3 className="text-[13px] font-bold text-gray-900 leading-snug tracking-tight truncate cursor-pointer hover:text-blue-900">
                    {match.event}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-0.5">
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">({match.tournament})</span>
                  <span className="text-[9px] bg-purple-600/10 text-purple-700 rounded-full px-1.5 py-0.5 font-semibold">{match.game}</span>
                  <span className="text-[9px] bg-blue-600/10 text-blue-700 rounded-full px-1.5 py-0.5 font-semibold">{match.map}</span>
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

                {/* Specific Badges (TV, Star, Pin) */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 select-none">
                  {match.icons.tv && <Tv size={14} className="text-gray-700" />}
                  {match.icons.star && <span className="text-yellow-500 text-[11px] font-black">⭐</span>}
                  {match.icons.live && <span className="bg-red-600 text-white rounded text-[8px] font-black px-1 py-0.5 animate-pulse">LIVE</span>}
                  <Pin size={13} className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors ml-1 rotate-45" />
                </div>
              </div>
            </div>

            {/* Odds Cell Layout - Team A vs Team B (no draw for esports) */}
            <div className="flex w-full md:w-[320px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
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

      {/* Tournament Winners Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="p-3">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>🏆 Tournament Winner Markets</span>
          </div>
        </div>
        
        {/* Tournament winners header */}
        <div className="bg-white px-3 py-1.5 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200">
          <div className="text-[11px] font-bold text-gray-700">Tournament / Winner</div>
          <div className="hidden md:flex w-[320px] justify-between text-center text-[10px] font-bold text-gray-500 pr-2">
            <div className="w-[154px]">To Win</div>
            <div className="w-[154px]">Lay</div>
          </div>
        </div>

        {/* Winners list */}
        <div className="divide-y divide-gray-100 bg-white">
          {tournamentWinners.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="p-2 flex-1">
                <h4 className="text-[12px] font-semibold text-gray-800">{item.tournament}</h4>
                <span className="text-[10px] text-gray-500">{item.winner}</span>
              </div>
              <div className="flex w-full md:w-[320px] h-[40px] border-t md:border-t-0 border-gray-100 divide-x divide-white">
                <div className="flex flex-1 divide-x divide-white">
                  <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <span className="text-[12px] font-black text-gray-900">{item.odds}</span>
                  </div>
                  <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <span className="text-[12px] font-black text-gray-900">Lay</span>
                  </div>
                </div>
                <div className="flex flex-1">
                  <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <span className="text-[12px] font-black text-gray-900">{item.vol}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map & Prop Markets */}
        <div className="bg-gray-50 border-t border-gray-200 p-3">
          <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-2">Available Map & Prop Markets</div>
          <div className="flex flex-wrap gap-2 text-[9px] text-gray-600">
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🗺️ Map Winner</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🎯 First Blood (CS2)</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🏆 Tournament Winner</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🎮 Most Kills</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">⚡ Map Handicap</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">📊 Total Maps Played</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🎯 Correct Map Score</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🌍 Regional Winner</span>
          </div>
        </div>
      </div>

    </div>
  );
}