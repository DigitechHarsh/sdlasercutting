import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Services } from './components/Services';
import { MaterialMatrix } from './components/MaterialMatrix';
import { QuoteCalculator } from './components/QuoteCalculator';
import { WhyUs } from './components/WhyUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-orange-100 selection:text-orange-900">
      {/* Sticky Header with Navigation & Quick Actions */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Live Metrics & Trust Bar */}
        <StatsBar />

        {/* Services Showcase */}
        <Services />

        {/* Material & Thickness Guide */}
        <MaterialMatrix />

        {/* Interactive Quote & WhatsApp Builder */}
        <QuoteCalculator />

        {/* Why Choose Us */}
        <WhyUs />

        {/* Sample Work Gallery with Lightbox & Filters */}
        <Gallery />

        {/* 5.0 Star Google Reviews & Testimonials */}
        <Reviews />

        {/* Contact Form, Hours & Embedded Surat Location Map */}
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Sticky Bottom Action Bar for Mobile Screens */}
      <MobileActionBar />
    </div>
  );
}

export default App;
