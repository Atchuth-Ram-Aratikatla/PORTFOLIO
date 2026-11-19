import React, { useState } from 'react';
import { CANDIDATE } from '../data/candidate';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Clock, FileText } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CANDIDATE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Free-Floating Section Header with Faded Ambient Blur (No box, no borders) */}
        <div className="relative text-center max-w-3xl mx-auto mb-16 px-4 py-6 pointer-events-auto">
          {/* Faded ambient background blur cushion directly behind the header content */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 pointer-events-none rounded-3xl"
            style={{
              background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(0,0,0,0.82) 0%, rgba(31,21,12,0.55) 45%, rgba(0,0,0,0.2) 70%, transparent 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
            }}
          />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f150c]/80 border border-[#412d15]/80 text-[#e1dcc9] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Mail className="w-3.5 h-3.5 text-[#e1dcc9]" /> Direct Executive Access
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Initiate a Conversation
          </h2>
          <p className="text-[#c5beab] text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Actively seeking Project Manager / Delivery Manager opportunities in Dubai, UAE (visa sponsorship required) and global remote roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct Channels with Blurred Border Cushion */}
            <div className="space-y-3">
              <a
                href={`mailto:${CANDIDATE.contact.email}`}
                className="p-4 rounded-2xl bg-[#1f150c]/95 border border-[#412d15] hover:border-[#e1dcc9]/70 backdrop-blur-2xl shadow-[0_0_20px_2px_rgba(0,0,0,0.95),0_8px_25px_rgba(0,0,0,0.95),inset_0_0_15px_rgba(0,0,0,0.7)] flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#140d07] text-[#e1dcc9] group-hover:bg-[#412d15] group-hover:text-white transition-colors shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#e1dcc9] block uppercase tracking-wider">Primary Email</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#e1dcc9] transition-colors">
                      {CANDIDATE.contact.email}
                    </span>
                  </div>
                </div>
              </a>

              <a
                href={`tel:${CANDIDATE.contact.phone.replace(/\s+/g, '')}`}
                className="p-4 rounded-2xl bg-[#1f150c]/95 border border-[#412d15] hover:border-[#e1dcc9]/70 backdrop-blur-2xl shadow-[0_0_20px_2px_rgba(0,0,0,0.95),0_8px_25px_rgba(0,0,0,0.95),inset_0_0_15px_rgba(0,0,0,0.7)] flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#140d07] text-[#e1dcc9] group-hover:bg-[#412d15] group-hover:text-white transition-colors shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#e1dcc9] block uppercase tracking-wider">Phone / WhatsApp</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#e1dcc9] transition-colors">
                      {CANDIDATE.contact.phone}
                    </span>
                  </div>
                </div>
              </a>

              <a
                href={CANDIDATE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#1f150c]/95 border border-[#412d15] hover:border-[#e1dcc9]/70 backdrop-blur-2xl shadow-[0_0_20px_2px_rgba(0,0,0,0.95),0_8px_25px_rgba(0,0,0,0.95),inset_0_0_15px_rgba(0,0,0,0.7)] flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#140d07] text-[#e1dcc9] group-hover:bg-[#412d15] group-hover:text-white transition-colors shadow-sm">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#e1dcc9] block uppercase tracking-wider">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#e1dcc9] transition-colors">
                      linkedin.com/in/atchuth-ram-aratikatla
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                onClick={handleCopyEmail}
                className="w-full py-3.5 px-4 rounded-xl bg-[#140d07] hover:bg-[#2a1d11] border border-[#412d15] hover:border-[#e1dcc9]/60 text-xs font-semibold text-[#e1dcc9] flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_2px_rgba(0,0,0,0.95),0_8px_25px_rgba(0,0,0,0.95),inset_0_0_15px_rgba(0,0,0,0.7)] cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#e1dcc9]" />
                    <span className="text-white">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-[#e1dcc9]" />
                    <span>Copy Primary Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Recruiter Inquiry Form with Blurred Border Cushion */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1f150c]/95 border border-[#412d15] shadow-[0_0_30px_4px_rgba(0,0,0,0.95),0_16px_50px_rgba(0,0,0,0.95),inset_0_0_25px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Send Direct Message or Interview Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#c5beab] mb-6">
                Fill in the details below to receive a direct response within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#140d07] border border-[#412d15] text-center space-y-3 backdrop-blur-md">
                  <div className="w-12 h-12 rounded-full bg-[#412d15] text-[#e1dcc9] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-[#e1dcc9]" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-[#c5beab] max-w-md mx-auto">
                    Thank you, {formState.name}! Your message has been logged. You may also contact me directly at{' '}
                    <a href={`mailto:${CANDIDATE.contact.email}`} className="text-[#e1dcc9] underline font-semibold">
                      {CANDIDATE.contact.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', company: '', message: '' });
                    }}
                    className="text-xs text-[#e1dcc9] hover:text-white underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#e1dcc9] mb-1.5">
                        Your Full Name <span className="text-[#e1dcc9]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#000000] border border-[#412d15] text-white placeholder-[#a89f91] focus:outline-none focus:border-[#e1dcc9] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#e1dcc9] mb-1.5">
                        Work Email <span className="text-[#e1dcc9]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#000000] border border-[#412d15] text-white placeholder-[#a89f91] focus:outline-none focus:border-[#e1dcc9] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e1dcc9] mb-1.5">
                      Organization / Hiring Firm
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="e.g. Global Tech Solutions / Dubai Consulting Group"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#000000] border border-[#412d15] text-white placeholder-[#a89f91] focus:outline-none focus:border-[#e1dcc9] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e1dcc9] mb-1.5">
                      Message / Role Details <span className="text-[#e1dcc9]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details regarding the role, timeline, or interview schedule..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#000000] border border-[#412d15] text-white placeholder-[#a89f91] focus:outline-none focus:border-[#e1dcc9] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#e1dcc9] to-[#f2eee3] text-[#000000] font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-black hover:brightness-105 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#000000]" />
                    <span>Submit Executive Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
