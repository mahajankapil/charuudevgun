import React from 'react';
import { useDispatch } from 'react-redux';
import { subscribeEmail, addSupabaseLog } from '../store';
import { Instagram, Facebook, MessageSquare, ArrowUp, Send, X } from 'lucide-react';

export default function Footer() {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = React.useState(false);
  const [description, setDescription] = React.useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setShowDescriptionModal(true);
  };

  const handleSendEmail = () => {
    const subject = 'Newsletter Subscription Inquiry';
    const body = `Email: ${email}\n\nDescription:\n${description}`;
    
    // Detect if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile, open Gmail app with pre-filled message
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=breathewithher@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    } else {
      // For desktop, open Gmail in new tab with pre-filled message
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=breathewithher@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    }
    
    // Dispatch subscribe
    dispatch(subscribeEmail(email));
    
    // Log to mock database
    dispatch(addSupabaseLog({
      action: 'INSERT',
      type: 'insert',
      details: `Email '${email}' successfully inserted into public.newsletter_subscribers`,
    }));

    setSubscribed(true);
    setEmail('');
    setDescription('');
    setShowDescriptionModal(false);
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-luxury-cream/40 border-t border-luxury-cream text-luxury-charcoal py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-12 border-b border-luxury-cream/80">
          
          {/* Col 1: Brand & Logo (4 Cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex flex-col items-start leading-none">
              <span className="font-serif text-2xl tracking-[0.2em] font-bold text-luxury-charcoal uppercase">
                charudevgun
              </span>
              <span className="font-sans text-[10px] tracking-[0.45em] text-luxury-gold font-medium mt-1 uppercase">
                Breathewithher
              </span>
            </div>
            <p className="text-xs sm:text-sm text-luxury-charcoal/70 font-light leading-relaxed max-w-sm">
              Somatic alignment, luxury breathing structures, and nervous system regulation. Assisting the discerning woman to claim deep, profound inner sovereignty.
            </p>
          </div>

          {/* Col 2: Newsletter Signup (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-sans text-xs tracking-widest text-luxury-charcoal font-semibold uppercase">
              NEWSLETTER SIGNUP
            </h3>
            
            {subscribed ? (
              <p className="text-xs text-luxury-gold font-medium animate-fade-in">
                Thank you! You have subscribed elegantly.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-luxury-white border border-luxury-gold/20 focus:border-luxury-gold px-4 py-3 text-[11px] tracking-wider uppercase text-luxury-charcoal focus:outline-none placeholder-luxury-charcoal/30 font-medium"
                />
                <button
                  id="newsletter-subscribe-btn"
                  type="submit"
                  className="w-full bg-luxury-gold hover:bg-luxury-olive text-luxury-white text-[11px] tracking-widest font-semibold py-3.5 uppercase transition-colors duration-300"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>

          {/* Col 3: Social Links (2 Cols) */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-sans text-xs tracking-widest text-luxury-charcoal font-semibold uppercase">
              SOCIALS
            </h3>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/breathewithher/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-luxury-gold/30 hover:border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/charu.devgun/videos/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-luxury-gold/30 hover:border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/17656371985"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-luxury-gold/30 hover:border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
            <p className="text-[10px] tracking-widest text-luxury-charcoal/45 uppercase">
              Follow Us
            </p>
          </div>

          {/* Col 4: Quick Navigation (2 Cols) */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-sans text-xs tracking-widest text-luxury-charcoal font-semibold uppercase">
              QUICK NAVIGATION
            </h3>
            <ul className="space-y-2 text-[11px] font-medium tracking-wider text-luxury-charcoal/80">
              <li>
                <a href="#home" className="hover:text-luxury-gold transition-colors uppercase">HOME</a>
              </li>
              <li>
                <a href="#about" className="hover:text-luxury-gold transition-colors uppercase">ABOUT</a>
              </li>
              <li>
                <a href="#services" className="hover:text-luxury-gold transition-colors uppercase">SERVICES</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-luxury-gold transition-colors uppercase">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-luxury-gold transition-colors uppercase">CONTACT</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-luxury-charcoal/50 font-medium tracking-widest">
          <p>© 2026 LUXURY WELLNESS HOME. All Rights Reserved.</p>
          
          {/* Scroll to Top floating button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1 hover:text-luxury-gold transition-colors uppercase focus:outline-none cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3 w-3 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* Description Modal */}
      {showDescriptionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-luxury-charcoal/40 backdrop-blur-md" onClick={() => setShowDescriptionModal(false)} />
          <div className="relative bg-luxury-bg border border-luxury-gold/30 shadow-2xl p-8 max-w-lg w-full z-10">
            <button
              onClick={() => setShowDescriptionModal(false)}
              className="absolute top-4 right-4 text-luxury-charcoal/60 hover:text-luxury-gold transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="space-y-6">
              <div>
                <span className="text-[10px] tracking-[0.3em] font-semibold text-luxury-gold uppercase block">
                  Newsletter Inquiry
                </span>
                <h3 className="font-serif text-2xl text-luxury-charcoal uppercase mt-1">
                  Write Description
                </h3>
                <div className="w-12 h-[1px] bg-luxury-gold mt-3"></div>
              </div>
              <textarea
                rows={4}
                placeholder="Please describe your interest or any specific requirements..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-luxury-white border border-luxury-gold-light/40 focus:border-luxury-gold px-4 py-3 text-xs tracking-widest uppercase text-luxury-charcoal placeholder-luxury-charcoal/40 font-medium focus:outline-none resize-none"
              />
              <button
                onClick={handleSendEmail}
                className="w-full bg-luxury-gold hover:bg-luxury-olive text-luxury-white text-xs font-semibold tracking-[0.2em] py-3.5 uppercase transition-colors duration-300"
              >
                SEND EMAIL
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
