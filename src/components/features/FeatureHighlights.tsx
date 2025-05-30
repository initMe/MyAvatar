
import { FeatureCard } from './FeatureCard';
import { Users, Sparkles, MessagesSquare, Brain } from 'lucide-react'; // Replaced UserRound with Users, MessageSquareText with MessagesSquare, Lightbulb with Brain

const features = [
  {
    icon: Users, // Changed from UserRound
    title: '1：1 真人定制',
    description: '语灵基于1:1建模与高精渲染技术，通过先进的算法和大量的数据训练，还原真实人物形象，实现可信、亲切的互动体验。',
  },
  {
    icon: Sparkles,
    title: '灵活交付',
    description: '支持 API、SDK 等多种接入方式，支持在线以及私有化部署使用，语灵贴心响应每一次需求',
  },
  {
    icon: MessagesSquare, // Changed from MessageSquareText
    title: '实时智能的对话',
    description: '通过多年的技术优化和特有的技术架构，语灵能在毫秒级别理解用户意图并生成智能且具有温度的回复',
  },
  {
    icon: Brain, // Changed from Lightbulb
    title: '多模态交互',
    description: '围绕以文本、语音、NLP、以及四位一体（情感、记忆、个性、知识）的实时对话大模型等多模态技术为基础，通过端云协同的架构，构建的具备情感化的双工交互数字人。',
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
