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
    <div className="relative cursor-default font-orbitron font-bold text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
      <div className="absolute inset-0 top-[-30px] sm:top-[-10px] lg:top-0 flex flex-col">
        <div className="text-3xl sm:text-1xl lg:text-4xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan/80 to-50% to-cyber-cyan tracking-wider" aria-label="Software Developer">
          Software Engineer + <span className="text-cyber-pink inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide-2 text-left right-1 leading-tight [&_li]:block">
              <li className="cyber-text-glow-pink">Game Dev</li>
              <li className="cyber-text-glow-pink">Data</li>
              <li className="cyber-text-glow-pink">AI</li>
              <li className="cyber-text-glow-pink" aria-hidden="true">Game Dev</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Position;
