import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { FlagshipWork } from '@/components/sections/FlagshipWork';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';
import { SectionSkeleton } from '@/components/ui/Skeletons';

const OperationsLogServer = dynamic(() => import('@/components/sections/OperationsLogServer').then(mod => mod.OperationsLogServer), {
  ssr: true
});

const RDLab = dynamic(() => import('@/components/sections/RDLab').then(mod => mod.RDLab), {
  ssr: true
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative z-0">
        <Hero />
        
        {/* THE FIX: 
            Mobile: mt-0 (Standard flow, no overlap, no crashing).
            Tablet: -mt-[10vh] (Slight reveal).
            Desktop: -mt-[25vh] (The full reveal, dialed back from 42vh to prevent collision). 
        */}
        <div className="relative z-10 mt-0 md:-mt-[10vh] lg:-mt-[25vh] w-full">
          <FlagshipWork />
        </div>
      </div>

      <Suspense fallback={<SectionSkeleton label="Operations Log" />}>
        <OperationsLogServer />
      </Suspense>

      <Suspense fallback={<SectionSkeleton label="R&D Lab" />}>
        <RDLab />
      </Suspense>

      <Services />

      <Contact />
    </div>
  );
}