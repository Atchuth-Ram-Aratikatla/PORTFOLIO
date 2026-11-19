import React from 'react';
import { CANDIDATE } from '../data/candidate';
import { ShieldCheck, MapPin, ExternalLink, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#000000]/90 backdrop-blur-2xl border-t border-[#412d15]/60 py-16 text-[#c5beab] text-xs sm:text-sm shadow-[0_-20px_50px_rgba(0,0,0,0.95)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#412d15]">
          {/* Brand & Value statement */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#412d15] flex items-center justify-center font-bold text-[#e1dcc9] text-xs shadow-md">
                AR
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {CANDIDATE.name}
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#1f150c] text-[#e1dcc9] border border-[#412d15]">
                PMP®
              </span>
            </div>
            <p className="text-xs text-[#a89f91] max-w-md leading-relaxed">
              Technical Project Manager specializing in operational scaling, structured priority queue architecture, 99.8% compliance accuracy, and cross-functional enterprise delivery.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#e1dcc9]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#e1dcc9]" />
              <span>PMI Credential ID: 3823773 (Valid thru July 2029)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#impact" className="text-[#c5beab] hover:text-[#e1dcc9] transition-colors">Impact Metrics</a></li>
              <li><a href="#experience" className="text-[#c5beab] hover:text-[#e1dcc9] transition-colors">Career Experience</a></li>
              <li><a href="#case-studies" className="text-[#c5beab] hover:text-[#e1dcc9] transition-colors">Case Studies</a></li>
              <li><a href="#credentials" className="text-[#c5beab] hover:text-[#e1dcc9] transition-colors">PMI Credentials</a></li>
              <li><a href="#skills" className="text-[#c5beab] hover:text-[#e1dcc9] transition-colors">Skills & Tooling</a></li>
              <li><a href="#contact" className="text-[#c5beab] hover:text-[#e1dcc9] transition-colors">Contact Hub</a></li>
            </ul>
          </div>

          </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a89f91]">
          <div>
            © {new Date().getFullYear()} {CANDIDATE.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={CANDIDATE.credentials.certifications[0].verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e1dcc9] hover:text-white flex items-center gap-1 transition-colors"
            >
              Verify on Credly <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              className="hover:text-[#e1dcc9] flex items-center gap-1 transition-colors cursor-pointer"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5 text-[#e1dcc9]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
