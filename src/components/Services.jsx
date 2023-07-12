import React from "react"; // react icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion"; // animation library
// variants
import { fadeIn } from "../variants"; // animation variants/controllers

// fake data
const services = [
  {
    name: "Creativity",
    description:
      "Searching what kind of vocabulary you need will improve your creativity and will make more sense of meaning of the language and improve your resoning",
  },
  {
    name: "Development",
    description:
      "Developing your own vocabulary base on your interest help you master at language faster.",
  },
  {
    name: "Entertaintment",
    description:
      "Games can make it easier to learn educational contents and develop cognitive skills.",
  },
  {
    name: "Quizzes",
    description:
      "Quizzes help you identify what you know and what you don't know",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)} // animation
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What Can BisLingo Do?</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Give you freedom to list your words and make sure you interact
              with them.
            </h3>
            {/*<button className="btn btn-sm">See my work</button>*/}
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)} // fade in animation
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service; // destructure service
                //  pass service data to component
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <div className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        ✓
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
