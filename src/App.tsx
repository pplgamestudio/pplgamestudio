/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Lang, translations } from './data/translations.ts';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicePillars } from './components/ServicePillars.tsx';
import { Platforms } from './components/Platforms.tsx';
import { DiagnosticTool } from './components/DiagnosticTool.tsx';
import { TrustSection } from './components/TrustSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BusinessCardModal } from './components/BusinessCardModal.tsx';
import { ContactModal } from './components/ContactModal.tsx';

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('ppl_lang');
      if (saved === 'ru' || saved === 'uk') return saved;
    } catch {
      // fallback
    }
    return 'uk';
  });

  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleLanguageChange = (newLang: Lang) => {
    setLang(newLang);
    try {
      localStorage.setItem('ppl_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#020716] text-slate-100 flex flex-col font-sans selection:bg-[#dfb76c] selection:text-[#020716]">
      {/* Header */}
      <Header
        currentLang={lang}
        onLanguageChange={handleLanguageChange}
        t={t}
        onOpenCard={() => setIsCardModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          t={t}
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onOpenCard={() => setIsCardModalOpen(true)}
        />

        {/* 5 Core Pillars */}
        <ServicePillars
          t={t}
          onOpenConsultation={() => setIsContactModalOpen(true)}
        />

        {/* Supported Platforms (PlayStation, Xbox, PC) */}
        <Platforms t={t} />

        {/* Interactive Diagnostics Tool & Calculator */}
        <DiagnosticTool t={t} />

        {/* Trust, Guarantee & Founder manifesto */}
        <TrustSection t={t} />

        {/* Contact details */}
        <ContactSection
          t={t}
          onOpenCard={() => setIsCardModalOpen(true)}
        />
      </main>

      {/* Footer with Search Keywords Ribbon */}
      <Footer
        t={t}
        onOpenCard={() => setIsCardModalOpen(true)}
      />

      {/* Modals */}
      <BusinessCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
        t={t}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        t={t}
      />
    </div>
  );
}
