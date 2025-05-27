
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PricingCardProps {
  tierName: string;
  price: string;
  priceDescription: string;
  features: string[];
  ctaText: string;
  icon: LucideIcon;
  isFeatured?: boolean;
}

export function PricingCard({ tierName, price, priceDescription, features, ctaText, icon: Icon, isFeatured }: PricingCardProps) {
  return (
    <Card className={`glassmorphism rounded-xl flex flex-col h-full ${isFeatured ? 'border-primary shadow-primary/30' : 'border-accent/30'}`}>
      <CardHeader className="items-center text-center pb-4">
        <div className={`p-3 bg-opacity-20 rounded-full mb-4 inline-block ${isFeatured ? 'bg-primary/20 neon-glow-primary' : 'bg-accent/20 neon-glow-accent'}`}>
          <Icon className={`h-10 w-10 ${isFeatured ? 'text-primary' : 'text-accent'}`} />
        </div>
        <CardTitle className={`font-orbitron text-2xl ${isFeatured ? 'text-glow-primary' : 'text-glow-accent'}`}>{tierName}</CardTitle>
        <CardDescription className="text-muted-foreground pt-1">{priceDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow text-center">
        <p className="font-orbitron text-4xl font-bold mb-6">{price}</p>
        <ul className="space-y-3 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-foreground/90">
              <CheckCircle className={`h-5 w-5 mr-2 ${isFeatured ? 'text-primary' : 'text-accent'}`} />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button size="lg" className={`w-full font-orbitron ${isFeatured ? 'bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-primary' : 'bg-accent hover:bg-accent/90 text-accent-foreground neon-glow-accent'}`}>
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
}
