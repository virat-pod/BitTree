"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isActiveTab = pathname === "/" || pathname === "/generate";

  return (
    <footer className={`bg-gray-900 ${isActiveTab ? "block" : "hidden"} text-zinc-400 px-8 lg:px-20 py-16`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-12 border-b border-zinc-700">
          <div className="flex flex-col gap-4 max-w-xs">
            <h2 className="text-white text-2xl font-black">Linktree*</h2>
            <p className="text-sm leading-relaxed">
              The original link in bio tool connecting audiences to all of your
              content with just one link.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-semibold text-sm">Product</h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">
                  Marketplace
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Templates
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Pricing
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-semibold text-sm">Learn</h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">
                  Blog
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Help Center
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Contact Us
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-semibold text-sm">Company</h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">
                  About
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Careers
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Press
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-sm">
          <p>© 2024 Linktree. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
