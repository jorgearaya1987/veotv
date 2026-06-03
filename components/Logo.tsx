import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <div className="inline-flex items-center">
      <Image
        src="/logo.png"
        alt="Veo TV"
        width={120}
        height={167}
        priority={compact}
        className={`${compact ? "h-16 w-auto sm:h-20" : "h-20 w-auto"} drop-shadow-[0_0_26px_rgba(255,104,31,0.4)]`}
      />
    </div>
  );
}
