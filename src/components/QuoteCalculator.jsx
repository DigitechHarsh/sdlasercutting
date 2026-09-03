import React, { useState } from 'react';
import { Calculator, MessageCircle, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const QuoteCalculator = () => {
  const [formData, setFormData] = useState({
    service: 'Metal Sheet Laser Cutting (MS / SS / Aluminium)',
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleGenerateWhatsAppQuote = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const emailLine = formData.emailAddress.trim() ? `\n📧 *Email:* ${formData.emailAddress.trim()}` : '';
    const message = `*Laser Cutting Quote Request - SD Laser Cutting Surat*
━━━━━━━━━━━━━━━━━━━━━
🛠 *Service:* ${formData.service}
👤 *Full Name:* ${formData.fullName}
📞 *Mobile Number:* ${formData.mobileNumber}${emailLine}
📝 *Description / Specs:* ${formData.description || 'Standard quotation required.'}
━━━━━━━━━━━━━━━━━━━━━
Please share the estimated rate, cutting turnaround time, and delivery schedule.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918469941403?text=${encoded}`, '_blank');
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="card-clean rounded-2xl p-6 sm:p-10 bg-white">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5 text-orange-600" />
              <span>Instant WhatsApp Quote Estimator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-['Outfit']">
              Configure Your Cutting Job & Get Fast Estimate
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
              Fill in your details below to generate an instant pre-filled WhatsApp quote request directly to our Surat workshop.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center my-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-900 mb-1">WhatsApp Message Ready!</h3>
              <p className="text-xs text-slate-600 mb-4">
                WhatsApp has opened in a new tab with your pre-filled inquiry. You can send CAD drawing files (.dxf, .dwg, .pdf) directly in the chat.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-orange-600 font-bold underline cursor-pointer"
              >
                Edit & Send another quote request
              </button>
            </div>
          ) : (
            <form onSubmit={handleGenerateWhatsAppQuote} className="space-y-4">
              
              {/* Service Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  1. Select Service *
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

              {/* Full Name & Mobile Number in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    2. Full Name *
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

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    3. Mobile Number *
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
              </div>

              {/* Email Address (Optional) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  4. Email Address <span className="text-slate-400 font-normal normal-case">(Optional)</span>
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
                  5. Description & Specs
                </label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="E.g., Material thickness (e.g. 4mm MS), sheet dimensions, quantity, or CAD drawing availability..."
                  className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2.5 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors placeholder:text-slate-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp (+91 84699 41403)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-500 mt-2 font-mono">
                  Direct workshop response within 15-30 minutes during business hours.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
