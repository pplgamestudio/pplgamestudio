import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { Lang, TranslationData } from '../data/translations.ts';
import { Phone, Mail, Menu, X, IdCard } from 'lucide-react';

interface HeaderProps {
  currentLang: Lang;
  onLanguageChange: (lang: Lang) => void;
  t: TranslationData;
  onOpenCard: () => void;
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  t,
  onOpenCard,
  onOpenContactModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#020716]/90 border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Brand Container */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => scrollTo('hero')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e5b95c]"
            >
              <Logo size="md" />
            </button>

            {/* Vertical Divider & Tagline from screenshot */}
            <div className="hidden lg:flex items-center pl-4 border-l border-white/15">
              <div className="text-[11px] uppercase tracking-wider text-slate-300 font-semibold leading-tight">
                <div>CONSOLE REPAIR</div>
                <div className="text-[#dfb76c] font-normal tracking-widest text-[9.5px]">SERVICE &amp; ACCESSORIES</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6 text-sm font-medium">
            <button
              onClick={() => scrollTo('hero')}
              className="px-3 py-2 text-slate-300 hover:text-white transition-colors relative group"
            >
              {t.nav.home}
              <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#e5b95c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="px-3 py-2 text-slate-300 hover:text-white transition-colors relative group"
            >
              {t.nav.services}
              <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#e5b95c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button
              onClick={() => scrollTo('platforms')}
              className="px-3 py-2 text-slate-300 hover:text-white transition-colors relative group"
            >
              {t.nav.platforms}
              <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#e5b95c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button
              onClick={() => scrollTo('diagnostics')}
              className="px-3 py-2 text-slate-300 hover:text-white transition-colors relative group"
            >
              {t.nav.diagnostics}
              <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#e5b95c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-3 py-2 text-slate-300 hover:text-white transition-colors relative group"
            >
              {t.nav.contact}
              <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#e5b95c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </nav>

          {/* Right Controls: Language Switcher & Quick CTAs */}
          <div className="flex items-center gap-3">
            {/* Language Switcher Segmented Control */}
            <div className="flex items-center p-0.5 bg-[#0b1633] rounded-lg border border-white/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => onLanguageChange('uk')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  currentLang === 'uk'
                    ? 'bg-gradient-to-r from-[#dfb76c] to-[#b88628] text-[#060e22] shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Українська мова"
              >
                UA
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ru')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  currentLang === 'ru'
                    ? 'bg-gradient-to-r from-[#dfb76c] to-[#b88628] text-[#060e22] shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Русский язык"
              >
                RU
              </button>
            </div>

            {/* Virtual Business Card trigger */}
            <button
              onClick={onOpenCard}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[#dfb76c]/40 text-[#dfb76c] hover:bg-[#dfb76c]/10 hover:border-[#dfb76c] transition-all"
              title={t.nav.businessCard}
            >
              <IdCard className="w-3.5 h-3.5 text-[#e5b95c]" />
              <span>{t.nav.businessCard}</span>
            </button>

            {/* Contact Modal Trigger */}
            <button
              onClick={onOpenContactModal}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-[#dfb76c] hover:bg-[#ebd08b] text-[#050f26] transition-all shadow-[0_0_15px_rgba(223,183,108,0.25)] hover:scale-102"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.nav.contactButton}</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#020716]/98 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1 text-sm font-medium">
            <button
              onClick={() => scrollTo('hero')}
              className="px-3 py-2.5 rounded-md text-left text-slate-200 hover:bg-white/5 hover:text-[#dfb76c]"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="px-3 py-2.5 rounded-md text-left text-slate-200 hover:bg-white/5 hover:text-[#dfb76c]"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollTo('platforms')}
              className="px-3 py-2.5 rounded-md text-left text-slate-200 hover:bg-white/5 hover:text-[#dfb76c]"
            >
              {t.nav.platforms}
            </button>
            <button
              onClick={() => scrollTo('diagnostics')}
              className="px-3 py-2.5 rounded-md text-left text-slate-200 hover:bg-white/5 hover:text-[#dfb76c]"
            >
              {t.nav.diagnostics}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-3 py-2.5 rounded-md text-left text-slate-200 hover:bg-white/5 hover:text-[#dfb76c]"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCard();
              }}
              className="w-full py-2.5 flex items-center justify-center gap-2 rounded-lg border border-[#dfb76c]/50 text-[#dfb76c] font-semibold text-sm"
            >
              <IdCard className="w-4 h-4" />
              <span>{t.nav.businessCard}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full py-2.5 flex items-center justify-center gap-2 rounded-lg bg-[#dfb76c] text-[#050f26] font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.contactButton} (+380 97 807 11 57)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
