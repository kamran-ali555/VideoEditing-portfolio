import React, { useEffect, useRef, useState } from 'react';
import { Code, Lightbulb, Zap } from 'lucide-react';

const technicalSkills = [
  { name: 'Adobe Premiere Pro', percentage: 95, category: 'Editing' },
  { name: 'After Effects', percentage: 90, category: 'Motion Graphics' },
  { name: 'DaVinci Resolve', percentage: 85, category: 'Color Grading' },
  { name: 'Final Cut Pro', percentage: 80, category: 'Editing' },
  { name: 'Cinema 4D', percentage: 70, category: '3D Animation' },
  { name: 'Adobe Audition', percentage: 75, category: 'Sound Design' },
];

const softSkills = [
  { name: 'Storytelling', percentage: 90 },
  { name: 'Client Communication', percentage: 85 },
  { name: 'Project Management', percentage: 80 },
  { name: 'Time Management', percentage: 85 },
  { name: 'Problem Solving', percentage: 90 },
  { name: 'Attention to Detail', percentage: 95 },
];

interface SkillBarProps {
  name: string;
  percentage: number;
  category?: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, category, delay = 0 }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-6" ref={barRef}>
      <div className="flex flex-wrap justify-between mb-2 items-center">
        <div className="flex items-center">
          <span className="text-white font-medium">{name}</span>
          {category && (
            <span className="ml-2 px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded-full">
              {category}
            </span>
          )}
        </div>
        <div className="flex items-center">
          <div 
            className={`text-sm font-semibold transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${delay + 500}ms` }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {percentage}%
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            width: isVisible ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('technical');
  
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-black/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Expertise & Capabilities
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My professional toolkit combines technical mastery with creative problem-solving abilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab navigation */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-full">
              <button
                onClick={() => setActiveTab('technical')}
                className={`flex items-center px-5 py-2.5 rounded-full transition-all ${
                  activeTab === 'technical' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Code className="h-4 w-4 mr-2" />
                Technical Skills
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`flex items-center px-5 py-2.5 rounded-full transition-all ${
                  activeTab === 'soft' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Lightbulb className="h-4 w-4 mr-2" />
                Soft Skills
              </button>
            </div>
          </div>

          {/* Skills content */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl">
            {activeTab === 'technical' && (
              <div className="space-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">Technical Proficiency</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                  {technicalSkills.slice(0, 3).map((skill, index) => (
                    <SkillBar 
                      key={index} 
                      name={skill.name} 
                      percentage={skill.percentage} 
                      category={skill.category}
                      delay={index * 100}
                    />
                  ))}
                  {technicalSkills.slice(3).map((skill, index) => (
                    <SkillBar 
                      key={index + 3} 
                      name={skill.name} 
                      percentage={skill.percentage} 
                      category={skill.category}
                      delay={(index + 3) * 100}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'soft' && (
              <div className="space-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">Creative & Collaborative Skills</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                  {softSkills.slice(0, 3).map((skill, index) => (
                    <SkillBar 
                      key={index} 
                      name={skill.name} 
                      percentage={skill.percentage}
                      delay={index * 100}
                    />
                  ))}
                  {softSkills.slice(3).map((skill, index) => (
                    <SkillBar 
                      key={index + 3} 
                      name={skill.name} 
                      percentage={skill.percentage}
                      delay={(index + 3) * 100}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;