'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string; description: string }[];
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavItem[];
}

export default function MobileNav({ isOpen, onClose, navigation }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 overflow-y-auto"
          >
            <div className="p-5">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Image
                  src="/images/brand/global-presentation-lockup.png"
                  alt="Global Presentation"
                  width={800}
                  height={220}
                  className="h-[68px] w-auto max-w-[210px] object-contain"
                />
                <button
                  onClick={onClose}
                  className="p-2 text-slate-500 hover:text-slate-700"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setExpandedItem(
                              expandedItem === item.name ? null : item.name
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-3.5 text-lg font-bold text-black hover:bg-slate-100 rounded-2xl transition-colors"
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              expandedItem === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedItem === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-1 pb-2">
                                <Link
                                  href={item.href}
                                  onClick={onClose}
                                  className="block px-4 py-2 text-sm font-bold text-accent hover:bg-accent-50 rounded-2xl transition-colors"
                                >
                                  View All {item.name}
                                </Link>
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    onClick={onClose}
                                    className="block px-4 py-2 text-sm text-slate-700 hover:text-black hover:bg-slate-100 rounded-2xl transition-colors"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block px-4 py-3.5 text-lg font-bold text-black hover:bg-slate-100 rounded-2xl transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Contact */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-2">Contact Us</p>
                <div className="space-y-1.5">
                  {[
                    ['+91 7412078084', 'tel:+917412078084'],
                    ['+91 9829070166', 'tel:+919829070166'],
                    ['+91 7690835934', 'tel:+917690835934'],
                    ['+91 9314448615', 'tel:+919314448615'],
                  ].map(([label, href]) => (
                    <a key={href} href={href} className="block text-sm text-slate-700 font-medium hover:text-accent py-0.5">
                      📞 {label}
                    </a>
                  ))}
                </div>
                <div className="mt-3 space-y-1.5">
                  {[
                    ['infoglobalpresentation@gmail.com', 'mailto:infoglobalpresentation@gmail.com'],
                    ['globalpresentation@gmail.com', 'mailto:globalpresentation@gmail.com'],
                    ['accsglobalpresentation@gmail.com', 'mailto:accsglobalpresentation@gmail.com'],
                    ['rahul@globalpresentation.net', 'mailto:rahul@globalpresentation.net'],
                  ].map(([label, href]) => (
                    <a key={href} href={href} className="block text-sm text-slate-700 font-medium hover:text-accent py-0.5 break-all">
                      ✉️ {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
