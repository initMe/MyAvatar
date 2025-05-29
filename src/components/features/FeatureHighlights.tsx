
import { FeatureCard } from './FeatureCard';
import { Users, Sparkles, MessagesSquare, Brain } from 'lucide-react'; // Replaced UserRound with Users, MessageSquareText with MessagesSquare, Lightbulb with Brain

const features = [
  {
    icon: Users, // Changed from UserRound
    title: '富有表现力的数字形象',
    description: '语灵基于1:1建模与高精渲染技术，通过先进的算法和大量的数据训练，还原真实人物形象，实现可信、亲切的互动体验。',
  },
  {
    icon: Sparkles,
    title: '多场景适配',
    description: '无论是陪伴、导览还是服务咨询，语灵都能以恰当的方式出现，贴心响应每一次需求',
  },
  {
    icon: MessagesSquare, // Changed from MessageSquareText
    title: '智慧温情的对话',
    description: '体验有深度、有上下文的对话。语灵学习并适应您，记住重要点滴，并提供充满智慧与关怀的回应。',
  },
  {
    icon: Brain, // Changed from Lightbulb
    title: '情感慰藉与智能辅助',
    description: '无论您需要情感上的慰藉，生活的建议，还是仅仅是分享喜怒哀乐，语灵都在这里，用智能和爱心陪伴您。',
  },
];

export function FeatureHighlights() {
  return (
    <section className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
          走近 语灵
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          步入数字互动的新纪元。语灵 不仅仅是聊天——它是一种为亲情、陪伴、创造力和智能而设计的个性化AI体验。语有灵犀，智能陪伴。
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
