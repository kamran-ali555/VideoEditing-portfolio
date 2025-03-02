import React, { useEffect, useRef } from 'react';
import { Video, Film, Scissors, Tv, Music, Camera } from 'lucide-react';

const services = [
  {
    title: 'Video Editing',
    description: 'Professional video editing with attention to detail and storytelling.',
    icon: <Video className="h-10 w-10" />,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Color Grading',
    description: 'Expert color correction and grading to enhance visual aesthetics.',
    icon: <Film className="h-10 w-10" />,
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Motion Graphics',
    description: 'Creative motion graphics and animations to elevate your content.',
    icon: <Scissors className="h-10 w-10" />,
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    title: 'Commercial Editing',
    description: 'Impactful commercial edits that drive engagement and conversions.',
    icon: <Tv className="h-10 w-10" />,
    gradient: 'from-green-500 to-blue-500',
  },
  {
    title: 'Sound Design',
    description: 'Professional audio mixing and sound effects for immersive experiences.',
    icon: <Music className="h-10 w-10" />,
    gradient: 'from-yellow-500 to-red-500',
  },
  {
    title: 'Cinematography',
    description: 'Cinematic videography services to capture stunning visuals.',
    icon: <Camera className="h-10 w-10" />,
    gradient: 'from-indigo-500 to-cyan-500',
  },
];

const Services = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional video editing services tailored to your specific needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-all duration-500 transform hover:-translate-y-2 opacity-0 translate-y-8`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;