import React from 'react';

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="cursor-default font-orbitron font-bold mt-2 sm:mt-4">
      <div className="text-[14px] xs:text-[16px] sm:text-xl md:text-3xl lg:text-4xl 2xl:text-6xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan/80 to-50% to-cyber-cyan tracking-wider flex items-center justify-center lg:justify-start gap-1" aria-label="Software Developer">
        Software Engineer +{" "}
        <span className="text-cyber-pink inline-flex flex-col h-[1.25em] overflow-hidden">
          <ul className="block animate-text-slide-2 text-left leading-tight [&_li]:block">
            <li className="cyber-text-glow-pink">Game Dev</li>
            <li className="cyber-text-glow-pink">Data</li>
            <li className="cyber-text-glow-pink">AI</li>
            <li className="cyber-text-glow-pink" aria-hidden="true">Game Dev</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Position;
