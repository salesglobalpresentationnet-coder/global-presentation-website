'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Phone, Mail, MapPin, MessageCircle, Linkedin, ExternalLink } from 'lucide-react';

const contact = {
  phones: [
    { label: '+91 7412078084', href: 'tel:+917412078084' },
    { label: '+91 9829070166', href: 'tel:+919829070166' },
    { label: '+91 7690835934', href: 'tel:+917690835934' },
    { label: '+91 9314448615', href: 'tel:+919314448615' },
  ],
  whatsappHref: 'https://wa.me/917412078084',
  emails: [
    { label: 'infoglobalpresentation@gmail.com', href: 'mailto:infoglobalpresentation@gmail.com' },
    { label: 'globalpresentation@gmail.com', href: 'mailto:globalpresentation@gmail.com' },
    { label: 'accsglobalpresentation@gmail.com', href: 'mailto:accsglobalpresentation@gmail.com' },
    { label: 'rahul@globalpresentation.net', href: 'mailto:rahul@globalpresentation.net' },
  ],
  linkedin: 'https://lnkd.in/p/dbKsSW3v',
  x: 'https://x.com/GlobalPresentPL', instagram: 'https://www.instagram.com/globalpresentation/', youtube: 'https://www.youtube.com/@globalpresentation', reddit: 'https://www.reddit.com/user/global_presentation_/',
  address: 'Unit No. A-512, Chordias Kosmos, Block-A, Plot No. E-05, Vil-Badarwas, Jaipur, Rajasthan - 302019, India',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Unit%20No.%20A-512%2C%20Chordias%20Kosmos%2C%20Block-A%2C%20Plot%20No.%20E-05%2C%20Vil-Badarwas%2C%20Jaipur%2C%20Rajasthan%20-%20302019%2C%20India',
};

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">Global Presentation Pvt. Ltd.</p>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Speak with our team for professional AV, display, signage and integrated technology solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ScrollReveal>
              <Card className="p-7 bg-white shadow-lg border-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#1428A0]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#1428A0]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Get in touch</p>
                    <h2 className="text-xl font-bold text-slate-900">Contact Details</h2>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#1428A0] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <div className="mt-1 space-y-1">
                        {contact.phones.map((phone) => (
                          <a key={phone.label} href={phone.href} className="block text-slate-600 hover:text-[#1428A0]">
                            {phone.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                    <MessageCircle className="w-5 h-5 text-[#1428A0] mt-0.5 shrink-0" />
                    <span>
                      <span className="block font-semibold text-slate-900 group-hover:text-[#1428A0]">WhatsApp</span>
                      <span className="block text-slate-600 mt-0.5">Chat with our team</span>
                    </span>
                  </a>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#1428A0] mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900">Email</p>
                      <div className="mt-1 space-y-1">
                        {contact.emails.map((email) => (
                          <a key={email.label} href={email.href} className="block text-slate-600 hover:text-[#1428A0] break-all">
                            {email.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                    <Linkedin className="w-5 h-5 text-[#1428A0] mt-0.5 shrink-0" />
                    <span>
                      <span className="block font-semibold text-slate-900 group-hover:text-[#1428A0]">LinkedIn</span>
                      <span className="block text-slate-600 mt-0.5">Global Presentation</span>
                    </span>
                  </a>
                  <div className="flex flex-wrap gap-3 pl-9 text-sm font-semibold">
                    <a href={contact.x} target="_blank" rel="noopener noreferrer" className="text-[#1428A0] hover:underline">X</a>
                    <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-[#1428A0] hover:underline">Instagram</a>
                    <a href={contact.youtube} target="_blank" rel="noopener noreferrer" className="text-[#1428A0] hover:underline">YouTube</a>
                    <a href={contact.reddit} target="_blank" rel="noopener noreferrer" className="text-[#1428A0] hover:underline">Reddit</a>
                  </div>

                  <div className="flex items-start gap-4 pt-1">
                    <MapPin className="w-5 h-5 text-[#1428A0] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Office Address</p>
                      <p className="text-slate-600 leading-relaxed mt-1">{contact.address}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white hover:bg-neutral-800 transition-colors"
                >
                  Open in Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Card>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal delay={0.2}>
              <Card className="p-8 bg-white shadow-lg border-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                <p className="text-slate-500 mb-6">Tell us what you need and our team will get back to you.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <input type="text" id="name" required className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1428A0]/20 focus:border-[#1428A0]" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="org" className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
                      <input type="text" id="org" required className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1428A0]/20 focus:border-[#1428A0]" placeholder="Company / Institution" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input type="email" id="email" required className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1428A0]/20 focus:border-[#1428A0]" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                      <input type="tel" id="phone" required className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1428A0]/20 focus:border-[#1428A0]" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Requirement</label>
                    <select id="subject" className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1428A0]/20 focus:border-[#1428A0]">
                      <option>General Inquiry</option>
                      <option>AV Solutions</option>
                      <option>Display / LED / Signage</option>
                      <option>Video Conferencing / Boardroom</option>
                      <option>Smart Classroom</option>
                      <option>Control Room</option>
                      <option>Project Consultation</option>
                      <option>Support &amp; Maintenance</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea id="message" rows={5} required className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1428A0]/20 focus:border-[#1428A0]" placeholder="Tell us about your requirement..."></textarea>
                  </div>
                  <Button type="submit" variant="primary" size="lg">Send Message</Button>
                </form>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="p-8 bg-slate-950 text-white shadow-lg border-0 overflow-hidden relative">
                <div className="absolute inset-0 opacity-25 bg-[url('/images/backgrounds/corporate-av-showcase.jpg')] bg-cover bg-center" />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-300 font-bold mb-3">Visit our office</p>
                  <h3 className="text-2xl font-bold mb-3">Global Presentation Pvt. Ltd.</h3>
                  <p className="text-slate-300 leading-relaxed max-w-2xl">{contact.address}</p>
                  <a
                    href={contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black hover:bg-slate-100 transition-colors"
                  >
                    Get directions <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
