import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, addSupabaseLog } from '../store';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const dispatch = useDispatch();
  const faqs = useSelector((state: RootState) => state.app.faqs);
  const [expandedId, setExpandedId] = React.useState<string | null>('faq1'); // First one expanded by default

  const handleToggle = (id: string, question: string) => {
    const isExpanding = expandedId !== id;
    setExpandedId(isExpanding ? id : null);
    
    dispatch(addSupabaseLog({
      action: isExpanding ? 'SELECT' : 'CLOSE',
      type: 'select',
      details: `${isExpanding ? 'Expanded' : 'Collapsed'} FAQ: "${question}"`,
    }));
  };

  return (
    <section id="faq" className="py-24 bg-luxury-bg border-t border-luxury-cream/40">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase block">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-luxury-charcoal font-normal tracking-widest uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-luxury-cream/80 bg-luxury-white/40 hover:bg-luxury-white/80 transition-all duration-300"
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => handleToggle(faq.id, faq.question)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-luxury-charcoal uppercase">
                    {faq.question}
                  </span>
                  <span className="text-luxury-gold">
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 transition-transform duration-300" />
                    )}
                  </span>
                </button>

                {/* Animated expandable content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base font-light text-luxury-charcoal/80 leading-relaxed max-w-2xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
