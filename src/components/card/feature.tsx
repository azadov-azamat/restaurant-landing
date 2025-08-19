import React from "react";
import Image from "../custom/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  width: number;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, width }) => {
  return (
    <div className="grid grid-rows-subgrid grid-cols-subgrid row-span-3">
      <Image src={icon} alt={title} width={width} className="p-0 m-0" />
      <h3 className="text-[34px] text-black font-semibold mb-4 mt-2">{title}</h3>
      <p className="text-base leading-snug">{description}</p>
    </div>
  );
};

export default FeatureCard;
