import React from 'react';
import { Map, Users, History, ArrowLeft, Swords, Plus, FileText, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  onNext: () => void;
  onBack: () => void;
  key?: React.Key;
}

export default function Stage1Discovery({ onNext, onBack }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl w-full flex flex-col items-center gap-8"
    >
      <header className="text-center space-y-4">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-primary/20 text-primary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Current Objective
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Analyze Your <span className="text-primary italic">Manuscripts</span>
        </h1>
        <p className="text-slate-500 text-base font-medium max-w-lg mx-auto leading-relaxed">
          Upload and organize your design fragments to define the cognitive landscape.
        </p>
      </header>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg relative group transition-all hover:shadow-xl">
          <div className="absolute -top-4 left-8 w-10 h-10 bg-value-gold rounded-xl flex items-center justify-center text-white shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="mb-4 pt-2">
            <h3 className="text-lg font-bold text-slate-800">Summit Essence</h3>
            <p className="text-slate-400 text-xs font-medium">Annual baseline strategy</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 block">Annual Theme</label>
              <input 
                type="text" 
                defaultValue="Transformation & Beyond"
                className="w-full bg-slate-50 border-none rounded-lg p-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 block">Slogan</label>
              <input 
                type="text" 
                defaultValue="Empowering Global Tech Leadership"
                className="w-full bg-slate-50 border-none rounded-lg p-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg relative group transition-all hover:shadow-xl flex flex-col">
          <div className="absolute -top-4 left-8 w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white shadow-md transform rotate-3 group-hover:rotate-0 transition-transform">
            <History className="w-5 h-5" />
          </div>
          <div className="mb-4 pt-2">
            <h3 className="text-lg font-bold text-slate-800">Project Strategy</h3>
            <p className="text-slate-400 text-xs font-medium">Core objectives for the cognitive stack</p>
          </div>
          <textarea 
            className="flex-1 w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all min-h-[140px] placeholder:text-slate-300 resize-none" 
            placeholder="Tell the story of how it all began..."
            defaultValue="This collection of manuscripts represents the visual identity for TAB 2026. The goal is to evaluate which expression best aligns with our values of innovation, analytical rigor, and global tech leadership."
          />
        </section>

        <section className="bg-white rounded-2xl p-6 border border-primary/10 shadow-lg shadow-primary/5 relative group transition-all hover:shadow-xl">
          <div className="absolute -top-4 left-8 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-md transform -rotate-6 group-hover:rotate-0 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
          <div className="mb-4 pt-2 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Manuscripts</h3>
              <p className="text-slate-400 text-xs font-medium">Fragments for comparison</p>
            </div>
            <button className="p-1.5 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all shadow-sm">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            {/* Fragment 1 */}
            <div className="group/file w-full bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-3 transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm">
              <div className="w-12 h-16 rounded shadow-sm border border-white shrink-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000" 
                  alt="Fragment 1" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-slate-700 truncate">tech_v1.png</p>
                <span className="px-1.5 py-0.5 bg-secondary/10 text-secondary text-[7px] font-black uppercase rounded mt-1 inline-block">Draft A</span>
              </div>
            </div>

            {/* Fragment 2 */}
            <div className="group/file w-full bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center gap-3 transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm">
              <div className="w-12 h-16 rounded shadow-sm border border-white shrink-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Fragment 2" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-slate-700 truncate">abstract_node.jpg</p>
                <span className="px-1.5 py-0.5 bg-primary/10 text-primary text-[7px] font-black uppercase rounded mt-1 inline-block">Draft B</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center gap-6 w-full pt-4">
        <div className="flex gap-2 w-32">
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
          <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
          <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-14 h-14 rounded-full border border-slate-200 bg-white text-slate-400 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm group"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onNext}
            className="px-12 py-4 value-gradient rounded-full text-white font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group uppercase tracking-widest"
          >
            <span>Analyze Cognitive Value</span>
            <Swords className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <p className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase opacity-70">Stage 1 of 4: Fragment Discovery</p>
      </div>
    </motion.div>
  );
}
