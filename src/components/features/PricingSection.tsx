
import { PricingCard } from './PricingCard';
import { Rocket, Gem, Zap } from 'lucide-react'; 

const pricingTiers = [
  {
    icon: Rocket,
    tierName: '入门版',
    price: '免费',
    priceDescription: '适合刚开始使用的个人用户',
    features: [
      '基础AI聊天互动',
      '有限的对话历史记录',
      '标准数字形象响应',
      '社区支持',
    ],
    ctaText: '开始使用',
    isFeatured: false,
  },
  {
    icon: Gem, 
    tierName: '高级版',
    price: '¥68/月', // Changed from $ to ¥
    priceDescription: '适合高级用户和爱好者',
    features: [
      '具有更深上下文的高级AI聊天',
      '无限对话历史记录',
      '增强的数字形象表现力',
      '优先邮件支持',
      '优先体验新功能',
    ],
    ctaText: '升级高级版',
    isFeatured: true,
  },
  {
    icon: Zap, 
    tierName: '家庭版', // Changed from 企业版 to 家庭版
    price: '定制',
    priceDescription: '适用于家庭共享或特殊需求', // Changed description
    features: [
      '所有高级版功能',
      '多用户访问支持', // Changed feature
      '定制化的家庭互动场景 (可选)', // Changed feature
      '专属支持与服务', // Changed feature
      '更多个性化设置', // Changed feature
    ],
    ctaText: '咨询方案', // Changed CTA
    isFeatured: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
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

