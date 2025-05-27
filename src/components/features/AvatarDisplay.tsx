
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { UploadCloud } from 'lucide-react';

interface AvatarDisplayProps {
  onStartConversation?: () => void;
}

export function AvatarDisplay({ onStartConversation }: AvatarDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 h-full text-center">
      <div className="relative w-64 h-96 md:w-80 md:h-[480px] mb-8 rounded-lg overflow-hidden neon-glow-accent avatar-breathing">
        <Image
          src="https://placehold.co/400x600.png"
          alt="Digital Avatar"
          layout="fill"
          objectFit="cover"
          data-ai-hint="digital avatar"
          className="rounded-lg"
        />
      </div>
      <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-3 text-glow-primary">
        Meet Your Ethereal Echo
      </h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        I&apos;m here to listen, chat, and offer a moment of connection in your digital world.
      </p>
      <div className="space-y-4">
        <Button 
          size="lg" 
          className="font-orbitron bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-primary"
          onClick={onStartConversation}
          aria-label="Start a conversation with your Ethereal Echo"
        >
          Start Conversation
        </Button>
        <Button variant="outline" size="lg" className="font-orbitron border-accent text-accent hover:bg-accent/10 hover:text-accent neon-glow-accent" disabled>
          <UploadCloud className="mr-2 h-5 w-5" />
          Upload Your Photo (Coming Soon)
        </Button>
      </div>
    </div>
  );
}
