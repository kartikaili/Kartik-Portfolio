import React from 'react';
import { Section } from './ui/Section';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <Section id="skills" title="Technical Arsenal" subtitle="A comprehensive overview of my technical skills and tools I use to ensure software quality.">
      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category}>
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold text-slate-800">{category}</h3>
                <div className="h-px bg-slate-200 flex-1"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {SKILLS.filter(s => s.category === category).map((skill) => (
                <div 
                  key={skill.name} 
                  className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 flex flex-col gap-4 overflow-hidden"
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-white group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shrink-0">
                      {skill.logo ? (
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-9 h-9 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        skill.icon && <skill.icon size={32} className="text-primary-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-lg group-hover:text-primary-600 transition-colors">{skill.name}</h4>
                      {skill.level && (
                        <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">Proficiency: {skill.level}%</div>
                      )}
                    </div>
                  </div>

                  {skill.level && (
                    <div className="relative z-10 w-full bg-slate-100 rounded-full h-2 overflow-hidden mt-1">
                      <div 
                        className="bg-primary-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:bg-primary-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
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