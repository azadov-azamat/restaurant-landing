import { useCallback, useMemo, useState } from "react";
import Image from "./custom/image";

export default function LoadingPage() {
   const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);


  const overlayStyle = useMemo(
    () => "absolute inset-0 bg-white/20 backdrop-blur-[20px]",
    []
  );

  const bgImageClasses = useMemo(
    () =>
      `w-full h-full object-cover object-center transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`,
    [isLoaded]
  );

  return (
    <div className="relative w-full">
      {/* Dark blurred overlay */}
      <div className={overlayStyle} />
      
      <div className="fixed inset-0 -z-10 bg-black/80" />

      <div className="relative container overflow-hidden ">
        <div className="absolute inset-0 -z-10">
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
        <main>
            <div className="flex items-center justify-center h-screen"> 
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold">Loading...</h1>
                    <p className="text-lg  mt-4">Please wait while we load the content.</p>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
}
