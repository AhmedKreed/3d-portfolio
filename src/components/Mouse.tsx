"use client";
import { motion } from "framer-motion";
const Mouse = () => (
  <motion.div
    animate={{
      y: [0, 24, 0],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
    }}
    className="rounded-full bg-secondary w-3 h-3 mb-1"
  />
);

export default Mouse;
