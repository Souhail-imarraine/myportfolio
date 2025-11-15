'use client'

import { useEffect, useRef, useState } from 'react'

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO at Tech Solutions',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      text: 'Excellent service! Souhail worked with us and delivered the project on time and beyond expectations. His precision and technical expertise are outstanding.'
    },
    {
      name: 'Michael Chen',
      position: 'Founder of StartUp Hub',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      text: 'Working with Souhail was an amazing experience. He took my idea and turned it into reality with clean code and excellent communication throughout the project.'
    },
    {
      name: 'Emma Williams',
      position: 'Marketing Director at BrandCo',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      text: 'Professional and highly skilled. The website Souhail built for us improved our online presence significantly and increased our sales.'
    },
    {
      name: 'David Brown',
      position: 'CTO at DataFlow',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      text: 'Souhail\'s expertise in full-stack development helped us build a robust platform. His problem-solving skills are top-notch. Highly recommended!'
    }
  ]

  return (
    <>
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px) rotate(5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes spinIn {
          from {
            opacity: 0;
            transform: scale(0) rotate(360deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .testimonial-card {
          opacity: 0;
        }

        .visible .testimonial-card {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .visible .testimonial-card:nth-child(1) { animation-delay: 0.15s; }
        .visible .testimonial-card:nth-child(2) { animation-delay: 0.3s; }
        .visible .testimonial-card:nth-child(3) { animation-delay: 0.45s; }
        .visible .testimonial-card:nth-child(4) { animation-delay: 0.6s; }

        .testimonial-avatar {
          opacity: 0;
        }

        .visible .testimonial-avatar {
          animation: spinIn 1s ease-out forwards;
        }

        .visible .testimonial-card:nth-child(1) .testimonial-avatar { animation-delay: 0.45s; }
        .visible .testimonial-card:nth-child(2) .testimonial-avatar { animation-delay: 0.6s; }
        .visible .testimonial-card:nth-child(3) .testimonial-avatar { animation-delay: 0.75s; }
        .visible .testimonial-card:nth-child(4) .testimonial-avatar { animation-delay: 0.9s; }

        .star-icon {
          opacity: 0;
        }

        .visible .star-icon {
          animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .visible .testimonial-card:nth-child(1) .star-icon:nth-child(1) { animation-delay: 0.5s; }
        .visible .testimonial-card:nth-child(1) .star-icon:nth-child(2) { animation-delay: 0.55s; }
        .visible .testimonial-card:nth-child(1) .star-icon:nth-child(3) { animation-delay: 0.6s; }
        .visible .testimonial-card:nth-child(1) .star-icon:nth-child(4) { animation-delay: 0.65s; }
        .visible .testimonial-card:nth-child(1) .star-icon:nth-child(5) { animation-delay: 0.7s; }

        .visible .testimonial-card:nth-child(2) .star-icon:nth-child(1) { animation-delay: 0.65s; }
        .visible .testimonial-card:nth-child(2) .star-icon:nth-child(2) { animation-delay: 0.7s; }
        .visible .testimonial-card:nth-child(2) .star-icon:nth-child(3) { animation-delay: 0.75s; }
        .visible .testimonial-card:nth-child(2) .star-icon:nth-child(4) { animation-delay: 0.8s; }
        .visible .testimonial-card:nth-child(2) .star-icon:nth-child(5) { animation-delay: 0.85s; }

        .visible .testimonial-card:nth-child(3) .star-icon:nth-child(1) { animation-delay: 0.8s; }
        .visible .testimonial-card:nth-child(3) .star-icon:nth-child(2) { animation-delay: 0.85s; }
        .visible .testimonial-card:nth-child(3) .star-icon:nth-child(3) { animation-delay: 0.9s; }
        .visible .testimonial-card:nth-child(3) .star-icon:nth-child(4) { animation-delay: 0.95s; }
        .visible .testimonial-card:nth-child(3) .star-icon:nth-child(5) { animation-delay: 1s; }

        .visible .testimonial-card:nth-child(4) .star-icon:nth-child(1) { animation-delay: 0.95s; }
        .visible .testimonial-card:nth-child(4) .star-icon:nth-child(2) { animation-delay: 1s; }
        .visible .testimonial-card:nth-child(4) .star-icon:nth-child(3) { animation-delay: 1.05s; }
        .visible .testimonial-card:nth-child(4) .star-icon:nth-child(4) { animation-delay: 1.1s; }
        .visible .testimonial-card:nth-child(4) .star-icon:nth-child(5) { animation-delay: 1.15s; }

        .animate-title {
          animation: fadeInDown 0.8s ease-out forwards;
        }
      `}</style>

      <section ref={sectionRef} id="testimonials" className={`py-20 bg-black ${isVisible ? 'visible' : ''}`}>
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isVisible ? 'animate-title' : 'opacity-0'}`}>
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full"></div>
            <p className={`mt-6 text-xl text-gray-400 max-w-3xl mx-auto ${isVisible ? 'animate-title' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              What clients say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card bg-white/5 backdrop-blur-sm p-6 rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-avatar w-14 h-14 rounded-full object-cover border-2 border-white/20 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="star-icon w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}