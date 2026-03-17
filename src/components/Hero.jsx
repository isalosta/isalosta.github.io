import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className='parallax__content absolute top-[10%] sm:top-[16%] lg:top-[20%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0">
          {/* Cyber status line */}
          <div className="flex items-center gap-3 mb-4 ml-1 sm:ml-2">
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-neon-pulse shadow-[0_0_8px_rgba(57,255,20,0.6)]" />
            <span className="font-mono text-cyber-green/70 text-[10px] sm:text-[12px] tracking-[0.3em] uppercase">
              system online // netrunner active
            </span>
          </div>

          {/* Main name with glitch effect */}
          <h1 className='font-orbitron font-black text-cyber-cyan text-[40px] xs:text-[40px] sm:text-[58px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px] glitch-text cyber-text-glow tracking-wider'
              data-text="FAISAL HAZMI">
            FAISAL HAZMI
          </h1>
          
          <Position />
          
          <div className="mt-4 xs:mt-14 xs:ml-2 sm:mt-20 sm:ml-6 text-left ml-36">
            {/* Terminal-style description */}
            <div className="border-l-2 border-cyber-cyan/30 pl-4">
              <p className="font-mono text-[10px] text-cyber-pink/50 mb-2 tracking-widest uppercase">
                // user.profile.bio
              </p>
              <p className="font-rajdhani text-slate-400 text-[14px] sm:text-[16px] leading-relaxed">
                <span className="text-cyber-cyan/80">{'>'}</span> My name is <span className="text-cyber-cyan font-semibold">Faisal Hazmi</span>, Based in Indonesia.
                <br />
                <span className="text-cyber-cyan/80">{'>'}</span> A software engineer with a passion for:
                <br />
                <span className="text-cyber-cyan/80">{'>'}</span> <span className="text-cyber-pink">game development</span>, <span className="text-cyber-yellow">data science</span>, and <span className="text-cyber-purple">AI</span>.
                <br />
                <span className="text-cyber-cyan/80">{'>'}</span> I create innovative solutions that blend technology
                <br />
                <span className="text-cyber-cyan/80">{'>'}</span> and creativity to deliver exceptional user experiences.
              </p>
              <span className="inline-block w-2 h-4 bg-cyber-cyan/80 animate-neon-pulse mt-1" />
            </div>
          </div>
        </div>
      </div>

      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
