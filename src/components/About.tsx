'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const technologies = [
    { 
      name: 'HTML5', 
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" />
    },
    { 
      name: 'CSS3', 
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8" />
    },
    { 
      name: 'JavaScript', 
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
    },
    { 
      name: 'React', 
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
    },
    { 
      name: 'PHP', 
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-8 h-8" />
    },
       { 
      name: 'Laravel', 
      icon: (
        <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
          <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.011.01-.021.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/>
        </svg>
      )
    },
    { 
      name: 'Spring Boot', 
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-8 h-8" />
    },
  ]

  return (
    <>
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-rotate-in {
          animation: rotateIn 0.8s ease-out forwards;
        }

        .tech-icon {
          opacity: 0;
        }

        .stat-item {
          opacity: 0;
        }

        .visible .tech-icon:nth-child(1) { animation-delay: 0.1s; }
        .visible .tech-icon:nth-child(2) { animation-delay: 0.2s; }
        .visible .tech-icon:nth-child(3) { animation-delay: 0.3s; }
        .visible .tech-icon:nth-child(4) { animation-delay: 0.4s; }
        .visible .tech-icon:nth-child(5) { animation-delay: 0.5s; }
        .visible .tech-icon:nth-child(6) { animation-delay: 0.6s; }
        .visible .tech-icon:nth-child(7) { animation-delay: 0.7s; }

        .visible .stat-item:nth-child(1) { animation-delay: 0.2s; }
        .visible .stat-item:nth-child(2) { animation-delay: 0.4s; }
        .visible .stat-item:nth-child(3) { animation-delay: 0.6s; }

        .tech-tooltip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: white;
          color: black;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .tech-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: white;
        }

        .tech-icon:hover .tech-tooltip {
          opacity: 1;
        }
      `}</style>

      <section ref={sectionRef} id="about" className={`py-20 bg-black ${isVisible ? 'visible' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-5 text-white ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            About Me
          </h2>
            <div className="w-24 mb-16 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className={`text-gray-300 text-lg leading-relaxed ${isVisible ? 'animate-slide-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                I'm a passionate Full Stack Developer with expertise in building modern web applications.
                With a strong foundation in both frontend and backend technologies, I create seamless
                digital experiences that make a difference.
              </p>

              <p className={`text-gray-300 text-lg leading-relaxed ${isVisible ? 'animate-slide-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                My journey in web development has equipped me with a diverse skill set, allowing me to
                tackle complex challenges and deliver innovative solutions that exceed expectations.
              </p>

              {/* Tech Stack Icons */}
              <div className="pt-6">
                <h3 className={`text-xl font-semibold mb-6 text-white ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                  Technologies I Work With:
                </h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={tech.name}
                      className={`tech-icon group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:scale-110 transition-all duration-300 text-white ${isVisible ? 'animate-bounce-in' : ''}`}
                    >
                      {tech.icon}
                      <span className="tech-tooltip">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="space-y-6">
              <div className={`stat-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 ${isVisible ? 'animate-rotate-in' : ''}`}>
                <div className="text-4xl font-bold text-white mb-2">1+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>

              <div className={`stat-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 ${isVisible ? 'animate-rotate-in' : ''}`}>
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>

              <div className={`stat-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 ${isVisible ? 'animate-rotate-in' : ''}`}>
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}