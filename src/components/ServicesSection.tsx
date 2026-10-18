import React, { useState } from 'react';
import { Globe, Repeat, BadgePercent, ShieldCheck, CheckCircle2, MessageCircle, ChevronRight, X } from 'lucide-react';
import { SERVICES, ServiceItem, DEALERSHIP_INFO } from '../data/dealershipData';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return Globe;
      case 'Repeat':
        return Repeat;
      case 'BadgePercent':
        return BadgePercent;
      case 'ShieldCheck':
      default:
        return ShieldCheck;
    }
  };

  const getWhatsAppServiceUrl = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Hello El-Khial Cars team, I would like to inquire about your ${service.title} from your Dubai Auto Zone showroom.`
    );
    return `${DEALERSHIP_INFO.whatsappUrl}?text=${text}`;
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#070A10] relative border-t border-slate-900">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              EXECUTIVE AUTOMOTIVE SOLUTIONS
            </span>
            <span className="w-5 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white mb-4">
            Tailored Dealership Services
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            From seamless worldwide export shipping and accurate trade valuations to meticulous VIP multi-point inspections in Ras Al Khor.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-[#0E1524] border border-amber-400/20 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-950/20"
              >
                <div>
                  {/* Icon badge */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/5 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-5 group-hover:scale-110 group-hover:border-amber-400 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-serif-luxury mb-3 group-hover:text-amber-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors text-center"
                  >
                    View Details
                  </button>
                  <a
                    href={getWhatsAppServiceUrl(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/40 rounded-lg bg-slate-900 transition-colors"
                    title="Inquire via WhatsApp"
                    aria-label={`Inquire about ${service.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-xl bg-[#0E1524] border border-amber-400/40 rounded-2xl shadow-2xl p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Close service modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300">
                {React.createElement(getIcon(selectedService.icon), { className: 'w-6 h-6' })}
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-amber-400">Dealership Service</span>
                <h3 className="text-xl font-bold font-serif-luxury text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
              {selectedService.longDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-amber-300 mb-3">
                Key Deliverables & Protocols
              </h4>
              <div className="space-y-2.5">
                {selectedService.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppServiceUrl(selectedService)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-center text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-3 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
