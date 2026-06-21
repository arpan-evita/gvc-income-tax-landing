import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Search, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AVC_FAQS, FAQItem } from './avcData';

export default function AVCIndiaFaqs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "deadlines" | "regimes" | "documents" | "special">("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "deadlines", label: "Deadlines & Penalties" },
    { id: "regimes", label: "Tax Regimes & Rates" },
    { id: "documents", label: "Forms & Documents" },
    { id: "special", label: "Special Audits & Advice" }
  ];

  const filteredFaqs = useMemo(() => {
    return AVC_FAQS.filter((faq) => {
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-10" id="avc-faqs-advanced-search">
      {/* Search and Category Filter Header Bar */}
      <div className="bg-white p-6 rounded-2xl border border-[#dcddd9] shadow-sm space-y-4 max-w-4xl mx-auto">
        <label htmlFor="faq-search-input" className="sr-only">Search tax questions</label>
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
          <input
            id="faq-search-input"
            type="text"
            placeholder="Type your question (e.g., 'Form 16', 'deadline', 'NRI', 'fee')..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setExpandedIndex(null); // Collapse when searching
            }}
            className="w-full pl-11 pr-4 py-3 bg-[#fbfbf9] text-[#00152c] text-sm rounded-xl border border-[#dcddd9] focus:outline-none focus:border-[#f48565] focus:ring-1 focus:ring-[#f48565]"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCategory(c.id as any);
                setExpandedIndex(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-sans transition-all cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-[#00152c] text-[#fee68c] border border-[#00152c]'
                  : 'bg-[#fcfcf9] text-slate-600 border border-[#dcddd9] hover:bg-neutral-50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion container */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            // Find global original index of the question for stable rendering
            const globalIndex = AVC_FAQS.indexOf(faq);
            return (
              <div
                key={globalIndex}
                className="border border-[#dcddd9] rounded-xl bg-[#fbfbf9] overflow-hidden transition-all shadow-sm hover:border-[#f48565]"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-start gap-4 text-xs sm:text-sm font-bold text-[#00152c] focus:outline-none min-h-[56px]"
                >
                  <span className="leading-snug pt-0.5">
                    <span className="text-[#f48565] mr-2">Q{globalIndex + 1}.</span>
                    {faq.question}
                  </span>
                  <span className="shrink-0 mt-0.5 p-1 bg-white rounded-md border border-[#dcddd9]">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-600" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-[#dcddd9] bg-white text-xs sm:text-sm text-slate-700 px-6 py-4 leading-relaxed font-sans font-normal"
                    >
                      <div className="flex gap-2 items-start text-xs text-amber-900 bg-amber-50/50 p-2.5 rounded-lg mb-3 border border-amber-100/60 font-medium">
                        <Info className="w-3.5 h-3.5 shrink-0 text-amber-800 mt-0.5" />
                        <span>Verified Practice Guideline for AY 2026-27 (FY 2025-26)</span>
                      </div>
                      <p className="whitespace-pre-line text-slate-650">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-[#dcddd9] space-y-2">
            <span className="text-3xl">🔍</span>
            <h4 className="font-bold text-[#00152c] font-serif">No Matching Tax Questions Found</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try searching with another keyword or pick one of the helpful category tabs above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
