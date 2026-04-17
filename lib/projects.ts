// lib/projects.ts — TEKGUYZ Flagship Projects
// Do not alter any field. These are the exact records.

export type ProjectStatus = 'Live' | 'In Development' | 'Prototype'
export type ProjectLayer = 'evidence'

export interface ArchDiagram {
  nodes: string[]
  flow: string
}

export interface CaseStudySection {
  heading: string
  body: string
}

export interface Project {
  slug: string
  number: string
  name: string
  tagline: string
  thesis: string
  description: string
  url: string
  stack: string[]
  year: string
  status: ProjectStatus
  layer: ProjectLayer
  accentHex: string
  accentOKLCH: string
  challenge: CaseStudySection
  solution: CaseStudySection
  outcome: CaseStudySection
  highlights: string[]
  archDiagram: ArchDiagram
}

export const projects: Project[] = [
  {
    slug: 'crispy-bacon',
    number: '01',
    name: 'Research Assistant',
    tagline: 'Your information, organized and searchable.',
    thesis: 'AI should not be a gimmick. It should just make your life easier.',
    description: 'A tool that saves everything you read or watch online and summarizes it. It helps you find connections between ideas so you spend less time searching and more time working.',
    url: 'https://crispy-bacon.netlify.app/',
    stack: ['React', 'TypeScript', 'Supabase', 'Gemini API', 'PostgreSQL'],
    year: '2024',
    status: 'Live',
    layer: 'evidence',
    accentHex: '#E8883A',
    accentOKLCH: 'oklch(64% 0.18 52)',
    challenge: {
      heading: 'Saving information is easy. Finding it is hard.',
      body: 'Most people save links but never look at them again because they forget why they saved them. We wanted to build something that actually understands what you save and organizes it for you automatically.'
    },
    solution: {
      heading: 'A system that remembers for you',
      body: 'We built a tool that takes your articles and videos, summarizes the main points using AI, and lets you search for ideas, not just keywords. It connects related topics so you can see the big picture across your entire research history.'
    },
    outcome: {
      heading: 'Better research in less time',
      body: 'The system is now used daily to manage complex research. It proves that technology works best when it stays out of the way and helps you focus on what matters.'
    },
    highlights: [
      'Saves articles and videos with one click',
      'AI summarizes the main points automatically',
      'Search by ideas, not just keywords',
      'Works across all your devices'
    ],
    archDiagram: {
      nodes: ['Browser Extension', 'Capture API', 'Supabase Realtime', 'AI Pipeline (Gemini)', 'PostgreSQL + Vectors', 'Search Interface'],
      flow: 'Capture → Ingest → Summarize → Embed → Store → Retrieve'
    }
  },
  {
    slug: 'vericlear',
    number: '02',
    name: 'Secure Verification',
    tagline: 'Prove who you are without giving up your private data.',
    thesis: 'You should not have to hand over your entire identity just to prove your age or a credential.',
    description: 'A security system that confirms facts—like a license or an ID—without actually storing or seeing the sensitive information. It keeps businesses safe from data leaks because there is no data to steal.',
    url: 'https://vericlear.netlify.app/',
    stack: ['TypeScript', 'Next.js', 'ZKP Architecture', 'Tailwind'],
    year: '2024',
    status: 'Live',
    layer: 'evidence',
    accentHex: '#3250f0',
    accentOKLCH: 'oklch(52% 0.24 268)',
    challenge: {
      heading: 'Most security systems are a liability',
      body: 'To verify a user, most systems require taking a copy of their ID or personal records. If that system gets hacked, the user loses everything. We had to build a way to verify identity without ever holding the sensitive data.'
    },
    solution: {
      heading: 'Proof without possession',
      body: 'We used a special kind of math that lets a user prove a fact (like "I am over 21") without showing the actual document. The system checks the math, returns a "True" or "False," and never saves a single piece of private info.'
    },
    outcome: {
      heading: 'Zero data risk',
      body: 'The system gives perfect verification results while storing zero private data. It is the safest way for businesses to handle sensitive customer verification in a world full of data breaches.'
    },
    highlights: [
      'Verifies IDs without storing fingerprints or copies',
      'Checks credentials in less than a second',
      'No private data ever touches our servers',
      'Built to handle high-security operations'
    ],
    archDiagram: {
      nodes: ['User Claim', 'ZKP Prover (Client)', 'Verification Request', 'ZKP Verifier (Server)', 'Boolean Result', 'No PII Stored'],
      flow: 'Claim → Proof → Request → Verify → Boolean → Audit'
    }
  },
  {
    slug: 'fancyfam',
    number: '03',
    name: 'Private Network',
    tagline: 'Social connection, minus the noise.',
    thesis: 'Technology should bring families together, not sell their data to advertisers.',
    description: 'A private, invitation-only network built for families. No ads, no public profiles, and no strangers. It is a safe digital space to share photos and updates without worrying about who else is watching.',
    url: 'https://fancyfam.com/',
    stack: ['Next.js', 'React', 'TypeScript', 'Netlify'],
    year: '2025',
    status: 'Live',
    layer: 'evidence',
    accentHex: '#EC4899',
    accentOKLCH: 'oklch(58% 0.20 340)',
    challenge: {
      heading: 'The internet is too public for families',
      body: 'Big social networks are built to keep you scrolling and watching ads. That environment is not safe for sharing personal family moments. We needed to build a place where the only people who can see your content are the ones you explicitly invited.'
    },
    solution: {
      heading: 'Security by design',
      body: 'We built a secure, closed system where nothing is public. There are no search engines indexing your photos and no "suggested content." Every member is verified, and every post is only visible to the people you choose.'
    },
    outcome: {
      heading: 'A safe space for connection',
      body: 'The network provides a fast, clean, and secure way to stay connected with family. It proves that you can build a social tool without using the "dark patterns" that make other platforms feel unsafe.'
    },
    highlights: [
      'Invitation-only — no strangers can join',
      'Zero tracking or advertising of any kind',
      'You control exactly who sees every photo',
      'Clean, simple interface built for all ages'
    ],
    archDiagram: {
      nodes: ['Invitation Token', 'Auth Layer', 'Family Graph', 'Content (Posts / Albums)', 'Granular ACL', 'Zero Public Surface'],
      flow: 'Invite → Auth → Graph → Post → ACL → Render'
    }
  }
]