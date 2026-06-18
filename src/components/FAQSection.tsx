import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS_DATA } from '../data';
import { FAQItem } from '../types';
import { Search, HelpCircle, ChevronDown, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FAQSectionProps {
  onBookConsultation: (service?: string) => void;
}

type CategoryFilter = 'All' | 'Filing' | 'Notices' | 'Advisory' | 'TDS' | 'Audit';

export default function FAQSection({ onBookConsultation }: FAQSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item open by default

  const categories: CategoryFilter[] = ['All', 'Filing', 'Notices', 'Advisory', 'TDS', 'Audit'];

  // Filter strategy
  const filteredFAQs = useMemo(() => {
    return FAQS_DATA.filter((faq) => {
      const matchCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Search and Filters Hub */}
      <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 grid md:grid-cols-12 gap-4 items-center">
        {/* Search */}
        <div className="md:col-span-5 relative">
          <span className="absolute left-3.5 top-3 text-gray-400">
            <Search className="w-4.5 h-4.5" />
          </span>
          <input
            type="text"
            placeholder="Search tax, audit guidelines, or sections..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setExpandedIndex(null); // Reset expansions during search
            }}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm text-gray-800"
          />
        </div>

        {/* Filters bar */}
        <div className="md:col-span-7 flex flex-wrap gap-1.5 justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setExpandedIndex(null); // Reset expansions
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow font-semibold'
                  : 'bg-gray-150 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordions Stack */}
      <div className="space-y-3">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={faq.question}
                className={`bg-white rounded-xl border transition-all overflow-hidden ${
                  isExpanded ? 'border-primary ring-1 ring-primary/10 shadow-md' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 md:p-5 flex justify-between items-start gap-4 transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3">
                    <span className="p-1 bg-primary/5 text-primary rounded mt-0.5 shrink-0">
                      <HelpCircle className="w-4.5 h-4.5" />
                    </span>
                    <div>
                      <span className="text-[9px] bg-gray-100 text-gray-500 font-extrabold uppercase px-1.5 py-0.5 rounded tracking-wider">
                        {faq.category}
                      </span>
                      <h4 className="text-base font-bold text-primary tracking-tight mt-1 leading-snug">
                        {faq.question}
                      </h4>
                    </div>
                  </div>
                  <span
                    className={`p-1.5 text-gray-400 rounded-lg hover:bg-gray-50 transition-transform duration-350 ${
                      isExpanded ? 'rotate-180 text-primary' : 'rotate-0'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100 bg-gray-50/50"
                    >
                      <div className="p-4 md:p-5 text-sm text-gray-600 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-xl p-8 text-center border border-dashed border-gray-200">
            <p className="text-sm text-gray-500 font-medium">
              No matching tax or audit compliance guidelines found for "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-primary text-xs font-bold hover:underline mt-2 cursor-pointer"
            >
              Clear Search queries or Category Filter
            </button>
          </div>
        )}
      </div>

      {/* Still Have Questions Segment */}
      <div className="bg-primary-light/5 rounded-2xl p-5 border border-primary-light/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
        <div className="flex gap-3 items-center">
          <div className="p-2 sm:p-2.5 bg-primary text-white rounded-xl">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-primary">Still have complex, specific compliance queries?</h5>
            <p className="text-xs text-gray-500">Submit documents securely & gain absolute clarity on penalties and legal margins.</p>
          </div>
        </div>
        <button
          onClick={() => onBookConsultation('FAQ Follow Up')}
          className="bg-primary hover:bg-primary-light text-white font-bold py-2.5 px-5 rounded-xl text-xs flex items-center gap-1 shrink-0 transition-all cursor-pointer shadow-sm"
        >
          Consult our CA Desk
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
