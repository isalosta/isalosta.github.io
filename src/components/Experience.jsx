import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { experiences } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, onClick, isActive, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center group transition-all duration-300 ${
        isMobile ? "text-cyber-cyan" : ""
      }`}
    >
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-1 md:w-2 bg-gradient-to-b from-cyber-cyan via-cyber-pink to-cyber-cyan my-6 sm:block hidden shadow-neon-cyan" />
      )}
      <h3
        className={`font-orbitron text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 tracking-wider uppercase transition-all duration-300 ${
          isActive || isMobile ? "text-cyber-cyan cyber-text-glow" : "text-slate-700 group-hover:text-cyber-cyan/50"
        }`}
      >
        {experience.title}
      </h3>
      <p
        className={`font-rajdhani text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 transition-all duration-300 ${
          isActive || isMobile ? "text-cyber-pink" : "text-slate-700 group-hover:text-slate-500"
        }`}
      >
        <span className="font-mono text-[10px] text-cyber-yellow/40 mr-1">{'//>'}</span>
        {experience.company_name} <span className="text-cyber-cyan/30">|</span> {experience.date}
      </p>
    </div>
  );
};

const ExperienceDetails = ({ experience }) => {
  return (
    <div className="mt-5">
      <ul className="max-w-7xl list-none space-y-8 border border-cyber-cyan/20 p-6 bg-cyber-card/50 backdrop-blur-sm hud-corners relative"
          style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
        {/* HUD header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyber-cyan/10">
          <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-neon-pulse" />
          <span className="font-mono text-[10px] text-cyber-cyan/40 tracking-widest uppercase">mission_log // details</span>
        </div>
        {experience.details.map((detail, index) => (
          <li
            key={`experience-detail-${index}`}
            className="font-rajdhani text-slate-400 font-medium text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px] pl-4 border-l border-cyber-pink/20 hover:border-cyber-pink/60 transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: detail.replace(/style='color: white;'/g, "style='color: #00f0ff;'") }}
          />
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:my-20">
      <motion.div variants={textVariant()}>
        <p className="font-mono text-cyber-pink/50 text-[12px] tracking-[0.3em] uppercase text-center mb-2">
          {'// section.02'}
        </p>
        <h2 className={`${styles.sectionText} text-center`}>
          Experience
        </h2>
      </motion.div>

      <div className="relative mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex flex-col z-10 sm:w-auto sm:w-full">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="flex justify-end z-10 sm:block hidden">
          <ExperienceDetails experience={selectedJob} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "portfolio");
