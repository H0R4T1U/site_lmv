"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Acasă" },
    { href: "/despre", label: "Despre" },
    { href: "/galerie", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ];

  return (
  <nav className="w-full bg-[linear-gradient(180deg,rgba(30,9,3,1)_0%,rgba(43,15,6,1)_100%)] border-b border-[#2B0F06]">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-2 px-4 sm:px-8">
        <Logo />
        {/* Desktop Menu */}
        <div className="hidden md:flex ml-auto space-x-8 text-xl sm:text-2xl">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-[var(--text-white)] my-font hover:text-[var(--secondary-text)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--text-white)] text-2xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--primary-background)] border-t border-[var(--primary-background-darker)]">
          <div className="flex flex-col space-y-2 py-4 px-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[var(--text-white)]  text-xl my-font hover:underline transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
