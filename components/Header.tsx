
import React from "react"
import Link from "next/link"

import { navLinks } from "@/lib/data"
import clsx from "clsx";


export default function Header() {
  return (
    <header className="z-[999] relative">
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-full h-[4.5rem] 
          border border-white border-opacity-40 
          bg-white bg-opacity-80 rounded-none 
          shadow-lg shadow-black/[0.03] 
          backdrop-blur-[0.5rem] 
          sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full 
          dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75
          `}
      >

      </div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap flex-wrap-balance items-center justify-center gap-y-1 gap-x-2 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href} className="relative flex items-center justify-center h-3/4">
              <Link
                className={clsx(
                  "flex w-full items-center justify-center py-3 px-3 sm:px-0 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-100",
                )}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>


    </header >
  );
}
