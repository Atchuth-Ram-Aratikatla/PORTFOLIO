import React from 'react';
import { CANDIDATE } from '../data/candidate';
import DigitalRainCurtain from './originkit/DigitalRainCurtain';
import FocusReveal from './originkit/FocusReveal';
import OrbitBorderButton from './originkit/OrbitBorderButton';
import EncryptButton from './originkit/EncryptButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#000000] pt-28 pb-16 isolate">
      {/* Background Digital Rain Curtain (ArgentCloudburst) - in same blending stacking context */}
      <div className="absolute inset-0 pointer-events-auto">
        <DigitalRainCurtain
          background="#000000"
          baseColor="#412d15"
          accentColor="#e1dcc9"
          density={100}
          bandPosition={0}
          zoom={100}
          hover={60}
          wind={6}
          downpour={6}
          tap={60}
          tapEffect="lightning"
          speed={45}
          advanced={{
            tipColor: "#ffffff",
            cyanColor: "#e1dcc9",
            hazeColor: "#1f150c",
            rimColor: "#412d15",
            bandGlow: 45,
            bandWidth: 32,
            lineFill: 28,
            dashCell: 160,
            fallSpeed: 220,
            twinkleRate: 52,
            edgeBright: 65,
            glow: 28,
          }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', aspectRatio: 'auto' }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full">
        {/* Centered Executive Typography & CTAs */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center select-none mb-12">
          {/* Verification Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1f150c]/92 border border-[#412d15] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.9),0_0_18px_rgba(0,0,0,0.85)] mb-6 hover:border-[#e1dcc9]/50 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1dcc9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e1dcc9]"></span>
            </span>
            <span className="text-xs font-semibold text-[#e1dcc9]">
              PMP® Certified · Project Management Institute (Credly ID: 3823773)
            </span>
          </div>

          {/* Candidate Title & Subtitle */}
          <div className="text-center mb-3">
            <p className="text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-widest text-[#e1dcc9] mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Executive Technical Project Manager · Operations & Delivery
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              {CANDIDATE.name}
            </h1>
          </div>

          {/* FocusReveal Tagline Animation */}
          <div className="mb-6 w-full flex justify-center">
            <FocusReveal
              text="Architecting High-Throughput Delivery, Operational Rigor & Enterprise Governance."
              as="h2"
              blur={14}
              className="text-lg sm:text-xl md:text-2xl font-medium text-[#e1dcc9] text-center leading-relaxed"
            />
          </div>

          {/* Executive Summary Narrative */}
          <p className="max-w-2xl text-sm sm:text-base text-[#c5beab] mb-8 text-center mx-auto leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {CANDIDATE.hero.subheadline}
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-4 pointer-events-auto">
            {/* Primary Action: Master Resume with OrbitBorderButton */}
            <a
              href={CANDIDATE.contact.resumeDownloadUrl}
              download="Atchuth_Ram_Aratikatla_Master_Resume.pdf"
              className="inline-block"
              title="Download Master Resume (PDF)"
            >
              <OrbitBorderButton
                label="Master Resume"
                fill="#1f150c"
                textColor="#e1dcc9"
                cometColor="#e1dcc9"
                glowColor="#412d15"
                width={220}
                height={50}
                style={{ fontWeight: 600, fontSize: '14px' }}
              />
            </a>

            {/* Secondary Action: Explore Strategic Case Studies with EncryptButton */}
            <a href="#case-studies" className="inline-block" title="Explore Strategic Case Studies">
              <EncryptButton
                label="Explore Strategic Case Studies"
                fill="#1f150c"
                textColor="#e1dcc9"
                hoverTextColor="#ffffff"
                paddingX={24}
                paddingY={13}
                rounded={12}
                border={true}
                borderOptions={{ color: '#412d15', width: 1 }}
                sweepOptions={{ color: '#e1dcc9', speed: 8, count: 2, width: 12 }}
                font={{ fontSize: 14, fontWeight: 600 }}
              />
            </a>
          </div>
        </div>

        {/* Quick Credibility Highlight Bar */}
        <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-10 mt-6 border-t border-[#412d15]/80 pointer-events-auto">
          <div className="flex flex-col items-center p-4 rounded-xl bg-[#1f150c]/95 border border-[#412d15] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.95),0_0_15px_rgba(0,0,0,0.85)]">
            <span className="text-2xl sm:text-3xl font-bold text-[#e1dcc9] tracking-tight">CAD 2.86M</span>
            <span className="text-xs text-[#a89f91] mt-1 text-center font-medium">Renewal Volume Stewarded</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-xl bg-[#1f150c]/95 border border-[#412d15] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.95),0_0_15px_rgba(0,0,0,0.85)]">
            <span className="text-2xl sm:text-3xl font-bold text-[#e1dcc9] tracking-tight">90+ / Mo</span>
            <span className="text-xs text-[#a89f91] mt-1 text-center font-medium">Throughput Review Velocity</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-xl bg-[#1f150c]/95 border border-[#412d15] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.95),0_0_15px_rgba(0,0,0,0.85)]">
            <span className="text-2xl sm:text-3xl font-bold text-[#e1dcc9] tracking-tight">99.8%</span>
            <span className="text-xs text-[#a89f91] mt-1 text-center font-medium">Process & File Accuracy</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-xl bg-[#1f150c]/95 border border-[#412d15] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.95),0_0_15px_rgba(0,0,0,0.85)]">
            <span className="text-2xl sm:text-3xl font-bold text-[#e1dcc9] tracking-tight">1,082</span>
            <span className="text-xs text-[#a89f91] mt-1 text-center font-medium">Active Policy Accounts</span>
          </div>
        </div>
      </div>

      {/* Smooth Atmospheric Bottom Blend Transition into Moonlit Petals */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent via-[#000000]/80 to-[#000000] pointer-events-none z-10" />
    </section>
  );
};
