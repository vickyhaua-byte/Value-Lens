import React from 'react';
import { Map, Users, History, ArrowLeft, Swords } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  onNext: () => void;
  key?: React.Key;
}

export default function Stage1Discovery({ onNext }: Props) {
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
          Describe Your <span className="text-primary italic">Project</span>
        </h1>
        <p className="text-slate-500 text-base font-medium max-w-lg mx-auto leading-relaxed">
          Share your vision and define the objectives of your project.
        </p>
      </header>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white rounded-2xl p-8 border border-primary/10 shadow-lg shadow-primary/5 relative group transition-all hover:shadow-xl">
          <div className="absolute -top-4 left-8 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-md transform -rotate-6 group-hover:rotate-0 transition-transform">
            <Map className="w-5 h-5" />
          </div>
          <div className="mb-4 pt-2">
            <h3 className="text-lg font-bold text-slate-800">Design Document</h3>
            <p className="text-slate-400 text-xs font-medium">Visual asset for evaluation</p>
          </div>
          
          <div className="relative group/file">
            <div className="w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-4 flex items-center gap-4 transition-all group-hover/file:border-primary/30">
              <div className="w-20 h-28 rounded-lg overflow-hidden shadow-md border border-white shrink-0 relative">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000" 
                  alt="Nature Cover" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/nature-science/200/300";
                  }}
                />
                <div className="absolute inset-0 bg-black/5 group-hover/file:bg-transparent transition-colors"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-700 truncate">nature_cover_final.png</p>
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">3.4 MB • PNG Image</p>
                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 hover:text-primary hover:border-primary transition-all">
                    Replace
                  </button>
                  <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 hover:text-red-500 hover:border-red-200 transition-all">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg relative group transition-all hover:shadow-xl">
          <div className="absolute -top-4 left-8 w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center text-white shadow-md transform rotate-6 group-hover:rotate-0 transition-transform">
            <Users className="w-5 h-5" />
          </div>
          <div className="mb-4 pt-2">
            <h3 className="text-lg font-bold text-slate-800">Target Audience</h3>
            <p className="text-slate-400 text-xs font-medium">Who is the primary audience for this design?</p>
          </div>
          <textarea 
            className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all min-h-[120px] placeholder:text-slate-300 resize-none" 
            placeholder="Who is the target for this project?"
            defaultValue="Researchers, scientists, AI engineers, and academic readers with strong analytical backgrounds."
          />
        </section>

        <section className="md:col-span-2 bg-white rounded-2xl p-8 border border-slate-100 shadow-lg relative group transition-all hover:shadow-xl">
          <div className="absolute -top-4 left-8 w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform">
            <History className="w-5 h-5" />
          </div>
          <div className="mb-4 pt-2">
            <h3 className="text-lg font-bold text-slate-800">Project Description</h3>
            <p className="text-slate-400 text-xs font-medium">What are the core objectives of your project?</p>
          </div>
          <textarea 
            className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all min-h-[100px] placeholder:text-slate-300 resize-none" 
            placeholder="Tell the story of how it all began..."
            defaultValue="This is a cover for a leading scientific publication, focusing on AI evaluation, interpretability, and predictive systems. It should communicate authority, innovation, and intellectual depth."
          />
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
          <button className="w-14 h-14 rounded-full border border-slate-200 bg-white text-slate-400 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={onNext}
            className="px-12 py-4 value-gradient rounded-full text-white font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group uppercase tracking-widest"
          >
            <span>Generate Value Intent</span>
            <Swords className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <p className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase opacity-70">Stage 1 of 4: The Discovery</p>
      </div>
    </motion.div>
  );
}
