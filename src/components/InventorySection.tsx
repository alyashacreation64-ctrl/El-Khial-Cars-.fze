import React, { useState, useMemo } from 'react';
import { MessageCircle, Eye, SlidersHorizontal, RotateCcw, Sparkles, Gauge, Cog, Check } from 'lucide-react';
import { VEHICLES, Vehicle, DEALERSHIP_INFO } from '../data/dealershipData';

interface InventorySectionProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
  onBookAppointment: (vehicleName: string) => void;
}

export const InventorySection: React.FC<InventorySectionProps> = ({
  onSelectVehicle,
  onBookAppointment,
}) => {
  const [selectedMake, setSelectedMake] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');

  const makes = ['all', 'Mercedes-Benz', 'Porsche', 'Land Rover', 'Toyota', 'BMW', 'Lexus'];

  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((vehicle) => {
      // Make filter
      if (selectedMake !== 'all' && vehicle.make !== selectedMake) {
        return false;
      }
      // Price filter
      if (selectedPriceRange === 'under-600') {
        return vehicle.priceAED < 600000;
      }
      if (selectedPriceRange === 'over-600') {
        return vehicle.priceAED >= 600000;
      }
      return true;
    });
  }, [selectedMake, selectedPriceRange]);

  const handleResetFilters = () => {
    setSelectedMake('all');
    setSelectedPriceRange('all');
  };

  const getWhatsAppInquiryUrl = (vehicle: Vehicle) => {
    const text = encodeURIComponent(
      `Hello El-Khial Cars team, I am inquiring about the ${vehicle.make} ${vehicle.model} (${vehicle.year}) listed on your website for AED ${vehicle.priceAED.toLocaleString()}. Could you confirm availability and arrange a viewing in Ras Al Khor?`
    );
    return `${DEALERSHIP_INFO.whatsappUrl}?text=${text}`;
  };

  return (
    <section id="inventory" className="py-20 sm:py-28 bg-[#0B0F17] relative">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1px] bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                CURATED INVENTORY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
              Featured Luxury Collection
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Inspect our handpicked executive saloons, supercars, and high-performance SUVs currently stationed or sourced through our Ras Al Khor showroom.
            </p>
          </div>

          {/* Demo Disclaimer Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/20 border border-amber-500/25 text-xs text-amber-300 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Showroom Portfolio Demo Data</span>
          </div>
        </div>

        {/* Interactive Filter Bar */}
        <div className="p-4 rounded-xl bg-[#0E1524] border border-amber-400/15 mb-10 shadow-lg">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Make Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1 mr-2 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                <span>Brand:</span>
              </span>
              {makes.map((make) => {
                const isActive = selectedMake === make;
                return (
                  <button
                    key={make}
                    type="button"
                    onClick={() => setSelectedMake(make)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold shadow-md'
                        : 'text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800'
                    }`}
                  >
                    {make === 'all' ? 'All Brands' : make}
                  </button>
                );
              })}
            </div>

            {/* Price Filter & Reset */}
            <div className="flex items-center gap-3 shrink-0 self-end lg:self-center">
              <select
                aria-label="Filter vehicles by price range"
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="bg-slate-900 text-xs text-slate-200 border border-slate-700 rounded-lg px-3 py-2 outline-none focus:border-amber-400"
              >
                <option value="all">All Price Ranges</option>
                <option value="under-600">Under AED 600,000</option>
                <option value="over-600">AED 600,000 & Above</option>
              </select>

              {(selectedMake !== 'all' || selectedPriceRange !== 'all') && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-3 py-2 text-xs font-semibold text-amber-300 bg-amber-950/30 border border-amber-500/30 rounded-lg hover:bg-amber-950/50 transition-all flex items-center gap-1.5 shrink-0"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
            <p className="text-base text-slate-300 font-semibold mb-2">No matching vehicles found</p>
            <p className="text-xs text-slate-400 mb-4">Try selecting another brand or clearing your price filters.</p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 text-xs font-bold text-black bg-amber-400 rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group relative rounded-2xl bg-[#0E1524] border border-amber-400/20 overflow-hidden shadow-xl hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container with hover zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1524] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-black/75 text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                      {vehicle.year}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-700/80 backdrop-blur-sm">
                      {vehicle.regionalSpec}
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-400/30">
                    <span className="text-[10px] text-slate-400 block font-mono">Indicative AED</span>
                    <span className="text-base font-bold text-amber-400 font-mono tabular-nums">
                      {vehicle.priceAED.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-amber-400 uppercase tracking-widest font-mono">
                      {vehicle.make}
                    </span>
                    <h3 className="text-lg font-bold text-white font-serif-luxury group-hover:text-amber-200 transition-colors line-clamp-1 mt-0.5">
                      {vehicle.model}
                    </h3>

                    {/* Metadata line (No pill, unboxed with separators) */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 my-3 font-mono">
                      <span className="flex items-center gap-1">
                        <Gauge className="w-3 h-3 text-amber-400" />
                        {vehicle.mileage}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 truncate max-w-[140px]" title={vehicle.transmission}>
                        <Cog className="w-3 h-3 text-amber-400" />
                        {vehicle.transmission}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300/80 line-clamp-2 leading-relaxed mb-4 font-sans">
                      {vehicle.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800/80">
                    <button
                      type="button"
                      onClick={() => onSelectVehicle(vehicle)}
                      className="w-full py-2.5 px-3 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Details</span>
                    </button>

                    <a
                      href={getWhatsAppInquiryUrl(vehicle)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 text-xs font-semibold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] hover:brightness-110 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
