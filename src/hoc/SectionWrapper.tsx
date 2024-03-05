"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { JSX } from "react";

const SectionWrapper = (
  Component: () => JSX.Element,
  idName: string | undefined
) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer("", "")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="padding-X max-w-7xl mx-auto relative z-0 section-p overflow-hidden"
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
