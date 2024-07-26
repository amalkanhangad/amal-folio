"use client";
import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import {FiDownload} from "react-icons/fi";
import {TypeAnimation} from "react-type-animation";
// components


// Content configuration for the Type Animation
const content = {
  intro: {
    startDelay: 500,
    sequence: [
      "Hello, my name is ", 2000,
      "const Amal = ( name, passion ) =>", 2000
    ],
    deleteDelay: 1000,
    end: [""],
    restartDelay: 2000,
    speed: 50,
    deletionSpeed: 50,
    wrapper: "span",
  },
  preHeader: "text-xl" 
};


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
          <TypeAnimation 
              className={content.preHeader} 
              sequence={[
                content.intro.startDelay,
                ...content.intro.sequence,
                content.intro.deleteDelay,
                ...content.intro.end,
                content.intro.restartDelay,
              ]}
              speed={content.intro.speed}
              deletionSpeed={content.intro.deletionSpeed}
              wrapper={content.intro.wrapper}
              repeat={Infinity}
            />
            <h1 className="h1">
              {/* Hello I'm <br /> */}
              <span className="text-accent">Amal K</span>
            </h1>
            <h2 className="h2 max-w-[800px] mb-9 text-white/60">
            I design and build meaningful experiences.
            </h2>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl " />
              </Button>
              <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home
