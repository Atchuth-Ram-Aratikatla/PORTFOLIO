import React from 'react';
import { CANDIDATE } from '../data/candidate';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, Award, ShieldCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Frosted Glass Capsule & Blurred Border Cushion */}
        <div className="text-center max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-[#130b07]/94 border border-[#3b2315]/80 backdrop-blur-2xl shadow-[0_0_24px_3px_rgba(0,0,0,0.92),0_12px_40px_rgba(0,0,0,0.95),inset_0_0_20px_rgba(0,0,0,0.65)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#432818]/60 border border-[#bb9457]/40 text-[#ffe6a7] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-[#bb9457]" /> Career Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Professional Experience & Delivery Leadership
          </h2>
          <p className="text-[#e2d5c5] text-base sm:text-lg leading-relaxed">
            A documented track record across insurance operations, multi-site security logistics, industrial quality control, and architectural project management.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#3a2215] max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
          {CANDIDATE.experience.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0c0705] border-2 border-[#bb9457] group-hover:scale-125 group-hover:bg-[#bb9457] transition-all shadow-md shadow-[#99582a]/30" />

              {/* Card Container with Blurred Border Cushion */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#130b07]/94 border border-[#3a2215]/80 hover:border-[#bb9457]/70 transition-all duration-300 backdrop-blur-2xl shadow-[0_0_28px_3px_rgba(0,0,0,0.92),0_14px_45px_rgba(0,0,0,0.95),inset_0_0_22px_rgba(0,0,0,0.65)] hover:shadow-[0_0_35px_5px_rgba(187,148,87,0.3),0_16px_50px_rgba(0,0,0,0.95)]">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#bb9457]">
                      {exp.organization}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-[#d6c7b6] font-medium">
                    <span className="flex items-center gap-1.5 text-[#ffe6a7] font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#bb9457]" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#bb9457]" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Scope statement */}
                <p className="text-xs sm:text-sm text-[#f5e6d3] font-medium mb-4 italic">
                  {exp.subtitle}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#e2d5c5]">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#bb9457] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 p-3.5 rounded-xl bg-[#0e0704]/90 border border-[#2e190e] backdrop-blur-md shadow-inner">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center p-1">
                      <span className="block text-xs sm:text-sm font-bold text-[#ffe6a7] font-mono">
                        {m.value}
                      </span>
                      <span className="block text-[10px] sm:text-xs text-[#d6c7b6] font-medium mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Competencies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#3a2215]">
                  {exp.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#25160e] text-[#f7ede2] border border-[#432818]"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Centered Blend Divider into Next Section */}
        <div className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#bb9457]/20 to-transparent mt-20" />
      </div>
    </section>
  );
};
