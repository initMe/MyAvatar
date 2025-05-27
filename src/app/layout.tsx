
import type { Metadata } from 'next';
import { orbitron, roboto } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Providers } from './providers'; // QueryClientProvider for Genkit

export const metadata: Metadata = {
  title: 'Ethereal Echo',
  description: 'Your AI Digital Companion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${roboto.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
