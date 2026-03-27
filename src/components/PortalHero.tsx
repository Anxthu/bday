import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

interface PortalHeroProps {
  onEnter: () => void;
}

const PortalHero: React.FC<PortalHeroProps> = ({ onEnter }) => {
  const currentDate = "28MAR26";
  return (
    <motion.div 
      className="full-screen-section bg-slate-800 flex items-center justify-center py-10 px-4 md:p-8 relative overflow-x-hidden min-h-[100dvh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-0 rotate-180 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-slate-800 -z-10" />

      <div className="w-full max-w-[1100px] flex flex-col items-center z-10">
        
        {/* Ticket Container */}
        <motion.div 
          className="w-full bg-[#f4f5f7] rounded-[1.5rem] md:rounded-[2rem] shadow-2xl relative flex flex-col md:flex-row border border-slate-700/50"
          whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}
          transition={{ duration: 0.3 }}
        >
          {/* Main Body (Left side desktop / Top side mobile) */}
          <div className="w-full md:w-[72%] flex flex-col md:flex-row border-b-2 md:border-b-0 md:border-r-2 border-dashed border-[#a0aec0] relative bg-[#f4f5f7] rounded-t-[1.5rem] md:rounded-l-[2rem] md:rounded-tr-none z-10">
            
            {/* Cutouts Mobile (Sit on the bottom dashed line) */}
            <div className="md:hidden absolute bottom-[-15px] left-[-15px] w-[30px] h-[30px] bg-slate-800 rounded-full shadow-inner z-40 border-[1px] border-r-0 border-slate-700/50" />
            <div className="md:hidden absolute bottom-[-15px] right-[-15px] w-[30px] h-[30px] bg-slate-800 rounded-full shadow-inner z-40 border-[1px] border-l-0 border-slate-700/50" />

            {/* Blue Accent Bar */}
            <div className="w-full md:w-[80px] h-[12px] md:h-auto bg-[#1d4ed8] flex md:flex-col items-center justify-between py-0 md:py-6 px-6 md:px-0 rounded-t-[1.5rem] md:rounded-t-none md:rounded-l-[2rem] shrink-0 border-b md:border-b-0 md:border-r border-[#1e40af]">
              {/* Fake horizontal barcode for mobile */}
              <div className="md:hidden flex w-[200px] h-[4px] bg-white/20 mx-auto mt-1 rounded px-[2px] justify-between">
                 <div className="h-full w-[3px] bg-white/50"></div>
                 <div className="h-full w-[1px] bg-white/50"></div>
                 <div className="h-full w-[4px] bg-white/50"></div>
                 <div className="h-full w-[2px] bg-white/50"></div>
                 <div className="h-full w-[5px] bg-white/50"></div>
              </div>
              {/* Fake vertical barcode for desktop */}
              <div className="hidden md:flex h-[200px] w-[30px] bg-white rounded px-[4px] py-[8px] justify-between">
                 <div className="w-[3px] bg-black h-full"></div>
                 <div className="w-[1px] bg-black h-full"></div>
                 <div className="w-[4px] bg-black h-full"></div>
                 <div className="w-[2px] bg-black h-full"></div>
                 <div className="w-[1px] bg-black h-full"></div>
                 <div className="w-[5px] bg-black h-full"></div>
                 <div className="w-[2px] bg-black h-full"></div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col relative z-20">
               {/* Top Blue Header */}
               <div className="h-[45px] md:h-[75px] bg-[#1d4ed8] w-full flex items-center px-4 md:px-8 border-b border-[#1e40af]">
                  <h1 className="text-white text-lg md:text-3xl font-bold italic uppercase tracking-wider font-sans">
                     Happy Birthday
                  </h1>
               </div>

               {/* Inner Details */}
               <div className="p-4 md:p-10 flex-1 flex flex-col justify-center relative bg-transparent overflow-hidden">
                  
                  {/* Subtle World Map Watermark (SVG) */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center -z-10 mt-8">
                     <svg viewBox="0 0 1000 500" className="w-[150%] md:w-[120%] h-auto">
                        <path fill="currentColor" d="M150,150 Q200,100 250,150 T350,150 T450,150 T550,150 T650,150 T750,150 T850,150" stroke="currentColor" strokeWidth="50" strokeLinecap="round" />
                        <path fill="currentColor" d="M200,200 Q300,300 400,200 T600,200 T800,200" stroke="currentColor" strokeWidth="60" strokeLinecap="round" />
                        <circle cx="200" cy="180" r="80" fill="currentColor" />
                        <circle cx="700" cy="180" r="100" fill="currentColor" />
                        <circle cx="500" cy="300" r="60" fill="currentColor" />
                        <circle cx="850" cy="350" r="70" fill="currentColor" />
                     </svg>
                  </div>

                  {/* Flight Origin & Destination */}
                  <div className="flex justify-between items-center w-full md:w-[90%] mx-auto mb-6 md:mb-10 pt-2">
                     {/* Origin */}
                     <div className="text-left w-[40%]">
                        <p className="text-[10px] md:text-base font-bold text-slate-500 mb-0 leading-none">FROM:</p>
                        <h2 className="text-[3.8rem] md:text-[5.5rem] font-sans font-black text-[#1e293b] leading-none tracking-tighter" style={{ transform: 'scaleY(1.1)' }}>HRE</h2>
                        <p className="text-[10px] md:text-base font-bold text-slate-600 mt-2 md:mt-3 uppercase">Here</p>
                     </div>

                     {/* Plane separator */}
                     <div className="w-[20%] flex items-center justify-center relative px-2">
                        <div className="w-full h-[2px] md:h-[3px] bg-[#1d4ed8] absolute top-1/2 mt-[-1px] md:mt-[-1.5px] z-0"></div>
                        <div className="w-8 h-8 md:w-16 md:h-16 bg-[#1d4ed8] rounded-full flex items-center justify-center relative z-10 shadow-md border-2 border-white">
                           <Plane className="text-white fill-current transform rotate-90 w-4 h-4 md:w-8 md:h-8" />
                        </div>
                     </div>

                     {/* Destination */}
                     <div className="text-right w-[40%]">
                        <p className="text-[10px] md:text-base font-bold text-slate-500 mb-0 leading-none">TO:</p>
                        <h2 className="text-[3.8rem] md:text-[5.5rem] font-sans font-black text-[#1e293b] leading-none tracking-tighter" style={{ transform: 'scaleY(1.1)' }}>CAN</h2>
                        <p className="text-[10px] md:text-base font-bold text-slate-600 mt-2 md:mt-3 uppercase">Canada</p>
                     </div>
                  </div>

                  {/* Bottom Info Row */}
                  <div className="flex flex-wrap justify-between items-end w-full md:w-[90%] mx-auto mt-2 md:mt-4 gap-y-4">
                     <div>
                        <p className="text-[9px] md:text-sm text-[#1d4ed8] font-bold mb-0 md:mb-1 uppercase tracking-wider">Passenger</p>
                        <p className="text-[1.3rem] md:text-4xl font-black text-[#1e293b] uppercase heading-font tracking-tight leading-none md:leading-normal">MUTH</p>
                     </div>
                     <div>
                        <p className="text-[9px] md:text-sm text-[#1d4ed8] font-bold mb-0 md:mb-1 uppercase tracking-wider">Flight</p>
                        <p className="text-[1.3rem] md:text-4xl font-black text-[#1e293b] uppercase heading-font tracking-tight leading-none md:leading-normal">L0V3</p>
                     </div>
                     <div>
                        <p className="text-[9px] md:text-sm text-[#1d4ed8] font-bold mb-0 md:mb-1 uppercase tracking-wider">Boarding</p>
                        <p className="text-[1.3rem] md:text-4xl font-black text-[#1e293b] uppercase heading-font tracking-tight leading-none md:leading-normal">NOW</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Stub Body (Right side desktop / Bottom side mobile) */}
          <div className="w-full md:w-[28%] bg-[#f4f5f7] flex flex-col relative z-30 overflow-hidden md:rounded-r-[2rem] rounded-b-[1.5rem] md:rounded-b-none">
             
             {/* Stub Top Graphic Header */}
             <div className="h-[40px] md:h-[75px] bg-[#1d4ed8] w-full relative overflow-hidden flex justify-end items-center pr-6 border-b border-[#1e40af]">
                <svg className="absolute bottom-[-5px] md:bottom-[-10px] left-0 w-full h-[40px] md:h-[60px] opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                   <path d="M0,100 C40,100 50,50 100,50 L100,100 Z" fill="white" />
                   <path d="M-20,100 C20,100 30,20 100,20 L100,100 Z" fill="white" opacity="0.5" />
                </svg>
                <Plane className="text-white transform -rotate-12 translate-y-1 md:translate-y-2 translate-x-4 mix-blend-overlay w-6 h-6 md:w-9 md:h-9" />
             </div>
             
             <div className="p-5 md:p-8 flex-1 flex md:flex-col justify-between md:justify-start gap-4 md:gap-0">
                {/* Mobile Left Column on Stub */}
                <div className="flex-1 flex flex-col justify-between">
                   <div className="mb-2 md:mb-5">
                      <p className="text-[8px] md:text-[10px] text-slate-500 uppercase tracking-widest mb-0 md:mb-1">Name</p>
                      <p className="text-lg md:text-2xl font-black text-[#1e293b] uppercase heading-font tracking-tight leading-tight">MUTH</p>
                   </div>
                   
                   <div className="mb-2 md:mb-6 md:bg-white/50 md:p-3 md:rounded-lg md:border md:border-slate-200">
                      <div className="flex mb-1 md:mb-2 items-center">
                         <span className="text-[8px] md:text-[10px] text-slate-500 w-8 md:w-10 uppercase tracking-wider font-bold">From:</span>
                         <span className="text-xs md:text-sm font-bold text-[#1e293b] uppercase">HERE</span>
                      </div>
                      <div className="flex items-center">
                         <span className="text-[8px] md:text-[10px] text-slate-500 w-8 md:w-10 uppercase tracking-wider font-bold">To:</span>
                         <span className="text-xs md:text-sm font-bold text-[#1e293b] uppercase">CANADA</span>
                      </div>
                   </div>

                   <div className="flex justify-between md:grid md:grid-cols-2 gap-2 md:gap-4 mb-0 md:mb-6">
                      <div>
                         <p className="text-[8px] md:text-[10px] text-slate-500 uppercase tracking-widest mb-0 md:mb-1">Flight</p>
                         <p className="text-sm md:text-lg font-black text-[#1e293b] heading-font">L0V3</p>
                      </div>
                      <div>
                         <p className="text-[8px] md:text-[10px] text-slate-500 uppercase tracking-widest mb-0 md:mb-1">Date</p>
                         <p className="text-sm md:text-lg font-black text-[#1e293b] heading-font">{currentDate}</p>
                      </div>
                   </div>
                </div>

                {/* Mobile Right Column on Stub (Photo) */}
                <div className="flex flex-col items-center justify-center border-l md:border-l-0 border-slate-300 border-dashed pl-4 md:pl-0">
                  <div className="w-[80px] h-[80px] md:w-full md:aspect-video md:h-auto rounded-lg md:rounded-xl overflow-hidden shadow-sm md:shadow-md z-10 bg-slate-200 flex items-center justify-center md:mt-auto border-2 md:border-4 border-white shrink-0">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/hero.jpg`}
                      alt="Passenger" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-[0.55rem] md:text-[0.65rem] text-slate-400 font-mono text-center px-1 md:px-4 uppercase tracking-widest md:tracking-[0.2em]">Add photo</span>'; }}
                    />
                  </div>
                  <p className="mono-font text-[7px] md:text-[9px] text-slate-400 mt-2 md:mt-3 tracking-[0.2em] md:tracking-[0.4em] uppercase">PRIORITY</p>
                </div>
             </div>
          </div>

          {/* Desktop Cutouts */}
          <div className="hidden md:block absolute top-[-20px] right-[28%] ml-[10px] w-[40px] h-[40px] bg-slate-800 rounded-full shadow-inner z-40" />
          <div className="hidden md:block absolute bottom-[-20px] right-[28%] ml-[10px] w-[40px] h-[40px] bg-slate-800 rounded-full shadow-inner z-40" />
        </motion.div>

        {/* Action Button */}
        <motion.div 
          className="mt-8 md:mt-14 w-full flex justify-center pb-8 md:pb-12 z-20"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, type: "spring", damping: 20 }}
        >
          <button className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold tracking-wider py-3 px-8 md:py-4 md:px-10 rounded-full shadow-[0_10px_25px_rgba(29,78,216,0.3)] transition-all hover:translate-y-[-2px] hover:shadow-[0_15px_35px_rgba(29,78,216,0.5)] flex items-center text-sm md:text-lg z-50 uppercase" onClick={onEnter}>
             <Plane size={20} className="mr-2 md:mr-3" /> Proceed
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default PortalHero;
