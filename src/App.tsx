import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactDashboard } from './components/ImpactDashboard';
import { CaseStudies } from './components/CaseStudies';
import { Experience } from './components/Experience';
import { CredentialsSection } from './components/CredentialsSection';
import { SkillsAndTools } from './components/SkillsAndTools';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import MoonlitPetals from './components/originkit/MoonlitPetals';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#e1dcc9] selection:bg-[#412d15] selection:text-[#e1dcc9]">
      {/* Sticky Navigation with Frosted Blur Header */}
      <Navbar onOpenContact={scrollToContact} />

      <main>
        {/* Hero Section with DigitalRainCurtain */}
        <Hero />

        {/* The Rest of the Page with Continuous Moonlit Petals Background (Full Opacity) */}
        <div className="relative">
          {/* Sticky Viewport-Sized Moonlit Petals Ambient Background */}
          <div className="sticky top-0 h-screen w-full pointer-events-none -mb-[100vh] z-0 overflow-hidden">
            <MoonlitPetals
              background="#000000"
              blossomColor="#e1dcc9"
              speed={45}
              petals={170}
              wind={28}
              scale={100}
              direction="left"
              glow={70}
              advanced={{
                petalColor: "#ffffff",
                branchColor: "#412d15",
                hazeColor: "#000000",
                hazeOpacity: 15,
                highlight: 100,
                fallSpeed: 85,
                nearShare: 20,
                vignette: 15,
                grain: 2,
              }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>

          {/* Sections Layer Sitting Over Ambient Background (Transparent to keep background 100% visible) */}
          <div className="relative z-10">
            {/* Smooth Inflow Atmospheric Gradient from Hero into Moonlit Petals */}
            <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#000000] via-[#000000]/80 to-transparent pointer-events-none -z-1" />

            {/* Quantified Impact Dashboard */}
            <ImpactDashboard />

            {/* Strategic Case Studies */}
            <CaseStudies />

            {/* Career Experience & Delivery Leadership */}
            <Experience />

            {/* Verified Credentials */}
            <CredentialsSection />

            {/* Competencies & 3D Interactive Tool Matrix */}
            <SkillsAndTools />

            {/* Formal Education & Advanced Post-Graduate Studies */}
            <EducationSection />

            {/* Direct Recruiter Access & Dubai Relocation Hub */}
            <ContactSection />

            {/* Professional Executive Footer (Unified in same background layer) */}
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
