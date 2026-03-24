"use client";
import { useScroll } from "@/lib/contexts/scrollWrapper";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActiveTab = pathname === "/" || pathname === "/generate";
  const { Scroll, scrollDir } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`bg-white ${isActiveTab ? "flex" : "hidden"} z-50 justify-between items-center h-16.5 md:h-20 fixed left-1/2 -translate-x-1/2 w-[91vw] rounded-full px-3 pl-5 md:pl-8 transition-all duration-500
  ${Scroll ? "shadow-lg" : "shadow-none"}
  ${scrollDir === "down" ? "-top-32 opacity-0" : "top-7 opacity-100"}
`}
      >
        <div className="left-content flex items-center gap-6">
          <div className="relative logo w-7 md:w-36 h-7 md:h-36">
            <Link href="/">
              <Image
                src={"/linktree.png"}
                className="hidden md:block"
                fill
                alt="logo"
              />
              <Image
                src={"/linktreeShort.png"}
                className="block md:hidden"
                fill
                alt="logo"
              />
            </Link>
          </div>
          <ul className="hidden lg:flex items-center text-lg">
            <li className="navbar-links">Product</li>
            <li className="navbar-links">Template</li>
            <li className="navbar-links">Learn</li>
            <li className="navbar-links">Marketplace</li>
            <li className="navbar-links">Pricing</li>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:text-lg font-medium">
          <button className="p-4 py-3 sm:p-6 sm:py-4 rounded-xl bg-stone-200/75 hover:bg-stone-200 cursor-pointer">
            Login
          </button>
          <button className="bg-gray-900/95 md:bg-gray-900 hover:bg-gray-900/95 text-white p-4 py-3 sm:p-6 sm:py-4 rounded-full cursor-pointer">
            Create now
          </button>
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-5 sm:w-6 h-0.5 bg-gray-900 block"></span>
            <span className="w-5 sm:w-6 h-0.5 bg-gray-900 block"></span>
            <span className="w-5 sm:w-6 h-0.5 bg-gray-900 block"></span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col py-30 px-4 gap-8 text-[1.3rem] font-medium lg:hidden">
          <button
            className="absolute top-8 right-8 text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <li className="list-none">Product</li>
          <li className="list-none">Template</li>
          <li className="list-none">Learn</li>
          <li className="list-none">Marketplace</li>
          <li className="list-none">Pricing</li>
        </div>
      )}
    </>
  );
};

export default Navbar;
