"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Comfort", href: "/comfort" },
  { label: "Climate", href: "/climate" },
  { label: "Cuisine", href: "/cuisine" },
  { label: "Craft", href: "/craft" },
  { label: "Care", href: "/care" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Page-based text color
  const isComfortPage = pathname === "/comfort";

  const textColor = isComfortPage
    ? "text-[#000000]"
    : "text-[#F8F1E7]";

  // Mobile menu background
  const mobileMenuBg = isComfortPage
    ? "bg-[#F8F1E7]"
    : "bg-[#282522]";

  return (
    <header className="absolute z-50 w-full bg-transparent">
      <nav className="mx-auto flex min-h-[100px] max-w-[1600px] items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 min-[1070px]:grid min-[1070px]:grid-cols-12">

        {/* Logo + Brand */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2 min-[1070px]:col-span-4">

          {/* Logo */}
          <Link
            href="/"
            aria-label="ChigDil home"
            className="relative z-10 flex shrink-0 items-center"
          >
            <Image
              src="/assets/logo/ChigDil.png"
              alt="ChigDil Homestays Logo"
              width={149}
              height={179}
              priority
              className="h-[125px] w-auto object-contain sm:h-[125px] lg:h-[140px] xl:h-[140px] 2xl:h-[140px] min-[1920px]:h-[140px]"
            />
          </Link>

          {/* Brand Name */}
          <div
            className={`-translate-y-9 flex items-center gap-1 whitespace-nowrap ${textColor}`}
          >
            <span className="font-moulin text-[16px] font-medium leading-none">
              ChigDil
            </span>

            <span
              aria-hidden="true"
              className="font-moulin -translate-y-1 text-[7px] leading-none"
            >
              ◆
            </span>

            <span className="font-moulin text-[16px] font-normal leading-none">
              Rumbak Homestays
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div
          className={`hidden min-[1070px]:col-span-8 min-[1070px]:flex -translate-y-9 shrink-0 items-center justify-end gap-5 xl:gap-9 2xl:gap-10 min-[1920px]:gap-10 ${textColor}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-neptune text-[16px] font-light leading-none transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/booking"
            className="whitespace-nowrap font-neptune text-[16px] font-light leading-none transition-opacity hover:opacity-60"
          >
            Book Your Stay
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`flex h-10 w-10 shrink-0 items-center justify-center text-3xl min-[1070px]:hidden ${textColor}`}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile / Tablet Navigation */}
      {menuOpen && (
        <div
          className={`absolute left-0 top-full flex w-full flex-col gap-5 border-t border-black/10 px-6 py-6 shadow-md min-[1070px]:hidden ${mobileMenuBg} ${textColor}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-neptune text-[16px] font-normal"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="font-neptune text-[16px] font-normal"
          >
            Book Your Stay
          </Link>
        </div>
      )}
    </header>
  );
}