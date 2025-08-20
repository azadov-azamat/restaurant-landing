import { useState, useCallback, useMemo } from "react";
import Image from "./custom/image";

interface BackgroundProps {
  onImagesLoaded?: () => void;
}

export default function Background({ onImagesLoaded }: BackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onImagesLoaded?.(); // parent xohlasa, xabar beradi
  }, [onImagesLoaded]);

  const overlayStyle = useMemo(
    () => "absolute inset-0 bg-white/20 backdrop-blur-[20px]",
    []
  );

  const bgImageClasses = useMemo(
    () =>
      `object-cover object-center transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`,
    [isLoaded]
  );

  return (
    <>
      {/* Dark blurred overlay */}
      <div className={overlayStyle} />
      <div className="fixed inset-0 -z-10 bg-black/80" />
      <div className="absolute inset-0 -z-10 container">
        <Image
          src="/images/main.jpg"
          alt="Background"
          onLoad={handleLoad}
          className={bgImageClasses}
        />
        <Image
          src="/images/main-2.jpg"
          alt="Background 2"
          className={bgImageClasses}
        />
      </div>
    </>
  );
}
