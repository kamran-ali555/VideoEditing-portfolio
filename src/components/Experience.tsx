import React, { useEffect, useRef } from 'react';
import { Calendar, Building, Award, Briefcase, Star, Trophy } from 'lucide-react';

const experiences = [
  {
    period: '2021 - Present',
    company: 'Cinematic Studios',
    position: 'Senior Video Editor',
    description: 'Lead editor for commercial and narrative projects, managing a team of junior editors and coordinating with clients.',
    projects: ['Award-winning documentary series', 'National TV commercials', 'Corporate brand videos'],
    icon: <Trophy className="h-5 w-5 text-white" />,
    highlight: true
  },
  {
    period: '2018 - 2021',
    company: 'VisualCraft Productions',
    position: 'Video Editor & Colorist',
    description: 'Specialized in color grading and post-production for short films and music videos, working closely with directors.',
    projects: ['Music videos for top artists', 'Short film festival entries', 'Social media campaigns'],
    icon: <Star className="h-5 w-5 text-white" />,
    highlight: false
  },
  {
    period: '2016 - 2018',
    company: 'Digital Media Agency',
    position: 'Junior Editor',
    description: 'Started as an assistant editor and quickly progressed to handling complete projects independently.',
    projects: ['Social media content', 'Event highlight reels', 'Product demonstrations'],
    icon: <Briefcase className="h-5 w-5 text-white" />,
    highlight: false
  },
];

const Experience = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    experienceRefs.current.forEach((exp) => {
      if (exp) observer.observe(exp);
    });

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      experienceRefs.current.forEach((exp) => {
        if (exp) observer.unobserve(exp);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent opacity-0 translate-y-8 transition-all duration-700"
          >
            Professional Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto pt-8">
            My career path in video editing has been defined by creative challenges and continuous growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              ref={(el) => (experienceRefs.current[index] = el)}
              className="opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`bg-gradient-to-r ${exp.highlight ? 'from-purple-900/40 to-pink-900/40' : 'from-gray-800/40 to-gray-800/40'} backdrop-blur-sm p-6 md:p-8 rounded-2xl border ${exp.highlight ? 'border-purple-500/30' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/10`}>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left side with icon and timeline */}
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-full ${exp.highlight ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gradient-to-br from-gray-700 to-gray-600'} flex items-center justify-center shadow-lg`}>
                      {exp.icon}
                    </div>
                    <div className="h-full w-px bg-gradient-to-b from-purple-500 to-transparent mx-auto mt-4 opacity-30"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${exp.highlight ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-700/50 text-gray-300'}`}>
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                    </div>
                    
                    <h4 className="text-lg text-gray-300 mb-3 flex items-center">
                      <Building className="h-4 w-4 mr-2 text-gray-400" />
                      {exp.company}
                    </h4>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="bg-black/20 rounded-xl p-4">
                      <h5 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-purple-400" />
                        Notable Projects
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.projects.map((project, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-gray-800/70 rounded-full text-sm text-gray-300"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;