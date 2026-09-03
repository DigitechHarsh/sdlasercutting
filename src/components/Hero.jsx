import React from 'react';
import { MessageCircle, Phone, MapPin, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const whatsappUrl = "https://wa.me/918469941403?text=" + encodeURIComponent("Hi SD Laser Cutting, I am looking for a quick quote for laser cutting in Surat. Here are my project details:");

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-slate-200/80 bg-light-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-600"></span>
              <span>★ 5.0 Google Rating</span>
              <span className="text-orange-300">•</span>
              <span className="flex items-center gap-1 text-slate-700">
                <MapPin className="w-3 h-3 text-orange-600" /> Surat, Gujarat
              </span>
            </div>

            {/* Single H1 for SEO */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-6 font-['Outfit']">
              Precision <span className="text-orange-600">Laser Cutting</span> & Sheet Metal Fabrication in Surat
            </h1>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal">
              High-speed CNC fiber laser cutting with <strong>±0.1mm accuracy</strong>. We cut Mild Steel (MS), Stainless Steel (SS 304/316), Aluminium, Brass, Copper, Acrylic, Wood, and custom architectural Jaali panels for businesses and custom projects across Gujarat.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide transition-colors shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get a Free Quote (WhatsApp)</span>
              </a>

              <a
                href="tel:+918469941403"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call +91 84699 41403</span>
              </a>
            </div>

            {/* Technical Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-700 font-semibold">±0.1mm Precision Tolerance</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="text-xs text-slate-700 font-semibold">Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs text-slate-700 font-semibold">AutoCAD / DXF Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Workshop Image & Clean Status Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/50">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img
                  src="/images/hero-laser.jpg"
                  alt="SD Laser Cutting CNC Fiber Laser Machine in Surat"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Active Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-200 text-[11px] font-mono font-bold text-slate-900 flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>CNC FIBER LASER FACILITY</span>
                </div>
              </div>

              {/* Bottom Specs Pill */}
              <div className="p-3.5 flex items-center justify-between bg-slate-50 rounded-xl mt-2 border border-slate-100">
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Capacity Range</p>
                  <p className="text-xs font-bold text-slate-900">MS up to 20mm • SS up to 12mm</p>
                </div>
                <span className="px-2 py-1 rounded bg-orange-100 text-orange-800 text-xs font-semibold">
                  Surat Facility
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
