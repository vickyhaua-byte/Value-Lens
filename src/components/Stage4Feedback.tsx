import React, { useState } from 'react';
import { 
  TrendingDown, 
  TrendingUp, 
  AlertCircle, 
  Search, 
  Users, 
  Palette, 
  Wand2, 
  ChevronDown, 
  ChevronUp,
  Brush,
  MousePointer2,
  Package,
  ShieldCheck,
  ArrowLeft,
  Swords,
  Brain,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface Props {
  onBack: () => void;
  onReset: () => void;
  key?: React.Key;
}

const radarData = [
  { subject: 'Self-Direction', A: 85, B: 80 },
  { subject: 'Stimulation', A: 80, B: 70 },
  { subject: 'Hedonism', A: 50, B: 40 },
  { subject: 'Achievement', A: 95, B: 90 },
  { subject: 'Power', A: 90, B: 85 },
  { subject: 'Security', A: 70, B: 75 },
  { subject: 'Conformity', A: 55, B: 50 },
  { subject: 'Tradition', A: 40, B: 45 },
  { subject: 'Benevolence', A: 15, B: 30 },
  { subject: 'Universalism', A: 50, B: 65 },
];

export default function Stage4Feedback({ onBack, onReset }: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState<'value' | 'visual'>('value');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto w-full flex flex-col gap-8 py-8"
    >
      {/* Summary Banner */}
      <header className="relative rounded-3xl overflow-hidden bg-white shadow-2xl shadow-primary/5 border border-slate-100">
        <div className="h-40 w-full relative">
          <img 
            className="w-full h-full object-cover opacity-40" 
            src="https://picsum.photos/seed/abstract/1200/400" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
        </div>
        <div className="px-10 pb-10 -mt-12 relative z-10">
          <div className="inline-block px-5 py-1.5 bg-white rounded-full border border-primary/20 text-primary font-bold text-[10px] tracking-widest uppercase shadow-sm mb-4">
            Value Alignment Report
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight max-w-3xl leading-tight">
            Design reinforces technological authority, but <span className="text-primary italic">overemphasizes abstraction over accessibility.</span>
          </h1>
        </div>
      </header>

      {/* Analysis Tabs */}
      <div className="flex justify-center mb-4">
        <div className="flex bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50 w-full max-w-sm">
          <button 
            onClick={() => setActiveTab('value')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'value' 
                ? 'bg-white text-primary shadow-sm ring-1 ring-slate-200' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Brain className="w-4 h-4" />
            Value Analysis
          </button>
          <button 
            onClick={() => setActiveTab('visual')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'visual' 
                ? 'bg-white text-primary shadow-sm ring-1 ring-slate-200' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Palette className="w-4 h-4" />
            Visual Design
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'value' ? (
          <motion.div 
            key="value-tab"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Dimensional Conflict Map */}
              <section className="lg:col-span-8 bg-white rounded-3xl p-10 shadow-xl shadow-primary/5 border border-slate-100">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 block">Value Alignment Analysis</span>
                    <h2 className="text-2xl font-extrabold text-slate-800">Dimensional Conflict Map</h2>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-black text-primary tracking-tighter">78%</div>
                    <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Alignment Score</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="relative w-72 h-72 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                        <PolarAngleAxis 
                          dataKey="subject" 
                          tick={{ fill: '#94a3b8', fontSize: 9, fontWeight: 900 }}
                        />
                        <Radar
                          name="Intended"
                          dataKey="B"
                          stroke="#3366ff"
                          strokeWidth={2}
                          strokeDasharray="4 4"
                          fill="none"
                        />
                        <Radar
                          name="Expressed"
                          dataKey="A"
                          stroke="#3366ff"
                          strokeWidth={3}
                          fill="#3366ff"
                          fillOpacity={0.15}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-inner">
                      <p className="text-sm font-medium text-slate-600 leading-relaxed">
                        <span className="text-primary font-black uppercase text-[10px] tracking-widest mr-2">Insight:</span> 
                        The design strongly reinforces technological authority and analytical precision, but slightly overemphasizes abstraction, creating a sense of distance rather than accessibility.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Intended Focus</div>
                        <div className="text-sm font-extrabold text-slate-800">Achievement</div>
                      </div>
                      <div className="p-5 bg-white rounded-2xl border border-primary/10 shadow-sm">
                        <div className="text-[9px] font-black uppercase tracking-widest text-primary mb-1">Actual Focus</div>
                        <div className="text-sm font-extrabold text-slate-800">Achievement (High)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-slate-100 h-full">
                  <h3 className="text-lg font-extrabold mb-8 text-slate-800">Critical Gaps</h3>
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingDown className="text-primary w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Under-Expressed</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-1.5 bg-primary/5 text-primary text-[10px] font-black rounded-full border border-primary/10">Universalism (-10%)</span>
                        <span className="px-4 py-1.5 bg-primary/5 text-primary text-[10px] font-black rounded-full border border-primary/10">Benevolence (-10%)</span>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="text-secondary w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Over-Expressed</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-1.5 bg-secondary/5 text-secondary text-[10px] font-black rounded-full border border-secondary/10">Achievement (+5%)</span>
                        <span className="px-4 py-1.5 bg-secondary/5 text-secondary text-[10px] font-black rounded-full border border-secondary/10">Stimulation (+10%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Strategic Suggestions */}
            <section>
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-2xl font-extrabold text-slate-800">Strategic Suggestions</h2>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    icon: Users, 
                    title: "Improve Universalism", 
                    desc: "Introduce more familiar visual anchors (e.g. human scale reference) and simplify structural complexity.",
                    color: "primary"
                  },
                  { 
                    icon: Brain, 
                    title: "Balance Achievement", 
                    desc: "Reduce excessive visual density in the center and create more breathing space to avoid cognitive overload.",
                    color: "secondary"
                  },
                  { 
                    icon: Wand2, 
                    title: "Enhance Accessibility", 
                    desc: "Add softer visual transitions or gradients and reduce overly rigid geometric dominance.",
                    color: "primary"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -8 }}
                    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-${item.color}/5 flex items-center justify-center mb-6 text-${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-extrabold mb-3 text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div 
            key="visual-tab"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-8"
          >
            <div className="max-w-4xl mx-auto w-full">
              <div className="bg-slate-900 text-white rounded-[40px] p-12 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <Search className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-secondary">Visual Diagnostics</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-10">
                      <div className="space-y-6">
                        <AlertCircle className="text-primary w-10 h-10" />
                        <h4 className="text-2xl font-black tracking-tight leading-tight">
                          Compositional <br /> 
                          <span className="text-primary">Over-Complexity</span>
                        </h4>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">
                          Central composition is visually strong but overly dense, creating a singular focal point that lacks hierarchical relief.
                        </p>
                      </div>

                      <div className="h-px bg-white/10 w-full" />

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Palette className="text-primary w-5 h-5" />
                          <span className="text-sm font-bold">Authority vs Warmth</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          Typography reinforces authority but significantly reduces visual warmth, distancing the observer.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/5 space-y-6">
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Observation Nodes</h5>
                      <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shadow-[0_0_10px_rgba(51,102,255,0.5)]"></div>
                          <span className="text-xs font-semibold text-slate-300 leading-relaxed">Lack of visual entry points for non-expert viewers</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shadow-[0_0_10px_rgba(0,214,143,0.5)]"></div>
                          <span className="text-xs font-semibold text-slate-300 leading-relaxed">High geometric dominance suppresses emotional engagement</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                          <span className="text-xs font-semibold text-slate-300 leading-relaxed">Symmetry creates a formal "frozen" state instead of dynamic flow</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Search className="absolute -right-12 -bottom-12 w-64 h-64 text-white/[0.03] pointer-events-none" />
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-30 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Feedback Accordion */}
      <section>
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-between p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
              <Brain className="w-5 h-5" />
            </div>
            <span className="text-lg font-extrabold text-slate-700">View detailed feedback from AI agents</span>
          </div>
          {showDetails ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
        </button>

        <AnimatePresence>
          {showDetails && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { role: "Visual Designer", icon: Brush, color: "primary", text: "The composition is highly sophisticated and visually striking. However, the density and symmetry create a somewhat overwhelming focal point." },
                  { role: "UX Designer", icon: MousePointer2, color: "secondary", text: "The design assumes a highly literate audience. While appropriate for experts, it lacks entry points for broader understanding." },
                  { role: "Product Manager", icon: Package, color: "primary", text: "The cover effectively communicates authority and cutting-edge research. However, it may limit reach by appearing too abstract." },
                  { role: "Value Alignment Agent", icon: ShieldCheck, color: "slate-800", text: "The design successfully expresses achievement and innovation, but shifts away from universal accessibility." }
                ].map((agent, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group">
                    <div className={`text-[10px] font-black uppercase text-${agent.color} mb-4 tracking-[0.2em]`}>{agent.role}</div>
                    <p className="text-xs font-medium leading-relaxed italic text-slate-500">"{agent.text}"</p>
                    <agent.icon className="absolute -right-4 -top-4 w-20 h-20 text-slate-900/[0.03] group-hover:text-slate-900/[0.08] transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Final Insight Section */}
      <section className="bg-primary/5 rounded-3xl p-10 border border-primary/10">
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-4">Final Insight: This design does not fail — it overcommits.</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              By maximizing signals of intelligence and complexity, it unintentionally narrows its audience. The system it depicts feels powerful, but not necessarily approachable. The question is no longer whether it communicates expertise, but whether it leaves room for understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Controls */}
      <div className="flex flex-col items-center gap-8 pt-16 border-t border-slate-100">
        <div className="flex gap-2 w-32">
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
          <div className="h-1 flex-1 bg-primary rounded-full"></div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-14 h-14 rounded-full border border-slate-200 bg-white text-slate-400 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={onReset}
            className="px-12 py-4 value-gradient rounded-full text-white font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group uppercase tracking-widest"
          >
            <span>Upload New Version</span>
            <Swords className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onBack}
            className="px-10 py-4 bg-white border border-slate-200 text-slate-600 rounded-full font-bold text-sm shadow-sm hover:border-primary hover:text-primary transition-all uppercase tracking-widest"
          >
            Evaluate Again
          </button>
        </div>
        <p className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase opacity-70">Stage 4 of 4: Strategic Analysis</p>
      </div>
    </motion.div>
  );
}
