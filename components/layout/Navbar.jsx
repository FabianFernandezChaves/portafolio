"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="w-full">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto py-4">
        <Link
          href="/"
          className="flex items-center w- space-x-3 rtl:space-x-reverse"
        >
          <span className="font-bold text-xl md:text-3xl">
            Fabián Fernández
          </span>
        </Link>
        {/* Menú visible en desktop */}
        <div className="hidden md:flex w-fit gap-5 text-base">
          <Link
            href="/"
            className={`transition ease-in-out hover:text-amber-500 hover:scale-110 ${isActive("/") ? "text-amber-500 font-semibold" : ""}`}
          >
            About Me
          </Link>
          <Link
            href="/key-projects"
            className={`transition ease-in-out hover:text-amber-500 hover:scale-110 ${isActive("/key-projects") ? "text-amber-500 font-semibold" : ""}`}
          >
            Key Projects
          </Link>
        </div>
        {/* Botón hamburguesa visible en móvil */}
        <button
          className="block md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menú lateral para móvil */}
      <div
        className={`w-full fixed top-0 right-0 bg-background mx-auto px-4 py-4 h-full shadow-lg transform transition-transform duration-300 z-10 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-2"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <Link
          href="/"
          className="flex items-center w- space-x-3 rtl:space-x-reverse border-b"
        >
          <span className="font-bold text-xl">Fabián Fernández</span>
        </Link>
        <div className="flex flex-col gap-5 items-center pt-5">
        <Link
            href="/"
            className={`transition ease-in-out hover:text-amber-500 hover:scale-110 ${isActive("/") ? "text-amber-500 font-semibold" : ""}`}
          >
            About Me
          </Link>
          <Link
            href="/key-projects"
            className={`transition ease-in-out hover:text-amber-500 hover:scale-110 ${isActive("/key-projects") ? "text-amber-500 font-semibold" : ""}`}
          >
            Key Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
