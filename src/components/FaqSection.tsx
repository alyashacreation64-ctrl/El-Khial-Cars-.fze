import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, DEALERSHIP_INFO } from '../data/dealershipData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#0B0F17] relative border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              TRANSPARENCY & CLARITY
            </span>
            <span className="w-5 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-400 font-sans max-w-xl mx-auto">
            Essential information regarding showroom appointments, inspection protocols, trade-in valuations, and car exports in Dubai.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#0E1524] border border-amber-400/15 overflow-hidden transition-colors hover:border-amber-400/40"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-300' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-fade-in font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific question not covered here?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Our executive team is available on WhatsApp during showroom hours.</p>
          </div>
          <a
            href={DEALERSHIP_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
