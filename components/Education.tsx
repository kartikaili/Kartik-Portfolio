import React from 'react';
import { Section } from './ui/Section';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education" className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-12">
            {/* Education Column */}
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <GraduationCap className="text-primary-600" />
                    Education
                </h2>
                <div className="space-y-8 border-l-2 border-slate-200 pl-8 ml-4">
                    {EDUCATION.map((edu, index) => (
                        <div key={index} className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-slate-300"></span>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <span className="text-sm text-primary-600 font-bold tracking-wide">{edu.year}</span>
                                <h3 className="text-lg font-bold text-slate-900 mt-1">{edu.degree}</h3>
                                <p className="text-slate-600 mt-1">{edu.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications Column */}
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <Award className="text-primary-600" />
                    Certifications
                </h2>
                <div className="space-y-4">
                    {CERTIFICATIONS.map((cert, index) => (
                        <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-primary-200 transition-colors">
                            <div className="bg-primary-50 text-primary-600 font-bold w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-xs">
                                {cert.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 leading-tight">{cert.name}</h4>
                                <p className="text-slate-500 text-sm mt-1">{cert.provider}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
  );
};