import React, { useState } from 'react';
import { TranslationData } from '../data/translations.ts';
import { MessageSquare, Phone, Mail, Clock, Copy, Check, IdCard, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  t: TranslationData;
  onOpenCard: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ t, onOpenCard }) => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const whatsappUrl = 'https://wa.me/380978071157?text=' + encodeURIComponent('Доброго дня! Звертаюся щодо ремонту консолі/джойстика в PPL Game Studio.');
  const viberUrl = 'viber://chat?number=%2B380978071157';

  return (
    <section id="contact" className="relative py-16 bg-[#03091e] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a183d] border border-[#dfb76c]/30 text-[#ebd08b] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Контакти майстерні</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.contactSection.title}
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            {t.contactSection.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: WhatsApp & Viber */}
          <div className="p-6 rounded-2xl bg-[#050f28] border border-white/10 hover:border-[#25D366]/50 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {t.contactSection.phoneLabel}
                </h3>
                <p className="text-xs text-amber-300 font-medium mt-0.5">
                  {t.contactSection.phoneNotice}
                </p>
              </div>
              <div className="text-lg font-mono font-bold text-white tracking-wide">
                {t.contactSection.phoneVal}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-[#051a0e] font-bold text-xs text-center transition-all"
                >
                  WhatsApp
                </a>
                <a
                  href={viberUrl}
                  className="flex-1 py-2 rounded-lg bg-[#7360F2] hover:bg-[#624ee0] text-white font-bold text-xs text-center transition-all"
                >
                  Viber
                </a>
              </div>
              <button
                onClick={() => copyToClipboard('+380978071157', 'phone')}
                className="w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'phone' ? 'Скопійовано!' : 'Скопіювати номер'}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="p-6 rounded-2xl bg-[#050f28] border border-white/10 hover:border-[#dfb76c]/50 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#dfb76c]/20 border border-[#dfb76c]/40 flex items-center justify-center text-[#ebd08b]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {t.contactSection.emailLabel}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Питання, комерційні пропозиції, співпраця
                </p>
              </div>
              <a
                href={`mailto:${t.contactSection.emailVal}`}
                className="text-base font-mono font-bold text-[#dfb76c] hover:underline block truncate"
              >
                {t.contactSection.emailVal}
              </a>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <a
                href={`mailto:${t.contactSection.emailVal}`}
                className="w-full py-2 rounded-lg bg-[#dfb76c] hover:bg-[#ebd08b] text-[#050f26] font-bold text-xs text-center block transition-all"
              >
                Написати листа
              </a>
              <button
                onClick={() => copyToClipboard('pplgamestudio@gmail.com', 'email')}
                className="w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'email' ? 'Скопійовано!' : 'Скопіювати Email'}</span>
              </button>
            </div>
          </div>

          {/* Card 3: Business Card & Schedule */}
          <div className="p-6 rounded-2xl bg-[#050f28] border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {t.contactSection.hoursLabel}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t.contactSection.hoursVal}
                </p>
              </div>
              <div className="text-xs text-slate-300">
                «Від гравця до гравців. Люблю ігри з дитинства — тому займаюся цим з любов’ю.»
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <button
                onClick={onOpenCard}
                className="w-full py-2.5 rounded-lg border border-[#dfb76c]/50 text-[#ebd08b] hover:bg-[#dfb76c]/15 hover:border-[#dfb76c] font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <IdCard className="w-4 h-4" />
                <span>Відкрити візитку (.vcf)</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
