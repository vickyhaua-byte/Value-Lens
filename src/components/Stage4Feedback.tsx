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
  { subject: 'Self-Direction', DraftA: 85, DraftB: 75, Target: 80 },
  { subject: 'Stimulation', DraftA: 80, DraftB: 90, Target: 85 },
  { subject: 'Hedonism', DraftA: 50, DraftB: 45, Target: 40 },
  { subject: 'Achievement', DraftA: 95, DraftB: 85, Target: 90 },
  { subject: 'Power', DraftA: 90, DraftB: 80, Target: 85 },
  { subject: 'Security', DraftA: 70, DraftB: 85, Target: 75 },
  { subject: 'Conformity', DraftA: 55, DraftB: 65, Target: 50 },
  { subject: 'Tradition', DraftA: 40, DraftB: 60, Target: 45 },
  { subject: 'Benevolence', DraftA: 15, DraftB: 40, Target: 30 },
  { subject: 'Universalism', DraftA: 50, DraftB: 70, Target: 60 },
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
          <div className="absolute inset-0 flex">
            <img 
              className="w-1/2 h-full object-cover opacity-20 border-r border-white/50" 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000" 
              referrerPolicy="no-referrer"
            />
            <img 
              className="w-1/2 h-full object-cover opacity-20" 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
        </div>
        <div className="px-10 pb-10 -mt-12 relative z-10">
          <div className="inline-block px-5 py-1.5 bg-white rounded-full border border-primary/20 text-primary font-bold text-[10px] tracking-widest uppercase shadow-sm mb-4">
            TAB 2026 Comparative Analysis
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight max-w-3xl leading-tight">
            Draft A reinforces <span className="text-primary italic">Analytical Rigor</span>, while Draft B achieves higher <span className="text-secondary italic">Global Resonance.</span>
          </h1>
        </div>
      </header>

      {/* Analysis Tabs */}
      <div className="flex justify-center mb-4">
        <div className="flex bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50 w-full max-w-md">
          <button 
            onClick={() => setActiveTab('value')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'value' 
                ? 'bg-white text-primary shadow-sm ring-1 ring-slate-200' 
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Brain className="w-4 h-4" />
            Comparison Map
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
            Visual Resonance
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
                    <h2 className="text-2xl font-extrabold text-slate-800">Draft Comparison Radar</h2>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-black text-primary tracking-tighter">84%</div>
                      <div className="text-[8px] font-bold uppercase text-slate-400 tracking-widest">Draft A Index</div>
                    </div>
                    <div className="w-px h-10 bg-slate-100" />
                    <div className="text-right">
                      <div className="text-2xl font-black text-secondary tracking-tighter">91%</div>
                      <div className="text-[8px] font-bold uppercase text-slate-400 tracking-widest">Draft B Index</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="relative w-80 h-80 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                        <PolarAngleAxis 
                          dataKey="subject" 
                          tick={{ fill: '#94a3b8', fontSize: 8, fontWeight: 900 }}
                        />
                        <Radar
                          name="Target Alignment"
                          dataKey="Target"
                          stroke="#cbd5e1"
                          strokeWidth={1}
                          strokeDasharray="4 4"
                          fill="none"
                        />
                        <Radar
                          name="Draft A"
                          dataKey="DraftA"
                          stroke="#3366ff"
                          strokeWidth={2}
                          fill="#3366ff"
                          fillOpacity={0.1}
                        />
                        <Radar
                          name="Draft B"
                          dataKey="DraftB"
                          stroke="#00d68f"
                          strokeWidth={2}
                          fill="#00d68f"
                          fillOpacity={0.1}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-inner">
                      <p className="text-sm font-medium text-slate-600 leading-relaxed">
                        <span className="text-primary font-black uppercase text-[10px] tracking-widest mr-2">Core Insight:</span> 
                        Draft B demonstrates a superior balance between <span className="font-bold text-slate-800">Analytical Depth</span> and <span className="font-bold text-slate-800">Universal Accessibility</span>, aligning more closely with the TAB 2026 goal of global leadership awareness.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Innovation (Stimulation)</span>
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-bold text-primary">A: 80%</span>
                          <span className="text-xs font-bold text-secondary">B: 90%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Authority (Power)</span>
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-bold text-primary">A: 90%</span>
                          <span className="text-xs font-bold text-secondary">B: 80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex gap-8 justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Manuscript A</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Manuscript B</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-1 border-t border-dashed border-slate-300" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Summit Target</span>
                  </div>
                </div>
              </section>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-slate-100 h-full">
                  <h3 className="text-lg font-extrabold mb-8 text-slate-800">Critical Differences</h3>
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="text-primary w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Draft A Strengths</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                          <span>Focus & Rigor</span>
                          <span className="text-primary text-[10px]">+15%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                          <span>Technically Elite</span>
                          <span className="text-primary text-[10px]">+10%</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="text-secondary w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Draft B Strengths</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                          <span>Public Clarity</span>
                          <span className="text-secondary text-[10px]">+20%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                          <span>Innovation Signals</span>
                          <span className="text-secondary text-[10px]">+10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Strategic Comparison */}
            <section>
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-2xl font-extrabold text-slate-800">Strategic Recommendations</h2>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    icon: Users, 
                    title: "Synthesize Assets", 
                    desc: "Inject Draft A's authoritative central motif into Draft B's more accessible, flowing layout for maximum impact.",
                    color: "primary"
                  },
                  { 
                    icon: Brain, 
                    title: "Tone Down Rigor", 
                    desc: "The analytical density in Draft A is slightly too high for general audience engagement at the summit entrance.",
                    color: "secondary"
                  },
                  { 
                    icon: Wand2, 
                    title: "Unified Palette", 
                    desc: "Draft B's color progression aligns better with the 'Transformation' theme of TAB 2026.",
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
            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Draft A Column */}
              <div className="bg-slate-900 text-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden flex flex-col">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                        <Search className="w-5 h-5" />
                      </div>
                      <h3 className="text-xs font-black uppercase tracking-[0.3em] text-secondary">Manuscript A</h3>
                    </div>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-[8px] font-black uppercase tracking-[0.2em]">High Rigor</span>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-black tracking-tight leading-tight">
                        Intellectual <span className="text-primary">Dominance</span>
                      </h4>
                      <p className="text-slate-400 text-xs font-medium leading-relaxed">
                        Strong geometric symmetry creates an impression of absolute authority and technological completion.
                      </p>
                    </div>

                    <div className="h-px bg-white/10 w-full" />

                    <div className="space-y-4">
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Observation Nodes</h5>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                          <div className="w-1 h-1 rounded-full bg-primary mt-2 shadow-[0_0_10px_rgba(51,102,255,0.5)]"></div>
                          <span className="text-[11px] font-semibold text-slate-300 leading-relaxed">Rigid structure signals stability but lacks agility</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-1 h-1 rounded-full bg-primary mt-2 shadow-[0_0_10px_rgba(51,102,255,0.5)]"></div>
                          <span className="text-[11px] font-semibold text-slate-300 leading-relaxed">Monochromatic depth enhances perceived complexity</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Draft B Column */}
              <div className="bg-slate-800 text-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden flex flex-col border border-primary/20">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Manuscript B</h3>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-[8px] font-black uppercase tracking-[0.2em]">High Resonance</span>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-black tracking-tight leading-tight">
                        Fluid <span className="text-secondary">Transformations</span>
                      </h4>
                      <p className="text-slate-400 text-xs font-medium leading-relaxed">
                        Abstract flow and non-linear patterns signal a more dynamic, future-oriented and experimental approach.
                      </p>
                    </div>

                    <div className="h-px bg-white/10 w-full" />

                    <div className="space-y-4">
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Observation Nodes</h5>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                          <div className="w-1 h-1 rounded-full bg-secondary mt-2 shadow-[0_0_10px_rgba(0,214,143,0.5)]"></div>
                          <span className="text-[11px] font-semibold text-slate-300 leading-relaxed">Organic curves increase visual 'warmth' and accessibility</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <div className="w-1 h-1 rounded-full bg-secondary mt-2 shadow-[0_0_10px_rgba(0,214,143,0.5)]"></div>
                          <span className="text-[11px] font-semibold text-slate-300 leading-relaxed">Chromatic variation aligns with TAB's diverse agenda</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
            <span className="text-lg font-extrabold text-slate-700">Comparative AI Agent Reports</span>
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
                  { role: "Visual Critic", icon: Brush, color: "primary", text: "Draft A is a masterclass in grid-based power, but Draft B is what will stop a scrolling user or a passerby at a booth." },
                  { role: "Strategy Lead", icon: MousePointer2, color: "secondary", text: "Manuscript B aligns 15% more effectively with our goal of 'Empowering the Many', reducing the perceived elite barrier." },
                  { role: "Identity Agent", icon: Package, color: "primary", text: "The synergy of TAB 2026 requires a bridge between hard tech and human impact. B builds that bridge more effectively." },
                  { role: "Alignment Bot", icon: ShieldCheck, color: "slate-800", text: "Draft A over-indexes on Achievement. For a summit, universal resonance (Draft B) is a higher priority meta-value." }
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
            <h3 className="text-xl font-extrabold text-slate-900 mb-4">Strategic Verdict: Manuscript B is the superior cognitive anchor.</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              While Manuscript A is visually impeccable and technically rigorous, its cognitive 'weight' may intimidate the diverse audience of TAB 2026. Manuscript B achieves a 'low-floor, high-ceiling' resonance—accessible enough to invite interaction, but deep enough to sustain analytical credibility.
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
            className="w-14 h-14 rounded-full border border-slate-200 bg-white text-slate-400 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm group"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onReset}
            className="px-12 py-4 value-gradient rounded-full text-white font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group uppercase tracking-widest"
          >
            <span>Reset Analysis</span>
            <Swords className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <p className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase opacity-70">Stage 4 of 4: Strategic Comparison Logic</p>
      </div>
    </motion.div>
  );
}
