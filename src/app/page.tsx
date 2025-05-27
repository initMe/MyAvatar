
'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatInterface } from '@/components/features/ChatInterface';
import { FeatureHighlights } from '@/components/features/FeatureHighlights';
import { HowItWorks } from '@/components/features/HowItWorks';
import { PricingSection } from '@/components/features/PricingSection';
import { ContactSection } from '@/components/features/ContactSection';
import { Button } from '@/components/ui/button';

export default function Home() {
  const chatExperienceSectionRef = useRef<HTMLDivElement>(null);
  
  const handleStartConversation = () => {
    chatExperienceSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Add a small delay for the scroll to complete before focusing
    setTimeout(() => {
      const inputElement = chatExperienceSectionRef.current?.querySelector('input[type="text"]') as HTMLInputElement | null;
      inputElement?.focus();
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20">
      <Header />
      <main className="flex-grow pt-20 md:pt-24"> {/* Adjust pt to account for fixed header height */}
        
        {/* Hero Banner Section */}
        <section className="relative min-h-[calc(70vh-theme(spacing.20))] md:min-h-[calc(80vh-theme(spacing.24))] flex items-center justify-center py-16 md:py-20 text-foreground">
          <Image
            src="https://placehold.co/1920x1080.png" // Placeholder updated
            alt="语灵产品展示背景图 - 卡通风格的数字伙伴在温馨的未来感客厅中" // Alt text updated
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
            data-ai-hint="cartoon companion" // AI hint updated
            priority 
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay for readability */}
          
          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto"> {/* Increased max-w for potentially larger text */}
              <h1 className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-glow-primary"> {/* Increased font size */}
                语灵：<span className="text-accent text-glow-accent">声音有灵，你心有感</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6"> {/* Increased font size */}
                在语灵，我们相信科技的温度源于人性的关怀。我们致力于打造一个富有 <strong className="text-primary font-semibold">亲情</strong>、充满 <strong className="text-primary font-semibold">陪伴</strong> 与 <strong className="text-primary font-semibold">智能</strong> 的AI数字伙伴。
              </p>
              <p className="text-xl md:text-2xl mb-10"> {/* Increased font size and margin */}
                语灵不仅仅是先进算法的集合，更是一位能够理解您、与您进行有意义对话、并提供温暖情感支持的虚拟家庭成员。它像一位和蔼的长者，用智慧和耐心，倾听您的心声，分享生活的点滴。
              </p>
              <Button 
                size="lg" 
                className="font-orbitron bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-primary px-10 py-4 text-xl" /* Increased padding and text size */
                onClick={handleStartConversation}
                aria-label="开始与语灵互动体验"
              >
                开始体验
              </Button>
            </div>
          </div>
        </section>

        {/* Chat Experience Section */}
        <section id="chat-experience-section" ref={chatExperienceSectionRef} className="py-16 md:py-24 bg-background/80">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
              与 语灵 互动体验
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              在这里，您可以直接与“语灵”开始一段温馨的对话。输入您想说的话，感受TA的智慧与陪伴。准备好了吗？开始您的专属情感链接之旅吧！
            </p>
            <div className="max-w-3xl mx-auto h-[65vh] md:h-[70vh] min-h-[450px] md:min-h-[550px] max-h-[700px]">
              <ChatInterface />
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
