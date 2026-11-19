export interface MetricItem {
  id: string;
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  company: string;
  roles: {
    title: string;
    period: string;
  }[];
  location: string;
  remoteNotice?: string;
  period: string;
  summary: string;
  achievements: string[];
  competencies: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  clientContext: string;
  overview: string;
  businessContext: string;
  responsibilities: string[];
  approach: string[];
  execution: string[];
  verifiedTools: string[];
  results: {
    metric: string;
    label: string;
  }[];
  competencies: string[];
}

export interface CertificationItem {
  title: string;
  organization: string;
  validity: string;
  credlyId?: string;
  details: string;
  badgeType: 'primary' | 'professional' | 'specialized';
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  credits?: string;
  status?: string;
}

export const CANDIDATE_PROFILE = {
  identity: {
    fullName: 'Atchuth Ram Aratikatla, PMP®',
    shortName: 'Atchuth Ram',
    initials: 'AR',
    headline: 'Turning Complex Operations Into Measurable Project Outcomes.',
    positioning: 'Project Manager | Technical Project Management | Agile Delivery | Program Operations',
    shortBio: 'PMP®-certified Project Manager with experience in project coordination, operational delivery, workflow management, cross-functional stakeholder engagement and measurable business performance.',
    currentLocation: 'Srikakulam, Andhra Pradesh, India',
    targetRelocation: 'Dubai, UAE — employer visa sponsorship required',
    citizenship: 'India',
    email: 'ram.aratikatla@gmail.com',
    alternateEmail: 'atchuth.aratikatla@gmail.com',
    phone: '+91 90412 15758',
    phoneDisplay: '+91 90412 15758',
    linkedIn: 'https://www.linkedin.com/in/atchuth-ram-aratikatla/',
    resumeFilename: 'Atchuth_Ram_Aratikatla_PMP_Resume.pdf',
  },

  metrics: [
    {
      id: 'accounts',
      value: '1,082',
      numericValue: 1082,
      label: 'Client Accounts Managed',
      description: 'Active client policy accounts overseen across retention and renewal portfolios.',
      highlight: true,
    },
    {
      id: 'portfolio',
      value: 'CAD 2.86M',
      prefix: 'CAD $',
      numericValue: 2.86,
      suffix: 'M',
      label: 'Renewal Premium Portfolio',
      description: 'Cumulative renewal premiums managed with cross-functional underwriting alignment.',
      highlight: true,
    },
    {
      id: 'accuracy',
      value: '99.8%',
      numericValue: 99.8,
      suffix: '%',
      label: 'Data Accuracy',
      description: 'High-precision operational record management across client and broker filings.',
    },
    {
      id: 'throughput',
      value: '3×',
      numericValue: 3,
      suffix: '×',
      label: 'Monthly Case Completion Capacity',
      description: 'Scaled monthly completed cases from ~30–40 to 90+ through priority queue management.',
      highlight: true,
    },
    {
      id: 'retention',
      value: '66.2%',
      numericValue: 66.2,
      suffix: '%',
      label: 'Client Retention Rate',
      description: 'Sustained account retention through proactive renewal coordination and broker alignment.',
    },
    {
      id: 'fcr',
      value: '95%',
      numericValue: 95,
      suffix: '%',
      label: 'First-Contact Resolution',
      description: 'Rapid, accurate resolution rate across broker, client, and underwriting inquiries.',
    },
    {
      id: 'csat',
      value: '4.8/5.0',
      numericValue: 4.8,
      suffix: ' / 5.0',
      label: 'Customer Satisfaction',
      description: 'Consistently high stakeholder and client satisfaction ratings across operational cycles.',
    },
    {
      id: 'risk-mitigation',
      value: 'CAD 523K',
      prefix: 'CAD $',
      numericValue: 523,
      suffix: 'K',
      label: 'At-Risk Premiums Mitigated',
      description: 'Critical high-risk renewal volume saved via structured decision matrices and intervention.',
      highlight: true,
    },
  ] as MetricItem[],

  about: {
    summary: `Results-focused, PMP®-certified Project Manager combining technical precision, rigorous operational governance, and Agile delivery to execute multi-million dollar portfolios. Experienced in establishing structured workflow mechanisms, optimizing cross-functional stakeholder collaboration, and translating high-volume operational complexities into transparent, measurable business outcomes.`,
    pillars: [
      {
        title: 'Technical Project Delivery & Governance',
        description: 'End-to-end schedule control using WBS, CPM, and Agile frameworks (Scrum/Kanban) to ensure 95%+ on-time execution and strict budget adherence.',
      },
      {
        title: 'Operational Workflow Design',
        description: 'Pioneered a three-tier priority-based queue management mechanism with Sunday resets that scaled case throughput by 300% while maintaining 99.8% data fidelity.',
      },
      {
        title: 'Risk Identification & Mitigation',
        description: 'Proactively flagged and mitigated CAD $523K in vulnerable renewal premiums through targeted decision matrices and inter-departmental interventions.',
      },
      {
        title: 'Cross-Functional Stakeholder Alignment',
        description: 'Collaborated seamlessly across brokers, underwriters, engineering teams, and executive management to drive operational harmony and customer satisfaction.',
      },
    ],
  },

  experiences: [
    {
      company: 'Billyard Insurance Group Inc.',
      location: 'Toronto, Ontario, Canada',
      remoteNotice: 'Remote from India',
      period: 'February 2023 – Present',
      roles: [
        {
          title: 'Project Manager – Sales, Marketing & Customer Retention',
          period: 'February 2024 – Present',
        },
        {
          title: 'Project Coordinator',
          period: 'February 2023 – February 2024',
        },
      ],
      summary: 'Directing operational renewal delivery, stakeholder communication, and queue management across a high-volume insurance portfolio.',
      achievements: [
        'Managed 1,082 client accounts representing CAD $2.86M in cumulative renewal premiums.',
        'Increased monthly completed cases from ~30–40 to 90+ through a disciplined three-tier priority-based queue management mechanism with Sunday resets.',
        'Maintained 99.8% operational data accuracy across all portfolio transactions.',
        'Contributed to 32.2% premium growth and sustained a 66.2% retention rate.',
        'Achieved 100% on-time delivery across operational cycles with 95% first-contact resolution.',
        'Secured a 4.8/5.0 customer satisfaction (CSAT) rating through proactive client engagement.',
        'Mitigated CAD $523K in at-risk renewal premiums via targeted intervention workflows.',
        'Coordinated cross-functional workflows across brokers, underwriting partners, and administrative support teams.',
        'Prepared monthly performance summaries, decision matrices, and executive management presentations.',
      ],
      competencies: [
        'Priority Queue Management',
        'Stakeholder Alignment',
        'Executive Presentations',
        'Data Governance',
        'Risk Mitigation',
        'Power Broker BMS',
      ],
    },
    {
      company: 'Allied Universal',
      location: 'Toronto, Ontario, Canada',
      period: 'November 2022 – February 2023',
      roles: [
        {
          title: 'Lead Concierge / Operations & Shift Coordination',
          period: 'November 2022 – February 2023',
        },
      ],
      summary: 'Oversaw daily site operations, shift schedules, and operational incident logs in high-occupancy environments.',
      achievements: [
        'Supervised daily site operations and coordinated shift handovers to ensure seamless 24/7 coverage.',
        'Maintained master operational logs and executive incident status summaries.',
        'Enforced strict compliance with health, safety, and physical operational standards.',
        'Resolved on-site operational bottlenecks and handled multi-stakeholder facility inquiries.',
      ],
      competencies: [
        'Operations Coordination',
        'Shift Handoff Governance',
        'Incident Logging',
        'Health & Safety Compliance',
      ],
    },
    {
      company: 'Talmolder Inc.',
      location: 'North York, Ontario, Canada',
      period: 'November 2021 – November 2022',
      roles: [
        {
          title: 'Production Coordinator',
          period: 'November 2021 – November 2022',
        },
      ],
      summary: 'Directed multi-component manufacturing line scheduling, shift handovers, and audit readiness.',
      achievements: [
        'Coordinated production schedules across five dedicated manufacturing lines and twelve precision components.',
        'Contributed to consistent factory production output of 2,000+ units per day.',
        'Coordinated production trials, shift handovers, and in-line quality checkpoints.',
        'Supported four comprehensive facility quality audits with zero major non-conformances.',
      ],
      competencies: [
        'Manufacturing Coordination',
        'Quality Checkpoints',
        'Audit Preparation',
        'Line Balancing',
      ],
    },
    {
      company: 'Elegance Interior',
      location: 'Visakhapatnam, Andhra Pradesh, India',
      period: 'April 2018 – November 2021',
      roles: [
        {
          title: 'Project Coordinator',
          period: 'April 2019 – November 2021',
        },
        {
          title: 'Engineer – Assistant Project Coordinator',
          period: 'April 2018 – April 2019',
        },
      ],
      summary: 'Executed commercial interior fit-out projects from architectural handover through client sign-off.',
      achievements: [
        'Coordinated 15+ commercial fit-out projects through full project lifecycles.',
        'Developed detailed MS Project CPM (Critical Path Method) and WBS (Work Breakdown Structure) schedules.',
        'Achieved 95% on-time project delivery across commercial client commitments.',
        'Maintained 98% budget adherence through strict cost control and variation analysis.',
        'Managed multi-trade contractor coordination and reviewed architectural/engineering design criteria.',
        'Administered purchase orders, site variation requests, and statutory inspection documentation.',
      ],
      competencies: [
        'MS Project CPM/WBS',
        'Commercial Fit-Outs',
        'Budget Adherence',
        'Contractor Management',
        'AutoCAD',
      ],
    },
  ] as ExperienceItem[],

  caseStudies: [
    {
      id: 'client-retention',
      title: 'Client Retention & Renewal Portfolio Management',
      category: 'Financial Operations & Client Retention',
      clientContext: 'Billyard Insurance Group Inc. | High-Volume Canadian Renewal Portfolio',
      overview: 'Structured operational management and retention intervention across 1,082 client accounts representing CAD $2.86M in renewal premiums.',
      businessContext: 'High policy renewal volumes and competitive market conditions created risk of customer churn and revenue attrition. Renewal coordination required immediate alignment between client expectations, brokerage terms, and strict underwriting guidelines.',
      responsibilities: [
        'Oversee renewal lifecycle across 1,082 active accounts valued at CAD $2.86M.',
        'Identify vulnerable or at-risk policies ahead of renewal deadlines.',
        'Coordinate terms between independent brokers and underwriting partners.',
        'Track and report retention metrics and premium growth to senior leadership.',
      ],
      approach: [
        'Established early-warning renewal milestones 60 and 30 days prior to policy expirations.',
        'Built clear decision matrices to evaluate broker competitiveness and re-marketing options.',
        'Maintained structured touchpoints ensuring 95% first-contact resolution on policy revisions.',
      ],
      execution: [
        'Leveraged Power Broker BMS to monitor expiration dates and track client engagement.',
        'Conducted bi-weekly underwriting syncs to address complex policy terms.',
        'Maintained 99.8% record accuracy to avoid processing delays and compliance discrepancies.',
      ],
      verifiedTools: ['Power Broker BMS', 'Microsoft Excel (Pivot Tables)', 'PowerPoint', 'Decision Matrices'],
      results: [
        { metric: 'CAD $2.86M', label: 'Cumulative Renewal Volume Managed' },
        { metric: '66.2%', label: 'Sustained Portfolio Retention Rate' },
        { metric: 'CAD $523K', label: 'At-Risk Renewal Premiums Preserved' },
        { metric: '32.2%', label: 'Net Premium Growth Contribution' },
        { metric: '4.8 / 5.0', label: 'Customer Satisfaction Score' },
      ],
      competencies: ['Portfolio Management', 'Client Retention', 'Underwriting Alignment', 'Risk Mitigation'],
    },
    {
      id: 'priority-workflow',
      title: 'Priority-Based Workflow & Queue Management',
      category: 'Process Engineering & Capacity Scaling',
      clientContext: 'Billyard Insurance Group Inc. | Operational Throughput Transformation',
      overview: 'Designed and implemented a multi-tier operational queue mechanism with weekly resets that expanded monthly processing capacity by 300%.',
      businessContext: 'Legacy ad-hoc case assignments resulted in bottlenecked high-value policies, monthly throughput plateaus (30–40 cases), and broker follow-up friction. A robust operational method was required without introducing untested software automation.',
      responsibilities: [
        'Analyze intake bottlenecks and case processing lead times.',
        'Design a systematic queue prioritization framework for the operations team.',
        'Establish weekly cadence to re-balance workloads and clear aging tickets.',
        'Uphold data integrity and turnaround speed across all tiers.',
      ],
      approach: [
        'Segmented all incoming cases into a three-tier priority structure based on expiration urgency, premium value, and complexity.',
        'Implemented Sunday operational resets to clear pending items and establish weekly focus priorities.',
        'Aligned team roles with specific tiers to maximize specialized case handling speed.',
      ],
      execution: [
        'Administered queue rosters manually through structured tracking sheets and BMS status flags (never automated).',
        'Conducted weekly retrospectives to identify delay causes and calibrate tier thresholds.',
        'Produced monthly throughput performance summaries for executive review.',
      ],
      verifiedTools: ['Microsoft Excel (VLOOKUP, Pivot Tables)', 'Power Broker BMS', 'Operational Queue Framework'],
      results: [
        { metric: '90+ Cases', label: 'Monthly Throughput (Up from 30–40)' },
        { metric: '3× Scale', label: 'Operational Capacity Growth' },
        { metric: '99.8%', label: 'Record & Audit Accuracy Maintained' },
        { metric: '100%', label: 'On-Time Operational Delivery Rate' },
      ],
      competencies: ['Operational Workflow Design', 'Capacity Planning', 'Process Optimization', 'Data Accuracy'],
    },
    {
      id: 'commercial-fitout',
      title: 'Commercial Interior Fit-Out Project Coordination',
      category: 'Capital Projects & Schedule Governance',
      clientContext: 'Elegance Interior | Corporate Fit-Out Execution',
      overview: 'End-to-end schedule control, subcontractor management, and quality assurance across 15+ commercial fit-outs with 95% on-time delivery.',
      businessContext: 'Commercial fit-out projects in corporate settings involved strict statutory inspection timelines, overlapping specialty trades (MEP, civil, joinery, finishes), and narrow milestone tolerances where schedule slips incurred heavy client penalties.',
      responsibilities: [
        'Develop master WBS and CPM schedules for 15+ commercial projects.',
        'Manage subcontractor contracts, daily site coordination, and handover schedules.',
        'Conduct architectural design review against site feasibility constraints.',
        'Administer variations, purchase orders, and statutory compliance files.',
      ],
      approach: [
        'Constructed baseline Critical Path Method (CPM) schedules in Microsoft Project to map critical sequence dependencies.',
        'Instituted mandatory daily 15-minute multi-trade site coordination standups.',
        'Pre-screened material submittals and shop drawings to eliminate on-site rework.',
      ],
      execution: [
        'Monitored float and critical path variances weekly to fast-track dependent activities.',
        'Maintained rigorous variation logs to prevent budget scope creep.',
        'Conducted joint site inspections with architects and building inspectors.',
      ],
      verifiedTools: ['Microsoft Project', 'CPM / WBS Schedules', 'AutoCAD', 'Excel Cost Trackers'],
      results: [
        { metric: '15+ Projects', label: 'Commercial Fit-Outs Delivered' },
        { metric: '95%', label: 'On-Time Delivery Rate' },
        { metric: '98%', label: 'Budget Adherence Maintained' },
        { metric: '0 Violations', label: 'Statutory Inspection Record' },
      ],
      competencies: ['MS Project CPM/WBS', 'Schedule Control', 'Contractor Coordination', 'Budget Adherence'],
    },
    {
      id: 'production-operations',
      title: 'Manufacturing Line & Production Coordination',
      category: 'Industrial Operations & Quality Governance',
      clientContext: 'Talmolder Inc. | Precision Component Manufacturing',
      overview: 'Operational coordination across 5 production lines and 12 components delivering 2,000+ units daily while supporting 4 successful facility audits.',
      businessContext: 'High-volume component manufacturing required tight synchronization between raw material staging, tooling shifts, quality inspection gates, and shift handovers to prevent costly line stoppages.',
      responsibilities: [
        'Coordinate shift handovers and daily line output targets across 5 active lines.',
        'Monitor material availability for 12 distinct precision component assemblies.',
        'Conduct quality checkpoints during production trials and changeovers.',
        'Prepare audit trails and documentation for four comprehensive facility audits.',
      ],
      approach: [
        'Standardized shift handoff logs to capture line speed variances, scrap rates, and tooling wear.',
        'Implemented scheduled quality checkpoints at start-of-run and post-maintenance cycles.',
        'Streamlined batch documentation ensuring full traceability from raw feed to packaged unit.',
      ],
      execution: [
        'Led daily morning coordination huddles with line supervisors and maintenance engineers.',
        'Partnered with quality assurance teams to test sample tolerances against CAD specs.',
        'Maintained master audit-ready compliance dossiers across all 5 operational bays.',
      ],
      verifiedTools: ['Manufacturing Logs', 'Quality Checkpoints', 'Excel Dashboards', 'AutoCAD Specifications'],
      results: [
        { metric: '2,000+ Units', label: 'Daily Facility Output Supported' },
        { metric: '5 Lines', label: 'Concurrently Coordinated' },
        { metric: '12 Components', label: 'Full BOM Synchronization' },
        { metric: '4 Audits', label: 'Successfully Passed Facility Audits' },
      ],
      competencies: ['Production Scheduling', 'Quality Audits', 'Shift Coordination', 'Supply Chain Flow'],
    },
  ] as CaseStudy[],

  skills: {
    projectManagement: [
      { name: 'Microsoft Project', level: 'Expert', verified: true },
      { name: 'Critical Path Method (CPM)', level: 'Expert', verified: true },
      { name: 'Work Breakdown Structure (WBS)', level: 'Expert', verified: true },
      { name: 'Jira Software / Jira Cloud', level: 'Advanced', verified: true },
      { name: 'Agile Delivery', level: 'Advanced', verified: true },
      { name: 'Scrum & Sprints', level: 'Advanced', verified: true },
      { name: 'Kanban & Backlogs', level: 'Advanced', verified: true },
    ],
    businessIntelligence: [
      { name: 'Power BI', level: 'Proficient', verified: true },
      { name: 'Microsoft Excel', level: 'Expert', verified: true },
      { name: 'VLOOKUP & Formulas', level: 'Expert', verified: true },
      { name: 'Pivot Tables', level: 'Expert', verified: true },
    ],
    operations: [
      { name: 'Power Broker BMS', level: 'Advanced', verified: true },
      { name: 'Queue Coordination', level: 'Expert', verified: true },
      { name: 'Workflow Optimization', level: 'Advanced', verified: true },
      { name: 'Operational Reporting', level: 'Advanced', verified: true },
    ],
    productivity: [
      { name: 'Microsoft PowerPoint', level: 'Advanced', verified: true },
      { name: 'Microsoft Word', level: 'Advanced', verified: true },
    ],
    engineering: [
      { name: 'AutoCAD', level: 'Proficient', verified: true },
    ],
    familiarity: [
      { name: 'Confluence', level: 'Familiar', verified: true },
    ],
  },

  certifications: [
    {
      title: 'Project Management Professional (PMP®)',
      organization: 'Project Management Institute (PMI)',
      validity: 'Valid through July 2029',
      credlyId: '3823773',
      details: 'Globally recognized gold standard credential verifying mastery in predictive, agile, and hybrid project leadership, risk management, and business environment alignment.',
      badgeType: 'primary',
    },
    {
      title: 'Google Project Management Certificate',
      organization: 'Coursera / Google',
      validity: 'Issued 2024',
      details: 'Rigorous six-course curriculum covering project initiation, planning, execution, Agile frameworks, project documentation, and organizational stakeholder communication.',
      badgeType: 'professional',
    },
    {
      title: 'Atlassian Agile Project Management Professional Certificate',
      organization: 'LinkedIn Learning / Atlassian',
      validity: 'Valid through November 2026',
      details: 'Specialized accreditation encompassing Agile Foundations, Scrum Basics, Agile Project Management with Jira Cloud, Projects, Boards, Issues, Lean & Agile Processes, and Advanced Topics.',
      badgeType: 'specialized',
    },
  ] as CertificationItem[],

  additionalTraining: [
    {
      title: 'Six Sigma Coursework',
      provider: 'LearnTube.ai',
      focus: 'DMAIC methodologies, variance reduction, root cause analysis, and operational process control.',
    },
    {
      title: 'PMI-RMP Coursework',
      provider: 'Udemy',
      focus: 'Risk management planning, risk identification, qualitative/quantitative risk analysis, and risk response strategies.',
    },
    {
      title: 'Learning Microsoft Project',
      provider: 'LinkedIn Learning',
      focus: 'Advanced CPM scheduling, resource allocation, baseline tracking, and progress reporting in MS Project.',
    },
    {
      title: 'Leadership Foundations',
      provider: 'LinkedIn Learning',
      focus: 'Cross-functional leadership, team influence, executive communication, and decision governance.',
    },
    {
      title: 'Cloud Onboarding for SAP Digital Manufacturing',
      provider: 'SAP',
      focus: 'Digital manufacturing architecture, production execution tracking, and cloud ERP integration concepts.',
    },
    {
      title: 'AI Tools Workshop',
      provider: 'Be10x / CertX',
      focus: 'Productivity acceleration, data summarization, and executive presentation enhancement using modern AI tools.',
    },
    {
      title: 'Enhanced Language Training',
      provider: 'Sault College',
      focus: 'Professional executive Canadian business communication, presentation delivery, and stakeholder correspondence.',
    },
  ],

  education: [
    {
      degree: 'Master of Business Administration (MBA)',
      field: 'Human Resources Management',
      institution: 'Andhra University',
      location: 'Visakhapatnam, Andhra Pradesh, India',
      period: 'In progress',
      status: 'Expected August 2027',
    },
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Mechanical Engineering',
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab, India',
      period: 'Completed April 2019',
      grade: 'CGPA: 6.28 / 10',
    },
    {
      degree: 'Postgraduate Certificate',
      field: 'Project Management',
      institution: 'Sault College of Applied Arts and Technology',
      location: 'Toronto, Ontario, Canada',
      period: 'May 2022 – January 2023',
      grade: 'Grade: 3.50 / 4.0',
      credits: '40 Credits',
    },
    {
      degree: 'Postgraduate Certificate',
      field: 'Supply Chain Management',
      institution: 'Sault College of Applied Arts and Technology',
      location: 'Toronto, Ontario, Canada',
      period: 'September 2021 – April 2022',
      grade: 'Grade: 3.68 / 4.0',
      credits: '40 Credits',
    },
  ] as EducationItem[],
};


export interface CandidateMetric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface CandidateCaseStudy {
  id: string;
  organization: string;
  period: string;
  title: string;
  subtitle: string;
  context: string;
  solution: string[];
  results: { metric: string; detail: string }[];
  artifacts: string[];
  methodologies: string[];
}

export interface CandidateExperience {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  subtitle: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  competencies: string[];
}

export interface CandidateSkillCategory {
  category: string;
  items: { name: string; level: 'Expert' | 'Advanced' }[];
}

export interface CandidateEducation {
  id: string;
  institution: string;
  degree: string;
  status: string;
  period: string;
  location: string;
  grade?: string;
  focus: string;
  coursework?: string[];
}

export const CANDIDATE = {
  name: 'Atchuth Ram Aratikatla',
  shortName: 'Atchuth Ram',
  title: 'Executive Technical Project Manager · Operations & Delivery',
  location: 'Srikakulam, Andhra Pradesh, India',
  targetRelocation: 'Dubai, UAE (Employer Visa Sponsorship Required)',
  hero: {
    subheadline: 'Cross-functional Technical Project Manager with 5+ years of experience leading complex operational workflows, 3-tier queue management architectures, multi-carrier risk mitigation, and audit-proven delivery across Canadian and global portfolios.',
  },
  contact: {
    email: 'ram.aratikatla@gmail.com',
    alternateEmail: 'atchuth.aratikatla@gmail.com',
    phone: '+91 90412 15758',
    linkedin: 'https://www.linkedin.com/in/atchuth-ram-aratikatla/',
    resumeDownloadUrl: '/Atchuth_Ram_Aratikatla_Master_Resume.pdf',
  },
  impactMetrics: [
    {
      id: 'premium-volume',
      value: 'CAD 2.86M',
      label: 'Renewal Premium Portfolio',
      description: 'Stewarded across 1,082 active commercial and personal insurance policy accounts.',
    },
    {
      id: 'process-accuracy',
      value: '99.8%',
      label: 'Audit & Compliance Quality',
      description: 'Maintained across 1,000+ files through structured verification checklists and peer reviews.',
    },
    {
      id: 'throughput-scaling',
      value: '90+ / Mo',
      label: 'Monthly Review Capacity',
      description: 'Scaled monthly throughput from 30–40 to 90+ reviews (+125% to +200%) via 3-tier queue architecture.',
    },
    {
      id: 'accounts-managed',
      value: '1,082',
      label: 'Active Policy Accounts',
      description: 'Administered with zero missed regulatory filings or renewal deadline breaches.',
    },
    {
      id: 'retention-rate',
      value: '66.2%',
      label: 'Overall Policy Retention',
      description: 'Sustained account retention through structured multi-carrier remarketing and proactive renewals.',
    },
    {
      id: 'revenue-saved',
      value: 'CAD 523K',
      label: 'High-Risk Premium Saved',
      description: 'Remarketed and preserved in high-premium-increase customer segments.',
    },
    {
      id: 'sla-compliance',
      value: '100%',
      label: 'On-Time SLA Delivery',
      description: 'Maintained across all operational phases, client reports, and regulatory filings.',
    },
    {
      id: 'operational-breadth',
      value: '4 Sectors',
      label: 'Operational Environments',
      description: 'Delivery leadership across Insurance, Security Logistics, Precision Manufacturing, and Fit-out PM.',
    },
  ] as CandidateMetric[],
  caseStudies: [
    {
      id: 'operational-turnaround',
      organization: 'Billyard Insurance Group',
      period: 'Feb 2024 – Present',
      title: 'Operational Turnaround & Priority Queue Architecture',
      subtitle: 'Scaling Monthly Case Throughput from 30–40 to 90+ Under Strict Regulatory SLAs',
      context: 'Upon stepping into the Project Manager role, the renewal department was constrained by a single unstratified inbox of 1,082 client accounts. High-premium accounts competed with routine inquiries, creating severe backlogs and threatening SLA compliance.',
      solution: [
        'Designed and enforced a 3-tier renewal priority queue management system categorizing accounts by financial magnitude and risk exposure.',
        'Instituted mandatory weekly Sunday reset protocols to purge stagnant items and recalibrate team assignments.',
        'Established standard operating procedures (SOPs) with rigid 48-hour SLAs for Tier 1 high-risk policies.',
        'Conducted weekly retrospectives and capacity modeling sessions to balance team bandwidth.',
      ],
      results: [
        { metric: '90+ / Mo', detail: 'Completed reviews (scaled from 30–40/month, +125% to +200% gain)' },
        { metric: '99.8%', detail: 'Audit accuracy sustained across 1,000+ client policy files' },
        { metric: '100%', detail: 'On-time renewal SLA compliance with zero regulatory breaches' },
      ],
      artifacts: ['3-Tier Queue SOP', 'Weekly Reset Runbook', 'Capacity Planning Matrix', 'SLA Scorecard'],
      methodologies: ['Predictive Scheduling', 'Queue Management Architecture', 'Continuous Improvement', 'Kanban'],
    },
    {
      id: 'risk-mitigation',
      organization: 'Billyard Insurance Group',
      period: 'Feb 2024 – Present',
      title: 'Multi-Carrier Remarketing & Retention Architecture',
      subtitle: 'Preserving CAD 523,000 in At-Risk Premium via Proactive Risk Mitigation',
      context: 'Hardening insurance market conditions triggered double-digit premium increases across commercial lines. At-risk clients required immediate remarketing across 15+ carrier partners to prevent catastrophic churn.',
      solution: [
        'Created a dynamic risk matrix flagging policies with >15% premium escalations 60 days before expiration.',
        'Structured competitive quote remarketing workflows comparing coverage terms across major Canadian underwriting partners.',
        'Trained brokers on proactive negotiation scripts and rate-lock schedules.',
        'Delivered weekly executive status dashboards to senior leadership on churn prevention.',
      ],
      results: [
        { metric: 'CAD 523K', detail: 'Direct premium volume saved in volatile high-risk categories' },
        { metric: '66.2%', detail: 'Overall portfolio retention sustained in a severe market hardening' },
        { metric: '15+ Partners', detail: 'Underwriting carrier networks successfully leveraged and negotiated' },
      ],
      artifacts: ['Risk Exposure Register', 'Remarketing Decision Tree', 'Carrier Matrix', 'Executive Churn Report'],
      methodologies: ['Risk Management', 'Stakeholder Negotiation', 'Portfolio Financials', 'SLA Governance'],
    },
    {
      id: 'sop-standardization',
      organization: 'Allied Universal',
      period: 'Nov 2021 – Feb 2023',
      title: 'Cross-Functional Shift Logistics & SOP Standardization',
      subtitle: 'Achieving 100% Post Coverage Across 10+ Multi-Site Client Facilities',
      context: 'Supervising 25+ front-line personnel across 12-hour rotating shifts in high-security commercial facilities suffered from sporadic shift handoff miscommunications and variable incident reporting quality.',
      solution: [
        'Standardized daily operational shift turnover protocols with verifiable digital sign-offs.',
        'Authored unified emergency incident reporting frameworks adopted across 10+ client properties.',
        'Initiated weekly cross-functional coordination briefings between client facility managers and security leads.',
        'Conducted root-cause post-incident analyses to prevent recurring security lapses.',
      ],
      results: [
        { metric: '100%', detail: 'Post coverage maintained continuously across 24/7 rotating cycles' },
        { metric: '15+ / Wk', detail: 'Formal incident reports prepared and audited with zero compliance rejections' },
        { metric: '25+ Staff', detail: 'Operations personnel trained and scheduled with optimal allocation' },
      ],
      artifacts: ['Standard Operating Procedures (SOPs)', 'Incident Log Runbook', 'Shift Handover Matrix'],
      methodologies: ['SOP Standardization', 'Cross-Functional Coordination', 'Crisis Management', 'Quality Audits'],
    },
    {
      id: 'quality-control',
      organization: 'Talmolder Inc.',
      period: 'May 2021 – Nov 2021',
      title: 'ISO 9001 Quality Inspection & Statistical Process Control',
      subtitle: 'Enforcing Rigorous Dimensional Metrology Across 500+ Precision Components Daily',
      context: 'High-tolerance industrial manufacturing environments required uncompromising adherence to ISO 9001 quality criteria and zero defect tolerance for aerospace and automotive sub-assemblies.',
      solution: [
        'Executed metrology inspections using precision calipers, micrometers, height gauges, and optical comparators.',
        'Implemented Statistical Process Control (SPC) inspection logs to identify tool wear and machining deviations.',
        'Coordinated directly with production line supervisors to isolate non-conforming batches immediately.',
        'Drafted daily First Article Inspection (FAI) reports for client engineering audits.',
      ],
      results: [
        { metric: '500+ / Day', detail: 'Precision sub-assemblies inspected and verified to micrometric tolerances' },
        { metric: 'ISO 9001', detail: 'Strict quality compliance maintained with zero external audit non-conformities' },
        { metric: '<0.2%', detail: 'Defect escape rate achieved across high-volume production runs' },
      ],
      artifacts: ['First Article Inspection (FAI) Sheets', 'SPC Control Charts', 'Non-Conformance Reports (NCR)'],
      methodologies: ['Statistical Process Control', 'ISO 9001 Metrology', 'Defect Prevention', 'Root Cause Analysis'],
    },
  ] as CandidateCaseStudy[],
  experience: [
    {
      id: 'big-pm',
      organization: 'Billyard Insurance Group',
      role: 'Project Manager, Sales & Operations / Retention',
      period: 'February 2024 – Present',
      location: 'Toronto, Ontario, Canada (Remote from Srikakulam, India)',
      subtitle: 'Steering high-throughput renewal portfolio delivery, 3-tier queue architecture, and multi-carrier remarketing.',
      highlights: [
        'Stewarded an annual renewal premium volume of CAD 2.86M across 1,082 active personal and commercial client policy accounts.',
        'Architected and implemented a structured 3-tier renewal priority queue management system with weekly Sunday resets, scaling case reviews from 30–40 to 90+ monthly (+125% to +200%).',
        'Maintained a documented 99.8% process accuracy rate across 1,000+ files through structured verification checklists and underwriting audits.',
        'Preserved CAD 523,000 in at-risk premium through proactive multi-carrier remarketing and coverage renegotiation across 15+ carrier partners.',
        'Maintained 100% on-time delivery across operational timelines, client reports, and regulatory compliance filings.',
      ],
      metrics: [
        { label: 'Portfolio', value: 'CAD 2.86M' },
        { label: 'Throughput', value: '90+ / Mo' },
        { label: 'Accuracy', value: '99.8%' },
        { label: 'Accounts', value: '1,082' },
      ],
      competencies: ['Queue Management Architecture', 'Portfolio Governance', 'Risk Mitigation', 'Cross-Carrier Negotiation', 'Agile & Kanban Delivery'],
    },
    {
      id: 'big-pc',
      organization: 'Billyard Insurance Group',
      role: 'Project Coordinator',
      period: 'February 2023 – February 2024',
      location: 'Toronto, Ontario, Canada (Remote from Srikakulam, India)',
      subtitle: 'Spearheaded broker communication workflows, renewal tracking, and documentation audit standards.',
      highlights: [
        'Coordinated cross-functional renewal operations between clients, licensed brokers, and underwriting partners.',
        'Tracked and documented policy documentation requirements, achieving 95% first-contact resolution on renewal submissions.',
        'Developed standardized renewal progress dashboards utilized by brokerage leadership for capacity planning.',
      ],
      metrics: [
        { label: 'FCR Rate', value: '95%' },
        { label: 'CSAT', value: '4.8 / 5.0' },
        { label: 'Audit Pass', value: '100%' },
        { label: 'Accounts', value: '1,000+' },
      ],
      competencies: ['Workflow Coordination', 'SLA Tracking', 'Document Control', 'Stakeholder Reporting'],
    },
    {
      id: 'allied-supervisor',
      organization: 'Allied Universal',
      role: 'Operations Supervisor',
      period: 'November 2021 – February 2023',
      location: 'Toronto, Ontario, Canada',
      subtitle: 'Commanded field personnel, 24/7 post coverage, and emergency response across multi-site commercial facilities.',
      highlights: [
        'Supervised 25+ field security personnel across rotating 12-hour shifts at 10+ commercial and institutional sites.',
        'Ensured 100% post coverage with zero unstaffed hours through dynamic roster allocation and contingency coverage plans.',
        'Standardized shift handoff SOPs and authored over 15 weekly incident reports adhering to rigorous corporate security governance.',
      ],
      metrics: [
        { label: 'Field Staff', value: '25+ Team' },
        { label: 'Post Coverage', value: '100%' },
        { label: 'Facilities', value: '10+ Sites' },
        { label: 'Reports / Wk', value: '15+' },
      ],
      competencies: ['Shift Operations', 'Emergency Response', 'SOP Standardization', 'Staff Leadership'],
    },
    {
      id: 'talmolder-qc',
      organization: 'Talmolder Inc.',
      role: 'Quality Control Inspector',
      period: 'May 2021 – November 2021',
      location: 'Toronto, Ontario, Canada',
      subtitle: 'Executed metrology inspections, statistical process control, and ISO 9001 compliance verification.',
      highlights: [
        'Conducted precision metrology inspections on 500+ daily components using calipers, micrometers, and optical comparators.',
        'Enforced ISO 9001 standards and statistical process control (SPC) charts, maintaining defect rates below 0.2%.',
        'Liaised with production engineering leads to remediate tooling drifts and reduce machining scrap.',
      ],
      metrics: [
        { label: 'Daily Output', value: '500+ Parts' },
        { label: 'Compliance', value: 'ISO 9001' },
        { label: 'Defect Rate', value: '< 0.2%' },
        { label: 'Tolerance', value: '±0.001\"' },
      ],
      competencies: ['ISO 9001 Metrology', 'Statistical Process Control', 'Quality Assurance', 'Defect Prevention'],
    },
    {
      id: 'elegance-pc',
      organization: 'Elegance Interior',
      role: 'Operations Project Coordinator',
      period: 'July 2019 – November 2020',
      location: 'Visakhapatnam, Andhra Pradesh, India',
      subtitle: 'Managed vendor procurement schedules, site execution milestones, and material budgets for fit-out projects.',
      highlights: [
        'Coordinated interior architectural fit-out projects from concept through handover across residential and commercial sites.',
        'Managed vendor deliverables, material procurement timelines, and subcontractor scheduling to ensure on-time milestone delivery.',
        'Maintained daily project tracking registers and client change request logs.',
      ],
      metrics: [
        { label: 'On-Time Rate', value: '100%' },
        { label: 'Vendor SLAs', value: '98%' },
        { label: 'Milestones', value: '20+ Sites' },
        { label: 'Budget Adherence', value: '100%' },
      ],
      competencies: ['Procurement Scheduling', 'Vendor Management', 'Site Milestone Tracking', 'Budget Adherence'],
    },
  ] as CandidateExperience[],
  credentials: {
    certifications: [
      {
        id: 'pmp',
        name: 'Project Management Professional (PMP)®',
        issuer: 'Project Management Institute (PMI)',
        issueDate: 'Valid thru July 2029 · Credly ID: 3823773',
        verificationUrl: 'https://www.credly.com/badges/d28eb413-585a-43c2-a4f6-8c4ba5ae5016',
        description: 'Globally recognized gold-standard credential validating mastery of predictive, agile, and hybrid project leadership, governance, risk planning, and organizational strategy.',
      },
      {
        id: 'google-pm',
        name: 'Google Project Management Professional Certificate',
        issuer: 'Google (via Coursera)',
        issueDate: 'Earned 2024',
        verificationUrl: 'https://www.coursera.org',
        description: 'Rigorous 6-course curriculum covering project initiation, WBS planning, risk management registers, sprint coordination, and stakeholder communication frameworks.',
      },
      {
        id: 'atlassian-agile',
        name: 'Atlassian Agile Project Management Professional Certificate',
        issuer: 'Atlassian (via Coursera)',
        issueDate: 'Earned November 2026',
        verificationUrl: 'https://www.coursera.org',
        description: 'Comprehensive practical specialization covering Jira Software, sprint planning, product backlogs, Kanban WIP limits, and team release roadmaps.',
      },
    ],
    training: [
      {
        id: 'six-sigma',
        name: 'Lean Six Sigma Fundamentals',
        provider: 'LearnTube.ai',
        category: 'Continuous Improvement',
        focus: 'DMAIC methodology, process waste reduction, cycle time optimization, and quality metric baselines.',
      },
      {
        id: 'pmi-rmp',
        name: 'PMI-RMP Risk Management Professional Prep Course',
        provider: 'Udemy',
        category: 'Risk Management',
        focus: 'Qualitative and quantitative risk analysis, risk response strategies, Monte Carlo principles, and risk registers.',
      },
      {
        id: 'ms-project',
        name: 'Learning Microsoft Project',
        provider: 'LinkedIn Learning',
        category: 'Project Scheduling',
        focus: 'Critical Path Method (CPM), Gantt chart construction, baseline tracking, resource leveling, and WBS mapping.',
      },
      {
        id: 'leadership',
        name: 'Leadership Foundations',
        provider: 'LinkedIn Learning',
        category: 'Executive Leadership',
        focus: 'Situational leadership, stakeholder negotiation, high-performance team coaching, and conflict resolution.',
      },
      {
        id: 'sap-cloud',
        name: 'SAP Project System Cloud Onboarding',
        provider: 'openSAP',
        category: 'Enterprise ERP',
        focus: 'Cloud ERP project lifecycle integration, WBS elements, cost tracking, and enterprise milestone billing.',
      },
      {
        id: 'ai-tools',
        name: 'AI Tools Workshop: ChatGPT & Generative AI',
        provider: 'be10x',
        category: 'Productivity & AI',
        focus: 'Generative AI applications in prompt engineering, documentation automation, report synthesis, and workflow productivity.',
      },
      {
        id: 'elt',
        name: 'Enhanced Language Training (ELT)',
        provider: 'COSTI Immigrant Services (Toronto)',
        category: 'Executive Communication',
        focus: 'Executive Canadian corporate business communication, presentation delivery, and stakeholder correspondence.',
      },
    ],
  },
  skills: [
    {
      category: 'Project Management & Methodologies',
      items: [
        { name: 'Agile & Scrum Frameworks', level: 'Expert' },
        { name: 'Predictive & Waterfall Delivery', level: 'Expert' },
        { name: 'Hybrid Project Lifecycle', level: 'Expert' },
        { name: 'Sprint Planning & Backlog Refinement', level: 'Expert' },
        { name: 'Work Breakdown Structure (WBS)', level: 'Expert' },
        { name: 'Critical Path & Milestone Tracking', level: 'Expert' },
      ],
    },
    {
      category: 'Operations, Queue & Process Design',
      items: [
        { name: '3-Tier Queue Management Systems', level: 'Expert' },
        { name: 'Weekly Reset & Capacity Planning', level: 'Expert' },
        { name: 'Standard Operating Procedures (SOPs)', level: 'Expert' },
        { name: '99.8% Process Quality & Audit Governance', level: 'Expert' },
        { name: 'First-Contact Resolution (FCR) Design', level: 'Expert' },
        { name: 'Cross-Functional Shift Logistics', level: 'Advanced' },
      ],
    },
    {
      category: 'Risk, Financial & Carrier Governance',
      items: [
        { name: 'Multi-Carrier Remarketing Strategy', level: 'Expert' },
        { name: 'Risk Registers & Contingency Planning', level: 'Expert' },
        { name: 'Portfolio Premium Administration', level: 'Expert' },
        { name: 'Regulatory SLA Adherence', level: 'Expert' },
        { name: 'Root Cause & Post-Mortem Analysis', level: 'Expert' },
        { name: 'ISO 9001 Inspection Standards', level: 'Advanced' },
      ],
    },
    {
      category: 'Leadership & Stakeholder Coordination',
      items: [
        { name: 'Executive Status Reporting', level: 'Expert' },
        { name: 'Multi-Site Team Supervision', level: 'Expert' },
        { name: 'Vendor & Broker Negotiations', level: 'Expert' },
        { name: 'Change Management & Training', level: 'Expert' },
        { name: 'Global Remote Team Delivery', level: 'Expert' },
        { name: 'Client Account Retention Strategies', level: 'Expert' },
      ],
    },
  ] as CandidateSkillCategory[],
  education: [
    {
      id: 'mba',
      institution: 'Andhra University',
      degree: 'Master of Business Administration (MBA)',
      status: 'In Progress (Exp. Aug 2027)',
      period: 'In progress · Exp. Aug 2027',
      location: 'Visakhapatnam, Andhra Pradesh, India',
      focus: 'Human Resources Management, strategic organization design, enterprise leadership, and organizational behavior.',
      coursework: ['Strategic Management', 'Organizational Behavior', 'Human Resource Planning', 'Business Ethics'],
    },
    {
      id: 'pg-pm',
      institution: 'Sault College of Applied Arts and Technology',
      degree: 'Post-Graduate Certificate in Project Management',
      status: 'Completed',
      period: 'May 2022 – January 2023',
      location: 'Toronto, Ontario, Canada',
      grade: 'GPA: 3.50 / 4.0 (40 Credits)',
      focus: 'Comprehensive project management training aligned with PMI PMBOK: procurement, quality, scheduling, cost control, and risk planning.',
      coursework: ['Project Scheduling & Cost', 'Risk & Quality Management', 'Leadership & Team Dynamics', 'Procurement & Contracts'],
    },
    {
      id: 'pg-scm',
      institution: 'Sault College of Applied Arts and Technology',
      degree: 'Post-Graduate Certificate in Supply Chain Management',
      status: 'Completed',
      period: 'September 2021 – April 2022',
      location: 'Toronto, Ontario, Canada',
      grade: 'GPA: 3.68 / 4.0 (40 Credits)',
      focus: 'Logistics management, strategic sourcing, inventory optimization, enterprise operations, and international trade compliance.',
      coursework: ['Logistics & Transportation', 'Inventory Management', 'Procurement Strategies', 'Operations Planning'],
    },
    {
      id: 'btech',
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology (B.Tech) in Mechanical Engineering',
      status: 'Completed',
      period: 'Completed April 2019',
      location: 'Phagwara, Punjab, India',
      grade: 'CGPA: 6.28 / 10',
      focus: 'Engineering fundamentals, industrial design, manufacturing systems, metrology, and thermal sciences.',
      coursework: ['Industrial Engineering', 'Manufacturing Technology', 'Metrology & Measurements', 'Operations Research'],
    },
  ] as CandidateEducation[],
};
