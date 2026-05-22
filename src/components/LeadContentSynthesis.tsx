import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { 
  ArrowLeft, 
  Upload, 
  Link as LinkIcon, 
  FileText, 
  Users, 
  CheckCircle2, 
  Zap, 
  Download, 
  MessageSquare,
  Sparkles,
  Presentation,
  Share2,
  Layout,
  Database,
  History,
  Send,
  X,
  FileUp,
  FolderOpen
} from 'lucide-react';

interface Props {
  onBack: () => void;
  onGenerateAsset: (content: string) => void;
  key?: React.Key;
}

type Audience = 'booth' | 'leads' | 'summit';

interface UploadedFile {
  name: string;
  size: string;
  type: 'paper' | 'data' | 'history';
}

export default function LeadContentSynthesis({ onBack, onGenerateAsset }: Props) {
  const [stage, setStage] = useState<'input' | 'output'>('input');
  const [selectedAudience, setSelectedAudience] = useState<Audience | null>('booth');
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [chatMessage, setChatMessage] = useState('');
  const [isRefining, setIsRefining] = useState(false);
  
  const [contentOutputs, setContentOutputs] = useState<Record<Audience, string>>({
    booth: "## Diversity & Synergetic Innovation\n\nOur booth showcases how pluralistic perspectives drive new collaborative synergy. \n\nKey Highlights:\n- 40% Increase in Cross-sector efficiency\n- Open frontiers in AI governance\n- Global community-led development",
    leads: "## Strategy Lead Deck: Q3 Alignment\n\nStrategic priorities for TAB 2026 synergy phase. Focusing on decentralized asset management and open-source infrastructure parity.",
    summit: "## The Pluralistic Future\n\nA keynote presentation on the transition from monolithic innovation to synergetic, open-border technological development."
  });

  const audiences = [
    { id: 'booth' as Audience, label: 'TAB Booth Audience', description: 'Impactful, visual-forward messaging' },
    { id: 'leads' as Audience, label: 'Project Leads', description: 'Technical synergy & strategic alignment' },
    { id: 'summit' as Audience, label: 'Summit Presentation', description: 'Visionary, high-level narrative' }
  ];

  const handleUpload = (type: UploadedFile['type']) => {
    const names = {
      paper: 'Research_Insight_v2.pdf',
      data: 'System_Metrics_2026.csv',
      history: 'TAB_2025_Retrospective.zip'
    };
    const newFile: UploadedFile = {
      name: names[type],
      size: '2.4MB',
      type
    };
    setUploadedFiles(prev => [...prev, newFile]);
  };

  const removeFile = (name: string) => {
    setUploadedFiles(prev => prev.filter(f => f.name !== name));
  };

  const handleStartSynthesis = () => {
    if (!selectedAudience) return;
    setIsProcessing(true);
    setTimeout(() => {
      setStage('output');
      setIsProcessing(false);
    }, 2000);
  };

  const handleRefine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage || !selectedAudience) return;
    
    setIsRefining(true);
    const userMsg = chatMessage;
    setChatMessage('');

    // Simulate Agent Refinement
    setTimeout(() => {
      setContentOutputs(prev => ({
        ...prev,
        [selectedAudience]: `${prev[selectedAudience]}\n\n**Refined Update:** Added focus on ${userMsg} as requested by the user. Integration of new collaborative metrics now live.`
      }));
      setIsRefining(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-6xl w-full flex flex-col items-center gap-8 py-8"
    >
      <header className="text-center space-y-3 flex flex-col items-center">
        <div className="inline-block px-4 py-1 bg-white rounded-full border border-secondary/20 text-secondary font-bold text-[10px] tracking-widest uppercase shadow-sm">
          Project Lead Workspace
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Knowledge <span className="text-secondary italic">Translation</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          Transform raw research insights, empirical data, and historic context into targeted visual narratives.
        </p>
      </header>

      <AnimatePresence mode="wait">
        {stage === 'input' ? (
          <motion.div 
            key="input-stage"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="w-full max-w-4xl space-y-8"
          >
            {/* Knowledge Ingestion */}
            <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl shadow-slate-200/50">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                  <FolderOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">Knowledge Ingestion</h3>
                  <p className="text-slate-400 text-xs font-medium">Upload papers, datasets, and historic assets</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { type: 'paper' as const, label: 'Research Papers', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50/50', border: 'border-blue-100' },
                    { type: 'data' as const, label: 'Project Data', icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-50/50', border: 'border-emerald-100' },
                    { type: 'history' as const, label: 'Historical Assets', icon: History, color: 'text-amber-500', bg: 'bg-amber-50/50', border: 'border-amber-100' }
                  ].map((slot) => (
                    <button 
                      key={slot.type}
                      onClick={() => handleUpload(slot.type)}
                      className={`relative overflow-hidden p-8 ${slot.bg} rounded-3xl border-2 border-dashed ${slot.border} hover:border-secondary hover:bg-white transition-all group flex flex-col items-center gap-4`}
                    >
                      <div className={`p-4 bg-white rounded-2xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all`}>
                        <slot.icon className={`w-8 h-8 ${slot.color}`} />
                      </div>
                      <div className="text-center">
                        <span className="text-[10px] font-black uppercase text-slate-800 tracking-widest block mb-1">{slot.label}</span>
                        <div className="flex items-center gap-2 justify-center text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                          <FileUp className="w-3 h-3" />
                          <span>Browse Files</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100">
                    <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 px-1">Ingested Nodes ({uploadedFiles.length})</div>
                    <div className="flex flex-wrap gap-2">
                       {uploadedFiles.map((file, i) => (
                         <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-slate-200 shadow-sm">
                           <FileText className="w-3 h-3 text-secondary" />
                           <span className="text-[10px] font-bold text-slate-600 tracking-tight">{file.name}</span>
                           <button onClick={() => removeFile(file.name)} className="ml-1 text-slate-300 hover:text-red-500 transition-colors">
                             <X className="w-3.5 h-3.5" />
                           </button>
                         </div>
                       ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="External Research Nodes (URLs)..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-[6px] py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Brief Context Highlights..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-[6px] py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>

                <textarea 
                  placeholder="Specific constraints or collaborative nuances required for this synthesis..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-[6px] p-6 text-sm font-medium focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all outline-none min-h-[120px] resize-none"
                />
              </div>
            </section>

            {/* Primary Channel (Now at bottom of inputs) */}
            <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl shadow-slate-200/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">Primary Channel</h3>
                  <p className="text-slate-400 text-xs font-medium">Define the resonant target for the output</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {audiences.map(a => (
                  <button
                    key={a.id}
                    onClick={() => setSelectedAudience(a.id)}
                    className={`text-left p-6 rounded-3xl border transition-all ${
                      selectedAudience === a.id 
                      ? 'bg-secondary/5 border-secondary shadow-lg shadow-secondary/5 ring-1 ring-secondary' 
                      : 'bg-slate-50/50 border-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-xl border ${selectedAudience === a.id ? 'bg-secondary text-white border-secondary' : 'bg-white text-slate-300 border-slate-100'}`}>
                        {a.id === 'booth' && <Share2 className="w-4 h-4" />}
                        {a.id === 'leads' && <FileText className="w-4 h-4" />}
                        {a.id === 'summit' && <Presentation className="w-4 h-4" />}
                      </div>
                      {selectedAudience === a.id && <CheckCircle2 className="w-5 h-5 text-secondary" />}
                    </div>
                    <span className={`text-xs font-black uppercase tracking-tight block mb-1 ${selectedAudience === a.id ? 'text-secondary' : 'text-slate-700'}`}>
                      {a.label}
                    </span>
                    <p className="text-[10px] font-medium text-slate-400 leading-tight">{a.description}</p>
                  </button>
                ))}
              </div>

              <button
                disabled={!selectedAudience || isProcessing}
                onClick={handleStartSynthesis}
                className={`mt-10 w-full py-6 rounded-3xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 cursor-pointer ${
                  selectedAudience 
                  ? 'bg-primary text-white shadow-2xl hover:bg-primary/90 hover:-translate-y-1 active:translate-y-0 active:scale-95' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin shrink-0" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 shrink-0" />
                    <span>Synthesize & Amplify</span>
                  </>
                )}
              </button>
            </section>
          </motion.div>
        ) : (
          <motion.div 
            key="output-stage"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl space-y-6"
          >
            <section className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl relative overflow-hidden">
               <div className="absolute top-8 right-10 flex gap-2">
                 <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:text-secondary transition-colors">
                   <Download className="w-5 h-5" />
                 </button>
               </div>

                 <div className="mb-8 flex items-center gap-3">
                  {selectedAudience === 'booth' && <Share2 className="w-6 h-6 text-primary shrink-0" />}
                  {selectedAudience === 'leads' && <FileText className="w-6 h-6 text-primary shrink-0" />}
                  {selectedAudience === 'summit' && <Presentation className="w-6 h-6 text-primary shrink-0" />}
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                    {audiences.find(a => a.id === selectedAudience)?.label} Content
                  </h3>
                </div>
                
                <div className="min-h-[300px] bg-slate-50 rounded-3xl p-10 shadow-inner mb-8">
                   <div className="markdown-body prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:font-medium prose-p:text-slate-600 prose-p:leading-relaxed text-sm">
                      <ReactMarkdown>
                        {contentOutputs[selectedAudience!]}
                      </ReactMarkdown>
                   </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => onGenerateAsset(contentOutputs[selectedAudience!])}
                    className="flex-1 py-5 bg-primary text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl hover:bg-primary/95 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group cursor-pointer"
                  >
                    <span>Proceed to Fabrication</span>
                    <Layout className="w-4 h-4 group-hover:animate-pulse shrink-0" />
                  </button>
                </div>
            </section>

            {/* AI Refinement Chat Interface */}
            <section className="bg-white border border-slate-100 rounded-[32px] p-6 shadow-xl flex flex-col gap-4">
               <div className="flex items-center gap-2 px-2">
                 <Sparkles className="w-4 h-4 text-primary" />
                 <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">AI Narrator Refinement</span>
               </div>

               <form onSubmit={handleRefine} className="relative">
                  <input 
                    type="text" 
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Ask the Agent to tweak the narrative, add data, or change tone..."
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-[6px] py-4 pl-6 pr-14 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                  />
                  <button 
                    type="submit"
                    disabled={!chatMessage || isRefining}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:grayscale"
                  >
                    {isRefining ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </button>
               </form>
               <p className="px-2 text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                 Agent is trained to sync with the "Diversity & Synergy" baseline strategy.
               </p>
            </section>

            <div className="flex justify-center pt-4">
               <button 
                onClick={() => setStage('input')}
                className="px-8 py-3 bg-white border border-slate-200 text-slate-400 rounded-full text-xs font-black uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all"
              >
                Synthesize Other Channel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="pt-8 w-full border-t border-slate-100 flex flex-col items-center gap-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-secondary transition-colors text-xs font-black uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>
      </footer>
    </motion.div>
  );
}

// Add simple RefreshCw for chat
function RefreshCw(props: any) {
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

