
'use client';

import { FeatureCard } from './FeatureCard';
import { HeartHandshake, InfinityIcon, School2, ShoppingCart } from 'lucide-react'; // Using InfinityIcon as Infinity

const useCases = [
  {
    icon: HeartHandshake,
    title: '温情陪伴',
    description: '无论是远在他乡的亲人，还是需要关怀的独居长者，语灵都能提供情感连接与日常陪伴，打破时空限制，传递温暖。',
  },
  {
    icon: InfinityIcon, // Using InfinityIcon
    title: '数字永生',
    description: '以数字形式珍藏逝去亲友的音容笑貌与智慧思想，让记忆得以延续，让思念不再遥远。',
  },
  {
    icon: School2,
    title: '智能教育',
    description: '打造个性化AI导师与虚拟学伴，提供趣味互动教学，辅助语言学习、知识解答，激发学习潜能。',
  },
  {
    icon: ShoppingCart,
    title: '电商助手',
    description: '生成7x24小时在线的智能客服与虚拟主播，提升用户购物咨询体验，高效引导促进销售转化。',
  },
];

export function DigitalHumanUseCases() {
  return (
    <section className="py-16 md:py-24 bg-background/80"> {/* Adjusted background like other sections */}
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
          探索“语灵”的无限可能
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-3xl mx-auto">
          “语灵”数字人技术不仅限于日常陪伴，它开辟了跨越多个领域的创新应用。从情感支持到行业赋能，探索这些激动人心的可能性：
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase) => (
            <FeatureCard
              key={useCase.title}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
