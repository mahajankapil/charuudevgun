import { useDispatch } from 'react-redux';
import { toggleBookingModal, addSupabaseLog } from '../store';
import { motion } from 'motion/react';
import { MessageSquare, Check } from 'lucide-react';

export default function Services() {
  const dispatch = useDispatch();

  const handleWhatsApp = (serviceName: string) => {
    dispatch(addSupabaseLog({
      action: 'EXTERNAL_REDIRECT',
      type: 'auth',
      details: `User requested live chat on WhatsApp for service: ${serviceName}`,
    }));
    window.open('https://wa.me/17656371985?text=Hello%20Charu,%20I%20am%20interested%20in%20' + encodeURIComponent(serviceName), '_blank');
  };

  return (
    <section id="services" className="py-24 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase block">
            Exclusive Packages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-luxury-charcoal font-normal tracking-widest uppercase">
            SERVICES &amp; TRANSFORMATION
          </h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Card 1: Private Initiations (Olive Green Theme) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col border border-luxury-olive/20 bg-luxury-olive text-luxury-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Header banner */}
            <div className="bg-luxury-olive-dark/40 py-6 text-center border-b border-luxury-olive-dark/30">
              <h3 className="font-sans text-[15px] sm:text-lg tracking-[0.25em] font-medium uppercase text-luxury-white">
                PRIVATE INITIATIONS
              </h3>
            </div>
            
            {/* Image section */}
            <div className="h-64 sm:h-72 w-full overflow-hidden relative">
              <img
                src="https://mahajankapill.sirv.com/Brethewithher/3.png"
                alt="Woman meditating outdoors in nature"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-olive/30 to-transparent"></div>
            </div>

            {/* Description Body */}
            <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-luxury-olive">
              <p className="text-luxury-white/90 text-sm sm:text-base font-light leading-relaxed text-center">
                Personalized journey to unlock deep healing and expand your consciousness through guided breathwork and energetic alignment. Perfect for those seeking deep soul connection.
              </p>

              {/* Service list highlights */}
              <ul className="space-y-3 text-xs tracking-wider text-luxury-white/80 max-w-xs mx-auto">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-luxury-gold-light" />
                  <span>1:1 Deep Dive Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-luxury-gold-light" />
                  <span>Somatic Emotional Release</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-luxury-gold-light" />
                  <span>Custom Breathing Protocols</span>
                </li>
              </ul>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  id="book-initiations-btn"
                  onClick={() => {
                    dispatch(toggleBookingModal({ open: true, service: 'Private Initiations' }));
                    dispatch(addSupabaseLog({
                      action: 'CLICK',
                      type: 'select',
                      details: 'Opened booking sheet for Private Initiations',
                    }));
                  }}
                  className="bg-luxury-white hover:bg-luxury-cream text-luxury-olive text-xs font-semibold tracking-[0.2em] py-3.5 px-6 uppercase transition-colors duration-300 rounded-none shadow-sm flex items-center justify-center cursor-pointer"
                >
                  BOOK NOW
                </button>
                <button
                  id="whatsapp-initiations-btn"
                  onClick={() => handleWhatsApp('Private Initiations')}
                  className="border border-luxury-white/60 hover:bg-luxury-white/10 text-luxury-white text-xs font-medium tracking-[0.2em] py-3.5 px-6 uppercase transition-colors duration-300 rounded-none flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  WHATSAPP
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Nervous System Recalibration (White / Classic Theme) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col border border-luxury-cream bg-luxury-white text-luxury-charcoal shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Header banner */}
            <div className="bg-luxury-cream/40 py-6 text-center border-b border-luxury-cream/60">
              <h3 className="font-sans text-[15px] sm:text-lg tracking-[0.25em] font-semibold uppercase text-luxury-charcoal">
                NERVOUS SYSTEM RECALIBRATION
              </h3>
            </div>
            
            {/* Image section */}
            <div className="h-64 sm:h-72 w-full overflow-hidden relative">
              <img
                src="https://mahajankapill.sirv.com/Brethewithher/4.png"
                alt="Woman meditating indoors beside glowing candles"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-cream/30 to-transparent"></div>
            </div>

            {/* Description Body */}
            <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-luxury-white">
              <p className="text-luxury-charcoal/85 text-sm sm:text-base font-light leading-relaxed text-center">
                Restore balance, reduce stress, and cultivate resilience by regulating your nervous system through specialized techniques. Highly recommended for high-performing professionals.
              </p>

              {/* Service list highlights */}
              <ul className="space-y-3 text-xs tracking-wider text-luxury-charcoal/70 max-w-xs mx-auto">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-luxury-gold" />
                  <span>Autonomic System Regulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-luxury-gold" />
                  <span>Bio-feedback Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-luxury-gold" />
                  <span>Vagus Nerve Stimulation Guide</span>
                </li>
              </ul>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  id="book-recalibration-btn"
                  onClick={() => {
                    dispatch(toggleBookingModal({ open: true, service: 'Nervous System Recalibration' }));
                    dispatch(addSupabaseLog({
                      action: 'CLICK',
                      type: 'select',
                      details: 'Opened booking sheet for Nervous System Recalibration',
                    }));
                  }}
                  className="bg-luxury-olive hover:bg-luxury-olive-dark text-luxury-white text-xs font-semibold tracking-[0.2em] py-3.5 px-6 uppercase transition-colors duration-300 rounded-none shadow-sm flex items-center justify-center cursor-pointer"
                >
                  BOOK NOW
                </button>
                <button
                  id="whatsapp-recalibration-btn"
                  onClick={() => handleWhatsApp('Nervous System Recalibration')}
                  className="border border-luxury-olive/55 hover:bg-luxury-olive/5 text-luxury-olive text-xs font-medium tracking-[0.2em] py-3.5 px-6 uppercase transition-colors duration-300 rounded-none flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  WHATSAPP
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
