import React from 'react';
import { CANDIDATE } from '../data/candidate';
import { ShieldCheck, MapPin, ExternalLink, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0c0705]/80 backdrop-blur-2xl border-t border-[#3b2315]/50 py-16 text-[#d6c7b6] text-xs sm:text-sm shadow-[0_-20px_50px_rgba(12,7,5,0.95)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#29180e]">
          {/* Brand & Value statement */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#99582a] flex items-center justify-center font-bold text-[#ffe6a7] text-xs shadow-md">
                AR
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {CANDIDATE.name}
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#432818]/60 text-[#ffe6a7] border border-[#99582a]/40">
                PMP®
              </span>
            </div>
            <p className="text-xs text-[#d6c7b6] max-w-md leading-relaxed">
              Technical Project Manager specializing in operational scaling, structured priority queue architecture, 99.8% compliance accuracy, and cross-functional enterprise delivery.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#ffe6a7]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#bb9457]" />
              <span>PMI Credential ID: 3823773 (Valid thru July 2029)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#impact" className="text-[#d6c7b6] hover:text-[#ffe6a7] transition-colors">Impact Metrics</a></li>
              <li><a href="#experience" className="text-[#d6c7b6] hover:text-[#ffe6a7] transition-colors">Career Experience</a></li>
              <li><a href="#case-studies" className="text-[#d6c7b6] hover:text-[#ffe6a7] transition-colors">Case Studies</a></li>
              <li><a href="#credentials" className="text-[#d6c7b6] hover:text-[#ffe6a7] transition-colors">PMI Credentials</a></li>
              <li><a href="#skills" className="text-[#d6c7b6] hover:text-[#ffe6a7] transition-colors">Skills & Tooling</a></li>
              <li><a href="#contact" className="text-[#d6c7b6] hover:text-[#ffe6a7] transition-colors">Contact Hub</a></li>
            </ul>
          </div>

          </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a89887]">
          <div>
            © {new Date().getFullYear()} {CANDIDATE.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={CANDIDATE.credentials.certifications[0].verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bb9457] hover:text-[#ffe6a7] flex items-center gap-1 transition-colors"
            >
              Verify on Credly <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              className="hover:text-[#ffe6a7] flex items-center gap-1 transition-colors cursor-pointer"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5 text-[#bb9457]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
