import React from 'react';
import { Sparkles, Brain, ArrowLeft, Swords, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface Props {
  onNext: () => void;
  onBack: () => void;
  key?: React.Key;
}

const data = [
  { subject: 'Self-Direction', A: 80, fullMark: 100 },
  { subject: 'Stimulation', A: 70, fullMark: 100 },
  { subject: 'Hedonism', A: 40, fullMark: 100 },
  { subject: 'Achievement', A: 90, fullMark: 100 },
  { subject: 'Power', A: 85, fullMark: 100 },
  { subject: 'Security', A: 75, fullMark: 100 },
  { subject: 'Conformity', A: 50, fullMark: 100 },
  { subject: 'Tradition', A: 45, fullMark: 100 },
  { subject: 'Benevolence', A: 30, fullMark: 100 },
  { subject: 'Universalism', A: 65, fullMark: 100 },
];

export default function Stage3Results({ onNext, onBack }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="max-w-4xl w-full flex flex-col items-center gap-8 py-8"
    >
      <header className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Inferred Design Intent
        </h1>
        <p className="text-slate-500 text-lg font-medium">
          AI-powered analysis of your project's core emotional resonance.
        </p>
      </header>

      <section className="w-full max-w-2xl">
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 text-left relative overflow-hidden border border-slate-100">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <Sparkles className="text-primary mb-4 w-10 h-10 fill-current" />
            <p className="text-2xl md:text-3xl font-headline font-bold text-slate-900 leading-tight tracking-tight">
              "This project aims to communicate scientific authority, technological advancement, and analytical rigor, while maintaining a sense of clarity and intellectual trust."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Brain className="text-primary w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Synthesized from user input architecture
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-2xl">
        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 space-y-8 text-left border border-slate-100">
          <div className="flex justify-between items-end">
            <h2 className="text-xl font-extrabold text-slate-900">Value Map Alignment</h2>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Intensity Metric</span>
          </div>
          
          <div className="h-72 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#64748b', fontSize: 10, fontWeight: 800 }}
                />
                <Radar
                  name="Intent"
                  dataKey="A"
                  stroke="#3366ff"
                  strokeWidth={3}
                  fill="#3366ff"
                  fillOpacity={0.15}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center pt-4 border-t border-slate-50">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-primary shadow-sm shadow-primary/30"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Predicted Intent</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-2xl">
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 text-left border border-slate-100">
          <h2 className="text-xl font-extrabold text-slate-900 mb-4">Interpretation</h2>
          <p className="text-slate-600 leading-relaxed">
            The design intent emphasizes rationality, authority, and scientific rigor, with limited focus on emotional or human-centered values.
          </p>
        </div>
      </section>

      <div className="flex flex-col items-center gap-8 w-full pt-8 border-t border-slate-100">
        <div className="flex gap-2 w-32">
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-14 h-14 rounded-full border border-slate-200 bg-white text-slate-400 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={onNext}
            className="px-12 py-4 value-gradient rounded-full text-white font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group uppercase tracking-widest"
          >
            <span>Continue to Evaluation</span>
            <Swords className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-4 bg-white border border-slate-200 text-slate-600 rounded-full font-bold text-sm shadow-sm hover:border-primary hover:text-primary transition-all uppercase tracking-widest flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            <span>Re-Evaluate</span>
          </button>
        </div>
        <p className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase opacity-70">Stage 2 of 4: Inferred Intent</p>
      </div>
    </motion.div>
  );
}
