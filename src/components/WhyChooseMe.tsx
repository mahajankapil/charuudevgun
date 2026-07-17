import { motion } from 'motion/react';
import { Brain, Flower2, Wind } from 'lucide-react';

export default function WhyChooseMe() {
  const cards = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12 text-luxury-gold" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Custom elegant neural/brain icon */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925-3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 002.25 10.5c0 1.223.585 2.308 1.493 3.013A3.75 3.75 0 0012 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 01-.495-7.467 5.99 5.99 0 011.925-3.546 5.974 5.974 0 002.133-1A3.75 3.75 0 0121.75 10.5c0 1.223-.585 2.308-1.493 3.013A3.75 3.75 0 0112 18z" />
          <circle cx="12" cy="11" r="2" />
        </svg>
      ),
      title: 'Expert Nervous System Healing',
      description: 'Scientifically backed techniques for lasting inner tranquility.',
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12 text-luxury-gold" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Elegant lotus flower sitting on supportive hand/base */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13M12 3c-1.5 2.5-4.5 4-4.5 7s2.5 4 4.5 4 4.5-1 4.5-4-3-4.5-4.5-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10c-3-1.5-6 .5-6 3s3 3.5 6 3 6-.5 6-3-3-4.5-6-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5c4-1 12-1 16 0" />
        </svg>
      ),
      title: 'Personalized Luxury Support',
      description: 'Tailored coaching experiences for the discerning woman.',
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12 text-luxury-gold" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Flowing breath waves/wind */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5h14.5a2.5 2.5 0 000-5H16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5h16.5a2.5 2.5 0 010 5H18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 18.5h9.5a1.5 1.5 0 000-3h-1" />
        </svg>
      ),
      title: 'Transformative Breathwork',
      description: 'Master the power of your breath for profound emotional release.',
    },
  ];

  return (
    <section className="py-24 bg-luxury-bg border-t border-b border-luxury-cream/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-luxury-charcoal font-normal tracking-widest uppercase">
            WHY CHOOSE ME
          </h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-luxury-white/60 hover:bg-luxury-white p-8 sm:p-10 border border-luxury-cream/40 hover:border-luxury-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 rounded-none flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="p-4 bg-luxury-bg border border-luxury-cream rounded-none mb-6 group-hover:border-luxury-gold/20 group-hover:scale-105 transition-all duration-500">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-sans text-base sm:text-lg text-luxury-charcoal font-semibold tracking-wider mb-4 uppercase">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-luxury-charcoal/75 text-sm sm:text-base leading-relaxed font-light">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
