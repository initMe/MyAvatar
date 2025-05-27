
import { FeatureCard } from './FeatureCard';
import { PlayCircle, Settings2, BrainCircuit } from 'lucide-react';

const steps = [
  {
    icon: PlayCircle,
    title: '启动与互动',
    description: '只需打开聊天控制台即可开始交谈。您的 空灵回响 已准备好即时倾听和回应。',
  },
  {
    icon: Settings2,
    title: '个性化您的体验',
    description: "现在可以调整语音输出。很快，您将能够自定义虚拟形象的外观，甚至上传您的照片以打造一个真正的数字孪生。",
  },
  {
    icon: BrainCircuit,
    title: 'AI驱动的深度交互',
    description: '先进的人工智能处理您的输入，维护上下文，并生成类似人类的回应，以实现引人入胜且有意义的对话。',
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
          轻松上手，体验非凡
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          只需几次点击即可与您的 空灵回响 互动，探索数字陪伴的新世界。以下是您开始旅程的方式：
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <FeatureCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
