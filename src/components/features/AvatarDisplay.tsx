
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
          alt="语灵数字伙伴"
          layout="fill"
          objectFit="cover"
          data-ai-hint="amiable elderly person portrait"
          className="rounded-lg"
        />
      </div>
      <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-3 text-glow-primary">
        遇见语灵，您的数字伙伴
      </h2>
      <p className="text-muted-foreground mb-2 max-w-md">
        体验未来式陪伴。与语灵——您的AI驱动的伙伴——进行有意义的对话，获得情感支持，随时随地享受温馨畅谈。
      </p>
      <p className="font-orbitron text-accent text-lg text-glow-accent mb-6">
        声音有灵，你心有感。
      </p>
      <div className="space-y-4">
        <Button 
          size="lg" 
          className="font-orbitron bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-primary"
          onClick={onStartConversation}
          aria-label="与您的语灵开始对话"
        >
          开始互动
        </Button>
        <Button variant="outline" size="lg" className="font-orbitron border-accent text-accent hover:bg-accent/10 hover:text-accent neon-glow-accent" disabled>
          <UploadCloud className="mr-2 h-5 w-5" />
          上传您的照片 (即将推出)
        </Button>
      </div>
    </div>
  );
}

