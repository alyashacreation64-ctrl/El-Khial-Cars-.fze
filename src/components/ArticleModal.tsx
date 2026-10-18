import React from 'react';
import { X, MessageCircle, Clock, Calendar, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';
import { JournalArticle, DEALERSHIP_INFO } from '../data/dealershipData';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const encodedWhatsAppMessage = encodeURIComponent(
    `Hello El-Khial Cars team, I was reading your journal article "${article.title}" and would like to consult with an advisor regarding buying or exporting in Dubai.`
  );
  const whatsappUrl = `${DEALERSHIP_INFO.whatsappUrl}?text=${encodedWhatsAppMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-[#0E1524] border border-amber-400/30 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/70 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400">
              The Automotive Journal
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">{article.category}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto space-y-6">
          {/* Article Hero Media */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={article.image}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1524] via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[11px] font-mono text-amber-300 bg-black/70 px-2 py-0.5 rounded border border-amber-400/30">
                {article.category}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-luxury text-white mt-1">
                {article.title}
              </h2>
            </div>
          </div>

          {/* Metadata Row */}
          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono pb-4 border-b border-slate-800/80">
            <span className="flex items-center gap-1.5 text-amber-300">
              <Calendar className="w-3.5 h-3.5" />
              {article.sampleDate}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>·</span>
            <span className="text-slate-400">By El-Khial Editorial Desk</span>
          </div>

          {/* Article Excerpt */}
          <p className="text-base text-amber-200/90 font-medium italic border-l-2 border-amber-400 pl-4 py-1">
            "{article.excerpt}"
          </p>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            {article.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Essential Takeaways Box */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-amber-400/25 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-amber-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Essential Buying & Inspection Takeaways
            </h4>
            <div className="space-y-2">
              {article.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <span className="text-amber-400 font-mono font-bold">0{idx + 1}.</span>
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-amber-950/20 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white font-serif-luxury">
                Looking for tailored guidance in Dubai?
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Consult with our Ras Al Khor luxury automotive specialists on WhatsApp.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Our Team</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
