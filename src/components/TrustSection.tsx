import React from 'react';
import { TranslationData } from '../data/translations.ts';
import { consolePhotos, PlayStationLogo, XboxLogo } from '../data/consoleAssets.tsx';
import { Clock, ShieldCheck, Star, Gamepad2, Sparkles, CheckCircle2, Wrench, Cpu, Microscope } from 'lucide-react';

interface TrustSectionProps {
  t: TranslationData;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ t }) => {
  return (
    <section id="about" className="relative py-16 bg-[#020716] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout matching lower section in screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Real Teardown & Micro-soldering Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-blue-500/20 via-[#d4af37]/40 to-transparent shadow-xl">
              <div className="rounded-[15px] bg-[#040e29] border border-white/10 p-5 sm:p-6 overflow-hidden relative space-y-4">
                
                {/* Real Photo Banner of Controller Teardown / Micro PCB */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black/50 border border-white/10 group">
                  <img
                    src={consolePhotos.gamepadTeardown}
                    alt="DualSense and Xbox Controller Precision Disassembly & Soldering"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e29] via-transparent to-black/30" />
                  
                  {/* Floating Tech Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] text-white bg-black/70 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/15">
                    <span className="flex items-center gap-1.5 font-mono text-[#dfb76c] font-semibold">
                      <Wrench className="w-3.5 h-3.5" />
                      <span>ПРОФЕСІЙНИЙ СТЕНД РЕМОНТУ</span>
                    </span>
                    <span className="text-emerald-400 font-mono font-bold">100% Тестовано</span>
                  </div>
                </div>

                {/* Technical Calibration & Metrics */}
                <div className="p-3.5 rounded-xl bg-[#020617] border border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-white">Аналоговий модуль Hall Effect:</span>
                    <span className="font-mono text-[#ebd08b] font-bold">0.00% Drift</span>
                  </div>

                  {/* Calibration Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Точність центрування стіків:</span>
                      <span className="text-emerald-400 font-mono">99.8%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#dfb76c] to-emerald-400 rounded-full w-[99%]" />
                    </div>
                  </div>

                  {/* Liquid Metal metric */}
                  <div className="pt-2 border-t border-white/5 space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Охолодження PS5 (рідкий метал Thermal Grizzly):</span>
                      <span className="text-blue-400 font-mono">Тихий режим &bull; 48°C</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-300 rounded-full w-[75%]" />
                    </div>
                  </div>
                </div>

                {/* Founder quote banner */}
                <div className="p-3 rounded-lg bg-gradient-to-r from-[#0b1b42] to-[#040e2b] border border-[#dfb76c]/30 text-center">
                  <p className="text-xs text-[#ebd08b] italic font-serif">
                    {t.trust.philosophyQuote}
                  </p>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 block font-sans">
                    — {t.trust.author}
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Copy & Trust list matching screenshot */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#dfb76c] tracking-[0.2em] uppercase">
                {t.trust.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {t.trust.title}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {t.trust.body}
            </p>

            {/* 4 Trust items with icons matching screenshot layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {t.trust.items.map((item, index) => {
                const getTrustIcon = (idx: number) => {
                  switch (idx) {
                    case 0:
                      return <Clock className="w-6 h-6 text-[#ebd08b]" />;
                    case 1:
                      return <ShieldCheck className="w-6 h-6 text-[#ebd08b]" />;
                    case 2:
                      return <Star className="w-6 h-6 text-[#ebd08b]" />;
                    case 3:
                    default:
                      return <Gamepad2 className="w-6 h-6 text-[#ebd08b]" />;
                  }
                };

                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-[#050f28] border border-white/10 hover:border-[#dfb76c]/40 transition-all flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-[#0a183d] border border-[#d4af37]/30 flex-shrink-0">
                      {getTrustIcon(index)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
