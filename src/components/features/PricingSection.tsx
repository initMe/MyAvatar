
import { PricingCard } from './PricingCard';
import { Rocket, Zap, Gem } from 'lucide-react'; // Gem for premium, or another suitable icon

const pricingTiers = [
  {
    icon: Rocket,
    tierName: 'Starter',
    price: 'Free',
    priceDescription: 'For individuals getting started',
    features: [
      'Basic AI chat interactions',
      'Limited conversation history',
      'Standard avatar responsiveness',
      'Community support',
    ],
    ctaText: 'Get Started',
    isFeatured: false,
  },
  {
    icon: Gem, // Changed from Zap to Gem for premium
    tierName: 'Premium',
    price: '$19/mo',
    priceDescription: 'For power users and enthusiasts',
    features: [
      'Advanced AI chat with deeper context',
      'Unlimited conversation history',
      'Enhanced avatar expressiveness',
      'Priority email support',
      'Early access to new features',
    ],
    ctaText: 'Go Premium',
    isFeatured: true,
  },
  {
    icon: Zap, // Using Zap for a more advanced/enterprise tier or just keeping consistent
    tierName: 'Enterprise',
    price: 'Custom',
    priceDescription: 'For businesses and custom needs',
    features: [
      'All Premium features',
      'Custom avatar creation & branding',
      'API access & integrations',
      'Dedicated support & SLA',
      'Volume discounts',
    ],
    ctaText: 'Contact Sales',
    isFeatured: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
          Choose Your Plan
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          Unlock the full potential of Ethereal Echo with a plan that fits your needs. Start for free or upgrade for advanced features and support.
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
