import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact'
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Souhail IMARRAINE",
    "url": "https://souhailimarraine.me",
    "image": "https://souhailimarraine.me/profile.jpg",
    "sameAs": [
      "https://github.com/Souhail-imarraine",
      "https://www.linkedin.com/in/souhail-imarraine/"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Marrakech",
      "addressCountry": "Morocco"
    },
    "email": "souhailimarrainedevo@gmail.com",
    "telephone": "+212620424918",
    "knowsAbout": [
      "React",
      "Next.js",
      "Laravel",
      "Spring Boot",
      "JavaScript",
      "TypeScript",
      "PHP",
      "Java",
      "Full Stack Development",
      "Web Development"
    ],
    "description": "Professional Full Stack Developer specializing in React, Next.js, Laravel, and Spring Boot. Expert in building modern web applications, e-commerce solutions, and enterprise systems."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-slate-900">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}