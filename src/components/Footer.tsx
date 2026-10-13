import React from 'react';
import { TranslationData } from '../data/translations.ts';
import { Logo } from './Logo.tsx';
import { Search, Mail, MessageSquare, Phone } from 'lucide-react';

interface FooterProps {
  t: TranslationData;
  onOpenCard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenCard }) => {
  return (
    <footer className="bg-[#020512] border-t border-white/10 text-slate-400 text-xs">
      
      {/* Search Keywords Ribbon matching mockup layout */}
      <div className="border-b border-white/[0.08] bg-[#020718] py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3">
          <div className="p-1.5 rounded-lg bg-white/5 text-[#dfb76c] flex-shrink-0 mt-0.5 sm:mt-0">
            <Search className="w-4 h-4" />
          </div>
          <div className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
            <span className="text-slate-300 font-semibold mr-1">SEO Keywords:</span>
            <span className="text-slate-400 hover:text-slate-300 transition-colors">
              {t.keywordsBar.keywordsText}
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Brand & Copyright */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wider text-sm text-white uppercase font-sans">
                PPL GAME STUDIO
              </span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300 text-[11px] font-medium">
                PPL Computer Entertainment Systems
              </span>
            </div>
            <p className="text-[11px] text-slate-400 max-w-sm">
              {t.footer.allServicesText}
            </p>
            <div className="text-[11px] text-slate-400 pt-1">
              {t.footer.rights}
            </div>
          </div>

          {/* Center Quick Links */}
          <div className="md:col-span-3 space-y-1.5 text-xs text-slate-300">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-2 text-[#dfb76c]">
              Швидкі контакти
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-300 text-[10px]">WhatsApp/Viber:</span>
              <span className="font-mono text-white font-bold">+380 97 807 11 57</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-[10px]">Email:</span>
              <a href="mailto:pplgamestudio@gmail.com" className="font-mono text-[#ebd08b] hover:underline">
                pplgamestudio@gmail.com
              </a>
            </div>
          </div>

          {/* Right Slogan matching screenshot */}
          <div className="md:col-span-4 flex flex-col md:items-end text-left md:text-right space-y-1">
            <div className="text-base font-extrabold uppercase tracking-widest gold-text-gradient font-sans">
              PPL GAME STUDIO
            </div>
            <div className="flex items-center gap-2 text-xs font-serif italic text-[#dfb76c]">
              <span className="h-px w-6 bg-[#dfb76c]/40 hidden md:inline-block" />
              <span>{t.footer.motto}</span>
              <span className="h-px w-6 bg-[#dfb76c]/40" />
            </div>
            <div className="text-[10px] text-slate-400 pt-1">
              Тільки текстові повідомлення на номер: +380 97 807 11 57
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
