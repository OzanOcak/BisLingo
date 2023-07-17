import React from "react";
import Image from "../assets/app_pages.png";
import { BsAndroid2 } from "react-icons/bs"; // react icons

// import motion from animation library
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around">
          {/* text */}
          <div>
            <motion.div // animate
              variants={fadeIn("right", 0.3)} // fade in right
              initial="hidden" // initial state hidden
              whileInView={"show"} // animate while in view
              viewport={{ once: false, amount: 0.3 }} // multiple times
              className="flex-1 flex justify-start items-center"
            >
              <div>
                <h4 className="text-xl uppercase text-green-500 font-medium mb-2 tracking-wide">
                  Android App
                </h4>
                <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                  Let's start <br /> studying and playing
                </h2>
              </div>
            </motion.div>
            <motion.div // div component move up by fading in
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg flex flex-row justify-center items-center gap-2">
                <a href="https://play.google.com/store/apps/details?id=com.oocak.panelistmobilerevised">
                  Download
                </a>
                <BsAndroid2 />
              </button>
            </motion.div>
          </div>
          {/* -------------------- */}
          <div>
            <motion.form
              variants={fadeIn("left", 0.3)} // fade in left
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1  rounded-2xl flex flex-col gap-y-6 pb-24 p-6   items-start"
            >
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Image}
                alt=""
              />
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
