import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, Navigation, CheckCircle2, ExternalLink } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    service: 'Metal Sheet Laser Cutting (MS / SS / Aluminium)',
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const googleMapsUrl = "https://www.google.com/maps/place/Sd+laser+cutting/@21.2062093,72.9139625,651m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be045209a556d29:0x4a31b9dbce77b29e!8m2!3d21.2062093!4d72.9139625!16s%2Fg%2F11zkp5w8b4";
  const mapEmbedUrl = "https://maps.google.com/maps?q=21.2062093,72.9139625&hl=en&z=15&output=embed";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const emailLine = formData.emailAddress.trim() ? `\n📧 *Email:* ${formData.emailAddress.trim()}` : '';
    const text = `*New Laser Cutting Inquiry - SD Laser Cutting Surat*
━━━━━━━━━━━━━━━━━━━━━
🛠 *Service:* ${formData.service}
👤 *Full Name:* ${formData.fullName}
📞 *Mobile Number:* ${formData.mobileNumber}${emailLine}
📝 *Description / Specs:* ${formData.description || 'Standard quote required.'}
━━━━━━━━━━━━━━━━━━━━━
Please share the estimated quotation, cutting turnaround time, and delivery schedule.`;

    const waUrl = `https://wa.me/918469941403?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>Surat Workshop</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-['Outfit'] mb-3">
            Get in Touch & Workshop Location
          </h2>
          <p className="text-base text-slate-600">
            Fill in your project details below to generate a pre-filled WhatsApp quote request directly to our workshop in Surat.
          </p>
        </div>

        {/* Quick Action Top Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a
            href="tel:+918469941403"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors text-slate-900 font-bold text-sm"
          >
            <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 uppercase font-mono">Direct Phone</p>
              <p className="text-sm font-bold text-slate-900">+91 84699 41403</p>
            </div>
          </a>

          <a
            href="https://wa.me/918469941403?text=Hi%20SD%20Laser%20Cutting,%20I%20would%20like%20to%20inquire%20about%20laser%20cutting%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors text-slate-900 font-bold text-sm"
          >
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 uppercase font-mono">Instant WhatsApp</p>
              <p className="text-sm font-bold text-slate-900">+91 84699 41403</p>
            </div>
          </a>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors text-slate-900 font-bold text-sm"
          >
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <Navigation className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 uppercase font-mono">Google Maps</p>
              <p className="text-sm font-bold text-slate-900">Get Directions</p>
            </div>
          </a>
        </div>

        {/* 2-Column: Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form */}
          <div className="lg:col-span-6 card-clean rounded-2xl p-6 sm:p-8 bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1 font-['Outfit']">
                Send Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill in the details below. On clicking the button, your pre-filled WhatsApp message will be ready to send immediately.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center my-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-slate-900 mb-1">WhatsApp Message Ready!</h4>
                  <p className="text-xs text-slate-600 mb-4">
                    WhatsApp has opened in a new tab with your pre-filled inquiry. You can also attach drawings (.dxf, .dwg, .pdf) directly in WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-orange-600 font-bold underline cursor-pointer"
                  >
                    Edit & Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2.5 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      <option value="Metal Sheet Laser Cutting (MS / SS / Aluminium)">Metal Sheet Laser Cutting (MS / SS / Aluminium)</option>
                      <option value="Brass & Copper Laser Cutting">Brass & Copper Laser Cutting</option>
                      <option value="Acrylic & Wood Laser Cutting">Acrylic & Wood Laser Cutting</option>
                      <option value="Custom Decorative Jaali & Panels">Custom Decorative Jaali & Panels</option>
                      <option value="CNC Laser Engraving & Marking">CNC Laser Engraving & Marking</option>
                      <option value="Bulk / Industrial Order Cutting">Bulk / Industrial Order Cutting</option>
                      <option value="Prototype & Small-Batch Cutting">Prototype & Small-Batch Cutting</option>
                      <option value="Other / Custom Laser Cutting Requirement">Other / Custom Laser Cutting Requirement</option>
                    </select>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="E.g., Rajesh Sharma / Apex Engineering"
                      className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2.5 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      placeholder="E.g., +91 98765 43210"
                      className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2.5 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  {/* Email Address (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      placeholder="E.g., rajesh@company.com"
                      className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2.5 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Description & Specs
                    </label>
                    <textarea
                      rows="3"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Specify material thickness (e.g. 3mm MS), dimensions, quantity, or CAD drawing availability..."
                      className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2.5 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors placeholder:text-slate-400"
                    ></textarea>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send WhatsApp Message (+91 84699 41403)</span>
                  </button>
                </form>
              )}
            </div>

            <p className="text-[11px] text-slate-500 mt-4">
              🔒 Your drawings and specifications are treated with strict confidentiality.
            </p>
          </div>

          {/* Map & Workshop Address */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            
            {/* Embedded Google Map */}
            <div className="card-clean rounded-2xl overflow-hidden bg-slate-100 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-72 relative">
              <iframe
                title="SD Laser Cutting Surat Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Address & Hours Box */}
            <div className="card-clean rounded-2xl p-5 bg-white space-y-3.5">
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-100 text-orange-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Workshop Address</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    SD Laser Cutting, Industrial Area, Surat, Gujarat, India (Coordinates: 21.2062093, 72.9139625)
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700 mt-1 font-bold"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Business Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <strong>Monday – Saturday:</strong> 9:00 AM – 8:00 PM
                  </p>
                  <p className="text-xs text-slate-500">
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
