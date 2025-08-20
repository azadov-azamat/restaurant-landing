import React, { useState } from "react";
import { motion } from "framer-motion";

interface TabProps {
  tabs: string[];
  defaultTab?: number;
  onChange?: (index: number) => void;
}

const TabNavigation: React.FC<TabProps> = ({ tabs, defaultTab = 0, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    if (onChange) onChange(index);
  };

  return (
    <div className="flex justify-center z-10">
      <div className="relative inline-flex rounded-full bg-white/30 backdrop-blur-[5px] md:px-6 px-4 md:h-[52px] py-2 ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={`relative px-6 py-1 md:text-lg text-sm font-normal rounded-full transition-colors duration-200 text-black z-10
            `}
          >
            {tab}
            {activeTab === index && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 -z-10 bg-white/40 backdrop-blur-[10px] rounded-full shadow-md"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
