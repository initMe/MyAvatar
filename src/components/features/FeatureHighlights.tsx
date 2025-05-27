
import { FeatureCard } from './FeatureCard';
import { Heart, MessageSquareText, Bot } from 'lucide-react'; // Using Bot instead of MessagesSquare for "Engaging Conversation"

const features = [
  {
    icon: Heart,
    title: 'Companionship',
    description: 'Always there for you, offering a friendly presence and a listening ear whenever you need it.',
  },
  {
    icon: MessageSquareText, // Replaced Smile with MessageSquareText as Smile is not in lucide-react.
    title: 'Emotional Support',
    description: 'Experience empathetic interactions designed to understand and respond to your emotional state.',
  },
  {
    icon: Bot,
    title: 'Engaging Conversation',
    description: 'Dive into meaningful discussions, explore new ideas, or just enjoy some lighthearted chat.',
  },
];

export function FeatureHighlights() {
  return (
    <section className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
          Why Ethereal Echo?
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          Discover a new form of digital interaction designed for connection, understanding, and a touch of futuristic charm.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
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
