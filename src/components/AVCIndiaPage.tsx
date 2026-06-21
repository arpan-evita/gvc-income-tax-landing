import React, { useState } from 'react';
import {
  Check,
  ChevronDown,
  ChevronUp,
  User,
  Briefcase,
  TrendingUp,
  FileText,
  BadgeAlert,
  ArrowRight,
  ShieldCheck,
  Building,
  DollarSign,
  Globe,
  Calendar,
  MessageCircle,
  Phone,
  CheckCircle,
  HelpCircle,
  Activity,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  INTRO_PARA_1, 
  INTRO_PARA_2, 
  INTRO_PARA_3, 
  INTRO_PARA_4, 
  EDITORIAL_CONTENT 
} from './avcData';
import AVCIndiaFaqs from './AVCIndiaFaqs';

interface AVCIndiaPageProps {
  onTriggerConsultation: (serviceFocus: string) => void;
  onSwitchBrand: () => void;
}

export default function AVCIndiaPage({ onTriggerConsultation, onSwitchBrand }: AVCIndiaPageProps) {
  // Free Quick Callback Consultation widget states
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackService, setCallbackService] = useState("Salaried Employee Profile");
  const [callbackSuccess, setCallbackSuccess] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone) return;

    // Persist local submission
    try {
      const stored = localStorage.getItem('gvc_bookings_avc') || '[]';
      const parsed = JSON.parse(stored);
      parsed.push({
        id: 'avc-callback-' + Date.now(),
        name: callbackName,
        phone: callbackPhone,
        profile: callbackService,
        serviceNeeded: 'ITR Filing / Direct Tax Referral',
        date: new Date().toLocaleDateString()
      });
      localStorage.setItem('gvc_bookings_avc', JSON.stringify(parsed));
    } catch (err) {
      console.error(err);
    }

    setCallbackSuccess(true);
    setTimeout(() => {
      setCallbackSuccess(false);
      setCallbackName("");
      setCallbackPhone("");
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] text-[#00152c] font-sans selection:bg-[#f48565] selection:text-white" id="brand-avc-portal">
      
      {/* 1. Global Portfolio Navigation Bar */}
      <div className="bg-[#0b1a30] text-[#fee68c] py-2 px-6 text-xs font-semibold border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#f48565] text-white text-[9px] uppercase font-bold px-1.5 py-0.5 rounded shadow-sm">
              Portfolio Control
            </span>
            <span>Looking for corporate legal compliance, tax audits or company registrations?</span>
          </div>
          <button
            onClick={onSwitchBrand}
            className="text-[#fed255] hover:text-white underline text-xs font-bold cursor-pointer transition-colors flex items-center gap-1"
          >
            ← Launch Gupta Varundeep &amp; Co. Core Brand View
          </button>
        </div>
      </div>

      {/* 2. Page Navigation Header */}
      <header className="bg-white/95 backdrop-blur sticky top-0 z-40 border-b border-[#dcddd9] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo brand match with elegant gold accents */}
          <div className="flex items-center gap-2">
            <span className="font-serif font-black text-2xl tracking-tight text-[#00152c]">
              AVC <span className="font-normal text-amber-700/95 italic">India</span>
            </span>
          </div>

          {/* Links aligned with reference */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-extrabold text-slate-700">
            <a href="#services" className="hover:text-[#f48565] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#f48565] transition-colors">Process</a>
            <a href="#why-us" className="hover:text-[#f48565] transition-colors">Why Us</a>
            <a href="#faqs" className="hover:text-[#f48565] transition-colors">FAQs</a>
          </nav>

          {/* File Now Accent Salmon Color Button */}
          <div>
            <button
              onClick={() => onTriggerConsultation("AVC Header Button - File Now")}
              className="bg-[#f48565] hover:bg-[#e07556] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-sm transition-all cursor-pointer"
            >
              File Now
            </button>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO SECTION */}
      <section className="bg-[#fbfbf9] py-16 lg:py-24 border-b border-[#e6e6e2] relative overflow-hidden">
        {/* SVG Decorative Grid in background to enhance editorial mood */}
        <div className="absolute inset-0 bg-[radial-gradient(#ebd083_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Content) */}
            <div className="space-y-8 text-left">
              {/* Highlight styled heading exact reference */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#00152c] leading-[1.12] tracking-tight">
                Expert{" "}
                <span className="bg-[#ebd083] text-[#00152c] px-3.5 py-0.5 font-serif font-bold tracking-tight inline-block rounded-none shadow-sm mr-1">
                  Income Tax
                </span>{" "}
                Return Filing Services in Gurgaon
              </h1>

              <div className="space-y-3">
                <p className="text-sm font-semibold tracking-wider uppercase text-amber-800">
                  AY 2026-27 | Professional ITR Filing
                </p>
                <p className="text-base text-slate-700 leading-relaxed max-w-xl font-medium font-sans">
                  File your Income Tax Return accurately, on time, and with maximum tax savings. AVC India's Chartered Accountants serve salaried professionals, freelancers, consultants, startup founders, and business owners across Gurgaon and Delhi NCR.
                </p>
              </div>

              {/* Trust block checklist below hero */}
              <div className="bg-white p-5 rounded-xl border border-[#dcddd9] space-y-2.5 max-w-lg shadow-sm">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-[#dcddd9] pb-1.5">
                  Our Direct Tax Trust Commitments
                </p>
                <ul className="grid sm:grid-cols-1 gap-2 text-xs font-extrabold text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f48565] font-black">✓</span>
                    <span>CA-led Filing — Every return reviewed by a practising Chartered Accountant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f48565] font-black">✓</span>
                    <span>100% Online Process — Share documents digitally, file from anywhere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f48565] font-black">✓</span>
                    <span>Gurgaon-Based Firm — Local experts who understand your business environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f48565] font-black">✓</span>
                    <span>Tax Planning Included — Not just filing; we optimise your tax position</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f48565] font-black">✓</span>
                    <span>Refund &amp; Notice Support — We stay with you post-filing</span>
                  </li>
                </ul>
              </div>

              {/* Three CTA Buttons exactly as specified */}
              <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-4">
                <button
                  onClick={() => onTriggerConsultation("Get Your ITR Filed Today — Book a Free Consultation")}
                  className="bg-[#f48565] hover:bg-[#e07556] text-white px-6 py-4 rounded-md font-sans font-extrabold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer text-center flex-grow sm:flex-grow-0"
                >
                  Get Your ITR Filed Today — Book a Free Consultation
                </button>
                
                <a
                  href="https://wa.me/919811054321?text=Hi%20AVC%20India%2C%20I%20would%20like%20to%20review%20my%20tax%20levies%20and%20file%20my%20ITR%20efficiently."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-md font-sans font-extrabold text-xs tracking-wider uppercase shadow-md transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Us Your Documents</span>
                </a>

                <a
                  href="tel:+919811054321"
                  className="bg-white hover:bg-neutral-50 text-[#00152c] border border-[#dcdcd9] px-6 py-4 rounded-md font-sans font-extrabold text-xs tracking-wider uppercase shadow-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 shrink-0 text-[#f48565]" />
                  <span>Call Now: +91 98110 54321</span>
                </a>
              </div>
            </div>

            {/* Right Column (Premium Aesthetic matching Mockup dark teal shade with an Indian accountant) */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#dcddd9]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                  alt="Chartered Accountant at Gurgaon HQ"
                  className="w-full h-full object-cover brightness-[90%] contrast-[105%]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Custom multi blending to replicate corporate dark teal lookup */}
                <div className="absolute inset-0 bg-[#0c2420]/25 mix-blend-multiply pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#00152c]/85 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Verified badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0e241e] text-white border border-[#ebd083]/40 p-3 rounded-xl text-xs flex items-center justify-between gap-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider">Gurgaon Office Compliance Platform Live</span>
                  </div>
                  <span className="bg-[#f48565] text-white text-[9px] px-2 py-0.5 rounded font-bold uppercase">
                    AY 2026-27
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION — Why Professional Income Tax Filing in Gurgaon Matters */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#e6e6e2]" id="about-intro">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Elegant Left Graphic mirroring the document list container preview in screenshot */}
            <div className="lg:col-span-5 bg-[#0c2420] p-8 sm:p-12 rounded-2xl flex items-center justify-center relative aspect-[4/3] overflow-hidden shadow-xl border border-emerald-950">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ebd083]/10 rounded-full blur-2xl"></div>
              
              {/* Paper Document dashboard */}
              <div className="bg-white w-full max-w-sm rounded-xl p-6 shadow-2xl border border-slate-100 transform -rotate-2 relative">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-amber-800 font-extrabold block">Gurgaon Taxpayer Desk</span>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">Income Tax &amp; HRA Reconciler</h4>
                  </div>
                  <span className="bg-green-100 text-green-800 p-1 rounded-full"><Check className="w-3.5 h-3.5" /></span>
                </div>
                
                <div className="space-y-3 font-sans">
                  <div className="flex justify-between text-xs pb-1.5 border-b border-slate-50">
                    <span className="text-slate-500">Gross Income CTC (Cyber City)</span>
                    <span className="font-bold text-slate-800">₹18,50,000</span>
                  </div>
                  <div className="flex justify-between text-xs pb-1.5 border-b border-slate-50">
                    <span className="text-slate-500">Section 87A Rebate Benefit</span>
                    <span className="text-emerald-700 font-bold">-₹60,000</span>
                  </div>
                  <div className="flex justify-between text-xs pb-1.5 border-b border-slate-50">
                    <span className="text-slate-500">HRA exemption eligible (u/s 10)</span>
                    <span className="text-emerald-700 font-bold">-₹2,10,000</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold pt-1.5 text-slate-900">
                    <span>Tax Computation Outcome</span>
                    <span className="font-serif text-[#f48565]">Net Refund Assured</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verbatim Section 2 contents on the Right */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#f48565] bg-[#ebd083]/30 px-2.5 py-1 rounded inline-block">
                  Direct Tax Importance
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#00152c] leading-tight">
                  Why Professional Income Tax Filing in Gurgaon Matters
                </h2>
              </div>
              
              <div className="prose prose-slate font-sans text-sm sm:text-base text-slate-700 leading-relaxed space-y-5">
                <p>{INTRO_PARA_1}</p>
                <p>{INTRO_PARA_2}</p>
                <p>{INTRO_PARA_3}</p>
                <p>{INTRO_PARA_4}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Who We Help — Income Tax Filing for Every Professional Profile */}
      <section className="bg-[#fcfcf9] py-16 lg:py-24 border-b border-[#e6e6e2]" id="who-we-help">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-[#f48565] uppercase font-black tracking-widest text-xs">
              Segmented Client Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#00152c] tracking-tight">
              Who We Help — Income Tax Filing for Every Professional Profile
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xs sm:text-sm font-sans">
              Gurgaon is an energetic ecosystem where career paths require specific tax expertise. Discover how we protect your unique revenues.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Grid 1: Salaried Employees & Corporate Professionals */}
            <div className="bg-white rounded-xl border border-[#dcddd9] p-8 hover:shadow-md transition-all">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 bg-[#ebd083]/40 text-[#00152c] rounded-lg">
                      <User className="w-5 h-5 text-amber-950" />
                    </span>
                    <h3 className="text-lg font-bold font-serif text-[#00152c]">
                      Salaried Employees &amp; Corporate Professionals
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-normal">
                    If you receive a Form 16 from your employer, you may assume your taxes are already handled through TDS. But many salaried professionals in Gurgaon's corporate sector earn income from multiple sources — RSUs, ESOPs, rental income, freelance projects, or fixed deposits — that require careful reconciliation. We ensure your ITR-1 or ITR-2 captures everything accurately and claims the right deductions under Section 80C, 80D, HRA, and more.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-[#fbfbf9] p-6 rounded-lg border border-[#e6e6e2] grid sm:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">Form 16 HRA Reconciliations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">RSU &amp; US ESOP Capital Gains</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">Section 80C &amp; Chapter VI-A</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">Foreign Asset FBAR Compliance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid 2: Freelancers & Independent Consultants */}
            <div className="bg-white rounded-xl border border-[#dcddd9] p-8 hover:shadow-md transition-all">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 bg-[#ebd083]/40 text-[#00152c] rounded-lg">
                      <Briefcase className="w-5 h-5 text-amber-950" />
                    </span>
                    <h3 className="text-lg font-bold font-serif text-[#00152c]">
                      Freelancers &amp; Independent Consultants
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-normal">
                    Freelancers and independent professionals operating out of Gurgaon typically do not receive a Form 16. Your income arrives through multiple clients, often with varying TDS deductions. We prepare your ITR-3 or ITR-4 under the applicable presumptive taxation scheme, reconcile all TDS credits in Form 26AS, and ensure you are not over- or under-paying tax.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-[#fbfbf9] p-6 rounded-lg border border-[#e6e6e2] grid sm:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">Section 44ADA Presumptive tax</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">Business Expense Deductions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">GST Registration Credit Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">Quarterly Advance Tax Schedules</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid 3: Startup Founders & Directors */}
            <div className="bg-white rounded-xl border border-[#dcddd9] p-8 hover:shadow-md transition-all">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 bg-[#ebd083]/40 text-[#00152c] rounded-lg">
                      <TrendingUp className="w-5 h-5 text-amber-950" />
                    </span>
                    <h3 className="text-lg font-bold font-serif text-[#00152c]">
                      Startup Founders &amp; Directors
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-normal">
                    Founders of early-stage and growth-stage startups in Gurgaon face a unique tax situation — director remuneration, ESOPs, angel funding implications, and potential Section 56(2) income. We understand startup taxation in the Delhi NCR ecosystem and ensure your personal ITR correctly reflects your business income while minimising your personal tax liability.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-[#fbfbf9] p-6 rounded-lg border border-[#e6e6e2] grid sm:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">Director Remuneration &amp; Salary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">Angel Tax Section 56 Valuation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">Deferred ESOP Tax Event</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-600 text-amber-700 flex items-center justify-center text-[10px] font-bold">○</span>
                    <span className="text-xs font-bold text-slate-800">Personal vs Corporate Allocation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Three additional minor columns configured into responsive blocks */}
            <div className="grid md:grid-cols-3 gap-6 text-left">
              
              {/* Business Owners & MSMEs */}
              <div className="bg-white p-6 rounded-xl border border-[#dcddd9] space-y-3 hover:shadow-md transition-all">
                <div className="flex items-center gap-2.5">
                  <Building className="w-5 h-5 text-[#f48565]" />
                  <h4 className="font-serif font-bold text-sm text-[#00152c]">Business Owners &amp; MSMEs</h4>
                </div>
                <p className="text-xs text-slate-650 leading-relaxed">
                  If you own a proprietorship, partnership firm, or MSME operating from Gurgaon, your income tax filing requires books of accounts, profit & loss statements, and potentially a tax audit under Section 44AB. We handle the complete income tax compliance cycle — from bookkeeping review to ITR submission — with accuracy and within statutory deadlines.
                </p>
              </div>

              {/* High Net Worth Individuals (HNIs) */}
              <div className="bg-white p-6 rounded-xl border border-[#dcddd9] space-y-3 hover:shadow-md transition-all">
                <div className="flex items-center gap-2.5">
                  <DollarSign className="w-5 h-5 text-[#f48565]" />
                  <h4 className="font-serif font-bold text-sm text-[#00152c]">High Net Worth Individuals (HNIs)</h4>
                </div>
                <p className="text-xs text-slate-650 leading-relaxed">
                  High-income professionals and investors in Gurgaon with capital gains from mutual funds, equity, real estate, or unlisted securities need specialised ITR-2 or ITR-3 filing. We compute short-term and long-term capital gains accurately, apply the correct tax rates, and advise on tax-efficient investment strategies to reduce your overall tax burden.
                </p>
              </div>

              {/* NRIs & Returning Professionals */}
              <div className="bg-white p-6 rounded-xl border border-[#dcddd9] space-y-3 hover:shadow-md transition-all">
                <div className="flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-[#f48565]" />
                  <h4 className="font-serif font-bold text-sm text-[#00152c]">NRIs &amp; Returning Professionals</h4>
                </div>
                <p className="text-xs text-slate-650 leading-relaxed">
                  Non-Resident Indians with Indian income — rental income, interest, dividends, or capital gains — have specific filing obligations. We help NRIs determine their residential status for the relevant assessment year, file the correct ITR form, and apply DTAA (Double Taxation Avoidance Agreement) benefits where applicable.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Our Income Tax Filing & Direct Tax Services */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#e6e6e2]" id="services">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 text-left">
          
          <div className="text-center space-y-4">
            <span className="text-[#f48565] uppercase font-black tracking-widest text-xs">Our Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#00152c] tracking-tight">
              Our Income Tax Filing &amp; Direct Tax Services
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xs sm:text-sm font-sans text-center">
              Comprehensive compliance services designed and executed strictly in accordance with Indian Income Tax structures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1 */}
            <div className="bg-[#fbfbf9] p-6 rounded-xl border border-[#dcddd9] space-y-3 hover:border-[#f48565] transition-all">
              <span className="text-emerald-800 text-xl font-mono block font-bold">01/</span>
              <h3 className="font-serif font-bold text-[#00152c] text-base">ITR Filing (All Categories)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We file Income Tax Returns for individuals, HUFs, partnership firms, LLPs, companies, and trusts. Whether your return is straightforward (ITR-1) or complex (ITR-3 with business income, capital gains, and foreign assets), our Chartered Accountants handle it with precision. We cover AY 2026-27 and also assist with updated returns (ITR-U) for prior years.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#fbfbf9] p-6 rounded-xl border border-[#dcddd9] space-y-3 hover:border-[#f48565] transition-all">
              <span className="text-emerald-800 text-xl font-mono block font-bold">02/</span>
              <h3 className="font-serif font-bold text-[#00152c] text-base">Tax Planning &amp; Regime Advisory</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For AY 2026-27, choosing between the New Tax Regime (default, with zero tax up to ₹12L via Section 87A rebate) and the Old Tax Regime (with deductions under 80C, 80D, HRA, and more) requires a careful comparison. We run a personalised tax calculation for your specific income profile and advise which regime saves you more — before you file, not after.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-[#fbfbf9] p-6 rounded-xl border border-[#dcddd9] space-y-3 hover:border-[#f48565] transition-all">
              <span className="text-emerald-800 text-xl font-mono block font-bold">03/</span>
              <h3 className="font-serif font-bold text-[#00152c] text-base">TDS Reconciliation &amp; Refund Assistance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If excess TDS has been deducted from your salary, consultancy fees, or interest income, you are entitled to a refund. We reconcile your Form 26AS and AIS with your actual income, ensure all TDS credits are correctly claimed, and file your return to maximise your refund. We also follow up with the Income Tax Department if refunds are delayed.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-[#fbfbf9] p-6 rounded-xl border border-[#dcddd9] space-y-3 hover:border-[#f48565] transition-all">
              <span className="text-emerald-800 text-xl font-mono block font-bold">04/</span>
              <h3 className="font-serif font-bold text-[#00152c] text-base">Income Tax Notice Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Received a notice under Section 143(1), 148, 139(9), or a high-value transaction alert? Do not ignore it. Our tax experts analyse the notice, prepare an accurate response with supporting documentation, and represent your case before the Income Tax Department. Timely response to notices prevents penalties and unnecessary scrutiny.
              </p>
            </div>

            {/* Box 5 */}
            <div className="bg-[#fbfbf9] p-6 rounded-xl border border-[#dcddd9] space-y-3 hover:border-[#f48565] transition-all">
              <span className="text-emerald-800 text-xl font-mono block font-bold">05/</span>
              <h3 className="font-serif font-bold text-[#00152c] text-base">Revised Return Filing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Filed your return but discovered an error or omission? Under Section 139(5), you can file a revised return before the end of the assessment year. We identify the discrepancy, correct it, and file the revised return to ensure your tax position is accurate and compliant.
              </p>
            </div>

            {/* Box 6 */}
            <div className="bg-[#fbfbf9] p-6 rounded-xl border border-[#dcddd9] space-y-3 hover:border-[#f48565] transition-all">
              <span className="text-emerald-800 text-xl font-mono block font-bold">06/</span>
              <h3 className="font-serif font-bold text-[#00152c] text-base">Advance Tax &amp; Self-Tax Computation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your total tax liability exceeds ₹10,000 and is not covered entirely by TDS, you are required to pay advance tax in quarterly instalments (June, September, December, March). We compute your advance tax liability, schedule the payment dates, and ensure you avoid interest charges under Section 234B and 234C.
              </p>
            </div>

            {/* Box 7 */}
            <div className="bg-[#fbfbf9] p-6 rounded-xl border border-[#dcddd9] space-y-3 hover:border-[#f48565] transition-all">
              <span className="text-emerald-800 text-xl font-mono block font-bold">07/</span>
              <h3 className="font-serif font-bold text-[#00152c] text-base">Tax Audit Support (Section 44AB)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Businesses and professionals with turnover exceeding the prescribed limits require a tax audit conducted by a Chartered Accountant. AVC India provides complete tax audit support — from preparing the audit report to filing it on the Income Tax portal — within the statutory deadline.
              </p>
            </div>

            {/* Box 8 */}
            <div className="bg-[#fbfbf9] p-6 rounded-xl border border-[#dcddd9] space-y-3 hover:border-[#f48565] transition-all">
              <span className="text-emerald-800 text-xl font-mono block font-bold">08/</span>
              <h3 className="font-serif font-bold text-[#00152c] text-base">Compliance Advisory &amp; Ongoing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tax compliance is not a once-a-year event. We offer year-round advisory support — helping you track TDS deductions, optimise investments under Section 80C and 80D, plan major financial decisions (property sale, business restructuring, ESOPs), and stay ahead of regulatory changes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: Documents Required for Income Tax Filing in Gurgaon */}
      <section className="bg-[#fbfbf9] py-16 lg:py-24 border-b border-[#e6e6e2]" id="documents">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-[#f48565] uppercase font-black tracking-widest text-xs">Verify your files</span>
            <h2 className="text-4xl font-serif font-bold text-[#00152c] tracking-tight">
              Documents Required for Income Tax Filing in Gurgaon
            </h2>
            <p className="text-xs sm:text-sm text-slate-550 max-w-3xl mx-auto font-sans leading-relaxed">
              The documents required for ITR filing depend on your income sources and the ITR form applicable to you. Below is a comprehensive checklist covering the most common scenarios. You do not need all of these — our team will tell you exactly which documents apply to your situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-[#dcddd9] overflow-hidden hover:shadow-md transition-all flex flex-col">
              <div className="h-1 bg-[#ebd083]" />
              <div className="p-6 space-y-4 flex-grow">
                <span className="text-xl">💳</span>
                <h3 className="text-sm font-semibold font-serif text-[#00152c]">Basic Identity &amp; Bank Documents</h3>
                <ul className="space-y-2 text-xs text-slate-705">
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> PAN Card (Permanent Account Number)</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Aadhaar Card (linked to PAN &amp; registered mobile)</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Bank account details (Account no, IFSC, Name for refund)</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> All bank account statements for the financial year</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Form 26AS and AIS statement downloadable from portal</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-[#dcddd9] overflow-hidden hover:shadow-md transition-all flex flex-col">
              <div className="h-1 bg-[#f48565]" />
              <div className="p-6 space-y-4 flex-grow">
                <span className="text-xl">👔</span>
                <h3 className="text-sm font-semibold font-serif text-[#00152c]">For Salaried Employees</h3>
                <ul className="space-y-2 text-xs text-slate-705">
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Form 16 (Part A + Part B) from your employer</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Salary slips for all 12 months (April to March)</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> HRA receipts if claiming rental space exemption</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Home loan interest certificate (u/s 24B)</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Investment proofs: LIC, PPF, ELSS, NPS statements</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Form 12BB submitted to employer</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-[#dcddd9] overflow-hidden hover:shadow-md transition-all flex flex-col">
              <div className="h-1 bg-[#0c2420]" />
              <div className="p-6 space-y-4 flex-grow">
                <span className="text-xl">💼</span>
                <h3 className="text-sm font-semibold font-serif text-[#00152c]">For Freelancers &amp; Consultants</h3>
                <ul className="space-y-2 text-xs text-slate-705">
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Invoices raised to all clients during the year</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Bank statements showing all receipts &amp; business costs</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Form 16A from clients who deducted TDS</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Profit &amp; Loss account details</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Details of business expenses: internet, travel, fees</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Home office details if claiming proportionate rent</li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl border border-[#dcddd9] overflow-hidden hover:shadow-md transition-all flex flex-col">
              <div className="h-1 bg-[#ebd083]" />
              <div className="p-6 space-y-4 flex-grow">
                <span className="text-xl">🏬</span>
                <h3 className="text-sm font-semibold font-serif text-[#00152c]">For Business Owners &amp; MSMEs</h3>
                <ul className="space-y-2 text-xs text-slate-705">
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Profit &amp; Loss Account and Balance Sheet</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> GST returns filed (GSTR-1, GSTR-3B)</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Books of accounts (Tally, QuickBooks, etc.)</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Loan statements and interest certificates</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Asset purchase invoices for depreciation</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Partnership deed / LLP agreement</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Tax audit report if turnover exceeds thresholds</li>
                </ul>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl border border-[#dcddd9] overflow-hidden hover:shadow-md transition-all flex flex-col">
              <div className="h-1 bg-[#f48565]" />
              <div className="p-6 space-y-4 flex-grow">
                <span className="text-xl">📈</span>
                <h3 className="text-sm font-semibold font-serif text-[#00152c]">For Capital Gains</h3>
                <ul className="space-y-2 text-xs text-slate-705">
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Capital gains statement from broker/DEMAT</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Mutual fund annual statement showing LTCG/STCG</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Sale deed and purchase deed for property sale</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Stamp duty valuation and improvement bills</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> ESOP / RSU exercise and sale data from employer</li>
                </ul>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl border border-[#dcddd9] overflow-hidden hover:shadow-md transition-all flex flex-col">
              <div className="h-1 bg-[#0c2420]" />
              <div className="p-6 space-y-4 flex-grow">
                <span className="text-xl">🌍</span>
                <h3 className="text-sm font-semibold font-serif text-[#00152c]">For NRIs</h3>
                <ul className="space-y-2 text-xs text-slate-705">
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Passport and visa copies confirming residence</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> DTAA certificate of residence</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Foreign bank account details (FATCA/CRS)</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> Details of all India-sourced income</li>
                  <li className="flex items-start gap-1.5"><span className="text-emerald-700">✔</span> NRE/NRO bank statements</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="bg-[#0e241e] text-[#fcfcf9] p-6 rounded-xl border border-emerald-900 text-xs sm:text-sm font-sans font-bold flex items-center gap-3">
            <span className="p-1 px-2.5 bg-[#f48565] rounded text-white text-[10px] uppercase">Instruction</span>
            <span>IMPORTANT: AVC India runs a document checklist review at the start of every engagement. You do not need to figure out what you need — just share what you have, and we guide you through the rest.</span>
          </div>

        </div>
      </section>

      {/* SECTION 6: How Our Income Tax Filing Process Works */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#e6e6e2]" id="process">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 text-left">
          
          <div className="text-center space-y-4">
            <span className="text-[#f48565] uppercase font-black tracking-widest text-xs">Steps to compliance</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#00152c] tracking-tight">
              How Our Income Tax Filing Process Works
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xs sm:text-sm font-sans text-center">
              A 100% online, stress-free methodology managed from document collation through to final e-verification.
            </p>
          </div>

          <div className="relative border-l-2 border-[#ebd083] ml-4 md:ml-8 space-y-10 pl-6 md:pl-10">
            
            {/* Step 1 */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00152c] border-2 border-[#ebd083] text-white flex items-center justify-center font-mono text-[10px] font-black">1</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-slate-950 text-base">Step 1: Initial Consultation (Free)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  We begin with a no-cost consultation to understand your income profile, previous filing history, and any specific concerns — such as pending notices, undisclosed income, or major financial transactions in the year. This takes 15–30 minutes and can be done over phone, video call, or WhatsApp.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00152c] border-2 border-[#ebd083] text-white flex items-center justify-center font-mono text-[10px] font-black">2</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-slate-950 text-base">Step 2: Document Collection</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Based on the consultation, we share a personalised document checklist. You upload your documents securely via WhatsApp, email, or our client portal. Our team acknowledges receipt within 24 hours and flags any missing items.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00152c] border-2 border-[#ebd083] text-white flex items-center justify-center font-mono text-[10px] font-black">3</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-slate-950 text-base">Step 3: Income Computation &amp; AIS/Form 26AS Reconciliation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Our Chartered Accountant reviews all documents, computes your total taxable income, reconciles TDS credits against your Form 26AS and AIS, and identifies any discrepancies that need to be resolved before filing. This step often uncovers missed TDS credits and legitimate deductions.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00152c] border-2 border-[#ebd083] text-white flex items-center justify-center font-mono text-[10px] font-black">4</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-slate-950 text-base">Step 4: Tax Regime Comparison &amp; Advisory</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  For AY 2026-27, we compare your liability under the New Tax Regime and the Old Tax Regime and advise which is more beneficial. We also flag any tax-saving opportunities you may have missed during the financial year.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00152c] border-2 border-[#ebd083] text-white flex items-center justify-center font-mono text-[10px] font-black">5</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-slate-950 text-base">Step 5: ITR Preparation &amp; Client Review</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  We prepare your ITR and share a detailed computation sheet for your review. You review the income figures, deductions claimed, and tax liability before any submission. We welcome questions and explain every line item clearly.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00152c] border-2 border-[#ebd083] text-white flex items-center justify-center font-mono text-[10px] font-black">6</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-slate-950 text-base">Step 6: Filing &amp; E-Verification</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Once you approve, we file your return on the Income Tax portal (incometax.gov.in). You receive the ITR acknowledgement (ITR-V) within minutes. We guide you through e-verification via Aadhaar OTP or EVC — completing the full filing within the same session wherever possible.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00152c] border-2 border-[#ebd083] text-white flex items-center justify-center font-mono text-[10px] font-black">7</span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-slate-950 text-base">Step 7: Post-Filing Support</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Our engagement does not end at filing. We track your refund status, alert you to any intimation notices under Section 143(1), respond to any clarification sought by the Income Tax Department, and remain available for any post-filing queries throughout the assessment year.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: Why Choose AVC India for Income Tax Filing in Gurgaon? */}
      <section className="bg-[#fcfcf9] py-16 lg:py-24 border-b border-[#e6e6e2]" id="why-us">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Graphics matches partner/boardroom profile */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-[#dcddd9]">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
                alt="Partner chartered accountant meeting room"
                className="w-full h-full object-cover brightness-[92%] contrast-[102%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0c2420]/15 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Right Column details */}
            <div className="space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-[#f48565] uppercase font-black tracking-widest text-xs">Our Advantage</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#00152c] leading-tight">
                  Why Choose AVC India for Income Tax Filing in Gurgaon?
                </h2>
              </div>

              {/* 6 Grid points with check circle markers */}
              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Pillar 1 */}
                <div className="flex items-start gap-3">
                  <span className="p-1.5 bg-emerald-50 rounded-full text-emerald-800 border border-emerald-200 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-[#00152c] text-xs uppercase tracking-wider font-sans mb-1">Practising Chartered Accountants — Not Clerks</h4>
                    <p className="text-xs text-slate-600 leading-normal">At AVC India, every ITR is reviewed by a qualified, practising CA. This is not a data-entry service — it is professional tax advisory that happens to include filing. You get expert eyes on your return before it is submitted.</p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex items-start gap-3">
                  <span className="p-1.5 bg-emerald-50 rounded-full text-emerald-800 border border-emerald-200 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-[#00152c] text-xs uppercase tracking-wider font-sans mb-1 font-bold">Gurgaon-Based — We Understand Your Context</h4>
                    <p className="text-xs text-slate-600 leading-normal">We are not a distant national platform. We understand the specific income profiles of Gurgaon's corporate employees, IT professionals, consultants working out of coworking spaces in Cyber City, and business owners in Udyog Vihar.</p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex items-start gap-3">
                  <span className="p-1.5 bg-emerald-50 rounded-full text-emerald-800 border border-emerald-200 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-[#00152c] text-xs uppercase tracking-wider font-sans mb-1 font-bold">Complete, Not Transactional</h4>
                    <p className="text-xs text-slate-600 leading-normal">Most ITR services take your documents and file a return. We do more — AIS/Form 26AS reconciliation, deduction optimisation, regime comparison, and advance tax planning are included in our process, not sold as extras.</p>
                  </div>
                </div>

                {/* Pillar 4 */}
                <div className="flex items-start gap-3">
                  <span className="p-1.5 bg-emerald-50 rounded-full text-emerald-800 border border-emerald-200 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-[#00152c] text-xs uppercase tracking-wider font-sans mb-1 font-bold">Transparent Pricing</h4>
                    <p className="text-xs text-slate-600 leading-normal">We provide a clear fee quote based on your income complexity before we begin. No hidden charges, no last-minute surprises.</p>
                  </div>
                </div>

                {/* Pillar 5 */}
                <div className="flex items-start gap-3">
                  <span className="p-1.5 bg-emerald-50 rounded-full text-emerald-800 border border-emerald-200 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-[#00152c] text-xs uppercase tracking-wider font-sans mb-1 font-bold">Year-Round Availability</h4>
                    <p className="text-xs text-slate-600 leading-normal">Tax questions do not wait for filing season. Our team is available throughout the year to help you plan investments, respond to notices, and make informed financial decisions from a tax perspective.</p>
                  </div>
                </div>

                {/* Pillar 6 */}
                <div className="flex items-start gap-3">
                  <span className="p-1.5 bg-emerald-50 rounded-full text-emerald-800 border border-emerald-200 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-[#00152c] text-xs uppercase tracking-wider font-sans mb-1 font-bold">Data Security &amp; Confidentiality</h4>
                    <p className="text-xs text-slate-600 leading-normal">Your financial documents and income details are handled with complete confidentiality, shared only with the CA responsible for your filing, and never used for any purpose beyond your engagement with us.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: AUTHORITY CONTENT BLOCK (SEO/GEO/AEO) */}
      <section className="bg-[#fbfbf9] py-16 lg:py-24 border-b border-[#e6e6e2]" id="editorial-guide">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-left space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-[#f48565] uppercase font-black tracking-widest text-xs">Gurgaon Direct Tax Editorial</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#00152c] tracking-tight">
              How to File Income Tax in Gurgaon: A Professional Guide (AY 2026-27)
            </h2>
          </div>

          {/* Sub h3 Editorial layout matching mockup serif layout */}
          <div className="space-y-10 font-sans text-sm text-slate-705 leading-relaxed">
            
            <p>{EDITORIAL_CONTENT.p1}</p>

            <div className="space-y-4 border-l-4 border-[#ebd083] pl-4 py-1">
              <h3 className="font-serif font-bold text-lg text-[#00152c]">Who Is Required to File an Income Tax Return in India?</h3>
              <p>You are required to file an Income Tax Return (ITR) if any of the following apply:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Your gross total income (before deductions under Chapter VI-A) exceeds ₹2.5 lakh in the financial year (₹3L for senior citizens aged 60–80; ₹5L for super-senior citizens above 80)</li>
                <li>You are a company or partnership firm — regardless of profit or loss</li>
                <li>You want to claim a tax refund for excess TDS deducted</li>
                <li>You want to carry forward capital losses, business losses, or house property losses</li>
                <li>You hold foreign assets or have income from foreign sources</li>
                <li>Your total sales, turnover, or gross receipts exceed ₹60 lakh in business, or ₹10 lakh in a profession — even if income is below the basic exemption</li>
                <li>You have deposited more than ₹1 crore in a current account, spent more than ₹2 lakh on foreign travel, or paid electricity bills exceeding ₹1 lakh in the year</li>
                <li>You are an NRI with taxable Indian income</li>
              </ul>
            </div>

            {/* Tax Regime Comparison with fully responsive data table */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#00152c]">Understanding the New Tax Regime vs Old Tax Regime (AY 2026-27)</h3>
              <p>
                For AY 2026-27 (Financial Year 2025-26), the New Tax Regime is the default regime. Under the new regime, the tax slabs are broader, the standard deduction for salaried employees is ₹75,000, and taxpayers with income up to ₹12 lakh pay zero tax due to the Section 87A rebate of ₹60,000.
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-[#dcddd9]">
                <table className="w-full text-left text-xs sm:text-sm font-sans">
                  <thead>
                    <tr className="bg-[#00152c] text-white">
                      <th className="p-3 font-semibold uppercase tracking-wider">Income Slab (FY 2025-26)</th>
                      <th className="p-3 font-semibold uppercase tracking-wider">New Tax Regime Rate</th>
                      <th className="p-3 font-semibold uppercase tracking-wider">Old Tax Regime Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dcddd9] bg-white">
                    <tr>
                      <td className="p-3 font-medium text-slate-800">Up to ₹4,00,000</td>
                      <td className="p-3 text-emerald-800 font-bold">Nil</td>
                      <td className="p-3 text-[#f48565] font-bold">Nil (up to ₹2.5L)</td>
                    </tr>
                    <tr className="bg-[#fbfbf9]">
                      <td className="p-3 font-medium text-slate-800">₹4,00,001 – ₹8,00,000</td>
                      <td className="p-3 font-semibold">5%</td>
                      <td className="p-3 font-semibold">5% (₹2.5L–₹5L)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-800">₹8,00,001 – ₹12,00,000</td>
                      <td className="p-3 font-semibold text-emerald-700">10%</td>
                      <td className="p-3 font-semibold text-amber-700">20% (₹5L–₹10L)</td>
                    </tr>
                    <tr className="bg-[#fbfbf9]">
                      <td className="p-3 font-medium text-slate-800">₹12,00,001 – ₹16,00,000</td>
                      <td className="p-3 font-semibold">15%</td>
                      <td className="p-3 font-semibold">30% (above ₹10L)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-800">₹16,00,001 – ₹20,00,000</td>
                      <td className="p-3 font-semibold">20%</td>
                      <td className="p-3 font-semibold">30%</td>
                    </tr>
                    <tr className="bg-[#fbfbf9]">
                      <td className="p-3 font-medium text-slate-800">₹20,00,001 – ₹24,00,000</td>
                      <td className="p-3 font-semibold">25%</td>
                      <td className="p-3 font-semibold">30%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-800">Above ₹24,00,000</td>
                      <td className="p-3 font-semibold">30%</td>
                      <td className="p-3 font-semibold">30%</td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="p-3 font-bold text-[#00152c]">Standard Deduction</td>
                      <td className="p-3 font-bold text-[#00152c]">₹75,000 (salaried)</td>
                      <td className="p-3 font-bold text-slate-650">₹50,000 (salaried)</td>
                    </tr>
                    <tr className="bg-amber-100">
                      <td className="p-3 font-bold text-[#00152c]">Section 87A Rebate</td>
                      <td className="p-3 font-bold text-emerald-800">₹60,000 (up to ₹12L income)</td>
                      <td className="p-3 font-semibold text-slate-655">₹12,500 (up to ₹5L income)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic mt-1">
                The new regime is generally more beneficial for taxpayers with limited deduction investments — such as younger professionals who have not built up PPF, LIC, or home loan portfolios. However, taxpayers with significant Section 80C investments, HRA claims, and home loan interest deductions may still be better off under the old regime.
              </p>
            </div>

            {/* Which ITR Form Should You Use? */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#00152c]">Which ITR Form Should You Use?</h3>
              <p>The correct ITR form depends on your sources of income:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white border border-[#dcddd9]">
                  <strong className="text-slate-900 block font-sans text-xs">ITR-1 (Sahaj)</strong>
                  <span className="text-xs text-slate-600">Resident individuals with income from salary/pension, one house property, other sources (interest, dividends), and LTCG from equity up to ₹1.25L. Total income must not exceed ₹50 lakh.</span>
                </div>
                <div className="p-4 rounded-lg bg-white border border-[#dcddd9]">
                  <strong className="text-slate-900 block font-sans text-xs">ITR-2</strong>
                  <span className="text-xs text-slate-600">Individuals and HUFs (including NRIs) with capital gains (any amount), multiple house properties, foreign income or assets, or income from unlisted shares and ESOPs. Also used by company directors.</span>
                </div>
                <div className="p-4 rounded-lg bg-white border border-[#dcddd9]">
                  <strong className="text-slate-900 block font-sans text-xs">ITR-3</strong>
                  <span className="text-xs text-slate-600">Individuals and HUFs earning from a proprietary business or profession, partners in firms, F&amp;O traders, or those with any business income in addition to salary, property, or capital gains.</span>
                </div>
                <div className="p-4 rounded-lg bg-white border border-[#dcddd9]">
                  <strong className="text-slate-900 block font-sans text-xs">ITR-4 (Sugam)</strong>
                  <span className="text-xs text-slate-600">Individuals, HUFs, and firms (excluding LLPs) under presumptive taxation schemes (Section 44AD for business, 44ADA for professionals, 44AE for transport). Turnover/receipts must not exceed limits.</span>
                </div>
              </div>
            </div>

            <p>{EDITORIAL_CONTENT.p2}</p>
            <p>{EDITORIAL_CONTENT.p3}</p>

            {/* Key Income Tax Deductions */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#00152c]">Key Income Tax Deductions You Must Not Miss (FY 2025-26)</h3>
              <p>Under the old tax regime, the following deductions can significantly reduce your taxable income:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-1">
                <li><strong>Section 80C (up to ₹1.5 lakh)</strong>: EPF, PPF, ELSS mutual funds, LIC premium, NSC, principal repayment on home loan</li>
                <li><strong>Section 80D (up to ₹25,000 – ₹1 lakh)</strong>: Health insurance premiums for self, spouse, children, and senior citizen parents</li>
                <li><strong>Section 80G</strong>: Donations to approved charitable organisations</li>
                <li><strong>Section 24(b) (up to ₹2 lakh)</strong>: Interest paid on home loan for a self-occupied property</li>
                <li><strong>Section 10(13A) (HRA)</strong>: House Rent Allowance exemption based on actual rent paid in Gurgaon</li>
                <li><strong>Section 80CCD(1B)</strong>: Additional ₹50,000 for NPS contributions — over and above the ₹1.5L limit</li>
              </ul>
            </div>

            {/* Miss Deadline and Notices alerts */}
            <div className="grid sm:grid-cols-2 gap-6 bg-amber-50 p-6 rounded-xl border border-amber-200">
              <div className="space-y-2">
                <h4 className="font-bold text-[#00152c]">Missing the Deadline</h4>
                <p className="text-xs text-slate-700 leading-normal">
                  The due date is <strong>31 July 2026</strong>. Missing this deadline triggers late fees of up to ₹5,000 under Section 234F, interest under Section 234A on unpaid tax at 1% per month, and loss of the right to carry forward capital gains or business losses.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-[#00152c]">Understanding Tax Notices</h4>
                <p className="text-xs text-slate-700 leading-normal">
                  Notices under Section 143(1) (Intimation), 139(9) (Defective Return), or 148 (Reassessment) must not be ignored. Responding promptly with clean reconciliation files avoids financial scrutiny and penalties.
                </p>
              </div>
            </div>

            <p>{EDITORIAL_CONTENT.p4}</p>

          </div>
        </div>
      </section>

      {/* SECTION 9: Frequently Asked Questions — Income Tax Filing in Gurgaon */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#e6e6e2]" id="faqs">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-[#f48565] uppercase font-black tracking-widest text-[#f48565] bg-[#ebd083]/30 px-2.5 py-1 rounded inline-block">
              Immediate Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#00152c] tracking-tight">
              Frequently Asked Questions — Income Tax Filing in Gurgaon
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xs sm:text-sm font-sans text-center">
              Our 20 comprehensive answers are optimized for PAA, AI Overview eligibility, and direct voice-search queries.
            </p>
          </div>

          {/* Dedicated tabbed searchable accordion block */}
          <AVCIndiaFaqs />
          
        </div>
      </section>

      {/* 9. Direct Callback Consultation Form Widget */}
      <section className="bg-[#fcfcf9] py-16 border-b border-[#dcddd9]">
        <div className="max-w-md mx-auto px-6 text-center space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] bg-[#ebd083] font-bold px-2 py-0.5 rounded text-[#00152c] uppercase tracking-wider">Quick Direct Callback</span>
            <h3 className="text-xl font-bold font-serif text-[#00152c]">Have a critical tax scenario?</h3>
            <p className="text-xs text-slate-500">Provide your basic parameters. Our Chartered Accountants will initiate an obligation-free review.</p>
          </div>
          
          <form onSubmit={handleCallbackSubmit} className="space-y-3 text-left">
            <div>
              <label htmlFor="callback-name" className="sr-only">Full Name</label>
              <input
                id="callback-name"
                type="text"
                placeholder="Full Name"
                className="w-full text-xs px-4 py-3 rounded border border-[#dcddd9] focus:outline-none focus:border-[#f48565] bg-white text-[#00152c]"
                required
                value={callbackName}
                onChange={(e) => setCallbackName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="callback-phone" className="sr-only">Mobile Number</label>
                <input
                  id="callback-phone"
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full text-xs px-4 py-3 rounded border border-[#dcddd9] focus:outline-none focus:border-[#f48565] bg-white text-[#00152c]"
                  required
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="callback-service" className="sr-only">Taxpayer Profile</label>
                <select
                  id="callback-service"
                  className="w-full text-xs px-3 py-3 rounded border border-[#dcddd9] focus:outline-none focus:border-[#f48565] bg-white text-[#00152c]"
                  value={callbackService}
                  onChange={(e) => setCallbackService(e.target.value)}
                >
                  <option>Salaried Employee Profile</option>
                  <option>Freelancer / Consultant</option>
                  <option>Startup Founder / HNI</option>
                  <option>Business Owner / LLP</option>
                </select>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#00152c] text-[#fee68c] hover:bg-[#ebd083] hover:text-[#00152c] transition-colors py-3 rounded text-xs font-bold cursor-pointer uppercase tracking-wider"
            >
              Request Free Strategy Call →
            </button>
            
            <AnimatePresence>
              {callbackSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 text-[11px] p-2.5 rounded font-sans text-center mt-2"
                >
                  ✓ Callback registered! Your direct-tax expert CA will call you within 1 business hour.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>

      {/* SECTION 10: Final CTA Section */}
      <section className="bg-[#fcfcf9] py-16 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Custom Forest Green dark container as seen in Mockup Part 2 bottom */}
          <div className="bg-[#0e241e] text-[#fcfcf9] rounded-2xl p-8 sm:p-12 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
            {/* Background absolute sphere accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="space-y-2">
              <span className="text-[#ebd083] uppercase font-black tracking-widest text-xs block">
                FILE YOUR INCOME TAX RETURN WITH AVC INDIA — GURGAON'S TRUSTED CA FIRM
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight max-w-3xl mx-auto">
                Ready to File Your Income Tax Return? Let's Get Started.
              </h2>
            </div>
            
            {/* Sub-text blocks verbatim */}
            <div className="max-w-2xl mx-auto space-y-4 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
              <p className="font-bold text-[#ebd083]">
                Every return reviewed by a practising Chartered Accountant. Every deduction identified. Every notice handled. 100% online. Transparent pricing. Year-round support.
              </p>
              <p>
                Whether you are a salaried professional with a straightforward return or a business owner with a complex income profile, AVC India's Chartered Accountants are here to ensure your ITR is filed accurately, on time, and with maximum tax savings. Based in Gurgaon. Serving all of Delhi NCR.
              </p>
              <p>
                The filing window for AY 2026-27 is open. Do not wait until the last week of July — book your consultation today and get your return filed with zero stress.
              </p>
            </div>

            {/* Core buttons verbatim */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              
              <button
                onClick={() => onTriggerConsultation("Book a Free 15-Minute Consultation")}
                className="bg-[#ebd083] hover:bg-[#ffe082] text-[#00152c] font-black px-6 py-4 rounded-md text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer w-full sm:w-auto"
              >
                Book a Free 15-Minute Consultation
              </button>

              <a
                href="https://wa.me/919811054321?text=Hi%20AVC%20India%2C%20I%20want%20to%20WhatsApp%20my%20tax%20papers%20for%20the%20AY%202026-27%20filing."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-6 py-4 rounded-md text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1.5 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Your Documents Now</span>
              </a>

              <a
                href="tel:+919811054321"
                className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-bold px-6 py-4 rounded-md text-xs tracking-wider uppercase transition-all w-full sm:w-auto flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-[#ebd083] shrink-0" />
                <span>Call Us: +91 98110 54321</span>
              </a>

            </div>

            {/* TRUST COPY BELOW CTAS */}
            <p className="text-[10px] text-neutral-400 font-sans tracking-wide pt-2">
              CA-Reviewed • 100% Online • Gurgaon-Based • Free Initial Consultation
            </p>

          </div>
        </div>
      </section>

      {/* footer section aligned with reference */}
      <footer className="bg-[#fcfcf9] border-t border-[#dcddd9] py-16 px-6 sm:px-8 text-xs font-sans text-slate-500 leading-relaxed">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4 text-left">
            <span className="font-serif font-black text-lg tracking-tight text-[#00152c]">
              AVC India
            </span>
            <p className="text-slate-400 max-w-xs leading-normal">
              © 2026 AVC India. All Rights Reserved. Practising Chartered Accountancy Services for ambitious individuals and growing businesses.
            </p>
          </div>

          <div className="text-left space-y-3">
            <h4 className="font-bold text-[#00152c] font-sans text-xs uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#f48565] transition-colors">Tax Planning</a></li>
              <li><a href="#services" className="hover:text-[#f48565] transition-colors">ITR Filing</a></li>
              <li><a href="#services" className="hover:text-[#f48565] transition-colors">Audit Services</a></li>
              <li><a href="#services" className="hover:text-[#f48565] transition-colors">NRI Taxation</a></li>
            </ul>
          </div>

          <div className="text-left space-y-3">
            <h4 className="font-bold text-[#00152c] font-sans text-xs uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#f48565] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#f48565] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="text-left space-y-3 text-slate-400">
            <h4 className="font-bold text-[#00152c] font-sans text-xs uppercase tracking-wider font-bold">Contact</h4>
            <p>DLF Cyber City, Phase 3, Gurgaon, Haryana 122002</p>
            <p>Email: ask@avcindia.co</p>
            <p>Phone: +91 98110 54321</p>
          </div>

        </div>
      </footer>

      {/* Sticky mobile CTA bar (Specfied in Section 1 metadata Placement instruction) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0e241e] text-white py-3 px-4 z-40 border-t border-[#ebd083]/30 shadow-[0_-4px_16px_rgba(0,0,0,0.15)] flex justify-between items-center">
        <div>
          <span className="text-[10px] text-[#ebd083] uppercase tracking-wider block font-bold leading-none mb-1">Direct Tax Desk</span>
          <span className="text-xs font-extrabold max-w-[170px] truncate block leading-none">AVC Direct ITR Filing</span>
        </div>
        <div className="flex gap-2">
          <a
            href="https://wa.me/919811054321?text=Hi%20AVC%20India%2C%20I%20want%20to%20file%20my%20Income%20Tax%20Return%20now."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 p-2.5 rounded text-white flex items-center justify-center"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
          </a>
          <a
            href="tel:+919811054321"
            className="bg-[#f48565] p-2.5 rounded text-white flex items-center justify-center"
          >
            <Phone className="w-4 h-4 shrink-0" />
          </a>
          <button
            onClick={() => onTriggerConsultation("Sticky Mobile Consult - Call To Action")}
            className="bg-[#ebd083] text-[#00152c] px-3 py-1 text-[11px] font-black uppercase tracking-wider rounded"
          >
            File Now
          </button>
        </div>
      </div>

    </div>
  );
}
