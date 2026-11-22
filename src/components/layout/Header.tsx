'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, MessageCircle } from 'lucide-react';
import MobileNav from './MobileNav';

const solutionsMenu = [
  { name: 'Audio Visual Solutions', href: '/solutions/audio-visual/', description: 'Professional AV systems' },
  { name: 'Display Solutions', href: '/solutions/display-solutions/', description: 'LED, LCD & LFD displays' },
  { name: 'LED & Video Walls', href: '/solutions/led-video-walls/', description: 'Indoor & outdoor video walls' },
  { name: 'Digital Signage', href: '/solutions/digital-signage/', description: 'Dynamic information displays' },
  { name: 'Video Conferencing', href: '/solutions/video-conferencing/', description: 'Conference & collaboration' },
  { name: 'Smart Classroom', href: '/solutions/smart-classroom/', description: 'Interactive education tech' },
  { name: 'Boardroom Solutions', href: '/solutions/boardroom-solutions/', description: 'Executive meeting rooms' },
  { name: 'Interactive Displays', href: '/solutions/interactive-displays/', description: 'Touch & collaboration' },
  { name: 'Control Room Solutions', href: '/solutions/control-room/', description: 'Command & monitoring' },
  { name: 'Drone Systems', href: '/solutions/drone-systems/', description: 'UAV & aerial surveillance' },
  { name: 'Anti-Drone Systems', href: '/solutions/anti-drone/', description: 'Counter-UAS detection' },
  { name: 'Radar & Surveillance', href: '/solutions/radar-surveillance/', description: 'Detection & monitoring' },
  { name: 'AV Integration', href: '/solutions/av-integration/', description: 'End-to-end integration' },
];

const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about/' },
  { name: 'Solutions', href: '/solutions/', children: solutionsMenu },
  { name: 'Industries', href: '/industries/' },
  { name: 'Projects', href: '/projects/' },
  { name: 'Services', href: '/services/' },
  { name: 'Contact', href: '/contact/' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main header — Samsung style: clean white bar, bold black nav, full-width mega menu */}
      <header
        className={cn(
          'sticky top-0 z-50 bg-white transition-shadow duration-300',
          scrolled ? 'shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : 'border-b border-slate-200'
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Company logo */}
            <Link href="/" className="flex items-center shrink-0" aria-label="Global Presentation home">
              <Image
                src="/images/brand/global-presentation-lockup.png"
                alt="Global Presentation — Professional AV & Display Solutions"
                width={800}
                height={220}
                priority
                className="h-[82px] w-auto max-w-[185px] object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Main">
              {mainNav.map((item) => (
                <div
                  key={item.name}
                  onMouseEnter={() => setActiveDropdown(item.children ? item.name : null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-[15px] font-bold whitespace-nowrap text-black rounded-full hover:bg-slate-100 transition-colors',
                      activeDropdown === item.name && 'bg-slate-100'
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform',
                          activeDropdown === item.name && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>

                  {/* Mega menu (full width, anchored to header) */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute left-0 right-0 top-full bg-white border-t border-slate-200 shadow-[0_16px_32px_rgba(0,0,0,0.10)]">
                      <div className="container-xl py-8">
                        <div className="flex gap-12">
                          <div className="w-56 shrink-0">
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                              {item.name}
                            </p>
                            <Link
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="inline-flex items-center rounded-full bg-black text-white text-sm font-bold px-5 py-2.5 hover:bg-neutral-700 transition-colors"
                            >
                              Explore all
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-1 flex-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex flex-col py-2.5"
                              >
                                <span className="text-[15px] font-bold text-black group-hover:text-accent group-hover:underline underline-offset-4 transition-colors">
                                  {child.name}
                                </span>
                                <span className="text-sm text-slate-500 mt-0.5">
                                  {child.description}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                className="xl:hidden p-2 -mr-2 text-black"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navigation={mainNav}
      />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917412078084"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
