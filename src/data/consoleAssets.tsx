import React from 'react';

export const consolePhotos = {
  // Hero Real Visuals
  heroPlayStation5: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=85',
  heroXboxSeriesX: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=1000&q=85',
  heroDualSense: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
  heroXboxController: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=800&q=80',

  // Repair / Workshop / Teardown
  gamepadTeardown: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80',
  pcbRepair: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=1000&q=80',
  microSoldering: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
  workshopBench: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1000&q=80',

  // Platforms Gallery Real Photos
  platforms: {
    ps5: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80',
    ps4: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=600&q=80',
    ps3: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    ps2: 'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?auto=format&fit=crop&w=600&q=80',
    ps1: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    xboxSeries: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=600&q=80',
    xboxOne: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=600&q=80',
    xbox360: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=600&q=80',
    xboxClassic: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=600&q=80',
    pcGaming: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80',
  },
};

// Official PlayStation Vector Logo (Sony PS Mark)
export const PlayStationLogo: React.FC<{ className?: string; colorMode?: 'gold' | 'color' | 'white' }> = ({
  className = 'w-8 h-8',
  colorMode = 'gold',
}) => {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="psGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF199" />
          <stop offset="50%" stopColor="#E5B95C" />
          <stop offset="100%" stopColor="#C6922D" />
        </linearGradient>
      </defs>

      {/* Upright P */}
      <path
        d="M37 6 C28 6 22 13 22 22 v52 l18 -8 V24 c0 -3.5 2.5 -6 6 -6 s6 2.5 6 6 v30 l18 -8 V22 C70 13 64 6 55 6 H37 Z"
        fill={colorMode === 'gold' ? 'url(#psGold)' : colorMode === 'color' ? '#003791' : '#FFFFFF'}
      />

      {/* Base S Shadow */}
      <path
        d="M14 68 l30 13 v-10 l-22 -9 c-3 -1.2 -4 -0.5 -5 0.5 c-1 1 -1.5 2.5 -1 4 Z M86 68 c1 -1.5 0.5 -3 -1 -4 c-1 -1 -2 -1.7 -5 -0.5 l-22 9 v10 l30 -13 Z"
        fill={colorMode === 'gold' ? 'url(#psGold)' : colorMode === 'color' ? '#0070D1' : '#E2E8F0'}
      />
      <path
        d="M44 81 v9 l20 -9 c3 -1.5 4 -4 3 -6.5 c-1 -2.5 -3 -4 -6 -4 H50 l-6 2.5 v8 Z M26 71 c-3 0 -5 1.5 -6 4 c-1 2.5 0 5 3 6.5 l20 9 v-9 l-6 -2.5 H26 Z"
        fill={colorMode === 'gold' ? 'url(#psGold)' : colorMode === 'color' ? '#2E6DB4' : '#CBD5E1'}
      />
    </svg>
  );
};

// Official Xbox Vector Logo (Microsoft Xbox Sphere)
export const XboxLogo: React.FC<{ className?: string; colorMode?: 'gold' | 'color' | 'white' }> = ({
  className = 'w-8 h-8',
  colorMode = 'gold',
}) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="xboxGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF199" />
          <stop offset="50%" stopColor="#E5B95C" />
          <stop offset="100%" stopColor="#C6922D" />
        </linearGradient>
        <radialGradient id="xboxSphere" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="70%" stopColor="#107C10" />
          <stop offset="100%" stopColor="#0B520B" />
        </radialGradient>
      </defs>

      {/* Outer Circle Sphere */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill={colorMode === 'gold' ? 'url(#xboxGold)' : colorMode === 'color' ? 'url(#xboxSphere)' : '#FFFFFF'}
      />

      {/* The iconic 3D X Cutout */}
      <path
        d="M17 19 C31 35, 43 45, 50 51 C57 45, 69 35, 83 19 C73 11, 62 6, 50 6 C38 6, 27 11, 17 19 Z M17 81 C31 65, 43 55, 50 49 C57 55, 69 65, 83 81 C73 89, 62 94, 50 94 C38 94, 27 89, 17 81 Z M9 33 C13 38, 18 43, 23 47 C28 50, 34 52, 42 50 C34 48, 28 50, 23 53 C18 57, 13 62, 9 67 C6 62, 4 56, 4 50 C4 44, 6 38, 9 33 Z M91 33 C87 38, 82 43, 77 47 C72 50, 66 52, 58 50 C66 48, 72 50, 77 53 C82 57, 87 62, 91 67 C94 62, 96 56, 96 50 C96 44, 94 38, 91 33 Z"
        fill="#020716"
      />
    </svg>
  );
};

// Official PC / Windows / Rig Logo
export const PcLogo: React.FC<{ className?: string; colorMode?: 'gold' | 'color' | 'white' }> = ({
  className = 'w-8 h-8',
  colorMode = 'gold',
}) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pcGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF199" />
          <stop offset="50%" stopColor="#E5B95C" />
          <stop offset="100%" stopColor="#C6922D" />
        </linearGradient>
      </defs>

      {/* 4 Windows / Gaming Tiles */}
      <path
        d="M8 18 L44 13 V46 H8 Z"
        fill={colorMode === 'gold' ? 'url(#pcGold)' : colorMode === 'color' ? '#0078D4' : '#FFFFFF'}
      />
      <path
        d="M48 12 L92 6 V46 H48 Z"
        fill={colorMode === 'gold' ? 'url(#pcGold)' : colorMode === 'color' ? '#0078D4' : '#FFFFFF'}
      />
      <path
        d="M8 52 H44 V85 L8 80 Z"
        fill={colorMode === 'gold' ? 'url(#pcGold)' : colorMode === 'color' ? '#0078D4' : '#FFFFFF'}
      />
      <path
        d="M48 52 H92 V92 L48 86 Z"
        fill={colorMode === 'gold' ? 'url(#pcGold)' : colorMode === 'color' ? '#0078D4' : '#FFFFFF'}
      />
    </svg>
  );
};
