import React from 'react';
import { Pin, Tv, Volume2 } from 'lucide-react';

export default function VolleyballPage() {
  const matches = [
    {
      event: "BRAZIL V POLAND",
      league: "VOLLEYBALL NATIONS LEAGUE",
      isLive: true,
      set: "SET 3 - 15:12",
      date: "20 MAY",
      time: "08:00 PM",
      score: "2 - 0",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "1.45", back1Vol: "123,456", lay1: "1.46", lay1Vol: "98,765",
        back2: "2.85", back2Vol: "67,890", lay2: "2.86", lay2Vol: "54,321",
        setHandicap: "-1.5"
      }
    },
    {
      event: "ITALY V FRANCE",
      league: "VOLLEYBALL NATIONS LEAGUE",
      isLive: true,
      set: "SET 2 - 18:16",
      date: "20 MAY",
      time: "09:30 PM",
      score: "1 - 0",
      icons: { tv: true, star: false, trending: true },
      odds: {
        back1: "1.62", back1Vol: "98,765", lay1: "1.63", lay1Vol: "76,543",
        back2: "2.35", back2Vol: "87,654", lay2: "2.36", lay2Vol: "65,432",
        setHandicap: "-1.5"
      }
    },
    {
      event: "USA V JAPAN",
      league: "VOLLEYBALL NATIONS LEAGUE",
      isLive: false,
      set: "PRE-MATCH",
      date: "21 MAY",
      time: "07:00 PM",
      score: "-",
      icons: { tv: true, star: true, trending: false },
      odds: {
        back1: "1.55", back1Vol: "145,678", lay1: "1.56", lay1Vol: "123,456",
        back2: "2.65", back2Vol: "76,543", lay2: "2.66", lay2Vol: "54,321",
        setHandicap: "-1.5"
      }
    },
    {
      event: "RUSSIA V SERBIA",
      league: "WORLD CHAMPIONSHIP",
      isLive: false,
      set: "PRE-MATCH",
      date: "22 MAY",
      time: "06:30 PM",
      score: "-",
      icons: { tv: true, star: false, trending: false },
      odds: {
        back1: "1.72", back1Vol: "87,654", lay1: "1.73", lay1Vol: "65,432",
        back2: "2.15", back2Vol: "76,543", lay2: "2.16", lay2Vol: "54,321",
        setHandicap: "-1.5"
      }
    },
    {
      event: "GERMANY V NETHERLANDS",
      league: "EUROPEAN CHAMPIONSHIP",
      isLive: true,
      set: "SET 4 - 12:10",
      date: "20 MAY",
      time: "07:45 PM",
      score: "2 - 1",
      icons: { tv: true, star: false, trending: true },
      odds: {
        back1: "1.85", back1Vol: "65,432", lay1: "1.86", lay1Vol: "43,210",
        back2: "2.00", back2Vol: "54,321", lay2: "2.01", lay2Vol: "32,109",
        setHandicap: "-1.5"
      }
    },
    {
      event: "CHINA V TURKEY",
      league: "WORLD GRAND PRIX",
      isLive: false,
      set: "PRE-MATCH",
      date: "23 MAY",
      time: "08:15 PM",
      score: "-",
      icons: { tv: true, star: true, trending: false },
      odds: {
        back1: "1.68", back1Vol: "76,543", lay1: "1.69", lay1Vol: "54,321",
        back2: "2.25", back2Vol: "65,432", lay2: "2.26", lay2Vol: "43,210",
        setHandicap: "-1.5"
      }
    },
    {
      event: "ARGENTINA V IRAN",
      league: "WORLD CUP",
      isLive: false,
      set: "PRE-MATCH",
      date: "24 MAY",
      time: "05:00 PM",
      score: "-",
      icons: { tv: true, star: false, trending: false },
      odds: {
        back1: "1.50", back1Vol: "54,321", lay1: "1.51", lay1Vol: "32,109",
        back2: "2.75", back2Vol: "43,210", lay2: "2.76", lay2Vol: "21,098",
        setHandicap: "-1.5"
      }
    },
    {
      event: "POLAND V ITALY",
      league: "CHAMPIONS LEAGUE",
      isLive: true,
      set: "SET 5 - 8:5",
      date: "20 MAY",
      time: "10:00 PM",
      score: "2 - 2",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "2.10", back1Vol: "98,765", lay1: "2.11", lay1Vol: "76,543",
        back2: "1.75", back2Vol: "123,456", lay2: "1.76", lay2Vol: "98,765",
        setHandicap: "-1.5"
      }
    }
  ];

  // Set Winner Markets
  const setMarkets = [
    { set: "1st Set Winner", teamA: "Brazil", teamAOdds: "1.65", teamB: "Poland", teamBOdds: "2.20", total: "45.5" },
    { set: "2nd Set Winner", teamA: "Brazil", teamAOdds: "1.70", teamB: "Poland", teamBOdds: "2.15", total: "46.5" },
    { set: "3rd Set Winner", teamA: "Brazil", teamAOdds: "1.75", teamB: "Poland", teamBOdds: "2.10", total: "47.5" },
    { set: "4th Set Winner", teamA: "Italy", teamAOdds: "1.60", teamB: "France", teamBOdds: "2.30", total: "44.5" },
  ];

  // Top Players section
  const topPlayers = [
    { name: "Wilfredo Leon", country: "Poland", points: "287", kills: "245", odds: "3.50", vol: "45,678" },
    { name: "Yoandy Leal", country: "Brazil", points: "265", kills: "223", odds: "4.00", vol: "38,765" },
    { name: "Earvin Ngapeth", country: "France", points: "234", kills: "198", odds: "5.00", vol: "32,109" },
    { name: "Ivan Zaytsev", country: "Italy", points: "218", kills: "187", odds: "6.00", vol: "27,654" },
    { name: "Yuki Ishikawa", country: "Japan", points: "198", kills: "167", odds: "8.00", vol: "21,098" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300 mt-4">
      
      {/* Top Header Sound Bar */}
      <div className="bg-[#4a0612] p-1.5 flex items-center gap-2">
        <div className="bg-[#1e70b8] text-white p-1 rounded cursor-pointer hover:bg-blue-600 transition-colors">
          <Volume2 size={16} />
        </div>
      </div>

      {/* Volleyball Title Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">🏐</span> VOLLEYBALL
        </div>
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Filters & Labels row */}
      <div className="bg-white px-3 py-2 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ VNL</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ World Cup</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Live</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Set Betting</button>
        </div>

        <div className="hidden md:flex w-[480px] justify-between text-center text-xs font-bold text-gray-700 pr-2 select-none">
          <div className="w-[154px]">Match Winner</div>
          <div className="w-[154px]">Set Handicap</div>
          <div className="w-[154px]">Total Sets</div>
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
                  <span className="text-[9px] bg-orange-600/10 text-orange-700 rounded-full px-1.5 py-0.5 font-semibold">{match.set}</span>
                  {match.score !== "-" && (
                    <span className="text-[10px] font-bold text-gray-700 bg-gray-100 rounded px-1.5 py-0.5">Sets: {match.score}</span>
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

            {/* Odds Cell Layout - Match Winner / Set Handicap / Total Sets */}
            <div className="flex w-full md:w-[480px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
              {/* Match Winner */}
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

              {/* Set Handicap */}
              <div className="flex flex-1 flex-col items-center justify-center bg-[#f5e6d3] hover:bg-[#eedcbf] cursor-pointer p-0.5 transition-colors">
                <div className="flex gap-1">
                  <span className="text-[12px] font-black text-gray-900">{match.odds.back2}</span>
                  <span className="text-[10px] text-gray-500">/</span>
                  <span className="text-[12px] font-black text-gray-900">{match.odds.lay2}</span>
                </div>
                <span className="text-[8px] text-gray-500 font-medium">Handicap {match.odds.setHandicap}</span>
              </div>

              {/* Total Sets Market */}
              <div className="flex flex-1 flex-col items-center justify-center bg-[#d4e6f1] hover:bg-[#c1d8e8] cursor-pointer p-0.5 transition-colors">
                <span className="text-[12px] font-black text-gray-900">O/U 4.5</span>
                <span className="text-[8px] text-gray-500 font-medium">Total Sets</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Set Winner Markets Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="p-3">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>🎯 Set Winner Markets - Live Matches</span>
            <span className="text-[9px] text-emerald-500 font-normal animate-pulse">LIVE</span>
          </div>
        </div>
        
        <div className="bg-white px-3 py-1.5 grid grid-cols-6 gap-2 border-b border-gray-200 text-[10px] font-bold text-gray-500">
          <div className="col-span-2">Set</div>
          <div className="text-center">Team A</div>
          <div className="text-center">Odds</div>
          <div className="text-center">Team B</div>
          <div className="text-center">Odds</div>
        </div>

        <div className="divide-y divide-gray-100 bg-white">
          {setMarkets.map((market, idx) => (
            <div key={idx} className="px-3 py-2 grid grid-cols-6 gap-2 items-center hover:bg-gray-50 transition-colors">
              <div className="col-span-2">
                <span className="text-[11px] font-semibold text-gray-800">{market.set}</span>
              </div>
              <div className="text-center">
                <span className="text-[11px] font-medium text-gray-700">{market.teamA}</span>
              </div>
              <div className="text-center">
                <span className="text-[12px] font-bold text-gray-900 bg-[#6bc4f4] px-2 py-0.5 rounded cursor-pointer hover:bg-[#52b5e8] transition-colors">
                  {market.teamAOdds}
                </span>
              </div>
              <div className="text-center">
                <span className="text-[11px] font-medium text-gray-700">{market.teamB}</span>
              </div>
              <div className="text-center">
                <span className="text-[12px] font-bold text-gray-900 bg-[#6bc4f4] px-2 py-0.5 rounded cursor-pointer hover:bg-[#52b5e8] transition-colors">
                  {market.teamBOdds}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Players Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="p-3">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>🏆 Top Scorers - Tournament Leaders</span>
            <span className="text-[9px] text-emerald-500 font-normal">2024 SEASON</span>
          </div>
        </div>
        
        <div className="bg-white px-3 py-1.5 grid grid-cols-2 md:grid-cols-6 gap-2 border-b border-gray-200 text-[10px] font-bold text-gray-500">
          <div>Player</div>
          <div>Country</div>
          <div>Points</div>
          <div>Kills</div>
          <div>MVP Odds</div>
          <div>Lay</div>
        </div>

        <div className="divide-y divide-gray-100 bg-white">
          {topPlayers.map((player, idx) => (
            <div key={idx} className="px-3 py-2 grid grid-cols-2 md:grid-cols-6 gap-2 items-center hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-[15px]">🏐</span>
                <span className="text-[12px] font-semibold text-gray-800">{player.name}</span>
              </div>
              <div className="text-[11px] text-gray-600">{player.country}</div>
              <div className="text-[12px] font-bold text-green-600">{player.points}</div>
              <div className="text-[11px] text-gray-600">{player.kills}</div>
              <div className="flex items-center gap-1">
                <span className="text-[12px] font-bold text-gray-900 bg-[#6bc4f4] px-2 py-0.5 rounded cursor-pointer hover:bg-[#52b5e8] transition-colors">
                  {player.odds}
                </span>
              </div>
              <div>
                <span className="text-[12px] font-bold text-gray-900 bg-[#fcaab8] px-2 py-0.5 rounded cursor-pointer hover:bg-[#fa91a3] transition-colors">
                  Lay
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Volleyball Props */}
      <div className="bg-gray-50 border-t border-gray-200 p-3">
        <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-2">Available Volleyball Markets</div>
        <div className="flex flex-wrap gap-2 text-[9px] text-gray-600">
          <span className="bg-white border border-gray-200 rounded px-2 py-1">🏆 Match Winner</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">📊 Set Winner</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">⚡ Set Handicap</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">🎯 Total Points</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">💪 Correct Set Score</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">🏆 Race to 15 Points</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">🎯 First Set Winner</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">📈 Total Sets Over/Under</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">⚡ Highest Scoring Set</span>
          <span className="bg-white border border-gray-200 rounded px-2 py-1">🏅 Player Points Props</span>
        </div>
      </div>

    </div>
  );
}