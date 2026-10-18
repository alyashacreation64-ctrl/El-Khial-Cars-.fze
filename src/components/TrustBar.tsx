import React from 'react';
import { Star, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/dealershipData';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Star,
      value: "4.4 / 5.0",
      label: "Google Rating",
      subtext: "Verified public customer score",
      accent: "text-amber-400"
    },
    {
      icon: CheckCircle2,
      value: "7 Reviews",
      label: "Verified Google Feedback",
      subtext: "Authentic client ratings",
      accent: "text-amber-300"
    },
    {
      icon: ShieldCheck,
      value: "Licensed FZE",
      label: "Premium Automotive Trading",
      subtext: "Dubai Auto Zone registered entity",
      accent: "text-amber-400"
    },
    {
      icon: MapPin,
      value: "Ras Al Khor",
      label: "Industrial Area 3, Dubai",
      subtext: "Prime automotive district location",
      accent: "text-amber-300"
    }
  ];

  return (
    <section className="relative py-8 border-y border-amber-400/15 bg-gradient-to-r from-[#0E1522] via-[#111A2E] to-[#0E1522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className={`p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 ${item.accent} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg font-bold text-white font-mono tracking-tight tabular-nums truncate">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 truncate">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate hidden sm:block">
                    {item.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
