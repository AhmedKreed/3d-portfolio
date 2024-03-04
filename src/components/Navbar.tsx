"use client";
import { logo, close, menu } from "@/assets";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { linkVariants, navVarient } from "@/utils/motion";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`bg-primary padding-X w-full flex items-center fixed py-5 top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt={"logo"}
            width={80}
            height={80}
            className="object-contain"
            priority
          />
          <p className="text-[18px] font-bold cursor-pointer">Ahmed Kreed</p>
        </Link>
        <ul className="list-none max-sm:hidden flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white font-medium text-[18px] cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        {/* mobile devices */}
        <div className="sm:hidden flex justify-end items-center cursor-pointer">
          <Image
            src={toggle ? close : menu}
            alt={"menu"}
            width={28}
            height={28}
            className="object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        <motion.ul
          initial={false}
          animate={toggle ? "open" : "closed"}
          variants={navVarient}
          className="sm:hidden p-9 black-gradient absolute right-6 bottom-[-210px] flex flex-col gap-10 w-[200px] rounded-3xl"
        >
          {navLinks.map((link, index) => (
            <motion.li
              initial={false}
              animate={toggle ? "open" : "closed"}
              variants={linkVariants(index / 7)}
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white font-medium text-[18px] cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;
