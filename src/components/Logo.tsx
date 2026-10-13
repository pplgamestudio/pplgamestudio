import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showSubtitle = true }) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Golden Gamepad Graphic Icon */}
      <div className="relative flex-shrink-0">
        <svg
          className={`${isSm ? 'w-8 h-8' : isLg ? 'w-14 h-14' : 'w-10 h-10'} transition-transform duration-300 hover:scale-105`}
          viewBox="0 0 100 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="35%" stopColor="#E5B95C" />
              <stop offset="70%" stopColor="#C6922D" />
              <stop offset="100%" stopColor="#FFDE82" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Gamepad body outline */}
          <path
            d="M24 15 C34 14, 42 22, 50 22 C58 22, 66 14, 76 15 C88 17, 95 28, 92 48 C90 60, 78 68, 68 56 L62 48 C58 43, 42 43, 38 48 L32 56 C22 68, 10 60, 8 48 C5 28, 12 17, 24 15 Z"
            stroke="url(#goldGrad)"
            strokeWidth="4"
            strokeLinejoin="round"
            className="filter drop-shadow-[0_0_8px_rgba(229,185,92,0.6)]"
          />

          {/* D-Pad on left */}
          <path
            d="M24 28 V38 M19 33 H29"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Action buttons on right */}
          <circle cx="76" cy="28" r="2.5" fill="url(#goldGrad)" />
          <circle cx="70" cy="33" r="2.5" fill="url(#goldGrad)" />
          <circle cx="82" cy="33" r="2.5" fill="url(#goldGrad)" />
          <circle cx="76" cy="38" r="2.5" fill="url(#goldGrad)" />

          {/* Center brand dot / emblem */}
          <circle cx="50" cy="33" r="3" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-extrabold tracking-wider ${
              isSm ? 'text-lg' : isLg ? 'text-2xl' : 'text-xl'
            } gold-text-gradient font-sans uppercase`}
          >
            PPL
          </span>
          <span
            className={`font-semibold tracking-widest ${
              isSm ? 'text-xs' : isLg ? 'text-sm' : 'text-xs'
            } text-[#dfb76c] uppercase`}
          >
            GAME STUDIO
          </span>
        </div>

        {showSubtitle && (
          <span className="text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-slate-400 font-medium">
            Console Repair &amp; Service
          </span>
        )}
      </div>
    </div>
  );
};
