import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale web applications. Architected and implemented microservices, mentored junior developers, and collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    },
    {
      company: 'Digital Innovations Inc',
      position: 'Full Stack Developer',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects ranging from e-commerce platforms to data visualization dashboards. Improved application performance by 40% through code optimization and caching strategies.',
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis'],
    },
    {
      company: 'StartupLab',
      position: 'Frontend Developer',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Built responsive web applications for early-stage startups. Collaborated closely with designers to implement pixel-perfect UIs and ensure excellent user experience across all devices.',
      technologies: ['React', 'TypeScript', 'SCSS', 'Jest', 'Figma'],
    },
    {
      company: 'FreelanceWork',
      position: 'Web Developer',
      location: 'Remote',
      period: '2018 - 2019',
      description: 'Provided web development services to small businesses and entrepreneurs. Delivered custom websites and web applications, focusing on performance, SEO optimization, and user engagement.',
      technologies: ['JavaScript', 'PHP', 'WordPress', 'MySQL', 'Bootstrap'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey has taken me through various roles and companies, 
            each providing unique challenges and growth opportunities.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
                
                <div className="ml-16 w-full">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-1">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg text-blue-600 font-medium">
                          {exp.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0 text-sm text-slate-500">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;