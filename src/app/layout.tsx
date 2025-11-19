import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Souhail IMARRAINE - Full Stack Developer | React, Laravel, Spring Boot",
  description: "Professional Full Stack Developer specializing in React, Next.js, Laravel, and Spring Boot. Expert in building modern web applications, e-commerce solutions, and enterprise systems. Based in Marrakech, Morocco.",
  keywords: [
    "Full Stack Developer",
    "Web Developer Morocco",
    "React Developer",
    "Laravel Developer",
    "Spring Boot Developer",
    "Souhail IMARRAINE",
    "Web Development Marrakech",
    "Next.js Developer",
    "PHP Developer",
    "Java Developer",
    "Freelance Developer Morocco"
  ],
  authors: [{ name: "Souhail IMARRAINE" }],
  creator: "Souhail IMARRAINE",
  publisher: "Souhail IMARRAINE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://souhailimarraine.me",
    siteName: "Souhail IMARRAINE Portfolio",
    title: "Souhail IMARRAINE - Full Stack Developer",
    description: "Professional Full Stack Developer specializing in React, Laravel, Spring Boot. Building exceptional web applications.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Souhail IMARRAINE - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Souhail IMARRAINE - Full Stack Developer",
    description: "Professional Full Stack Developer specializing in React, Laravel, Spring Boot",
    images: ["/profile.jpg"],
    creator: "@souhailimarraine",
  },
  verification: {
    google: "your-google-verification-code", // Add after Google Search Console setup
  },
  alternates: {
    canonical: "https://souhailimarraine.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://souhailimarraine.me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}