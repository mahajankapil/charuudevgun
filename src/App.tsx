import React from 'react';
import { useDispatch } from 'react-redux';
import { Loader2 } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseMe from './components/WhyChooseMe';
import Services from './components/Services';
import TransformationTable from './components/TransformationTable';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import ReadySection from './components/ReadySection';
import Video from './components/Video';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import SupabaseConsole from './components/SupabaseConsole';
import { addSupabaseLog } from './store';

export default function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);

  // Initial network latency load simulation (shimmer skeleton loaders)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      dispatch(addSupabaseLog({
        action: 'HYDRATION',
        type: 'select',
        details: 'Initial page data hydration complete. Skeletons swapped with active components.',
      }));
    }, 1500);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleTriggerSkeletons = () => {
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsLoading(false);
      dispatch(addSupabaseLog({
        action: 'HYDRATION',
        type: 'select',
        details: 'Latency re-simulation complete. Client models successfully loaded.',
      }));
    }, 2000);
  };

  if (isLoading) {
    return (
      <div id="skeleton-container" className="bg-luxury-bg min-h-screen text-luxury-charcoal flex flex-col selection:bg-luxury-gold/20">
        {/* Shimmer CSS Animation built directly into head */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .skeleton-shimmer {
            background: linear-gradient(90deg, #F5EFEB 25%, #EFE9E4 50%, #F5EFEB 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite linear;
          }
        `}} />

        {/* Skeleton Header */}
        <div className="h-20 border-b border-luxury-cream flex items-center justify-between px-6 bg-luxury-bg/95 backdrop-blur-sm">
          <div className="flex flex-col gap-1.5">
            <div className="h-5 w-24 skeleton-shimmer"></div>
            <div className="h-2 w-16 skeleton-shimmer"></div>
          </div>
          <div className="hidden md:flex gap-6">
            <div className="h-3 w-12 skeleton-shimmer"></div>
            <div className="h-3 w-12 skeleton-shimmer"></div>
            <div className="h-3 w-12 skeleton-shimmer"></div>
            <div className="h-3 w-12 skeleton-shimmer"></div>
          </div>
          <div className="h-9 w-24 skeleton-shimmer"></div>
        </div>

        {/* Skeleton Hero */}
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 space-y-6">
            <div className="h-4 w-32 skeleton-shimmer"></div>
            <div className="h-12 w-full max-w-lg skeleton-shimmer"></div>
            <div className="h-12 w-3/4 max-w-md skeleton-shimmer"></div>
            <div className="space-y-2.5 pt-4">
              <div className="h-3 w-full skeleton-shimmer"></div>
              <div className="h-3 w-5/6 skeleton-shimmer"></div>
              <div className="h-3 w-2/3 skeleton-shimmer"></div>
            </div>
            <div className="flex gap-4 pt-6">
              <div className="h-12 w-44 skeleton-shimmer"></div>
              <div className="h-12 w-44 skeleton-shimmer"></div>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-sm aspect-[3/4] skeleton-shimmer border border-luxury-cream shadow-md"></div>
          </div>
        </div>

        {/* Skeleton Why Choose Me Grid */}
        <div className="max-w-7xl mx-auto px-6 py-16 w-full space-y-10">
          <div className="h-6 w-48 mx-auto skeleton-shimmer"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="border border-luxury-cream/40 p-8 space-y-5 bg-white/60">
                <div className="h-12 w-12 mx-auto skeleton-shimmer"></div>
                <div className="h-4 w-36 mx-auto skeleton-shimmer"></div>
                <div className="space-y-2">
                  <div className="h-2 w-full skeleton-shimmer"></div>
                  <div className="h-2 w-5/6 mx-auto skeleton-shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simulated Database Loader Overlay */}
        <div className="fixed bottom-6 left-6 bg-neutral-900 border border-luxury-gold/50 text-luxury-white px-5 py-3 rounded-full flex items-center gap-2.5 shadow-2xl text-xs font-mono font-medium tracking-wide">
          <Loader2 className="h-4 w-4 animate-spin text-luxury-gold" />
          <span>⚡ SUPABASE: HYDRATING COMPONENT SKELETONS...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="selection:bg-luxury-gold/20 scroll-smooth">
      {/* Navigation Header */}
      <Header />

      {/* Hero Header */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Why Choose Me Section */}
      <WhyChooseMe />

      {/* Services Cards */}
      <Services />

      {/* Transformation comparison table */}
      <TransformationTable />

      {/* Testimonials Review Slider */}
      <Testimonials />

      {/* Serenity Bento Gallery */}
      <Gallery />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Connect Form Section */}
      <ContactForm />

      {/* Action Banner */}
      <ReadySection />

      {/* Video Section */}
      <Video />

      {/* Footer Block */}
      <Footer />

      {/* Popup booking module */}
      <BookingModal />

      {/* Developer database control deck */}
      <SupabaseConsole onTriggerSkeletons={handleTriggerSkeletons} />
    </div>
  );
}
