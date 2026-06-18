import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';

interface NavigationProps {
  onBookConsultation: (service?: string) => void;
}

export default function Navigation({ onBookConsultation }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Audit & Assurance', href: '#services', category: 'Audit' },
    { name: 'Direct Taxation', href: '#services', category: 'Taxation' },
    { name: 'Startup Advisory', href: '#industries', category: 'Advisory' },
    { name: 'Tax Compliance Deadlines', href: '#deadlines', category: 'Compliance' },
    { name: 'Filing Guide', href: '#guide', category: 'Guide' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg border-b border-primary-light py-3'
          : 'bg-primary border-b border-primary-light/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-accent text-primary p-1.5 rounded-lg group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white tracking-tight leading-none">
                GVC Audit
              </span>
              <span className="text-[10px] text-accent/90 uppercase tracking-widest font-semibold mt-0.5">
                Chartered Accountants
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Consultation Button */}
          <div className="hidden md:block">
            <button
              onClick={() => onBookConsultation('General Corporate Advisory')}
              className="bg-accent hover:bg-white text-primary hover:text-primary font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 transform hover:-translate-y-0.5 shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-b border-primary-light absolute top-full left-0 right-0 p-4 space-y-3 shadow-2xl animate-fade-in">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-300 hover:text-accent py-2 px-3 rounded-lg hover:bg-primary-light/50 transition-all"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookConsultation('General Corporate Advisory');
            }}
            className="w-full bg-accent text-primary font-bold px-4 py-3 rounded-lg text-sm text-center shadow-md cursor-pointer block mt-4"
          >
            Book Free Consultation
          </button>
        </div>
      )}
    </nav>
  );
}
