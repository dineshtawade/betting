import React, { useState } from 'react';
import { Pin, Tv, Volume2, Trophy, Users, Clock, Star, TrendingUp, Plus, ChevronRight } from 'lucide-react';

export default function Fantasy11Page() {
  const [selectedSport, setSelectedSport] = useState('CRICKET');
  const [selectedContest, setSelectedContest] = useState(null);

  const sports = [
    { name: 'CRICKET', icon: '🏏', count: 24 },
    { name: 'FOOTBALL', icon: '⚽', count: 18 },
    { name: 'KABADDI', icon: '🤼', count: 12 },
    { name: 'BASKETBALL', icon: '🏀', count: 8 },
    { name: 'BASEBALL', icon: '⚾', count: 6 }
  ];

  const liveContests = [
    {
      match: "INDIA V AUSTRALIA",
      tournament: "ICC WORLD CUP 2024",
      isLive: true,
      timeLeft: "LIVE • 2nd Innings",
      date: "20 MAY",
      entryFee: "₹49",
      prizePool: "₹5,00,000",
      spots: "12,345 / 50,000",
      winners: "10,000",
      icons: { verified: true, trending: true },
      contestId: 1
    },
    {
      match: "MANCHESTER UNITED V LIVERPOOL",
      tournament: "PREMIER LEAGUE",
      isLive: true,
      timeLeft: "LIVE • 2nd Half",
      date: "20 MAY",
      entryFee: "₹99",
      prizePool: "₹10,00,000",
      spots: "8,234 / 25,000",
      winners: "5,000",
      icons: { verified: true, trending: true },
      contestId: 2
    },
    {
      match: "PUNERI PALTAN V U MUMBA",
      tournament: "PRO KABADDI LEAGUE",
      isLive: true,
      timeLeft: "LIVE • 2nd Half",
      date: "20 MAY",
      entryFee: "₹29",
      prizePool: "₹2,00,000",
      spots: "5,678 / 20,000",
      winners: "4,000",
      icons: { verified: false, trending: true },
      contestId: 3
    },
    {
      match: "LA LAKERS V BOSTON CELTICS",
      tournament: "NBA FINALS",
      isLive: false,
      timeLeft: "Starts in 2h 15m",
      date: "21 MAY",
      entryFee: "₹149",
      prizePool: "₹15,00,000",
      spots: "3,456 / 30,000",
      winners: "7,500",
      icons: { verified: true, trending: false },
      contestId: 4
    },
    {
      match: "GAIS V HAMMARBY",
      tournament: "SWEDISH ALLSVENSKAN",
      isLive: false,
      timeLeft: "Starts in 4h 30m",
      date: "21 MAY",
      entryFee: "₹19",
      prizePool: "₹50,000",
      spots: "1,234 / 5,000",
      winners: "1,000",
      icons: { verified: false, trending: false },
      contestId: 5
    },
    {
      match: "NOVAK DJOKOVIC V CARLOS ALCARAZ",
      tournament: "WIMBLEDON",
      isLive: false,
      timeLeft: "Starts in 1h 45m",
      date: "21 MAY",
      entryFee: "₹79",
      prizePool: "₹3,00,000",
      spots: "6,789 / 15,000",
      winners: "3,000",
      icons: { verified: true, trending: true },
      contestId: 6
    }
  ];

  const topPlayers = [
    { name: "Virat Kohli", team: "India", fantasyPoints: "487", selectedBy: "68%", value: "10.5" },
    { name: "Rohit Sharma", team: "India", fantasyPoints: "456", selectedBy: "62%", value: "10.0" },
    { name: "Jasprit Bumrah", team: "India", fantasyPoints: "234", selectedBy: "45%", value: "9.0" },
    { name: "Mohammed Shami", team: "India", fantasyPoints: "198", selectedBy: "38%", value: "8.5" },
    { name: "Hardik Pandya", team: "India", fantasyPoints: "267", selectedBy: "52%", value: "9.5" }
  ];

  const howToPlaySteps = [
    { step: "1", title: "Select Match", desc: "Choose from live & upcoming contests" },
    { step: "2", title: "Create Team", desc: "Pick 11 players within budget" },
    { step: "3", title: "Join Contest", desc: "Pay entry fee & confirm" },
    { step: "4", title: "Win Cash", desc: "Score points & win real cash" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300 mt-4">
      
      {/* Top Header Sound Bar */}
      <div className="bg-[#4a0612] p-1.5 flex items-center gap-2">
        <div className="bg-[#1e70b8] text-white p-1 rounded cursor-pointer hover:bg-blue-600 transition-colors">
          <Tv size={16} />
        </div>
        <div className="text-white text-xs font-medium ml-auto hidden md:block">
          Fantasy 11 - Create Your Winning Team
        </div>
      </div>

      {/* Fantasy Title Banner */}
      <div className="bg-gradient-to-r from-[#a60a27] to-[#e63946] relative h-12 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <Trophy size={18} />
          <span>FANTASY 11</span>
        </div>
        <div className="absolute top-0 bottom-0 left-36 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Sports Filters row */}
      <div className="bg-white px-3 py-2 flex flex-wrap items-center gap-2 border-b border-gray-200">
        {sports.map((sport) => (
          <button
            key={sport.name}
            onClick={() => setSelectedSport(sport.name)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
              selectedSport === sport.name
                ? 'bg-[#ffff00] text-black border border-[#cca04c]'
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}
          >
            <span>{sport.icon}</span>
            <span>{sport.name}</span>
            <span className="text-[10px] opacity-70">({sport.count})</span>
          </button>
        ))}
        <button className="ml-auto text-xs text-[#a60a27] font-semibold flex items-center gap-1">
          View All <ChevronRight size={14} />
        </button>
      </div>

      {/* How to Play Banner */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white p-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-sm font-bold uppercase tracking-wider">🏆 How to Play Fantasy 11</div>
          <div className="flex flex-wrap justify-center gap-4">
            {howToPlaySteps.map((step) => (
              <div key={step.step} className="flex items-center gap-2 text-xs">
                <div className="w-6 h-6 rounded-full bg-[#ffff00] text-black font-bold flex items-center justify-center text-xs">
                  {step.step}
                </div>
                <div>
                  <div className="font-semibold">{step.title}</div>
                  <div className="text-gray-300 text-[10px] hidden sm:block">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Contests Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <h2 className="text-sm font-bold text-gray-800 uppercase">Live & Upcoming Contests</h2>
            <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full">{liveContests.length} Active</span>
          </div>
          <button className="text-[#a60a27] text-xs font-semibold">See All</button>
        </div>
      </div>

      {/* Contests List */}
      <div className="divide-y divide-gray-200 bg-white">
        {liveContests.map((contest, idx) => (
          <div key={idx} className="p-3 hover:bg-gray-50 transition-colors">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              
              {/* Contest Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[14px] font-bold text-gray-900 truncate cursor-pointer hover:text-blue-900">
                    {contest.match}
                  </h3>
                  {contest.icons.verified && (
                    <span className="bg-blue-600 text-white rounded text-[9px] px-1.5 py-0.5">VERIFIED</span>
                  )}
                  {contest.icons.trending && (
                    <span className="bg-orange-500 text-white rounded text-[9px] px-1.5 py-0.5 flex items-center gap-0.5">
                      <TrendingUp size={10} /> TRENDING
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-0.5">
                  <span className="text-[10px] text-gray-400">{contest.tournament}</span>
                  <span className={`text-[10px] font-semibold ${contest.isLive ? 'text-red-500 animate-pulse' : 'text-blue-500'}`}>
                    {contest.timeLeft}
                  </span>
                  <span className="text-[10px] text-gray-400">{contest.date}</span>
                </div>
              </div>

              {/* Contest Stats */}
              <div className="flex flex-wrap items-center gap-4 text-center">
                <div>
                  <div className="text-[9px] text-gray-400 uppercase">Entry</div>
                  <div className="text-[15px] font-black text-green-600">{contest.entryFee}</div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 uppercase">Prize Pool</div>
                  <div className="text-[13px] font-bold text-gray-800">{contest.prizePool}</div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 uppercase">Spots</div>
                  <div className="text-[11px] font-semibold text-gray-700">{contest.spots}</div>
                </div>
                <div>
                  <div className="text-[9px] text-gray-400 uppercase">Winners</div>
                  <div className="text-[11px] font-semibold text-gray-700">{contest.winners}</div>
                </div>
              </div>

              {/* Join Button */}
              <button className="bg-[#ffff00] text-black font-bold text-xs px-5 py-2 rounded hover:bg-yellow-400 transition-colors whitespace-nowrap flex items-center gap-1">
                <Plus size={14} /> JOIN NOW
              </button>

            </div>

            {/* Progress Bar for spots */}
            <div className="mt-2">
              <div className="flex justify-between text-[8px] text-gray-400 mb-0.5">
                <span>Spots Filled</span>
                <span>{contest.spots}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-green-500 h-1 rounded-full" 
                  style={{ width: `${(parseInt(contest.spots.split('/')[0].replace(/,/g, '')) / parseInt(contest.spots.split('/')[1].replace(/,/g, ''))) * 100}%` }}
                ></div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Top Players Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-500" />
              <h3 className="text-sm font-bold text-gray-800 uppercase">Most Selected Players</h3>
            </div>
            <span className="text-[10px] text-gray-400">Based on Fantasy Points</span>
          </div>
        </div>
        
        <div className="bg-white px-3 py-1.5 grid grid-cols-2 md:grid-cols-5 gap-2 border-b border-gray-200 text-[10px] font-bold text-gray-500">
          <div>Player</div>
          <div>Team</div>
          <div>Fantasy Pts</div>
          <div>Selected By</div>
          <div>Value (Cr)</div>
        </div>

        <div className="divide-y divide-gray-100 bg-white">
          {topPlayers.map((player, idx) => (
            <div key={idx} className="px-3 py-2 grid grid-cols-2 md:grid-cols-5 gap-2 items-center hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-[15px]">⭐</span>
                <span className="text-[12px] font-semibold text-gray-800">{player.name}</span>
              </div>
              <div className="text-[11px] text-gray-600">{player.team}</div>
              <div className="text-[12px] font-bold text-green-600">{player.fantasyPoints}</div>
              <div>
                <div className="flex items-center gap-1">
                  <div className="w-12 bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: player.selectedBy }}></div>
                  </div>
                  <span className="text-[10px] font-semibold">{player.selectedBy}</span>
                </div>
              </div>
              <div className="text-[11px] font-semibold text-gray-700">{player.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Cards - Contest Types */}
      <div className="bg-gray-50 p-3">
        <h3 className="text-xs font-bold text-gray-700 uppercase mb-2 flex items-center gap-1">
          <Users size={14} /> Contest Types
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="bg-white p-2 rounded border border-gray-200 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-lg">🎯</div>
            <div className="text-[11px] font-bold text-gray-800">Winner Takes All</div>
            <div className="text-[9px] text-gray-400">Single winner</div>
          </div>
          <div className="bg-white p-2 rounded border border-gray-200 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-lg">🏆</div>
            <div className="text-[11px] font-bold text-gray-800">Top 50% Win</div>
            <div className="text-[9px] text-gray-400">High chance to win</div>
          </div>
          <div className="bg-white p-2 rounded border border-gray-200 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-lg">💰</div>
            <div className="text-[11px] font-bold text-gray-800">Mega Contest</div>
            <div className="text-[9px] text-gray-400">Big prize pool</div>
          </div>
          <div className="bg-white p-2 rounded border border-gray-200 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-lg">⚡</div>
            <div className="text-[11px] font-bold text-gray-800">Head 2 Head</div>
            <div className="text-[9px] text-gray-400">1vs1 battle</div>
          </div>
        </div>
      </div>

      {/* My Teams Preview */}
      <div className="bg-white border-t border-gray-200 p-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-gray-700 uppercase flex items-center gap-1">
            <Users size={14} /> My Teams
          </h3>
          <button className="text-[#a60a27] text-xs font-semibold">+ Create New Team</button>
        </div>
        <div className="bg-gray-50 rounded p-3 text-center border border-dashed border-gray-300">
          <div className="text-2xl mb-1">👥</div>
          <div className="text-[11px] text-gray-500">You haven't created any teams yet</div>
          <button className="mt-2 bg-[#ffff00] text-black font-bold text-xs px-4 py-1.5 rounded hover:bg-yellow-400 transition-colors">
            + Create Your First Team
          </button>
        </div>
      </div>

      {/* Additional Info Banner */}
      <div className="bg-[#1a1a2e] text-white p-2 text-center text-[10px]">
        <p>Join Fantasy 11 contests and win real cash! T&C apply. 18+ only.</p>
      </div>

    </div>
  );
}