
import type { Metadata } from 'next';
import { orbitron, roboto } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Providers } from './providers'; // QueryClientProvider for Genkit

export const metadata: Metadata = {
  title: '语灵 - 声音有灵，你心有感',
  description: '语灵是您的AI数字伙伴，专注于亲情、陪伴与智能，带来温暖的互动体验。',
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

