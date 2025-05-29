
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
      <Image
        src="/images/logo.png" // 您需要将此替换为您的Logo图片路径
        alt="语灵 Logo"
        width={120} // 根据您的Logo调整宽度
        height={30} // 根据您的Logo调整高度
        priority // 如果Logo在首屏，建议添加
        data-ai-hint="company logo simple"
      />
    </Link>
  );
}
