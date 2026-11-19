import React from 'react';
import { CANDIDATE } from '../data/candidate';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Frosted Glass Capsule & Blurred Border Cushion */}
        <div className="text-center max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-[#130b07]/94 border border-[#3b2315]/80 backdrop-blur-2xl shadow-[0_0_24px_3px_rgba(0,0,0,0.92),0_12px_40px_rgba(0,0,0,0.95),inset_0_0_20px_rgba(0,0,0,0.65)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#432818]/60 border border-[#bb9457]/40 text-[#ffe6a7] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-[#bb9457]" /> Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Formal Education & Advanced Studies
          </h2>
          <p className="text-[#e2d5c5] text-base sm:text-lg leading-relaxed">
            Post-graduate training in Project Delivery and Global Supply Chains, combined with Engineering and ongoing Executive Business Administration.
          </p>
        </div>

        {/* Education Grid with Blurred Border Cushion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CANDIDATE.education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#130b07]/94 border border-[#3a2215]/80 hover:border-[#bb9457]/70 transition-all duration-300 backdrop-blur-2xl shadow-[0_0_28px_3px_rgba(0,0,0,0.92),0_14px_45px_rgba(0,0,0,0.95),inset_0_0_22px_rgba(0,0,0,0.65)] hover:shadow-[0_0_35px_5px_rgba(187,148,87,0.3),0_16px_50px_rgba(0,0,0,0.95)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#bb9457]">
                    {edu.institution}
                  </span>
                  <span
                    className={`text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                      edu.status.includes('Progress')
                        ? 'bg-[#6f1d1b]/40 text-[#ffe6a7] border-[#6f1d1b]'
                        : 'bg-[#432818]/60 text-[#bb9457] border-[#99582a]/50'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                  {edu.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#d6c7b6] font-medium mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#bb9457]" /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#bb9457]" /> {edu.location}
                  </span>
                  {edu.grade && (
                    <span className="text-[#ffe6a7] font-semibold">
                      · {edu.grade}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#e2d5c5] leading-relaxed mb-4">
                  {edu.focus}
                </p>
              </div>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="pt-4 border-t border-[#3a2215]/80">
                  <span className="text-[11px] font-semibold text-[#bb9457] block mb-2">
                    Key Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-[11px] px-2.5 py-0.5 rounded bg-[#25160e] text-[#f7ede2] border border-[#432818]"
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
        <div className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#bb9457]/20 to-transparent mt-20" />
      </div>
    </section>
  );
};
