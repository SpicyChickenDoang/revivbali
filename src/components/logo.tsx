import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/assets/images/logo-reviv.png"
        alt="logo reviv indonesia"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-14"
      />
    </div>
  );
}
