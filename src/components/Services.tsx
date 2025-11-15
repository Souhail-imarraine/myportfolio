'use client';

import { useEffect, useRef } from 'react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceCards = servicesRef.current?.querySelectorAll('.service-card');
    serviceCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Building responsive and modern web applications using cutting-edge technologies like React, Next.js, and Node.js.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Development',
      description: 'Creating native and cross-platform mobile applications with seamless user experiences for iOS and Android.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces that enhance user engagement and satisfaction.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Solutions',
      description: 'Implementing scalable cloud infrastructure and services using AWS, Azure, and Google Cloud Platform.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'API Development',
      description: 'Building robust and secure RESTful APIs and GraphQL services for seamless data integration.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance Optimization',
      description: 'Optimizing application performance, reducing load times, and improving overall user experience.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-black" ref={servicesRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0 service-card slide-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            My Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-5"></div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Delivering high-quality solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card opacity-0 bg-white/5 backdrop-blur-sm p-5 rounded-lg border-2 border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-white mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-gray-200 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-3 h-1 w-0 bg-gradient-to-r from-white to-gray-400 group-hover:w-full transition-all duration-500"></div>
            </div>  
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-card {
          animation: slideInUp 0.8s ease-out forwards;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: slideInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;