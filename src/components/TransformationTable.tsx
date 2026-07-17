import { motion } from 'motion/react';
import { ArrowRight, ThumbsDown, ThumbsUp } from 'lucide-react';

export default function TransformationTable() {
  const beforeItems = [
    'Overthinking & Anxiety',
    'Chronic Stress',
    'Disconnection',
    'Low Energy',
    'Reactivity',
  ];

  const afterItems = [
    'Inner Peace & Clarity',
    'Calm & Resilience',
    'Deep Connection',
    'Vibrant Energy',
    'Mindful Response',
  ];

  return (
    <section className="py-20 bg-luxury-bg">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section divider with "TRANSFORMATION" text label */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="flex-1 h-[1px] bg-luxury-gold/30"></div>
          <span className="font-sans text-[11px] tracking-[0.4em] text-luxury-gold uppercase font-semibold">
            TRANSFORMATION
          </span>
          <div className="flex-1 h-[1px] bg-luxury-gold/30"></div>
        </div>

        {/* Card Frame wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-luxury-gold/30 bg-luxury-white shadow-lg p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Subtle gold floral watermark in corners */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="text-luxury-gold">
              <path d="M50 0 C60 30, 90 40, 100 50 C90 60, 60 70, 50 100 C40 70, 10 60, 0 50 C10 40, 40 30, 50 0 Z" />
            </svg>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-luxury-charcoal text-center font-normal tracking-wide mb-12 uppercase">
            YOUR JOURNEY: BEFORE &amp; AFTER
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-11 gap-8 md:gap-4 items-center relative">
            
            {/* Column 1: BEFORE */}
            <div className="md:col-span-5 flex flex-col items-center md:items-end text-center md:text-right space-y-6">
              <span className="font-serif text-lg tracking-[0.15em] text-luxury-charcoal/60 uppercase border-b border-luxury-cream pb-2 w-32 md:w-auto md:block">
                BEFORE
              </span>
              <ul className="space-y-4 w-full">
                {beforeItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center md:justify-end gap-3 justify-center text-luxury-charcoal/80 text-sm sm:text-base font-light"
                  >
                    <span>{item}</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-red-400/80"></span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Middle Divider Column (Wavy Gold Line) */}
            <div className="hidden md:flex md:col-span-1 justify-center h-48 relative">
              <svg className="w-8 h-full text-luxury-gold" viewBox="0 0 40 200" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M20 0 C 10 40, 30 80, 20 120 C 10 160, 30 190, 20 200" strokeLinecap="round" />
              </svg>
            </div>

            {/* Mobile divider */}
            <div className="md:hidden flex items-center justify-center py-2">
              <div className="w-full h-[1px] bg-luxury-cream"></div>
            </div>

            {/* Column 2: AFTER */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              <span className="font-serif text-lg tracking-[0.15em] text-luxury-gold uppercase border-b border-luxury-cream pb-2 w-32 md:w-auto md:block">
                AFTER
              </span>
              <ul className="space-y-4 w-full">
                {afterItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center md:justify-start gap-3 justify-center text-luxury-charcoal font-medium text-sm sm:text-base"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-luxury-gold"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
