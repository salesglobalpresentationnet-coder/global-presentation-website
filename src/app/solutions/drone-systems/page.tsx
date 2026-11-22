import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import SiteImage from '@/components/ui/SiteImage';

export const metadata: Metadata = {
  title: 'Drone Systems | Global Presentation',
  description: 'Professional UAV and aerial surveillance solutions for defence and security environments.',
};

const capabilities = [
    ['UAV Platforms', 'Professional drone platforms for observation and aerial mission support.'],
    ['Ground Control', 'Operator-facing control interfaces and display connectivity.'],
    ['Video & Data', 'Clear presentation of aerial video and mission information.'],
    ['Command Integration', 'Display and AV integration for centralized operational awareness.'],
    ['Secure Presentation', 'Structured briefing and monitoring environments for sensitive operations.'],
    ['System Commissioning', 'Deployment, configuration and commissioning of integrated AV components.']
];
const applications = ['Defence Facilities', 'Security Perimeters', 'Critical Infrastructure', 'Remote Inspection', 'Command & Briefing Environments'];

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-black on-dark pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <SiteImage src="/images/defence/drone-systems.jpg" alt="Drone Systems" priority className="absolute inset-0 w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">Solutions / Defence Technology</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">Drone Systems</h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">Professional UAV and aerial surveillance solutions for defence and security environments.</p>
            <Button size="lg" href="/contact">Discuss Your Requirements</Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Professional Drone Systems</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Drone systems can support aerial observation, situational awareness and remote inspection across complex environments. Global Presentation can integrate the supporting display, communications and command interfaces required to present mission information clearly.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Capabilities" subtitle="Professional technology components and AV integration capabilities" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {capabilities.map((item, i) => (
              <ScrollReveal key={item[0]} delay={i * 0.08}>
                <Card className="h-full p-8 border border-slate-200 bg-white rounded-3xl">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item[0]}</h3>
                  <p className="text-slate-600 leading-relaxed">{item[1]}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Typical Environments</h2>
              <ul className="space-y-4">
                {applications.map((app) => (
                  <li key={app} className="flex items-center text-lg text-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-black mr-4 flex-shrink-0" />{app}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/3]">
                <SiteImage src="/images/defence/drone-systems.jpg" alt="Drone Systems installation" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111111] on-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">Plan Your Defence Technology Environment</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">Talk to our team about the display, command-room, monitoring and AV integration requirements for your site.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="primary" href="/contact">Contact Our Team</Button>
              <Button size="lg" variant="outline" href="/solutions">Explore All Solutions</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
