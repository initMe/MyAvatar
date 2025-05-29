
import type { Metadata } from 'next';
import { orbitron, nunito } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Providers } from './providers'; // QueryClientProvider for Genkit

export const metadata: Metadata = {
  title: '语灵 - 实时交互AI数字人|语有灵犀，智能陪伴',
  description: '语灵是一款基于AI语音与实时渲染技术的数字人解决方案，具备自然语音交互、一比一复刻形象、情感识别等能力，广泛适用于客服、陪伴、教育等多场景，让每一次对话更真实、更有温度。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${orbitron.variable} ${nunito.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
