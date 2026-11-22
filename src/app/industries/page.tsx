import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { 
  Building2, ShieldAlert, Shield, GraduationCap, 
  Briefcase, Building, Monitor, Coffee, Stethoscope 
} from 'lucide-react';
import SiteImage from '@/components/ui/SiteImage';

export const metadata: Metadata = {
  title: 'Industries We Serve | Global Presentation',
  description: 'Providing professional AV and integration solutions across Government, Defence, Education, Corporate, and Healthcare sectors.',
};

export default function IndustriesPage() {
  const industries = [
    {
      title: 'Government',
      icon: <Building2 className="w-10 h-10 text-[#1428A0]" />,
      description: 'Government departments, offices, public institutions and administrative environments require highly reliable and secure systems.',
      solutions: ['Conference Systems', 'Public Address', 'Information Displays', 'Secure Networking']
    },
    {
      title: 'Defence',
      icon: <ShieldAlert className="w-10 h-10 text-[#1428A0]" />,
      description: 'Briefing rooms, command environments, monitoring systems and professional AV infrastructure built for mission-critical reliability.',
      solutions: ['Command & Control AV', 'Secure Briefing Rooms', 'Video Walls', 'Drone Systems', 'Anti-Drone Systems', 'Radar & Surveillance']
    },
    {
      title: 'Police & Security',
      icon: <Shield className="w-10 h-10 text-[#1428A0]" />,
      description: 'Operations rooms, briefing rooms, communication environments and display systems for law enforcement operations.',
      solutions: ['Monitoring Displays', 'Operations Centers', 'Briefing Audio', 'Surveillance Integration']
    },
    {
      title: 'Education',
      icon: <GraduationCap className="w-10 h-10 text-[#1428A0]" />,
      description: 'Universities, colleges, schools, training centres, smart classrooms and lecture halls designed for modern pedagogy.',
      solutions: ['Smart Classrooms', 'Interactive Displays', 'Lecture Capture', 'Campus PA Systems']
    },
    {
      title: 'Corporate',
      icon: <Briefcase className="w-10 h-10 text-[#1428A0]" />,
      description: 'Boardrooms, meeting rooms, executive offices, training rooms and collaboration spaces to drive business efficiency.',
      solutions: ['Boardroom AV', 'Video Conferencing', 'Meeting Room Booking', 'Townhall Solutions']
    },
    {
      title: 'Institutional',
      icon: <Building className="w-10 h-10 text-[#1428A0]" />,
      description: 'Large organizations requiring centralized AV, display or communication infrastructure spanning multiple buildings.',
      solutions: ['Centralized AV Management', 'Campus Digital Signage', 'Auditorium AV', 'Background Music']
    },
    {
      title: 'Control Rooms',
      icon: <Monitor className="w-10 h-10 text-[#1428A0]" />,
      description: 'Video walls, monitoring displays, signal processing and centralized viewing environments for 24/7 operations.',
      solutions: ['LED Video Walls', 'KVM Switches', 'Signal Processing', 'Operator Consoles']
    },
    {
      title: 'Hospitality',
      icon: <Coffee className="w-10 h-10 text-[#1428A0]" />,
      description: 'Conference rooms, meeting facilities and presentation environments for hotels and event centers.',
      solutions: ['Banquet AV', 'Background Audio', 'Digital Menus/Signage', 'In-room Tech']
    },
    {
      title: 'Healthcare',
      icon: <Stethoscope className="w-10 h-10 text-[#1428A0]" />,
      description: 'Digital information systems, conference/training rooms and professional displays for modern healthcare facilities.',
      solutions: ['Wayfinding Displays', 'Patient Queue Mgmt', 'Telemedicine AV', 'Training Rooms']
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-black on-dark text-white py-20 lg:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">Industries We Serve</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Delivering specialized, scalable, and secure technology solutions across diverse professional environments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative py-20 lg:py-28 overflow-hidden on-dark">
        <SiteImage src="/images/backgrounds/corporate-av-showcase.jpg" alt="Corporate AV technology environment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/66 to-black/84" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <SectionHeader 
              title="Sector Expertise" 
              subtitle="Tailored technology solutions for complex institutional needs"
              centered={true}
              light
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full flex flex-col p-8 hover:-translate-y-1 transition-transform duration-300 border-white/20 bg-white/95 backdrop-blur-sm overflow-hidden">
                  <div className="-mx-8 -mt-8 mb-6 h-44 overflow-hidden bg-slate-900">
                    <SiteImage src={`/images/industries/${industry.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}.jpg`} alt={industry.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{industry.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Relevant Solutions</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((sol, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#1428A0] rounded-full mr-2"></span>
                          {sol}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="text-[#1428A0] font-semibold hover:text-[#101F80] flex items-center mt-auto">
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Defence Technology Capabilities */}
      <section className="relative py-20 lg:py-28 overflow-hidden on-dark">
        <SiteImage src="/images/backgrounds/corporate-av-showcase.jpg" alt="Professional defence technology environment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/88" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <SectionHeader
              title="Defence Technology Capabilities"
              subtitle="Specialized technologies for surveillance, protection, situational awareness and command environments"
              centered={true}
              light
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Drone Systems', image: '/images/defence/drone-systems.jpg', href: '/solutions/drone-systems/' },
              { title: 'Anti-Drone Systems', image: '/images/defence/anti-drone-system.jpg', href: '/solutions/anti-drone/' },
              { title: 'Radar & Surveillance', image: '/images/defence/radar-surveillance-system.jpg', href: '/solutions/radar-surveillance/' },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <Link href={item.href} className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-sm">
                  <div className="h-56 overflow-hidden">
                    <SiteImage src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-300">Explore the dedicated solution page.</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111] on-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Don't see your sector?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              We provide custom integration services tailored to any complex organizational requirement.
            </p>
            <Link href="/contact" className="inline-block bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-neutral-700 transition-colors">
              Discuss Your Specific Needs
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
