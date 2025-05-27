
import { FeatureCard } from './FeatureCard';
import { UserRound, Sparkles, MessageSquareText, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: UserRound,
    title: '个性化陪伴',
    description: '空灵回响 会学习并适应您，提供独特的友好陪伴和倾听的耳朵，进行有意义的互动。',
  },
  {
    icon: Sparkles,
    title: '富有表现力的数字人',
    description: '与一个视觉上充满活力的虚拟形象互动，让您的对话栩栩如生。(即将推出：个性化设置或创建您自己的虚拟形象！)',
  },
  {
    icon: MessageSquareText,
    title: '智能对话',
    description: '体验有深度、有上下文的对话。我们的人工智能理解细微差别，记住细节，并提供周到的回应。',
  },
  {
    icon: Lightbulb,
    title: '创意与支持',
    description: '无论您需要一个头脑风暴的伙伴，一个鼓励的来源，还是仅仅是分享想法的人，空灵回响 都在这里。',
  },
];

export function FeatureHighlights() {
  return (
    <section className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
          探索 空灵回响
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          步入数字互动的新纪元。空灵回响 不仅仅是聊天——它是一种为连接、创造力和陪伴而设计的个性化AI体验。
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
