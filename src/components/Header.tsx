import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleBookingModal } from '../store';
import { Leaf, Menu, X } from 'lucide-react';

export default function Header() {
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-luxury-bg/95 backdrop-blur-md border-b border-luxury-cream">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a id="nav-logo" href="#home" className="flex flex-col items-start leading-none group">
          <span className="font-serif text-xl tracking-[0.25em] text-luxury-charcoal font-semibold transition-colors group-hover:text-luxury-gold">
            charu
          </span>
          <span className="font-sans text-[9px] tracking-[0.5em] text-luxury-gold mt-1 font-medium">
            Breathewithher
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] tracking-[0.2em] font-medium text-luxury-charcoal/80 hover:text-luxury-gold transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            id="header-booking-btn"
            onClick={() => dispatch(toggleBookingModal({ open: true, service: 'General Inquiry' }))}
            className="border border-luxury-gold hover:bg-luxury-gold text-luxury-charcoal hover:text-luxury-white text-xs font-medium tracking-[0.15em] px-5 py-2.5 rounded-none transition-all duration-500 ease-out cursor-pointer uppercase"
          >
            BOOK NOW
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-luxury-charcoal focus:outline-none p-1"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-luxury-bg border-b border-luxury-cream px-6 py-6 animate-fade-in absolute top-20 left-0 w-full shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[13px] tracking-[0.2em] font-medium text-luxury-charcoal/90 hover:text-luxury-gold py-2 transition-colors border-b border-luxury-cream/50"
              >
                {link.label}
              </a>
            ))}
            <button
              id="mobile-booking-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                dispatch(toggleBookingModal({ open: true, service: 'General Inquiry' }));
              }}
              className="w-full text-center border border-luxury-gold bg-luxury-gold text-luxury-white text-xs font-semibold tracking-[0.15em] py-3 mt-2 uppercase transition-all duration-300"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
