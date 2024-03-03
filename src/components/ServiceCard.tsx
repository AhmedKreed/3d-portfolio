import { StaticImageData } from "next/image";

interface P {
  title: string;
  icon: StaticImageData;
}
const ServiceCard = ({ title, icon }: P) => {
  return <div>ServiceCard</div>;
};

export default ServiceCard;
