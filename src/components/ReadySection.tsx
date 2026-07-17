import { useDispatch } from 'react-redux';
import { toggleBookingModal, addSupabaseLog } from '../store';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function ReadySection() {
  const dispatch = useDispatch();

  return (
    <section className="py-24 bg-luxury-olive text-luxury-white relative overflow-hidden text-center">
      
      {/* Botanical overlay icons */}
      <div className="absolute left-0 top-0 bottom-0 w-64 opacity-10 pointer-events-none select-none flex items-center justify-start">
        <svg viewBox="0 0 100 100" className="w-full h-full text-luxury-white fill-current">
          <path d="M0 50 C 30 30, 40 10, 50 0 C 40 10, 30 30, 0 50" />
          <path d="M0 50 C 30 70, 40 90, 50 100 C 40 90, 30 70, 0 50" />
        </svg>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-64 opacity-10 pointer-events-none select-none flex items-center justify-end">
        <svg viewBox="0 0 100 100" className="w-full h-full text-luxury-white fill-current">
          <path d="M100 50 C 70 30, 60 10, 50 0 C 60 10, 70 30, 100 50" />
          <path d="M100 50 C 70 70, 60 90, 50 100 C 60 90, 70 70, 100 50" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-[10px] tracking-[0.35em] font-semibold text-luxury-gold-light uppercase block">
            Your Inner Sanctuary Awaits
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
            READY TO BEGIN?
            <span className="block font-light italic mt-2 text-2xl sm:text-3xl lg:text-4xl text-luxury-cream">
              Discover Your Path to Harmony.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-4"
        >
          <button
            id="ready-consultation-btn"
            onClick={() => {
              dispatch(toggleBookingModal({ open: true, service: 'General Consultation' }));
              dispatch(addSupabaseLog({
                action: 'CLICK',
                type: 'select',
                details: 'User clicked secondary Ready section consultation CTA',
              }));
            }}
            className="bg-luxury-bg hover:bg-luxury-cream text-luxury-olive text-xs font-semibold tracking-[0.2em] px-10 py-4 uppercase rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 cursor-pointer inline-flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            BOOK A CONSULTATION
          </button>
        </motion.div>
      </div>
    </section>
  );
}
