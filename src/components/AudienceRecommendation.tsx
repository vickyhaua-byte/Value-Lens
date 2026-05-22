import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Download, 
  Map as MapIcon, 
  Sparkles, 
  Clock, 
  Eye,
  Route,
  Navigation,
  ExternalLink,
  QrCode
} from 'lucide-react';
import MicrosoftTabMeetingGraphic from './MicrosoftTabMeetingGraphic';

interface Props {
  data: any;
  onBack: () => void;
}

export default function AudienceRecommendation({ data, onBack }: Props) {
  const recommendations = {
    morning: [
      { time: '10:00 AM', title: 'Fundamental Research Foundation', loc: 'Rm 801' },
      { time: '11:40 AM', title: 'Agentic Reasoning Deep-Dive', loc: 'Rm 1102' }
    ],
    booths: [
      { id: 'B2', title: 'Neural Systems Alpha', focus: 'Agentic Infrastructure' },
      { id: 'C9', title: 'Synergy Viz Hub', focus: 'Multimodal Interfaces' },
      { id: 'D4', title: 'Security Enclave', focus: 'Privacy Preservation' },
      { id: 'E1', title: 'Theory Lab Demos', focus: 'Geometric Deep Learning' },
      { id: 'A7', title: 'MSRA Heritage', focus: 'Historical Milestones' }
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-6xl w-full flex flex-col items-center gap-10 py-8"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-primary/20 text-primary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Audience Workspace
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Your TAB <span className="text-primary italic">Concierge</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          Tailored for {data?.group || 'Machine Learning'} // Focus: {data?.interest || 'Agentic Reasoning'}
        </p>
      </header>

      {/* The Unified Recommendation Image/Card */}
      <div className="w-full bg-slate-100 p-1 rounded-[48px] shadow-2xl relative border border-slate-200/85 overflow-hidden max-w-5xl">
        <div className="bg-white rounded-[44px] overflow-hidden flex flex-col md:flex-row aspect-video md:aspect-auto min-h-[600px]">
          
          {/* Left Panel: Recommendations */}
          <div className="flex-[4] p-12 flex flex-col">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
               <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                  <Sparkles className="w-6 h-6" />
               </div>
               <div>
                  <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-1">Morning Selection</div>
                  <div className="text-xl font-black text-slate-900 tracking-tight">Priority Focus Sessions</div>
               </div>
            </div>

            <div className="space-y-6 flex-1">
               {recommendations.morning.map((m, i) => (
                 <div key={i} className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-primary transition-all">
                    <div className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm">
                       <Clock className="w-4 h-4 text-slate-400 mb-1" />
                       <span className="text-[8px] font-black text-slate-900">{m.time}</span>
                    </div>
                    <div>
                       <h4 className="text-sm font-black text-slate-800 mb-1 tracking-tight">{m.title}</h4>
                       <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <Navigation className="w-3 h-3" />
                          {m.loc}
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="flex flex-col">
                 <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Personalized ID</span>
                 <span className="text-xs font-black text-slate-900">0x92f...ABC_2026</span>
              </div>
              <QrCode className="w-12 h-12 text-slate-200" />
            </div>
          </div>

          {/* Right Panel: Afternoon Booth Map */}
          <div className="flex-[6] bg-slate-50 border-l border-slate-100 p-12 relative overflow-hidden flex flex-col text-slate-800">
             <div className="absolute top-0 right-0 w-[500px] h-full opacity-10 pointer-events-none">
                 <div className="w-full h-full bg-linear-to-bl from-primary via-secondary to-transparent blur-[80px]" />
             </div>

             <div className="relative z-10 flex items-center justify-between mb-10 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-4">
                   <Route className="w-8 h-8 text-primary" />
                   <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Afternoon Circuit</div>
                      <div className="text-xl font-black text-slate-900 tracking-tight">Exhibition Strategy Map</div>
                   </div>
                </div>
                <div className="px-5 py-2 bg-slate-100 rounded-xl border border-slate-200 text-slate-700 text-[8px] font-black uppercase tracking-widest">
                   5 Interlinked Booths
                </div>
             </div>

             <div className="relative z-10 flex-1 grid grid-cols-2 gap-4">
                {recommendations.booths.map((b, i) => (
                  <div key={b.id} className="p-5 bg-white border border-slate-150 rounded-2xl flex items-start gap-4 hover:bg-slate-50 hover:border-primary/40 transition-all cursor-pointer group shadow-sm hover:shadow-md">
                     <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-[10px] font-black group-hover:scale-110 transition-transform">
                        {b.id}
                     </span>
                     <div>
                        <div className="text-xs font-black text-slate-800 mb-1 group-hover:text-primary transition-colors">{b.title}</div>
                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{b.focus}</div>
                     </div>
                  </div>
                ))}
                
                {/* Visual Map Connector Simulated */}
                <div className="col-span-2 mt-4 p-4 border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center text-slate-400">
                   <div className="flex flex-col items-center gap-2">
                     <MapIcon className="w-12 h-12 text-slate-300" />
                     <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-400">Interactive Floor Plan Injected</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={onBack}
          className="px-12 py-5 bg-white border border-slate-200 text-slate-500 rounded-2xl font-bold text-xs shadow-sm hover:border-primary hover:text-primary transition-all uppercase tracking-[0.2em] flex items-center gap-3"
        >
          <RefreshCwIcon className="w-4 h-4" />
          <span>Update Interests</span>
        </button>
        <button 
          className="px-16 py-5 value-gradient rounded-2xl text-white font-black text-xs shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-4 group uppercase tracking-[0.2em]"
        >
          <span>Save Map to Mobile</span>
          <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors text-xs font-black uppercase tracking-[0.2em]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Audience Hub</span>
        </button>
      </footer>
    </motion.div>
  );
}

function RefreshCwIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}
