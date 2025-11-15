'use client'

import { useEffect, useRef, useState } from 'react'

export default function Projects() {
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



  const projects = [
    {
      title: 'WeCare',
      category: 'Web Application',
      image: 'img_project/general-practitioner.jpg',
      description: 'Doctors Reservation Management System',
      githubUrl: 'https://github.com/Souhail-imarraine/WeCare',
      liveUrl: '#',
      technologies: ['Laravel', 'Blade', 'MySQL', 'Tailwind CSS', 'ajax','javaScript']
    },
    {
      title: 'Tricol - Gestion Stock FIFO',
      category: 'Enterprise Application',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      description: 'Système complet de gestion des commandes fournisseurs et stock avec valorisation FIFO pour l\'entreprise Tricol',
      githubUrl: 'https://github.com/Souhail-imarraine/Gestion-d-approvisionnement',
      liveUrl: '#',
      technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'REST API', 'FIFO Algorithm', 'Docker']
    },
    {
      title: 'my healthQr ',
      category: 'Web Design',
      image: 'img_project/myhealthqr.png',
      description: 'Modern restaurant website with online ordering system',
      githubUrl: 'https://github.com/Souhail-imarraine/myhealthqr',
      liveUrl: 'https://myhealthqr-ptrb.vercel.app',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Socket.IO', 'JWT']    
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      description: 'Property listing and management platform',
      githubUrl: 'https://github.com/Souhail-imarraine/real-estate-portal',
      liveUrl: 'https://real-estate-demo.vercel.app',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Google Maps API']
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
      description: 'Personal fitness and workout tracking application',
      githubUrl: 'https://github.com/Souhail-imarraine/fitness-tracker',
      liveUrl: 'https://fitness-tracker-demo.vercel.app',
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Chart.js']
    },
    {
      title: 'Corporate Dashboard',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      description: 'Analytics and reporting dashboard for enterprises',
      githubUrl: 'https://github.com/Souhail-imarraine/corporate-dashboard',
      liveUrl: 'https://corporate-dashboard-demo.vercel.app',
      technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker']
    }
  ]



  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(80px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInTitle {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .portfolio-card {
          opacity: 0;
        }

        .visible .portfolio-card {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .visible .portfolio-card:nth-child(1) { animation-delay: 0.1s; }
        .visible .portfolio-card:nth-child(2) { animation-delay: 0.2s; }
        .visible .portfolio-card:nth-child(3) { animation-delay: 0.3s; }
        .visible .portfolio-card:nth-child(4) { animation-delay: 0.4s; }
        .visible .portfolio-card:nth-child(5) { animation-delay: 0.5s; }
        .visible .portfolio-card:nth-child(6) { animation-delay: 0.6s; }

        .portfolio-image {
          transition: transform 0.5s ease;
        }

        .portfolio-card:hover .portfolio-image {
          transform: scale(1.1);
        }

        .animate-title {
          animation: slideInTitle 0.8s ease-out forwards;
        }

        .modal-overlay {
          animation: modalFadeIn 0.3s ease-out;
        }

        .modal-content {
          animation: modalSlideUp 0.4s ease-out;
        }
      `}</style>

      <section ref={sectionRef} id="Projects" className={`py-20 bg-black ${isVisible ? 'visible' : ''}`}>
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isVisible ? 'animate-title' : 'opacity-0'}`}>
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="portfolio-card group relative overflow-hidden rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-xl bg-white/5 backdrop-blur-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="portfolio-image w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-5">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-white group-hover:text-gray-300 font-semibold transition-colors hover:underline"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 text-white"
                      title="View on GitHub"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  )
}