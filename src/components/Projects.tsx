'use client'

import { useEffect, useRef, useState } from 'react'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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

  // Close modal when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
        setCurrentImageIndex(0)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const projects = [
    {
      title: 'WeCare',
      category: 'Web Application',
      image: 'img_project/general-practitioner.jpg',
      description: 'Doctors Reservation Management System',
      githubUrl: 'https://github.com/Souhail-imarraine/WeCare',
      images: [
        'img_project/one.png',
        'img_project/two.png',
        'img_project/three.png',
        'img_project/four.png',
        'img_project/five.png',
        'img_project/six.png',
        'img_project/seven.png',
        'img_project/eight.png',
        'img_project/nine.png',
        'img_project/ten.png',
        'img_project/eleven.png',
        'img_project/twelve.png',
        'img_project/thirteen.png',
        'img_project/fourteen.png',
        'img_project/fifteen.png',
        'img_project/sixteen.png',
        'img_project/seventeen.png',
        'img_project/eighteen.png',
        'img_project/nineteen.png',
        'img_project/twenty.png',
        'img_project/twentyone.png',
        'img_project/twentytwo.png'

      ],
      technologies: ['Laravel', 'Blade', 'MySQL', 'Tailwind CSS', 'ajax','javaScript']
    },
    {
      title: 'Task Management App',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      description: 'Collaborative task tracking application for teams',
      githubUrl: 'https://github.com/Souhail-imarraine/task-management',
      images: [
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80'
      ],
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript']
    },
    {
      title: 'Restaurant Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      description: 'Modern restaurant website with online ordering system',
      githubUrl: 'https://github.com/Souhail-imarraine/restaurant-website',
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
        'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80'
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL']
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      description: 'Property listing and management platform',
      githubUrl: 'https://github.com/Souhail-imarraine/real-estate-portal',
      images: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80'
      ],
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Google Maps API']
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
      description: 'Personal fitness and workout tracking application',
      githubUrl: 'https://github.com/Souhail-imarraine/fitness-tracker',
      images: [
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80',
        'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&q=80'
      ],
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Chart.js']
    },
    {
      title: 'Corporate Dashboard',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      description: 'Analytics and reporting dashboard for enterprises',
      githubUrl: 'https://github.com/Souhail-imarraine/corporate-dashboard',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
      ],
      technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker']
    }
  ]

  const openModal = (index: number) => {
    setSelectedProject(index)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => 
        prev === projects[selectedProject].images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? projects[selectedProject].images.length - 1 : prev - 1
      )
    }
  }

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
                onClick={() => openModal(index)}
                className="portfolio-card group relative overflow-hidden rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-xl cursor-pointer bg-white/5 backdrop-blur-sm"
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
                    <div className="flex items-center text-sm text-white group-hover:text-gray-300 font-semibold transition-colors">
                      View Project
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
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

      {/* Modal */}
      {selectedProject !== null && (
        <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeModal}>
          <div className="modal-content relative bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Slider */}
            <div className="relative">
              <img
                src={projects[selectedProject].images[currentImageIndex]}
                alt={projects[selectedProject].title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black text-white rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black text-white rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 text-white rounded-full text-sm">
                {currentImageIndex + 1} / {projects[selectedProject].images.length}
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col max-h-[50vh] overflow-hidden">
              {/* Header Section - Fixed */}
              <div className="p-6 md:p-8 pb-4 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {projects[selectedProject].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-black mt-2 mb-3">
                  {projects[selectedProject].title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {projects[selectedProject].description}
                </p>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4">
                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-300 hover:bg-black hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <div className="mb-6">
                  <a
                    href={projects[selectedProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 font-semibold shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>

                {/* Thumbnails */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-semibold text-black mb-3">Gallery:</h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {projects[selectedProject].images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${projects[selectedProject].title} ${idx + 1}`}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-full h-16 md:h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                          idx === currentImageIndex 
                            ? 'border-3 border-black scale-105 shadow-lg' 
                            : 'border-2 border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100 hover:scale-105'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}