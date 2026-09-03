import React, { useState } from 'react';
import { materialsData } from '../data/materialsData';
import { Layers, Shield } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const MaterialMatrix = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(materialsData[0]);

  return (
    <section id="capabilities" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Machining Specs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-['Outfit']">
              Material & Thickness Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1.5 max-w-xl">
              Cutting capacity, assist gases, and edge quality across all sheet metals and substrates.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="https://wa.me/918469941403?text=Hi%20SD%20Laser%20Cutting,%20I%20have%20a%20specific%20material%20thickness%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-bold transition-colors shadow-2xs"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
              <span>Ask About Custom Materials</span>
            </a>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex overflow-x-auto pb-3 gap-2 no-scrollbar mb-6">
          {materialsData.map((item) => {
            const isSelected = selectedMaterial.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedMaterial(item)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {item.name.split(' (')[0]}
              </button>
            );
          })}
        </div>

        {/* Selected Material Card */}
        <div className="card-clean rounded-2xl p-6 sm:p-8 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Specs */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 rounded-lg bg-orange-50 text-orange-600 border border-orange-200">
                  <Layers className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                    {selectedMaterial.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">Popular Grades: {selectedMaterial.popularGrades}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">Max Cutting Thickness</span>
                  <span className="text-2xl font-black text-orange-600 font-['Outfit']">{selectedMaterial.maxThickness}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">Assist Gas Type</span>
                  <span className="text-sm font-bold text-slate-800">{selectedMaterial.assistGas}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">Edge Quality & Finish</span>
                  <p className="text-sm text-slate-700">{selectedMaterial.cutFinish}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">Typical Applications</span>
                  <p className="text-sm text-slate-700">{selectedMaterial.applications}</p>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col justify-center p-6 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-slate-200 text-slate-700 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Send CAD / Drawing File</h4>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                We accept AutoCAD .dwg, .dxf, vector .ai, and .pdf files. Send your drawing directly for instant rate calculation.
              </p>
              <a
                href={`https://wa.me/918469941403?text=${encodeURIComponent(`Hi SD Laser Cutting, I would like to get a quote for cutting ${selectedMaterial.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Quote for {selectedMaterial.name.split(' (')[0]}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
