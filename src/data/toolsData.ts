export interface SubTool {
  name: string;
  icon: string;
}

export interface ToolItem {
  id: string;
  name: string;
  shortName?: string;
  category: 'pm-scheduling' | 'bi-data' | 'industry-ops' | 'productivity-collab';
  badge: string;
  proficiency: 'Expert' | 'Advanced' | 'Certified';
  description: string;
  iconDataUri: string;
  subTools?: SubTool[];
}

export interface ToolCategory {
  id: string;
  title: string;
  subtitle: string;
  tools: ToolItem[];
}

// 100% Authentic, Official Original Logos stored in public/logos/
export const TOOL_ICONS = {
  msProject: '/logos/ms-project.svg',
  jira: '/logos/jira.svg',
  confluence: '/logos/confluence.svg',
  excel: '/logos/excel.svg',
  powerbi: '/logos/powerbi.svg',
  powerBroker: '/logos/power-broker.svg',
  autocad: '/logos/autocad.svg',
  word: '/logos/word.svg',
  powerpoint: '/logos/powerpoint.svg',
  teams: '/logos/teams.svg',
  outlook: '/logos/outlook.svg',
  googleDocs: '/logos/google-docs.svg',
  googleSheets: '/logos/google-sheets.svg',
  googleDrive: '/logos/google-drive.svg',
  googleMeet: '/logos/google-meet.svg',
  slack: '/logos/slack.svg',
  zoom: '/logos/zoom.svg',
};

// 17 tools for the 3D Interactive Grid matrix
export const INTERACTIVE_GRID_TOOLS = [
  { src: TOOL_ICONS.msProject, title: 'MS Project' },
  { src: TOOL_ICONS.jira, title: 'Jira Software' },
  { src: TOOL_ICONS.confluence, title: 'Confluence' },
  { src: TOOL_ICONS.excel, title: 'Microsoft Excel' },
  { src: TOOL_ICONS.powerbi, title: 'Power BI' },
  { src: TOOL_ICONS.powerBroker, title: 'Power Broker BMS' },
  { src: TOOL_ICONS.autocad, title: 'AutoCAD' },
  { src: TOOL_ICONS.word, title: 'Microsoft Word' },
  { src: TOOL_ICONS.powerpoint, title: 'PowerPoint' },
  { src: TOOL_ICONS.teams, title: 'Microsoft Teams' },
  { src: TOOL_ICONS.outlook, title: 'Microsoft Outlook' },
  { src: TOOL_ICONS.googleDocs, title: 'Google Docs' },
  { src: TOOL_ICONS.googleSheets, title: 'Google Sheets' },
  { src: TOOL_ICONS.googleDrive, title: 'Google Drive' },
  { src: TOOL_ICONS.googleMeet, title: 'Google Meet' },
  { src: TOOL_ICONS.slack, title: 'Slack' },
  { src: TOOL_ICONS.zoom, title: 'Zoom' },
];

// The 4 Exact Categories and Detailed Tool Profiles
export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: 'pm-scheduling',
    title: '1. Project Management & Scheduling',
    subtitle: 'Predictive baselines, critical paths, Agile sprint execution & institutional SOP knowledge bases',
    tools: [
      {
        id: 'ms-project',
        name: 'Microsoft Project (MS Project)',
        category: 'pm-scheduling',
        badge: 'CPM & Baseline Scheduling',
        proficiency: 'Expert',
        description: 'Critical Path Method (CPM) scheduling, Level 0–2 schedule baselines, Work Breakdown Structure (WBS), Gantt charts, and task dependency tracking (applied in commercial fit-outs and engineering coordination).',
        iconDataUri: TOOL_ICONS.msProject,
      },
      {
        id: 'jira',
        name: 'Jira Software / Jira Cloud',
        category: 'pm-scheduling',
        badge: 'Atlassian Certified · Agile Delivery',
        proficiency: 'Certified',
        description: 'Atlassian Certified (Atlassian Agile Project Management Professional Certificate). Agile & Scrum delivery, Kanban boards, sprint management, backlog grooming, issue tracking, and ticket workflow triage.',
        iconDataUri: TOOL_ICONS.jira,
      },
      {
        id: 'confluence',
        name: 'Confluence',
        category: 'pm-scheduling',
        badge: 'SOPs & Team Knowledge Base',
        proficiency: 'Advanced',
        description: 'Team documentation, standard operating procedure (SOP) libraries, project retrospectives, audit trails, and cross-functional knowledge bases.',
        iconDataUri: TOOL_ICONS.confluence,
      },
    ],
  },
  {
    id: 'bi-data',
    title: '2. Business Intelligence & Data Analysis',
    subtitle: 'Operational modeling, variance tracking, multi-million-dollar portfolio reconciliations & executive SLA dashboards',
    tools: [
      {
        id: 'excel',
        name: 'Microsoft Excel',
        shortName: 'Advanced Operational Modeling',
        category: 'bi-data',
        badge: 'Advanced Operational Modeling',
        proficiency: 'Expert',
        description: 'VLOOKUP, Pivot Tables, conditional formatting, data validation, schedule & budget variance tracking, and transactional data reconciliation across 1,000+ client policy files.',
        iconDataUri: TOOL_ICONS.excel,
      },
      {
        id: 'powerbi',
        name: 'Microsoft Power BI',
        category: 'bi-data',
        badge: 'Executive KPI & SLA Dashboards',
        proficiency: 'Advanced',
        description: 'Operational dashboards, KPI tracking, executive performance reporting, and portfolio SLA monitoring with automated visual data models.',
        iconDataUri: TOOL_ICONS.powerbi,
      },
    ],
  },
  {
    id: 'industry-ops',
    title: '3. Industry & Operations-Specific Systems',
    subtitle: 'Enterprise broker management systems, multi-carrier remarketing queue governance & architectural CAD drafting',
    tools: [
      {
        id: 'power-broker',
        name: 'Power Broker BMS',
        category: 'industry-ops',
        badge: 'CAD 2.86M Portfolio Governance',
        proficiency: 'Expert',
        description: 'Brokerage Management System workflows, policy lifecycle tracking, client remarketing, and 3-tier renewal priority queue management system across 1,082 accounts (CAD 2.86M renewal premiums at Billyard Insurance Group).',
        iconDataUri: TOOL_ICONS.powerBroker,
      },
      {
        id: 'autocad',
        name: 'AutoCAD',
        category: 'industry-ops',
        badge: 'Engineering & Layout Review',
        proficiency: 'Advanced',
        description: 'Technical drawing reviews, architectural layout checks, and schematic analysis (drawing upon Mechanical Engineering B.Tech background and interior commercial fit-out projects).',
        iconDataUri: TOOL_ICONS.autocad,
      },
    ],
  },
  {
    id: 'productivity-collab',
    title: '4. Productivity, Communication & Collaboration',
    subtitle: 'Executive governance documentation, Monthly Business Reviews (MBR), cloud workspace suites & distributed sync',
    tools: [
      {
        id: 'office-suite',
        name: 'Microsoft 365 / Office Suite',
        shortName: 'Word · PowerPoint · Teams · Outlook',
        category: 'productivity-collab',
        badge: 'Executive Decks, Charters & MBRs',
        proficiency: 'Expert',
        description: 'Word: Project charters, SOPs, governance documentation. PowerPoint: Executive decks, Monthly Business Reviews (MBR), 5-Whys root-cause summaries, decision matrices. Teams & Outlook: Cross-functional stakeholder coordination and executive communication.',
        iconDataUri: TOOL_ICONS.word,
        subTools: [
          { name: 'Word', icon: TOOL_ICONS.word },
          { name: 'PowerPoint', icon: TOOL_ICONS.powerpoint },
          { name: 'Teams', icon: TOOL_ICONS.teams },
          { name: 'Outlook', icon: TOOL_ICONS.outlook },
        ],
      },
      {
        id: 'google-workspace',
        name: 'Google Workspace',
        shortName: 'Docs · Sheets · Drive · Meet',
        category: 'productivity-collab',
        badge: 'Cloud Collaboration Ecosystem',
        proficiency: 'Expert',
        description: 'Google Docs, Sheets, Drive, and Google Meet for seamless real-time enterprise collaboration, shared cloud taxonomy architecture, collaborative operational spreadsheets, and distributed stakeholder delivery.',
        iconDataUri: TOOL_ICONS.googleDocs,
        subTools: [
          { name: 'Docs', icon: TOOL_ICONS.googleDocs },
          { name: 'Sheets', icon: TOOL_ICONS.googleSheets },
          { name: 'Drive', icon: TOOL_ICONS.googleDrive },
          { name: 'Meet', icon: TOOL_ICONS.googleMeet },
        ],
      },
      {
        id: 'collaboration-tools',
        name: 'Collaboration Platforms (Slack · Zoom)',
        shortName: 'Slack & Zoom Enterprise',
        category: 'productivity-collab',
        badge: 'Asynchronous Sync & Live Reviews',
        proficiency: 'Expert',
        description: 'Slack: Asynchronous team channels, automated Jira/Confluence alert hooks, and sprint standups. Zoom: High-stakes stakeholder delivery reviews, cross-border steering committees, and client sessions.',
        iconDataUri: TOOL_ICONS.slack,
        subTools: [
          { name: 'Slack', icon: TOOL_ICONS.slack },
          { name: 'Zoom', icon: TOOL_ICONS.zoom },
        ],
      },
    ],
  },
];
