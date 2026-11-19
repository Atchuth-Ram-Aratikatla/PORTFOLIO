import React from 'react';
import { CANDIDATE } from '../data/candidate';
import DigitalRainCurtain from './originkit/DigitalRainCurtain';
import FocusReveal from './originkit/FocusReveal';
import OrbitBorderButton from './originkit/OrbitBorderButton';
import EncryptButton from './originkit/EncryptButton';
import { MarbleSprite } from './originkit/MarbleSprite';
import { ShieldCheck, Award, ArrowRight, FileDown, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0c0705] pt-28 pb-16 isolate">
      {/* Background Digital Rain Curtain (ArgentCloudburst) - in same blending stacking context */}
      <div className="absolute inset-0 pointer-events-auto">
        <DigitalRainCurtain
          background="#0c0705"
          baseColor="#bb9457"
          accentColor="#ffe6a7"
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
            cyanColor: "#ffe6a7",
            hazeColor: "#432818",
            rimColor: "#3b2315",
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Executive Typography & CTAs */}
          <div className="md:col-span-7 flex flex-col items-start text-left select-none">
            {/* Verification Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140b07]/92 border border-[#3b2315] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.9),0_0_18px_rgba(0,0,0,0.85)] mb-6 hover:border-[#bb9457]/50 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bb9457] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#bb9457]"></span>
              </span>
              <span className="text-xs font-semibold text-[#f7ede2]">
                PMP® Certified · Project Management Institute (Credly ID: 3823773)
              </span>
            </div>

            {/* Candidate Title & Subtitle */}
            <div className="text-left mb-3">
              <p className="text-sm sm:text-base md:text-lg font-extrabold uppercase tracking-widest text-[#fff3d6] mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Executive Technical Project Manager · Operations & Delivery
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                {CANDIDATE.name}
              </h1>
            </div>

            {/* FocusReveal Tagline Animation */}
            <div className="mb-6 w-full">
              <FocusReveal
                text="Architecting High-Throughput Delivery, Operational Rigor & Enterprise Governance."
                as="h2"
                blur={14}
                className="text-lg sm:text-xl md:text-2xl font-medium text-[#f5e6d3] text-left leading-relaxed"
              />
            </div>

            {/* Executive Summary Narrative */}
            <p className="max-w-2xl text-sm sm:text-base text-[#e2d5c5] mb-8 text-left leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {CANDIDATE.hero.subheadline}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="relative z-20 flex flex-wrap items-center justify-start gap-4 sm:gap-5 mb-4 pointer-events-auto">
              <a href="#case-studies" className="inline-block">
                <OrbitBorderButton
                  label="Explore Strategic Case Studies"
                  fill="#6f1d1b"
                  textColor="#ffe6a7"
                  cometColor="#ffe6a7"
                  glowColor="#bb9457"
                  width={250}
                  height={50}
                  style={{ fontWeight: 600, fontSize: '14px' }}
                />
              </a>

              <a
                href={CANDIDATE.contact.resumeDownloadUrl}
                target={CANDIDATE.contact.resumeDownloadUrl.startsWith('http') ? '_blank' : undefined}
                rel={CANDIDATE.contact.resumeDownloadUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                download={!CANDIDATE.contact.resumeDownloadUrl.startsWith('http') ? 'Atchuth_Ram_Aratikatla_PMP_Resume.pdf' : undefined}
                className="inline-block"
              >
                <EncryptButton
                  label="Master Resume (Drive)"
                  fill="#1e120a"
                  textColor="#ffe6a7"
                  hoverTextColor="#ffffff"
                  paddingX={26}
                  paddingY={13}
                  rounded={12}
                  border={true}
                  borderOptions={{ color: '#432818', width: 1 }}
                  sweepOptions={{ color: '#bb9457', speed: 8, count: 2, width: 12 }}
                  font={{ fontSize: 14, fontWeight: 600 }}
                />
              </a>
            </div>
          </div>

          {/* Right Side: Free-Floating Interactive MarbleSprite in Executive Theme Colors */}
          <div className="md:col-span-5 flex items-center justify-center relative w-full h-[380px] sm:h-[460px] lg:h-[520px] pointer-events-auto select-none">
            {/* Subtle organic ambient radial warmth behind the floating capsule (no box, no borders) */}
            <div
              className="absolute w-[280px] sm:w-[360px] lg:w-[420px] h-[280px] sm:h-[360px] lg:h-[420px] rounded-full pointer-events-none opacity-40 blur-3xl -z-1"
              style={{
                background: 'radial-gradient(circle, rgba(187,148,87,0.22) 0%, rgba(111,29,27,0.12) 45%, transparent 70%)',
              }}
            />

            {/* Free-floating capsule container with soft circular drop-shadow */}
            <div
              className="relative w-full h-full max-w-[480px] flex items-center justify-center transition-transform duration-500"
              style={{
                filter: 'drop-shadow(0 25px 45px rgba(0,0,0,0.85)) drop-shadow(0 0 25px rgba(187,148,87,0.2))',
              }}
            >
              <MarbleSprite
                spriteColor="#bb9457"
                background="transparent"
                scale={95}
                frost={4.5}
                follow="page"
                reach={10}
                lean={14}
                blink={10}
                float={22}
                advanced={{
                  eyeColor: '#ffe6a7',
                  glow: 110,
                  gloss: 105,
                }}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Quick Credibility Highlight Bar */}
        <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-10 mt-6 border-t border-[#3b2315]/80 pointer-events-auto">
          <div className="flex flex-col items-center p-4 rounded-xl bg-[#130b07]/92 border border-[#3a2215] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.9),0_0_15px_rgba(0,0,0,0.8)]">
            <span className="text-2xl sm:text-3xl font-bold text-[#ffe6a7] tracking-tight">CAD 2.86M</span>
            <span className="text-xs text-[#d6c7b6] mt-1 text-center font-medium">Renewal Volume Stewarded</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-xl bg-[#130b07]/92 border border-[#3a2215] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.9),0_0_15px_rgba(0,0,0,0.8)]">
            <span className="text-2xl sm:text-3xl font-bold text-[#bb9457] tracking-tight">90+ / Mo</span>
            <span className="text-xs text-[#d6c7b6] mt-1 text-center font-medium">Throughput Review Velocity</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-xl bg-[#130b07]/92 border border-[#3a2215] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.9),0_0_15px_rgba(0,0,0,0.8)]">
            <span className="text-2xl sm:text-3xl font-bold text-[#d6b37c] tracking-tight">99.8%</span>
            <span className="text-xs text-[#d6c7b6] mt-1 text-center font-medium">Process & File Accuracy</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-xl bg-[#130b07]/92 border border-[#3a2215] backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.9),0_0_15px_rgba(0,0,0,0.8)]">
            <span className="text-2xl sm:text-3xl font-bold text-[#ffe6a7] tracking-tight">1,082</span>
            <span className="text-xs text-[#d6c7b6] mt-1 text-center font-medium">Active Policy Accounts</span>
          </div>
        </div>
      </div>

      {/* Smooth Atmospheric Bottom Blend Transition into Moonlit Petals */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent via-[#0c0705]/80 to-[#0c0705] pointer-events-none z-10" />
    </section>
  );
};
