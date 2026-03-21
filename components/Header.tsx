'use client';

import Link from 'next/link';

export default function Header() {
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
          <Link href="/thai-university" className="hover:text-primary transition-colors">
            泰國大學
          </Link>
          <Link href="/thai-program" className="hover:text-primary transition-colors">
            國際學程
          </Link>
          <Link href="/thai-school" className="hover:text-primary transition-colors">
            國際學校
          </Link>
          <Link href="/thai-camp" className="hover:text-primary transition-colors">
            夏令營
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            留學攻略
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            關於我們
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://lin.ee/Tx17iiE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            免費諮詢
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            aria-label="打開選單"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div id="mobile-menu" className="hidden md:hidden border-t border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 pb-4">
          <div className="flex flex-col space-y-3 pt-4">
            <Link href="/thai-university" className="text-gray-600 hover:text-primary transition-colors py-2">
              泰國大學
            </Link>
            <Link href="/thai-program" className="text-gray-600 hover:text-primary transition-colors py-2">
              國際學程
            </Link>
            <Link href="/thai-school" className="text-gray-600 hover:text-primary transition-colors py-2">
              國際學校
            </Link>
            <Link href="/thai-camp" className="text-gray-600 hover:text-primary transition-colors py-2">
              夏令營
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors py-2">
              留學攻略
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors py-2">
              關於我們
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
