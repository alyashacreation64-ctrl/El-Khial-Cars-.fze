import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, ShieldCheck, MessageCircle, ChevronLeft, ChevronRight, Quote, ThumbsUp } from 'lucide-react';
import { DEALERSHIP_INFO, GOOGLE_REVIEWS, GoogleReview } from '../data/dealershipData';

export const ReviewsSection: React.FC = () => {
  const [filterRating, setFilterRating] = useState<'all' | '5' | '4'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredReviews = GOOGLE_REVIEWS.filter((rev) => {
    if (filterRating === '5') return rev.rating === 5;
    if (filterRating === '4') return rev.rating === 4;
    return true;
  });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, filteredReviews.length - 1) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= filteredReviews.length - 1 ? 0 : prev + 1));
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-amber-600/30 text-amber-300 border-amber-500/40',
      'bg-blue-600/30 text-blue-300 border-blue-500/40',
      'bg-emerald-600/30 text-emerald-300 border-emerald-500/40',
      'bg-purple-600/30 text-purple-300 border-purple-500/40',
      'bg-rose-600/30 text-rose-300 border-rose-500/40',
    ];
    let sum = 0;
    for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
    return colors[sum % colors.length];
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#070A10] relative border-t border-slate-900 overflow-hidden">
      {/* Background soft ambient luxury glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1px] bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                VERIFIED TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
              Google Customer Reviews
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Authentic feedback from executive car owners and international export clients who experienced our Ras Al Khor showroom service.
            </p>
          </div>

          {/* Rating Summary Pill for Tablet/Desktop */}
          <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/80 border border-amber-400/30 shadow-lg shrink-0">
            {/* Google "G" icon style */}
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold text-lg text-slate-900 shadow">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold font-mono text-white">4.4</span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < 4
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-amber-400/40 text-amber-400/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                7 Verified Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Filter Controls & Review Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Segmented Filter */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              type="button"
              onClick={() => {
                setFilterRating('all');
                setCurrentIndex(0);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filterRating === 'all'
                  ? 'bg-amber-400 text-black shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Reviews ({GOOGLE_REVIEWS.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setFilterRating('5');
                setCurrentIndex(0);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 ${
                filterRating === '5'
                  ? 'bg-amber-400 text-black shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>5 Stars</span>
              <span className="text-[10px] opacity-80">(3)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setFilterRating('4');
                setCurrentIndex(0);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 ${
                filterRating === '4'
                  ? 'bg-amber-400 text-black shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>4 Stars</span>
              <span className="text-[10px] opacity-80">(4)</span>
            </button>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <a
              href="https://www.google.com/maps/search/?api=1&query=El-Khial+Cars+Ras+Al+Khor+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1.5 font-medium py-1"
            >
              <span>Write a Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Carousel navigation arrows for mobile/tablet */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous review"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next review"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet (md), 3 cols on computer/desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => {
            const avatarClass = getAvatarColor(review.author);
            const initials = review.author
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase();

            return (
              <div
                key={review.id}
                className="group relative p-6 rounded-2xl bg-[#0E1524] border border-amber-400/20 hover:border-amber-400/45 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  {/* Top: Reviewer Details */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm border font-mono shrink-0 ${avatarClass}`}
                      >
                        {initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-white tracking-wide">
                            {review.author}
                          </h4>
                          <span title="Verified Customer">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-mono">
                          {review.date}
                        </p>
                      </div>
                    </div>

                    {/* Google G small badge */}
                    <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center shrink-0 border border-slate-700">
                      <span className="text-[11px] font-bold text-blue-400 font-mono">G</span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-slate-700 text-slate-700'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-mono text-amber-300 ml-1.5 font-semibold">
                      {review.rating}.0
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                    "{review.text}"
                  </p>
                </div>

                {/* Footer of Card: Service/Car Tag */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="text-amber-400/90 truncate max-w-[200px]" title={review.serviceUsed}>
                    {review.serviceUsed}
                  </span>
                  <span className="text-slate-500 shrink-0">Ras Al Khor, DXB</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Transparency & Assurance Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-serif-luxury">
                100% Verified Customer Experience Policy
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Every review represents authentic client interactions at our Dubai Auto Zone showroom. We do not edit, filter, or fabricate feedback.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={DEALERSHIP_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#FFF0BD] via-[#D4AF37] to-[#AA820A] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
