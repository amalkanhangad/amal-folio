"use client";

import Link from "next/link";
import {FaGithub, FaLinkedinIn,  FaTwitter, FaInstagram} from "react-icons/fa";

const socials = [
  {icon:<FaGithub/>,path :'https://github.com/amalkanhangad'},
  {icon:<FaLinkedinIn/>,path :'https://www.linkedin.com/in/amalkanhangad/'},
  {icon:<FaInstagram/>,path :'https://www.instagram.com/_amal_kanhangad/'},
  {icon:<FaTwitter/>,path :'https://x.com/amal_kanhangad'},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  )
}

export default Social
