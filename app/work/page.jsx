"use client";

import {motion} from "framer-motion";
import React,{useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image"

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "Alumni-Connect",
    description:
      "Alumni-Connect is a fullstack website created for the college alumni.",
    stack:[{name:"React js"},{name:"Tailwind css"}], 
    image:"/assets/work/project1.png",
    live:"",
    github:"",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Alumni-Connect",
    description:
      "Alumni-Connect is a fullstack website created for the college alumni.",
    stack:[{name:"React js"},{name:"Tailwind css"}], 
    image:"/assets/work/project1.png",
    live:"",
    github:"",
  },
  {
    num: "03",
    category: "FullStack",
    title: "Alumni-Connect",
    description:
      "Alumni-Connect is a fullstack website created for the college alumni.",
    stack:[{name:"React js"},{name:"Tailwind css"}], 
    image:"/assets/work/project1.png",
    live:"",
    github:"",
  },
];
const Work = () => {
  return (
    <div>
      Work page
    </div>
  )
}

export default Work
