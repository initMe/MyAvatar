
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 md:px-10 border-t border-border/20 bg-background/50">
      <div className="container mx-auto text-center text-muted-foreground text-sm">
        <p>&copy; {currentYear} 语灵. 版权所有.</p>
        <div className="mt-2 space-x-4">
          <Link href="#" className="hover:text-accent transition-colors">隐私政策</Link>
          <Link href="/#contact-section" scroll={true} className="hover:text-accent transition-colors">联系我们</Link>
        </div>
        <p className="mt-2">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            浙ICP备19014304号-1
          </a>
        </p>
      </div>
    </footer>
  );
}
