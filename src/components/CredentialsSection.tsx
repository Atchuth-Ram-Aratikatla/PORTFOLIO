import React from 'react';
import { CANDIDATE } from '../data/candidate';
import { ShieldCheck, Award, ExternalLink, CheckCircle2, GraduationCap, BookOpen, Clock, Check } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="relative py-24 bg-transparent">
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
            <Award className="w-3.5 h-3.5 text-[#e1dcc9]" /> Certified Competence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Industry Credentials & Professional Accreditations
          </h2>
          <p className="text-[#c5beab] text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Globally verified credentials backed by the Project Management Institute (PMI) and top enterprise frameworks.
          </p>
        </div>

        {/* Primary PMP® Credential Showcase with Blurred Border Cushion */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-[#1f150c]/95 border border-[#412d15] backdrop-blur-2xl shadow-[0_0_32px_4px_rgba(0,0,0,0.95),0_16px_50px_rgba(0,0,0,0.95),inset_0_0_25px_rgba(0,0,0,0.7)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[#412d15]">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#412d15] border border-[#634724] text-[#e1dcc9] text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#e1dcc9]" /> Primary Global Credential
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded bg-[#140d07] text-[#e1dcc9] border border-[#412d15] font-semibold">
                  Valid Through July 2029
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Project Management Professional (PMP)®
              </h3>

              <p className="text-[#c5beab] text-sm sm:text-base leading-relaxed">
                Earned through the Project Management Institute (PMI), demonstrating verified expertise in leading enterprise projects across predictive, agile, and hybrid environments. Authorized under global credential ID <strong className="text-[#e1dcc9] font-mono">3823773</strong>, active through July 2029.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[260px]">
              <a
                href={CANDIDATE.credentials.certifications[0].verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#e1dcc9] to-[#f2eee3] text-[#000000] font-bold text-sm transition-all shadow-lg shadow-black hover:scale-[1.02]"
              >
                <span>Verify Credly Badge (3823773)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="p-3 rounded-xl bg-[#140d07] border border-[#412d15] text-center shadow-inner">
                <span className="text-[11px] text-[#a89f91] block uppercase tracking-wider">PMI Registry Verification</span>
                <span className="text-xs font-semibold text-[#e1dcc9]">Valid & Active Globally</span>
              </div>
            </div>
          </div>

          {/* 4 Core Competency Stats with Inner Blur Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-xl bg-[#140d07] border border-[#412d15] backdrop-blur-md shadow-inner">
              <span className="text-2xl font-bold text-[#e1dcc9] block">96%</span>
              <span className="text-xs text-[#a89f91] mt-0.5 block">Predictive & Agile Delivery</span>
            </div>

            <div className="p-4 rounded-xl bg-[#140d07] border border-[#412d15] backdrop-blur-md shadow-inner">
              <span className="text-2xl font-bold text-[#e1dcc9] block">98%</span>
              <span className="text-xs text-[#a89f91] mt-0.5 block">Risk & Governance Mastery</span>
            </div>

            <div className="p-4 rounded-xl bg-[#140d07] border border-[#412d15] backdrop-blur-md shadow-inner">
              <span className="text-2xl font-bold text-[#e1dcc9] block">92%</span>
              <span className="text-xs text-[#a89f91] mt-0.5 block">Throughput Review Velocity</span>
            </div>

            <div className="p-4 rounded-xl bg-[#140d07] border border-[#412d15] backdrop-blur-md shadow-inner">
              <span className="text-2xl font-bold text-[#e1dcc9] block">99.8%</span>
              <span className="text-xs text-[#a89f91] mt-0.5 block">Quality & Audit Standards</span>
            </div>
          </div>
        </div>

        {/* Additional Verified Certifications Grid */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#e1dcc9]" /> Additional Professional Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CANDIDATE.credentials.certifications.slice(1).map((cert) => (
              <div
                key={cert.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#1f150c]/95 border border-[#412d15] hover:border-[#e1dcc9]/70 transition-all duration-300 backdrop-blur-2xl shadow-[0_0_28px_3px_rgba(0,0,0,0.95),0_14px_45px_rgba(0,0,0,0.95),inset_0_0_22px_rgba(0,0,0,0.7)] hover:shadow-[0_0_35px_5px_rgba(65,45,21,0.5),0_16px_50px_rgba(0,0,0,0.95)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#e1dcc9]">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-[#a89f91] font-medium">{cert.issueDate}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                  <p className="text-xs sm:text-sm text-[#c5beab] leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#412d15] flex items-center justify-between">
                  <span className="text-xs text-[#e1dcc9] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e1dcc9]" /> Credential Verified
                  </span>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#e1dcc9] hover:text-white flex items-center gap-1"
                  >
                    View Credential <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distinct Section: Professional Training & Continuous Learning */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#e1dcc9]" /> Professional Training & Continuous Learning
              </h3>
              <p className="text-xs sm:text-sm text-[#c5beab] mt-1">
                Completed professional coursework in Six Sigma, Risk Planning, MS Project, and Cloud Onboarding.
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-[#140d07] text-[#e1dcc9] font-medium border border-[#412d15] w-fit">
              Non-Certification Coursework
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CANDIDATE.credentials.training.map((train) => (
              <div
                key={train.id}
                className="p-4 rounded-xl bg-[#1f150c]/95 border border-[#412d15] hover:border-[#e1dcc9]/60 transition-colors backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.95),0_0_15px_rgba(0,0,0,0.85)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-[#a89f91]">{train.provider}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#140d07] text-[#e1dcc9] border border-[#412d15]">
                    {train.category}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-[#e1dcc9] mb-1">{train.name}</h5>
                <p className="text-xs text-[#a89f91] leading-normal">{train.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Centered Blend Divider into Next Section */}
        <div className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#412d15]/50 to-transparent mt-20" />
      </div>
    </section>
  );
};
