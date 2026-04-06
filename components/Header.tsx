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
      <nav
        className="flex items-center justify-between h-full"
        style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}
      >
        {/* Logo — centered Wes Anderson style */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-xl font-bold tracking-tight"
            style={{
              fontFamily: "'Fraunces', 'Noto Serif TC', serif",
              color: 'var(--primary)',
              letterSpacing: '-0.02em',
            }}
          >
            泰國留學
          </span>
          <span
            className="text-xs font-medium hidden sm:inline"
            style={{
              color: 'var(--accent)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            by 學無界
          </span>
        </Link>

        {/* Desktop Navigation — symmetrical */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium transition-colors relative"
                style={{
                  color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                  letterSpacing: '0.02em',
                }}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[2px]"
                    style={{ background: 'var(--accent)' }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="https://lin.ee/Tx17iiE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            免費諮詢
          </Link>

          <button
            className="md:hidden p-2"
            style={{ color: 'var(--text-muted)' }}
            aria-label={menuOpen ? '關閉選單' : '打開選單'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(42, 37, 32, 0.4)' }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 relative z-50 ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'var(--bg)',
          borderTop: '1px solid var(--border-light)',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <nav className="py-4 px-6" style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + '/');
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm font-medium transition-colors"
                  style={{
                    color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                    borderBottom: '1px solid var(--border-light)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="https://lin.ee/Tx17iiE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3 text-center"
              onClick={() => setMenuOpen(false)}
            >
              免費諮詢
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
