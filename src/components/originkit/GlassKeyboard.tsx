import React, { useEffect, useState } from 'react';
import { renderKeycapsBatch } from './GlassKeycap';
import { TOOL_ICONS } from '../../data/toolsData';

export interface FloatingKeyTool {
  id: string;
  name: string;
  mark: string;
}

export const ALL_FLOATING_TOOLS: FloatingKeyTool[] = [
  // 1. Project Management & Scheduling
  { id: 'ms-project', name: 'MS Project', mark: TOOL_ICONS.msProject },
  { id: 'jira', name: 'Jira Software', mark: TOOL_ICONS.jira },
  { id: 'confluence', name: 'Confluence', mark: TOOL_ICONS.confluence },

  // 2. Business Intelligence & Data Analysis
  { id: 'excel', name: 'Microsoft Excel', mark: TOOL_ICONS.excel },
  { id: 'powerbi', name: 'Power BI', mark: TOOL_ICONS.powerbi },

  // 3. Industry & Operations-Specific Systems
  { id: 'power-broker', name: 'Power Broker BMS', mark: TOOL_ICONS.powerBroker },
  { id: 'autocad', name: 'AutoCAD', mark: TOOL_ICONS.autocad },

  // 4. Productivity, Communication & Collaboration (Microsoft 365)
  { id: 'word', name: 'Microsoft Word', mark: TOOL_ICONS.word },
  { id: 'powerpoint', name: 'PowerPoint', mark: TOOL_ICONS.powerpoint },
  { id: 'teams', name: 'Microsoft Teams', mark: TOOL_ICONS.teams },
  { id: 'outlook', name: 'Microsoft Outlook', mark: TOOL_ICONS.outlook },

  // 5. Google Workspace
  { id: 'google-docs', name: 'Google Docs', mark: TOOL_ICONS.googleDocs },
  { id: 'google-sheets', name: 'Google Sheets', mark: TOOL_ICONS.googleSheets },
  { id: 'google-drive', name: 'Google Drive', mark: TOOL_ICONS.googleDrive },
  { id: 'google-meet', name: 'Google Meet', mark: TOOL_ICONS.googleMeet },

  // 6. Asynchronous & Real-Time Comms
  { id: 'slack', name: 'Slack', mark: TOOL_ICONS.slack },
  { id: 'zoom', name: 'Zoom', mark: TOOL_ICONS.zoom },
];

export const GlassKeyboard: React.FC = () => {
  const [renderedKeys, setRenderedKeys] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    renderKeycapsBatch(ALL_FLOATING_TOOLS, 340)
      .then((images) => {
        if (active) {
          setRenderedKeys(images);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn('Error batch rendering keycaps:', err);
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="relative w-full my-12 py-8">
      {/* 
        Seamless Background Blur Cushion Behind the Keys WITHOUT a Box:
        Uses an organic radial fade mask so the ambient background (Moonlit Petals)
        is softly blurred behind the floating keys without any hard box edges or borders.
      */}
      <div
        className="absolute inset-0 -inset-x-8 -inset-y-12 pointer-events-none backdrop-blur-2xl bg-black/40 rounded-full"
        style={{
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, black 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, black 35%, transparent 75%)',
        }}
      />

      {/* Floating 3D Glass Keycaps Deck for All 17 Tools */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-5 sm:gap-7 lg:gap-9 max-w-6xl mx-auto">
        {ALL_FLOATING_TOOLS.map((tool, index) => {
          const imgSrc = renderedKeys[tool.id];
          // Staggered vertical floating animation delays for natural crystal drift
          const floatDelay = `${(index % 6) * 0.4}s`;
          const floatDuration = `${5 + (index % 3)}s`;

          return (
            <div
              key={tool.id}
              className="w-[140px] h-[140px] sm:w-[165px] sm:h-[165px] lg:w-[185px] lg:h-[185px] flex items-center justify-center select-none pointer-events-none transition-transform duration-700"
              style={{
                animation: `keyFloat ${floatDuration} ease-in-out ${floatDelay} infinite alternate`,
              }}
              title={tool.name}
            >
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt={`${tool.name} glass keycap`}
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
                  loading="eager"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-white/5 animate-pulse" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CSS Keyframes for subtle organic floating drift */}
      <style>{`
        @keyframes keyFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-9px) rotate(0.4deg);
          }
        }
      `}</style>
    </div>
  );
};

export default GlassKeyboard;
