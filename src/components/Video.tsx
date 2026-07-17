import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Video() {
  return (
    <section className="py-24 bg-luxury-bg relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luxury-olive/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase block">
            Experience the Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-luxury-charcoal font-normal tracking-widest uppercase">
            BREATHE WITH CHARU
          </h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto"></div>
          <p className="text-luxury-charcoal/70 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Immerse yourself in a guided breathwork experience. Allow yourself to release, restore, and reconnect with your inner peace.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative frame */}
          <div className="relative">
            {/* Outer decorative border */}
            <div className="absolute -inset-4 border border-luxury-gold/20 translate-x-2 translate-y-2 -z-10"></div>
            
            {/* Main video container */}
            <div className="relative bg-luxury-cream/30 border border-luxury-cream shadow-2xl overflow-hidden rounded-sm">
              {/* Video wrapper with aspect ratio */}
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/d9-8v04DCVk?widget_referrer=https://www.charudevgun.com"
                  title="Breathe with Charu"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Floating label overlay */}
              <div className="absolute bottom-4 left-4 bg-luxury-bg/95 backdrop-blur-md px-6 py-3 border border-luxury-cream shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                    <Play className="h-4 w-4 text-luxury-gold fill-luxury-gold" />
                  </div>
                  <div>
                    <p className="font-serif text-sm text-luxury-charcoal">Guided Breathwork</p>
                    <p className="text-[10px] tracking-widest text-luxury-gold uppercase">Experience Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to action below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#services"
            className="inline-block border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-white text-xs font-medium tracking-[0.2em] px-8 py-3.5 uppercase transition-all duration-500 rounded-none"
          >
            BEGIN YOUR JOURNEY
          </a>
        </motion.div>
      </div>
    </section>
  );
}
