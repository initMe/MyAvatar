
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 md:px-10 border-t border-border/20 bg-background/50">
      <div className="container mx-auto text-center text-muted-foreground text-sm">
        <p>&copy; {currentYear} Ethereal Echo. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-accent transition-colors">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
