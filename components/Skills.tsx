import React from 'react';
import { Section } from './ui/Section';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <Section id="skills" title="Technical Arsenal" subtitle="A comprehensive overview of my technical skills and tools I use to ensure software quality.">
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
              {category}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {SKILLS.filter(s => s.category === category).map((skill) => (
                <div 
                  key={skill.name} 
                  className="group bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-100 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-lg group-hover:bg-white group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {skill.logo ? (
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-8 h-8 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        skill.icon && <skill.icon size={28} className="text-primary-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{skill.name}</h4>
                      {skill.level && (
                        <div className="text-xs font-medium text-slate-400 mt-0.5">Proficiency: {skill.level}%</div>
                      )}
                    </div>
                  </div>

                  {skill.level && (
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-primary-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:bg-primary-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};