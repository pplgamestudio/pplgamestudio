import React, { useState } from 'react';
import { TranslationData } from '../data/translations.ts';
import { ShieldCheck, Wrench, Cpu, Gamepad2, Cog, ChevronRight, X, Sparkles } from 'lucide-react';

interface ServicePillarsProps {
  t: TranslationData;
  onOpenConsultation: () => void;
}

export const ServicePillars: React.FC<ServicePillarsProps> = ({ t, onOpenConsultation }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'diag':
        return <ShieldCheck className="w-7 h-7 text-[#ebd08b]" />;
      case 'repair':
        return <Wrench className="w-7 h-7 text-[#ebd08b]" />;
      case 'maintenance':
        return <Cpu className="w-7 h-7 text-[#ebd08b]" />;
      case 'gamepads':
        return <Gamepad2 className="w-7 h-7 text-[#ebd08b]" />;
      case 'parts':
      default:
        return <Cog className="w-7 h-7 text-[#ebd08b]" />;
    }
  };

  const selectedItemData = t.pillars.items.find((item) => item.id === activeItem);

  return (
    <section id="services" className="relative py-14 bg-[#03091e] border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Five Columns matching screenshot with vertical dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-white/10 border border-white/10 rounded-2xl bg-[#040e29]/70 backdrop-blur-sm overflow-hidden shadow-[0_10px_35px_rgba(2,6,20,0.6)]">
          {t.pillars.items.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className="group p-6 sm:p-7 flex flex-col items-center text-center hover:bg-[#08183f]/60 transition-all duration-300 cursor-pointer relative"
            >
              {/* Gold Top Accent Line on hover */}
              <div className="absolute top-0 inset-x-4 h-[2px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container with subtle gold glow */}
              <div className="mb-4 p-3 rounded-xl bg-[#09173b] border border-[#d4af37]/30 group-hover:border-[#ebd08b] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(223,183,108,0.3)] transition-all">
                {getIcon(item.id)}
              </div>

              {/* Pillar Title */}
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ebd08b] transition-colors mb-2">
                {item.title}
              </h3>

              {/* Subtitle / Description */}
              <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 leading-relaxed font-normal">
                {item.desc}
              </p>

              {/* Subtle badge / hint */}
              <div className="mt-4 pt-3 border-t border-white/5 w-full flex items-center justify-center gap-1 text-[11px] font-semibold text-[#dfb76c]">
                <span>{item.badge}</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal for Selected Pillar */}
      {selectedItemData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#0a1b42] to-[#040e2b] border border-[#d4af37]/40 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="p-3.5 rounded-xl bg-[#071333] border border-[#dfb76c]/40 shadow-[0_0_15px_rgba(223,183,108,0.2)]">
                {getIcon(selectedItemData.id)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#dfb76c] uppercase tracking-wider block">
                  {selectedItemData.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {selectedItemData.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p className="font-medium text-slate-200">
                {selectedItemData.desc}
              </p>
              <div className="p-4 rounded-xl bg-[#03091e] border border-white/10 text-slate-300 text-xs sm:text-sm">
                {selectedItemData.details}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-[#dfb76c]">
                <Sparkles className="w-4 h-4" />
                <span>PPL Game Studio Гарантія</span>
              </div>
              <button
                onClick={() => {
                  setActiveItem(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#dfb76c] hover:bg-[#ebd08b] text-[#050f26] font-bold text-xs shadow-md transition-all"
              >
                Отримати консультацію
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
