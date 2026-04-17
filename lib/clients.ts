// lib/clients.ts — TEKGUYZ Client Deployment Log
// 23 live deployments. Do not alter any record.

export type Industry =
  | 'HVAC'
  | 'Marine'
  | 'Cleaning'
  | 'Food & Beverage'
  | 'Pool & Spa'
  | 'Landscaping'
  | 'Plumbing'
  | 'Screen & Enclosure'
  | 'Pressure Washing'
  | 'Towing'
  | 'Stone & Tile'
  | 'Yacht'
  | 'Corporate'
  | 'Automation'

export interface ClientProject {
  name: string
  url: string
  github: string
  industry: Industry
  stack: string[]
  description: string
  lastDeployed?: string // populated at build time via Netlify API
}

export const clients: ClientProject[] = [
  {
    name: 'Marine Service Portal',
    url: 'https://a1awatercraftrepairs.netlify.app/',
    github: 'tekguyz/a1awatercraftrepairs',
    industry: 'Marine',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Customers view services and book repairs online.'
  },
  {
    name: 'Landscape Booking System',
    url: 'https://jjslawn.netlify.app/',
    github: 'tekguyz/jjs-lawncare',
    industry: 'Landscaping',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Homeowners get quotes and schedule lawn service instantly.'
  },
  {
    name: 'Tree Service Manager',
    url: 'https://themonkeyguy.netlify.app/',
    github: 'tekguyz/the-monkey-guy',
    industry: 'Cleaning',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'A tool for managing tree removal and arboriculture jobs.'
  },
  {
    name: 'Regional Translation Hub',
    url: 'https://dragonfly-yami.netlify.app/',
    github: 'tekguyz/dragonfly-yami',
    industry: 'Automation',
    stack: ['React', 'Netlify'],
    description: 'A translator that understands local slang and regional dialects.'
  },
  {
    name: 'Stone Supply Catalog',
    url: 'https://real-stone.netlify.app/',
    github: 'tekguyz/real-stone-granite',
    industry: 'Stone & Tile',
    stack: ['Next.js', 'TypeScript', 'Netlify'],
    description: 'Digital catalog and lead system for stone and granite sales.'
  },
  {
    name: 'Language Context Engine',
    url: 'https://dragonfly-nica.netlify.app/',
    github: 'tekguyz/dragonfly-nica',
    industry: 'Automation',
    stack: ['React', 'Claude API', 'Netlify'],
    description: 'Real-time translator that understands the context of the conversation.'
  },
  {
    name: 'Small Engine Repair Site',
    url: 'https://jlm-small-engine-repair.netlify.app/',
    github: 'tekguyz/jlm-repair',
    industry: 'Marine',
    stack: ['React', 'Netlify'],
    description: 'Easy way for customers to find and contact a local repair shop.'
  },
  {
    name: 'Exterior Cleaning Portal',
    url: 'https://angelsoftwash.netlify.app/',
    github: 'tekguyz/angel-softwash',
    industry: 'Pressure Washing',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Professional website for booking exterior cleaning services.'
  },
  {
    name: 'Commercial Cleaning Board',
    url: 'https://coastalshinegroup.netlify.app/',
    github: 'tekguyz/coastal-shine-group',
    industry: 'Cleaning',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Scheduling and lead management for commercial cleaning fleets.'
  },
  {
    name: 'Gutter Service Gateway',
    url: 'https://arteseamlessgutters.netlify.app/',
    github: 'tekguyz/arte-seamless-gutters',
    industry: 'Screen & Enclosure',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'System for managing custom gutter installation requests.'
  },
  {
    name: 'HVAC Emergency Portal',
    url: 'https://floridaairservice.netlify.app/',
    github: 'tekguyz/florida-air-services',
    industry: 'HVAC',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Customers book emergency AC repairs 24/7.'
  },
  {
    name: 'Luxury Pool Manager',
    url: 'https://blueoasispool.netlify.app/',
    github: 'tekguyz/blue-oasis-pool',
    industry: 'Pool & Spa',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Scheduling system for high-end pool maintenance.'
  },
  {
    name: 'Enclosure Quote System',
    url: 'https://qualityscreenservices.netlify.app/',
    github: 'tekguyz/quality-screen-services',
    industry: 'Screen & Enclosure',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Tool for requesting and managing pool enclosure quotes.'
  },
  {
    name: 'AC Service Website',
    url: 'https://irvingtheacman.netlify.app/',
    github: 'tekguyz/irving-the-ac-man',
    industry: 'HVAC',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Simple, direct website for an independent AC repairman.'
  },
  {
    name: 'Yacht Detail Storefront',
    url: 'https://completeyacht.netlify.app/',
    github: 'tekguyz/complete-yacht',
    industry: 'Yacht',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Digital storefront for luxury marine detailing services.'
  },
  {
    name: 'Corporate Presence Hub',
    url: 'https://covenantvault.netlify.app/',
    github: 'tekguyz/covenant-vault',
    industry: 'Corporate',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'A professional and secure homepage for a finance firm.'
  },
  {
    name: 'Emergency Towing Dispatch',
    url: 'https://harris-towing-recovery.netlify.app/',
    github: 'tekguyz/harris-towing',
    industry: 'Towing',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Fast-loading mobile site for emergency towing requests.'
  },
  {
    name: 'AC Repair Landing Page',
    url: 'https://aironthewayac.netlify.app/',
    github: 'tekguyz/air-on-the-way-ac',
    industry: 'HVAC',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'High-conversion site with built-in customer reviews.'
  },
  {
    name: 'Legacy HVAC Portal',
    url: 'https://koolrayac.netlify.app/',
    github: 'tekguyz/kool-ray-ac',
    industry: 'HVAC',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'A site that highlights veteran experience and trust.'
  },
  {
    name: 'Home Utility Platform',
    url: 'https://superior-plumbing-air.netlify.app/',
    github: 'tekguyz/superior-plumbing-air',
    industry: 'Plumbing',
    stack: ['React', 'Netlify'],
    description: 'A one-stop shop for plumbing and AC service requests.'
  },
  {
    name: 'Outboard Inventory System',
    url: 'https://drummond-outboard.netlify.app/',
    github: 'tekguyz/drummonds-outboard',
    industry: 'Marine',
    stack: ['React', 'Netlify'],
    description: 'Catalog and scheduling for boat motor repairs.'
  },
  {
    name: 'BBQ Ordering Interface',
    url: 'https://demboyzbbq.netlify.app/',
    github: 'tekguyz/dem-boyz-bbq',
    industry: 'Food & Beverage',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Menu display and catering request system.'
  },
  {
    name: 'Medical Document Checker',
    url: 'https://meet4weed.netlify.app/',
    github: 'tekguyz/meet4weed',
    industry: 'Automation',
    stack: ['React', 'TypeScript', 'Netlify'],
    description: 'Automatic verification for medical cardholders.'
  }
]
