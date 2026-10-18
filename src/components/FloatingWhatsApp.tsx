import React from 'react';
import { MessageCircle } from 'lucide-react';
import { DEALERSHIP_INFO } from '../data/dealershipData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden md:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-[#0E1524]/90 border border-amber-400/30 text-xs font-semibold text-white shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-amber-400 font-mono mr-1">Concierge:</span> Chat on WhatsApp
      </div>

      {/* Floating Button */}
      <a
        href={DEALERSHIP_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Concierge Chat"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-amber-400/40"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />
        <MessageCircle className="w-7 h-7 drop-shadow-md" />
      </a>
    </aside>
  );
};
