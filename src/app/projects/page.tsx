'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SiteImage from '@/components/ui/SiteImage';
import projectsData from '@/content/projects.json';

const galleryItems = projectsData.projects
  .filter((project) => project.published)
  .flatMap((project) =>
    project.images.map((image, imageIndex) => ({
      projectId: project.id,
      slug: project.slug,
      image,
      imageIndex,
      alt: `${project.title} project image ${imageIndex + 1}`,
    }))
  );

export default function ProjectsGallery() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <SiteImage
          src="/images/backgrounds/corporate-av-showcase.jpg"
          alt="Corporate AV technology environment"
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.94)_0%,rgba(0,0,0,.78)_48%,rgba(0,0,0,.54)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(91,192,255,.16),transparent_34%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#8fd6ff]">
                <span className="h-px w-10 bg-[#8fd6ff]" />
                Selected installations
              </div>
              <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-7xl">
                Projects Gallery
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                A visual archive of professional AV, LED and digital signage installations delivered for real-world environments.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#12314a]/30 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="project-mosaic grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {galleryItems.map((item, index) => (
              <ScrollReveal
                key={`${item.projectId}-${item.imageIndex}`}
                delay={Math.min(index * 0.035, 0.24)}
                className="min-w-0"
              >
                <Link
                  href={`/projects/${item.slug}`}
                  className="project-tile group relative block aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080b10] shadow-[0_18px_55px_rgba(0,0,0,.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8fd6ff]"
                  aria-label={`View ${item.alt}`}
                >
                  {/* Soft, blurred fill keeps portrait and landscape photos equally framed. */}
                  <SiteImage
                    src={item.image}
                    alt=""
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-55 blur-xl transition duration-700 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <SiteImage
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:p-3"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />
                  <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/10 transition duration-500 group-hover:ring-[#8fd6ff]/60" />
                  <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white shadow-lg backdrop-blur-md transition duration-300 group-hover:border-[#8fd6ff]/70 group-hover:bg-[#1428a0]">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
