import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  width: number;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, width }) => {
  return (
    <div className="grid grid-rows-subgrid grid-cols-subgrid row-span-3 p-6 ">
      <img src={icon} alt={title} width={width} className="p-0 m-0"/>
      <h3 className="text-3xl font-bold text-black">{title}</h3>
      <p className="text-sm leading-snug">{description}</p>
    </div>
  );
};

export default FeatureCard;
