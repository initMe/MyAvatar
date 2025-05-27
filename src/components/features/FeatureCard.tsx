
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="glassmorphism rounded-lg hover:shadow-accent/30 transition-shadow duration-300 h-full">
      <CardHeader className="items-center text-center">
        <div className="p-3 bg-accent/20 rounded-full mb-3 inline-block neon-glow-accent">
          <Icon className="h-8 w-8 text-accent" />
        </div>
        <CardTitle className="font-orbitron text-xl text-glow-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
