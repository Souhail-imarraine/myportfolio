'use client'

import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotateScale {
          from {
            opacity: 0;
            transform: scale(0) rotate(180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .footer-column {
          opacity: 0;
        }

        .visible .footer-column {
          animation: slideUp 0.8s ease-out forwards;
        }

        .visible .footer-column:nth-child(1) { animation-delay: 0.15s; }
        .visible .footer-column:nth-child(2) { animation-delay: 0.3s; }
        .visible .footer-column:nth-child(3) { animation-delay: 0.45s; }
        .visible .footer-column:nth-child(4) { animation-delay: 0.6s; }

        .social-icon {
          opacity: 0;
        }

        .visible .social-icon {
          animation: rotateScale 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .visible .social-icon:nth-child(1) { animation-delay: 0.4s; }
        .visible .social-icon:nth-child(2) { animation-delay: 0.5s; }
        .visible .social-icon:nth-child(3) { animation-delay: 0.6s; }

        .footer-link {
          opacity: 0;
        }

        .visible .footer-link {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .visible .footer-column:nth-child(2) .footer-link:nth-child(1) { animation-delay: 0.6s; }
        .visible .footer-column:nth-child(2) .footer-link:nth-child(2) { animation-delay: 0.65s; }
        .visible .footer-column:nth-child(2) .footer-link:nth-child(3) { animation-delay: 0.7s; }
        .visible .footer-column:nth-child(2) .footer-link:nth-child(4) { animation-delay: 0.75s; }

        .visible .footer-column:nth-child(3) .footer-link:nth-child(1) { animation-delay: 0.75s; }
        .visible .footer-column:nth-child(3) .footer-link:nth-child(2) { animation-delay: 0.8s; }
        .visible .footer-column:nth-child(3) .footer-link:nth-child(3) { animation-delay: 0.85s; }
        .visible .footer-column:nth-child(3) .footer-link:nth-child(4) { animation-delay: 0.9s; }
      `}</style>

      <footer ref={footerRef} id="footer" className={`relative bg-black text-white py-16 overflow-hidden ${isVisible ? 'visible' : ''}`}>
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/5778-185369732.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About Column */}
            <div className="footer-column">
              <p className="text-gray-400 leading-relaxed mb-6">
                Full-stack developer passionate about creating exceptional digital experiences through clean code and innovative solutions.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/Souhail-imarraine" target="_blank" rel="noopener noreferrer" 
                   className="social-icon w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/souhail-imarraine/" target="_blank" rel="noopener noreferrer"
                   className="social-icon w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                   className="social-icon w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="footer-link text-gray-400 hover:text-white transition-colors flex items-center group">
                      <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="footer-column">
              <h4 className="text-xl font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {['Web Development', 'Mobile Apps', 'UI/UX Design', 'API Development'].map((item) => (
                  <li key={item}>
                    <a href="#services" className="footer-link text-gray-400 hover:text-white transition-colors flex items-center group">
                      <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>souhailimarrainedevo@gmail.com</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0620424918</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                    <span>Marrakech,  Morocco</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Souhail IMARRAINE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}