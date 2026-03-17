import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className="w-full flex items-center p-8 sm:px-16 sm:py-10 fixed z-40 pointer-events-none"
      style={{
        background: scrolled
          ? 'linear-gradient(180deg, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.6) 70%, transparent 100%)'
          : 'linear-gradient(180deg, rgba(10,10,15,0.7) 0%, transparent 100%)',
      }}
    >
      <div className='w-full flex justify-between items-start mx-auto'>
        <Link
          to='/'
          className='flex items-start group'
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          {/* Cyberpunk logo with neon glow */}
          <div className="pointer-events-auto cursor-pointer relative">
            <p className='font-orbitron text-cyber-cyan text-[26px] lg:text-[36px] font-bold tracking-widest cyber-text-glow group-hover:text-cyber-pink transition-colors duration-300'>
              FHZ
            </p>
            <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-cyber-cyan to-transparent group-hover:from-cyber-pink transition-colors duration-300" />
            <span className="font-mono text-[9px] lg:text-[11px] text-cyber-cyan/50 tracking-[0.4em] uppercase">
              cyberdeck
            </span>
          </div>
        </Link>

        <ul className='list-none hidden sm:flex flex-col gap-5'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`relative flex items-center font-orbitron ${
                active === nav.id ? "text-cyber-cyan cyber-text-glow" : "text-slate-600"
              } hover:text-cyber-cyan text-[14px] lg:text-[18px] font-semibold pointer-events-auto cursor-pointer tracking-wider uppercase transition-all duration-300`}
              onClick={() => setActive(nav.id)}
            >
              {active === nav.id && (
                <div className="fixed right-10 w-1 h-6 lg:h-8 bg-cyber-cyan shadow-neon-cyan animate-neon-pulse" />
              )}
              {/* HUD index number */}
              <span className="font-mono text-[10px] text-cyber-pink/60 mr-2 tracking-normal">
                {String(index).padStart(2, '0')}
              </span>
              <a href={`#${nav.id}`} className="relative group">
                {nav.title}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-cyber-cyan transition-all duration-300 ${
                  active === nav.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer'
            style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(75%) saturate(5000%) hue-rotate(155deg) brightness(105%) contrast(104%)' }}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-30 bg-cyber-dark/95 backdrop-blur-md border border-cyber-cyan/30 cyber-box-glow`}
            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-orbitron font-medium cursor-pointer text-[14px] tracking-wider uppercase ${
                    active === nav.id ? "text-cyber-cyan cyber-text-glow" : "text-slate-500"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <span className="font-mono text-[10px] text-cyber-pink/60 mr-2">
                    {String(index).padStart(2, '0')}
                  </span>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
