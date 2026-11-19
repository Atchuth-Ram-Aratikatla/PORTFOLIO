import React from 'react';
import { CANDIDATE } from '../data/candidate';
import PixelCard from './originkit/PixelCard';
import { ShieldCheck, TrendingUp, Layers, CheckCircle2, DollarSign, Users, Award, Target, Activity } from 'lucide-react';

export const ImpactDashboard: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'premium-volume':
        return <DollarSign className="w-5 h-5 text-[#bb9457]" />;
      case 'process-accuracy':
        return <ShieldCheck className="w-5 h-5 text-[#ffe6a7]" />;
      case 'throughput-scaling':
        return <TrendingUp className="w-5 h-5 text-[#d6b37c]" />;
      case 'accounts-managed':
        return <Users className="w-5 h-5 text-[#bb9457]" />;
      case 'retention-rate':
        return <Target className="w-5 h-5 text-[#ffe6a7]" />;
      case 'revenue-saved':
        return <Award className="w-5 h-5 text-[#bb9457]" />;
      case 'sla-compliance':
        return <CheckCircle2 className="w-5 h-5 text-[#d6b37c]" />;
      case 'operational-breadth':
        return <Layers className="w-5 h-5 text-[#ffe6a7]" />;
      default:
        return <Activity className="w-5 h-5 text-[#bb9457]" />;
    }
  };

  return (
    <section id="impact" className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Frosted Glass Capsule & Blurred Border Cushion */}
        <div className="text-center max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-[#130b07]/94 border border-[#3b2315]/80 backdrop-blur-2xl shadow-[0_0_24px_3px_rgba(0,0,0,0.92),0_12px_40px_rgba(0,0,0,0.95),inset_0_0_20px_rgba(0,0,0,0.65)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#432818]/60 border border-[#bb9457]/40 text-[#ffe6a7] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 text-[#bb9457]" /> Quantitative Proof of Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Executive Performance Metrics
          </h2>
          <p className="text-[#e2d5c5] text-base sm:text-lg leading-relaxed">
            Every metric below is backed by verified operational audits, SLA scorecards, and multi-million-dollar portfolio administration.
          </p>
        </div>

        {/* 8 Impact Metrics Grid using PixelCard canvas shimmer with Blurred Border Cushion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CANDIDATE.impactMetrics.map((metric) => (
            <div
              key={metric.id}
              className="relative h-[240px] rounded-2xl overflow-hidden group shadow-[0_0_22px_2px_rgba(0,0,0,0.92),0_12px_36px_rgba(0,0,0,0.95),inset_0_0_18px_rgba(0,0,0,0.65)] border border-[#382013] transition-all hover:-translate-y-1.5 duration-300 backdrop-blur-xl"
            >
              <PixelCard
                colors={['#432818', '#6f1d1b', '#99582a', '#bb9457', '#ffe6a7']}
                gap={7}
                pixelSize={2.2}
                speed={75}
                backgroundColor="#120905"
                borderColor="#382013"
                borderWidth={1}
                radius={16}
              >
                <div className="relative z-10 w-full h-full p-6 flex flex-col justify-between pointer-events-none">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-[#24150e]/95 border border-[#432818] backdrop-blur-md shadow-md">
                      {getIcon(metric.id)}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#432818]/70 text-[#ffe6a7] border border-[#99582a]/40 shadow-inner">
                      Audit Verified
                    </span>
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#ffe6a7] tracking-tight font-mono mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      {metric.value}
                    </div>
                    <div className="text-sm font-bold text-white tracking-tight mb-2">
                      {metric.label}
                    </div>
                    <p className="text-xs text-[#d6c7b6] line-clamp-2 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </PixelCard>
            </div>
          ))}
        </div>

        {/* Governance & Process Guarantee Note with Blurred Border Cushion */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#130b07]/94 border border-[#432818]/80 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-2xl shadow-[0_0_28px_3px_rgba(0,0,0,0.92),0_14px_45px_rgba(0,0,0,0.95),inset_0_0_22px_rgba(0,0,0,0.65)]">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#432818]/60 border border-[#99582a]/50 text-[#ffe6a7] shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6 text-[#bb9457]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1 tracking-tight">
                3-Tier Renewal Priority Queue Governance & Operational Resets
              </h4>
              <p className="text-xs sm:text-sm text-[#e2d5c5] max-w-2xl leading-relaxed">
                Scaled policy review throughput by +125%–200% via structured manual queue stratification, weekly Sunday reset protocols, and multi-carrier remarketing strategies with zero process lapses.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-[#0c0705] bg-gradient-to-r from-[#bb9457] to-[#ffe6a7] hover:from-[#ffe6a7] hover:to-[#bb9457] rounded-lg transition-all shadow-md shadow-[#99582a]/30 hover:scale-102"
            >
              View Queue Case Study →
            </a>
          </div>
        </div>

        {/* Soft Centered Blend Divider into Next Section */}
        <div className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#bb9457]/20 to-transparent mt-20" />
      </div>
    </section>
  );
};
