import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary scanlines noise-overlay'>
        {/* Ambient cyber grid background */}
        <div className="fixed inset-0 cyber-grid-bg pointer-events-none z-0" />
        
        {/* Ambient neon glow spots */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-cyber-pink/5 rounded-full blur-[150px] pointer-events-none z-0" />
        
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
            {/* Section divider */}
            <div className="cyber-divider" />
            <Portfolio />
          </div>
          <div id="experience" className='relative z-30 bg-primary'>
            <div className="cyber-divider" />
            <Experience />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
            <div className="cyber-divider" />
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
