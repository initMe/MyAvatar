
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-glow-primary">
          关于数字人
        </h1>
        <div className="max-w-2xl mx-auto space-y-6 text-lg text-foreground/90">
          <p>
            空灵回响 代表了人机交互的新领域，将艺术与人工智能相融合，创造出数字伴侣。
          </p>
          <p>
            我们的愿景是打造不仅能够理解和回应，还能提供真诚陪伴和情感支持的数字生命。它们被设计成能够与您一同学习、适应和成长，提供独特且个性化的体验。
          </p>
          <p>
            本项目探索了人工智能在促进连接、缓解孤独感以及在日益数字化的世界中提供慰藉性存在的潜力。我们相信技术能够增强人类体验的力量，而 空灵回响 正是迈向这一未来的一步。
          </p>
          <p className="font-orbitron text-accent text-glow-accent">
            敬请期待我们持续进化和增强您的数字伴侣。
          </p>
        </div>
        <Button asChild size="lg" className="mt-12 font-orbitron bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-primary">
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" />
            返回首页
          </Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
}
