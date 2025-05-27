
import type { Metadata } from 'next';
import { orbitron, roboto } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Providers } from './providers'; // QueryClientProvider for Genkit

export const metadata: Metadata = {
  title: '空灵回响 - 您的AI数字伴侣',
  description: '您的AI数字伴侣，提供个性化交互和情感支持。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${orbitron.variable} ${roboto.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
