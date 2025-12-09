import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { PROFILE, EXPERIENCE, EDUCATION, SKILLS, CERTIFICATIONS } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex justify-center py-4 md:py-8 print:p-0 print:bg-white print:static print:h-auto">
      {/* Controls - Hidden on Print */}
      <div className="fixed top-4 right-4 flex gap-3 print:hidden z-50">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 shadow-xl transition-all font-medium hover:scale-105 active:scale-95"
        >
          <Printer size={18} />
          <span>Print / Save PDF</span>
        </button>
        <button 
          onClick={onClose}
          className="p-2.5 bg-white text-slate-700 rounded-full hover:bg-slate-100 shadow-xl transition-all hover:scale-110 active:scale-95"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      </div>

      {/* Resume Paper */}
      <div 
        id="resume-content"
        className="w-full max-w-[210mm] min-h-[297mm] bg-white p-[15mm] md:p-[20mm] shadow-2xl mx-auto text-slate-900 print:shadow-none print:w-full print:max-w-none print:mx-0 print:p-[15mm] relative"
      >
        {/* Header */}
        <header className="border-b-2 border-slate-800 pb-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2 text-slate-900">{PROFILE.name}</h1>
              <p className="text-xl text-primary-700 font-semibold">{PROFILE.role}</p>
            </div>
            {/* Optional: Add a small QR code or Initials here for flair if needed, keeping it clean for now */}
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 mt-4">
            <div className="flex items-center gap-1.5">
              <Mail size={14} className="text-slate-400" />
              <span>{PROFILE.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={14} className="text-slate-400" />
              <span>{PROFILE.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-slate-400" />
              <span>{PROFILE.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Linkedin size={14} className="text-slate-400" />
              <span className="text-blue-600">{PROFILE.linkedin.replace('https://www.', '')}</span>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 text-slate-900 flex items-center gap-2">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 text-justify">
            {PROFILE.summary}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 text-slate-900">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 gap-y-2 text-sm">
             {['Languages', 'Automation', 'Tools', 'Soft Skills'].map(cat => {
                 const catSkills = SKILLS.filter(s => s.category === cat).map(s => s.name).join(', ');
                 if(!catSkills) return null;
                 return (
                     <div key={cat} className="grid grid-cols-[120px_1fr] gap-2">
                         <span className="font-bold text-slate-800">{cat}</span>
                         <span className="text-slate-700">{catSkills}</span>
                     </div>
                 )
             })}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 text-slate-900">
            Professional Experience
          </h2>
          <div className="space-y-5">
            {EXPERIENCE.map((job, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900 text-base">{job.title}</h3>
                  <span className="text-xs font-semibold bg-slate-100 px-2 py-0.5 rounded text-slate-600 border border-slate-200">{job.period}</span>
                </div>
                <div className="text-sm font-semibold text-primary-700 mb-2 flex items-center gap-2">
                  {job.company} 
                  {job.client && <span className="text-slate-400 font-normal">| Client: <span className="text-slate-700">{job.client}</span></span>}
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-700">
                  {job.description.map((desc, j) => (
                    <li key={j} className="pl-1 leading-snug">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2">
            <section>
                <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 text-slate-900">
                  Education
                </h2>
                <div className="space-y-3">
                    {EDUCATION.map((edu, i) => (
                        <div key={i}>
                            <h3 className="text-sm font-bold text-slate-900">{edu.degree}</h3>
                            <p className="text-xs text-slate-600 italic">{edu.institution}</p>
                            <p className="text-xs text-slate-500">{edu.year}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <section>
                <h2 className="text-sm font-bold uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-3 text-slate-900">
                  Certifications
                </h2>
                 <ul className="space-y-2">
                    {CERTIFICATIONS.map((cert, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>{cert.name}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>

      </div>
    </div>
  );
};