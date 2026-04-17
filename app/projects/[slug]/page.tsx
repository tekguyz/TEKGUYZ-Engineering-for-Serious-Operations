import * as React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ProjectContent } from '@/components/projects/ProjectContent';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return {};
  return {
    title: `${project.name} · TEKGUYZ`,
    description: project.thesis,
    openGraph: {
      title: `${project.name} · TEKGUYZ`,
      description: project.tagline,
      url: `https://tekguyz.com/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const projectIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <ScrollProgress />
      <ProjectContent project={project} nextProject={nextProject} />
    </>
  );
}
