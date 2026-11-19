import React, { useState } from 'react';
import { CANDIDATE, CandidateCaseStudy } from '../data/candidate';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { BookOpen, ArrowUpRight, CheckCircle2, Target, Zap, FileCheck, Layers } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CandidateCaseStudy | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Delivery & Scaling', 'Risk Management', 'Operations & SOPs', 'Quality Assurance'];

  const filteredStudies = CANDIDATE.caseStudies.filter((study) => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Delivery & Scaling') return study.id === 'operational-turnaround';
    if (filterCategory === 'Risk Management') return study.id === 'risk-mitigation';
    if (filterCategory === 'Operations & SOPs') return study.id === 'sop-standardization';
    if (filterCategory === 'Quality Assurance') return study.id === 'quality-control';
    return true;
  });

  return (
    <section id="case-studies" className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Frosted Glass Capsule & Blurred Border Cushion */}
        <div className="text-center max-w-3xl mx-auto mb-12 p-6 sm:p-8 rounded-2xl bg-[#1f150c]/95 border border-[#412d15] backdrop-blur-2xl shadow-[0_0_24px_3px_rgba(0,0,0,0.95),0_12px_40px_rgba(0,0,0,0.95),inset_0_0_20px_rgba(0,0,0,0.7)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f150c] border border-[#412d15] text-[#e1dcc9] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#e1dcc9]" /> Real-World Execution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Strategic Project Case Studies
          </h2>
          <p className="text-[#c5beab] text-base sm:text-lg leading-relaxed">
            Detailed breakdowns of operational turnaround, structured queue governance, multi-carrier remarketing, and industrial quality management.
          </p>
        </div>

        {/* Category Filter using warm luxury segmented tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-block p-1.5 rounded-2xl bg-[#1f150c]/95 border border-[#412d15] backdrop-blur-2xl shadow-[0_0_20px_2px_rgba(0,0,0,0.95),0_8px_25px_rgba(0,0,0,0.95),inset_0_0_15px_rgba(0,0,0,0.7)]">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    filterCategory === cat
                      ? 'bg-[#412d15] text-[#e1dcc9] shadow-md shadow-black'
                      : 'text-[#c5beab] hover:text-[#e1dcc9] hover:bg-[#2a1d11]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid with Blurred Border Cushion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedStudy(study)}
              className="cursor-pointer group relative rounded-3xl overflow-hidden bg-[#1f150c]/95 border border-[#412d15] hover:border-[#e1dcc9]/70 transition-all duration-300 backdrop-blur-2xl shadow-[0_0_28px_3px_rgba(0,0,0,0.95),0_14px_45px_rgba(0,0,0,0.95),inset_0_0_22px_rgba(0,0,0,0.7)] hover:shadow-[0_0_35px_5px_rgba(65,45,21,0.5),0_16px_50px_rgba(0,0,0,0.95)] flex flex-col justify-between p-6 sm:p-8"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#e1dcc9]">
                      {study.organization}
                    </span>
                    <span className="text-[#412d15]">·</span>
                    <span className="text-xs text-[#a89f91] font-medium">{study.period}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#2a1d11] group-hover:bg-[#412d15] group-hover:text-white text-[#e1dcc9] transition-colors shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#e1dcc9] transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm font-semibold text-[#c5beab] mb-4">{study.subtitle}</p>

                {/* Problem Preview */}
                <p className="text-xs sm:text-sm text-[#a89f91] mb-6 line-clamp-3 leading-relaxed">
                  {study.context}
                </p>

                {/* Key Metric Highlights with Inner Blur Container */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-3.5 rounded-xl bg-[#140d07] border border-[#412d15] backdrop-blur-md shadow-inner">
                  {study.results.slice(0, 3).map((res, i) => (
                    <div key={i} className="flex flex-col text-center">
                      <span className="text-xs sm:text-sm font-bold text-[#e1dcc9] tracking-tight">
                        {res.metric}
                      </span>
                      <span className="text-[10px] sm:text-xs text-[#a89f91] line-clamp-1">
                        {res.detail.split(' ')[0]} {res.detail.split(' ')[1]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodologies & Artifacts Pills */}
              <div className="pt-4 border-t border-[#412d15] flex flex-wrap gap-1.5">
                {study.methodologies.map((m) => (
                  <span
                    key={m}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#140d07] text-[#c5beab] border border-[#412d15]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Centered Blend Divider into Next Section */}
        <div className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#412d15]/50 to-transparent mt-20" />
      </div>

      {/* Case Study Deep-Dive Modal using shadcn Dialog */}
      <Dialog open={!!selectedStudy} onOpenChange={(open) => !open && setSelectedStudy(null)}>
        {selectedStudy && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1f150c]/98 border border-[#412d15] text-[#e1dcc9] p-6 sm:p-8 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.98),0_0_35px_rgba(0,0,0,0.95)]">
            <DialogHeader className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e1dcc9] px-2 py-0.5 rounded bg-[#412d15] border border-[#634724]">
                  {selectedStudy.organization}
                </span>
                <span className="text-xs text-[#a89f91] font-medium">{selectedStudy.period}</span>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {selectedStudy.title}
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base text-[#c5beab] font-medium mt-1">
                {selectedStudy.subtitle}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-8 text-sm leading-relaxed">
              {/* Context & Challenge */}
              <div className="p-4 rounded-xl bg-[#140d07] border border-[#412d15]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#e1dcc9] flex items-center gap-1.5 mb-2">
                  <Target className="w-4 h-4 text-[#e1dcc9]" /> Operational Context & Challenge
                </h4>
                <p className="text-[#c5beab] leading-relaxed">{selectedStudy.context}</p>
              </div>

              {/* Solution Architecture */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#e1dcc9] flex items-center gap-1.5 mb-3">
                  <Zap className="w-4 h-4 text-[#e1dcc9]" /> Strategic Solution & Implementation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedStudy.solution.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#140d07] border border-[#412d15] flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#412d15] text-[#e1dcc9] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-[#c5beab] text-xs sm:text-sm leading-normal">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantified Business Results */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#e1dcc9] flex items-center gap-1.5 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#e1dcc9]" /> Measured Business Results
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedStudy.results.map((res, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#140d07] border border-[#412d15] flex flex-col justify-between"
                    >
                      <span className="text-xl sm:text-2xl font-extrabold text-[#e1dcc9] font-mono mb-1">
                        {res.metric}
                      </span>
                      <span className="text-xs text-[#a89f91]">{res.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PM Artifacts & Methodologies */}
              <div className="pt-4 border-t border-[#412d15] flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <h5 className="text-xs font-semibold text-[#a89f91] uppercase tracking-wider mb-2 flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5 text-[#e1dcc9]" /> PM Artifacts Produced
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedStudy.artifacts.map((a) => (
                      <span
                        key={a}
                        className="text-xs px-2.5 py-1 rounded bg-[#140d07] text-[#c5beab] border border-[#412d15]"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-semibold text-[#a89f91] uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-[#e1dcc9]" /> Methodologies
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedStudy.methodologies.map((m) => (
                      <span
                        key={m}
                        className="text-xs px-2.5 py-1 rounded bg-[#412d15] text-[#e1dcc9] border border-[#634724]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};
