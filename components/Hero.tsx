import Image from "next/image";
import { MonitorPlay, Smartphone, Tv } from "lucide-react";
import { getWhatsappUrl } from "@/lib/contact";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

const heroImage = "/futbol.png";

const benefits = [
  { icon: Tv, title: "+2.500", label: "CANALES" },
  { icon: MonitorPlay, title: "+8.000", label: "PELÍCULAS" },
  { icon: Smartphone, title: "HASTA", label: "4 DISPOSITIVOS" },
];

function HeroMainImage() {
  return (
    <div aria-hidden="true" className="hero-main-image">
      <Image src={heroImage} alt="" fill priority sizes="100vw" className="object-cover" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="hero-vignette relative isolate min-h-[720px] overflow-hidden px-5 py-7 sm:min-h-[720px] sm:px-8 lg:min-h-[680px]">
      <HeroMainImage />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,rgba(0,0,0,.08)_0%,rgba(0,0,0,.36)_42%,rgba(0,0,0,.82)_100%)]" />
      <div className="absolute inset-x-0 top-0 z-[2] h-36 bg-gradient-to-b from-black via-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-44 bg-gradient-to-t from-black via-black/72 to-transparent" />
      <div className="absolute left-1/2 top-56 z-[3] h-64 w-64 -translate-x-1/2 rounded-full bg-ember-500/22 blur-3xl sm:top-52 lg:top-48" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <Logo compact />

        <div className="mt-7 sm:mt-8">
          <p className="text-2xl font-light tracking-[0.16em] text-white sm:text-4xl">LA MEJOR</p>
          <h1 className="mt-2 text-5xl font-black leading-none text-ember-500 drop-shadow-[0_0_32px_rgba(255,104,31,0.42)] sm:text-7xl lg:text-8xl">
            TELEVISIÓN
          </h1>
          <p className="mt-3 text-xl font-light tracking-[0.18em] text-white sm:text-3xl lg:text-4xl">VIVE EL MUNDIAL</p>
          <p className="mt-2 text-2xl font-light tracking-[0.16em] text-white sm:text-4xl">SIN LÍMITES</p>
        </div>

        <div className="mt-10 grid w-full max-w-xl grid-cols-3 gap-3 sm:gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.label} className="flex flex-col items-center gap-3">
              <benefit.icon className="h-9 w-9 text-ember-500 sm:h-11 sm:w-11" strokeWidth={1.6} />
              <div className="text-xs font-bold leading-tight sm:text-base">
                <span className="block">{benefit.title}</span>
                <span className="block font-medium">{benefit.label}</span>
              </div>
            </div>
          ))}
        </div>

        <a
          href={getWhatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-ember-500 px-7 py-4 text-base font-black text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-ember-400 hover:shadow-[0_0_55px_rgba(255,104,31,.48)] sm:min-h-16 sm:px-12 sm:text-lg"
        >
          CONTÁCTANOS AHORA
          <WhatsAppIcon className="h-7 w-7 text-[#25d366] drop-shadow-[0_0_8px_rgba(37,211,102,.45)]" />
        </a>
      </div>
    </section>
  );
}
