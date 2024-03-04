"use client";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { services } from "@/constants";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "@/hoc/SectionWrapper";
import { EmojiCanvas } from "./canvas";
const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Next.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to
        life!
      </motion.p>
      <div className="flex flex-wrap justify-around gap-10">
        <EmojiCanvas />
        {services.map((service, index) => (
          <ServiceCard index={index} key={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
