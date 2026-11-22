import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import { Target, MapPin, Building, Flag, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SiteImage from '@/components/ui/SiteImage';

export const metadata: Metadata = {
  title: 'About Us | Global Presentation',
  description: 'Learn about Global Presentation, with 20+ years of experience delivering professional Audio Visual, Display, Digital Signage, Collaboration and AV Integration solutions from Jaipur to organizations across India.',
};

export default function AboutPage() {
  const capabilities = [
    'Professional Audio Visual and Display Systems',
    'LED Displays, Video Walls and Digital Signage',
    'Video Conferencing and Collaboration Solutions',
    'Smart Classrooms and Boardroom Systems',
    'AV Planning, Integration, Installation and Commissioning',
    'Drone and UAV Technology Solutions',
  ];

  const historicalExperience = [
    'MoD',
    'Indian Army',
    'DRDO',
    'Airport',
    'BSF',
    'NPCIL',
    'Atomic Research',
    'AAI',
    'Central University',
    'MNIT',
    'BITS',
    'IITs',
    'DOIT',
  ];

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

  const highlights = [
    { title: 'Curved LED Video Wall Installation', file: 'curved-led-wall-flag.jpg', alt: 'Curved large-format LED video wall displaying the Indian tricolour in an auditorium' },
    { title: 'Drone Technology', file: 'drone-technology.jpg', alt: 'Drone system in an outdoor operational environment' },
    { title: 'Samsung Partner Event', file: 'samsung-partner-event.jpg', alt: 'Global Presentation representative at a Samsung partner event' },
  ];

  const lifecycleSteps = [
    { title: 'Requirement', description: 'Understanding the application, site conditions and technical requirements.' },
    { title: 'Planning', description: 'Recommending suitable products and planning how the systems will work together.' },
    { title: 'Procurement', description: 'Coordinating the supply of the selected equipment and components.' },
    { title: 'Integration', description: 'Bringing the different AV and display components together as a working system.' },
    { title: 'Installation', description: 'Coordinating installation and commissioning at the project site.' },
    { title: 'Support', description: 'Providing assistance for the supplied and integrated solutions.' },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-slate-50">
      {/* About hero uses the same background image as the home page */}
      <section className="relative overflow-hidden bg-black text-white py-20 lg:py-28 on-dark">
        <SiteImage src="/images/hero/home-hero.jpg" alt="Professional audio visual and display technology environment" priority className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75 mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
              About Global Presentation
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 max-w-3xl leading-relaxed">
              20+ years of experience delivering professional Audio Visual, Display, Digital Signage, Collaboration and AV Integration solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are and the three original photographs supplied by the company */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto">
              <SectionHeader
                title="Who We Are"
                subtitle="A Legacy of Technical Excellence"
                centered={false}
                className="mb-4"
              />
              <div className="text-base sm:text-lg text-slate-600 mt-0 space-y-4 leading-relaxed">
                <p>
                  With 20+ years of experience, Global Presentation provides professional Audio Visual, Display, Digital Signage, Collaboration and AV Integration solutions from Jaipur to organizations across India. Our work spans corporate, government, defence, education, healthcare and institutional environments.
                </p>
                <p>
                  We go beyond equipment supply. We help customers identify the right technology, coordinate the components, and integrate systems into practical, dependable solutions tailored to each space and requirement.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800">20+ Years of Experience</span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800">Jaipur to Organizations Across India</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-10 lg:mt-12">
            <ScrollReveal>
              <div className="flex items-end justify-between gap-4 mb-5">
                <div>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#1428A0] mb-2">Our Work & Experience</p>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">A Closer Look at Our Work</h2>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {highlights.map((item, index) => (
                <ScrollReveal key={item.file} delay={index * 0.08}>
                  <figure className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                    <div className="aspect-[16/9] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                      <SiteImage
                        src={`/images/about/${item.file}`}
                        alt={item.alt}
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                    <figcaption className="px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base font-semibold text-slate-900">
                      {item.title}
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise and Historical Experience */}
      <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              title="Our Expertise & Experience"
              subtitle="Professional technology solutions for organizations and institutions"
              centered
              className="mb-10 lg:mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-7 sm:p-8 rounded-3xl shadow-sm h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-[#1428A0]" /> Our Core Capabilities
                </h3>
                <ul className="space-y-4">
                  {capabilities.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#1428A0] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-[#111111] p-7 sm:p-8 rounded-3xl shadow-sm h-full text-white">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <Flag className="w-6 h-6 mr-3 text-blue-400" /> Historical Experience
                </h3>
                <p className="text-slate-300 mb-6">
                  Selected organizations and institutions where Global Presentation has undertaken work and installations.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {historicalExperience.map((client) => (
                    <div key={client} className="bg-white/10 border border-white/10 px-3 py-3 rounded-xl text-sm font-medium text-slate-100 text-center">
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Organizations with the photographs supplied for the website */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-black on-dark text-white">
        <SiteImage src="/images/backgrounds/corporate-av-showcase.jpg" alt="Professional AV technology environment" className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <SectionHeader
              title="Organizations We’ve Worked With"
              subtitle="Selected installations across defence, aviation, research, education and public-sector environments"
              centered
              light
              className="mb-10 lg:mb-12"
            />
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {organizations.map((organization, idx) => (
              <ScrollReveal key={organization.name} delay={idx * 0.035}>
                <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm hover:bg-white/[0.10] transition-all duration-300">
                  <div className="aspect-[1.45] overflow-hidden bg-slate-950">
                    <img src={`/images/organizations/${organization.file}`} alt={`${organization.name} project photograph`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                  </div>
                  <div className="px-3 py-3 text-center">
                    <p className="text-sm font-semibold text-white">{organization.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-end project approach */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              title="Our Approach"
              subtitle="From project planning and procurement to installation and commissioning"
              centered
              className="mb-10 lg:mb-12"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {lifecycleSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.07}>
                <Card className="p-7 h-full border-slate-200 hover:border-[#1428A0] transition-colors relative">
                  <div className="absolute top-0 right-0 p-4 text-6xl font-black text-slate-50 opacity-70 select-none">0{index + 1}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{step.title}</h3>
                  <p className="text-slate-600 relative z-10">{step.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Markets served */}
      <section className="py-16 lg:py-20 bg-black on-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              title="Markets Served"
              subtitle="Technology solutions across diverse professional environments"
              centered
              light
              className="mb-10 lg:mb-12"
            />
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {['Government', 'Defence', 'Corporate', 'Education', 'Healthcare', 'Institutional', 'Aviation', 'Research', 'Control Rooms'].map((market, i) => (
              <ScrollReveal key={market} delay={i * 0.05}>
                <span className="px-5 py-3 bg-[#111111] border border-slate-700 rounded-full text-slate-300 font-medium hover:bg-[#1428A0] hover:text-white transition-colors cursor-default">
                  {market}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20 bg-[#1428A0] text-white on-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-5">Ready to Discuss Your Project?</h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Contact Global Presentation to discuss your AV, display, collaboration or technology requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">Contact Us <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
              <Link href="/projects/">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">View Projects</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
