import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/dealershipData';
import { ArticleModal } from './ArticleModal';

export const JournalSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-20 sm:py-28 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-800/80 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1px] bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                EDITORIAL & INSIGHTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
              The Automotive Journal
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Original practical guides, market analysis, and inspection intelligence from our Dubai luxury vehicle dealership.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveArticle(JOURNAL_ARTICLES[0])}
            className="text-xs uppercase tracking-wider font-semibold text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1.5 self-start md:self-end"
          >
            <span>View Featured Article</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Articles Grid: 1 col on mobile, 2 cols on tablet, 3 cols on computer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group rounded-2xl bg-[#0E1524] border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-950/20"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1524] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-black/80 text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Metadata unboxed */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2">
                    <span>{article.sampleDate}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif-luxury text-white group-hover:text-amber-200 transition-colors line-clamp-2 mb-3 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-300/80 line-clamp-3 leading-relaxed font-sans">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4">
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="w-full pt-3 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span className="tracking-wide">Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}
    </section>
  );
};
