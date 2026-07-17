import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600',
      alt: 'Sunset Ocean Meditation',
      title: 'Ocean Meditation',
      colSpan: 'md:col-span-4 row-span-2',
      height: 'h-[450px] md:h-full',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600',
      alt: 'Amber Essential Oils',
      title: 'Botanical Actives',
      colSpan: 'md:col-span-4 row-span-1',
      height: 'h-64',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=600',
      alt: 'Minimalist Yoga Studio',
      title: 'Somatic Studio',
      colSpan: 'md:col-span-4 row-span-1',
      height: 'h-64',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600',
      alt: 'Woman in forest looking up',
      title: 'Earth Integration',
      colSpan: 'md:col-span-3 row-span-1',
      height: 'h-64',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&q=80&w=600',
      alt: 'Woman meditating in deep forest',
      title: 'Forest Practice',
      colSpan: 'md:col-span-3 row-span-1',
      height: 'h-64',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
      alt: 'Fresh organic nourishment salad',
      title: 'Clean Cell Nourishment',
      colSpan: 'md:col-span-3 row-span-1',
      height: 'h-64',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600',
      alt: 'Luxury Massage and Healing Spa Beds',
      title: 'Restorative Beds',
      colSpan: 'md:col-span-3 row-span-1',
      height: 'h-64',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase block">
            Visual Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-luxury-charcoal font-normal tracking-widest uppercase">
            THE AESTHETIC OF SERENITY
          </h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {images.map((img) => (
            <motion.div
              key={img.id}
              className={`${img.colSpan} relative group overflow-hidden border border-luxury-cream shadow-md`}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Image element */}
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full ${img.height} object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out`}
                referrerPolicy="no-referrer"
              />

              {/* Elegant translucent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-luxury-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-[0.25em] text-luxury-gold font-semibold uppercase mb-1">
                  CHARU WELLNESS
                </span>
                <h4 className="font-serif text-lg text-luxury-white tracking-wide font-normal">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
