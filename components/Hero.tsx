import React from 'react';
import { Download, Mail, Linkedin, ChevronDown } from 'lucide-react';
import { PROFILE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-100 rounded-bl-[100px] -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-200 rounded-tr-[100px] -z-10 opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-block px-4 py-1.5 mb-4 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold tracking-wide">
            Software Quality Engineer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              {PROFILE.name.split(' ')[0]}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
            {PROFILE.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={`mailto:${PROFILE.email}`}
              className="px-8 py-3.5 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a 
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
            >
              <Linkedin size={20} className="text-[#0077b5]" />
              LinkedIn
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              Available for new roles
            </div>
            <a 
              href="resume.pdf" 
              download="Kartik_Aili_Resume.pdf"
              className="flex items-center gap-2 cursor-pointer hover:text-primary-600 transition-colors"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Image/Avatar - Professional Layout */}
        <div className="flex-1 relative flex justify-center md:justify-end z-10">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Ambient glow behind image */}
                <div className="absolute inset-0 bg-primary-600 rounded-full opacity-20 blur-2xl transform translate-y-4"></div>
                
                {/* Main Image Container - Circular Professional Crop */}
                <div className="relative w-full h-full rounded-full border-8 border-white shadow-2xl overflow-hidden bg-slate-200">
                    <img 
                        src={PROFILE.avatar} 
                        alt={PROFILE.name} 
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          // Fallback to initials if image fails to load
                          if (!target.src.includes('ui-avatars.com')) {
                             target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(PROFILE.name)}&background=2563eb&color=fff&size=400`;
                          }
                        }}
                    />
                </div>
                
                {/* Professional Floating Badges (Static/Subtle float instead of bounce) */}
                <div className="absolute -left-2 top-12 bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-50 flex items-center gap-3 animate-float">
                    <div className="bg-green-50 p-2 rounded-lg text-green-600">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Expertise</p>
                        <p className="font-bold text-slate-800 text-sm">Automation</p>
                    </div>
                </div>

                <div className="absolute right-0 bottom-8 bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-50 flex items-center gap-3 animate-float-delayed">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Experience</p>
                        <p className="font-bold text-slate-800 text-sm">4+ Years</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#skills" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 animate-bounce opacity-50 hover:opacity-100 transition-opacity">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};