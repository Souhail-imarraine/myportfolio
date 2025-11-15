'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .menu-enter {
          animation: slideDown .2s ease-out forwards;
        }

        /* Black flow background */
        .header-black-flow {
          position: relative;
          overflow: hidden;
        }
        .header-black-flow::before {
          content: '';
          position: absolute;
          inset: 0;
          /* Subtle layered gradients (monochrome) */
          background:
            radial-gradient(1000px 400px at 20% -20%, rgba(255,255,255,0.06), transparent 60%),
            radial-gradient(900px 360px at 80% 120%, rgba(255,255,255,0.05), transparent 60%),
            linear-gradient(120deg, #000 10%, #0a0a0a 45%, #111 60%, #000 90%);
          background-size: 200% 200%, 200% 200%, 200% 200%;
          animation: flow 16s ease-in-out infinite;
          opacity: 0.95;            /* Adjust intensity here */
          pointer-events: none;
          z-index: 0;
        }
        @keyframes flow {
          0%   { background-position: 0% 50%, 100% 50%, 0% 50%; }
          50%  { background-position: 100% 50%, 0% 50%, 100% 50%; }
          100% { background-position: 0% 50%, 100% 50%, 0% 50%; }
        }
        /* Link animations */
        .nav-link {
          position: relative;
          display: inline-block;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, white, gray);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      <header className={`header-black-flow fixed top-0 left-0 right-0 z-[100] ${scrolled ? 'border-b border-white/10 backdrop-blur-xl bg-black/95' : ''}`}>        
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link
              href="/"
              onClick={closeMenu}
              className="text-white hover:scale-110 transition-transform duration-300"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
              </svg>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="nav-link text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">About</a>
              <a href="#Projects" className="nav-link text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">Projects</a>
              <a href="#services" className="nav-link text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">Services</a>
              <a href="#testimonials" className="nav-link text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">Testimonials</a>
              <a href="#contact" className="nav-link text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                Contact
              </a>
            </nav>

            {/* Right-side socials (desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com/Souhail-imarraine" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234C5.662 21.302 4.967 19.16 4.967 19.16c-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.558 21.187 24 16.69 24 11.39 24 4.763 18.627 0 12 0z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/souhail-imarraine/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368c0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white hover:bg-white hover:text-black transition"
            >
              <svg className={`w-6 h-6 transition-transform ${open ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden menu-enter border-t border-white/10 bg-black/90 backdrop-blur">
            <div className="mx-auto max-w-7xl px-6 py-4 space-y-2">
              <a href="#about" onClick={closeMenu} className="block px-3 py-2 rounded-lg text-gray-300 hover:text-black hover:bg-white transition-all duration-300 hover:translate-x-2">About</a>
              <a href="#Projects" onClick={closeMenu} className="block px-3 py-2 rounded-lg text-gray-300 hover:text-black hover:bg-white transition-all duration-300 hover:translate-x-2">Projects</a>
              <a href="#services" onClick={closeMenu} className="block px-3 py-2 rounded-lg text-gray-300 hover:text-black hover:bg-white transition-all duration-300 hover:translate-x-2">Services</a>
              <a href="#testimonials" onClick={closeMenu} className="block px-3 py-2 rounded-lg text-gray-300 hover:text-black hover:bg-white transition-all duration-300 hover:translate-x-2">Testimonials</a>
              <a href="#contact" onClick={closeMenu} className="block px-3 py-2 rounded-lg text-black transition-all duration-300 hover:translate-x-2 hover:shadow-lg">Contact</a>
              {/* Socials in mobile */}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://github.com/Souhail-imarraine" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.261.793-.577v-2.234C5.662 21.302 4.967 19.16 4.967 19.16c-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.558 21.187 24 16.69 24 11.39 24 4.763 18.627 0 12 0z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/souhail-imarraine/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368c0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}