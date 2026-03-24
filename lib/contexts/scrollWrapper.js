"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { usePathname } from "next/navigation";

export const ScrollContext = createContext();

export function useScroll() {
  return useContext(ScrollContext);
}

const ScrollProvider = ({ children }) => {
  const [Scroll, setScroll] = useState(false);
  const [ScrollY, setScrollY] = useState(0);
  const [scrollDir, setscrollDir] = useState("up");
  const pathname = usePathname();

  useEffect(() => {
    window.scrollY > 80 && setScroll(true);

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll === 0) setscrollDir("up");
      if (currentScroll > lastScrollY) {
        setscrollDir("down");
      } else {
        setscrollDir("up");
      }
      lastScrollY = window.scrollY;
      setScroll(window.scrollY > 80);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ Scroll, ScrollY, scrollDir }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
