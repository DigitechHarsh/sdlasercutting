import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const MobileActionBar = () => {
  const googleMapsUrl = "https://www.google.com/maps/place/Sd+laser+cutting/@21.2062093,72.9139625,651m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be045209a556d29:0x4a31b9dbce77b29e!8m2!3d21.2062093!4d72.9139625!16s%2Fg%2F11zkp5w8b4";
  const whatsappUrl = "https://wa.me/918469941403?text=" + encodeURIComponent("Hi SD Laser Cutting, I am interested in getting a quick quote for laser cutting in Surat.");

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-lg">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Now */}
        <a
          href="tel:+918469941403"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-slate-900 active:bg-slate-200 border border-slate-200"
        >
          <Phone className="w-4 h-4 text-orange-600 mb-0.5" />
          <span className="text-[10px] font-bold">Call Now</span>
        </a>

        {/* WhatsApp Quote */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-bold shadow-xs active:bg-emerald-700"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-slate-900 active:bg-slate-200 border border-slate-200"
        >
          <Navigation className="w-4 h-4 text-blue-600 mb-0.5" />
          <span className="text-[10px] font-bold">Directions</span>
        </a>

      </div>
    </div>
  );
};
