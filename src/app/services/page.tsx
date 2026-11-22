import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import SiteImage from '@/components/ui/SiteImage';
import { Settings, Wrench, CheckCircle, ShieldCheck, LifeBuoy, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services & Support | Global Presentation',
  description: 'Professional installation, integration, commissioning, and ongoing maintenance support for AV and presentation technology.',
};

export default function ServicesPage() {
  const installServices = [
    'Comprehensive site assessment',
    'Equipment unboxing and prep',
    'Display/Projector/LED mounting',
    'AV rack assembly and installation',
    'Structured cabling and termination',
    'Signal testing and verification',
    'Audio/Video precision calibration',
    'System and software configuration',
    'End-to-end integration testing',
    'User operation demonstration',
    'Formal final commissioning'
  ];

  const supportServices = [
    'Post-installation technical support',
    'Remote troubleshooting and diagnostics',
    'Preventive maintenance schedules',
    'Emergency breakdown support',
    'Equipment re-configuration',
    'Routine system health checks',
    'Software/firmware updates',
    'Annual Maintenance Contracts (AMC)'
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-black on-dark text-white py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-[#111111] opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">Services Overview</h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Expert execution from deployment to daily operation. We ensure your technology investments deliver continuous value.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-[#1428A0] text-white py-12 on-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-2xl lg:text-3xl font-medium italic">
              "Technology deployment is only the beginning. We support the systems we deploy."
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <SiteImage src="/images/backgrounds/corporate-av-showcase.jpg" alt="Corporate AV technology environment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/78 via-black/82 to-black/88" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Block 1: Installation & Commissioning */}
            <ScrollReveal>
              <div className="h-full">
                <div className="flex items-center mb-8">
                  <div className="bg-blue-100 p-4 rounded-3xl mr-6">
                    <Settings className="w-8 h-8 text-[#1428A0]" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Installation & Commissioning</h2>
                </div>
                
                <p className="text-lg text-slate-200 mb-8">
                  Our technical teams handle the physical deployment of all hardware, ensuring adherence to safety standards and manufacturer specifications.
                </p>

                <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-xl border-t-4 border-t-[#1428A0]">
                  <ul className="space-y-4">
                    {installServices.map((service, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-800 font-medium">{service}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </ScrollReveal>

            {/* Block 2: Service & Support */}
            <ScrollReveal delay={0.2}>
              <div className="h-full">
                <div className="flex items-center mb-8">
                  <div className="bg-amber-100 p-4 rounded-3xl mr-6">
                    <ShieldCheck className="w-8 h-8 text-amber-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Service & Support</h2>
                </div>
                
                <p className="text-lg text-slate-200 mb-8">
                  To maximize uptime and protect your investment, we offer comprehensive lifecycle support services, from routine checks to emergency interventions.
                </p>

                <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-xl border-t-4 border-t-amber-500">
                  <ul className="space-y-4">
                    {supportServices.map((service, i) => (
                      <li key={i} className="flex items-start">
                        <Activity className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-800 font-medium">{service}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </main>
  );
}
