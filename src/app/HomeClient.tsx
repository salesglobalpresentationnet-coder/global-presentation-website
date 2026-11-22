'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Monitor, Tv, Layout, Landmark, Wrench,
  Shield, Eye, GraduationCap, Building2, Building,
  Hotel, Heart, ArrowRight, ArrowUpRight,
  CheckCircle
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SiteImage from '@/components/ui/SiteImage';
import projectsData from '@/content/projects.json';

const services = [
  {
    title: 'Audio Visual Solutions',
    icon: Monitor,
    desc: 'Professional AV systems for meeting rooms, classrooms, boardrooms and institutional environments.',
    link: '/solutions/audio-visual/',
  },
  {
    title: 'Display Solutions',
    icon: Tv,
    desc: 'LED, LCD, LFD, video wall and interactive display solutions for every environment.',
    link: '/solutions/display-solutions/',
  },
  {
    title: 'Digital Signage',
    icon: Layout,
    desc: 'Dynamic digital communication and information display systems.',
    link: '/solutions/digital-signage/',
  },
  {
    title: 'System Integration',
    icon: Wrench,
    desc: 'Complete design, installation, configuration and commissioning.',
    link: '/solutions/av-integration/',
  },
];

const industries = [
  { title: 'Government', icon: Landmark, desc: 'Reliable AV and presentation solutions for public sector organizations and departments.' },
  { title: 'Defence', icon: Shield, desc: 'Secure, robust technology implementations for defense establishments.' },
  { title: 'Police & Security', icon: Eye, desc: 'Command center and monitoring solutions for law enforcement.' },
  { title: 'Education', icon: GraduationCap, desc: 'Interactive learning environments for schools, colleges and universities.' },
  { title: 'Corporate', icon: Building2, desc: 'Modern meeting rooms, boardrooms and collaborative spaces for businesses.' },
  { title: 'Institutional', icon: Building, desc: 'Large-scale technology rollouts for various institutional bodies.' },
  { title: 'Control Rooms', icon: Monitor, desc: '24/7 mission-critical display and monitoring solutions.' },
  { title: 'Hospitality', icon: Hotel, desc: 'Digital signage and AV systems for hotels and event venues.' },
  { title: 'Healthcare', icon: Heart, desc: 'Information displays and communication systems for medical facilities.' },
];

const projects = projectsData.projects.filter((project) => project.published);

const organizations = [
  { name: 'MoD', file: 'mod.jpg' },
  { name: 'Indian Army', file: 'indian-army.jpg' },
  { name: 'Indian Air Force', file: 'indian-airforce.jpg' },
  { name: 'DRDO', file: 'drdo.jpg' },
  { name: 'Airport', file: 'airport.jpg' },
  { name: 'BSF', file: 'bsf.jpg' },
  { name: 'NPCIL', file: 'npcil.jpg' },
  { name: 'Atomic Research', file: 'atomic-research.jpg' },
  { name: 'AAI', file: 'aai.jpg' },
  { name: 'Central University', file: 'central-university.jpg' },
  { name: 'MNIT', file: 'mnit.jpg' },
  { name: 'BITS', file: 'bits.jpg' },
  { name: 'DoIT', file: 'doit.jpg' },
];

const whyUs = [
  { title: 'Experience', desc: 'Built around long-term experience in professional AV and presentation technology.' },
  { title: 'Institutional Focus', desc: 'Understanding of large organizations and institutional technology requirements.' },
  { title: 'Integrated Solutions', desc: 'Hardware, software, installation and integration in a single project workflow.' },
  { title: 'Professional Technology', desc: 'Focus on commercial-grade and institutional applications rather than ordinary consumer products.' },
  { title: 'Project Execution', desc: 'From requirement understanding through installation and commissioning.' },
  { title: 'Support', desc: 'Post-deployment technical assistance and maintenance.' },
];

export default function HomeClient() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO — flagship corporate AV key visual */}
      <section className="on-dark relative min-h-[82vh] bg-black text-white overflow-hidden flex items-center">
        <SiteImage src="/images/hero/home-hero.jpg" alt="Professional AV and display technology in a modern corporate environment" priority className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold tracking-[0.2em] uppercase text-white/80 mb-6"
          >
            Audio Visual · Display · Signage
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-[1.02] max-w-3xl"
          >
            Professional AV, Display &amp; Signage Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl"
          >
            Integrated technology solutions for enterprises, education, healthcare and institutions — from project planning and procurement to installation and commissioning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-start gap-4"
          >
            <Button variant="primary" size="lg" href="/solutions/">
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" href="/contact/">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICE CARDS — corporate AV background */}
      <section className="relative py-20 lg:py-28 overflow-hidden on-dark">
        <SiteImage src="/images/backgrounds/corporate-av-showcase.jpg" alt="Corporate AV technology environment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <SectionHeader
              title="Our Solutions"
              subtitle="Comprehensive technology integration for professional environments"
              centered
              light
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <ScrollReveal key={service.title} delay={idx * 0.08}>
                <Link href={service.link} className="block h-full group">
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 h-full flex flex-col min-h-[300px] transition-all group-hover:shadow-xl overflow-hidden">
                    <div className="-mx-8 lg:-mx-10 -mt-8 lg:-mt-10 mb-8 h-52 overflow-hidden bg-slate-900">
                      <SiteImage src={`/images${service.link.replace(/\/$/, '')}.jpg`} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="w-14 h-14 bg-slate-100 text-black rounded-full flex items-center justify-center mb-auto">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <div className="mt-12">
                      <h3 className="text-2xl lg:text-3xl font-bold text-black mb-3">{service.title}</h3>
                      <p className="text-slate-600 mb-6 max-w-md min-h-[4.5rem]">{service.desc}</p>
                      <span className="inline-flex items-center rounded-full bg-black text-white text-sm font-bold px-6 py-2.5 group-hover:bg-neutral-700 transition-colors">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5. DEFENCE TECHNOLOGY — dedicated capabilities */}
      <section className="relative py-20 lg:py-28 overflow-hidden on-dark">
        <SiteImage
          src="/images/backgrounds/corporate-av-showcase.jpg"
          alt="Professional defence technology and AV environment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/78 via-black/68 to-black/88" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <SectionHeader
              title="Defence Technology"
              subtitle="Mission-critical surveillance, detection and command-room technology"
              centered
              light
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {[
              {
                title: 'Drone Systems',
                desc: 'Professional UAV and aerial surveillance technology for defence and security environments.',
                image: '/images/defence/drone-systems.jpg',
                href: '/solutions/drone-systems/',
                tags: ['UAV', 'Aerial Surveillance', 'Mission Support'],
              },
              {
                title: 'Anti-Drone Systems',
                desc: 'Counter-UAS detection and monitoring solutions for protected facilities and critical infrastructure.',
                image: '/images/defence/anti-drone-system.jpg',
                href: '/solutions/anti-drone/',
                tags: ['Counter-UAS', 'Detection', 'Monitoring'],
              },
              {
                title: 'Radar & Surveillance',
                desc: 'Advanced detection, monitoring and situational-awareness technology for command environments.',
                image: '/images/defence/radar-surveillance-system.jpg',
                href: '/solutions/radar-surveillance/',
                tags: ['Radar', 'Surveillance', 'Situational Awareness'],
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.08}>
                <Link href={item.href} className="group block h-full">
                  <article className="h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.07] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.10]">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <SiteImage
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                        Defence Technology
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-300 min-h-[4.5rem]">{item.desc}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-medium text-slate-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="mt-7 inline-flex items-center text-sm font-semibold text-white group-hover:underline underline-offset-4">
                        Explore solution
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES GRID — corporate AV background */}
      <section className="relative py-20 lg:py-28 overflow-hidden on-dark">
        <SiteImage src="/images/backgrounds/corporate-av-showcase.jpg" alt="Corporate AV technology environment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/62 to-black/82" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <SectionHeader
              title="Industries We Serve"
              subtitle="Tailored technology solutions for specialized environments"
              centered
              light
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <ScrollReveal key={industry.title} delay={idx * 0.05}>
                <Link href="/industries/" className="group block h-full p-7 bg-white/95 backdrop-blur-sm rounded-3xl hover:shadow-lg transition-all overflow-hidden">
                  <div className="-mx-7 -mt-7 mb-5 h-40 overflow-hidden bg-slate-900">
                    <SiteImage src={`/images/industries/${industry.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}.jpg`} alt={industry.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5">
                    <industry.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:underline underline-offset-4">{industry.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{industry.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS — aligned image gallery */}
      <section className="relative overflow-hidden py-20 lg:py-28 on-dark">
        <SiteImage src="/images/backgrounds/corporate-av-showcase.jpg" alt="Professional AV technology environment" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              title="Projects"
              subtitle="Selected AV, LED and digital signage installations"
              centered
              light
            />
          </ScrollReveal>

          <div className="home-project-mosaic mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {projects.slice(0, 6).map((project, idx) => {
              const image = project.images[0];
              return (
                <ScrollReveal
                  key={project.id}
                  delay={Math.min(idx * 0.04, 0.2)}
                  className="min-w-0"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="project-tile group relative block aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080b10] shadow-[0_18px_55px_rgba(0,0,0,.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8fd6ff]"
                    aria-label={`View ${project.title} project`}
                  >
                    <SiteImage
                      src={image}
                      alt=""
                      className="absolute inset-0 h-full w-full scale-110 object-cover opacity-55 blur-xl transition duration-700 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                    <SiteImage
                      src={image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:p-3"
                      priority={idx < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />
                    <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/10 transition duration-500 group-hover:ring-[#8fd6ff]/60" />
                    <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white shadow-lg backdrop-blur-md transition duration-300 group-hover:border-[#8fd6ff]/70 group-hover:bg-[#1428a0]">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" href="/projects/">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 5. TRUST STRIP */}
      <section className="on-dark py-16 lg:py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <ScrollReveal delay={0}>
              <AnimatedCounter end={20} suffix="+" label="Years Experience" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <AnimatedCounter end={500} suffix="+" label="Projects Delivered" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <AnimatedCounter end={100} suffix="+" label="Solutions Delivered Across India" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. ORGANIZATIONS */}
      <section className="relative py-20 lg:py-28 overflow-hidden on-dark">
        <SiteImage src="/images/backgrounds/corporate-av-showcase.jpg" alt="Professional AV technology environment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <SectionHeader
              title="Organizations We’ve Worked With"
              subtitle="Selected installations delivered across defence, aviation, research, education and public-sector environments"
              centered
              light
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {organizations.map((organization, idx) => (
              <ScrollReveal key={organization.name} delay={idx * 0.035}>
                <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm hover:bg-white/[0.10] transition-all duration-300">
                  <div className="aspect-[1.45] overflow-hidden bg-slate-950">
                    <img
                      src={`/images/organizations/${organization.file}`}
                      alt={`${organization.name} project photograph`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-4 py-4 text-center">
                    <p className="text-sm font-semibold text-white">{organization.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY GLOBAL PRESENTATION */}
      <section className="py-20 lg:py-28 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              title="Why Choose Global Presentation"
              subtitle="Delivering excellence in enterprise and institutional technology solutions"
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((feature, idx) => (
              <ScrollReveal key={feature.title} delay={idx * 0.05}>
                <div className="bg-white p-8 rounded-3xl h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
