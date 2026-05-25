import React from 'react';
import { Pin, Tv, Volume2 } from 'lucide-react';

export default function BasketballPage() {
  const matches = [
    {
      event: "LOS ANGELES LAKERS V BOSTON CELTICS",
      league: "NBA",
      isLive: true,
      quarter: "Q4 - 2:34",
      date: "20 MAY",
      time: "08:00 PM",
      score: "98 - 94",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "1.42", back1Vol: "234,567", lay1: "1.43", lay1Vol: "198,765",
        back2: "3.20", back2Vol: "87,654", lay2: "3.22", lay2Vol: "65,432",
        total: "198.5"
      }
    },
    {
      event: "GOLDEN STATE WARRIORS V PHOENIX SUNS",
      league: "NBA",
      isLive: true,
      quarter: "Q3 - 5:12",
      date: "20 MAY",
      time: "10:30 PM",
      score: "72 - 68",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "1.65", back1Vol: "156,789", lay1: "1.66", lay1Vol: "134,567",
        back2: "2.35", back2Vol: "98,765", lay2: "2.36", lay2Vol: "76,543",
        total: "225.5"
      }
    },
    {
      event: "MIAMI HEAT V NEW YORK KNICKS",
      league: "NBA",
      isLive: false,
      quarter: "PRE-MATCH",
      date: "21 MAY",
      time: "07:30 PM",
      score: "-",
      icons: { tv: true, star: false, trending: false },
      odds: {
        back1: "1.88", back1Vol: "123,456", lay1: "1.89", lay1Vol: "98,765",
        back2: "2.00", back2Vol: "109,876", lay2: "2.01", lay2Vol: "87,654",
        total: "212.5"
      }
    },
    {
      event: "DENVER NUGGETS V DALLAS MAVERICKS",
      league: "NBA",
      isLive: false,
      quarter: "PRE-MATCH",
      date: "22 MAY",
      time: "09:00 PM",
      score: "-",
      icons: { tv: true, star: true, trending: false },
      odds: {
        back1: "1.55", back1Vol: "187,654", lay1: "1.56", lay1Vol: "165,432",
        back2: "2.65", back2Vol: "76,543", lay2: "2.66", lay2Vol: "54,321",
        total: "218.5"
      }
    },
    {
      event: "MILWAUKEE BUCKS V PHILADELPHIA 76ERS",
      league: "NBA",
      isLive: false,
      quarter: "PRE-MATCH",
      date: "23 MAY",
      time: "08:00 PM",
      score: "-",
      icons: { tv: true, star: false, trending: false },
      odds: {
        back1: "1.95", back1Vol: "98,765", lay1: "1.96", lay1Vol: "76,543",
        back2: "1.95", back2Vol: "98,765", lay2: "1.96", lay2Vol: "76,543",
        total: "230.5"
      }
    },
    {
      event: "OKLAHOMA CITY THUNDER V MINNESOTA TIMBERWOLVES",
      league: "NBA",
      isLive: true,
      quarter: "Q2 - 8:45",
      date: "20 MAY",
      time: "09:30 PM",
      score: "45 - 42",
      icons: { tv: true, star: false, trending: true },
      odds: {
        back1: "1.72", back1Vol: "87,654", lay1: "1.73", lay1Vol: "65,432",
        back2: "2.20", back2Vol: "67,890", lay2: "2.21", lay2Vol: "54,321",
        total: "215.5"
      }
    },
    {
      event: "REAL MADRID V FC BARCELONA",
      league: "EUROLEAGUE",
      isLive: false,
      quarter: "PRE-MATCH",
      date: "24 MAY",
      time: "08:45 PM",
      score: "-",
      icons: { tv: true, star: true, trending: false },
      odds: {
        back1: "1.60", back1Vol: "54,321", lay1: "1.61", lay1Vol: "43,210",
        back2: "2.40", back2Vol: "45,678", lay2: "2.41", lay2Vol: "34,567",
        total: "165.5"
      }
    },
    {
      event: "PANATHINAIKOS V OLYMPIACOS",
      league: "EUROLEAGUE",
      isLive: true,
      quarter: "Q4 - 1:15",
      date: "20 MAY",
      time: "07:00 PM",
      score: "76 - 74",
      icons: { tv: true, star: false, trending: true },
      odds: {
        back1: "1.85", back1Vol: "43,210", lay1: "1.86", lay1Vol: "32,109",
        back2: "2.05", back2Vol: "38,765", lay2: "2.06", lay2Vol: "27,654",
        total: "152.5"
      }
    }
  ];

  // Top Scorers section
  const topScorers = [
    { name: "Luka Doncic", team: "Dallas Mavericks", ppg: "33.9", odds: "2.10", vol: "156,789" },
    { name: "Giannis Antetokounmpo", team: "Milwaukee Bucks", ppg: "31.1", odds: "2.50", vol: "123,456" },
    { name: "Shai Gilgeous-Alexander", team: "OKC Thunder", ppg: "30.4", odds: "3.00", vol: "98,765" },
    { name: "Jayson Tatum", team: "Boston Celtics", ppg: "26.9", odds: "4.50", vol: "76,543" },
    { name: "Anthony Davis", team: "LA Lakers", ppg: "24.7", odds: "6.00", vol: "54,321" }
  ];

  // Quarter Props
  const quarterProps = [
    { quarter: "1st Quarter", highestScoring: "2.10", totalPoints: "54.5", totalVol: "87,654" },
    { quarter: "2nd Quarter", highestScoring: "2.20", totalPoints: "55.5", totalVol: "76,543" },
    { quarter: "3rd Quarter", highestScoring: "2.15", totalPoints: "56.5", totalVol: "65,432" },
    { quarter: "4th Quarter", highestScoring: "2.40", totalPoints: "53.5", totalVol: "54,321" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300 mt-4">
      
      {/* Top Header Sound Bar */}
      <div className="bg-[#4a0612] p-1.5 flex items-center gap-2">
        <div className="bg-[#1e70b8] text-white p-1 rounded cursor-pointer hover:bg-blue-600 transition-colors">
          <Volume2 size={16} />
        </div>
      </div>

      {/* Basketball Title Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">🏀</span> BASKETBALL
        </div>
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Filters & Labels row */}
      <div className="bg-white px-3 py-2 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ NBA</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ EuroLeague</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Live</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Playoffs</button>
        </div>

        <div className="hidden md:flex w-[480px] justify-between text-center text-xs font-bold text-gray-700 pr-2 select-none">
          <div className="w-[154px]">Team A</div>
          <div className="w-[154px]">Team B</div>
          <div className="w-[154px]">Total</div>
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
                  <span className="text-[9px] bg-blue-600/10 text-blue-700 rounded-full px-1.5 py-0.5 font-semibold">{match.quarter}</span>
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

            {/* Odds Cell Layout - Team A / Team B / Total */}
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

              {/* Total Points Market */}
              <div className="flex flex-1 flex-col items-center justify-center bg-[#f5e6d3] hover:bg-[#eedcbf] cursor-pointer p-0.5 transition-colors">
                <span className="text-[12px] font-black text-gray-900">O/U {match.odds.total}</span>
                <span className="text-[8px] text-gray-500 font-medium">Over/Under</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Top Scorers Section - MVP Race */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="p-3">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>🏆 MVP Race - Top Scorers</span>
            <span className="text-[9px] text-emerald-500 font-normal">2023-24 SEASON</span>
          </div>
        </div>
        
        <div className="bg-white px-3 py-1.5 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200">
          <div className="text-[11px] font-bold text-gray-700">Player / Team</div>
          <div className="hidden md:flex w-[400px] justify-between text-center text-[10px] font-bold text-gray-500 pr-2">
            <div className="w-[50px]">PPG</div>
            <div className="w-[110px]">MVP Odds</div>
            <div className="w-[110px]">Lay</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100 bg-white">
          {topScorers.map((player, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="p-2 flex-1">
                <h4 className="text-[12px] font-semibold text-gray-800">{player.name}</h4>
                <span className="text-[10px] text-gray-500">{player.team}</span>
              </div>
              <div className="flex w-full md:w-[400px] h-[40px] border-t md:border-t-0 border-gray-100">
                <div className="w-[50px] flex items-center justify-center">
                  <span className="text-[11px] font-bold text-gray-700">{player.ppg}</span>
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

      {/* Quarter Props Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="p-3">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>⏱️ Quarter Props - Live Games</span>
          </div>
        </div>
        
        <div className="bg-white px-3 py-1.5 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200">
          <div className="text-[11px] font-bold text-gray-700">Quarter</div>
          <div className="hidden md:flex w-[400px] justify-between text-center text-[10px] font-bold text-gray-500 pr-2">
            <div className="w-[130px]">Highest Scoring</div>
            <div className="w-[130px]">Total Points</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100 bg-white">
          {quarterProps.map((prop, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="p-2 flex-1">
                <h4 className="text-[12px] font-semibold text-gray-800">{prop.quarter}</h4>
              </div>
              <div className="flex w-full md:w-[400px] h-[40px] border-t md:border-t-0 border-gray-100">
                <div className="flex flex-1 mr-1">
                  <div className="flex-1 bg-[#6bc4f4] hover:bg-[#52b5e8] flex flex-col items-center justify-center cursor-pointer transition-colors rounded-l">
                    <span className="text-[12px] font-black text-gray-900">{prop.highestScoring}</span>
                    <span className="text-[8px] text-gray-600">Odds</span>
                  </div>
                </div>
                <div className="flex flex-1 ml-1">
                  <div className="flex-1 bg-[#f5e6d3] hover:bg-[#eedcbf] flex flex-col items-center justify-center cursor-pointer transition-colors rounded-r">
                    <span className="text-[12px] font-black text-gray-900">O/U {prop.totalPoints}</span>
                    <span className="text-[8px] text-gray-500">Vol: {prop.totalVol}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Basketball Props */}
        <div className="bg-gray-50 border-t border-gray-200 p-3">
          <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-2">Available Basketball Markets</div>
          <div className="flex flex-wrap gap-2 text-[9px] text-gray-600">
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🏆 Moneyline</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">📊 Point Spread</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">⚡ Total Points</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🏃 Player Points</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🎯 Player Rebounds</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🎨 Player Assists</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">💪 Double/Double</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🏆 Quarter Winner</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">📈 Half Time/Full Time</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🎯 Race to 20 Points</span>
          </div>
        </div>
      </div>

    </div>
  );
}