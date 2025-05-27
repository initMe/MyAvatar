
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="py-4 px-6 md:px-10 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav>
          <Button variant="link" asChild>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors font-orbitron">
              关于语灵
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

