import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Alex Johnson</h3>
            <p className="text-slate-400">
              Full Stack Developer & UI/UX Enthusiast
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-2 text-slate-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;