import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, addSupabaseLog } from '../store';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const dispatch = useDispatch();
  const testimonials = useSelector((state: RootState) => state.app.testimonials);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    dispatch(addSupabaseLog({
      action: 'SELECT',
      type: 'select',
      details: 'User clicked previous on Client Whispers review slider',
    }));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    dispatch(addSupabaseLog({
      action: 'SELECT',
      type: 'select',
      details: 'User clicked next on Client Whispers review slider',
    }));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-luxury-bg border-t border-b border-luxury-cream/40 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] font-semibold text-luxury-gold uppercase block mb-3">
            KIND WORDS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-luxury-charcoal font-normal tracking-widest uppercase">
            CLIENT WHISPERS
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-4"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-luxury-white border border-luxury-cream p-8 sm:p-16 shadow-xl max-w-4xl mx-auto">
          {/* Quote mark ornament */}
          <div className="absolute top-6 left-6 text-luxury-gold/10 font-serif text-8xl select-none leading-none pointer-events-none">
            “
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left side: Profile Image */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-36 h-44 sm:w-44 sm:h-56 overflow-hidden border border-luxury-cream shadow-md">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Right side: Stars, Quote, and Name */}
            <div className="md:col-span-8 flex flex-col justify-center space-y-6">
              
              {/* Stars */}
              <div className="flex space-x-1 text-luxury-gold">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <div className="min-h-32 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="font-serif text-base sm:text-lg lg:text-xl text-luxury-charcoal leading-relaxed italic font-light"
                  >
                    "{activeTestimonial.quote}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Name and role */}
              <div className="flex flex-col space-y-1">
                <span className="font-sans text-xs tracking-widest text-luxury-gold font-bold uppercase">
                  — {activeTestimonial.name}
                </span>
                <span className="text-[11px] tracking-wider text-luxury-charcoal/50 font-medium">
                  {activeTestimonial.role}
                </span>
              </div>

            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-12 flex space-x-3">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-luxury-gold/40 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-white transition-all duration-300 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-luxury-gold/40 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-white transition-all duration-300 shadow-sm cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Thumbnail Indicator Bar */}
        <div className="flex justify-center items-center space-x-6 mt-12">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveIndex(idx);
                dispatch(addSupabaseLog({
                  action: 'SELECT',
                  type: 'select',
                  details: `User navigated to testimonial ${idx + 1} (${t.name})`,
                }));
              }}
              className="flex flex-col items-center space-y-2 group focus:outline-none"
            >
              <div className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${activeIndex === idx ? 'border-luxury-gold scale-110 shadow-md' : 'border-transparent opacity-50 group-hover:opacity-80'}`}>
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className={`text-[9px] tracking-widest transition-colors duration-300 uppercase ${activeIndex === idx ? 'text-luxury-gold font-bold' : 'text-luxury-charcoal/40 font-medium'}`}>
                {t.name.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
