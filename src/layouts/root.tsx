import { Outlet } from "react-router-dom";
import { NavbarWidget, FooterWidget } from "../widgets";
import { useCallback, useMemo, useState } from "react";

export default function RootLayout() {
   const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);


  const overlayStyle = useMemo(
    () => "absolute inset-0 bg-white/40 backdrop-blur-[30px]",
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
    <div className=" w-full">
      {/* Dark blurred overlay */}
      <div className={overlayStyle} />
      
      <div className="fixed inset-0 -z-10 bg-black/80" />

      <NavbarWidget />
      <div className="relative container mx-auto overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/main.png"
            alt="Background"
            onLoad={handleLoad}
             className={bgImageClasses}
            loading="lazy"
          />
          <img
              src="/images/main.png"
              alt="Background 2"
              className={bgImageClasses}
              loading="lazy"
          />
        </div>

        <main className="relative mx-auto container min-h-screen">
          <Outlet />
        </main>
      </div>
      
      
      {/* <main className="relative mx-auto container min-h-screen">
        <Outlet />
      </main> */}
      <FooterWidget/>
    </div>
  );
}
