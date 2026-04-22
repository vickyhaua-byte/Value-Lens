import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header({ stage, onLogoClick }: { stage: number, onLogoClick: () => void }) {
  const stageLabels = [
    'Discovery',
    'Inferred Intent',
    'Evaluation',
    'Strategic Analysis'
  ];

  return (
    <nav className="w-full shrink-0 sticky top-0 bg-white/70 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-8">
          <button 
            onClick={onLogoClick}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>
            <span className="text-lg font-bold tracking-tight text-primary font-headline">Value Lens</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-slate-100/80 backdrop-blur rounded-full px-3 py-1 gap-2 border border-slate-200/50">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
              Lvl {stage}: {stageLabels[stage - 1]}
            </span>
          </div>
          <button className="w-8 h-8 bg-value-gold text-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 fill-current" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
            <img 
              alt="User Avatar" 
              src="https://picsum.photos/seed/user/100/100" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
