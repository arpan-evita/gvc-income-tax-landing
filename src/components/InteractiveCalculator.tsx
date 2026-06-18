import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, AlertTriangle, FileCheck, Landmark, CheckSquare, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { COMPLIANCE_RULES } from '../data';

interface InteractiveCalculatorProps {
  onBookConsultation: (service?: string) => void;
}

export default function InteractiveCalculator({ onBookConsultation }: InteractiveCalculatorProps) {
  const [entityType, setEntityType] = useState('Pvt Ltd Company');
  const [turnover, setTurnover] = useState(15000000); // 1.5 Cr default
  const [digitalPercent, setDigitalPercent] = useState(90); // 90% digital
  const [isNewManufacturing, setIsNewManufacturing] = useState(false);

  // Calculate results
  const selectedRule = COMPLIANCE_RULES.find(r => r.entityType.includes(entityType)) || COMPLIANCE_RULES[0];
  
  let calculatedTaxRate = selectedRule.taxRate;
  let auditStatus = 'Required';
  let auditClause = 'Compulsory for corporations.';
  let showMfgOption = entityType === 'Pvt Ltd Company';

  if (entityType === 'Proprietorship' || entityType === 'Partnership / LLP') {
    const auditThreshold = digitalPercent >= 95 ? 100000000 : 10000000; // 10 Cr vs 1 Cr
    if (turnover > auditThreshold) {
      auditStatus = 'Required';
      auditClause = `Turnover exceeds Indian ceiling limit of ₹${(auditThreshold/10000000).toFixed(0)} Crore for digital operations (${digitalPercent}% digital).`;
    } else {
      auditStatus = 'Exempt';
      auditClause = `Turnover is below the standard ₹${(auditThreshold/10000000).toFixed(0)} Crore audit ceiling (${digitalPercent}% digital).`;
    }
  }

  // Handle special 115BAB manufacturing rates
  if (entityType === 'Pvt Ltd Company' && isNewManufacturing) {
    calculatedTaxRate = '15% Flat Rate (plus Surcharge & Cess) under Section 115BAB';
  }

  // Custom tips depending on answers
  const getStrategicTip = () => {
    if (entityType === 'Startups (80-IAC)') {
      return "Ensure your registration with DPIIT is active. To enjoy 100% deduction on profits, submit Form-1 and secure Board approval.";
    }
    if (entityType === 'Pvt Ltd Company' && turnover > 250000000) {
      return "Since turnover is high, check transfer pricing files if transactions occur with foreign parent hubs.";
    }
    if (digitalPercent < 95 && (entityType === 'Proprietorship' || entityType === 'Partnership / LLP')) {
      return "Bump digital transactions above 95% to raise your Tax Audit turnover exemption limit from ₹1 Cr to ₹10 Cr instantly.";
    }
    return "Check Section 194-N requirements: avoid cash withdrawals exceeding ₹20 Lakhs to stay clear of automated bank TDS deductions.";
  };

  return (
    <div id="calculator" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-primary-light text-white px-6 py-5 flex items-center gap-3">
        <div className="p-2 bg-accent text-primary rounded-lg font-bold">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-lg font-bold tracking-tight">Interactive Tax & Audit Estimator</h4>
          <p className="text-xs text-gray-300">Evaluate compliance requirements tailored to your Gurgaon operational profile</p>
        </div>
      </div>

      <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-8">
        {/* Left Inputs Controls */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-widest mb-2">
              1. Business Structure
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {COMPLIANCE_RULES.map((rule) => {
                const isSelected = rule.entityType.startsWith(entityType.substring(0, 8));
                return (
                  <button
                    key={rule.entityType}
                    type="button"
                    onClick={() => {
                      setEntityType(rule.entityType);
                      if (!rule.entityType.includes('Pvt Ltd')) {
                        setIsNewManufacturing(false);
                      }
                    }}
                    className={`px-4 py-3 rounded-lg text-xs font-bold border transition-all text-left flex flex-col justify-between h-20 cursor-pointer ${
                      isSelected
                        ? 'border-accent bg-accent/5 ring-2 ring-accent/30 text-primary-light'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600 bg-white'
                    }`}
                  >
                    <span>{rule.entityType}</span>
                    <span className="text-[10px] text-gray-400 font-normal">ITR Form: {rule.keyForms}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-widest mb-2 flex justify-between">
              <span>2. Annual Gross Turnover</span>
              <span className="text-primary font-bold font-mono">₹{(turnover / 10000000).toFixed(2)} Cr</span>
            </label>
            <input
              type="range"
              min="500000"
              max="250000000"
              step="500000"
              value={turnover}
              onChange={(e) => setTurnover(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1 font-mono">
              <span>₹5 Lakhs</span>
              <span>₹5 Crores</span>
              <span>₹12 Crores</span>
              <span>₹25 Crores</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-widest mb-2 flex justify-between">
                <span>3. Digital Receipts Ratio</span>
                <span className="text-accent-dark font-extrabold">{digitalPercent}%</span>
              </label>
              <input
                type="range"
                min="50"
                max="100"
                step="1"
                value={digitalPercent}
                onChange={(e) => setDigitalPercent(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <p className="text-[10px] text-gray-400 mt-1">
                (Sells via banking, UPI, cards, and e-com aggregators)
              </p>
            </div>

            {showMfgOption && (
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex flex-col justify-center">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isNewManufacturing}
                    onChange={(e) => setIsNewManufacturing(e.target.checked)}
                    className="mt-1 rounded text-accent border-gray-300 focus:ring-accent"
                  />
                  <div>
                    <span className="text-xs font-bold text-gray-800 block">Domestic Manufacturing?</span>
                    <span className="text-[10px] text-gray-500 block leading-tight">Opt for Section 115BAB (15% rate) for new factories set up after Oct 2019.</span>
                  </div>
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Right Output Sheet */}
        <div className="lg:col-span-5 bg-gray-50 rounded-xl p-5 border border-gray-200 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="bg-primary text-accent text-[9px] tracking-widest font-extrabold uppercase px-2.5 py-1 rounded-full w-fit block">
              GVC Pre-Compliance Scorecard
            </span>

            {/* Tax Rate Block */}
            <div className="border-b border-gray-200 pb-3">
              <span className="text-[11px] text-gray-400 font-bold uppercase block tracking-wider">Applicable Base Tax Slabs</span>
              <span className="text-base font-extrabold text-primary block leading-tight mt-1">
                {calculatedTaxRate}
              </span>
            </div>

            {/* Required Audit Block */}
            <div className="border-b border-gray-200 pb-3">
              <span className="text-[11px] text-gray-400 font-bold uppercase block tracking-wider">Statutory Tax Audit</span>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                    auditStatus === 'Required'
                      ? 'bg-red-50 text-red-700 border border-red-200'
                      : 'bg-green-50 text-green-700 border border-green-200'
                  }`}
                >
                  {auditStatus}
                </span>
                <span className="text-xs font-bold text-gray-700">Form: {selectedRule.keyForms}</span>
              </div>
              <p className="text-[11px] text-gray-500 mt-1 leading-normal.5">{auditClause}</p>
            </div>

            {/* Strategic Advice Highlight */}
            <div className="bg-yellow-50/50 border border-yellow-200/60 p-3 rounded-lg">
              <span className="text-[10px] text-amber-800 font-extrabold uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Overlooked Loophole Alert
              </span>
              <p className="text-xs text-amber-900 font-medium leading-normal mt-1 italic">
                "{getStrategicTip()}"
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 mt-4 space-y-2">
            <p className="text-[10px] text-gray-400 font-sans leading-tight">
              *Disclaimer: Estimates are based on standard Indian corporate rules. Consult our CAs for full local assessments.
            </p>
            <button
              onClick={() => onBookConsultation(`Estimated Tax Booking - ${entityType}`)}
              className="w-full bg-primary hover:bg-primary-light text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-1.5 shadow transiton-all cursor-pointer"
            >
              Verify Tax Plan with GVC CA
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
