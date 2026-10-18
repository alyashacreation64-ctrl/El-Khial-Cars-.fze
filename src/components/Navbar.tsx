import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/dealershipData';

interface NavbarProps {
  onOpenAppointment: (vehicleName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Cars', href: '#inventory' },
    { label: 'Services', href: '#services' },
    { label: 'Journal', href: '#journal' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-amber-400/15 py-3 shadow-2xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex flex-col group whitespace-nowrap shrink-0 text-left"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-serif-luxury text-lg sm:text-xl lg:text-2xl font-bold tracking-widest text-white group-hover:text-amber-300 transition-colors">
                  EL-KHIAL CARS
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono px-1 sm:px-1.5 py-0.5 rounded border border-amber-400/40 text-amber-300">
                  .FZE
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-amber-400/80 tracking-widest font-sans font-medium">
                {DEALERSHIP_INFO.arabicName} · DUBAI
              </span>
            </a>

            {/* Zone 2: Navigation Links (Responsive for Tablet & Computer) */}
            <nav className="hidden md:flex items-center gap-2.5 lg:gap-5 xl:gap-7 text-xs lg:text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 relative py-1 group px-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-3 shrink-0">
              <a
                href={DEALERSHIP_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp Concierge"
                className="p-1.5 sm:p-2 text-slate-300 hover:text-emerald-400 transition-colors rounded-lg border border-slate-800 hover:border-emerald-500/40 bg-slate-900/60"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <button
                type="button"
                onClick={() => onOpenAppointment()}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Book Appointment</span>
                <span className="md:hidden">Book</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={DEALERSHIP_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-400 border border-emerald-500/30 rounded-lg bg-emerald-950/20"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white border border-slate-800 rounded-lg bg-slate-900/80"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-amber-300" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="pb-4 border-b border-slate-800">
              <div className="text-lg font-serif-luxury font-bold text-white tracking-wider">
                EL-KHIAL CARS .FZE
              </div>
              <div className="text-xs text-amber-400">{DEALERSHIP_INFO.arabicName} · Ras Al Khor, Dubai</div>
            </div>
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-slate-200 hover:text-amber-300 transition-colors py-2 border-b border-slate-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3 text-center text-sm uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Private Viewing
            </button>
            <a
              href={DEALERSHIP_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-semibold text-white bg-emerald-600/20 border border-emerald-500/40 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Direct Concierge
            </a>
            <a
              href={`tel:${DEALERSHIP_INFO.phoneTel}`}
              className="w-full py-2.5 text-center text-xs text-slate-400 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Showroom: {DEALERSHIP_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
