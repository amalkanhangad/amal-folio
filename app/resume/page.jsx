"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FahHtml5,
  FaCss3,
  FaJS,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Amal K",
    },
    {
      fieldName: "Phone",
      fieldValue: "7994523273",
    },
    {
      fieldName: "Experience",
      fieldValue: "2",
    },
    {
      fieldName: "Nationality",
      fieldValue: "India",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Malayalam",
    },
    {
      fieldName: "Email",
      fieldValue: "amalkanhangad333@gmail.com",
    },
    
  ],
};
//experience data
const experience = {
  icon: "",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  items: [
    {
      company: "Code craft AI solutions",
      position: "Front End developer",
      duration: "2024 april - 2024 june",
    },
    {
      company: "Code craft AI solutions",
      position: "Front End developer",
      duration: "2024 april - 2024 june",
    },
    {
      company: "Code craft AI solutions",
      position: "Front End developer",
      duration: "2024 april - 2024 june",
    },
    {
      company: "Code craft AI solutions",
      position: "Front End developer",
      duration: "2024 april - 2024 june",
    },
    {
      company: "Code craft AI solutions",
      position: "Front End developer",
      duration: "2024 april - 2024 june",
    },
    {
      company: "Code craft AI solutions",
      position: "Front End developer",
      duration: "2024 april - 2024 june",
    },
  ],
};

// education data
const education = {
  icon: "",
  title: "My educaton",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  items: [
    {
      institution: "Nehru Arts and Science College Kanhangad",
      Programme:
        "integrated Msc Computer Science with Specializationn in AI and ML",
      duration: "2020-2025",
    },
    {
      institution: "Jawahar Navodhaya Vidhyalaya Periye Kasargod",
      Programme: "Secondary education",
      duration: "2013-2020",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaReact />,
      name: "React js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaThumb,
  ScrollAreaScrollbar,
} from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h -[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            {item.company}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[264px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[0px] text-center lg:text-left">
                            {item.Programme}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            {item.institution}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p>{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize">
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[700px] text-white/60 mx-auto xl-:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
