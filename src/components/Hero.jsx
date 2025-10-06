import { SpacemanCanvas } from ".";
import {GlassCanvas} from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className='parallax__content absolute top-[10%] sm:top-[16%] lg:top-[20%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0">
          <h1 className='font-medium text-white text-[40px] xs:text-[40px] sm:text-[58px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]'>
            FAISAL HAZMI
          </h1>
          <Position />
          <div className="mt-4 xs:mt-14 xs:ml-2 sm:mt-20 sm:ml-6 text-left ml-36">
            <p className="text-secondary">
              My name is Faisal Hazmi, Based in indonesia. 
              <br />
              a software engineer with a passion for: 
              <br /> game development, data science, and AI. 
              <br />
              I create innovative solutions that blend technology 
              <br />and creativity to deliver exceptional user experiences.
            </p>
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
      {/*<GlassCanvas scrollContainer={scrollContainer} />*/}
    </section>
  );
};

export default Hero;
