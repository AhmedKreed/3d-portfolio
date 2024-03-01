"use client";
import { logo, close, menu } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [acitve, setAcitve] = useState("");
  return (
    <nav className="padding-X w-full flex items-center fixed py-5 top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setAcitve("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt={"logo"}
            width={36}
            height={36}
            className="object-contain"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
