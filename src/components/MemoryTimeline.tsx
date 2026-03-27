import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Quote, MessageCircleHeart } from 'lucide-react';

interface MemoryTimelineProps {
  onComplete: () => void;
}

const memories = [
  { 
    id: 1, 
    title: 'Departure', 
    subtitle: 'The day we met', 
    desc: 'The moment our journey started officially. The best departure imaginable.', 
    gradient: 'from-blue-400 to-indigo-600', 
    icon: <Calendar size={14} />,
    bigIcon: <Calendar size={64} className="text-white drop-shadow-lg opacity-90" strokeWidth={1.5} />,
    bgPattern: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 60%)'
  },
  { 
    id: 2, 
    title: 'In-Flight', 
    subtitle: 'The day I proposed', 
    desc: 'Taking the absolute leap of faith together over the clouds.', 
    gradient: 'from-rose-400 to-pink-500', 
    icon: <Quote size={14} />,
    bigIcon: <Quote size={64} className="text-white drop-shadow-lg opacity-90" strokeWidth={1.5} />,
    bgPattern: 'radial-gradient(circle at top right, rgba(255,255,255,0.3) 0%, transparent 50%)'
  },
  { 
    id: 3, 
    title: 'Arrival', 
    subtitle: 'The endless chatting', 
    desc: 'Miles apart but always right next to each other. The perfect connection.', 
    gradient: 'from-indigo-400 to-violet-600', 
    icon: <MessageCircleHeart size={14} />,
    bigIcon: <MessageCircleHeart size={64} className="text-white drop-shadow-lg opacity-90" strokeWidth={1.5} />,
    bgPattern: 'radial-gradient(circle at bottom left, rgba(255,255,255,0.2) 0%, transparent 70%)'
  }
];

const MemoryTimeline: React.FC<MemoryTimelineProps> = ({ onComplete }) => {
  const [revealed, setRevealed] = useState<number[]>([]);

  const toggleReveal = (id: number) => {
    if (!revealed.includes(id)) {
      setRevealed([...revealed, id]);
    }
  };

  return (
    <motion.div 
      className="full-screen-section bg-slate-50 py-12 px-4 md:px-8 overflow-y-auto overflow-x-hidden min-h-[100dvh] justify-start md:justify-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      <div className="w-full max-w-[1000px] mb-8 md:mb-12 text-center mt-10 md:mt-0">
        <h2 className="heading-font text-3xl md:text-4xl text-slate-800 mb-2 md:mb-3">
          Passport <span className="text-[#0284c7]">Stamps</span>
        </h2>
        <p className="mono-font text-slate-500 text-xs md:text-sm px-4">
          Tap the empty passport pages to stamp our favorite memories.
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 w-full max-w-[1200px]">
        {memories.map((mem) => {
          const isRevealed = revealed.includes(mem.id);
          return (
            <motion.div
              key={mem.id}
              className="relative w-full max-w-[320px] mx-auto md:w-[320px] h-[380px] md:h-[450px] rounded-2xl cursor-pointer"
              style={{ perspective: '1200px' }}
              onClick={() => toggleReveal(mem.id)}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={false}
                animate={{ rotateY: isRevealed ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                className="w-full h-full relative shadow-xl rounded-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front: Unstamped Passport Page */}
                <div 
                  className="absolute w-full h-full bg-[#fafafa] rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-8 text-center overflow-hidden"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                   <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                   
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-[#0284c7]/40 flex items-center justify-center mb-4 md:mb-6 shadow-sm bg-white">
                      <span className="mono-font text-[#0284c7]/60 text-xs md:text-sm tracking-widest uppercase font-bold">TAP</span>
                   </div>
                   <h3 className="mono-font text-slate-400 uppercase tracking-widest text-sm md:text-base font-bold">{mem.id.toString().padStart(2, '0')}</h3>
                </div>

                {/* Back: Stamped Memory (Creative Graphic instead of Photo) */}
                <div 
                  className="absolute w-full h-full bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-between"
                  style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <div className={`w-full h-[55%] md:h-[60%] bg-gradient-to-br ${mem.gradient} rounded-xl overflow-hidden relative shadow-inner flex flex-col items-center justify-center`}>
                    
                    {/* Artistic gradient pattern background */}
                    <div className="absolute inset-0 z-0" style={{ background: mem.bgPattern }} />
                    
                    {/* Floating Icon Art */}
                    <motion.div 
                      className="z-10 bg-white/10 p-6 rounded-full backdrop-blur-sm border border-white/20 shadow-xl"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: isRevealed ? 1 : 0.5, opacity: isRevealed ? 1 : 0 }}
                      transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                    >
                      {mem.bigIcon}
                    </motion.div>

                    {/* Passport Stamp Overlay */}
                    <div className="absolute bottom-2 right-2 border-2 text-[0.55rem] md:text-[0.6rem] border-white text-white uppercase mono-font font-bold px-3 py-1 transform -rotate-12 opacity-90 rounded shadow-[0_2px_10px_rgba(0,0,0,0.1)] bg-white/20 backdrop-blur-md">
                      APPROVED
                    </div>
                  </div>
                  
                  <div className="pt-4 px-3 flex-1 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 text-[#0284c7] mb-2 bg-blue-50 px-3 py-1 rounded-full">
                      {mem.icon}
                      <span className="mono-font text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase">{mem.subtitle}</span>
                    </div>
                    <h3 className="heading-font text-xl md:text-2xl text-slate-800 mb-2 leading-tight font-black">{mem.title}</h3>
                    <p className="font-sans text-slate-500 text-xs md:text-sm leading-relaxed max-w-[220px]">{mem.desc}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {revealed.length === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="mt-12 md:mt-16 mb-10 w-full flex justify-center"
          >
            <button className="bg-[#0f172a] hover:bg-black text-white font-bold px-10 py-5 rounded-full shadow-[0_10px_20px_rgba(15,23,42,0.3)] transition-transform hover:-translate-y-1 text-sm uppercase tracking-widest mono-font flex items-center gap-3" onClick={onComplete}>
               Next Destination <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MemoryTimeline;
