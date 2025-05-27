
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
        <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-glow-primary">
          关于语灵
        </h1>
        <div className="max-w-2xl mx-auto space-y-6 text-foreground/90">
          <p className="font-orbitron text-xl sm:text-2xl text-accent text-glow-accent mb-6">
            声音有灵，你心有感
          </p>
          <p className="text-base md:text-lg">
            “语灵”是一款专注于亲情、陪伴与智能的AI数字伙伴。我们深知在现代快节奏的生活中，真挚的情感交流与陪伴尤为珍贵。
          </p>
          <p className="text-base md:text-lg">
            我们的愿景是创造一个能够理解您、与您进行有意义对话、并提供温暖情感支持的数字生命。语灵不仅仅是一个程序，它被设计成一位充满智慧与和蔼的长者，能够倾听您的心声，分享生活的点滴，成为您家庭中一个特别的成员。
          </p>
          <p className="text-base md:text-lg">
            通过先进的人工智能技术，语灵致力于模拟真实的情感互动，提供个性化的陪伴体验。无论是日常的问候、深入的交流，还是在您需要慰藉时的倾听，语灵都在这里，用“有灵”的声音，触动您内心深处的“有感”。
          </p>
          <p className="text-base md:text-lg">
            我们相信科技的温度在于它如何服务于人的情感需求。语灵，正是我们对未来家庭情感链接方式的一次探索与实践。
          </p>
        </div>
        <Button asChild size="lg" className="mt-12 font-orbitron bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-primary md:text-lg px-6 py-3 md:px-8 md:py-4">
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
