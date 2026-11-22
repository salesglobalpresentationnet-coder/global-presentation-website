import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

const footerSolutions = [
  { name: 'Audio Visual Solutions', href: '/solutions/audio-visual/' },
  { name: 'Display Solutions', href: '/solutions/display-solutions/' },
  { name: 'LED & Video Walls', href: '/solutions/led-video-walls/' },
  { name: 'Digital Signage', href: '/solutions/digital-signage/' },
  { name: 'Video Conferencing', href: '/solutions/video-conferencing/' },
  { name: 'Smart Classroom', href: '/solutions/smart-classroom/' },
  { name: 'Boardroom Solutions', href: '/solutions/boardroom-solutions/' },
  { name: 'Interactive Displays', href: '/solutions/interactive-displays/' },
  { name: 'AV Integration', href: '/solutions/av-integration/' },
];

const footerCompany = [
  { name: 'About Us', href: '/about/' },
  { name: 'Projects', href: '/projects/' },
  { name: 'Industries', href: '/industries/' },
  { name: 'Services', href: '/services/' },
  { name: 'Contact', href: '/contact/' },
];

const footerIndustries = [
  'Government',
  'Defence',
  'Police & Security',
  'Education',
  'Corporate',
  'Institutional',
  'Control Rooms',
  'Healthcare',
  'Hospitality',
];

const linkClass = 'text-sm text-slate-700 hover:text-black hover:underline underline-offset-4 transition-colors';
const headingClass = 'text-sm font-bold text-black mb-5';

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-black">
      {/* Main Footer */}
      <div className="container-xl py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <Image
              src="/images/brand/global-presentation-logo.png"
              alt="Global Presentation — Professional AV & Display Solutions"
              width={1254}
              height={1254}
              className="w-[190px] h-auto object-contain mb-5"
            />
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Professional Audio Visual, Display and Signage solutions for
              education, institutional and enterprise environments.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-black mt-0.5 shrink-0" />
                <span className="text-slate-700 leading-relaxed">Unit No. A-512, Chordias Kosmos, Block-A, Plot No. E-05, Vil-Badarwas, Jaipur, Rajasthan - 302019, India</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+917412078084" className="block text-slate-700 hover:text-black">+91 7412078084</a>
                  <a href="tel:+919829070166" className="block text-slate-700 hover:text-black">+91 9829070166</a>
                  <a href="tel:+917690835934" className="block text-slate-700 hover:text-black">+91 7690835934</a>
                  <a href="tel:+919314448615" className="block text-slate-700 hover:text-black">+91 9314448615</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0">
                  <a href="mailto:infoglobalpresentation@gmail.com" className="block text-slate-700 hover:text-black break-all">infoglobalpresentation@gmail.com</a>
                  <a href="mailto:globalpresentation@gmail.com" className="block text-slate-700 hover:text-black break-all">globalpresentation@gmail.com</a>
                  <a href="mailto:accsglobalpresentation@gmail.com" className="block text-slate-700 hover:text-black break-all">accsglobalpresentation@gmail.com</a>
                  <a href="mailto:rahul@globalpresentation.net" className="block text-slate-700 hover:text-black break-all">rahul@globalpresentation.net</a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5 text-sm font-semibold text-slate-700">
              <a href="https://lnkd.in/p/dbKsSW3v" target="_blank" rel="noreferrer" className="hover:text-black hover:underline underline-offset-4">LinkedIn</a>
              <a href="https://x.com/GlobalPresentPL" target="_blank" rel="noreferrer" className="hover:text-black hover:underline underline-offset-4">X</a>
              <a href="https://www.instagram.com/globalpresentation/" target="_blank" rel="noreferrer" className="hover:text-black hover:underline underline-offset-4">Instagram</a>
              <a href="https://www.youtube.com/@globalpresentation" target="_blank" rel="noreferrer" className="hover:text-black hover:underline underline-offset-4">YouTube</a>
              <a href="https://www.reddit.com/user/global_presentation_/" target="_blank" rel="noreferrer" className="hover:text-black hover:underline underline-offset-4">Reddit</a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className={headingClass}>Solutions</h4>
            <ul className="space-y-3">
              {footerSolutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={linkClass}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={headingClass}>Company</h4>
            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={linkClass}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className={headingClass}>Industries</h4>
            <ul className="space-y-3">
              {footerIndustries.map((industry) => (
                <li key={industry}>
                  <Link href="/industries/" className={linkClass}>
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-300">
        <div className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            Copyright &copy; {new Date().getFullYear()} Global Presentation. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <Link href="/about/" className="hover:text-black hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/about/" className="hover:text-black hover:underline underline-offset-4">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
