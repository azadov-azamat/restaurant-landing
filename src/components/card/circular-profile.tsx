import { memo, useState } from "react";
import Image from "../custom/image";
import { BLUR_IMAGE } from "../../utils/constants";

interface CircularImageProps {
  src: string;
  alt: string;
  name?: string;
  position?: string;
  size?: number;
  className?: string;
  blurDataURL?: string; // blur uchun optional
}

const CircularImage = memo(function CircularImage({
  src,
  alt,
  name,
  position,
  size = 96,
  className = ""
}: CircularImageProps) {
  const containerSize = size + 20;
  const imageSize = size;

  // Blur loading holati
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        className="
          rounded-full 
          bg-transparent 
          border 
          border-gray-300 
          shadow-sm
          flex 
          items-center 
          justify-center
        "
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
          padding: "5px",
        }}
      >
        <div
          className="rounded-full overflow-hidden"
          style={{
            width: `${imageSize}px`,
            height: `${imageSize}px`,
          }}
        >
          <Image
            src={loaded ? src : BLUR_IMAGE}
            alt={alt}
            width={imageSize}
            height={imageSize}
            onLoad={() => setLoaded(true)}
            className={`
              w-full h-full object-cover 
              transition-opacity duration-500 
              ${loaded ? "opacity-100" : "opacity-50 blur-sm"}
            `}
          />
        </div>
      </div>

      {(name || position) && (
        <div className="mt-3 text-center">
          {name && (
            <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
          )}
          {position && <p className="text-sm text-gray-300">{position}</p>}
        </div>
      )}
    </div>
  );
});

export default CircularImage;
