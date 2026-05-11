import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header({ 
  stage, 
  onLogoClick,
  currentRole
}: { 
  stage: number, 
  onLogoClick: () => void,
  currentRole: string | null
}) {
  const stageLabels = [
    'Discovery',
    'Inferred Intent',
    'Evaluation',
    'Strategic Analysis'
  ];

  const roleLabels: Record<string, string> = {
    designer: 'Designer',
    lead: 'Project Lead',
    organizer: 'Summit Organizer',
    audience: 'Audience'
  };

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
          {currentRole && (
            <div className={`flex items-center rounded-full px-3 py-1 gap-2 border ${
              currentRole === 'designer' 
                ? 'bg-slate-100/80 border-slate-200/50' 
                : 'bg-primary/10 border-primary/20'
            }`}>
              <div className={`w-2 h-2 rounded-full ${currentRole === 'designer' ? 'bg-secondary' : 'bg-primary'}`}></div>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                currentRole === 'designer' ? 'text-slate-600' : 'text-primary'
              }`}>
                {roleLabels[currentRole] || currentRole}
                {currentRole === 'designer' && stage > 0 && ` • Lvl ${stage}: ${stageLabels[stage - 1]}`}
              </span>
            </div>
          )}
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
