// lib/experiments.ts — TEKGUYZ R&D Lab Experiments
// Do not alter any record.

export type ExperimentTag =
  | 'AI Tool'
  | 'Mental Health'
  | 'Automation'
  | 'Translation'
  | 'Verification'
  | 'Workspace'

export type ExperimentStatus = 'Active' | 'Prototype' | 'Archived'

export interface Experiment {
  name: string
  url: string
  github: string
  stack: string[]
  tag: ExperimentTag
  status: ExperimentStatus
  description: string
}

export const experiments: Experiment[] = [
  {
    name: 'RevenueGuard',
    url: 'https://revenue-guard.netlify.app/',
    github: 'tekguyz/revenue-guard',
    stack: ['React', 'Netlify'],
    tag: 'Automation',
    status: 'Active',
    description: 'An automated assistant that tracks invoices and recovers lost payments so you don’t have to.'
  },
  {
    name: 'LiveStrong',
    url: 'https://livestrong-v2.netlify.app/',
    github: 'tekguyz/livestrong-v2',
    stack: ['React', 'Netlify'],
    tag: 'Mental Health',
    status: 'Active',
    description: 'A simple tool to track your mood and build better mental habits over time.'
  },
  {
    name: 'Agency Dashboard',
    url: 'https://ezpz-tekguyz.netlify.app/',
    github: 'tekguyz/ezpz-tekguyz',
    stack: ['React', 'Netlify'],
    tag: 'Workspace',
    status: 'Active',
    description: 'A central hub for managing projects and monitoring website uptime.'
  }
]
