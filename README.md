# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎯 SEO optimized
- 🔧 Easy to customize and maintain

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Name, title, and introduction
- `src/components/About.tsx` - Bio, stats, and profile image
- `src/components/Contact.tsx` - Contact information and social links
- `src/components/Footer.tsx` - Footer information
- `index.html` - Page title and meta information

### Projects

Edit `src/components/Projects.tsx` to add your own projects:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'project-image-url',
    tags: ['React', 'TypeScript', 'etc'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/username/repo',
  },
  // Add more projects...
];
```

### Skills

Update `src/components/Skills.tsx` with your skills and proficiency levels.

### Experience

Modify `src/components/Experience.tsx` to reflect your work history.

## Deployment

This project is configured for easy deployment on Netlify:

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically build and deploy your site
4. Any future commits will trigger automatic redeployments

### Build Commands

- Build: `npm run build`
- Preview: `npm run preview`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!