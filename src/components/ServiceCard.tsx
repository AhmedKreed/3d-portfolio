import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Tilt } from "react-tilt";

interface P {
  title: string;
  icon: StaticImageData;
  index: number;
}
const ServiceCard = ({ title, icon, index }: P) => {
  const options = {
    reverse: true,
  };
  return (
    <Tilt options={options} className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.3, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image
            src={icon}
            alt="web-development"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
