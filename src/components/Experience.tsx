"use client";
import SectionWrapper from "@/hoc/SectionWrapper";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
const options = {
  scale: 1.5,
  speed: 2000,
};
const Experience = () => (
  <>
    <motion.div variants={textVariant(0)} className="overflow-hidden">
      <p className="sectionSubText text-center">WHAT I HAVE DONE SO FAR</p>
      <h2 className="sectionHeadText text-center"> Work Experience.</h2>
      <Tilt options={options} className="py-20">
        <h1 className="text-center mb-4 text-3xl leading-10">
          {" "}
          No work experience yet. ☹️
        </h1>
        <h2 className="text-center text-2xl leading-10">
          Help me start my work experience 😁
        </h2>
      </Tilt>
    </motion.div>
  </>
);

export default SectionWrapper(Experience, "work");
