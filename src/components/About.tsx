import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-luxury-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Photo of Charu */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Accent offset background box */}
          <div className="absolute inset-y-6 inset-x-0 sm:-left-6 sm:right-6 bg-luxury-cream -z-10 rounded-none"></div>

          <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden shadow-xl border border-luxury-cream">
            <img
              src="https://mahajankapill.sirv.com/Brethewithher/2.png"
              alt="Charu reading a book in her luxury wellness workspace"
              className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-[1500ms]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Right Side: Text & Story */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-luxury-gold uppercase">
            MEET YOUR GUIDE
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-luxury-charcoal font-normal tracking-wide">
            About Charu
          </h2>

          <div className="w-16 h-[1px] bg-luxury-gold/50 my-2"></div>

          <p className="text-luxury-charcoal/80 text-base sm:text-lg leading-relaxed font-light">
            Welcome, I am Charu, a certified luxury wellness coach specializing in the art of breathwork and nervous system healing. With over a decade of experience, I guide women through transformative journeys to reclaim their calm, restore balance, and unlock their highest potential.
          </p>
          
          <p className="text-luxury-charcoal/70 text-sm sm:text-base leading-relaxed font-light">
            My approach combines scientifically-backed nervous system regulation techniques with high-frequency spiritual alignment. Together, we work at the deep cellular and somatic levels to release stress and patterns of burnout, paving the path for authentic well-being and sovereign power.
          </p>

          <div className="pt-4">
            <a
              id="about-know-more-btn"
              href="#services"
              className="inline-block border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-white text-xs font-medium tracking-[0.2em] px-8 py-3.5 uppercase transition-all duration-500 rounded-none"
            >
              KNOW MORE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
