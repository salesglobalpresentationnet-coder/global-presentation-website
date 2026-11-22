import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Monitor, Video, Mic, Layout, Radio, Box, Settings, PanelLeft, Search, CheckCircle, Shield, Eye } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import SiteImage from '@/components/ui/SiteImage';

export const metadata: Metadata = {
  title: 'Our Solutions | Global Presentation',
  description: 'Comprehensive Audio Visual, Display, and Integration Solutions for enterprise, education, and government sectors.',
};

const solutions = [
  {
    title: 'Audio Visual Solutions',
    desc: 'Comprehensive AV integration for boardrooms, classrooms, and enterprise environments.',
    href: '/solutions/audio-visual',
    icon: Mic
  },
  {
    title: 'Display Solutions',
    desc: 'Commercial displays, video walls, and interactive panels for impactful visual communication.',
    href: '/solutions/display-solutions',
    icon: Monitor
  },
  {
    title: 'LED & Video Wall Solutions',
    desc: 'Seamless large-scale visualization with fine-pitch LED and LCD video wall technologies.',
    href: '/solutions/led-video-walls',
    icon: Layout
  },
  {
    title: 'Digital Signage Solutions',
    desc: 'Replace static communication with dynamic, centrally managed visual information.',
    href: '/solutions/digital-signage',
    icon: PanelLeft
  },
  {
    title: 'Video Conferencing Solutions',
    desc: 'High-quality video and audio conferencing systems for seamless global collaboration.',
    href: '/solutions/video-conferencing',
    icon: Video
  },
  {
    title: 'Smart Classroom Solutions',
    desc: 'Interactive learning environments powered by advanced educational technology.',
    href: '/solutions/smart-classroom',
    icon: Box
  },
  {
    title: 'Boardroom & Conference Solutions',
    desc: 'Premium integrated audio visual experiences for executive meeting spaces.',
    href: '/solutions/boardroom-solutions',
    icon: Radio
  },
  {
    title: 'Interactive & Collaboration Solutions',
    desc: 'Touch-enabled displays and software to drive team collaboration and ideation.',
    href: '/solutions/interactive-displays',
    icon: Search
  },
  {
    title: 'Control Room Solutions',
    desc: 'Mission-critical visualization and signal management for 24/7 monitoring.',
    href: '/solutions/control-room',
    icon: Settings
  },
  {
    title: 'End-to-End AV Integration',
    desc: 'Comprehensive service combining multiple technologies into one unified, working system.',
    href: '/solutions/av-integration',
    icon: CheckCircle
  },
  {
    title: 'Drone Systems',
    desc: 'Professional UAV and aerial surveillance solutions for defence and security environments.',
    href: '/solutions/drone-systems',
    icon: Radio
  },
  {
    title: 'Anti-Drone Systems',
    desc: 'Counter-UAS detection and surveillance solutions for protected and mission-critical sites.',
    href: '/solutions/anti-drone',
    icon: Shield
  },
  {
    title: 'Radar & Surveillance',
    desc: 'Advanced radar, monitoring and situational-awareness solutions for defence applications.',
    href: '/solutions/radar-surveillance',
    icon: Eye
  }
];

export default function SolutionsOverviewPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black on-dark pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">Portfolio</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Our Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
              Transforming spaces with cutting-edge technology. From immersive video walls to seamless unified communications, we deliver tailored solutions that drive engagement and productivity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Comprehensive Technology Solutions" 
            subtitle="Explore our full range of audio visual and IT integration capabilities."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {solutions.map((sol, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href={sol.href} className="block h-full group">
                  <Card className="h-full p-8 border border-slate-200 shadow-sm group-hover:shadow-lg group-hover:border-blue-200 transition-all bg-white rounded-3xl flex flex-col overflow-hidden">
                    <div className="-mx-8 -mt-8 mb-6 h-48 overflow-hidden bg-slate-900">
                      <SiteImage src={`/images${sol.href.replace(/\/$/, '')}.jpg`} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <sol.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{sol.title}</h3>
                    <p className="text-slate-600 leading-relaxed flex-grow">{sol.desc}</p>
                    <div className="mt-6 flex items-center text-blue-600 font-medium">
                      Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111111] on-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Our engineers specialize in designing bespoke systems tailored to your unique operational requirements and architectural constraints.
            </p>
            <Button size="lg" variant="primary" href="/contact">
                Contact Our Engineering Team
              </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
