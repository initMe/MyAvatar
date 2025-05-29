
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
          联系我们
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          有任何问题或想进一步了解我们的服务吗？请扫描下方二维码添加企业微信与我们联系。
        </p>
        <div className="flex justify-center">
          <Card className="glassmorphism rounded-xl max-w-md w-full">
            <CardHeader className="items-center text-center">
              <div className="p-3 bg-accent/20 rounded-full mb-3 inline-block neon-glow-accent">
                <QrCode className="h-10 w-10 text-accent" />
              </div>
              <CardTitle className="font-orbitron text-2xl text-glow-accent">扫码联系</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-4 rounded-lg overflow-hidden border-2 border-accent/50">
                <Image
                  src="/images/qiyeweixin.png" 
                  alt="联系二维码"
                  layout="fill"
                  objectFit="contain"
                  data-ai-hint="QR code contact"
                  className="rounded-md"
                />
              </div>
              <p className="text-muted-foreground">
              对于商务合作或详细咨询，请您添加企业微信
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
