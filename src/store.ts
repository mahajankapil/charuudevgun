import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalAppState, BookingFormData, Testimonial, FAQItem, ServiceItem } from './types';

const initialTestimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Mitchell',
    role: 'CEO & Founder',
    quote: 'My journey with LUXURY WELLNESS HOME completely transformed my life. The breathwork sessions are profoundly healing. I found peace I didn\'t know existed.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 't2',
    name: 'Sophia Carter',
    role: 'Wellness Enthusiast & Writer',
    quote: 'Charu\'s nervous system healing techniques are deeply transformative. I feel a level of calm and clarity that I have never experienced before in my high-pressure role.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Creative Director',
    quote: 'A magnificent sanctuary for the mind and soul. The personalized attention and luxurious setting create a perfect container for deep, profound inner healing.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  },
];

const initialFAQs: FAQItem[] = [
  {
    id: 'faq1',
    question: 'WHAT IS NERVOUS SYSTEM HEALING?',
    answer: 'Nervous system healing involves practices that help regulate your autonomic nervous system, reducing stress and promoting a state of calm and balance through techniques like breathwork and somatic experiencing.',
  },
  {
    id: 'faq2',
    question: 'HOW DOES BREATHWORK HELP?',
    answer: 'Breathwork alters carbon dioxide and oxygen levels in your blood, shifting you from the fight-or-flight sympathetic nervous system into the rest-and-digest parasympathetic mode. This releases emotional blocks, lowers cortisol levels, and brings immediate mental clarity.',
  },
  {
    id: 'faq3',
    question: 'ARE THE SESSIONS REMOTE?',
    answer: 'Yes, we offer high-fidelity virtual 1:1 experiences over a secure luxury video platform. We also host exclusive in-person private retreats and intensive healing sessions globally.',
  },
  {
    id: 'faq4',
    question: 'WHAT IS YOUR CANCELLATION POLICY?',
    answer: 'As our experiences are bespoke and highly sought after, we require a 48-hour notice for any rescheduling or cancellation. Cancellations under 48 hours will retain the full session commitment.',
  },
  {
    id: 'faq5',
    question: 'DO YOU OFFER PACKAGES?',
    answer: 'Absolutely. We offer tailored 3-month and 6-month containers including weekly breathwork sessions, daily messaging support, nervous system tracking, and direct luxury guidance tailored specifically for you.',
  },
];

const initialState: GlobalAppState = {
  isBookingOpen: false,
  selectedService: '',
  testimonials: initialTestimonials,
  faqs: initialFAQs,
  services: [
    {
      id: 's1',
      title: 'PRIVATE INITIATIONS',
      description: 'Personalized journey to unlock deep healing and expand your consciousness through guided breathwork and energetic alignment.',
      image: 'https://mahajankapill.sirv.com/Brethewithher/3.png',
      theme: 'olive',
    },
    {
      id: 's2',
      title: 'NERVOUS SYSTEM RECALIBRATION',
      description: 'Restore balance, reduce stress, and cultivate resilience by regulating your nervous system through specialized techniques.',
      image: 'https://mahajankapill.sirv.com/Brethewithher/4.png',
      theme: 'white',
    },
  ],
  inquiries: [
    {
      fullName: 'Emma Watson',
      emailAddress: 'emma.watson@luxury.com',
      country: 'United Kingdom',
      serviceInterest: 'Private Coaching',
      message: 'I would love to learn more about the private 3-month somatic container.',
    }
  ],
  subscribedEmails: ['newsletter.preview@charuwellness.com'],
};

// Supabase State Slice for Dev console tracking
export interface SupabaseLog {
  id: string;
  timestamp: string;
  action: string;
  type: 'auth' | 'insert' | 'select' | 'error';
  details: string;
}

const initialLogs: SupabaseLog[] = [
  {
    id: 'log-1',
    timestamp: new Date(Date.now() - 3600 * 1000).toLocaleTimeString(),
    action: 'CONNECT',
    type: 'auth',
    details: 'Supabase client initialized successfully with project url https://ais-supabase.supabase.co',
  },
  {
    id: 'log-2',
    timestamp: new Date(Date.now() - 3000 * 1000).toLocaleTimeString(),
    action: 'SELECT',
    type: 'select',
    details: 'Fetched 3 client whispers from public.testimonials',
  },
  {
    id: 'log-3',
    timestamp: new Date().toLocaleTimeString(),
    action: 'SELECT',
    type: 'select',
    details: 'Fetched 5 FAQ modules from public.faqs',
  },
];

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleBookingModal: (state, action: PayloadAction<{ open: boolean; service?: string }>) => {
      state.isBookingOpen = action.payload.open;
      if (action.payload.service !== undefined) {
        state.selectedService = action.payload.service;
      }
    },
    addInquiry: (state, action: PayloadAction<BookingFormData>) => {
      state.inquiries.push(action.payload);
    },
    subscribeEmail: (state, action: PayloadAction<string>) => {
      if (!state.subscribedEmails.includes(action.payload)) {
        state.subscribedEmails.push(action.payload);
      }
    },
  },
});

const dbSlice = createSlice({
  name: 'db',
  initialState: {
    logs: initialLogs,
    isConsoleOpen: false,
    sessionUser: null as { email: string; name: string } | null,
  },
  reducers: {
    addSupabaseLog: (state, action: PayloadAction<{ action: string; type: 'auth' | 'insert' | 'select' | 'error'; details: string }>) => {
      state.logs.unshift({
        id: `log-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString(),
        ...action.payload,
      });
    },
    toggleConsole: (state) => {
      state.isConsoleOpen = !state.isConsoleOpen;
    },
    setSessionUser: (state, action: PayloadAction<{ email: string; name: string } | null>) => {
      state.sessionUser = action.payload;
    },
  },
});

export const { toggleBookingModal, addInquiry, subscribeEmail } = appSlice.actions;
export const { addSupabaseLog, toggleConsole, setSessionUser } = dbSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    db: dbSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
