import React from 'react';

export default function CasinoProviders() {
  // Array containing structural brand titles and placeholder high-quality casino graphics
  const providers = [
    { name: 'MAC88 Virtual Games', img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=400' },
    { name: 'MAC Excite', img: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=400' },
    { name: 'Ezugi', img: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Turbo Games', img: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Vivo Gaming', img: 'https://images.unsplash.com/photo-1570649236495-42fa5fe3c48b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Jili', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400' },
    { name: 'Gamzix', img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400' },
    { name: 'AE Sexy', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400' },
    { name: 'Popok', img: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=400' },
    { name: 'MAC88 Casino', img: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=400' },
    { name: 'Creed Roomz', img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=400' },
    { name: 'Smartsoft Gaming', img: 'https://images.unsplash.com/photo-1553484771-047a44eee27f?auto=format&fit=crop&q=80&w=400' },
    { name: 'Spribe', img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=400' },
    { name: 'Evolution', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400' },
    { name: 'Bombay Live', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400' },
    { name: 'Kingmaker', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=400' },
    { name: 'Betgames', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Bikini Games', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <div className="w-full bg-[#f4f4f4] rounded shadow-sm overflow-hidden border border-gray-300 mt-4">
      
      {/* --- Header Title Banner with Slot/Casino Icon --- */}
      <div className="bg-[#a60a27] relative h-10 flex items-center px-4 border-b border-gray-300 select-none">
        <div className="flex items-center gap-2 text-white font-bold text-xs tracking-wider uppercase z-10">
          <span className="text-sm">🎰</span> CASINO PROVIDER
        </div>
        {/* Sleek slanted banner cutout design */}
        <div className="absolute top-0 bottom-0 left-44 right-0 bg-white transform origin-top-left -skew-x-[25deg] border-l-4 border-[#4a0612] hidden md:block"></div>
      </div>

      {/* --- Two-Row Horizontal Scrolling Grid Container --- */}
      <div className="bg-white p-1 overflow-x-auto scrollbar-hide w-full">
        <div className="grid grid-flow-col grid-rows-2 gap-1 min-w-max auto-cols-[145px] sm:auto-cols-[165px]">
          {providers.map((provider, index) => (
            <div 
              key={index} 
              className="relative aspect-[16/9] bg-slate-900 border border-gray-800 rounded overflow-hidden shadow-sm group cursor-pointer"
            >
              {/* Banner Cover Art */}
              <img 
                src={provider.img} 
                alt={provider.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Dark Gradient Mask Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Exact Text Alignment overlay fallback */}
              <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                <span className="text-white font-black text-[11px] sm:text-xs uppercase tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  {provider.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Bottom Slim Slider Control Navigation Bar --- */}
      <div className="bg-gray-200 px-3 py-1 flex items-center justify-between border-t border-gray-300 text-gray-600 text-xs font-mono select-none">
        <button className="hover:text-black font-bold p-0.5 px-1 bg-white/50 hover:bg-white rounded border border-gray-300 transition-all">
          ◀
        </button>
        <div className="w-16 h-1 bg-gray-400 rounded-full relative overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gray-600 rounded-full"></div>
        </div>
        <button className="hover:text-black font-bold p-0.5 px-1 bg-white/50 hover:bg-white rounded border border-gray-300 transition-all">
          ▶
        </button>
      </div>

    </div>
  );
}