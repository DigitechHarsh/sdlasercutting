import React from 'react';
import { googleRating, customerReviews } from '../data/reviewsData';
import { Star, ShieldCheck, ExternalLink, Quote } from 'lucide-react';

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 5.0 Google Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Google Verified Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-['Outfit'] mb-2">
              Customer Feedback & 5.0 Star Rating
            </h2>
            <p className="text-base text-slate-600 max-w-2xl">
              Real reviews from local business owners, fabricators, and architects in Surat.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="card-clean rounded-2xl p-5 bg-white flex items-center gap-4 shrink-0">
            <div className="text-center pr-4 border-r border-slate-200">
              <div className="text-3xl font-black text-slate-900 font-['Outfit']">5.0</div>
              <div className="flex justify-center text-amber-500 text-xs mt-0.5">★★★★★</div>
              <p className="text-[10px] text-slate-500 uppercase font-mono mt-0.5">Google Rating</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Positive Feedback</span>
              </div>
              <a
                href={googleRating.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700"
              >
                <span>View Google Maps Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="card-clean rounded-2xl p-5 bg-white flex flex-col justify-between"
            >
              <div>
                
                {/* Review Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-800 font-bold text-sm flex items-center justify-center border border-slate-200">
                      {review.initial}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 font-['Outfit']">
                        {review.name}
                      </h3>
                      <p className="text-[11px] text-slate-500">{review.date}</p>
                    </div>
                  </div>

                  <div className="flex text-amber-500 text-xs">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 mb-4 leading-relaxed italic">
                  "{review.reviewText}"
                </p>

              </div>

              {/* Review Badge */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-medium">{review.projectType}</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                  {review.tag}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* View on Google Profile CTA */}
        <div className="text-center mt-10">
          <a
            href={googleRating.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-300 transition-colors shadow-2xs"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Read all reviews & leave feedback on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

      </div>
    </section>
  );
};
