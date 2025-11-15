# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, inspired by professional web developer portfolios.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🌟 Modern animations and transitions
- 🎯 Professional portfolio sections:
  - Hero section with animated background
  - About me with skills showcase
  - Services offered
  - Portfolio/Projects gallery
  - Client testimonials
  - Contact information
- 🔗 Social media integration
- 📄 Resume download functionality

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or download the project files
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Personal Information

Update the following components with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "YOUR NAME" to your actual name
   - Update the description and skills
   - Add your social media links

2. **About Section** (`src/components/About.tsx`):
   - Update the bio and experience details
   - Modify stats (projects completed, years of experience)
   - Adjust skill percentages

3. **Services Section** (`src/components/Services.tsx`):
   - Customize services you offer
   - Update descriptions and pricing

4. **Portfolio Section** (`src/components/Portfolio.tsx`):
   - Add your actual projects
   - Include project images and links

5. **Footer** (`src/components/Footer.tsx`):
   - Update contact information
   - Add your social media links

### Styling

The website uses Tailwind CSS for styling. Key colors can be customized in `tailwind.config.ts`:

- Primary blue: `#3b82f6`
- Purple accent: `#9333ea`
- Background: Dark theme with slate colors

### Resume

Place your resume PDF file in the `public` folder as `resume.pdf` or update the links in the components.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Node.js applications:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## License

This project is open source and available under the MIT License.

## Support

If you need help customizing this portfolio:
1. Check the component files for inline comments
2. Refer to Next.js and Tailwind CSS documentation
3. Contact the developer for additional support

---

Built with ❤️ using Next.js and Tailwind CSS