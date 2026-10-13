import React, { useState } from 'react';
import { TranslationData } from '../data/translations.ts';
import { Logo } from './Logo.tsx';
import { X, Download, Copy, Check, MessageSquare, Phone, Mail, Sparkles, QrCode } from 'lucide-react';

interface BusinessCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationData;
}

export const BusinessCardModal: React.FC<BusinessCardModalProps> = ({ isOpen, onClose, t }) => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  // Generate and download vCard file (.vcf)
  const downloadVCard = () => {
    const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:PPL Game Studio
ORG:PPL Computer Entertainment Systems
TITLE:Ремонт консолей та джойстиків PlayStation / Xbox
TEL;TYPE=CELL,VOICE,MSG:+380978071157
EMAIL;TYPE=INTERNET:pplgamestudio@gmail.com
NOTE:Тільки текстові повідомлення на номер +380 97 807 11 57. PlayStation, Xbox, PC, геймпади DualSense, Xbox.
URL:https://pplgamestudio.com
END:VCARD`;

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'PPL_Game_Studio.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const whatsappUrl = 'https://wa.me/380978071157?text=' + encodeURIComponent('Доброго дня! Зберігаю контакт PPL Game Studio.');
  const viberUrl = 'viber://chat?number=%2B380978071157';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#0b1c45] via-[#05112e] to-[#020718] border-2 border-[#dfb76c]/60 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(223,183,108,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner metallic accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#fce085] rounded-tl-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#fce085] rounded-tr-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#fce085] rounded-bl-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#fce085] rounded-br-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors z-20"
          aria-label="Закрити"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Digital Business Card Header */}
        <div className="text-center pb-5 border-b border-white/10 space-y-1">
          <div className="flex justify-center mb-3">
            <Logo size="lg" />
          </div>
          <div className="text-xs uppercase font-serif tracking-widest text-[#ebd08b] font-semibold">
            {t.businessCardModal.role}
          </div>
          <p className="text-xs text-slate-300 italic pt-1">
            «Від гравця до гравців. Люблю ігри з дитинства — тому займаюся цим з любов’ю.»
          </p>
        </div>

        {/* Service Badge & Platforms */}
        <div className="py-4 space-y-3">
          <div className="text-center text-xs font-bold text-white uppercase tracking-wider">
            Sony PlayStation &bull; Xbox &bull; PC
          </div>
          <p className="text-[11px] text-center text-slate-300">
            Ігрові приставки, ігри та аксесуари. Комп’ютерні системи, ПК та ноутбуки.
            Покупка, продаж, обмін, ремонт та обслуговування.
          </p>
        </div>

        {/* Direct Contact Details Block */}
        <div className="space-y-3 p-4 rounded-2xl bg-[#020718] border border-[#dfb76c]/30">
          
          {/* Phone row */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-amber-300/90 font-medium">
                  {t.businessCardModal.phoneNotice}
                </div>
                <div className="text-sm font-mono font-bold text-white tracking-wide">
                  +380 97 807 11 57
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCopy('+380978071157', 'phone')}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title={t.businessCardModal.copyPhone}
            >
              {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Email row */}
          <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/5">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#dfb76c]/20 text-[#ebd08b] flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-400">Email:</div>
                <div className="text-xs font-mono font-bold text-[#ebd08b] truncate">
                  pplgamestudio@gmail.com
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCopy('pplgamestudio@gmail.com', 'email')}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex-shrink-0"
              title={t.businessCardModal.copyEmail}
            >
              {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Messenger Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20be5b] text-[#051a0e] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <a
            href={viberUrl}
            className="py-2.5 px-3 rounded-xl bg-[#7360F2] hover:bg-[#624ee0] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Viber</span>
          </a>
        </div>

        {/* Download vCard CTA */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <button
            onClick={downloadVCard}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#dfb76c] via-[#ebd08b] to-[#c5932d] text-[#040e24] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(223,183,108,0.3)] hover:scale-102 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{t.businessCardModal.saveVCard}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
