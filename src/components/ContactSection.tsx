import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Star, ExternalLink, Mail, Navigation, Building } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/dealershipData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0B0F17] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              VISIT OUR DUBAI SHOWROOM
            </span>
            <span className="w-5 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white mb-3">
            Contact & Location
          </h2>
          <p className="text-sm text-slate-400 font-sans max-w-xl mx-auto">
            Conveniently situated in Ras Al Khor Industrial Area 3, Dubai Auto Zone. We welcome private visits, international trade inquiries, and VIP consultations.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0E1524] border border-amber-400/20 shadow-xl space-y-6">
            <div>
              {/* Business Identification */}
              <div className="pb-5 border-b border-slate-800">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                  Official Entity
                </span>
                <h3 className="text-2xl font-bold font-serif-luxury text-white mt-1">
                  {DEALERSHIP_INFO.name}
                </h3>
                <p className="text-base text-amber-300 font-medium font-sans mt-0.5">
                  {DEALERSHIP_INFO.arabicName}
                </p>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {DEALERSHIP_INFO.industry}
                </p>
              </div>

              {/* Information Rows */}
              <div className="space-y-4 pt-4">
                
                {/* Address */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono uppercase">Showroom Address</span>
                    <span className="text-slate-200 font-medium leading-relaxed">
                      {DEALERSHIP_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono uppercase">Direct Phone Line</span>
                    <a
                      href={`tel:${DEALERSHIP_INFO.phoneTel}`}
                      className="text-amber-300 hover:text-amber-200 font-bold transition-colors font-mono tracking-wide"
                    >
                      {DEALERSHIP_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono uppercase">WhatsApp Concierge</span>
                    <a
                      href={DEALERSHIP_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors font-mono"
                    >
                      +971 54 366 9272
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono uppercase">Working Hours</span>
                    <div className="text-slate-200 font-medium">
                      <p>{DEALERSHIP_INFO.hoursWeekday}</p>
                      <p className="text-amber-400/90 font-mono text-xs">{DEALERSHIP_INFO.hoursSunday}</p>
                    </div>
                  </div>
                </div>

                {/* Google Verified Rating */}
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono uppercase">Verified Reputation</span>
                    <span className="text-slate-200 font-semibold">
                      {DEALERSHIP_INFO.rating} from {DEALERSHIP_INFO.reviewCount}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <a
                href={DEALERSHIP_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <a
                href={`tel:${DEALERSHIP_INFO.phoneTel}`}
                className="w-full py-2.5 text-center text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Showroom ({DEALERSHIP_INFO.phone})</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed + Fallback */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0E1524] border border-amber-400/20 shadow-xl overflow-hidden flex flex-col justify-between">
            {/* Map Top Bar */}
            <div className="px-5 py-3 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">Ras Al Khor Industrial Area 3</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ras+Al+Khor+Industrial+Area+3+Dubai+Auto+Zone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1 font-mono"
              >
                <span>Open Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Map Frame */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-950">
              <iframe
                title="El-Khial Cars .fze Location Map"
                src="https://maps.google.com/maps?q=Ras%20Al%20Khor%20Industrial%20Area%203,%20Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.15) brightness(0.85)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Fallback link overlay in case user's browser blocks iframe */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md p-3 rounded-xl border border-amber-400/20 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-white">Dubai Auto Zone (DAZ)</p>
                  <p className="text-[11px] text-slate-400">Ras Al Khor Industrial Area 3, Dubai, UAE</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ras+Al+Khor+Industrial+Area+3+Dubai+Auto+Zone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-amber-400 text-black font-bold text-xs shrink-0 flex items-center gap-1.5 hover:brightness-110"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Map footer note */}
            <div className="p-4 bg-slate-900/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Showroom viewings available by appointment or walk-in during opening hours.</span>
              <span className="font-mono text-amber-300">Mon–Sat: 10AM–8PM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
