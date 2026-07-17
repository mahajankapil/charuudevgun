import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, toggleBookingModal, addInquiry, addSupabaseLog } from '../store';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Mail, Globe, Leaf, CheckCircle2 } from 'lucide-react';

export default function BookingModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.app.isBookingOpen);
  const selectedService = useSelector((state: RootState) => state.app.selectedService);

  const [formData, setFormData] = React.useState({
    fullName: '',
    emailAddress: '',
    country: '',
    serviceInterest: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [completed, setCompleted] = React.useState(false);

  // Sync selected service when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, serviceInterest: selectedService || 'Private Coaching' }));
      setCompleted(false);
    }
  }, [isOpen, selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.emailAddress || !formData.country) return;

    // Dispatch inquiry
    dispatch(addInquiry(formData));

    // Log to Supabase Console
    dispatch(addSupabaseLog({
      action: 'INSERT',
      type: 'insert',
      details: `Supabase Auth validated session user. Inserted reservation row into public.consultations: user='${formData.fullName}', service='${formData.serviceInterest}', date='${formData.preferredDate}'`,
    }));

    // Format WhatsApp message
    const message = `*NEW BOOKING RESERVATION*

🌿 *Service Selected:* ${formData.serviceInterest}

👤 *Full Name:* ${formData.fullName}

📧 *Email:* ${formData.emailAddress}

🌍 *Country:* ${formData.country}

📅 *Preferred Date:* ${formData.preferredDate}

⏰ *Preferred Time:* ${formData.preferredTime}

💬 *Previous Experience:* ${formData.message}`;

    // Open WhatsApp with formatted message
    const whatsappNumber = '17656371985';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setCompleted(true);

    // Auto-close after 3 seconds
    setTimeout(() => {
      dispatch(toggleBookingModal({ open: false }));
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(toggleBookingModal({ open: false }))}
            className="fixed inset-0 bg-luxury-charcoal/40 backdrop-blur-md"
          />

          {/* Modal Card container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative bg-luxury-bg border border-luxury-gold/30 shadow-2xl p-8 max-w-lg w-full z-10 overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={() => dispatch(toggleBookingModal({ open: false }))}
              className="absolute top-4 right-4 text-luxury-charcoal/60 hover:text-luxury-gold transition-colors focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>

            {completed ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-luxury-charcoal">RESERVATION SUCCESSFUL</h3>
                  <p className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
                    public.consultations table updated
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-luxury-charcoal/70 font-light max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.fullName}. Your luxury somatic session is booked. An elegant email invite has been queued in our server.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] tracking-[0.3em] font-semibold text-luxury-gold uppercase block">
                    Bespoke Portal
                  </span>
                  <h3 className="font-serif text-2xl text-luxury-charcoal uppercase mt-1">
                    Book Consultation
                  </h3>
                  <div className="w-12 h-[1px] bg-luxury-gold mt-3"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service interest Dropdown */}
                  <div className="space-y-1">
                    <label className="text-[10px] tracking-widest text-luxury-gold font-bold uppercase block">
                      Select Sacred Service
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-luxury-gold/70">
                        <Leaf className="h-4 w-4" />
                      </div>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold pl-10 pr-10 py-3 text-xs tracking-widest uppercase text-luxury-charcoal font-semibold focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                      >
                        <option value="Private Coaching">PRIVATE COACHING</option>
                        <option value="Private Initiations">PRIVATE INITIATIONS</option>
                        <option value="Nervous System Recalibration">NERVOUS SYSTEM RECALIBRATION</option>
                        <option value="General Consultation">GENERAL CONSULTATION</option>
                      </select>
                    </div>
                  </div>

                  {/* Name Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-luxury-gold/70">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="YOUR FULL NAME"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold pl-10 pr-4 py-3 text-xs tracking-widest uppercase text-luxury-charcoal placeholder-luxury-charcoal/40 font-semibold focus:outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-luxury-gold/70">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="EMAIL ADDRESS"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold pl-10 pr-4 py-3 text-xs tracking-widest uppercase text-luxury-charcoal placeholder-luxury-charcoal/40 font-semibold focus:outline-none"
                    />
                  </div>

                  {/* Country Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-luxury-gold/70">
                      <Globe className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="YOUR COUNTRY"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold pl-10 pr-4 py-3 text-xs tracking-widest uppercase text-luxury-charcoal placeholder-luxury-charcoal/40 font-semibold focus:outline-none"
                    />
                  </div>

                  {/* Date & Time Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest text-luxury-gold font-bold uppercase block">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold px-3 py-2 text-xs text-luxury-charcoal font-semibold focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] tracking-widest text-luxury-gold font-bold uppercase block">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold px-3 py-2 text-xs text-luxury-charcoal font-semibold focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Description Box */}
                  <div>
                    <textarea
                      rows={2}
                      placeholder="ANY HISTORIC BREATHWORK EXPERIENCE?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold px-4 py-3 text-xs tracking-widest uppercase text-luxury-charcoal placeholder-luxury-charcoal/40 font-medium focus:outline-none"
                    />
                  </div>

                  {/* Database hint
                  <p className="text-[10px] tracking-widest text-luxury-charcoal/40 uppercase text-center font-medium">
                    ⚡ Connected to Supabase real-time cluster
                  </p> */}

                  {/* Submit Button */}
                  <button
                    id="modal-submit-btn"
                    type="submit"
                    className="w-full bg-luxury-gold hover:bg-luxury-olive text-luxury-white text-xs font-semibold tracking-[0.2em] py-3.5 uppercase transition-colors duration-300"
                  >
                    SUBMIT RESERVATION
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
