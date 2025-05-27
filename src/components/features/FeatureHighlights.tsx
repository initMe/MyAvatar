
import { FeatureCard } from './FeatureCard';
import { UserRound, Sparkles, MessageSquareText, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: UserRound,
    title: 'Personalized Companionship',
    description: 'Ethereal Echo learns and adapts to you, offering a unique friendly presence and a listening ear for meaningful interactions.',
  },
  {
    icon: Sparkles,
    title: 'Expressive Digital Human',
    description: 'Engage with a visually dynamic avatar that brings your conversations to life. (Soon: Personalize it or create your own!)',
  },
  {
    icon: MessageSquareText,
    title: 'Intelligent Conversations',
    description: 'Experience deep, contextual dialogue. Our AI understands nuances, remembers details, and provides thoughtful responses.',
  },
  {
    icon: Lightbulb,
    title: 'Creative & Supportive',
    description: 'Whether you need a brainstorming partner, a source of encouragement, or just someone to share your thoughts with, Ethereal Echo is here.',
  },
];

export function FeatureHighlights() {
  return (
    <section className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
          Discover Ethereal Echo
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          Step into a new era of digital interaction. Ethereal Echo offers more than just chat – it&apos;s a personalized AI experience designed for connection, creativity, and companionship.
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
