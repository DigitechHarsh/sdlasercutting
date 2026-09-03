import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const QuoteCalculator = () => {
  const [formData, setFormData] = useState({
    material: 'Mild Steel (MS / Carbon Steel)',
    thickness: '2mm - 4mm (Standard Plate)',
    quantity: 'Small Batch (10-50 pcs)',
    hasDesignFile: 'Yes (AutoCAD .dwg / .dxf ready)',
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    clientNote: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleGenerateWhatsAppQuote = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const emailLine = formData.emailAddress.trim() ? `\n📧 *Email:* ${formData.emailAddress.trim()}` : '';
    const nameLine = formData.fullName.trim() ? `\n👤 *Full Name:* ${formData.fullName.trim()}` : '';
    const phoneLine = formData.mobileNumber.trim() ? `\n📞 *Mobile Number:* ${formData.mobileNumber.trim()}` : '';

    const message = `*Laser Cutting Quote Request - SD Laser Cutting Surat*
━━━━━━━━━━━━━━━━━━━━━
🛠 *Material:* ${formData.material}
📏 *Thickness (mm):* ${formData.thickness}
📦 *Order Type / Qty:* ${formData.quantity}
📐 *CAD / Drawing File:* ${formData.hasDesignFile}${nameLine}${phoneLine}${emailLine}
📝 *Dimensions / Notes:* ${formData.clientNote || 'Standard quotation required.'}
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
              Select your material, thickness (mm), and order details below to immediately launch a structured quotation request directly to our workshop on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center my-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-900 mb-1">WhatsApp Message Ready!</h3>
              <p className="text-xs text-slate-600 mb-4">
                WhatsApp has opened in a new tab with your pre-filled quote specifications. You can attach drawings (.dxf, .dwg, .pdf) directly in the chat.
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
              
              {/* Material & Thickness in mm */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. Select Material */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    1. Select Material *
                  </label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2.5 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <option value="Mild Steel (MS / Carbon Steel)">Mild Steel (MS / Carbon Steel)</option>
                    <option value="Stainless Steel 304 (SS)">Stainless Steel 304 (SS)</option>
                    <option value="Stainless Steel 316 (SS)">Stainless Steel 316 (Marine Grade)</option>
                    <option value="Aluminium Sheet">Aluminium Sheet</option>
                    <option value="Brass / Copper Sheet">Brass / Copper Sheet</option>
                    <option value="Cast Acrylic (Clear/Color)">Cast Acrylic (Clear / Coloured)</option>
                    <option value="MDF / Plywood / Wood">MDF / Plywood / Natural Wood</option>
                    <option value="Decorative Metal Jaali Screen">Decorative Metal Jaali Screen</option>
                    <option value="Other Custom Material">Other Custom Material</option>
                  </select>
                </div>

                {/* 2. Approximate Thickness in mm */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    2. Approximate Thickness (mm) *
                  </label>
                  <select
                    value={formData.thickness}
                    onChange={(e) => setFormData({ ...formData, thickness: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2.5 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <option value="0.8mm - 1.5mm (Thin Gauge)">0.8mm - 1.5mm (Thin Gauge)</option>
                    <option value="2mm - 4mm (Standard Plate)">2mm - 4mm (Standard Plate)</option>
                    <option value="5mm - 8mm (Medium Plate)">5mm - 8mm (Medium Plate)</option>
                    <option value="10mm - 16mm (Heavy Plate)">10mm - 16mm (Heavy Plate)</option>
                    <option value="18mm - 25mm (Max Heavy / Acrylic)">18mm - 25mm (Max Heavy / Acrylic)</option>
                    <option value="Not sure / Need consultation">Not sure / Need consultation</option>
                  </select>
                </div>

              </div>

              {/* Order Quantity & CAD Drawing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 3. Batch Size */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    3. Batch Size / Order Volume *
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2.5 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <option value="Single Prototype (1-5 pcs)">Single Prototype / Sample (1-5 pcs)</option>
                    <option value="Small Batch (10-50 pcs)">Small Batch (10-50 pcs)</option>
                    <option value="Medium Production (50-200 pcs)">Medium Production (50-200 pcs)</option>
                    <option value="High Volume Bulk (200+ pcs)">High Volume Bulk (200+ pcs)</option>
                    <option value="Architectural / Residential Project">Architectural / Residential Project</option>
                  </select>
                </div>

                {/* 4. CAD Drawing */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    4. Design / CAD Drawing *
                  </label>
                  <select
                    value={formData.hasDesignFile}
                    onChange={(e) => setFormData({ ...formData, hasDesignFile: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2.5 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <option value="Yes (AutoCAD .dwg / .dxf ready)">Yes (AutoCAD .dwg / .dxf ready)</option>
                    <option value="Yes (Vector PDF / AI / CDR)">Yes (Vector PDF / AI / CDR)</option>
                    <option value="Have a rough sketch / photo">Have a rough sketch / photo</option>
                    <option value="Need SD Laser team to design">Need SD Laser team to design</option>
                  </select>
                </div>

              </div>

              {/* Full Name & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    5. Full Name *
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
                    6. Mobile Number *
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
                  7. Email Address <span className="text-slate-400 font-normal normal-case">(Optional)</span>
                </label>
                <input
                  type="email"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  placeholder="E.g., rajesh@company.com"
                  className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2.5 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors"
                />
              </div>

              {/* Project Dimensions or Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  8. Project Dimensions or Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  value={formData.clientNote}
                  onChange={(e) => setFormData({ ...formData, clientNote: e.target.value })}
                  placeholder="E.g., Sheet size 4x8 ft, need burr-free edge finish, delivery needed in Surat..."
                  className="w-full bg-slate-50 text-slate-900 rounded-xl px-3.5 py-2 border border-slate-300 focus:border-orange-600 focus:bg-white focus:ring-1 focus:ring-orange-600 outline-none text-xs sm:text-sm transition-colors placeholder:text-slate-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
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
