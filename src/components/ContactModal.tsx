import React, { useState } from 'react';
import { TranslationData } from '../data/translations.ts';
import { X, MessageSquare, Phone, Mail, Copy, Check, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationData;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, t }) => {
  const [copied, setCopied] = useState<string | null>(null);
  const [customMsg, setCustomMsg] = useState('');

  if (!isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const formattedMsg = customMsg
    ? `Доброго дня! ${customMsg}`
    : 'Доброго дня! Цікавить ремонт/обслуговування в PPL Game Studio.';

  const waUrl = `https://wa.me/380978071157?text=${encodeURIComponent(formattedMsg)}`;
  const viberUrl = 'viber://chat?number=%2B380978071157';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#09183d] to-[#040e29] border border-[#dfb76c]/50 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 mb-6">
          <span className="text-xs font-bold text-[#dfb76c] uppercase tracking-wider">
            Швидкий зв’язок
          </span>
          <h3 className="text-2xl font-extrabold text-white">
            {t.nav.contactButton} з PPL Game Studio
          </h3>
          <p className="text-xs text-amber-300/90 font-medium pt-1">
            {t.hero.textOnlyNotice} +380 97 807 11 57
          </p>
        </div>

        {/* Message preview or custom question */}
        <div className="mb-6 space-y-2">
          <label className="block text-xs font-semibold text-slate-300">
            Ваше повідомлення (за бажанням):
          </label>
          <textarea
            value={customMsg}
            onChange={(e) => setCustomMsg(e.target.value)}
            rows={2}
            placeholder="Опишіть проблему: модель приставки або геймпада, симптоми..."
            className="w-full p-3 rounded-xl bg-[#020718] border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#dfb76c] resize-none"
          />
        </div>

        {/* Primary Messenger Action Buttons */}
        <div className="space-y-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#041a0d] font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Написати у WhatsApp (+380 97 807 11 57)</span>
          </a>

          <a
            href={viberUrl}
            className="w-full py-3.5 px-4 rounded-xl bg-[#7360F2] hover:bg-[#624ee0] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(115,96,242,0.3)] transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Написати у Viber (+380 97 807 11 57)</span>
          </a>

          <a
            href={`mailto:pplgamestudio@gmail.com?subject=Запит на ремонт&body=${encodeURIComponent(formattedMsg)}`}
            className="w-full py-3 px-4 rounded-xl bg-[#0b1b42] hover:bg-[#0f2459] border border-[#dfb76c]/40 text-[#ebd08b] font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Надіслати на Email: pplgamestudio@gmail.com</span>
          </a>
        </div>

        {/* Copy bar */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Номер для копіювання:</span>
          <button
            onClick={() => handleCopy('+380978071157', 'phone')}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-white font-mono"
          >
            {copied === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>+380 97 807 11 57</span>
          </button>
        </div>

      </div>
    </div>
  );
};
