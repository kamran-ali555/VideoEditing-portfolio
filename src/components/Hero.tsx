import React, { useEffect, useRef } from 'react';
import { Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on load
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('opacity-100', 'translate-y-0');
      }
      
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.classList.add('opacity-100', 'translate-y-0');
        }
        
        setTimeout(() => {
          if (ctaRef.current) {
            ctaRef.current.classList.add('opacity-100', 'translate-y-0');
          }
          
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.classList.add('opacity-100', 'translate-y-0');
            }
          }, 400);
        }, 300);
      }, 200);
    }, 100);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-gray-900"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10 py-20">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 -translate-y-8 transition-all duration-1000 ease-out"
        >
          <span className="block">Crafting Stories Through</span>
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Professional Editing
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 opacity-0 -translate-y-8 transition-all duration-1000 ease-out delay-200"
        >
          Transforming raw footage into compelling visual stories that captivate and inspire audiences worldwide.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 opacity-0 -translate-y-8 transition-all duration-1000 ease-out delay-400"
        >
          <a 
            href="#contact" 
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-medium text-white transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center"
          >
            Start a Project
          </a>
          
          <a 
            href="#services" 
            className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-full font-medium text-white transition-all transform hover:scale-105 flex items-center"
          >
            <Play className="h-4 w-4 mr-2" />
            View Services
          </a>
        </div>
        
        <div 
          ref={scrollRef}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-700"
        >
          <a 
            href="#services" 
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-500 opacity-70 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-pink-500 opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-blue-500 opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-purple-500 opacity-70 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default Hero;