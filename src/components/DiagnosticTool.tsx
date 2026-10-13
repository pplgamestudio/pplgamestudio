import React, { useState } from 'react';
import { TranslationData } from '../data/translations.ts';
import { consolePhotos, PlayStationLogo, XboxLogo, PcLogo } from '../data/consoleAssets.tsx';
import { MessageSquare, Phone, Clock, ShieldCheck, CheckCircle2, ChevronRight, Wrench, Sparkles } from 'lucide-react';

interface DiagnosticToolProps {
  t: TranslationData;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({ t }) => {
  const [selectedDevice, setSelectedDevice] = useState<string>('dualsense');
  const [selectedIssue, setSelectedIssue] = useState<string>('drift');
  const [userCustomNote, setUserCustomNote] = useState<string>('');

  const currentDevice = t.diagnosticTool.devices.find((d) => d.id === selectedDevice) || t.diagnosticTool.devices[0];
  const currentIssue = t.diagnosticTool.issues.find((i) => i.id === selectedIssue) || t.diagnosticTool.issues[0];

  const getDeviceThumb = (id: string) => {
    switch (id) {
      case 'ps5':
        return consolePhotos.platforms.ps5;
      case 'ps4':
        return consolePhotos.platforms.ps4;
      case 'ps3':
        return consolePhotos.platforms.ps3;
      case 'xbox_series':
        return consolePhotos.platforms.xboxSeries;
      case 'xbox_one':
        return consolePhotos.platforms.xboxOne;
      case 'dualsense':
        return consolePhotos.heroDualSense;
      case 'dualshock4':
        return consolePhotos.platforms.ps4;
      case 'xbox_controller':
        return consolePhotos.heroXboxController;
      case 'pc':
      default:
        return consolePhotos.platforms.pcGaming;
    }
  };

  // Compose prefilled message for WhatsApp / Viber
  const messageBody = `Доброго дня! Звертаюся з сайту PPL Game Studio.
Пристрій: ${currentDevice.name}
Несправність: ${currentIssue.name}
${userCustomNote ? `Коментар: ${userCustomNote}` : ''}
Підкажіть, будь ласка, вартість та коли можна передати на обслуговування?`;

  const whatsappLink = `https://wa.me/380978071157?text=${encodeURIComponent(messageBody)}`;
  const viberLink = `viber://chat?number=%2B380978071157`;

  return (
    <section id="diagnostics" className="relative py-16 bg-[#03091e] border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a1a42] border border-[#d4af37]/30 text-[#ebd08b] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.diagnosticTool.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.diagnosticTool.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {t.diagnosticTool.subtitle}
          </p>
        </div>

        {/* 3-Step Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step 1 & 2: Selection Panel */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Device Selector with Real Photos */}
            <div className="p-6 rounded-2xl bg-[#050f28] border border-white/10 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#dfb76c] text-[#050e24] flex items-center justify-center text-xs font-black">
                    1
                  </span>
                  <span>{t.diagnosticTool.step1Title}</span>
                </h3>
                <span className="text-xs text-slate-400 font-medium">{t.diagnosticTool.selectDevicePrompt}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {t.diagnosticTool.devices.map((device) => {
                  const isSelected = selectedDevice === device.id;
                  const thumb = getDeviceThumb(device.id);

                  return (
                    <button
                      key={device.id}
                      type="button"
                      onClick={() => setSelectedDevice(device.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all text-xs flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-gradient-to-b from-[#0e245c] to-[#07153d] border-[#dfb76c] text-white shadow-[0_0_15px_rgba(223,183,108,0.25)]'
                          : 'bg-[#03091e] border-white/10 text-slate-300 hover:border-white/30 hover:bg-[#071333]'
                      }`}
                    >
                      <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-black/40 border border-white/10 relative">
                        <img src={thumb} alt={device.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] text-[#dfb76c] font-semibold block">{device.category}</span>
                        <span className="font-bold leading-tight block truncate">{device.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Issue Selector */}
            <div className="p-6 rounded-2xl bg-[#050f28] border border-white/10 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#dfb76c] text-[#050e24] flex items-center justify-center text-xs font-black">
                    2
                  </span>
                  <span>{t.diagnosticTool.step2Title}</span>
                </h3>
                <span className="text-xs text-slate-400 font-medium">{t.diagnosticTool.selectIssuePrompt}</span>
              </div>

              <div className="space-y-2">
                {t.diagnosticTool.issues.map((issue) => {
                  const isSelected = selectedIssue === issue.id;
                  return (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => setSelectedIssue(issue.id)}
                      className={`w-full p-3.5 rounded-xl text-left border transition-all flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#0d2258] to-[#081842] border-[#dfb76c] shadow-[0_0_15px_rgba(223,183,108,0.2)]'
                          : 'bg-[#03091e] border-white/10 text-slate-300 hover:border-white/30 hover:bg-[#071333]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#dfb76c]' : 'bg-slate-500'}`} />
                          <span>{issue.name}</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 pl-4">{issue.desc}</p>
                      </div>

                      <span className="text-[10px] text-[#ebd08b] font-mono font-medium px-2 py-0.5 rounded bg-black/40 border border-[#dfb76c]/30 flex-shrink-0">
                        {issue.typicalTime}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Optional custom note */}
              <div className="pt-2">
                <label className="block text-[11px] text-slate-400 mb-1">
                  Додаткові деталі (за бажанням):
                </label>
                <input
                  type="text"
                  value={userCustomNote}
                  onChange={(e) => setUserCustomNote(e.target.value)}
                  placeholder="Наприклад: 'правий стік веде вгору', або 'гніздо HDMI хитається'"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#03081a] border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#dfb76c]"
                />
              </div>
            </div>

          </div>

          {/* Step 3: Diagnostic Result & Quick Chat Box */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl p-6 bg-gradient-to-b from-[#081a44] to-[#040e2b] border border-[#dfb76c]/40 shadow-[0_15px_40px_rgba(3,10,30,0.8)] space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#dfb76c] text-[#050e24] flex items-center justify-center text-xs font-black">
                    3
                  </span>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    {t.diagnosticTool.step3Title}
                  </h3>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Попередня оцінка</span>
                </span>
              </div>

              {/* Selected Summary with Thumbnail */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#020718] border border-white/10 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 bg-black/40">
                    <img
                      src={getDeviceThumb(currentDevice.id)}
                      alt={currentDevice.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Пристрій:</span>
                      <span className="font-bold text-white font-mono">{currentDevice.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Симптом:</span>
                      <span className="font-bold text-[#ebd08b] text-right truncate max-w-[170px]">
                        {currentIssue.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Technical Solution */}
                <div className="p-4 rounded-xl bg-[#061438] border border-[#dfb76c]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#dfb76c] uppercase tracking-wide">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Рекомендоване рішення</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {currentIssue.recommendedSolution}
                  </p>
                </div>

                {/* Turnaround Time & Guarantee */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">{t.diagnosticTool.estimatedTime}</div>
                      <div className="font-bold text-white">{currentIssue.typicalTime}</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">Гарантія:</div>
                      <div className="font-bold text-white">Від майстерні</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Messenger CTA Buttons */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold text-slate-300">
                  {t.diagnosticTool.contactDirectly}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-[#25D366] hover:bg-[#20bd5a] text-[#051a0e] flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.diagnosticTool.sendViaWhatsApp}</span>
                </a>

                <a
                  href={viberLink}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-[#7360F2] hover:bg-[#6350e0] text-white flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(115,96,242,0.3)] transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.diagnosticTool.sendViaViber} (+380 97 807 11 57)</span>
                </a>

                <p className="text-[11px] text-center text-slate-400 italic">
                  Тільки текстові повідомлення на номер +380 97 807 11 57
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
