'use client';

import * as React from 'react';
import { Project } from '@/lib/projects';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip';

function Node({ x, y, width, height, label, accent, tooltip }: { x: number, y: number, width: number, height: number, label: string, accent: string, tooltip: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <g className="cursor-pointer transition-transform hover:-translate-y-1" style={{ transformOrigin: `${x + width/2}px ${y + height/2}px` }}>
            <rect x={x} y={y} width={width} height={height} rx={6} fill="var(--color-bg-secondary)" stroke={accent} strokeWidth={2} />
            <text x={x + width/2} y={y + height/2} textAnchor="middle" dominantBaseline="middle" fill="var(--color-text-primary)" fontSize={12} fontWeight={600}>
              {label}
            </text>
          </g>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number, y1: number, x2: number, y2: number }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-border-strong)" strokeWidth={2} />
      <polygon points={`${x2},${y2} ${x2-6},${y2-4} ${x2-6},${y2+4}`} fill="var(--color-border-strong)" />
    </g>
  );
}

function ArrowDown({ x1, y1, x2, y2 }: { x1: number, y1: number, x2: number, y2: number }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-border-strong)" strokeWidth={2} />
      <polygon points={`${x2},${y2} ${x2-4},${y2-6} ${x2+4},${y2-6}`} fill="var(--color-border-strong)" />
    </g>
  );
}

function CrispyBaconDiagram({ project }: { project: Project }) {
  const nodes = project.archDiagram.nodes;
  const nodeWidth = 140;
  const nodeHeight = 40;
  const gap = 40;
  const startX = 20;
  const y = 60;

  return (
    <svg viewBox="0 0 1120 160" className="w-full h-auto font-sans">
      {nodes.map((node, i) => {
        const x = startX + i * (nodeWidth + gap);
        return (
          <React.Fragment key={i}>
            <Node x={x} y={y} width={nodeWidth} height={nodeHeight} label={node} accent={project.accentHex} tooltip={`Role: ${node}`} />
            {i < nodes.length - 1 && (
              <Arrow x1={x + nodeWidth} y1={y + nodeHeight/2} x2={x + nodeWidth + gap - 2} y2={y + nodeHeight/2} />
            )}
          </React.Fragment>
        );
      })}
    </svg>
  );
}

function VeriClearDiagram({ project }: { project: Project }) {
  const nodes = project.archDiagram.nodes;
  // Top row: User Claim, ZKP Prover (Client), Verification Request
  // Bottom row: ZKP Verifier (Server), Boolean Result, No PII Stored
  const topNodes = nodes.slice(0, 3);
  const bottomNodes = nodes.slice(3, 6);
  
  const nodeWidth = 160;
  const nodeHeight = 40;
  const gapX = 60;
  const startX = 100;
  const topY = 40;
  const bottomY = 160;

  return (
    <svg viewBox="0 0 800 240" className="w-full h-auto font-sans">
      {/* Trust Boundary */}
      <line x1="40" y1="120" x2="760" y2="120" stroke={project.accentHex} strokeWidth={2} strokeDasharray="8 4" />
      <text x="400" y="110" textAnchor="middle" fill={project.accentHex} fontSize={12} fontWeight={600} letterSpacing={1} className="uppercase">
        Trust Boundary — no PII crosses this line
      </text>

      {/* Top Row */}
      {topNodes.map((node, i) => {
        const x = startX + i * (nodeWidth + gapX);
        return (
          <React.Fragment key={`top-${i}`}>
            <Node x={x} y={topY} width={nodeWidth} height={nodeHeight} label={node} accent={project.accentHex} tooltip={`Client-side: ${node}`} />
            {i < topNodes.length - 1 && (
              <Arrow x1={x + nodeWidth} y1={topY + nodeHeight/2} x2={x + nodeWidth + gapX - 2} y2={topY + nodeHeight/2} />
            )}
          </React.Fragment>
        );
      })}

      {/* Cross Boundary Arrow */}
      <ArrowDown x1={startX + 2 * (nodeWidth + gapX) + nodeWidth/2} y1={topY + nodeHeight} x2={startX + 0 * (nodeWidth + gapX) + nodeWidth/2} y2={bottomY - 2} />
      
      {/* Bottom Row */}
      {bottomNodes.map((node, i) => {
        const x = startX + i * (nodeWidth + gapX);
        return (
          <React.Fragment key={`bottom-${i}`}>
            <Node x={x} y={bottomY} width={nodeWidth} height={nodeHeight} label={node} accent={project.accentHex} tooltip={`Server-side: ${node}`} />
            {i < bottomNodes.length - 1 && (
              <Arrow x1={x + nodeWidth} y1={bottomY + nodeHeight/2} x2={x + nodeWidth + gapX - 2} y2={bottomY + nodeHeight/2} />
            )}
          </React.Fragment>
        );
      })}
    </svg>
  );
}

function FancyFamDiagram({ project }: { project: Project }) {
  const nodes = project.archDiagram.nodes;
  // Main flow: Invitation Token → Auth Layer → Family Graph → Content (Posts / Albums) → Granular ACL
  // Branch: Content → Zero Public Surface
  const mainNodes = nodes.slice(0, 5);
  const deadEndNode = nodes[5]; // Zero Public Surface
  
  const nodeWidth = 150;
  const nodeHeight = 40;
  const gapX = 40;
  const startX = 20;
  const y = 40;

  return (
    <svg viewBox="0 0 1000 200" className="w-full h-auto font-sans">
      {mainNodes.map((node, i) => {
        const x = startX + i * (nodeWidth + gapX);
        return (
          <React.Fragment key={`main-${i}`}>
            <Node x={x} y={y} width={nodeWidth} height={nodeHeight} label={node} accent={project.accentHex} tooltip={`Main Flow: ${node}`} />
            {i < mainNodes.length - 1 && (
              <Arrow x1={x + nodeWidth} y1={y + nodeHeight/2} x2={x + nodeWidth + gapX - 2} y2={y + nodeHeight/2} />
            )}
          </React.Fragment>
        );
      })}

      {/* Branch from Content (index 3) */}
      <ArrowDown x1={startX + 3 * (nodeWidth + gapX) + nodeWidth/2} y1={y + nodeHeight} x2={startX + 3 * (nodeWidth + gapX) + nodeWidth/2} y2={y + nodeHeight + 40 - 2} />
      <Node x={startX + 3 * (nodeWidth + gapX)} y={y + nodeHeight + 40} width={nodeWidth} height={nodeHeight} label={deadEndNode} accent={project.accentHex} tooltip={`Dead End: ${deadEndNode}`} />
    </svg>
  );
}

export function ArchDiagram({ project }: { project: Project }) {
  if (project.slug === 'crispy-bacon') {
    return <CrispyBaconDiagram project={project} />;
  }
  if (project.slug === 'vericlear') {
    return <VeriClearDiagram project={project} />;
  }
  if (project.slug === 'fancyfam') {
    return <FancyFamDiagram project={project} />;
  }
  return null;
}
