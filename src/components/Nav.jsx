import React from "react";
import { BiHomeAlt } from "react-icons/bi"; // react icons
import {
  BsClipboardData,
  BsBriefcase,
  BsPlayBtnFill,
  BsAndroid2,
} from "react-icons/bs"; // react icons
// link for href feature which is to in react
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home" // similar to a href
            activeClass="active"
            smooth={true} // smooth scroll
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="services" // scroll to #services
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work" // scroll to #work
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsPlayBtnFill />
          </Link>
          <Link
            to="contact" // scroll to #contact
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsAndroid2 />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
