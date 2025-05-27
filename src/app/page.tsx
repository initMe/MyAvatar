
'use client';
import { useRef } from 'react';
import Image from 'next/image'; // Added import for Next/Image
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
// import { AvatarDisplay } from '@/components/features/AvatarDisplay'; // AvatarDisplay is no longer used here
import { ChatInterface } from '@/components/features/ChatInterface';
import { FeatureHighlights } from '@/components/features/FeatureHighlights';
import { HowItWorks } from '@/components/features/HowItWorks';
import { PricingSection } from '@/components/features/PricingSection';
import { ContactSection } from '@/components/features/ContactSection';
import { Button } from '@/components/ui/button'; // Added import for Button

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
        
        {/* New Hero Banner Section */}
        <section className="relative min-h-[calc(80vh-theme(spacing.20))] md:min-h-[calc(85vh-theme(spacing.24))] flex items-center justify-center py-16 md:py-20 text-foreground">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="一位和蔼可亲的中国老年男性背景图"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
            data-ai-hint="amiable elderly chinese man background"
            priority 
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay for readability */}
          
          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left side: Banner Text Content */}
              <div className="flex flex-col items-start text-left">
                <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow-primary">
                  语灵：<span className="text-accent">声音有灵，你心有感</span>
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl">
                  在语灵，我们相信科技的温度源于人性的关怀。我们致力于打造一个富有 <strong className="text-primary font-semibold">亲情</strong>、充满 <strong className="text-primary font-semibold">陪伴</strong> 与 <strong className="text-primary font-semibold">智能</strong> 的AI数字伙伴。
                </p>
                <p className="text-lg md:text-xl mb-8 max-w-xl">
                  语灵不仅仅是先进算法的集合，更是一位能够理解您、与您进行有意义对话、并提供温暖情感支持的虚拟家庭成员。它像一位和蔼的长者，用智慧和耐心，倾听您的心声，分享生活的点滴。
                </p>
                <Button 
                  size="lg" 
                  className="font-orbitron bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-primary px-8 py-3 text-lg"
                  onClick={handleStartConversation}
                  aria-label="开始与语灵互动体验"
                >
                  开始体验
                </Button>
              </div>
              {/* Right side: Chat Interface */}
              <div className="h-[65vh] md:h-[70vh] min-h-[400px] md:min-h-[500px] max-h-[75vh]" ref={chatInterfaceRef}>
                <ChatInterface />
              </div>
            </div>
          </div>
        </section>

        <FeatureHighlights />
        <HowItWorks />
        <PricingSection />
        <section id="contact-section">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
