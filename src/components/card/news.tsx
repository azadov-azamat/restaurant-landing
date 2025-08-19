import React from "react";
import Image from "../custom/image";

type NewsCardProps = {
  imageSrc: string;
  avatarSrc: string;
  name: string;
  description: string;
  className?: string;
};

const NewsCardComponent: React.FC<NewsCardProps> = ({
  imageSrc,
  avatarSrc,
  name,
  description,
  className = "",
}) => {
  return (
    <div
      className={`relative w-[360px]  rounded-3xl bg-white/50 backdrop-blur-[10px] p-5 ${className}`}
    >
      {/* Preview image */}
      <div className="absolute -top-20 left-4">
        <Image
          src={imageSrc}
          alt="Preview"
          className="w-[213px] h-[156px] object-cover object-center rounded-3xl shadow-2xl"
        />
      </div>

      {/* Content */}
      <div className="mt-16">
        <p className="text-base font-normal leading-relaxed mb-4 line-clamp-4">
          {description}
        </p>

        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full overflow-hidden">
            <Image
              src={avatarSrc}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-lg font-normal">{name}</span>
        </div>
      </div>
    </div>
  );
};

export const NewsCard = React.memo(NewsCardComponent);
