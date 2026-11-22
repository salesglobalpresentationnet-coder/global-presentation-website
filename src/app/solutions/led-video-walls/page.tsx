import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import SiteImage from '@/components/ui/SiteImage';

export const metadata: Metadata = {
  title: 'LED & Video Wall Solutions | Global Presentation',
  description: 'Seamless large-scale visualization with fine-pitch LED and LCD video wall technologies.',
};

const products = [{'title': 'Fine-pitch LED', 'desc': 'Ultra-high resolution LED for up-close viewing in corporate spaces.'}, {'title': 'Indoor LED Walls', 'desc': 'High brightness and contrast displays for ambient light environments.'}, {'title': 'Outdoor LED Displays', 'desc': 'Weather-rated, high-brightness LED for outdoor digital signage.'}, {'title': 'LCD Video Walls', 'desc': 'Ultra-narrow bezel LCD configurations for cost-effective large displays.'}, {'title': 'Command-centre Walls', 'desc': 'Mission-critical visualization for 24/7 monitoring applications.'}, {'title': 'Control-room Displays', 'desc': 'Reliable data visualization with advanced processing capabilities.'}];
const applications = ['Command and Control Centers', 'Corporate Briefing Rooms', 'Broadcast Studios', 'Retail Flagships', 'Stadiums and Arenas'];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black on-dark pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SiteImage src="/images/solutions/led-video-walls.jpg" alt="" priority className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">Solutions / LED & Video Wall Solutions</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              LED & Video Wall Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
              Seamless large-scale visualization with fine-pitch LED and LCD video wall technologies.
            </p>
            <Button size="lg" href="/contact">
                Discuss Your Requirements <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">Comprehensive LED & Video Wall Solutions</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At Global Presentation, we understand that every organization has unique needs when it comes to technology integration. Our led & video wall solutions are designed to provide scalable, reliable, and high-performance results tailored to your exact specifications.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By leveraging state-of-the-art technology and our extensive industry expertise, we deliver solutions that enhance collaboration, improve operational efficiency, and create engaging experiences for users across various environments.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      
      <section className="py-20 bg-black on-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center mb-12">Video Wall Ecosystem</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center items-center">
               <div className="p-4 bg-[#111111] on-dark rounded-2xl border border-slate-700">Sources</div>
               <div className="hidden lg:block text-slate-500"><ArrowRight className="mx-auto" /></div>
               <div className="p-4 bg-[#111111] on-dark rounded-2xl border border-slate-700">Processor</div>
               <div className="hidden lg:block text-slate-500"><ArrowRight className="mx-auto" /></div>
               <div className="p-4 bg-[#111111] on-dark rounded-2xl border border-slate-700">Controller</div>
               <div className="hidden lg:block text-slate-500"><ArrowRight className="mx-auto" /></div>
               <div className="p-4 bg-[#1428A0] rounded-2xl font-semibold text-white shadow-lg">Display Panels</div>
            </div>
          </ScrollReveal>
        </div>
      </section>
         

      {/* Solutions Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Capabilities" 
            subtitle="Explore our comprehensive range of products and services designed to meet your specific requirements."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {products.map((product, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="h-full p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-3xl">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{product.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{product.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                Where We Make an Impact
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our led & video wall solutions are deployed across a wide range of industries and environments, delivering unparalleled performance and reliability where it matters most.
              </p>
              <ul className="space-y-4">
                {applications.map((app, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{app}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl aspect-square overflow-hidden bg-slate-100 shadow-lg">
                <SiteImage src="/images/solutions/led-video-walls.jpg" alt="led video walls application illustration" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111111] on-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Contact our team of experts today to discuss your project requirements and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="primary" href="/contact">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" href="/solutions">
                Explore All Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
