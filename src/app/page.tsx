
'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
// ChatInterface import is removed as it's no longer used directly here.
import { FeatureHighlights } from '@/components/features/FeatureHighlights';
import { DigitalHumanUseCases } from '@/components/features/DigitalHumanUseCases';
import { PricingSection } from '@/components/features/PricingSection';
import { ContactSection } from '@/components/features/ContactSection';
import { Button } from '@/components/ui/button';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const videoDemoSectionRef = useRef<HTMLDivElement>(null);
  
  const handleWatchDemo = () => {
    videoDemoSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-background to-purple-900/20">
      <Header />
      <main className="flex-grow pt-20 md:pt-24"> {/* Adjust pt to account for fixed header height */}
        
        {/* Hero Banner Section */}
        <section className="relative min-h-[calc(70vh-theme(spacing.20))] md:min-h-[calc(80vh-theme(spacing.24))] flex items-center justify-center py-16 md:py-20 text-foreground">
          <Image
            src="/images/banner.png" 
            alt="语灵产品展示背景图 - 卡通风格的数字伙伴在温馨的未来感客厅中" 
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
            data-ai-hint="cartoon companion" 
            priority 
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay for readability */}
          
          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto"> 
              <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-glow-primary"> 
                语灵：<span className="text-accent text-glow-accent">声音有灵，语有灵犀</span>
              </h1>
              <h3 className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-glow-primary"> 
                1:1 真人建模 × 实时AI互动，重构人与数字的边界
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl mb-5"> 
                在语灵，我们相信科技的温度源于人性的关怀。
              </p>
              <p className="text-lg sm:text-xl md:text-2xl mb-6"> 
                我们致力于打造一个 <strong className="text-primary font-semibold">真实</strong>、充满 <strong className="text-primary font-semibold">温度</strong> 与 <strong className="text-primary font-semibold">智能</strong> 的AI数字伙伴。
              </p>
              <p className="text-lg sm:text-xl md:text-2xl mb-10"> 
                从客户服务到情感陪伴，语灵AI全场景智能支持，实时渲染、自然互动，带来真实可信的数字人交互体验，构建有温度的服务连接
              </p>
              <Button 
                size="lg" 
                className="font-orbitron bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-primary px-8 py-3 text-lg md:px-10 md:py-4 md:text-xl"
                onClick={handleWatchDemo}
                aria-label="观看语灵互动演示视频"
              >
                观看演示
              </Button>
            </div>
          </div>
        </section>

        {/* Video Demonstration Section */}
        <section id="video-demo-section" ref={videoDemoSectionRef} className="py-16 md:py-24 bg-background/80">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
              “语灵”对话效果展示
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              观看下面的视频，了解“语灵”如何通过自然的语音交互和智能的情感反馈，为您带来富有温度的数字人陪伴体验。
            </p>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-2 border-accent/30 glassmorphism">
              {/* 
                IMPORTANT: Replace the src attribute with the path to your video file.
                For example, if your video is in public/videos/yuling_demo.mp4,
                the src should be "/videos/yuling_demo.mp4".
              */}
              <video
                src="/videos/placeholder_demo.mp4" // Replace with your video path
                controls
                autoPlay
                muted // Autoplay often requires video to be muted initially
                loop
                playsInline // Important for iOS Safari
                className="w-full h-auto aspect-video"
                poster="https://placehold.co/1280x720.png?text=Video+Coming+Soon" // Optional: poster image
                data-ai-hint="digital human conversation"
              >
                您的浏览器不支持 Video 标签。
              </video>
            </div>
          </div>
        </section>

        <FeatureHighlights />
        <DigitalHumanUseCases />
        <PricingSection />
        <section id="contact-section">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
