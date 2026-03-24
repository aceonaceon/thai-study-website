'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/thai-university', label: '泰國大學' },
  { href: '/thai-program', label: '國際學程' },
  { href: '/thai-school', label: '國際學校' },
  { href: '/thai-camp', label: '夏令營' },
  { href: '/blog', label: '留學攻略' },
  { href: '/about', label: '關於我們' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="navbar">
      <nav className="navbar__container">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">泰國留學</span>
          <span className="text-sm text-gray-500 hidden sm:inline">by 學無界</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar__menu hidden md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-primary transition-colors ${
                pathname === href ? 'text-primary border-b-2 border-primary' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA Button + Mobile menu button */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://lin.ee/Tx17iiE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            免費諮詢
          </Link>

          {/* Hamburger / Close button */}
          <button
            className="md:hidden p-2 text-gray-600"
            aria-label={menuOpen ? '關閉選單' : '打開選單'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Navigation */}
      <div
        className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out relative z-50 bg-white ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 pb-4">
          <div className="flex flex-col space-y-3 pt-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-primary transition-colors py-2 ${
                  pathname === href
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
