import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div
      className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
      >
        <p className="font-mono text-cyber-pink/50 text-[12px] tracking-[0.3em] uppercase mb-2">
          {'// section.03'}
        </p>
        <h3 className={styles.sectionText}>Contact</h3>
        
        {/* Terminal header */}
        <div className="mt-8 mb-4 flex items-center gap-3 pb-3 border-b border-cyber-cyan/10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-cyber-pink/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyber-yellow/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyber-green/60" />
          </div>
          <span className="font-mono text-[10px] text-cyber-cyan/30 tracking-widest">terminal@fhz:~/contact</span>
        </div>

        <form
          action="https://getform.io/f/bdrdmewb"
          method="POST"
          className="mt-4 gap-4 flex flex-col"
        >
          <span className='font-orbitron text-cyber-cyan text-[12px] font-semibold mt-3 tracking-wider uppercase'>
            <span className="text-cyber-pink/40 font-mono mr-1">$</span> Full Name
          </span>
          <input
            type="text"
            name="name"
            placeholder=">> enter_name"
            className="cyber-input p-4 font-mono text-[14px]"
          />
          
          <span className='font-orbitron text-cyber-cyan text-[12px] font-semibold mt-3 tracking-wider uppercase'>
            <span className="text-cyber-pink/40 font-mono mr-1">$</span> Email Address
          </span>
          <input
            type="text"
            name="email"
            placeholder=">> enter_email"
            className="cyber-input p-4 font-mono text-[14px]"
          />
          
          <span className='font-orbitron text-cyber-cyan text-[12px] font-semibold mt-3 tracking-wider uppercase'>
            <span className="text-cyber-pink/40 font-mono mr-1">$</span> Message
          </span>
          <textarea
            name="message"
            placeholder=">> compose_message"
            rows="10"
            className="cyber-input p-4 font-mono text-[14px] resize-none"
          />
          
          <button
            type='submit'
            className='cyber-btn mt-4 w-fit font-orbitron text-[13px]'
          >
            <span className="relative z-10 flex items-center gap-2">
              {loading ? (
                <>
                  <span className="inline-block w-2 h-2 bg-cyber-cyan rounded-full animate-neon-pulse" />
                  TRANSMITTING...
                </>
              ) : (
                <>
                  <span className="text-cyber-pink">{'>'}</span> SEND_MESSAGE
                </>
              )}
            </span>
          </button>
        </form>
        
        {/* Footer status */}
        <div className="mt-8 pt-4 border-t border-cyber-cyan/10 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-cyber-green rounded-full animate-neon-pulse" />
          <span className="font-mono text-[10px] text-slate-600 tracking-wider">
            encryption: AES-256 // status: ready // ping: 12ms
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");