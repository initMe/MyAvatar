
'use client';
import { useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AvatarDisplay } from '@/components/features/AvatarDisplay';
import { ChatInterface } from '@/components/features/ChatInterface';
import { FeatureHighlights } from '@/components/features/FeatureHighlights';

export default function Home() {
  const chatInterfaceRef = useRef<HTMLDivElement>(null); // Assuming ChatInterface main div can be focused or scrolled to
  
  const handleStartConversation = () => {
    // For now, this focuses the input inside ChatInterface
    // ChatInterface needs to expose a way to focus its input or this needs a more complex solution
    // A simple scroll into view for the chat section might be more straightforward
    chatInterfaceRef.current?.querySelector('input[type="text"]')?.focus();
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
      </main>
      <Footer />
    </div>
  );
}
