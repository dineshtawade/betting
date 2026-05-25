import React from 'react';
import { Pin, Tv, Volume2 } from 'lucide-react';

export default function BaseballPage() {
  const matches = [
    {
      event: "NEW YORK YANKEES V BOSTON RED SOX",
      league: "MLB",
      isLive: true,
      inning: "Top 7th - 2 Outs",
      date: "20 MAY",
      time: "07:15 PM",
      score: "4 - 2",
      pitcher: "Cole vs Sale",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "1.65", back1Vol: "234,567", lay1: "1.66", lay1Vol: "198,765",
        back2: "2.35", back2Vol: "156,789", lay2: "2.36", lay2Vol: "134,567",
        runLine: "-1.5"
      }
    },
    {
      event: "LOS ANGELES DODGERS V SAN FRANCISCO GIANTS",
      league: "MLB",
      isLive: true,
      inning: "Bot 5th - 1 Out",
      date: "20 MAY",
      time: "09:45 PM",
      score: "2 - 3",
      pitcher: "Yamamoto vs Webb",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "1.72", back1Vol: "187,654", lay1: "1.73", lay1Vol: "165,432",
        back2: "2.20", back2Vol: "123,456", lay2: "2.21", lay2Vol: "98,765",
        runLine: "-1.5"
      }
    },
    {
      event: "ATLANTA BRAVES V PHILADELPHIA PHILLIES",
      league: "MLB",
      isLive: false,
      inning: "PRE-MATCH",
      date: "21 MAY",
      time: "07:05 PM",
      score: "-",
      pitcher: "Strider vs Wheeler",
      icons: { tv: true, star: false, trending: false },
      odds: {
        back1: "1.55", back1Vol: "145,678", lay1: "1.56", lay1Vol: "123,456",
        back2: "2.65", back2Vol: "89,012", lay2: "2.66", lay2Vol: "76,543",
        runLine: "-1.5"
      }
    },
    {
      event: "HOUSTON ASTROS V TEXAS RANGERS",
      league: "MLB",
      isLive: false,
      inning: "PRE-MATCH",
      date: "22 MAY",
      time: "08:05 PM",
      score: "-",
      pitcher: "Valdez vs Eovaldi",
      icons: { tv: true, star: false, trending: false },
      odds: {
        back1: "1.85", back1Vol: "109,876", lay1: "1.86", lay1Vol: "87,654",
        back2: "2.05", back2Vol: "98,765", lay2: "2.06", lay2Vol: "76,543",
        runLine: "-1.5"
      }
    },
    {
      event: "CHICAGO CUBS V ST. LOUIS CARDINALS",
      league: "MLB",
      isLive: true,
      inning: "Top 3rd - 0 Out",
      date: "20 MAY",
      time: "08:15 PM",
      score: "0 - 1",
      pitcher: "Steele vs Mikolas",
      icons: { tv: true, star: false, trending: true },
      odds: {
        back1: "1.95", back1Vol: "76,543", lay1: "1.96", lay1Vol: "65,432",
        back2: "1.95", back2Vol: "76,543", lay2: "1.96", lay2Vol: "65,432",
        runLine: "-1.5"
      }
    },
    {
      event: "SEATTLE MARINERS V TORONTO BLUE JAYS",
      league: "MLB",
      isLive: false,
      inning: "PRE-MATCH",
      date: "23 MAY",
      time: "07:07 PM",
      score: "-",
      pitcher: "Kirby vs Gausman",
      icons: { tv: true, star: false, trending: false },
      odds: {
        back1: "1.88", back1Vol: "65,432", lay1: "1.89", lay1Vol: "54,321",
        back2: "2.00", back2Vol: "54,321", lay2: "2.01", lay2Vol: "43,210",
        runLine: "-1.5"
      }
    },
    {
      event: "SAN DIEGO PADRES V ARIZONA DIAMONDBACKS",
      league: "MLB",
      isLive: false,
      inning: "PRE-MATCH",
      date: "24 MAY",
      time: "09:40 PM",
      score: "-",
      pitcher: "Cease vs Gallen",
      icons: { tv: true, star: true, trending: false },
      odds: {
        back1: "1.72", back1Vol: "87,654", lay1: "1.73", lay1Vol: "65,432",
        back2: "2.20", back2Vol: "54,321", lay2: "2.21", lay2Vol: "43,210",
        runLine: "-1.5"
      }
    },
    {
      event: "BALTIMORE ORIOLES V TAMPA BAY RAYS",
      league: "MLB",
      isLive: true,
      inning: "Bot 8th - 2 Outs",
      date: "20 MAY",
      time: "06:50 PM",
      score: "5 - 3",
      pitcher: "Rodriguez vs Eflin",
      icons: { tv: true, star: true, trending: true },
      odds: {
        back1: "1.42", back1Vol: "198,765", lay1: "1.43", lay1Vol: "176,543",
        back2: "3.20", back2Vol: "54,321", lay2: "3.22", lay2Vol: "43,210",
        runLine: "-1.5"
      }
    }
  ];

  // Home Run Leaders section
  const hrLeaders = [
    { name: "Aaron Judge", team: "New York Yankees", hr: "24", odds: "2.50", vol: "89,012" },
    { name: "Shohei Ohtani", team: "LA Dodgers", hr: "22", odds: "3.00", vol: "76,543" },
    { name: "Bryce Harper", team: "Philadelphia Phillies", hr: "18", odds: "5.00", vol: "54,321" },
    { name: "Mookie Betts", team: "LA Dodgers", hr: "16", odds: "6.50", vol: "43,210" },
    { name: "Pete Alonso", team: "New York Mets", hr: "20", odds: "4.50", vol: "65,432" }
  ];

  // ERA Leaders (Cy Young race)
  const eraLeaders = [
    { name: "Zack Wheeler", team: "Philadelphia Phillies", era: "2.23", odds: "3.20", vol: "67,890" },
    { name: "Corbin Burnes", team: "Baltimore Orioles", era: "2.35", odds: "3.80", vol: "54,321" },
    { name: "Tyler Glasnow", team: "LA Dodgers", era: "2.58", odds: "4.50", vol: "43,210" },
    { name: "Logan Webb", team: "San Francisco", era: "2.72", odds: "5.50", vol: "34,567" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300 mt-4">
      
      {/* Top Header Sound Bar */}
      <div className="bg-[#4a0612] p-1.5 flex items-center gap-2">
        <div className="bg-[#1e70b8] text-white p-1 rounded cursor-pointer hover:bg-blue-600 transition-colors">
          <Volume2 size={16} />
        </div>
      </div>

      {/* Baseball Title Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">⚾</span> BASEBALL
        </div>
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Filters & Labels row */}
      <div className="bg-white px-3 py-2 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ MLB</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Live</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Run Line</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Totals</button>
        </div>

        <div className="hidden md:flex w-[480px] justify-between text-center text-xs font-bold text-gray-700 pr-2 select-none">
          <div className="w-[154px]">Moneyline</div>
          <div className="w-[154px]">Run Line</div>
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
                  <span className="text-[9px] bg-red-600/10 text-red-700 rounded-full px-1.5 py-0.5 font-semibold">{match.inning}</span>
                  <span className="text-[9px] bg-blue-600/10 text-blue-700 rounded-full px-1.5 py-0.5 font-semibold">{match.pitcher}</span>
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

            {/* Odds Cell Layout - Moneyline / Run Line / Total */}
            <div className="flex w-full md:w-[480px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
              {/* Moneyline */}
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

              {/* Run Line */}
              <div className="flex flex-1 flex-col items-center justify-center bg-[#f5e6d3] hover:bg-[#eedcbf] cursor-pointer p-0.5 transition-colors">
                <span className="text-[12px] font-black text-gray-900">{match.odds.runLine}</span>
                <span className="text-[8px] text-gray-500 font-medium">Run Line</span>
              </div>

              {/* Total Runs Market */}
              <div className="flex flex-1 flex-col items-center justify-center bg-[#d4e6f1] hover:bg-[#c1d8e8] cursor-pointer p-0.5 transition-colors">
                <span className="text-[12px] font-black text-gray-900">O/U 8.5</span>
                <span className="text-[8px] text-gray-500 font-medium">Total Runs</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Home Run Leaders Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="p-3">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>💣 Home Run Leaders - MVP Race</span>
            <span className="text-[9px] text-emerald-500 font-normal">2024 SEASON</span>
          </div>
        </div>
        
        <div className="bg-white px-3 py-1.5 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200">
          <div className="text-[11px] font-bold text-gray-700">Player / Team</div>
          <div className="hidden md:flex w-[400px] justify-between text-center text-[10px] font-bold text-gray-500 pr-2">
            <div className="w-[40px]">HR</div>
            <div className="w-[120px]">To Lead League</div>
            <div className="w-[120px]">Lay</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100 bg-white">
          {hrLeaders.map((player, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="p-2 flex-1">
                <h4 className="text-[12px] font-semibold text-gray-800">{player.name}</h4>
                <span className="text-[10px] text-gray-500">{player.team}</span>
              </div>
              <div className="flex w-full md:w-[400px] h-[40px] border-t md:border-t-0 border-gray-100">
                <div className="w-[40px] flex items-center justify-center">
                  <span className="text-[11px] font-bold text-gray-700">{player.hr}</span>
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

      {/* Cy Young (ERA Leaders) Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="p-3">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>🎯 Cy Young Race - ERA Leaders</span>
          </div>
        </div>
        
        <div className="bg-white px-3 py-1.5 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200">
          <div className="text-[11px] font-bold text-gray-700">Pitcher / Team</div>
          <div className="hidden md:flex w-[400px] justify-between text-center text-[10px] font-bold text-gray-500 pr-2">
            <div className="w-[40px]">ERA</div>
            <div className="w-[120px]">Cy Young Odds</div>
            <div className="w-[120px]">Lay</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100 bg-white">
          {eraLeaders.map((player, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="p-2 flex-1">
                <h4 className="text-[12px] font-semibold text-gray-800">{player.name}</h4>
                <span className="text-[10px] text-gray-500">{player.team}</span>
              </div>
              <div className="flex w-full md:w-[400px] h-[40px] border-t md:border-t-0 border-gray-100">
                <div className="w-[40px] flex items-center justify-center">
                  <span className="text-[11px] font-bold text-gray-700">{player.era}</span>
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

        {/* Additional Baseball Props */}
        <div className="bg-gray-50 border-t border-gray-200 p-3">
          <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-2">Available Baseball Markets</div>
          <div className="flex flex-wrap gap-2 text-[9px] text-gray-600">
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🏆 Moneyline</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">📊 Run Line (-1.5)</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">⚡ Total Runs</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🏃 Team Total</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🎯 First 5 Innings</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">💪 Player Strikeouts</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🏆 Pitcher Props</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">📈 To Hit a Home Run</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">🎯 RBI Props</span>
            <span className="bg-white border border-gray-200 rounded px-2 py-1">⚡ Grand Slam Occurrence</span>
          </div>
        </div>
      </div>

    </div>
  );
}