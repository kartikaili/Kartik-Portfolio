import React from 'react';
import { Section } from './ui/Section';
import { PROFILE } from '../constants';
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-slate-900 text-white pb-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently seeking new opportunities as a <span className="text-primary-400 font-medium">Software Quality Engineer</span>. 
          If you have a role that matches my skills or just want to discuss QA strategies, I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Email Card */}
          <a 
            href={`mailto:${PROFILE.email}`}
            className="group bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-white/10 p-8 rounded-2xl transition-all duration-300 flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-900/50 group-hover:scale-110 transition-transform">
              <Mail size={28} className="text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">Email Me</h3>
              <p className="text-slate-300 group-hover:text-white transition-colors">{PROFILE.email}</p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a 
            href={PROFILE.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 hover:border-[#0077b5]/50 hover:bg-white/10 p-8 rounded-2xl transition-all duration-300 flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 bg-[#0077b5] rounded-full flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-110 transition-transform">
              <Linkedin size={28} className="text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
              <p className="text-slate-300 group-hover:text-white transition-colors">Connect professionally</p>
            </div>
          </a>
        </div>

        {/* Secondary Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-slate-400 text-sm md:text-base border-t border-white/10 pt-12">
           <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={18} />
              <span>{PROFILE.phone}</span>
           </a>
           <div className="hidden md:block w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
           <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{PROFILE.location}</span>
           </div>
        </div>

        <div className="mt-20 text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Kartik Eshwar Aili. All rights reserved.</p>
        </div>
      </div>
    </Section>
  );
};