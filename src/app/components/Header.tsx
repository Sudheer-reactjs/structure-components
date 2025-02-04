"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string) => (pathname === path ? "text-blue-500" : "");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isCollapsed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isCollapsed]);

  const handleLinkClick = () => {
    setIsCollapsed(false);
  };

  return (
    <header className="py-6 bg-white shadow-md">
      <div className="container mx-auto px-6">
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image src="/next.svg" alt="Logo" width={100} height={38} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="block md:hidden text-gray-700"
          >
            {isCollapsed ? "Close" : "Menu"}
          </button>

          {/* Navigation */}
          <nav
            className={`${
              isCollapsed
                ? "fixed top-0 left-0 w-4/5 h-full bg-gray-100 p-6 z-50"
                : "hidden"
            } md:block`}
          >
            <ul
              className={`${
                isCollapsed ? "flex flex-col gap-6" : "flex gap-4"
              } md:flex-row`}
            >
              <li className={isActive("/about-us")}>
                <Link href="/about-us" onClick={handleLinkClick} className="font-medium">
                  About Us
                </Link>
              </li>
              <li className={isActive("/blog")}>
                <Link href="/blog" onClick={handleLinkClick} className="font-PlaywriteVN"> 
                  Blog
                </Link>
              </li>
            </ul>
            
             
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
