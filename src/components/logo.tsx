import Image from "next/image";
import Link from "next/link";

export function Logo({ lang }: { lang: any }) {
  return (
    <Link href={`/${lang}`} className="flex items-center space-x-2">
      <Image
        src="/assets/images/logo-reviv.png"
        alt="logo reviv indonesia"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-10 sm:h-12"
      />
    </Link>
  );
}
