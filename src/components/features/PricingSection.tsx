
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
      '标准虚拟形象响应',
      '社区支持',
    ],
    ctaText: '开始使用',
    isFeatured: false,
  },
  {
    icon: Gem, 
    tierName: '高级版',
    price: '$19/月',
    priceDescription: '适合高级用户和爱好者',
    features: [
      '具有更深上下文的高级AI聊天',
      '无限对话历史记录',
      '增强的虚拟形象表现力',
      '优先邮件支持',
      '优先体验新功能',
    ],
    ctaText: '升级高级版',
    isFeatured: true,
  },
  {
    icon: Zap, 
    tierName: '企业版',
    price: '定制',
    priceDescription: '适用于企业和定制需求',
    features: [
      '所有高级版功能',
      '自定义虚拟形象创建与品牌化',
      'API访问与集成',
      '专属支持与服务等级协议(SLA)',
      '批量折扣',
    ],
    ctaText: '联系销售',
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
          选择适合您需求的方案，释放 空灵回响 的全部潜力。免费开始或升级以获得高级功能和支持。
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
