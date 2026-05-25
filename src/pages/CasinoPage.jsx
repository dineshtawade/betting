import React from 'react';
import { Pin, Tv, Volume2, Gamepad2, Dice5, Coins } from 'lucide-react';

export default function CasinoPage() {
  const casinoGames = [
    {
      game: "LIVE ROULETTE",
      provider: "EVOLUTION",
      isLive: true,
      players: "156",
      icons: { hd: true, hot: false, tv: true },
      odds: {
        red: "2.0", redVol: "1,234",
        black: "2.0", blackVol: "987",
        green: "35.0", greenVol: "56"
      }
    },
    {
      game: "LIVE BLACKJACK",
      provider: "EVOLUTION",
      isLive: true,
      players: "89",
      icons: { hd: true, hot: true, tv: true },
      odds: {
        red: "2.0", redVol: "2,101",
        black: "2.0", blackVol: "1,876",
        green: "35.0", greenVol: "23"
      }
    },
    {
      game: "LIVE BACCARAT",
      provider: "PRAGMATIC",
      isLive: true,
      players: "234",
      icons: { hd: false, hot: true, tv: true },
      odds: {
        red: "2.0", redVol: "3,456",
        black: "2.0", blackVol: "2,987",
        green: "35.0", greenVol: "45"
      }
    },
    {
      game: "SWEET BONANZA",
      provider: "PRAGMATIC",
      isLive: false,
      players: "1.2K",
      icons: { hd: false, hot: true, tv: false },
      odds: {
        red: "2.0", redVol: "8,234",
        black: "2.0", blackVol: "7,123",
        green: "35.0", greenVol: "234"
      }
    },
    {
      game: "GATES OF OLYMPUS",
      provider: "PRAGMATIC",
      isLive: false,
      players: "987",
      icons: { hd: false, hot: true, tv: false },
      odds: {
        red: "2.0", redVol: "5,678",
        black: "2.0", blackVol: "4,567",
        green: "35.0", greenVol: "189"
      }
    },
    {
      game: "ANDAR BAHAR",
      provider: "SUPERSPADE",
      isLive: true,
      players: "45",
      icons: { hd: false, hot: false, tv: true },
      odds: {
        red: "2.0", redVol: "567",
        black: "2.0", blackVol: "489",
        green: "35.0", greenVol: "12"
      }
    },
    {
      game: "TEEN PATTI",
      provider: "EZUGI",
      isLive: true,
      players: "178",
      icons: { hd: false, hot: true, tv: true },
      odds: {
        red: "2.0", redVol: "1,234",
        black: "2.0", blackVol: "1,098",
        green: "35.0", greenVol: "34"
      }
    },
    {
      game: "DRAGON TIGER",
      provider: "EVOLUTION",
      isLive: true,
      players: "312",
      icons: { hd: true, hot: true, tv: true },
      odds: {
        red: "2.0", redVol: "2,345",
        black: "2.0", blackVol: "2,123",
        green: "35.0", greenVol: "67"
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

      {/* Casino Title Banner */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300">
        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider uppercase z-10">
          <span className="text-base">🎰</span> CASINO
        </div>
        <div className="absolute top-0 bottom-0 left-28 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* Filters & Labels row */}
      <div className="bg-white px-3 py-2 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2">
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Live</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Slots</button>
          <button className="border border-[#a60a27] text-[#a60a27] bg-white rounded-full px-3 py-0.5 text-xs font-bold hover:bg-red-50 transition-colors uppercase">+ Tables</button>
        </div>

        <div className="hidden md:flex w-[480px] justify-between text-center text-xs font-bold text-gray-700 pr-2 select-none">
          <div className="w-[154px]">Red</div>
          <div className="w-[154px]">Black</div>
          <div className="w-[154px]">Green</div>
        </div>
      </div>

      {/* Games List */}
      <div className="divide-y divide-gray-200 bg-white">
        {casinoGames.map((game, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
            
            {/* Game info details */}
            <div className="p-3 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 min-w-0">
              <div>
                <h3 className="text-[13px] font-bold text-gray-900 leading-snug tracking-tight truncate cursor-pointer hover:text-blue-900">
                  {game.game}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 uppercase font-semibold">({game.provider})</span>
                  {game.isLive && (
                    <span className="text-emerald-500 font-extrabold text-[9px] border-b border-emerald-500 tracking-wider">
                      LIVE
                    </span>
                  )}
                </div>
              </div>

              {/* Timing and badge icons */}
              <div className="flex items-center gap-4 min-w-max text-right">
                
                <div className="text-center">
                  <div className="text-[10px] text-gray-500 font-semibold whitespace-nowrap">Players</div>
                  <div className="text-[11px] text-amber-600 font-bold whitespace-nowrap">{game.players}</div>
                </div>

                {/* Specific Badges (HD, Hot, TV, Pin) */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 select-none">
                  {game.icons.tv && <Tv size={14} className="text-gray-700" />}
                  {game.icons.hd && <span className="bg-blue-600 text-white rounded text-[9px] font-black px-1 py-0.5">HD</span>}
                  {game.icons.hot && <span className="bg-orange-500 text-white rounded text-[9px] font-black px-1 py-0.5">HOT</span>}
                  <Pin size={13} className="text-gray-400 hover:text-gray-700 cursor-pointer transition-colors ml-1 rotate-45" />
                </div>
              </div>
            </div>

            {/* Casino Odds Cell Layout Matrix - Red/Black/Green for Roulette style */}
            <div className="flex w-full md:w-[480px] h-[52px] border-t md:border-t-0 border-gray-100 divide-x divide-white select-none">
              {/* Red Box */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#e74c3c] hover:bg-[#c0392b] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-white">{game.odds.red}</span>
                  <span className="text-[9px] text-white/80 font-medium tracking-tighter">{game.odds.redVol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">Lay</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{game.odds.redVol}</span>
                </div>
              </div>

              {/* Black Box */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#2c3e50] hover:bg-[#1a252f] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-white">{game.odds.black}</span>
                  <span className="text-[9px] text-white/80 font-medium tracking-tighter">{game.odds.blackVol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">Lay</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{game.odds.blackVol}</span>
                </div>
              </div>

              {/* Green Box (0) */}
              <div className="flex flex-1 divide-x divide-white">
                <div className="flex-1 bg-[#27ae60] hover:bg-[#1e8449] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-white">{game.odds.green}</span>
                  <span className="text-[9px] text-white/80 font-medium tracking-tighter">{game.odds.greenVol}</span>
                </div>
                <div className="flex-1 bg-[#fcaab8] hover:bg-[#fa91a3] flex flex-col items-center justify-center cursor-pointer p-0.5 transition-colors">
                  <span className="text-[13px] font-black text-gray-900">Lay</span>
                  <span className="text-[9px] text-gray-600 font-medium tracking-tighter">{game.odds.greenVol}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}