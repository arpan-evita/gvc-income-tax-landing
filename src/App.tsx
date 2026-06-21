import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Rocket,
  Building2,
  Factory,
  Store,
  ShoppingCart,
  Laptop,
  Briefcase,
  AlertTriangle,
  RefreshCw,
  DollarSign,
  Clock,
  FileText,
  Percent,
  CheckCircle2,
  Phone,
  Shield,
  Star,
  Award,
  TrendingUp,
  Headphones,
  Calendar,
  Lock,
  Search,
  BookOpen,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldAlert,
  HelpCircle,
  Clock3,
  Check,
  User
} from 'lucide-react';

import Navigation from './components/Navigation';
import ConsultationModal from './components/ConsultationModal';
import InteractiveCalculator from './components/InteractiveCalculator';
import HubsMap from './components/HubsMap';
import FAQSection from './components/FAQSection';
import AVCIndiaPage from './components/AVCIndiaPage';

import { PROBLEMS_DATA, INDUSTRIES_DATA, COMPLIANCE_RULES } from './data';
import { IndustryItem, ConsultationBooking } from './types';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(INDUSTRIES_DATA[0]);
  const [activeBookings, setActiveBookings] = useState<ConsultationBooking[]>([]);
  const [selectedProblemId, setSelectedProblemId] = useState<string | null>(null);
  
  // Call Prompt simulation state
  const [showCallAlert, setShowCallAlert] = useState(false);

  // Brand routing state
  const [currentPage, setCurrentPage] = useState<'gvc' | 'avc'>(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    const search = window.location.search;
    if (path.includes('/services/income-tax-direct-tax') || hash === '#avc' || search.includes('brand=avc')) {
      return 'avc';
    }
    return 'gvc';
  });

  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const search = window.location.search;
      if (path.includes('/services/income-tax-direct-tax') || hash === '#avc' || search.includes('brand=avc')) {
        setCurrentPage('avc');
      } else {
        setCurrentPage('gvc');
      }
    };
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleBrandSwitch = (brand: 'gvc' | 'avc') => {
    setCurrentPage(brand);
    window.location.hash = brand === 'avc' ? 'avc' : 'gvc';
  };

  // Sync active bookings from localStorage
  const syncBookings = () => {
    try {
      const stored = localStorage.getItem('gvc_bookings');
      if (stored) {
        setActiveBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    syncBookings();
    window.addEventListener('storage_updated', syncBookings);
    return () => window.removeEventListener('storage_updated', syncBookings);
  }, []);

  const triggerConsultation = (serviceFocus: string = '') => {
    setPrefilledService(serviceFocus);
    setIsConsultationOpen(true);
  };

  // Helper to render industry icons safely
  const renderIndustryIcon = (iconName: string) => {
    const props = { className: "w-8 h-8 text-accent-dark shrink-0" };
    switch (iconName) {
      case 'Rocket': return <Rocket {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Factory': return <Factory {...props} />;
      case 'Store': return <Store {...props} />;
      case 'ShoppingCart': return <ShoppingCart {...props} />;
      case 'Laptop': return <Laptop {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      default: return <Briefcase {...props} />;
    }
  };

  // Helper to map generic icon names to Lucide icons for Problems section
  const renderProblemIcon = (iconName: string) => {
    const props = { className: "w-10 h-10 text-red-500 shrink-0 group-hover:scale-110 transition-transform duration-300" };
    switch (iconName) {
      case 'AlertTriangle': return <AlertTriangle {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'DollarSign': return <DollarSign {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Percent': return <Percent {...props} />;
      default: return <ShieldAlert {...props} />;
    }
  };

  if (currentPage === 'avc') {
    return (
      <div className="min-h-screen relative" id="brand-avc-root">
        <AVCIndiaPage 
          onTriggerConsultation={triggerConsultation} 
          onSwitchBrand={() => handleBrandSwitch('gvc')} 
        />
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          prefilledService={prefilledService}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-soft text-on-surface font-sans scroll-smooth flex flex-col">
      {/* Dynamic Brand Swapper Header Bar */}
      <div className="bg-[#00152c] text-[#fee68c] py-2.5 px-4 text-xs font-semibold border-b border-gray-850">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-accent text-primary text-[10px] uppercase font-black px-1.5 py-0.5 rounded animate-pulse">Brand Portfolios</span>
            <span>Looking for the brand new <strong className="text-white">AVC India</strong> direct tax &amp; ITR filing portal?</span>
          </div>
          <button
            onClick={() => handleBrandSwitch('avc')}
            className="text-[#fed255] hover:text-white underline text-xs font-extrabold cursor-pointer flex items-center gap-1 transition-all"
          >
            Launch AVC India Brand View →
          </button>
        </div>
      </div>

      {/* Structural Headers */}
      <Navigation onBookConsultation={triggerConsultation} />

      {/* Main Content Arena */}
      <main className="flex-grow pt-20">
        
        {/* Banner: Active Bookings Tracker */}
        {activeBookings.length > 0 && (
          <div className="bg-amber-50 border-b border-amber-200 py-3 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
              <div className="flex items-center gap-2 text-amber-900">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse shrink-0"></span>
                <span>
                  <strong>Active Appointment Scheduled:</strong> You have an upcoming partner tax brief for{' '}
                  <span className="font-bold underline">{activeBookings[0].clientName}</span> on{' '}
                  <span className="font-extrabold">{activeBookings[0].preferredDate}</span> ({activeBookings[0].preferredTime}).
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-mono">Reference Ticket: {activeBookings[0].id}</span>
                <button
                  onClick={() => {
                    if (confirm('Cancel this consultation slot?')) {
                      localStorage.removeItem('gvc_bookings');
                      setActiveBookings([]);
                    }
                  }}
                  className="text-red-600 hover:text-red-800 font-bold hover:underline cursor-pointer"
                >
                  Cancel slot
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Section 1: Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary via-primary-light to-primary text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          {/* Subtle background graphics */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/40 via-primary-light/50 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/15 border border-accent/25 rounded-full text-xs font-semibold text-accent tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ICAI Certified Chartered Accountants</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.15]">
                Income Tax Consultant in Gurgaon for <span className="text-accent">MSMEs, Startups</span> &amp; Growing Businesses
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl font-normal leading-relaxed">
                Expertise serving Cyber City, Udyog Vihar, and Greater Gurgaon. We handle notices, complex filings, and statutory audits while you focus on scaling.
              </p>

              {/* USP Checklist Grid */}
              <div className="grid sm:grid-cols-2 gap-y-3.5 gap-x-6 py-2 border-t border-b border-white/10">
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>Corporate Tax Filing (ITR 6)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>Startup Tax Holiday Advisory</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>Scrutiny Notice Representation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>TDS &amp; Compliance Audit</span>
                </div>
              </div>

              {/* Hero Call to Actions */}
              <div className="flex flex-wrap gap-4 pt-1">
                <button
                  onClick={() => setShowCallAlert(true)}
                  className="bg-accent hover:bg-white text-primary font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-primary fill-primary" />
                  Call Now (Instant Desk)
                </button>
                <button
                  onClick={() => triggerConsultation('General Corporate Assessment')}
                  className="bg-primary hover:bg-primary-light text-white font-bold px-6 py-3.5 rounded-xl text-sm border-2 border-white/20 hover:border-white transition-all cursor-pointer"
                >
                  Book Free Tax Consultation
                </button>
              </div>

              {/* Numbers Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mt-8">
                <div>
                  <span className="block text-2xl font-extrabold text-accent leading-none">20+ Years</span>
                  <span className="block text-[11px] text-gray-400 mt-1 uppercase tracking-wider">Combined Experience</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-[#fed255] leading-none">120+</span>
                  <span className="block text-[11px] text-gray-400 mt-1 uppercase tracking-wider">Businesses Managed</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-accent leading-none">99%</span>
                  <span className="block text-[11px] text-gray-400 mt-1 uppercase tracking-wider">Compliance Rating</span>
                </div>
              </div>
            </div>

            {/* Right Graphic/Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-3xl opacity-60"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square border-4 border-white/5 bg-gray-900 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbC_mKlt7wK0RYiAKjfWcK8pwIeNJMSKDnH8GqLP7ReR1sXAX9Y1S2V2oh_9q7-t2NYmQlDS3fPFXMSVFhvlPyq5DLkoz4VGLuyRTeW_AbWVgZXMb4FFSxz86bceiO0GOTPhnKBtDKAblrZz2YQptHIpou7ssOIQjbW1L611r8dvYhhbFiCe33duUX9pkksvjDCinztp8IoQw9QP5cD59htkrUsxnNLVsK44rvXGNim6KqMwHk4tb9Ma2-wH8xqDiBBJ6xua8B3Q"
                  referrerPolicy="no-referrer"
                  alt="Senior Chartered Accountant in Gurgaon Office"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[9px] bg-accent text-primary px-2 py-0.5 rounded-full font-extrabold uppercase tracking-widest block w-fit mb-1.5 animate-pulse">
                      GVC Partners Desk
                    </span>
                    <p className="text-xs font-semibold text-gray-200">
                      Uncompromising fidelity for Cyber City &amp; Udyog Vihar corporations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Common Income Tax Problems */}
        <section className="bg-surface-soft py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#755b00]">
                PAIN POINTS WE SOLVE
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-primary">
                Common Income Tax Problems Businesses Face
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto">
                Missing details and compliance targets invite heavy interest and automated tax notices. Let's resolve them safely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROBLEMS_DATA.map((prob) => {
                const isSelected = selectedProblemId === prob.id;
                return (
                  <div
                    key={prob.id}
                    onClick={() => setSelectedProblemId(isSelected ? null : prob.id)}
                    className={`bg-white rounded-xl p-5 border shadow-sm transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                      isSelected
                        ? 'border-red-300 ring-4 ring-red-100/60'
                        : 'border-gray-200 hover:border-red-150 hover:shadow'
                    }`}
                  >
                    <div>
                      <div className="mb-4">
                        {renderProblemIcon(prob.iconName)}
                      </div>
                      <h3 className="text-base font-bold text-primary group-hover:text-red-700 transition-colors">
                        {prob.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed mt-2">
                        {prob.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <AnimatePresence mode="wait">
                        {isSelected ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-red-50 p-3 rounded-lg border border-red-100 text-xs text-red-950 font-normal leading-relaxed mb-2"
                          >
                            <span className="font-extrabold text-red-800 block mb-0.5">How GVC Solves This:</span>
                            {prob.mitigation}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>

                      <div className="flex items-center justify-between text-xs font-bold text-red-600 group-hover:text-red-700 mt-1">
                        <span>{isSelected ? 'Collapse Mitigation Plan' : 'View GVC Mitigation Plan'}</span>
                        <ArrowRight className={`w-3.5 h-3.5 transform transition-transform ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Complete Income Tax Services */}
        <section id="services" className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary text-center">
              Complete Income Tax Services in Gurgaon
            </h2>

            <div className="grid lg:grid-cols-3 gap-6">
              
              {/* Giant Left Showcase Card */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#00152c] to-[#0e2a47] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row gap-8 justify-between hover:shadow-xl transition-shadow border border-primary">
                <div className="flex-1 space-y-5">
                  <span className="bg-accent text-primary text-[10px] tracking-widest font-extrabold uppercase px-3 py-1 rounded-full w-fit block shadow">
                    Ideal for Pvt Ltd, LLPs &amp; MSMEs
                  </span>
                  
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                      Income Tax Return (ITR) Filing
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed font-sans">
                      Complete reporting and balance sheet structural linking under local corporate guidelines. Protect against mismatches and delayed refunds.
                    </p>
                  </div>

                  <ul className="space-y-3.5 text-xs text-gray-100 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="p-0.5 bg-accent/20 rounded text-accent shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>Statutory compliance for all Indian registry types</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="p-0.5 bg-accent/20 rounded text-accent shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>Detailed Balance sheet structure &amp; audit linking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="p-0.5 bg-accent/20 rounded text-accent shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>Multi-state tax reconciliation &amp; secure delivery</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => triggerConsultation('Income Tax Return (ITR) Filing')}
                    className="bg-accent hover:bg-white text-primary font-bold px-5 py-2.5 rounded-lg text-xs tracking-wide shadow flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    File ITR return on GVC Desk
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Hotlinked Dashboard Image */}
                <div className="w-full md:w-5/12 rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-gray-800">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy3jmY12N_gqMuC7D1SwbvhEglm6o1yMO4C0pRnaPdT5HJbwYnA0ueUnY4vUSslzS1c4uWV4NexO-3Kyt1-8BhTF4BJUvDRbBP1skIQfvJSISpkBOZPVb55bRsi5rEk7_Rmgz1BaPPsbzQV7Af5svCt-FmbiITVFgk3f6e0Q1LgDEXTmiz8l03nVzZlvwVxC0JjRJ085tCxQV4zcH4lHn6kvRMqjSZF4zFjtfdH1OPgCuCz47eiXSoB1E1jFfFYmCh8dsQYYlsvA"
                    referrerPolicy="no-referrer"
                    alt="Tax filing dashboard interface"
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>

              {/* 1. Muted Gold top border card: Strategic Tax */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 border-t-4 border-t-accent hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-primary tracking-tight">
                    Strategic Tax Planning
                  </h4>
                  <p className="text-xs text-gray-500 mt-2.5 leading-relaxed font-sans">
                    Legal tax optimization utilizing research credits (R&amp;D), spatial allowances, and tax-efficient founder pay configurations.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-black text-amber-800">
                    Recover 15-30% Liability
                  </span>
                  <button
                    onClick={() => triggerConsultation('Strategic Tax Planning')}
                    className="text-[11px] font-bold text-primary hover:underline cursor-pointer flex items-center gap-1"
                  >
                    Details <ArrowRight className="w-3" />
                  </button>
                </div>
              </div>

              {/* Notice Support Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 border-t-4 border-t-accent hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-primary tracking-tight">
                    Notice &amp; Assessment Support
                  </h4>
                  <p className="text-xs text-gray-500 mt-2.5 leading-relaxed font-sans">
                    Frictionless handling of electronic assess reopenings (Section 148), discrepancy resolutions, and appellate filings.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 font-mono">
                    Sec 143(1)/143(2) Desk
                  </span>
                  <button
                    onClick={() => triggerConsultation('Notice & Assessment Support')}
                    className="text-[11px] font-bold text-primary hover:underline cursor-pointer flex items-center gap-1"
                  >
                    Review Notice <ArrowRight className="w-3" />
                  </button>
                </div>
              </div>

              {/* TDS Compliance Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 border-t-4 border-t-accent hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-primary tracking-tight">
                    TDS Compliance Management
                  </h4>
                  <p className="text-xs text-gray-500 mt-2.5 leading-relaxed font-sans">
                    Computation routines, quarterly 24Q/26Q deposits, and automated secure form generation with zero manual errors.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 font-mono">
                    Form 16/16A generation
                  </span>
                  <button
                    onClick={() => triggerConsultation('TDS Compliance Management')}
                    className="text-[11px] font-bold text-primary hover:underline cursor-pointer flex items-center gap-1"
                  >
                    Setup Desk <ArrowRight className="w-3" />
                  </button>
                </div>
              </div>

              {/* Direct Tax Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 border-t-4 border-t-accent hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-primary tracking-tight">
                    Direct Tax Advisory
                  </h4>
                  <p className="text-xs text-gray-500 mt-2.5 leading-relaxed font-sans">
                    Transfer pricing evaluations, international taxation schedules, and DTAA certifications for foreign subsidiaries operations.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 font-mono">
                    Cross-border treaty
                  </span>
                  <button
                    onClick={() => triggerConsultation('Direct Tax Advisory')}
                    className="text-[11px] font-bold text-primary hover:underline cursor-pointer flex items-center gap-1"
                  >
                    Request Advisory <ArrowRight className="w-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Industry-Specific Solutions */}
        <section id="industries" className="bg-surface-soft py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#755b00]">
                TAILORED INDUSTRY BLUEPRINTS
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Industry-Specific Income Tax Solutions
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto">
                Select your corporate structure sector below to instantly reveal specialized tax structures and reporting checklists.
              </p>
            </div>

            {/* Grid of Industries plus Info box */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {INDUSTRIES_DATA.map((ind) => {
                const isSelected = selectedIndustry?.id === ind.id;
                return (
                  <div
                    key={ind.id}
                    onClick={() => setSelectedIndustry(isSelected ? null : ind)}
                    className={`bg-white p-5 rounded-2xl shadow-sm border transition-all cursor-pointer group hover:-translate-y-1 ${
                      isSelected
                        ? 'border-accent ring-2 ring-accent/30 bg-accent/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="mb-4">
                      {renderIndustryIcon(ind.iconName)}
                    </div>
                    <h4 className="text-base font-extrabold text-primary group-hover:text-accent-dark transition-colors">
                      {ind.name}
                    </h4>
                    <p className="text-xs text-gray-500 leading-normal.6 mt-1 flex-grow">
                      {ind.description}
                    </p>
                  </div>
                );
              })}

              {/* Static "Your Industry" block */}
              <div className="bg-white p-5 rounded-2xl border border-dashed border-gray-300 flex items-center justify-center text-center">
                <div className="space-y-2">
                  <h4 className="text-sm font-extrabold text-primary">Your Specific Sector Not Listed?</h4>
                  <p className="text-[11px] text-gray-500 max-w-xs leading-normal">
                    We serve over 25+ specific business classifications right here across Haryana and India.
                  </p>
                  <button
                    onClick={() => triggerConsultation('Custom Industry Advisory')}
                    className="text-xs font-black text-[#755b00] hover:underline cursor-pointer inline-block"
                  >
                    Contact GVC Support Desk
                  </button>
                </div>
              </div>
            </div>

            {/* Selected Industry Drawer Details */}
            <AnimatePresence mode="wait">
              {selectedIndustry && (
                <motion.div
                  key={selectedIndustry.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200/80 p-6 md:p-8 space-y-6"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-100">
                    <div>
                      <div className="flex items-center gap-2">
                        {renderIndustryIcon(selectedIndustry.iconName)}
                        <h3 className="text-xl font-black text-primary">
                          {selectedIndustry.name} Compliance Profile
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Simulated tax planning passport engineered by senior partners.</p>
                    </div>
                    <button
                      onClick={() => triggerConsultation(`Tax Audit Blueprint - ${selectedIndustry.name}`)}
                      className="bg-primary hover:bg-primary-light text-white font-bold py-2.5 px-5 rounded-xl text-xs shadow cursor-pointer transition-all shrink-0"
                    >
                      Export custom {selectedIndustry.name} Strategy
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-normal">
                    
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-150">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-2">Key Advantaged Section</span>
                      <p className="font-bold text-gray-800">{selectedIndustry.blueprint.keyIncentive}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-150">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-2">Critical Registration Form</span>
                      <p className="font-mono font-bold text-gray-800">{selectedIndustry.blueprint.criticalForm}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-150">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-2">Filing Cycle Routine</span>
                      <p className="font-bold text-gray-700">{selectedIndustry.blueprint.filingFrequency}</p>
                    </div>

                    <div className="bg-red-50/50 p-4 rounded-xl border border-red-100">
                      <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider block mb-2">Primary Risk Penalty</span>
                      <p className="font-semibold text-red-950">{selectedIndustry.blueprint.commonRisk}</p>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Section 5: Why Businesses Trust GVC Audit */}
        <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-accent">
                THE ASSURANCE VALUE PROPOSITION
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Why Businesses Trust GVC Audit
              </h2>
              <p className="text-sm text-gray-300 max-w-xl mx-auto">
                More than accountants; we are strategic growth partners rooted inside the Gurgaon enterprise system.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="flex gap-4">
                <div className="bg-white/10 p-2.5 rounded-xl h-fit text-accent">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Partner-Led Handling</h4>
                  <p className="text-xs text-gray-300 leading-normal.6">
                    No junior handoffs or opaque automation workflows. Every file undergoes formal senior partner checking and reviews.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/10 p-2.5 rounded-xl h-fit text-accent">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Zero Notice Guarantee</h4>
                  <p className="text-xs text-gray-300 leading-normal.6">
                    Ensuring detailed preemptive transaction alignment with AIS, TIS, and 26AS directories to block notice triggers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/10 p-2.5 rounded-xl h-fit text-accent">
                  <Clock3 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Proactive Deadlines</h4>
                  <p className="text-xs text-gray-300 leading-normal.6">
                    Alerting you 15 days before compliance dates. GVC completely absorbs late fee risks with proactive updates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/10 p-2.5 rounded-xl h-fit text-accent">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Ethical Compliance</h4>
                  <p className="text-xs text-gray-300 leading-normal.6">
                    Rigorous adherence to the Institute of Chartered Accountants of India guidelines, safeguarding public repute.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/10 p-2.5 rounded-xl h-fit text-accent">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Growth Focus</h4>
                  <p className="text-xs text-gray-300 leading-normal.6">
                    Mapping deep financial indicators such as debt/service bounds and credit lines, not just basic calculation schedules.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/10 p-2.5 rounded-xl h-fit text-accent">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Ongoing Support</h4>
                  <p className="text-xs text-gray-300 leading-normal.6">
                    Year-round standby desk active. Our expert representatives don't vanish once filing window dates elapse.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 6: Our 5-Step Process */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-3xl font-extrabold text-primary text-center">
              Our 5-Step Compliance Process
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              
              <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-150 flex flex-col justify-between">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-sm font-extrabold shadow mb-4">
                  1
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1.5 text-sm">Discovery</h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Corporate onboarding and direct transaction gathering from 26AS/AIS.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-150 flex flex-col justify-between">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-sm font-extrabold shadow mb-4">
                  2
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1.5 text-sm">Reconciliation</h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Strict matching of entity ledgers with central Government IT Department listings.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-150 flex flex-col justify-between">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-sm font-extrabold shadow mb-4">
                  3
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1.5 text-sm">Computation</h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Calculating structural tax base while injecting applicable lawful tax deductions.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-150 flex flex-col justify-between">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-sm font-extrabold shadow mb-4">
                  4
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1.5 text-sm">Filing</h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Secure transmission of audited files and corporate structures to the secure government terminal.
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 p-5 rounded-2xl border border-accent/30 flex flex-col justify-between">
                <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center mx-auto text-sm font-black shadow mb-4">
                  5
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1.5 text-sm">Ongoing Support</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Fulfilling structural status checking, penalty alerts, and advising on next financial seasons strategy.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 7: Benefits of Professional Tax Advisory */}
        <section className="bg-surface-soft py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-3xl font-extrabold text-primary text-center">
              Benefits of Professional Tax Advisory
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex gap-4">
                <div className="p-2 bg-primary/5 text-primary rounded-xl h-fit">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-primary mb-1">Peace of Mind</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Ensure absolute regulatory tracking by leaving records to verified ICAI auditors.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex gap-4">
                <div className="p-2 bg-primary/5 text-primary rounded-xl h-fit">
                  <Percent className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-primary mb-1">Tax Savings</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Identification of lawful deductions and spatial credits easily missed with self-filing.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex gap-4">
                <div className="p-2 bg-primary/5 text-primary rounded-xl h-fit">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-primary mb-1">Notice Prevention</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Preemptive reconciliation completely neutralizes computerized discrepancy alerts and audit triggers.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex gap-4">
                <div className="p-2 bg-primary/5 text-primary rounded-xl h-fit">
                  <Clock3 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-primary mb-1">Faster Refunds</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Eliminating ledgers issues ensures seamless auto-processing at Bangalore CPC centers.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex gap-4">
                <div className="p-2 bg-primary/5 text-primary rounded-xl h-fit">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-primary mb-1">Financial Clarity</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Continuous feedback loops highlight operational profitability and overhead alignments.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex gap-4">
                <div className="p-2 bg-primary/5 text-primary rounded-xl h-fit">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-primary mb-1">Audit Readiness</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Keeping standard ledger trails formatted to handle physical assessment sweeps effortlessly.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 8: Interactive Estimator & Local Map Area */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#755b00]">
                Interactive Tools Desk
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Evaluate Tax Slabs &amp; Map Gurgaon Presence
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto">
                Use our built-in estimators to check your tax entity brackets, and interact with the GVC map below to find local hubs.
              </p>
            </div>

            {/* Interactive Calculator Block */}
            <div className="mt-8">
              <InteractiveCalculator onBookConsultation={triggerConsultation} />
            </div>

            {/* Local SEO section and Map implementation */}
            <div className="mt-16 grid lg:grid-cols-12 gap-8 items-center pt-8 border-t border-gray-150">
              <div className="lg:col-span-4 space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-widest font-extrabold text-[#755b00]">
                    LOCAL SUITE NETWORK
                  </span>
                  <h3 className="text-2xl font-extrabold text-primary tracking-tight mt-1">
                    Tax Consultant Across Gurgaon
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    We render both on-site physical support and cloud-based accounting reviews for enterprises based in these primary Gurgaon sectors:
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3.5 text-xs font-bold text-primary">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>Cyber City</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>Udyog Vihar</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>Golf Course Road</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>Sohna Road</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>DLF Phases 1-5</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>Manesar</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>Delhi NCR Region</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-[11px] text-gray-400 italic">
                    "Our representative desk sits within 15 minutes of any major industrial hub, ensuring smooth document handovers."
                  </p>
                </div>
              </div>

              {/* Map Column */}
              <div className="lg:col-span-8">
                <HubsMap />
              </div>
            </div>

          </div>
        </section>

        {/* Section 10.5: Complete Guide - Professional Blog Layout */}
        <section id="guide" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Section Header */}
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#755b00] bg-accent/20 px-3 py-1 rounded-full inline-block">
                EXPERT COMPLIANCE KNOWLEDGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight max-w-4xl mx-auto leading-tight">
                COMPLETE GUIDE TO INCOME TAX FILING, TAX PLANNING &amp; BUSINESS TAX COMPLIANCE FOR BUSINESSES IN GURGAON
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                A definitive manual by Gupta Varundeep &amp; Co. answering strategic income tax navigation queries for DLF Cyber City, Udyog Vihar, Golf Course Road, and regional enterprises.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Quick Navigation Sidebar Index */}
              <aside className="lg:col-span-4 lg:sticky lg:top-24 bg-gray-50/80 border border-gray-150 p-6 rounded-2xl hidden lg:block">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#755b00] block mb-4">
                  Guide Index
                </span>
                <nav className="space-y-2 text-xs">
                  <a href="#guide-compliance" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    1. Understanding Tax Compliance
                  </a>
                  <a href="#guide-why-planning" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    2. Why Planning Matters for MSMEs
                  </a>
                  <a href="#guide-mistakes" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    3. Common Income Tax Mistakes
                  </a>
                  <a href="#guide-notices" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    4. Understanding Tax Notices
                  </a>
                  <a href="#guide-strategies" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    5. Planning Strategies for Growth
                  </a>
                  <a href="#guide-startups" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    6. Tax Compliance for Startups
                  </a>
                  <a href="#guide-ecommerce" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    7. Filing for Ecommerce
                  </a>
                  <a href="#guide-firms" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    8. Compliance for Professional Firms
                  </a>
                  <a href="#guide-reduce" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    9. Legally Reducing Liabilities
                  </a>
                  <a href="#guide-consultant" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    10. Working with a Consultant
                  </a>
                  <a href="#guide-gurgaon" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    11. Why Gurgaon Chooses Advisory
                  </a>
                  <a href="#guide-supports" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    12. How GVC Audit Supports You
                  </a>
                  <a href="#guide-looking" className="block text-gray-650 hover:text-primary hover:font-bold transition-all py-1">
                    13. Book GVC Advisory Desk
                  </a>
                </nav>
                <div className="mt-6 pt-5 border-t border-gray-200">
                  <p className="text-[11px] text-gray-400">
                    Need immediate clarity? Contact our certified CA representational desk directly.
                  </p>
                  <button
                    onClick={() => triggerConsultation("General Guide Inquiry")}
                    className="mt-3 w-full bg-[#00152c] hover:bg-[#0e2a47] text-white font-bold py-2 rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Speak with a Consultant
                  </button>
                </div>
              </aside>

              {/* Blog Content Column */}
              <div className="lg:col-span-8 space-y-12 text-sm text-gray-700 leading-relaxed font-sans max-w-none">
                
                {/* 1 */}
                <div id="guide-compliance" className="scroll-mt-24 space-y-4">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    Understanding Income Tax Compliance for Modern Businesses
                  </h3>
                  <p>
                    Income tax compliance has evolved significantly over the last decade. What was once a straightforward annual filing process has now become a comprehensive framework involving digital reporting, transaction monitoring, TDS reconciliation, Annual Information Statements (AIS), Form 26AS matching, advance tax obligations, and regulatory scrutiny.
                  </p>
                  <p>
                    For businesses operating in Gurgaon, maintaining tax compliance is not merely a legal requirement—it is a critical component of financial stability, investor confidence, and long-term growth.
                  </p>
                  <p>
                    Whether you are a startup operating from Cyber City, a manufacturing company in Udyog Vihar, a professional service firm on Golf Course Road, or an ecommerce business serving customers across India, tax compliance impacts every aspect of your business.
                  </p>
                  <p>
                    Many business owners assume income tax filing simply involves submitting an Income Tax Return (ITR) before the due date. In reality, tax compliance begins long before the return is filed. It starts with accurate bookkeeping, proper expense classification, timely TDS compliance, maintenance of supporting documentation, and strategic tax planning throughout the year.
                  </p>
                  <p>
                    Businesses that treat tax planning as a year-round process typically experience fewer notices, lower compliance risks, improved cash flow, and stronger financial performance.
                  </p>
                </div>

                <hr className="border-gray-150" />

                {/* 2 */}
                <div id="guide-why-planning" className="scroll-mt-24 space-y-4">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    Why Income Tax Planning Is Important for MSMEs
                  </h3>
                  <p>
                    MSMEs often operate with limited internal finance resources. Business owners focus on operations, sales, staffing, customer relationships, and growth initiatives, leaving taxation and compliance as secondary priorities.
                  </p>
                  <p>
                    Unfortunately, this reactive approach frequently results in:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Higher tax liabilities</li>
                    <li>Missed deductions</li>
                    <li>Delayed filings</li>
                    <li>Compliance penalties</li>
                    <li>Tax notices</li>
                    <li>Cash flow challenges</li>
                  </ul>
                  <p>
                    Professional tax planning helps MSMEs align their financial decisions with tax efficiency.
                  </p>
                  <p>
                    For example, decisions involving:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Capital expenditure</li>
                    <li>Business expansion</li>
                    <li>Director remuneration</li>
                    <li>Asset purchases</li>
                    <li>Employee benefits</li>
                    <li>Business restructuring</li>
                  </ul>
                  <p>
                    all have tax implications.
                  </p>
                  <p>
                    When planned properly, these decisions can significantly improve tax outcomes while maintaining full compliance with applicable regulations.
                  </p>
                  <div className="border-l-4 border-[#00152c] bg-gray-50 p-4 rounded-r-xl italic text-gray-600 text-xs font-semibold">
                    Tax planning is not about avoiding taxes. It is about legally optimizing tax liabilities through informed financial decision-making.
                  </div>
                </div>

                <hr className="border-gray-150" />

                {/* 3 */}
                <div id="guide-mistakes" className="scroll-mt-24 space-y-6">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    Common Income Tax Mistakes Businesses Make
                  </h3>
                  <p>
                    Through our experience working with startups, MSMEs, trading companies, and professionals, we frequently observe recurring mistakes that create unnecessary compliance risks.
                  </p>

                  <div className="space-y-2 p-5 bg-gray-55/40 border border-gray-100 rounded-2xl">
                    <h4 className="font-extrabold text-primary text-base">Treating Tax Planning as a Year-End Activity</h4>
                    <p className="text-gray-600 text-xs">
                      Many businesses begin discussing tax planning only a few weeks before filing deadlines. By that stage, most financial decisions have already been made. Effective tax planning should occur throughout the financial year.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-gray-55/40 border border-gray-100 rounded-2xl">
                    <h4 className="font-extrabold text-primary text-base">Ignoring Advance Tax Obligations</h4>
                    <p className="text-gray-600 text-xs">
                      Businesses often underestimate the importance of advance tax. Failure to pay advance tax on time may result in interest liabilities under applicable provisions of the Income Tax Act. Advance tax planning helps businesses avoid surprises and manage cash flow more effectively.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-gray-55/40 border border-gray-100 rounded-2xl">
                    <h4 className="font-extrabold text-primary text-base">Poor Documentation</h4>
                    <p className="text-gray-600 text-xs mb-2">
                      Even legitimate deductions can be challenged if supporting documentation is unavailable. Businesses should maintain:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-xs">
                      <li>Invoices</li>
                      <li>Contracts</li>
                      <li>Payment records</li>
                      <li>Expense approvals</li>
                      <li>Investment documentation</li>
                      <li>Vendor agreements</li>
                    </ul>
                    <p className="text-gray-600 text-xs mt-2 font-medium">
                      Proper record keeping is one of the strongest defenses during assessments or scrutiny proceedings.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-gray-55/40 border border-gray-100 rounded-2xl">
                    <h4 className="font-extrabold text-primary text-base">TDS Non-Compliance</h4>
                    <p className="text-gray-600 text-xs">
                      Incorrect TDS deductions, delayed deposits, and filing errors remain among the most common compliance issues faced by businesses. TDS compliance should be monitored continuously rather than only during filing periods.
                    </p>
                  </div>

                  <div className="space-y-2 p-5 bg-gray-55/40 border border-gray-100 rounded-2xl">
                    <h4 className="font-extrabold text-primary text-base">Ignoring AIS and Form 26AS</h4>
                    <p className="text-gray-600 text-xs">
                      Modern tax compliance increasingly relies on data matching. AIS and Form 26AS contain information reported by banks, financial institutions, employers, vendors, and other third parties. Any mismatch between reported information and tax returns can increase the likelihood of notices or scrutiny.
                    </p>
                  </div>
                </div>

                <hr className="border-gray-150" />

                {/* 4 */}
                <div id="guide-notices" className="scroll-mt-24 space-y-4">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    Understanding Income Tax Notices
                  </h3>
                  <p>
                    Receiving an income tax notice is often stressful for business owners. However, not every notice indicates wrongdoing. Many notices are generated automatically due to data mismatches or information verification requirements.
                  </p>
                  <p>
                    Common reasons include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>AIS discrepancies</li>
                    <li>Form 26AS mismatches</li>
                    <li>TDS reporting issues</li>
                    <li>High-value transactions</li>
                    <li>Unreported income</li>
                    <li>Filing inconsistencies</li>
                  </ul>
                  <p>
                    The key is responding promptly and accurately. Ignoring notices can escalate matters unnecessarily. Professional guidance ensures responses are supported by proper documentation and compliance records.
                  </p>
                </div>

                <hr className="border-gray-150" />

                {/* 5 */}
                <div id="guide-strategies" className="scroll-mt-24 space-y-4">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    Tax Planning Strategies for Growing Businesses
                  </h3>
                  <p>
                    Tax planning should support business growth rather than restrict it. Some practical tax planning areas include:
                  </p>

                  <div className="space-y-1 pt-2">
                    <h4 className="font-bold text-primary text-sm">Business Structure Optimization</h4>
                    <p className="text-gray-650 text-xs leading-relaxed">
                      The tax implications of operating as a Proprietorship, Partnership Firm, LLP, or Private Limited Company can vary significantly. Choosing the right structure influences taxation, compliance requirements, and future growth opportunities.
                    </p>
                  </div>

                  <div className="space-y-1 pt-2">
                    <h4 className="font-bold text-primary text-sm">Depreciation Planning</h4>
                    <p className="text-gray-650 text-xs leading-relaxed">
                      Businesses investing in equipment, machinery, technology infrastructure, or commercial assets should evaluate depreciation benefits as part of tax planning. Proper planning helps maximize allowable deductions.
                    </p>
                  </div>

                  <div className="space-y-1 pt-2">
                    <h4 className="font-bold text-primary text-sm">Director Remuneration Planning</h4>
                    <p className="text-gray-650 text-xs leading-relaxed">
                      For many business owners, remuneration structures significantly influence overall tax outcomes. Balancing salary, profit distribution, and other compensation mechanisms requires careful consideration.
                    </p>
                  </div>

                  <div className="space-y-1 pt-2">
                    <h4 className="font-bold text-primary text-sm">Capital Investment Planning</h4>
                    <p className="text-gray-650 text-xs leading-relaxed">
                      Major investments should be evaluated not only from an operational perspective but also from a tax perspective. Timing and structuring decisions can affect tax liabilities.
                    </p>
                  </div>

                  <div className="space-y-1 pt-2">
                    <h4 className="font-bold text-primary text-sm">Loss Set-Off &amp; Carry Forward Benefits</h4>
                    <p className="text-gray-650 text-xs leading-relaxed">
                      Many businesses fail to utilize available provisions relating to business losses. Understanding how losses can be adjusted or carried forward may create valuable tax benefits.
                    </p>
                  </div>
                </div>

                <hr className="border-gray-150" />

                {/* 6 */}
                <div id="guide-startups" className="scroll-mt-24 space-y-4">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    Tax Compliance for Startups
                  </h3>
                  <p>
                    Startups face unique challenges because taxation intersects with fundraising, equity issuance, ESOP structures, founder compensation, investor reporting, and growth planning.
                  </p>
                  <p>
                    Early-stage businesses often underestimate the importance of establishing tax-compliant systems. However, investors increasingly evaluate financial controls, tax compliance, and regulatory readiness during due diligence processes.
                  </p>
                  <p>
                    A startup with strong compliance systems is generally more attractive to investors and strategic partners.
                  </p>
                </div>

                <hr className="border-gray-150" />

                {/* 7 */}
                <div id="guide-ecommerce" className="scroll-mt-24 space-y-4">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    Income Tax Filing for Ecommerce Businesses
                  </h3>
                  <p>
                    Ecommerce businesses face increasingly complex tax environments due to marketplace sales, multiple payment gateways, interstate transactions, advertising expenses, and vendor management.
                  </p>
                  <p>
                    Accurate bookkeeping and tax reporting are essential. Businesses must ensure that revenue recognition, expense classification, and reporting systems are aligned with compliance requirements.
                  </p>
                </div>

                <hr className="border-gray-150" />

                {/* 8 */}
                <div id="guide-firms" className="scroll-mt-24 space-y-4">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    Tax Compliance for Professional Service Firms
                  </h3>
                  <p>
                    Consultants, architects, agencies, legal professionals, healthcare providers, and freelancers often face different tax considerations than product-based businesses.
                  </p>
                  <p>
                    Key focus areas include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Income recognition</li>
                    <li>Expense management</li>
                    <li>Professional deductions</li>
                    <li>Advance tax planning</li>
                    <li>Compliance reporting</li>
                  </ul>
                  <p>
                    Professional tax advisory helps ensure income is reported accurately while maximizing legitimate deductions.
                  </p>
                </div>

                <hr className="border-gray-150" />

                {/* 9 */}
                <div id="guide-reduce" className="scroll-mt-24 space-y-4">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    How Businesses Can Reduce Tax Liability Legally
                  </h3>
                  <p>
                    Many business owners search for ways to "save tax." The better approach is understanding how to optimize tax liabilities through compliance-focused planning.
                  </p>
                  <p>
                    Some common areas include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-sans">
                    <li>Proper expense classification</li>
                    <li>Depreciation optimization</li>
                    <li>Business structure reviews</li>
                    <li>Investment planning</li>
                    <li>Advance tax management</li>
                    <li>Profit distribution strategies</li>
                    <li>Documentation improvements</li>
                  </ul>
                  <p>
                    Every recommendation should align with applicable tax laws and regulatory requirements.
                  </p>
                </div>

                <hr className="border-gray-150" />

                {/* 10 */}
                <div id="guide-consultant" className="scroll-mt-24 space-y-4">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    The Importance of Working With an Income Tax Consultant
                  </h3>
                  <p>
                    As businesses grow, tax decisions become increasingly complex. Professional tax consultants help businesses:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-sans">
                    <li>Reduce compliance risks</li>
                    <li>Improve tax efficiency</li>
                    <li>Respond to notices</li>
                    <li>Maintain documentation</li>
                    <li>Manage assessments</li>
                    <li>Improve financial planning</li>
                    <li>Support growth initiatives</li>
                  </ul>
                  <p>
                    Instead of reacting to tax problems after they occur, businesses can proactively manage risk and create stronger financial systems.
                  </p>
                </div>

                <hr className="border-gray-150" />

                {/* 11 */}
                <div id="guide-gurgaon" className="scroll-mt-24 space-y-4">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    Why Businesses in Gurgaon Choose Professional Tax Advisory
                  </h3>
                  <p>
                    Gurgaon is one of India's fastest-growing commercial ecosystems. The city is home to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Startups</li>
                    <li>Technology companies</li>
                    <li>Manufacturers</li>
                    <li>Ecommerce brands</li>
                    <li>Consulting firms</li>
                    <li>Professional service organizations</li>
                  </ul>
                  <p>
                    With increasing regulatory oversight and digital reporting requirements, businesses require more than annual filing support. They need ongoing advisory and compliance management. Professional tax advisors help businesses navigate regulatory complexity while supporting growth objectives.
                  </p>
                </div>

                <hr className="border-gray-150" />

                {/* 12 */}
                <div id="guide-supports" className="scroll-mt-24 space-y-4">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    How GVC Supports Businesses
                  </h3>
                  <p>
                    At Gupta Varundeep &amp; Co. (GVC Audit), we believe taxation should support business growth rather than create uncertainty.
                  </p>
                  <p>
                    Our approach combines:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-sans">
                    <li>Tax Planning</li>
                    <li>Income Tax Filing</li>
                    <li>TDS Compliance</li>
                    <li>Direct Tax Advisory</li>
                    <li>Notice Handling</li>
                    <li>Compliance Monitoring</li>
                    <li>Business-Focused Guidance</li>
                  </ul>
                  <p>
                    We work closely with startups, MSMEs, professionals, manufacturers, trading businesses, and ecommerce companies across Gurgaon, Delhi NCR, and India.
                  </p>
                  <p className="font-extrabold text-primary pt-2">
                    Our objective is simple: Help businesses stay compliant, reduce risk, optimize tax efficiency, and make confident financial decisions.
                  </p>
                </div>

                <hr className="border-gray-150" />

                {/* 13 */}
                <div id="guide-looking" className="scroll-mt-24 space-y-6">
                  <h3 className="text-xl font-extrabold text-primary border-l-4 border-accent pl-3">
                    Looking for an Income Tax Consultant in Gurgaon?
                  </h3>
                  <p>
                    Whether you need:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-750">
                    <li>Income Tax Filing Services</li>
                    <li>Business Tax Filing Services</li>
                    <li>Tax Planning Services for MSMEs</li>
                    <li>Direct Tax Advisory</li>
                    <li>TDS Compliance Support</li>
                    <li>Income Tax Notice Assistance</li>
                  </ul>
                  <p>
                    our team is ready to help.
                  </p>
                  
                  <div className="bg-gradient-to-br from-[#00152c] to-[#0e2a47] text-white p-6 rounded-2xl border border-primary text-center space-y-4 mt-6 shadow-lg">
                    <p className="text-sm text-gray-200">
                      Book a consultation with GVC Audit and discover how structured tax planning and professional advisory can strengthen your business while keeping you compliant with evolving tax regulations.
                    </p>
                    <button
                      onClick={() => triggerConsultation("Guide Final Review")}
                      className="bg-accent hover:bg-white text-primary font-bold px-6 py-3 rounded-xl text-xs transition-colors cursor-pointer shadow inline-flex items-center gap-2"
                    >
                      Book Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Added: Entity Tax Table & Compliance Deadlines below Guide content */}
            <div className="mt-20 pt-16 border-t border-gray-150 space-y-12">
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                  Entity Compliance Guidelines &amp; Deadlines
                </h3>
                <p className="text-sm text-gray-500 max-w-xl mx-auto">
                  Compare direct reporting requirements, standard tax structures, and mandatory checklist rules.
                </p>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-2xl border border-gray-200/80 shadow-sm bg-white">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#00152c] text-white">
                    <tr>
                      <th className="p-4 font-bold tracking-wider">Entity Type</th>
                      <th className="p-4 font-bold tracking-wider">Key Forms</th>
                      <th className="p-4 font-bold tracking-wider">Tax Rate</th>
                      <th className="p-4 font-bold tracking-wider">Audit Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 font-sans">
                    {COMPLIANCE_RULES.map((rule) => (
                      <tr key={rule.entityType} className="hover:bg-gray-50/70 transition-colors">
                        <td className="p-4 font-extrabold text-primary">{rule.entityType}</td>
                        <td className="p-4 font-mono font-bold text-gray-500">{rule.keyForms}</td>
                        <td className="p-4 text-gray-750 font-medium">{rule.taxRate}</td>
                        <td className="p-4 text-gray-700 leading-normal">{rule.auditRequirement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Dark Container: Key Compliance Deadlines */}
              <div id="deadlines" className="bg-[#0e2a47] rounded-2xl p-6 sm:p-8 text-white space-y-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <h4 className="text-lg font-bold tracking-tight text-white">
                    Upcoming Compliance Deadlines to Remember
                  </h4>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-normal">
                  <div className="bg-primary/25 p-4 rounded-xl border border-[#002f5a] space-y-1">
                    <span className="block text-[#fed255] font-extrabold">31st July</span>
                    <p className="text-gray-300">
                      Deadline for Individual/Non-Audit business tax filings. Failure results in up to ₹5,000 late fee under Sec 234F.
                    </p>
                  </div>

                  <div className="bg-primary/25 p-4 rounded-xl border border-[#002f5a] space-y-1">
                    <span className="block text-[#fed255] font-extrabold">30th September</span>
                    <p className="text-gray-300">
                      Submission of Form 3CA/3CD Tax Audit reports for corporations matching Indian revenue size requirements.
                    </p>
                  </div>

                  <div className="bg-primary/25 p-4 rounded-xl border border-[#002f5a] space-y-1">
                    <span className="block text-[#fed255] font-extrabold">31st October</span>
                    <p className="text-gray-300">
                      Filing deadline for audited Corporate structures (Form ITR-6) and partnering profiles.
                    </p>
                  </div>

                  <div className="bg-primary/25 p-4 rounded-xl border border-[#002f5a] space-y-1">
                    <span className="block text-[#fed255] font-extrabold">15th (Quarterly)</span>
                    <p className="text-gray-300">
                      Advance Tax deposit increments (June, Sep, Dec, Mar) to avoid heavy Section 234B/C interest penalties.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 9: Searchable FAQs */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#755b00]">
                TAX KNOWLEDGE CENTER
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                Income Tax FAQ Search Suite
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto">
                Browse our curated, search-enabled catalog answering common filing, notice audit, and startup tax deduction questions.
              </p>
            </div>

            <FAQSection onBookConsultation={triggerConsultation} />
          </div>
        </section>

        {/* Final CTA: Section 11 */}
        <section className="bg-accent text-primary-light py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Accent decoration overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#241a00]">
              Ready to Bullet-Proof Your Tax Compliance?
            </h2>
            <p className="text-sm sm:text-base text-[#584400] max-w-xl mx-auto leading-normal">
              Don't leave notices to chance. Let GVC Audit manage your accounting compliance while you scale your enterprise in Gurgaon.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button
                onClick={() => triggerConsultation('Bullet-Proof Review')}
                className="bg-[#001c38] hover:bg-primary-light text-white font-extrabold px-7 py-3.5 rounded-xl text-sm shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                Start Your Free Consultation
              </button>
              <button
                onClick={() => {
                  alert('Our expert desk is ready! Call us directly at: +91 124 496 9001');
                }}
                className="bg-white hover:bg-gray-100 text-[#001c38] font-bold px-7 py-3.5 rounded-xl text-sm border-2 border-primary-light transition-all cursor-pointer"
              >
                Talk to a Tax Expert Now
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#00152c] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Column 1 info */}
            <div className="md:col-span-2 space-y-4">
              <span className="text-lg font-black text-white tracking-tight block">GVC Audit</span>
              <p className="text-xs text-gray-300 max-w-sm leading-relaxed">
                ICAI-certified Chartered Accountants delivering first-class audit verification, strategic direct tax planning, and notice advisory for startups and MSMEs here in Gurgaon.
              </p>
              <div className="flex gap-4 text-xs text-gray-400">
                <span>Cyber City</span> • <span>Udyog Vihar</span> • <span>DLF Phase 1-5</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-3.5 text-xs text-gray-300">
              <span className="font-extrabold text-white block uppercase tracking-wider">Quick Links</span>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-accent transition-colors">Our Tax Services</a></li>
                <li><a href="#industries" className="hover:text-accent transition-colors">Industry Solutions</a></li>
                <li><a href="#calculator" className="hover:text-accent transition-colors">Interactive Estimation Tool</a></li>
                <li><a href="#deadlines" className="hover:text-accent transition-colors">Compliance Deadlines</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-3.5 text-xs text-gray-300">
              <span className="font-extrabold text-white block uppercase tracking-wider">Legal Directory</span>
              <ul className="space-y-2 font-sans">
                <li><span className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</span></li>
                <li><span className="hover:text-accent cursor-pointer transition-colors">Terms of Service</span></li>
                <li><span className="hover:text-accent cursor-pointer transition-colors">Cookie Guidelines</span></li>
                <li><span className="hover:text-accent cursor-pointer transition-colors">ICAI Disclaimer</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center text-[10px] text-gray-400 font-sans">
            <p>© 2026 GVC Audit Chartered Accountants. All rights reserved. Operating under regulations of Haryana &amp; India.</p>
          </div>
        </div>
      </footer>

      {/* Booking Form Dialog Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledService={prefilledService}
      />

      {/* Call Now Modal Dialogue */}
      <AnimatePresence>
        {showCallAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl shadow-2xl p-6 border border-gray-100 max-w-sm text-center space-y-4"
            >
              <div className="w-12 h-12 bg-accent/20 text-accent-dark rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Phone className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-primary">Dialing GVC Partner Services</h4>
                <p className="text-xs text-gray-500 mt-1">Our dedicated hotline connects you directly with a Certified CA.</p>
              </div>
              <div className="text-lg font-black text-primary font-mono tracking-wide py-2 bg-gray-50 rounded-lg">
                +91 124 496 9001
              </div>
              <p className="text-[10px] text-gray-400">Desk active Mon-Sat: 10:00 AM to 6:30 PM</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCallAlert(false)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 rounded-lg text-xs transition-colors"
                >
                  Close
                </button>
                <a
                  href="tel:+911244969001"
                  className="w-full bg-primary hover:bg-primary-light text-white font-bold py-2 rounded-lg text-xs text-center transition-colors flex items-center justify-center"
                >
                  Place Call
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
