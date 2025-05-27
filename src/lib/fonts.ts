
import { Orbitron, Nunito } from 'next/font/google';

export const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700'],
});

export const nunito = Nunito({
  subsets: ['latin', 'latin-ext', 'vietnamese'], // Added subsets for better character support
  variable: '--font-nunito',
  weight: ['400', '500', '700', '800'], // Added more weights
});
