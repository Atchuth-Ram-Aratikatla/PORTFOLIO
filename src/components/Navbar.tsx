import React, { useState, useEffect } from 'react';
import { CANDIDATE } from '../data/candidate';
import { ShieldCheck, MapPin, Menu, X, FileText, Send } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Impact', href: '#impact' },
    { label: 'Experience', href: '#experience' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Skills & Tools', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-2xl border-b ${
        scrolled
          ? 'bg-[#000000]/92 border-[#412d15] shadow-[0_12px_35px_rgba(0,0,0,0.95),0_4px_16px_rgba(0,0,0,0.9)] py-3'
          : 'bg-[#000000]/80 border-[#412d15]/50 shadow-[0_10px_30px_rgba(0,0,0,0.9),0_2px_10px_rgba(0,0,0,0.8)] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#412d15] via-[#634724] to-[#e1dcc9] p-[1.5px] shadow-lg shadow-black group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#1f150c] rounded-[10px] flex items-center justify-center font-bold text-[#e1dcc9] text-base tracking-wider">
              AR
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#e1dcc9] text-base sm:text-lg tracking-tight group-hover:text-white transition-colors">
                {CANDIDATE.name}
              </span>
              <span className="text-[11px] px-1.5 py-0.5 rounded bg-[#1f150c] text-[#e1dcc9] font-semibold border border-[#412d15] shadow-inner">
                PMP®
              </span>
            </div>
            <span className="text-xs text-[#a89f91] font-medium hidden sm:inline">
              Technical Project Manager · Operations & Delivery
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs xl:text-sm font-medium text-[#c5beab] hover:text-[#e1dcc9] hover:bg-[#1f150c] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CANDIDATE.contact.resumeDownloadUrl}
            target={CANDIDATE.contact.resumeDownloadUrl.startsWith('http') ? '_blank' : undefined}
            rel={CANDIDATE.contact.resumeDownloadUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            download={!CANDIDATE.contact.resumeDownloadUrl.startsWith('http') ? 'Atchuth_Ram_Aratikatla_PMP_Resume.pdf' : undefined}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#e1dcc9] bg-[#1f150c] hover:bg-[#2a1d11] border border-[#412d15] rounded-lg transition-all shadow-sm hover:text-white"
          >
            <FileText className="w-3.5 h-3.5 text-[#e1dcc9]" />
            Resume
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault();
                onOpenContact();
              }
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-[#000000] bg-gradient-to-r from-[#e1dcc9] via-[#f2eee3] to-[#e1dcc9] hover:brightness-105 rounded-lg shadow-md shadow-black transition-all hover:scale-102"
          >
            <Send className="w-3.5 h-3.5 text-[#000000]" />
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#c5beab] hover:text-[#e1dcc9] focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000000]/98 backdrop-blur-xl border-b border-[#412d15] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#c5beab] hover:text-[#e1dcc9] hover:bg-[#1f150c] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#412d15] flex flex-col gap-2">
            <a
              href={CANDIDATE.contact.resumeDownloadUrl}
              target={CANDIDATE.contact.resumeDownloadUrl.startsWith('http') ? '_blank' : undefined}
              rel={CANDIDATE.contact.resumeDownloadUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
              download={!CANDIDATE.contact.resumeDownloadUrl.startsWith('http') ? 'Atchuth_Ram_Aratikatla_PMP_Resume.pdf' : undefined}
              className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-[#e1dcc9] bg-[#1f150c] border border-[#412d15] rounded-lg"
            >
              <FileText className="w-4 h-4 text-[#e1dcc9]" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-[#000000] bg-gradient-to-r from-[#e1dcc9] to-[#f2eee3] rounded-lg shadow-md"
            >
              <Send className="w-4 h-4 text-[#000000]" />
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
