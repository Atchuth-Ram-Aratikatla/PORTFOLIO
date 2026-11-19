import React from 'react';
import { CANDIDATE } from '../data/candidate';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 bg-transparent">
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
            <GraduationCap className="w-3.5 h-3.5 text-[#e1dcc9]" /> Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Formal Education & Advanced Studies
          </h2>
          <p className="text-[#c5beab] text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Post-graduate training in Project Delivery and Global Supply Chains, combined with Engineering and ongoing Executive Business Administration.
          </p>
        </div>

        {/* Education Grid with Blurred Border Cushion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CANDIDATE.education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#1f150c]/95 border border-[#412d15] hover:border-[#e1dcc9]/70 transition-all duration-300 backdrop-blur-2xl shadow-[0_0_28px_3px_rgba(0,0,0,0.95),0_14px_45px_rgba(0,0,0,0.95),inset_0_0_22px_rgba(0,0,0,0.7)] hover:shadow-[0_0_35px_5px_rgba(65,45,21,0.5),0_16px_50px_rgba(0,0,0,0.95)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#e1dcc9]">
                    {edu.institution}
                  </span>
                  <span
                    className={`text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                      edu.status.includes('Progress')
                        ? 'bg-[#412d15] text-[#e1dcc9] border-[#634724]'
                        : 'bg-[#140d07] text-[#e1dcc9] border-[#412d15]'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                  {edu.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#a89f91] font-medium mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#e1dcc9]" /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#e1dcc9]" /> {edu.location}
                  </span>
                  {edu.grade && (
                    <span className="text-[#e1dcc9] font-semibold">
                      · {edu.grade}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#c5beab] leading-relaxed mb-4">
                  {edu.focus}
                </p>
              </div>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="pt-4 border-t border-[#412d15]">
                  <span className="text-[11px] font-semibold text-[#e1dcc9] block mb-2">
                    Key Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-[11px] px-2.5 py-0.5 rounded bg-[#140d07] text-[#c5beab] border border-[#412d15]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Soft Centered Blend Divider into Next Section */}
        <div className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#412d15]/50 to-transparent mt-20" />
      </div>
    </section>
  );
};
