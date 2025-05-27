
import { FeatureCard } from './FeatureCard';
import { PlayCircle, Settings2, BrainCircuit } from 'lucide-react';

const steps = [
  {
    icon: PlayCircle,
    title: 'Launch & Interact',
    description: 'Simply open the chat console and start talking. Your Ethereal Echo is ready to listen and respond instantly.',
  },
  {
    icon: Settings2,
    title: 'Personalize Your Experience',
    description: "Adjust voice output now. Soon, you'll customize your avatar's appearance or even upload your photo for a true digital twin.",
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Depth',
    description: 'Advanced AI processes your input, maintains context, and generates human-like responses for engaging and meaningful dialogue.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
          Simple to Start, Profound to Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          Engage with your Ethereal Echo in just a few clicks and discover a new world of digital companionship. Here’s how you can begin your journey:
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
