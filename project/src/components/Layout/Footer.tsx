import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DBU</span>
              </div>
              <div className="ml-3">
                <h3 className="font-bold text-lg">Student Council</h3>
                <p className="text-sm text-gray-400">Debre Birhan University</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empowering students through leadership, service, and academic excellence at Debre Birhan University.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#clubs" className="text-gray-400 hover:text-white transition-colors duration-200">Student Clubs</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors duration-200">Events</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-white transition-colors duration-200">News</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-white transition-colors duration-200">Resources</a></li>
            </ul>
          </div>

          {/* Student Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Student Services</h4>
            <ul className="space-y-2">
              <li><a href="#academic" className="text-gray-400 hover:text-white transition-colors duration-200">Academic Support</a></li>
              <li><a href="#counseling" className="text-gray-400 hover:text-white transition-colors duration-200">Counseling</a></li>
              <li><a href="#housing" className="text-gray-400 hover:text-white transition-colors duration-200">Housing</a></li>
              <li><a href="#financial" className="text-gray-400 hover:text-white transition-colors duration-200">Financial Aid</a></li>
              <li><a href="#career" className="text-gray-400 hover:text-white transition-colors duration-200">Career Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Debre Birhan, Ethiopia</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+251-11-681-1000</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">student.council@dbu.edu.et</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Debre Birhan University Student Council. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;