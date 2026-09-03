import React from 'react';
import { Target, Zap, DollarSign, Users, Truck, Star, ShieldCheck } from 'lucide-react';

export const WhyUs = () => {
  const points = [
    {
      icon: Target,
      title: "±0.1mm Micro-Precision Cutting",
      description: "State-of-the-art CNC fiber laser cutting systems ensure razor-sharp edges, perfect dimensional accuracy, and minimal burr on complex geometries.",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Zap,
      title: "Fast Turnaround & Rapid Dispatch",
      description: "Optimized CAD nesting and high-speed laser heads allow us to deliver prototypes in hours and batch orders in record time across Surat.",
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      icon: DollarSign,
      title: "Competitive Factory Pricing",
      description: "Direct manufacturing rates with no middlemen. Automated nesting algorithms maximize raw material sheet utilization to reduce costs.",
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Users,
      title: "Experienced Laser Technicians",
      description: "Over a decade of combined fabrication expertise. Our operators fine-tune gas pressure, focal length, and feed rates specifically for each grade.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Truck,
      title: "Reliable On-Time Delivery",
      description: "Consistent delivery timelines for machine OEMs, builders, and interior decorators across Surat, Sachin, Pandesara, and Hazira.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Star,
      title: "5-Star Rated by Customers",
      description: "Unanimous 5.0 Google rating backed by genuine local reviews from fabricators, architects, business owners, and engineering firms.",
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Industrial Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-['Outfit'] mb-3">
            Why Leading Businesses Choose SD Laser Cutting
          </h2>
          <p className="text-base text-slate-600">
            Engineered precision, industrial capacity, and dependable local service in Surat.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="card-clean rounded-2xl p-6 bg-white flex items-start gap-4"
              >
                <div className={`p-3 rounded-xl ${point.bgColor} ${point.iconColor} shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 font-['Outfit']">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="text-lg font-bold text-slate-900 font-['Outfit'] mb-1">
              Have AutoCAD, DXF, or Vector files ready?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Send your files now for an immediate nest check and custom rate calculation.
            </p>
          </div>
          <a
            href="https://wa.me/918469941403?text=Hi%20SD%20Laser%20Cutting,%20I%20have%20a%20CAD/DXF%20file%20to%20send%20for%20quotation."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
          >
            Send CAD File on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
