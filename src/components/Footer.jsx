import React from 'react';
import { Zap, Phone, MessageCircle, MapPin, ArrowUp, Star } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const googleMapsUrl = "https://www.google.com/maps/place/Sd+laser+cutting/@21.2062093,72.9139625,651m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be045209a556d29:0x4a31b9dbce77b29e!8m2!3d21.2062093!4d72.9139625!16s%2Fg%2F11zkp5w8b4";

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-600 text-white font-bold">
                <Zap className="w-4 h-4 fill-white" />
              </div>
              <span className="text-xl font-black tracking-tight text-white font-['Outfit']">
                SD LASER <span className="text-orange-500 font-bold">CUTTING</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed max-w-sm">
              Surat's trusted CNC laser cutting & sheet metal fabrication service provider. Micron-level accuracy for MS, SS, Aluminium, Brass, Acrylic, and Decorative Jaali panels.
            </p>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-slate-800 py-1.5 px-3 rounded-lg border border-slate-700">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>5.0 Star Google Rating</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Materials & Thickness</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Sample Work Gallery</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Map</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-mono">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Mild Steel (MS) Cutting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Stainless Steel (SS) Cutting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Aluminium Sheet Cutting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Decorative Metal Jaali</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Acrylic & Signage Cutting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Wood & MDF Wall Art</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bulk Industrial Production</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 font-mono">
              Surat Workshop
            </h4>
            <div className="space-y-2.5 text-xs">
              <a href="tel:+918469941403" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>+91 84699 41403</span>
              </a>
              <a href="https://wa.me/918469941403" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: +91 84699 41403</span>
              </a>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white transition-colors">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Surat, Gujarat, India (21.2062093, 72.9139625)</span>
              </a>
              <p className="text-[11px] text-slate-500 pt-1">
                Mon - Sat: 9:30 AM - 8:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Local Area Served */}
        <div className="py-4 border-b border-slate-800 text-[11px] text-slate-500">
          <p>
            <strong className="text-slate-400">Serving all Surat & South Gujarat industrial regions:</strong> Sachin GIDC, Pandesara, Katargam, Hazira, Udhna, Varachha, Bhatar, Adajan, Pipodara, Ankleshwar, and Navsari.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} SD Laser Cutting. All rights reserved. Surat, Gujarat.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
