import Link from "next/link";
import { ComputersCanvas } from ".";
import Mouse from "./Mouse";

const Hero = () => (
  <section className="relative w-full h-screen mx-auto ">
    <div className="padding-X absolute inset-0 top-[120px] max-w-7xl mx-auto flex gap-5 items-start">
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
      <div>
        <h1 className="heroHeadText">
          Hi I&apos;m <span className="text-[#915eff]">Ahmed</span>
        </h1>
        <p className="heroSubText mt-2 text-white-100">
          I&apos;m Front-end developer
        </p>
      </div>
    </div>
    <ComputersCanvas />
    <div className="absolute xs:bottom-10 bottom-32 w-full justify-center items-center">
      <Link href={"#about"} className="flex justify-center items-center">
        <div className="w-[35px] h-[53px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <Mouse />
        </div>
      </Link>
    </div>
  </section>
);

export default Hero;
