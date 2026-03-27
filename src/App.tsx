import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PortalHero from './components/PortalHero';
import MemoryTimeline from './components/MemoryTimeline';
import WebConnection from './components/WebConnection';
import CakeFinale from './components/CakeFinale';

function App() {
  const [stage, setStage] = useState(0);

  const nextStage = () => setStage((prev) => prev + 1);

  return (
    <div className="app-container halftone-bg">
      <AnimatePresence mode="wait">
        {stage === 0 && <PortalHero key="hero" onEnter={nextStage} />}
        {stage === 1 && <MemoryTimeline key="timeline" onComplete={nextStage} />}
        {stage === 2 && <WebConnection key="web" onConnect={nextStage} />}
        {stage === 3 && <CakeFinale key="cake" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
