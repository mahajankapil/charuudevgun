export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  theme: 'olive' | 'white';
}

export interface BookingFormData {
  fullName: string;
  emailAddress: string;
  country: string;
  serviceInterest: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export interface GlobalAppState {
  isBookingOpen: boolean;
  selectedService: string;
  testimonials: Testimonial[];
  faqs: FAQItem[];
  services: ServiceItem[];
  inquiries: BookingFormData[];
  subscribedEmails: string[];
}
