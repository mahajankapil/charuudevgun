import { useDispatch } from 'react-redux';
import { toggleBookingModal, addSupabaseLog } from '../store';
import { motion } from 'motion/react';
import { MessageSquare, Calendar } from 'lucide-react';

export default function Hero() {
  const dispatch = useDispatch();

  const handleWhatsAppClick = () => {
    dispatch(addSupabaseLog({
      action: 'EXTERNAL_REDIRECT',
      type: 'auth',
      details: 'User initiated WhatsApp live chat request for immediate contact',
    }));
    window.open('https://wa.me/17656371985', '_blank');
  };

  return (
    <section id="home" className="relative py-12 lg:py-24 overflow-hidden bg-luxury-bg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10"
        >
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase block">
              Luxury Guidance
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-luxury-charcoal font-normal leading-[1.1] tracking-wide uppercase">
              Private Breathwork
              <span className="block italic font-light text-luxury-gold my-2 text-3xl sm:text-4xl lg:text-5xl lowercase">
                &amp;
              </span>
              Nervous System
              <span className="block font-medium text-luxury-charcoal mt-1">
                Healing
              </span>
            </h1>
          </div>

          <p className="text-luxury-charcoal/80 text-base sm:text-lg max-w-xl leading-relaxed font-light">
            Luxury guidance for feminine well-being and deep inner peace by Charu. Specially designed containers to release stress, integrate somatic trauma, and restore full nervous system health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              id="hero-book-btn"
              onClick={() => {
                dispatch(toggleBookingModal({ open: true, service: 'Private Breathwork Consultation' }));
                dispatch(addSupabaseLog({
                  action: 'CLICK',
                  type: 'select',
                  details: 'User opened consultation intake form via primary Hero CTA',
                }));
              }}
              className="bg-luxury-gold hover:bg-luxury-olive text-luxury-white text-xs font-medium tracking-[0.2em] px-8 py-4 uppercase transition-all duration-500 rounded-none shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              BOOK CONSULTATION
            </button>
            <button
              id="hero-whatsapp-btn"
              onClick={handleWhatsAppClick}
              className="border border-luxury-gold text-luxury-gold hover:bg-luxury-gold/5 text-xs font-medium tracking-[0.2em] px-8 py-4 uppercase transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              WHATSAPP NOW
            </button>
          </div>
        </motion.div>

        {/* Right Column Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
        >
          {/* Main serenade frame decoration */}
          <div className="absolute -inset-4 border border-luxury-gold/20 translate-x-4 translate-y-4 -z-10 hidden sm:block"></div>
          
          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden shadow-2xl border border-luxury-cream">
            <img
              src="https://mahajankapill.sirv.com/Brethewithher/charu.png"
              alt="Serene Woman Meditating under Soft Sunlight"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2000ms]"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Aesthetic floating label */}
          <div className="absolute bottom-6 left-6 bg-luxury-bg/90 backdrop-blur-md px-6 py-4 border border-luxury-cream shadow-lg hidden sm:block">
            <p className="font-serif italic text-sm text-luxury-charcoal">"Deep somatic release."</p>
            <p className="text-[10px] tracking-widest text-luxury-gold mt-1 uppercase">1:1 Luxury Container</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
