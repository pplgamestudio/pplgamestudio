import React, { useState } from 'react';
import { TranslationData } from '../data/translations.ts';
import { consolePhotos, PlayStationLogo, XboxLogo } from '../data/consoleAssets.tsx';
import { ArrowRight, Mail, MessageSquare, Phone, Copy, Check, Wrench, ShieldCheck, Sparkles, Cpu, Layers } from 'lucide-react';

interface HeroProps {
  t: TranslationData;
  onOpenContactModal: () => void;
  onOpenCard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenContactModal, onOpenCard }) => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const whatsappUrl = 'https://wa.me/380978071157?text=' + encodeURIComponent('Доброго дня! Звертаюся щодо ремонту консолі/джойстика (PPL Game Studio)');
  const viberUrl = 'viber://chat?number=%2B380978071157';

  return (
    <section id="hero" className="relative pt-6 pb-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#020716] via-[#040e2b] to-[#020819]">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[550px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#d4af37]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0a183d]/90 border border-[#d4af37]/35 text-[#ebd08b] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ebd08b] animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase font-sans leading-[1.08]">
                {t.hero.titlePrimary}
              </h1>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight gold-text-gradient uppercase font-sans leading-[1.1]">
                {t.hero.titleAccent}
              </div>
            </div>

            {/* Platforms Bar with Official Logos */}
            <div className="flex items-center gap-4 text-base sm:text-lg font-bold tracking-wide text-slate-200">
              <div className="flex items-center gap-2">
                <PlayStationLogo className="w-6 h-5" colorMode="gold" />
                <span className="text-[#60a5fa]">PlayStation</span>
              </div>
              <span className="text-[#d4af37]/50 font-light">|</span>
              <div className="flex items-center gap-2">
                <XboxLogo className="w-5 h-5" colorMode="gold" />
                <span className="text-[#4ade80]">Xbox</span>
              </div>
              <span className="text-[#d4af37]/50 font-light">|</span>
              <span className="text-white">PC</span>
            </div>

            {/* Core Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              {t.hero.description}
            </p>

            {/* Founder Note / Quote */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#0b1b42]/85 to-[#06122d]/70 border border-[#d4af37]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#dfb76c]">
                <Sparkles className="w-3.5 h-3.5 text-[#ebd08b]" />
                <span>{t.hero.motto}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic">
                {t.hero.childhoodStory}
              </p>
              <div className="text-[11px] text-slate-400 font-medium pt-1 border-t border-white/5 flex items-center justify-between">
                <span>{t.hero.tradeInNote}</span>
              </div>
            </div>

            {/* Action Row & Instant Messengers */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Main CTA */}
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#dfb76c] via-[#e8c87e] to-[#c5932d] text-[#040e24] shadow-[0_0_20px_rgba(223,183,108,0.3)] hover:shadow-[0_0_30px_rgba(223,183,108,0.5)] hover:scale-102 transition-all cursor-pointer"
                >
                  <span>{t.hero.ctaButton}</span>
                </button>

                {/* Digital Business Card Button */}
                <button
                  type="button"
                  onClick={onOpenCard}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold border border-[#d4af37]/45 text-[#ebd08b] bg-[#071333]/80 hover:bg-[#d4af37]/15 hover:border-[#ebd08b] transition-all cursor-pointer"
                >
                  <span>{t.hero.openCardBtn}</span>
                </button>
              </div>

              {/* Direct Messenger Links Bar (WhatsApp / Viber & Email) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* WhatsApp & Viber Box */}
                <div className="p-3.5 rounded-xl bg-[#071436] border border-white/10 hover:border-[#25D366]/40 transition-all flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center -space-x-1">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] hover:scale-110 transition-transform"
                        title="WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                      <a
                        href={viberUrl}
                        className="w-8 h-8 rounded-full bg-[#7360F2]/20 border border-[#7360F2]/50 flex items-center justify-center text-[#9b8eff] hover:scale-110 transition-transform"
                        title="Viber"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-300">WhatsApp / Viber</div>
                      <div className="text-[10px] text-amber-300/90 font-medium">{t.hero.textOnlyNotice}</div>
                      <div className="text-xs font-mono font-bold text-white tracking-wide">+380 97 807 11 57</div>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard('+380978071157', 'phone')}
                    className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Скопіювати номер"
                  >
                    {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email Box */}
                <div className="p-3.5 rounded-xl bg-[#071436] border border-white/10 hover:border-[#dfb76c]/40 transition-all flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <a
                      href="mailto:pplgamestudio@gmail.com"
                      className="w-8 h-8 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 flex-shrink-0 flex items-center justify-center text-[#ebd08b] hover:scale-110 transition-transform"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-slate-300">{t.hero.emailLabel}</div>
                      <a
                        href="mailto:pplgamestudio@gmail.com"
                        className="text-xs font-mono font-bold text-[#dfb76c] hover:underline truncate block"
                      >
                        pplgamestudio@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard('pplgamestudio@gmail.com', 'email')}
                    className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex-shrink-0"
                    title="Скопіювати Email"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Real Photography Bench Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Border Glow Container */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#d4af37]/50 via-blue-500/25 to-[#0b1c45]/40 shadow-[0_15px_45px_rgba(2,6,22,0.9)]">
                <div className="rounded-[15px] bg-[#040e29] border border-white/10 p-5 sm:p-6 overflow-hidden relative">
                  
                  {/* Neon Script Header: "Play Repair Enjoy" */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                        PPL WORKBENCH LAB
                      </span>
                    </div>
                    <span className="font-serif italic text-base sm:text-lg text-[#dfb76c] drop-shadow-[0_0_12px_rgba(223,183,108,0.7)]">
                      Play • Repair • Enjoy
                    </span>
                  </div>

                  {/* Real Console Photos Composition */}
                  <div className="mt-4 space-y-4">
                    
                    {/* Dual Console Real Photos Grid */}
                    <div className="grid grid-cols-2 gap-3.5">
                      
                      {/* Real PlayStation 5 Photo Card */}
                      <div className="group relative rounded-xl overflow-hidden bg-[#071333] border border-blue-500/30 hover:border-blue-400 transition-all shadow-md">
                        <div className="aspect-[4/3] w-full overflow-hidden relative">
                          <img
                            src={consolePhotos.heroPlayStation5}
                            alt="Sony PlayStation 5 Console & Controller Repair"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#040e29] via-transparent to-black/20" />
                          <div className="absolute top-2 left-2 p-1 rounded-md bg-black/60 backdrop-blur-sm">
                            <PlayStationLogo className="w-4 h-3.5" colorMode="gold" />
                          </div>
                        </div>
                        <div className="p-2.5">
                          <div className="text-xs font-bold text-white flex items-center justify-between">
                            <span>PlayStation 5</span>
                            <span className="text-[10px] text-blue-300 font-mono">PS5</span>
                          </div>
                          <p className="text-[10px] text-slate-300 mt-0.5">
                            Рідкий метал &bull; Чистка &bull; HDMI 4K
                          </p>
                        </div>
                      </div>

                      {/* Real Xbox Series X Photo Card */}
                      <div className="group relative rounded-xl overflow-hidden bg-[#071333] border border-emerald-500/30 hover:border-emerald-400 transition-all shadow-md">
                        <div className="aspect-[4/3] w-full overflow-hidden relative">
                          <img
                            src={consolePhotos.heroXboxSeriesX}
                            alt="Xbox Series X Console Repair"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#040e29] via-transparent to-black/20" />
                          <div className="absolute top-2 left-2 p-1 rounded-md bg-black/60 backdrop-blur-sm">
                            <XboxLogo className="w-3.5 h-3.5" colorMode="gold" />
                          </div>
                        </div>
                        <div className="p-2.5">
                          <div className="text-xs font-bold text-white flex items-center justify-between">
                            <span>Xbox Series X</span>
                            <span className="text-[10px] text-emerald-300 font-mono">XSX</span>
                          </div>
                          <p className="text-[10px] text-slate-300 mt-0.5">
                            Термопаста &bull; Блоки живлення
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Controller Real Teardown / Micro-Repair Banner */}
                    <div className="relative rounded-xl overflow-hidden border border-[#d4af37]/35 bg-[#061438] group">
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-5 h-28 relative overflow-hidden">
                          <img
                            src={consolePhotos.gamepadTeardown}
                            alt="DualSense & Xbox Gamepad Controller Drift Repair Teardown"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#061438]" />
                        </div>
                        <div className="col-span-7 p-3 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                              Ремонт джойстиків
                            </span>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#dfb76c]/20 text-[#ebd08b] border border-[#dfb76c]/30">
                              Hall Effect
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-300 leading-snug">
                            Усунення дрифту стіків, калібрування центровки, заміна кнопок та бамперів.
                          </p>
                          <div className="flex items-center gap-3 pt-1 text-[9px] text-[#dfb76c] font-semibold">
                            <span>DualSense</span>
                            <span>&bull;</span>
                            <span>Xbox Wireless</span>
                            <span>&bull;</span>
                            <span>DualShock 4</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quality badges ribbon */}
                    <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5 text-[#dfb76c]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Гарантія на виконані роботи</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Cpu className="w-3.5 h-3.5 text-blue-400" />
                        <span>Оригінальні деталі</span>
                      </span>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
