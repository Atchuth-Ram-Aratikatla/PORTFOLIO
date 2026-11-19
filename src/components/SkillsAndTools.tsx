import React, { useState, useRef } from 'react';
import RubberSpheres, { ImageItem } from './originkit/RubberSpheres';
import { TOOL_CATEGORIES } from '../data/toolsData';
import { Cpu, Layers, Smartphone } from 'lucide-react';

const SPHERE_TOOL_IMAGES: ImageItem[] = [
  // 1. Blue logos -> White sphere
  { fit: 'Contain', image: { src: '/logos/jira.svg' }, sphereColor: '#FFFFFF' },
  { fit: 'Contain', image: { src: '/logos/confluence.svg' }, sphereColor: '#FFFFFF' },
  { fit: 'Contain', image: { src: '/logos/word.svg' }, sphereColor: '#FFFFFF' },
  { fit: 'Contain', image: { src: '/logos/outlook.svg' }, sphereColor: '#FFFFFF' },
  { fit: 'Contain', image: { src: '/logos/google-docs.svg' }, sphereColor: '#FFFFFF' },
  { fit: 'Contain', image: { src: '/logos/zoom.svg' }, sphereColor: '#FFFFFF' },

  // 2. Yellow logo -> White sphere
  { fit: 'Contain', image: { src: '/logos/powerbi.svg' }, sphereColor: '#FFFFFF' },

  // 3. Multicolor logos -> White sphere
  { fit: 'Contain', image: { src: '/logos/teams.svg' }, sphereColor: '#FFFFFF' },
  { fit: 'Contain', image: { src: '/logos/google-drive.svg' }, sphereColor: '#FFFFFF' },
  { fit: 'Contain', image: { src: '/logos/google-meet.svg' }, sphereColor: '#FFFFFF' },
  { fit: 'Contain', image: { src: '/logos/slack.svg' }, sphereColor: '#FFFFFF' },

  // 4. Green logos -> Invert: Green sphere, White logo
  { fit: 'Contain', image: { src: '/logos/ms-project-white.svg' }, sphereColor: '#107C41' },
  { fit: 'Contain', image: { src: '/logos/excel-white.svg' }, sphereColor: '#107C41' },
  { fit: 'Contain', image: { src: '/logos/google-sheets-white.svg' }, sphereColor: '#0F9D58' },

  // 5. Red logos -> Invert: Red sphere, White logo
  { fit: 'Contain', image: { src: '/logos/autocad-white.svg' }, sphereColor: '#D32F2F' },
  { fit: 'Contain', image: { src: '/logos/powerpoint-white.svg' }, sphereColor: '#D83B01' },

  // 6. White text logo -> Black sphere
  { fit: 'Contain', image: { src: '/logos/power-broker.svg' }, sphereColor: '#111111' },
];

export const SkillsAndTools: React.FC = () => {
  const [motionActive, setMotionActive] = useState<boolean>(false);
  const [manualTilt, setManualTilt] = useState<{ x: number; y: number } | null>(null);
  const manualTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnableMotion = async () => {
    if (
      typeof (DeviceOrientationEvent as any) !== 'undefined' &&
      typeof (DeviceOrientationEvent as any).requestPermission === 'function'
    ) {
      try {
        const res = await (DeviceOrientationEvent as any).requestPermission();
        if (res === 'granted') {
          setMotionActive(true);
        }
      } catch (err) {
        console.warn('Device motion permission error:', err);
      }
    } else {
      setMotionActive(true);
    }
  };

  const triggerManualTilt = (x: number, y: number) => {
    if (manualTimerRef.current) clearTimeout(manualTimerRef.current);
    if (manualTilt && manualTilt.x === x && manualTilt.y === y) {
      setManualTilt(null);
      return;
    }
    setManualTilt({ x, y });
    if (x !== 0 || y !== 0) {
      manualTimerRef.current = setTimeout(() => {
        setManualTilt(null);
      }, 10000);
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-transparent">
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
            <Cpu className="w-3.5 h-3.5 text-[#e1dcc9]" /> Verified Technical & Operational Tooling
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Core Competencies & Tool Ecosystem
          </h2>
          <p className="text-[#c5beab] text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Documented operational fluency across enterprise scheduling, Agile Scrum delivery, business intelligence, brokerage management systems, and cross-functional collaboration suites.
          </p>
        </div>

        {/* Interactive 3D Physics Sphere Arena Box with Blurred Background & Motion Sensor */}
        <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] my-10 sm:my-12 rounded-3xl bg-[#1f150c]/95 border border-[#412d15] backdrop-blur-2xl shadow-[0_0_35px_4px_rgba(0,0,0,0.95),0_18px_50px_rgba(0,0,0,0.95),inset_0_0_30px_rgba(0,0,0,0.7)] overflow-hidden select-none">
          {/* Subtle Grid texture inside the box */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#412d15_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Top Control Bar with Arena indicator, Motion Sensor Badge, and Interactive Tilt Controls */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-6 right-3 sm:right-6 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
            {/* Status / Title */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#140d07] border border-[#412d15] shadow-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#e1dcc9] animate-ping" />
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#e1dcc9] font-semibold">
                3D Physics Arena • Gyro Gravity
              </span>
            </div>

            {/* Mobile Motion Sensor Status & Quick Tilt Simulator */}
            <div className="flex items-center gap-1.5 pointer-events-auto">
              <button
                type="button"
                onClick={handleEnableMotion}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 shadow-sm ${
                  motionActive
                    ? 'bg-[#107c41]/30 border border-[#107c41] text-[#a7f3d0]'
                    : 'bg-[#140d07] border border-[#412d15] text-[#e1dcc9] hover:bg-[#2a1d11]'
                }`}
                title="Tap to activate device orientation motion sensor"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#e1dcc9]" />
                <span>{motionActive ? 'Gyro Active' : 'Tilt Motion'}</span>
              </button>

              {/* Quick Tilt Simulation Controls (Test falling to side without a phone) */}
              <div className="flex items-center bg-[#140d07] border border-[#412d15] rounded-full p-0.5 shadow-md">
                <button
                  type="button"
                  onClick={() => triggerManualTilt(-1, 0)}
                  className={`px-2.5 py-1 text-[10px] sm:text-[11px] rounded-full font-bold transition-all ${
                    manualTilt?.x === -1 ? 'bg-[#412d15] text-[#e1dcc9] shadow-sm' : 'text-[#c5beab] hover:text-white'
                  }`}
                  title="Fall to Left Side Wall & Grid"
                >
                  ◀ Left
                </button>
                <button
                  type="button"
                  onClick={() => triggerManualTilt(0, 0)}
                  className={`px-2 py-1 text-[10px] sm:text-[11px] rounded-full font-bold transition-all ${
                    manualTilt === null || (manualTilt.x === 0 && manualTilt.y === 0)
                      ? 'bg-[#412d15] text-[#e1dcc9]'
                      : 'text-[#c5beab] hover:text-white'
                  }`}
                  title="Level / Center Cluster"
                >
                  ● Level
                </button>
                <button
                  type="button"
                  onClick={() => triggerManualTilt(1, 0)}
                  className={`px-2.5 py-1 text-[10px] sm:text-[11px] rounded-full font-bold transition-all ${
                    manualTilt?.x === 1 ? 'bg-[#412d15] text-[#e1dcc9] shadow-sm' : 'text-[#c5beab] hover:text-white'
                  }`}
                  title="Fall to Right Side Wall & Grid"
                >
                  Right ▶
                </button>
              </div>
            </div>
          </div>

          <RubberSpheres
            background="transparent"
            sourceMode="Images"
            images={SPHERE_TOOL_IMAGES}
            density={55}
            dotSize={125}
            lighting="Soft Studio"
            enableMotionSensor={true}
            manualTilt={manualTilt}
            onMotionSensorChange={(active) => setMotionActive(active)}
            field={{ spreadX: 190, spreadY: 125 }}
            material={{
              roughness: 85,
              gloss: 95,
              transparency: 0,
            }}
            motion={{
              gravityAnchor: 'Center',
              bounciness: 95,
              mouseForce: 120,
              parallax: 0,
            }}
          />
        </div>

        {/* The 4 Exact Tool & Capability Categories */}
        <div className="space-y-10">
          {TOOL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-10 rounded-3xl bg-[#1f150c]/95 border border-[#412d15] backdrop-blur-2xl shadow-[0_0_28px_3px_rgba(0,0,0,0.95),0_14px_45px_rgba(0,0,0,0.95),inset_0_0_22px_rgba(0,0,0,0.7)]"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between gap-4 pb-6 mb-8 border-b border-[#412d15]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 rounded-lg bg-[#140d07] text-[#e1dcc9] border border-[#412d15] shadow-sm">
                      <Layers className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#e1dcc9] font-medium leading-relaxed">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Tools in this Category */}
              <div className="grid grid-cols-1 gap-6">
                {category.tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="p-5 sm:p-6 rounded-2xl bg-[#140d07] border border-[#412d15] backdrop-blur-md shadow-[0_0_18px_2px_rgba(0,0,0,0.9),inset_0_0_14px_rgba(0,0,0,0.6)] hover:border-[#e1dcc9]/60 transition-all duration-300 flex flex-col sm:flex-row items-start gap-5 group"
                  >
                    {/* Actual Tool Logo Icon(s) */}
                    {tool.subTools && tool.subTools.length > 0 ? (
                      <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
                        <div className="grid grid-cols-2 gap-1.5 p-1.5 rounded-2xl bg-[#1f150c] border border-[#412d15] shadow-md group-hover:border-[#e1dcc9]/50 transition-all">
                          {tool.subTools.map((st) => (
                            <div
                              key={st.name}
                              className="w-8 h-8 rounded-lg bg-[#140d07] border border-[#412d15] p-1 flex items-center justify-center hover:scale-110 transition-transform"
                              title={st.name}
                            >
                              <img
                                src={st.icon}
                                alt={`${st.name} logo`}
                                className="w-full h-full object-contain filter drop-shadow-sm"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-[#1f150c] border border-[#412d15] p-2.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#e1dcc9]/50 transition-all">
                        <img
                          src={tool.iconDataUri}
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-contain filter drop-shadow-sm"
                        />
                      </div>
                    )}

                    {/* Tool Details */}
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#e1dcc9] transition-colors">
                            {tool.name}
                          </h4>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#412d15] text-[#e1dcc9] border border-[#634724] shadow-sm">
                            {tool.badge}
                          </span>
                        </div>

                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#1f150c] text-[#e1dcc9] border border-[#412d15] self-start sm:self-auto">
                          {tool.proficiency}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#a89f91] leading-relaxed mt-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                        {tool.description}
                      </p>

                      {/* Sub-tools Pill Badges with Mini Authentic Logos */}
                      {tool.subTools && tool.subTools.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-[#412d15]">
                          {tool.subTools.map((st) => (
                            <span
                              key={st.name}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1f150c] border border-[#412d15] text-[11px] font-semibold text-[#e1dcc9] hover:border-[#e1dcc9]/50 transition-colors shadow-sm"
                            >
                              <img
                                src={st.icon}
                                alt=""
                                className="w-3.5 h-3.5 object-contain"
                              />
                              {st.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Centered Blend Divider into Next Section */}
        <div className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#412d15]/50 to-transparent mt-20" />
      </div>
    </section>
  );
};
