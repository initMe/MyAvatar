
'use client';
import { useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AvatarDisplay } from '@/components/features/AvatarDisplay';
import { ChatInterface } from '@/components/features/ChatInterface';
import { FeatureHighlights } from '@/components/features/FeatureHighlights';
import { HowItWorks } from '@/components/features/HowItWorks';
import { PricingSection } from '@/components/features/PricingSection';
import { ContactSection } from '@/components/features/ContactSection';

export default function Home() {
  const chatInterfaceRef = useRef<HTMLDivElement>(null);
  
  const handleStartConversation = () => {
    const inputElement = chatInterfaceRef.current?.querySelector('input[type="text"]') as HTMLInputElement | null;
    inputElement?.focus();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20">
      <Header />
      <main className="flex-grow pt-20 md:pt-24"> {/* Adjust pt to account for fixed header height */}
        {/* Hero/Main Interaction Section */}
        <section className="container mx-auto px-4 md:px-6 py-8 md:py-12 min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-12rem)] flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 w-full items-stretch">
            <div className="md:col-span-1 flex items-center justify-center">
              <AvatarDisplay onStartConversation={handleStartConversation} />
            </div>
            <div className="md:col-span-1 h-[70vh] md:h-auto min-h-[400px] md:min-h-full" ref={chatInterfaceRef}>
              <ChatInterface />
            </div>
          </div>
        </section>

        <FeatureHighlights />
        <HowItWorks />
        <PricingSection />
        <section id="contact-section"> {/* Added id for scrolling */}
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

