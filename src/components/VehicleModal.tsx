import React from 'react';
import { X, MessageCircle, Calendar, ShieldCheck, CheckCircle2, ChevronRight, Gauge, Cog, Fuel, MapPin, Sparkles } from 'lucide-react';
import { Vehicle, DEALERSHIP_INFO } from '../data/dealershipData';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onBookAppointment: (vehicleName: string) => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({
  vehicle,
  onClose,
  onBookAppointment,
}) => {
  if (!vehicle) return null;

  const encodedWhatsAppMessage = encodeURIComponent(
    `Hello El-Khial Cars team, I am inquiring about the ${vehicle.make} ${vehicle.model} (${vehicle.year}) listed on your website showroom. Could you provide active availability, viewing schedule, and full documentation details?`
  );
  const whatsappInquiryUrl = `${DEALERSHIP_INFO.whatsappUrl}?text=${encodedWhatsAppMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#0E1524] border border-amber-400/30 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400">
              Vehicle Spotlight
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-xs text-slate-400">{vehicle.regionalSpec}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close vehicle details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Main Visual */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800 mb-6 bg-slate-950">
            <img
              src={vehicle.image}
              alt={`${vehicle.make} ${vehicle.model}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1524] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-amber-300 bg-black/70 px-2 py-0.5 rounded border border-amber-400/20">
                  {vehicle.year} Model
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white mt-1">
                  {vehicle.make} {vehicle.model}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-400 block font-mono">Indicative Showroom Price</span>
                <span className="text-xl sm:text-2xl font-bold text-amber-400 font-mono tabular-nums">
                  AED {vehicle.priceAED.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Gauge className="w-3.5 h-3.5 text-amber-400" />
                <span>Mileage</span>
              </div>
              <p className="text-sm font-semibold text-white font-mono">{vehicle.mileage}</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Cog className="w-3.5 h-3.5 text-amber-400" />
                <span>Transmission</span>
              </div>
              <p className="text-xs font-semibold text-white truncate" title={vehicle.transmission}>
                {vehicle.transmission}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Fuel className="w-3.5 h-3.5 text-amber-400" />
                <span>Fuel / Powertrain</span>
              </div>
              <p className="text-xs font-semibold text-white truncate">{vehicle.fuelType}</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Specification</span>
              </div>
              <p className="text-xs font-semibold text-white truncate">{vehicle.regionalSpec}</p>
            </div>
          </div>

          {/* Description & Engine Details */}
          <div className="mb-6 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300">
              Vehicle Overview & Provenance
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {vehicle.description}
            </p>
            <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200/90 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Powertrain:</strong> {vehicle.engine} | <strong>Exterior:</strong> {vehicle.exteriorColor} | <strong>Interior:</strong> {vehicle.interiorColor}
              </span>
            </div>
          </div>

          {/* Key Features List */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-3">
              Highlighted Equipment & Luxury Options
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {vehicle.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer Banner */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 mb-6">
            <span className="font-semibold text-amber-300">Showroom Notice: </span>
            This listing represents illustrative inventory and vehicle specifications from our executive trading portfolio. Live vehicle availability and final handover documentation should be verified directly with our sales consultants at Ras Al Khor.
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-3 text-center text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookAppointment(`${vehicle.make} ${vehicle.model} (${vehicle.year})`);
              }}
              className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold text-amber-200 border border-amber-400/40 rounded-lg hover:bg-amber-400/10 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book Viewing Slot</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
