"use client";
import SectionWrapper from "@/hoc/SectionWrapper";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className="sectionSubText text-center">WHAT I HAVE DONE SO FAR</p>
        <h2 className="sectionHeadText text-center"> Work Experience.</h2>
        <h1 className="text-center mt-20 text-3xl"> No work experience yet.</h1>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
