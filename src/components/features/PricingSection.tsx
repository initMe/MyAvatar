
import { PricingCard } from './PricingCard';
import { Rocket, Gem, Zap } from 'lucide-react'; 

const pricingTiers = [
  {
    icon: Rocket,
    tierName: '基础版',
    price: '¥200/月',
    priceDescription: '适合并发量较小的个人用户或小企业',
    features: [
      '基础AI聊天互动',
      '一比一真实数字人形象',
      '最多同时5路并发对话',
      '有限的对话历史记录',
      '社区支持',
    ],
    ctaText: '开始使用',
    isFeatured: false,
  },
  {
    icon: Gem, 
    tierName: '高级版',
    price: '¥500/月', // Changed from $ to ¥
    priceDescription: '适合需要多路并发的高级用户和中小型企业', 
    features: [
      '具有更深上下文的高级AI聊天',
      '无限对话历史记录',
      '增强的数字形象表现力',
      '最多同时50路并发对话',
      '优先体验新功能',
    ],
    ctaText: '升级高级版',
    isFeatured: true,
  },
  {
    icon: Zap, 
    tierName: '定制版', // Changed from 企业版 to 家庭版
    price: '定制',
    priceDescription: '适用于更高并发的需求和大型企业', // Changed description
    features: [
      '所有高级版功能',
      '无上限的并发支持', 
      '定制化的互动场景 (可选)', 
      '专属支持与服务', 
      '更多个性化设置', 
    ],
    ctaText: '咨询方案', // Changed CTA
    isFeatured: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
          选择您的方案
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          选择适合您需求的方案，释放 语灵 的全部潜力。免费开始或升级以获得高级功能和支持，让“声音有灵，你心有感”。
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.tierName}
              icon={tier.icon}
              tierName={tier.tierName}
              price={tier.price}
              priceDescription={tier.priceDescription}
              features={tier.features}
              ctaText={tier.ctaText}
              isFeatured={tier.isFeatured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
