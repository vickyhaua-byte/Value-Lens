import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Stage1Discovery from './components/Stage1Discovery';
import Stage2Evaluating from './components/Stage2Evaluating';
import Stage3Results from './components/Stage3Results';
import Stage4Feedback from './components/Stage4Feedback';

type Stage = 1 | 2 | 3 | 4;

export default function App() {
  const [stage, setStage] = useState<Stage>(1);

  const nextStage = () => {
    if (stage < 4) setStage((stage + 1) as Stage);
  };

  const prevStage = () => {
    if (stage > 1) setStage((stage - 1) as Stage);
  };

  const reset = () => setStage(1);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      <Header stage={stage} onLogoClick={reset} />
      
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
        <AnimatePresence mode="wait">
          {stage === 1 && (
            <Stage1Discovery key="stage1" onNext={nextStage} />
          )}
          {stage === 2 && (
            <Stage3Results key="stage2" onNext={nextStage} onBack={prevStage} />
          )}
          {stage === 3 && (
            <Stage2Evaluating key="stage3" onComplete={nextStage} />
          )}
          {stage === 4 && (
            <Stage4Feedback key="stage4" onBack={prevStage} onReset={reset} />
          )}
        </AnimatePresence>
      </main>

      <Footer />

      {/* Background Abstract Shapes */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[150px]"></div>
        <div className="absolute top-[20%] right-[15%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
}
