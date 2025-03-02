import React from 'react';
import { Film, Instagram, Twitter, Youtube, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-md py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* <Film className="h-8 w-8 text-purple-400" /> */}
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                VideoEditor
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional video editing services for all your creative needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Features', 'Experience', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Video Editing', 'Color Grading', 'Motion Graphics', 'Sound Design', 'Cinematography', 'Commercial Editing'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:contact@cinecraft.com" className="hover:text-white transition-colors">
                  contact@cinecraft.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Phone:</span>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Location:</span>
                <span>Los Angeles, California</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} CineCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;