import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 px-4"> {/* Removed relative, z-10, and mt-[-1px] */}
      <div className="mx-auto py-8"> {/* Added py-8 for top and bottom padding */}
        {/* Main footer content arranged in two sections */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* FlavorSync Info and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-flavorsync-red mb-2">FlavorSync</h3>
            {/* Copyright */}
            <p className="text-flavorsync-maroon dark:text-gray-300 text-sm mb-0">
              © {new Date().getFullYear()} FlavorSync. All rights reserved.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-center md:text-right">
            <Link to="/about" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors">About Us</Link>
            <Link to="/privacy-policy" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors">Cookie Policy</Link>
            <Link to="/contact" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors">Contact</Link>
            <a href="https://www.linkedin.com/in/chakravarthi-guduru-904802255/" target="_blank" rel="noopener noreferrer" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/chakravarthigit" target="_blank" rel="noopener noreferrer" className="text-flavorsync-maroon dark:text-gray-300 hover:text-flavorsync-red dark:hover:text-flavorsync-red transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
