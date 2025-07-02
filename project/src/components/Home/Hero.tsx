import React from 'react';
import { ChevronRight, Users, BookOpen, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block">Your Voice,</span>
                <span className="block text-yellow-400">Your Future</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Join the Debre Birhan University Student Council and shape your academic experience through leadership, service, and community engagement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#clubs"
                className="inline-flex items-center px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105"
              >
                Join a Club
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-lg mx-auto mb-3">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-blue-200 text-sm">Active Clubs</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-lg mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-blue-200 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-lg mx-auto mb-3">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-blue-200 text-sm">Events/Year</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2"
                alt="Students at Debre Birhan University"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;