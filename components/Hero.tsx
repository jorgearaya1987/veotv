import { MessageCircle, MonitorPlay, Smartphone, Tv } from "lucide-react";
import { getWhatsappUrl } from "@/lib/contact";
import { Logo } from "./Logo";

const benefits = [
  { icon: Tv, title: "+2.500", label: "CANALES" },
  { icon: MonitorPlay, title: "+8.000", label: "PELÍCULAS" },
  { icon: Smartphone, title: "HASTA", label: "4 DISPOSITIVOS" },
];

const posterCards = [
  { label: "ACCIÓN", position: "0% 0%" },
  { label: "FANTASÍA", position: "50% 0%" },
  { label: "CIENCIA FICCIÓN", position: "100% 0%" },
  { label: "CRIMEN", position: "0% 50%" },
  { label: "SUSPENSO", position: "50% 50%" },
  { label: "AVENTURA", position: "100% 50%" },
  { label: "MÚSICA", position: "0% 100%" },
  { label: "DRAMA", position: "50% 100%" },
  { label: "MISTERIO", position: "100% 100%" },
];

function PosterWall({ side }: { side: "left" | "right" }) {
  const cards = side === "left" ? posterCards : [...posterCards].reverse();

  return (
    <div
      aria-hidden="true"
      className={`screen-grid pointer-events-none absolute top-20 hidden w-[33rem] grid-cols-3 gap-3 opacity-85 lg:grid xl:w-[37rem] ${
        side === "left" ? "-left-28" : "-right-28"
      }`}
      style={{
        transform: side === "left" ? "rotateY(20deg) rotateZ(-6deg)" : "rotateY(-20deg) rotateZ(6deg)",
        transformOrigin: side === "left" ? "left center" : "right center",
      }}
    >
      {cards.map((card, index) => {
        const column = index % 3;
        const row = Math.floor(index / 3);
        const nearCenter = side === "left" ? column === 2 : column === 0;
        const opacity = nearCenter ? 0.5 : 0.82 - column * 0.04;

        return (
          <div
            key={`${side}-${card.label}`}
            className="hero-poster-card aspect-[3/4] rounded-md bg-cover"
            style={{
              backgroundImage: "url('/poster-grid.png')",
              backgroundPosition: card.position,
              backgroundSize: "300% 300%",
              opacity,
              transform: `translateY(${row * 3 + column * 12}px) scale(${nearCenter ? 0.9 : 1})`,
            }}
          >
            <span className="absolute left-2.5 top-2.5 z-10 rounded-full border border-white/15 bg-black/45 px-2 py-1 text-[0.52rem] font-black tracking-[0.16em] text-white/70 backdrop-blur-md">
              {card.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="hero-vignette relative isolate min-h-[610px] overflow-hidden px-5 py-8 sm:px-8 lg:min-h-[640px]">
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent" />
      <PosterWall side="left" />
      <PosterWall side="right" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <Logo compact />

        <div className="mt-8 sm:mt-9">
          <p className="text-2xl font-light tracking-[0.16em] text-white sm:text-4xl">LA MEJOR</p>
          <h1 className="mt-2 text-5xl font-black leading-none text-ember-500 drop-shadow-[0_0_32px_rgba(255,104,31,0.42)] sm:text-7xl lg:text-8xl">
            TELEVISIÓN
          </h1>
          <p className="mt-3 text-2xl font-light tracking-[0.16em] text-white sm:text-4xl">SIN LÍMITES</p>
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
          <MessageCircle className="h-7 w-7 fill-white/10" />
        </a>
      </div>
    </section>
  );
}
