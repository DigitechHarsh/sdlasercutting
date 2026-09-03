import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Zap, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'capabilities', 'gallery', 'why-us', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/918469941403?text=" + encodeURIComponent("Hello SD Laser Cutting, I am looking for laser cutting services in Surat. Please share quote details.");

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-2.5' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Official Brand Logo - Fixed single line */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/images/sd-logo.png"
              alt="SD Laser Cutting Surat Logo"
              className="h-11 sm:h-12 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="shrink-0 flex flex-col justify-center">
              <div className="flex items-center gap-1.5 whitespace-nowrap leading-none">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-['Outfit']">
                  SD LASER
                </span>
                <span className="text-xl sm:text-2xl font-bold text-orange-600 tracking-tight font-['Outfit']">
                  CUTTING
                </span>
              </div>
              <p className="text-[11px] tracking-wide font-mono text-slate-500 mt-1 whitespace-nowrap hidden sm:block">
                Surat, Gujarat • 5.0 ★ Rated
              </p>
            </div>
          </a>

          {/* Desktop Navigation - Strictly single line */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`whitespace-nowrap px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Header Actions - Fixed & single line */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href="tel:+918469941403"
              className="whitespace-nowrap flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs font-bold border border-slate-200 transition-colors shrink-0"
              title="Call SD Laser Cutting"
            >
              <Phone className="w-3.5 h-3.5 text-orange-600 shrink-0" />
              <span>+91 84699 41403</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide transition-colors shadow-xs shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp Quote</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href="tel:+918469941403"
              className="p-2 rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4 text-orange-600" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-4 transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-slate-700 hover:text-orange-600 hover:bg-slate-50 font-bold text-sm"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 mt-2">
              <a
                href="tel:+918469941403"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-100 text-slate-900 font-bold text-xs border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                <span>Call Now</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
