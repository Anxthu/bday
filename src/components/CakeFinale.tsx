import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Music, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CakeFinaleProps { }

const CakeSVG: React.FC<{ sliced: boolean }> = ({ sliced }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200" className="overflow-visible drop-shadow-2xl">
      {/* Platter */}
      <ellipse cx="100" cy="160" rx="90" ry="25" fill="#e2e8f0" />
      <ellipse cx="100" cy="165" rx="90" ry="25" fill="#cbd5e1" className="-z-10" />

      {/* Left Half Body */}
      <motion.g 
        animate={{ x: sliced ? -35 : 0, rotate: sliced ? -10 : 0 }} 
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="origin-bottom-right"
      >
        {/* Inside Cut (Red Velvet / Pink velvet) */}
        {sliced && (
          <path d="M100,60 L100,150 L30,150 L30,60 Z" fill="#be123c" />
        )}
        {/* Main Body Frosting (Pink) */}
        <path d="M30,70 Q65,60 100,70 L100,150 Q65,165 30,150 Z" fill="#f472b6" />
        {/* Frosting Drips */}
        <path d="M30,70 Q45,90 50,70 Q65,95 80,70 Q95,85 100,70 L100,60 Q65,55 30,60 Z" fill="#fbcfe8" />
        <path d="M30,150 Q65,165 100,150 L100,140 Q65,155 30,140 Z" fill="#db2777" opacity="0.3" />
      </motion.g>

      {/* Right Half Body */}
      <motion.g 
        animate={{ x: sliced ? 35 : 0, rotate: sliced ? 10 : 0 }} 
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="origin-bottom-left"
      >
        {/* Inside Cut */}
        {sliced && (
          <path d="M100,60 L100,150 L170,150 L170,60 Z" fill="#9f1239" />
        )}
        {/* Main Body Frosting */}
        <path d="M100,70 Q135,60 170,70 L170,150 Q135,165 100,150 Z" fill="#ec4899" />
        {/* Frosting Drips */}
        <path d="M100,70 Q115,85 120,70 Q135,95 150,70 Q165,90 170,70 L170,60 Q135,55 100,60 Z" fill="#fce7f3" />
      </motion.g>

      {/* Top Surface (When unsliced). Layered correctly BEFORE candles. */}
      {!sliced && (
        <ellipse cx="100" cy="65" rx="70" ry="20" fill="#fbcfe8" />
      )}

      {/* Left Candle (Moved to separate group to render ON TOP of top surface) */}
      <motion.g 
        animate={{ x: sliced ? -35 : 0, rotate: sliced ? -10 : 0 }} 
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="origin-bottom-right"
      >
        <rect x="55" y="25" width="8" height="40" rx="4" fill="#f8fafc" />
        <path d="M55,35 L63,30" stroke="#f472b6" strokeWidth="2" />
        <path d="M55,45 L63,40" stroke="#f472b6" strokeWidth="2" />
        <path d="M55,55 L63,50" stroke="#f472b6" strokeWidth="2" />
        {/* Flame */}
        <motion.path 
          d="M59,10 Q63,20 59,25 Q55,20 59,10 Z" 
          fill="#fbbf24"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      </motion.g>

      {/* Right Candle (Moved to separate group to render ON TOP of top surface) */}
      <motion.g 
        animate={{ x: sliced ? 35 : 0, rotate: sliced ? 10 : 0 }} 
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="origin-bottom-left"
      >
        <rect x="135" y="25" width="8" height="40" rx="4" fill="#f8fafc" />
        <path d="M135,35 L143,30" stroke="#ec4899" strokeWidth="2" />
        <path d="M135,45 L143,40" stroke="#ec4899" strokeWidth="2" />
        <path d="M135,55 L143,50" stroke="#ec4899" strokeWidth="2" />
        {/* Flame */}
        <motion.path 
          d="M139,10 Q143,20 139,25 Q135,20 139,10 Z" 
          fill="#fbbf24"
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
        />
      </motion.g>

    </svg>
  );
};

const CakeFinale: React.FC<CakeFinaleProps> = () => {
  const [sliced, setSliced] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/rec1.mp3');
    audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const handleSlice = () => {
    if (!sliced) {
      setSliced(true);
      
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults, 
          particleCount, 
          colors: ['#f472b6', '#ec4899', '#fbbf24', '#ffffff', '#e11d48'],
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
          ...defaults, 
          particleCount, 
          colors: ['#f472b6', '#ec4899', '#fbbf24', '#ffffff', '#e11d48'],
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);

      // Try autoplaying voice note immediately on slice
      if (audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log("Autoplay blocked:", e));
      }
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div 
      className="full-screen-section bg-[#f8fafc] flex flex-col items-center justify-center py-12 px-4 md:p-8 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-[800px] flex flex-col items-center z-10">
        
        {/* Restored Permanent Text */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="heading-font text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-2 md:mb-4">
             <span className="text-pink-500">Happy</span> Birthday!
          </h2>
          <p className="font-sans font-medium text-slate-600 text-lg md:text-xl px-4">
             Have the most amazing birthday, Muth! - Chekkan
          </p>
        </div>

        <motion.div 
           className="mb-8 md:mb-16 cursor-pointer relative w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
           onClick={handleSlice}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
        >
           <CakeSVG sliced={sliced} />
           
           {!sliced && (
             <motion.div 
               className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 mono-font tracking-widest text-slate-400 text-xs md:text-sm whitespace-nowrap bg-white/80 px-4 py-2 rounded-full shadow-sm"
               animate={{ y: [0, 5, 0] }}
               transition={{ repeat: Infinity, duration: 1.5 }}
             >
               TAP TO CUT CAKE
             </motion.div>
           )}
        </motion.div>

        <AnimatePresence>
          {sliced && (
            <motion.div 
              className="w-full bg-white rounded-3xl md:rounded-[2rem] shadow-xl border border-pink-100 p-6 md:p-10 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-rose-500 to-pink-400" />
              
              <PartyPopper size={32} className="mx-auto text-pink-500 mb-4" />

              <h2 className="heading-font text-3xl md:text-4xl font-black text-slate-800 mb-2 md:mb-4 tracking-tight">
                Surprise!
              </h2>
              <div className="max-w-[80%] mx-auto h-[1px] bg-slate-100 my-4" />
              
              {/* Audio Controls */}
              <div className="mt-6 bg-slate-50 p-4 md:p-6 rounded-2xl flex flex-col items-center border border-slate-100 shadow-inner">
                 <p className="mono-font text-[10px] md:text-xs text-slate-400 uppercase tracking-[0.2em] mb-4">A Special Message From Chekkan</p>
                 <button 
                   onClick={toggleAudio}
                   className="w-16 h-16 md:w-20 md:h-20 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-pink-500/40 transition-transform hover:scale-110 mb-2"
                 >
                    {isPlaying ? <Pause size={28} className="md:w-8 md:h-8" /> : <Play size={28} className="md:w-8 md:h-8 ml-2" />}
                 </button>
                 <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1 font-mono">
                   <Music size={10} /> {isPlaying ? 'Playing...' : 'Voice Note Playing'}
                 </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default CakeFinale;
