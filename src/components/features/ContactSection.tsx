
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-orbitron text-3xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-glow-primary">
          联系我们
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          有任何问题或想进一步了解我们的服务吗？请通过以下方式与我们联系，或扫描二维码添加好友/关注我们。
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="glassmorphism rounded-xl">
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
                扫描上方二维码添加微信好友或关注我们的公众号。
              </p>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="glassmorphism rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center font-orbitron text-xl text-glow-accent">
                  <Mail className="mr-3 h-6 w-6 text-accent" />
                  邮件联系
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90">
                  对于商务合作或详细咨询，请发送邮件至：
                </p>
                <a href="mailto:contact@etherealecho.app" className="text-accent hover:underline font-semibold">
                  contact@etherealecho.app
                </a>
              </CardContent>
            </Card>
            <Card className="glassmorphism rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center font-orbitron text-xl text-glow-accent">
                  <MessageSquare className="mr-3 h-6 w-6 text-accent" />
                  在线留言
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90">
                  您也可以通过我们的 <Link href="/contact-form" className="text-accent hover:underline font-semibold" passHref>在线表单</Link> 给我们留言 (即将推出)。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
