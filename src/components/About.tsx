import React from 'react';
import { User, Heart, Coffee, Code } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Heart, value: '5', label: 'Years Experience' },
    { icon: User, value: '30+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-emerald-600 p-1 rounded-2xl mb-8 max-w-md mx-auto lg:mx-0">
              <div className="bg-white p-4 rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Alex Johnson"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating 
              exceptional user experiences. With over 5 years in the industry, I've had the privilege 
              of working with startups and established companies alike.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              My journey began with a computer science degree, but my real education came from countless 
              hours of experimentation, learning new technologies, and solving complex problems. I believe 
              that great software is not just functional—it's intuitive, beautiful, and makes people's 
              lives better.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
              projects, or sharing knowledge with the developer community through blog posts and mentoring.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;