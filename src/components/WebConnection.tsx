import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlaneTakeoff, MapPin } from 'lucide-react';

interface WebConnectionProps {
  onConnect: () => void;
}

const WebConnection: React.FC<WebConnectionProps> = ({ onConnect }) => {
  const [isFlying, setIsFlying] = useState(false);

  const handleTakeOff = () => {
    setIsFlying(true);
    setTimeout(() => {
      onConnect();
    }, 4000); 
  };

  return (
    <motion.div 
      className="full-screen-section bg-[#f1f5f9] px-4 md:px-8 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-10 md:mb-16 w-full mt-10 md:mt-0">
        <h2 className="heading-font text-3xl md:text-4xl text-slate-800 mb-2 md:mb-3 tracking-tight">
          Flight Tracking
        </h2>
        <p className="mono-font text-slate-500 uppercase tracking-widest text-[10px] md:text-sm">
          Distance means nothing
        </p>
      </div>

      <div className="relative w-full max-w-[900px] h-[150px] md:h-[250px] flex items-center justify-between px-6 md:px-20 mb-12 md:mb-20 bg-white rounded-[2rem] shadow-lg border border-slate-200">
        
        {/* Departure */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full border-[3px] md:border-4 border-[#0284c7] flex items-center justify-center shadow-md mb-2 md:mb-4 bg-slate-50">
            <span className="heading-font text-[#0284c7] font-bold text-sm md:text-xl">ME</span>
          </div>
          <p className="mono-font text-[10px] md:text-sm font-bold text-slate-700">DEPARTURE</p>
          <p className="font-sans text-[10px] md:text-xs text-slate-400">Here</p>
        </div>

        {/* The Flight Path */}
        <div className="absolute left-[60px] right-[60px] md:left-[100px] md:right-[100px] top-[75px] md:top-[125px] h-10 md:h-20 -z-0">
           {/* Dotted Arch line */}
           <svg preserveAspectRatio="none" viewBox="0 0 1000 200" className="w-full h-[150px] md:h-full absolute top-[-50px] md:top-[-100px] overflow-visible">
              <path 
                 d="M0,100 T500,-100 T1000,100" 
                 fill="none" 
                 stroke="#cbd5e1" 
                 strokeWidth="4" 
                 strokeDasharray="8,8" 
                 strokeLinecap="round"
              />
              {/* Animated Solid Line */}
              <motion.path 
                 d="M0,100 T500,-100 T1000,100" 
                 fill="none" 
                 stroke="#0284c7" 
                 strokeWidth="6" 
                 strokeLinecap="round"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: isFlying ? 1 : 0 }}
                 transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
                 className="drop-shadow-md"
              />
           </svg>
        </div>

        {/* The Airplane moving */}
        <motion.div
           className="absolute z-20"
           initial={{ left: '10%', top: '35%', opacity: 0, scale: 0 }}
           animate={{ 
             left: isFlying ? '80%' : '10%', 
             top: '35%', 
             opacity: 1, 
             scale: 1,
             rotate: isFlying ? [20, -20, 15] : 20 
           }}
           transition={{ 
             opacity: { duration: 0.5 },
             scale: { duration: 0.5 },
             left: { duration: 3, ease: "easeInOut", delay: 0.2 },
             rotate: { duration: 3, ease: "easeInOut", delay: 0.2 }
           }}
        >
           <div className="bg-white p-2 md:p-3 rounded-full shadow-lg border border-slate-100 text-[#0284c7]">
              <PlaneTakeoff className="w-5 h-5 md:w-8 md:h-8" />
           </div>
        </motion.div>

        {/* Arrival */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full border-[3px] md:border-4 border-[#e11d48] flex items-center justify-center shadow-md mb-2 md:mb-4 bg-slate-50">
            <MapPin className="text-[#e11d48] w-5 h-5 md:w-6 md:h-6" />
          </div>
          <p className="mono-font text-[10px] md:text-sm font-bold text-slate-700">ARRIVAL</p>
          <p className="font-sans text-[10px] md:text-xs text-slate-400 uppercase">Canada</p>
        </div>

      </div>

      <motion.div 
        className="h-[60px]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {!isFlying && (
          <button className="btn-aviation text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 flex gap-2" onClick={handleTakeOff}>
            Authorize Take Off <PlaneTakeoff size={20} />
          </button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default WebConnection;
