
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-glow-primary">
          About Digital Humans
        </h1>
        <div className="max-w-2xl mx-auto space-y-6 text-lg text-foreground/90">
          <p>
            Ethereal Echo represents a new frontier in human-computer interaction, blending artistry with artificial intelligence to create digital companions.
          </p>
          <p>
            Our vision is to craft digital beings that not only understand and respond but also offer genuine companionship and emotional support. They are designed to learn, adapt, and grow with you, providing a unique and personal experience.
          </p>
          <p>
            This project explores the potential of AI to foster connection, alleviate loneliness, and provide a comforting presence in an increasingly digital world. We believe in the power of technology to enhance human experience, and Ethereal Echo is a step towards that future.
          </p>
          <p className="font-orbitron text-accent text-glow-accent">
            Stay tuned as we continue to evolve and enhance your digital companion.
          </p>
        </div>
        <Button asChild size="lg" className="mt-12 font-orbitron bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-primary">
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
}
