import React from 'react';
import { servicesData } from '../data/servicesData';
import { Layers, Flame, Grid, Sparkles, Factory, Cpu, ArrowRight, Check } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const iconMap = {
  Layers: Layers,
  Flame: Flame,
  Grid: Grid,
  Sparkles: Sparkles,
  Factory: Factory,
  Cpu: Cpu
};

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Laser Cutting Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-['Outfit'] mb-3">
            Fabrication & CNC Laser Services in Surat
          </h2>
          <p className="text-base text-slate-600">
            From single custom prototypes to high-volume industrial production runs, we provide precision laser cutting across metals, plastics, and wood.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Layers;
            const quoteText = encodeURIComponent(`Hi SD Laser Cutting, I am interested in your "${service.title}" service in Surat. Please share pricing and turnaround time.`);
            const whatsappServiceUrl = `https://wa.me/918469941403?text=${quoteText}`;

            return (
              <div
                key={service.id}
                className="card-clean rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Image Preview & Badge */}
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-5 bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-[11px] font-bold tracking-wide">
                      {service.badge}
                    </span>

                    <div className="absolute bottom-3 left-3 p-2 rounded-lg bg-white/95 text-orange-600 shadow-sm border border-slate-200/80">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Category & Title */}
                  <div className="text-[11px] font-bold uppercase tracking-wider text-orange-600 mb-1 font-mono">
                    {service.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit']">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Material Tags */}
                  <div className="mb-4">
                    <p className="text-[11px] font-semibold text-slate-700 uppercase mb-1.5">Materials:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.materials.map((mat, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 mb-5 border-t border-slate-100 pt-3">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Card Action */}
                <div className="pt-3 border-t border-slate-100">
                  <a
                    href={whatsappServiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-800 font-bold text-xs transition-colors border border-slate-200 hover:border-emerald-600"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
