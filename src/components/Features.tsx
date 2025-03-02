import React, { useEffect, useRef } from 'react';
import { Clock, Award, Zap, Users, Star, Shield } from 'lucide-react';

const features = [
  {
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising on quality.',
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: 'Award-Winning',
    description: 'Recognized for excellence in video editing.',
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: 'Efficient Workflow',
    description: 'Streamlined process for optimal results.',
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: 'Client Collaboration',
    description: 'Work closely with you to achieve your vision.',
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Premium Quality',
    description: 'Exceptional quality that exceeds expectations.',
    icon: <Star className="h-6 w-6" />,
  },
  {
    title: 'Secure Handling',
    description: 'Your content is always handled with care and security.',
    icon: <Shield className="h-6 w-6" />,
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    featureRefs.current.forEach((feature) => {
      if (feature) observer.observe(feature);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      featureRefs.current.forEach((feature) => {
        if (feature) observer.unobserve(feature);
      });
    };
  }, []);

  return (
    <section id="features" className="py-20 px-4 bg-black/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={sectionRef}
            className="opacity-0 translate-y-8 transition-all duration-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Why Choose My Services
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              With years of experience in video editing and post-production, I deliver exceptional results that help your content stand out. My approach combines technical expertise with creative vision.
            </p>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="https://lwks.com/hs-fs/hubfs/Lightworks%20Site%20Assets/Images/Lightworks%20Pro-Computer%20Setup-Video%20Editing%20Software-2.webp?width=912&height=500&name=Lightworks%20Pro-Computer%20Setup-Video%20Editing%20Software-2.webp"
                  alt="Video editing workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-xl"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;