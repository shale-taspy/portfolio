'use client';

import Link from 'next/link';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { IoIosSunny } from 'react-icons/io';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#111317] text-white border-b border-[#2d3037]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-base font-semibold tracking-wide shrink-0">
          Shale A. <span className="text-orange-500">Taspy</span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-8 text-sm font-semibold text-white/70">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="transition-colors duration-200 hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons + Resume */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="https://github.com/shale-taspy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 border border-white/20 text-white/60 hover:text-white hover:border-[#eb7a52] transition-all duration-300 text-lg"
          >
            <FiGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sataspy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 border border-white/20 text-white/60 hover:text-white hover:border-[#eb7a52] transition-all duration-300 text-lg"
          >
            <SlSocialLinkedin />
          </Link>
          <button
            aria-label="Toggle theme"
            className="p-2 border border-white/20 text-white/60 hover:text-white hover:border-[#eb7a52] transition-all duration-300 text-lg"
          >
            <IoIosSunny />
          </button>
          <Link
            href="https://drive.google.com/file/d/1siZKitoi3PgwfBulgTVykaL6Axin4KrQ/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-4 py-1.5 text-sm font-medium tracking-widest uppercase border border-white/40 text-white/70 hover:bg-[#eb7a52] hover:border-[#eb7a52] hover:text-black transition-all duration-300"
          >
            Resume
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
