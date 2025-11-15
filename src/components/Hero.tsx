'use client';

import { useEffect, useState } from 'react';

type Particle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
};

type Circle = {
  width: string;
  height: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [circles, setCircles] = useState<Circle[]>([]);
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const programmingTexts = [
    'Full Stack Developer',
    'React Specialist',
    'Laravel Expert',
    'Spring Boot Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    // Generate random values only on the client
    const newParticles: Particle[] = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${10 + Math.random() * 5}s`,
    }));
    setParticles(newParticles);

    const newCircles: Circle[] = Array.from({ length: 6 }, (_, i) => ({
      width: `${30 + Math.random() * 80}px`,
      height: `${30 + Math.random() * 80}px`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${i * 1.5}s`,
      animationDuration: `${12 + i * 2}s`,
    }));
    setCircles(newCircles);

    setMounted(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!mounted) return;
    
    const timeout = setTimeout(() => {
      const current = programmingTexts[currentText];
      
      if (isDeleting) {
        setDisplayText(current.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % programmingTexts.length);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
        
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText, mounted, programmingTexts]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">      
    <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles - render only after mount */}
        {mounted &&
          particles.map((p, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float-particle"
              style={{
                left: p.left,
                top: '100%',
                animationDelay: p.animationDelay,
                animationDuration: p.animationDuration,
              }}
            />
          ))}

        {/* Animated Circles - render only after mount */}
        {mounted &&
          circles.map((c, i) => (
            <div
              key={`circle-${i}`}
              className="absolute rounded-full border border-white/10 animate-float-up"
              style={{
                width: c.width,
                height: c.height,
                left: c.left,
                top: '100%',
                animationDelay: c.animationDelay,
                animationDuration: c.animationDuration,
              }}
            />
          ))}

        {/* Gradient Orbs (static = safe for SSR) */}
        <div
          className="absolute w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-float-slow"
          style={{ top: '10%', left: '10%' }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-gray-500/10 rounded-full blur-3xl animate-float-slow-reverse"
          style={{ bottom: '10%', right: '10%', animationDelay: '2s' }}
        />

        {/* Moving Lines (deterministic) */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-horizontal"
            style={{
              top: `${25 + i * 20}%`,
              animationDuration: `${8 + i * 2}s`,
              animationDelay: `${i * 1}s`,
            }}
          />
        ))}

        {/* Rotating Rings (deterministic) */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/5 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white/5 rounded-full animate-spin-slow-reverse" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-8 md:px-12 lg:px-16 py-20 animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Profile Image Section */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-gray-400/20 rounded-full blur-2xl animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] hover:scale-105 transition-transform duration-300">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* Info Card Section */}
          <div className="flex-1 flex flex-col items-center lg:items-start lg:pl-12 text-center lg:text-left space-y-6">
            {/* Main Title with Typewriter Effect */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight lg:text-left lg:self-start font-mono animate-slide-up">
              <span className="inline-block">
                <span className="typewriter-text">{displayText}</span>
                <span className="typewriter-cursor animate-blink">|</span>
              </span>
            </h1>
          
            {/* Glassmorphic Info Card */}
            <div
              className="w-full max-w-2xl bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold font-mono animate-code-appear">
                    <span className="text-gray-400 animate-fade-in" style={{animationDelay: '0.8s'}}>const</span>{' '}
                    <span className="text-blue-400 animate-fade-in" style={{animationDelay: '1s'}}>developer</span>{' '}
                    <span className="text-white animate-fade-in" style={{animationDelay: '1.2s'}}>=</span>{' '}
                    <span className="text-green-400 animate-fade-in" style={{animationDelay: '1.4s'}}>"Souhail IMARRAINE"</span>
                    <span className="text-gray-400 animate-fade-in" style={{animationDelay: '1.6s'}}>;</span>
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-auto lg:mx-0 animate-expand" style={{animationDelay: '1.8s'}} />
                </div>
          
                <div className="font-mono text-lg md:text-xl text-gray-300 leading-relaxed space-y-1">
                  <div className="animate-slide-in-left" style={{animationDelay: '2s'}}>
                    <span className="text-purple-400">// </span>Passionate developer specializing in building
                  </div>
                  <div className="animate-slide-in-left" style={{animationDelay: '2.2s'}}>
                    <span className="text-purple-400">// </span>exceptional digital experiences with clean code.
                  </div>
                  <div className="animate-slide-in-left" style={{animationDelay: '2.4s'}}>
                    <span className="text-yellow-400">console</span><span className="text-white">.</span><span className="text-blue-400">log</span><span className="text-white">(</span><span className="text-green-400">"Let's build something amazing!"</span><span className="text-white">);</span>
                  </div>
                </div>
          
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {[
                    { name: 'React', color: 'bg-blue-500/20 border-blue-500/50' },
                    { name: 'Next.js', color: 'bg-white/20 border-white/50' },
                    { name: 'Laravel', color: 'bg-red-500/20 border-red-500/50' },
                    { name: 'Spring Boot', color: 'bg-green-500/20 border-green-500/50' }
                  ].map((tech, index) => (
                    <span
                      key={tech.name}
                      className={`px-4 py-2 ${tech.color} backdrop-blur-sm rounded-full text-sm font-medium text-white border hover:scale-110 transition-all duration-300 animate-pop-in font-mono`}
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <span className="text-gray-400">{"<"}</span>{tech.name}<span className="text-gray-400">{" />"}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          
            {/* CTA Button */}
            <a
              href="/Cv.pdf"
              download
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-white lg:self-start animate-slide-up font-mono"
              style={{ animationDelay: '1s' }}
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                <span className="text-green-400">$</span> <span className="text-blue-400">wget</span> <span className="text-yellow-400">--resume</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        @keyframes float-up {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-120vh) scale(1); opacity: 0; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(-20%, -20%) scale(1); }
          50% { transform: translate(20%, 10%) scale(1.2); }
        }
        @keyframes float-slow-reverse {
          0%, 100% { transform: translate(20%, 20%) scale(1.2); }
          50% { transform: translate(-20%, -10%) scale(1); }
        }
        @keyframes slide-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          to { transform: rotate(360deg) scale(1); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(-180deg) scale(1.2); }
          to { transform: rotate(-360deg) scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expand {
          from { width: 0; }
          to { width: 6rem; }
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0); }
          50% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes code-appear {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-blink { animation: blink 1s infinite; }
        .animate-code-appear { animation: code-appear 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-float-particle { animation: float-particle linear infinite; }
        .animate-float-up { animation: float-up linear infinite; }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-float-slow-reverse { animation: float-slow-reverse 25s ease-in-out infinite; }
        .animate-slide-horizontal { animation: slide-horizontal linear infinite; }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 25s linear infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-scale-in { animation: scale-in 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-expand { animation: expand 0.8s ease-out forwards; }
        .animate-pop-in { animation: pop-in 0.6s ease-out forwards; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}