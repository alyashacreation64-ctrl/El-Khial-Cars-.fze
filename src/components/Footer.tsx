import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ArrowUp, Star } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/dealershipData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A10] border-t border-amber-400/15 pt-16 pb-24 sm:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-luxury text-xl font-bold tracking-widest text-white">
                EL-KHIAL CARS
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-amber-400/40 text-amber-300">
                .FZE
              </span>
            </div>
            <p className="text-sm text-amber-300 font-sans">
              {DEALERSHIP_INFO.arabicName}
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Dubai’s premier destination for executive automobiles, luxury sports cars, worldwide export services, and VIP showroom viewings in Ras Al Khor.
            </p>
            <div className="flex items-center gap-2 text-slate-300 pt-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-white">4.4 / 5.0 Google Rating</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">7 Verified Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#inventory" className="hover:text-amber-300 transition-colors">Luxury Collection</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">Export & Services</a>
              </li>
              <li>
                <a href="#journal" className="hover:text-amber-300 transition-colors">Automotive Journal</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-300 transition-colors">Google Reviews</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-300 transition-colors">Showroom FAQs</a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-amber-300 transition-colors">Book Viewing</a>
              </li>
            </ul>
          </div>

          {/* Business & Location Details */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Dubai Dealership Hub
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{DEALERSHIP_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${DEALERSHIP_INFO.phoneTel}`} className="hover:text-amber-300 font-mono">
                  {DEALERSHIP_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={DEALERSHIP_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 font-mono text-emerald-400">
                  WhatsApp: +971 54 366 9272
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{DEALERSHIP_INFO.hoursWeekday} ({DEALERSHIP_INFO.hoursSunday})</span>
              </p>
            </div>
          </div>

        </div>

        {/* Legal notice & bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {DEALERSHIP_INFO.name} ({DEALERSHIP_INFO.arabicName}). All rights reserved. Registered automotive trading entity in Dubai, UAE.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
