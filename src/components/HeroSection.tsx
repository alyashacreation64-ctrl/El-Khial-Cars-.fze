import { MessageCircle, Calendar, ArrowDown, ChevronRight, ShieldCheck, MapPin, Star } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/dealershipData';
import { IMAGES } from '../assets/images';

interface HeroSectionProps {
  onOpenAppointment: () => void;
  onExploreCollection: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAppointment,
  onExploreCollection,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0B0F17]"
    >
      {/* Background ambient lighting and luxury atmospheric glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-[#0B0F17]/60 to-[#0B0F17] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Gold Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
                EL-KHIAL CARS .FZE | DUBAI, UAE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white font-serif-luxury leading-[1.08] mb-4 text-balance">
              DRIVE THE <br />
              <span className="text-gold-gradient">EXCEPTIONAL.</span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-medium text-amber-200/90 mb-3 tracking-wide">
              Dubai’s Destination for Luxury & Executive Cars.
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300/85 max-w-xl leading-relaxed mb-6 font-sans">
              Discover exceptional automobiles, premium service, and a smarter way to find your next car in Dubai. Located in the heart of Ras Al Khor Auto Zone.
            </p>

            {/* Trust Indicator - Unboxed Clean Metadata */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 mb-8 py-2 px-3.5 rounded-lg border border-amber-400/25 bg-slate-900/40 backdrop-blur-sm">
              <div className="flex items-center gap-1 text-amber-400 font-semibold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.4/5 Google Rating</span>
              </div>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">7 Verified Reviews</span>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Ras Al Khor, Dubai</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onExploreCollection}
                className="px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Explore Collection</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onOpenAppointment}
                className="px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-amber-200 border border-amber-400/50 rounded-lg hover:bg-amber-400/10 active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Book Appointment</span>
              </button>

              <a
                href={DEALERSHIP_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-emerald-400 border border-emerald-500/40 rounded-lg hover:bg-emerald-500/10 active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat With Our Team</span>
              </a>
            </div>

            {/* Quiet guarantee notes */}
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Verified Inspection</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Global Export Assistance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Trade-In Valuations</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Vehicle Image Showcase (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Outer decorative gold halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500/30 via-amber-300/10 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Main vehicle display container */}
              <div className="relative overflow-hidden rounded-2xl border border-amber-400/30 bg-[#0E1522] shadow-2xl">
                <div className="aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={IMAGES.hero}
                    alt="El-Khial Cars showroom luxury flagship vehicle"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Bottom gradient fade for seamless integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-80" />
                  
                  {/* Subtle caption banner at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-amber-400/20">
                    <div>
                      <p className="font-semibold text-white">Showroom Spotlight</p>
                      <p className="text-[11px] text-amber-300/90 font-mono">Ras Al Khor Industrial 3</p>
                    </div>
                    <span className="text-[11px] text-slate-400 tracking-wide">
                      GCC & Executive Cars
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <button
            type="button"
            onClick={onExploreCollection}
            aria-label="Scroll to collection"
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-amber-400 transition-colors group cursor-pointer"
          >
            <span className="text-[10px] tracking-widest uppercase font-mono">Explore Showroom</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-amber-400/80 group-hover:text-amber-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
