import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5 group`}
    >
      <div className='relative w-full md:w-3/5 holo-shimmer overflow-hidden'>
        {/* Cyber image frame */}
        <div className="relative border border-cyber-cyan/10 group-hover:border-cyber-cyan/40 transition-all duration-500"
             style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
          <img
            src={image}
            alt='project_image'
            className='w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.02]'
            style={{ filter: 'saturate(0.8) contrast(1.1)' }}
          />
          {/* Scanline overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Corner tag */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="bg-cyber-dark/80 backdrop-blur-sm border border-cyber-cyan/30 px-3 py-1">
              <span className="font-mono text-[10px] text-cyber-cyan tracking-widest">
                PROJECT_{String(index).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        {/* Project status indicator */}
        <div className={`flex items-center gap-2 mb-3 ${!isEven ? "md:justify-end" : ""}`}>
          <div className="w-1.5 h-1.5 bg-cyber-green rounded-full animate-neon-pulse" />
          <span className="font-mono text-[10px] text-cyber-green/60 tracking-widest uppercase">deployed</span>
        </div>
        
        <h3 className='font-orbitron text-cyber-cyan font-bold text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight tracking-wider uppercase group-hover:cyber-text-glow transition-all duration-300'>
          {name}
        </h3>
        
        {/* Cyber divider */}
        <div className={`my-4 h-[1px] bg-gradient-to-r ${isEven ? 'from-cyber-pink/60 to-transparent' : 'from-transparent to-cyber-pink/60 md:from-transparent md:to-cyber-pink/60'}`} />
        
        <p className='font-rajdhani mt-2 text-slate-400 text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl leading-relaxed'>
          {description}
        </p>
        
        {/* Tech stack indicator */}
        <div className={`mt-4 flex gap-2 flex-wrap ${!isEven ? "md:justify-end" : ""}`}>
          <span className="font-mono text-[9px] text-cyber-yellow/40 border border-cyber-yellow/20 px-2 py-0.5 tracking-wider">FULLSTACK</span>
          <span className="font-mono text-[9px] text-cyber-purple/40 border border-cyber-purple/20 px-2 py-0.5 tracking-wider">PRODUCTION</span>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <p className="font-mono text-cyber-pink/50 text-[12px] tracking-[0.3em] uppercase mb-2">
          {'// section.01'}
        </p>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
