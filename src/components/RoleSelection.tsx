import React from 'react';
import { motion } from 'motion/react';
import { Brush, Users, Calendar, Footprints, ArrowRight } from 'lucide-react';

interface RoleCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick: () => void;
  primary?: boolean;
  key?: React.Key;
}

function RoleCard({ icon: Icon, title, description, onClick, primary }: RoleCardProps) {
  return (
    <motion.button
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative group p-8 rounded-3xl border text-left transition-all ${
        primary 
          ? 'bg-white border-primary/20 shadow-xl shadow-primary/5 hover:border-primary' 
          : 'bg-slate-50/50 border-slate-100 hover:bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5'
      }`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
        primary ? 'bg-primary text-white' : 'bg-white text-slate-400 group-hover:bg-primary/10 group-hover:text-primary shadow-sm'
      }`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-extrabold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Enter Workspace <ArrowRight className="w-3 h-3" />
      </div>
    </motion.button>
  );
}

interface Props {
  onSelectRole: (role: string) => void;
  key?: React.Key;
}

export default function RoleSelection({ onSelectRole }: Props) {
  const roles = [
    {
      id: 'designer',
      icon: Brush,
      title: 'Designer',
      description: 'Evaluate visual assets against core values. Map intent to expression through rigorous diagnostic tools.',
      primary: true
    },
    {
      id: 'lead',
      icon: Users,
      title: 'Project Lead',
      description: 'Oversee the alignment of design objectives with business goals. Ensure strategic resonance across workstreams.',
    },
    {
      id: 'organizer',
      icon: Calendar,
      title: 'Summit Organizer',
      description: 'Coordinate the identity and cognitive synergy of the event. Track alignment across multiple stakeholder groups.',
    },
    {
      id: 'audience',
      icon: Footprints,
      title: 'Audience',
      description: 'Experience the shared vision. Engage with the cognitive artifacts and provide feedback on perceived resonance.',
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl w-full"
    >
      <div className="text-center mb-16 space-y-4">
        <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          Cognitive Collaboration Platform
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">
          Welcome <span className="text-primary italic">TAB 2026</span>
        </h1>
        <p className="text-slate-500 text-lg font-bold uppercase tracking-[0.2em]">
          Select Your Perspective
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roles.map(({ id, ...role }) => (
          <RoleCard 
            key={id}
            {...role}
            onClick={() => onSelectRole(id)}
          />
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 opacity-50">
        <div className="flex items-center gap-4">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Powered by</div>
          <div className="px-4 py-1.5 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-600">Cognitive Alignment Engine v3.0</div>
        </div>
        <div className="text-[10px] font-bold text-slate-400">
          SECURE PROTOCOL • MULTI-STAKEHOLDER SYNC ENABLED
        </div>
      </div>
    </motion.div>
  );
}
