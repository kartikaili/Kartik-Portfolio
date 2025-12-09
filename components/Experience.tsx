import React from 'react';
import { Section } from './ui/Section';
import { EXPERIENCE, ACHIEVEMENTS } from '../constants';
import { CheckCircle2, Award, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience" subtitle="My journey in the software quality assurance domain.">
      
      <div className="relative container mx-auto max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-slate-200 to-slate-50"></div>

        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative pl-20 md:pl-24 py-2 group">
            
            {/* Timeline Node */}
            <div className="absolute left-6 md:left-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary-600 z-10 mt-1.5 group-hover:scale-125 transition-transform duration-300 shadow-md"></div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 leading-tight">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-2 text-lg text-slate-600 mt-1">
                            <span className="font-semibold text-primary-700">{job.company}</span>
                            {job.client && (
                                <>
                                    <span className="text-slate-300">•</span>
                                    <span>Client: {job.client}</span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="shrink-0">
                         <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 text-primary-700 font-semibold rounded-full text-sm border border-primary-100">
                            <Briefcase size={14} className="mr-2" />
                            {job.period}
                        </span>
                    </div>
                </div>

                <div className="mb-6">
                     <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Key Responsibilities</h4>
                     <ul className="space-y-3">
                        {job.description.map((desc, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed group/item">
                                <CheckCircle2 size={18} className="text-primary-500 mt-1 shrink-0 group-hover/item:text-primary-600 transition-colors" />
                                <span>{desc}</span>
                            </li>
                        ))}
                     </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                    {job.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-200">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-1 rounded-2xl">
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-amber-100 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                    <div className="bg-amber-100 p-4 rounded-full text-amber-600 shadow-inner">
                        <Award size={32} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide text-amber-600/80 text-xs">Recognition</h3>
                        {ACHIEVEMENTS.map((ach, i) => (
                            <div key={i}>
                                <h4 className="text-xl font-bold text-slate-900 mb-1">{ach.title}</h4>
                                <p className="text-slate-600">{ach.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>

    </Section>
  );
};