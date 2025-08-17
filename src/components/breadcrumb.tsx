import React from "react";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string; // agar link bo‘lsa
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-lg">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center space-x-2 ">
            {!isLast ? (
              <a
                href={item.href || "#"}
                className="font-normal text-primary-gray" 
              >
                {item.label}
              </a>
            ) : (
              <span className="text-black">{item.label}</span>
            )}

             {!isLast && (
              <ChevronRight className="w-4 h-4 text-primary-gray" />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
