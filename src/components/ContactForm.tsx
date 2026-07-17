import React from 'react';
import { useDispatch } from 'react-redux';
import { addInquiry, addSupabaseLog } from '../store';
import { motion } from 'motion/react';
import { User, Mail, Globe, Leaf, Phone, MessageSquare, Compass, Send } from 'lucide-react';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    fullName: '',
    emailAddress: '',
    country: '',
    serviceInterest: 'Private Coaching',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.emailAddress || !formData.country) return;

    // Dispatch inquiry to state
    dispatch(addInquiry(formData));
    
    // Log in mock Supabase DB console
    dispatch(addSupabaseLog({
      action: 'INSERT',
      type: 'insert',
      details: `Inquiry successfully inserted into public.inquiries: user=${formData.fullName} interest=${formData.serviceInterest}`,
    }));

    setIsSubmitted(true);

    // Reset success state after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        emailAddress: '',
        country: '',
        serviceInterest: 'Private Coaching',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-luxury-bg relative overflow-hidden">
      
      {/* Background elegant botanical SVGs */}
      <div className="absolute left-0 top-10 w-48 h-96 opacity-15 pointer-events-none select-none">
        <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" className="text-luxury-gold stroke-1">
          <path d="M10 10 Q 50 50, 20 90 T 80 170" />
          <path d="M20 50 Q 0 70, 10 90" />
          <path d="M15 130 Q 35 150, 45 140" strokeWidth="0.5" />
          <path d="M10 10 C 20 30, 40 40, 50 60" />
          <path d="M50 60 C 60 80, 50 100, 70 120" />
          <circle cx="20" cy="50" r="1.5" fill="currentColor" />
          <circle cx="15" cy="130" r="1.5" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-10 w-48 h-96 opacity-15 pointer-events-none select-none">
        <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" className="text-luxury-gold stroke-1">
          <path d="M90 190 Q 50 150, 80 110 T 20 30" />
          <path d="M80 150 Q 100 130, 90 110" />
          <circle cx="80" cy="150" r="1.5" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-luxury-charcoal font-normal tracking-wide">
            Connect &amp; Inquire
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Form Side - 7 Cols */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-luxury-white border border-luxury-gold p-8 text-center space-y-4 shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto text-luxury-gold">
                  <Send className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl text-luxury-charcoal">Enquiry Sent Elegantly</h3>
                <p className="text-sm text-luxury-charcoal/70 font-light max-w-sm mx-auto">
                  Thank you for connecting. Your details have been stored in our Supabase table. Charu will reach out to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-luxury-gold/70">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="FULL NAME"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold px-12 py-3.5 text-xs tracking-widest uppercase text-luxury-charcoal placeholder-luxury-charcoal/40 font-medium focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all duration-300"
                  />
                </div>

                {/* Email Address Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-luxury-gold/70">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="EMAIL ADDRESS"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold px-12 py-3.5 text-xs tracking-widest uppercase text-luxury-charcoal placeholder-luxury-charcoal/40 font-medium focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all duration-300"
                  />
                </div>

                {/* Country Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-luxury-gold/70">
                    <Globe className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="COUNTRY"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold px-12 py-3.5 text-xs tracking-widest uppercase text-luxury-charcoal placeholder-luxury-charcoal/40 font-medium focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all duration-300"
                  />
                </div>

                {/* Service Interest Select */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-luxury-gold/70">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold px-12 py-3.5 text-xs tracking-widest uppercase text-luxury-charcoal/80 font-medium focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all duration-300 appearance-none"
                  >
                    <option value="Private Coaching">PRIVATE COACHING</option>
                    <option value="Private Breathwork">PRIVATE BREATHWORK INITIATION</option>
                    <option value="Nervous System Recalibration">NERVOUS SYSTEM RECALIBRATION</option>
                    <option value="Bespoke retreats">BESPOKE PRIVATE RETREATS</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-luxury-gold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    rows={4}
                    placeholder="OPTIONAL: DESCRIBE YOUR WELLNESS GOALS"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold px-6 py-4 text-xs tracking-widest uppercase text-luxury-charcoal placeholder-luxury-charcoal/40 font-medium focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all duration-300"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full bg-luxury-gold hover:bg-luxury-olive text-luxury-white text-xs font-semibold tracking-[0.2em] py-4 uppercase transition-all duration-500 rounded-none shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  SEND ENQUIRY
                </button>
              </form>
            )}
          </div>

          {/* Divider line for desktop */}
          <div className="hidden lg:block lg:col-span-1 h-80 w-[1px] bg-luxury-gold/20 mx-auto self-center"></div>

          {/* Cards Side - 4 Cols */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Card 1: WHATSAPP */}
            <a
              id="whatsapp-contact-card"
              href="https://wa.me/17656371985"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-luxury-white border border-luxury-gold-light/30 p-6 shadow-md hover:shadow-xl hover:border-luxury-gold transition-all duration-500 group"
            >
              {/* Green/Gold WhatsApp Ring */}
              <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold bg-luxury-bg group-hover:bg-luxury-gold group-hover:text-luxury-white transition-all duration-500">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-luxury-gold font-bold uppercase">
                  WHATSAPP
                </p>
                <p className="text-sm font-semibold text-luxury-charcoal mt-1">
                  +1 123 455 7890
                </p>
                <p className="text-[10px] text-luxury-charcoal/40 uppercase tracking-widest mt-0.5">
                  Direct Contact
                </p>
              </div>
            </a>

            {/* Card 2: EMAIL */}
            <a
              id="email-contact-card"
              href="mailto:luxurywellness@gmail.com"
              className="flex items-center space-x-4 bg-luxury-white border border-luxury-gold-light/30 p-6 shadow-md hover:shadow-xl hover:border-luxury-gold transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold bg-luxury-bg group-hover:bg-luxury-gold group-hover:text-luxury-white transition-all duration-500">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-luxury-gold font-bold uppercase">
                  EMAIL
                </p>
                <p className="text-sm font-semibold text-luxury-charcoal mt-1 lowercase">
                  luxurywellness@gmail.com
                </p>
                <p className="text-[10px] text-luxury-charcoal/40 uppercase tracking-widest mt-0.5">
                  Direct Contact
                </p>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
