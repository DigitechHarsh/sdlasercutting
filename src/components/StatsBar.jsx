import React from 'react';
import { Star, Target, CheckCircle, Clock } from 'lucide-react';

export const StatsBar = () => {
  const stats = [
    {
      value: "5.0 ★",
      label: "Google Rating",
      subtext: "100% Verified Customer Reviews",
      icon: Star,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      value: "±0.1 mm",
      label: "Micro Tolerance",
      subtext: "High-Accuracy CNC Fiber Laser",
      icon: Target,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      value: "1,000+",
      label: "Completed Jobs",
      subtext: "Industrial & Architectural Works",
      icon: CheckCircle,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      value: "Same-Day",
      label: "Fast Quotation",
      subtext: "Direct WhatsApp & CAD Review",
      icon: Clock,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section className="py-8 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3.5">
                <div className={`p-3 rounded-lg ${stat.bgColor} ${stat.iconColor} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 font-['Outfit'] leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-700">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 hidden sm:block">
                    {stat.subtext}
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
