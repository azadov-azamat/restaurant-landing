import { Outlet } from "react-router-dom";
import { NavbarWidget, FooterWidget } from "../widgets";
import { useCallback, useMemo, useState } from "react";
import Image from "../components/custom/image";
import ScrollToTop from "../components/scroll-to-top";

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

      <div className="relative container overflow-hidden">
        <NavbarWidget />
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/main.webp"
            alt="Background"
            onLoad={handleLoad}
            visibleByDefault={isLoaded}
            className={bgImageClasses}
          />
          <Image
              src="/images/main-2.webp"
              alt="Background 2"
              className={bgImageClasses}
          />
        </div>
        <ScrollToTop/>
        <main className="relative container ">
            <Outlet />
        </main>
      </div>
      <FooterWidget/>
    </div>
  );
}
