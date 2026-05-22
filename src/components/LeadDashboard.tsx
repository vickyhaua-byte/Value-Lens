import React from 'react';
import { motion } from 'motion/react';
import { FileText, Presentation, Layout, ArrowRight, Share2, Users, History, Link as LinkIcon, Download } from 'lucide-react';

interface Props {
  onContentSynthesis: () => void;
  onAssetGeneration: () => void;
  onBack: () => void;
  key?: React.Key;
}

export default function LeadDashboard({ onContentSynthesis, onAssetGeneration, onBack }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl w-full flex flex-col items-center gap-10 py-10"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-secondary/20 text-secondary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Project Lead Workspace
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Value <span className="text-secondary italic">Amplification</span> Hub
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          Synthesize your project achievements into resonant narratives and production-ready TAB assets.
        </p>
      </header>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Branch 1: Knowledge Translation */}
        <section className="group bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden bg-linear-to-br from-white to-slate-50/50">
          <div className="absolute -top-5 left-10 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
            <FileText className="w-6 h-6" />
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">Knowledge Translation</h3>
            <p className="text-slate-400 text-sm font-medium">Transform raw data into audience-specific drafts</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <History className="w-5 h-5 text-secondary" />
              <div className="flex-1">
                <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Input</div>
                <div className="text-xs font-bold text-slate-700 leading-tight">Research Papers, Project Data, Historical Assets</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Users className="w-5 h-5 text-secondary" />
              <div className="flex-1">
                <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Target</div>
                <div className="text-xs font-bold text-slate-700 leading-tight">Booth Audience, Leads, Summit Presentation</div>
              </div>
            </div>
          </div>

          <button 
            onClick={onContentSynthesis}
            className="w-full py-5 bg-primary rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-primary/95 transition-all flex items-center justify-center gap-3 group/btn cursor-pointer"
          >
            <span>Start Synthesis</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform shrink-0" />
          </button>
        </section>

        {/* Branch 2: Asset Generator */}
        <section className="group bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-slate-200/50 transition-all relative overflow-hidden bg-linear-to-br from-white to-slate-50/50">
          <div className="absolute -top-5 left-10 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
            <Layout className="w-6 h-6 animate-pulse" />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-tight">Asset Generator</h3>
            <p className="text-slate-400 text-sm font-medium">Map content onto official templates for production</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-2">
              <Presentation className="w-8 h-8 text-primary" />
              <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Deck Templates</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-2">
              <Share2 className="w-8 h-8 text-primary" />
              <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Poster Layouts</span>
            </div>
          </div>

          <button 
            onClick={onAssetGeneration}
            className="w-full py-5 bg-primary rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-primary/95 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group/btn cursor-pointer"
          >
            <span>Fabricate Assets</span>
            <Layout className="w-4 h-4 group-hover/btn:animate-pulse shrink-0" />
          </button>
        </section>
      </div>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 rotate-180 shrink-0" />
          <span>Return to Entry</span>
        </button>
      </footer>
    </motion.div>
  );
}
