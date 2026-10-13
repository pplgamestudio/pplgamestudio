import React, { useState } from 'react';
import { TranslationData } from '../data/translations.ts';
import { consolePhotos, PlayStationLogo, XboxLogo, PcLogo } from '../data/consoleAssets.tsx';
import { Monitor, ArrowRight, CheckCircle2, RefreshCw, Layers } from 'lucide-react';

interface PlatformsProps {
  t: TranslationData;
  onSelectPlatformForDiag?: (platformId: string) => void;
}

export const Platforms: React.FC<PlatformsProps> = ({ t }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ps' | 'xbox' | 'pc'>('all');

  const getPlatformPhoto = (generation: string): string => {
    switch (generation) {
      case 'PS1':
        return consolePhotos.platforms.ps1;
      case 'PS2':
        return consolePhotos.platforms.ps2;
      case 'PS3':
        return consolePhotos.platforms.ps3;
      case 'PS4':
        return consolePhotos.platforms.ps4;
      case 'PS5':
        return consolePhotos.platforms.ps5;
      case 'Original':
        return consolePhotos.platforms.xboxClassic;
      case 'X360':
        return consolePhotos.platforms.xbox360;
      case 'XOne':
        return consolePhotos.platforms.xboxOne;
      case 'Series':
        return consolePhotos.platforms.xboxSeries;
      case 'PC':
      default:
        return consolePhotos.platforms.pcGaming;
    }
  };

  const filteredItems = t.platforms.items.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.icon === selectedCategory;
  });

  return (
    <section id="platforms" className="relative py-16 bg-[#020716] overflow-hidden">
      {/* Decorative ambient subtle lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-700/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching mockup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div className="flex items-center gap-4 flex-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span className="text-[#ebd08b] font-serif uppercase tracking-wider">{t.platforms.sectionTitle}</span>
            </h2>
            <div className="hidden sm:block flex-1 h-[1.5px] bg-gradient-to-r from-[#dfb76c]/60 via-white/15 to-transparent max-w-md" />
          </div>

          {/* Category Tabs with Authentic Logos */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#071333] border border-white/10 text-xs font-semibold">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#dfb76c] text-[#040e24] font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Всі платформи
            </button>
            <button
              onClick={() => setSelectedCategory('ps')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                selectedCategory === 'ps'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PlayStationLogo className="w-3.5 h-3" colorMode={selectedCategory === 'ps' ? 'white' : 'gold'} />
              <span>PlayStation</span>
            </button>
            <button
              onClick={() => setSelectedCategory('xbox')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                selectedCategory === 'xbox'
                  ? 'bg-emerald-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <XboxLogo className="w-3 h-3" colorMode={selectedCategory === 'xbox' ? 'white' : 'gold'} />
              <span>Xbox</span>
            </button>
            <button
              onClick={() => setSelectedCategory('pc')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                selectedCategory === 'pc'
                  ? 'bg-slate-200 text-slate-900 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PcLogo className="w-3 h-3" colorMode={selectedCategory === 'pc' ? 'color' : 'gold'} />
              <span>PC</span>
            </button>
          </div>
        </div>

        {/* Platforms Grid with Real Console Photos & Official Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4 mb-10">
          {filteredItems.map((platform, idx) => {
            const photoUrl = getPlatformPhoto(platform.generation);

            return (
              <div
                key={idx}
                onClick={() => {
                  const diag = document.getElementById('diagnostics');
                  if (diag) diag.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group rounded-xl bg-[#050f26] border border-white/10 hover:border-[#dfb76c]/60 hover:bg-[#091a42] transition-all duration-300 flex flex-col cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_8px_25px_rgba(223,183,108,0.18)]"
              >
                {/* Real Console Photo Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <img
                    src={photoUrl}
                    alt={`${platform.name} ${platform.generation} Repair`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050f26] via-transparent to-black/30" />
                  
                  {/* Official Logo Badge Overlay */}
                  <div className="absolute top-2 left-2 p-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
                    {platform.icon === 'ps' ? (
                      <PlayStationLogo className="w-4 h-3.5" colorMode="gold" />
                    ) : platform.icon === 'xbox' ? (
                      <XboxLogo className="w-3.5 h-3.5" colorMode="gold" />
                    ) : (
                      <PcLogo className="w-3.5 h-3.5" colorMode="gold" />
                    )}
                  </div>

                  <span className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-white/90">
                    {platform.generation}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-3 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#ebd08b] transition-colors">
                      {platform.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 group-hover:text-slate-300 mt-0.5">
                      {platform.tag}
                    </p>
                  </div>
                  <div className="mt-2 text-[9px] text-[#dfb76c]/80 font-semibold tracking-wide uppercase pt-1 border-t border-white/5">
                    Діагностика &bull; Ремонт
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trade-in / Full scope informational ribbon from brief */}
        <div className="rounded-xl p-5 bg-gradient-to-r from-[#071536] via-[#091b45] to-[#06122d] border border-[#dfb76c]/30 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#dfb76c]/20 text-[#ebd08b] flex-shrink-0">
                <PlayStationLogo className="w-5 h-5" colorMode="gold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Ігрові приставки, ігри та аксесуари
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  PlayStation, Xbox, геймпади DualSense, Xbox Wireless, керма та блоки живлення
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 flex-shrink-0">
                <PcLogo className="w-5 h-5" colorMode="white" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Комп’ютерні системи, ПК та ноутбуки
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Діагностика, збірка, термопрофілактика, чистка та ремонт компонентів
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Покупка, продаж, обмін (Трейд-ін)
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Викуп несправних або старих консолей, обмін на оновлені системи з гарантією
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
