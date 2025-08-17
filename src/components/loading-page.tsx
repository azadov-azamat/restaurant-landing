import { useCallback, useMemo, useState } from "react";

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
      `object-cover object-center transition-opacity duration-500 ${
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
          <img
            src="/images/main.jpg"
            alt="Background"
            onLoad={handleLoad}
            className={bgImageClasses}
            loading="lazy"
          />
          <img
              src="/images/main-2.jpg"
              alt="Background 2"
              className={bgImageClasses}
              loading="lazy"
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
