import { Outlet } from "react-router-dom";
import { NavbarWidget, FooterWidget } from "../widgets";
import { useCallback, useMemo, useState } from "react";

export default function RootLayout() {
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
        <NavbarWidget />
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

        <main className="relative container ">
          <Outlet />
        </main>
      </div>
      <FooterWidget/>
    </div>
  );
}
