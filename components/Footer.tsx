import { getWhatsappUrl } from "@/lib/contact";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Planes", href: "/#planes" },
  { label: "¿Cómo funciona?", href: "/como-funciona" },
  { label: "Dispositivos", href: "/dispositivos" },
  { label: "Preguntas frecuentes", href: "/#preguntas" },
  { label: "Contacto", href: "/contacto" },
];

const legal = [
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Política de reembolsos", href: "/politica-de-reembolsos" },
];

export function Footer() {
  return (
    <footer id="contacto" className="bg-black px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 text-sm text-zinc-300">La mejor televisión, sin límites.</p>
          <div className="mt-5 flex gap-3">
            <a
              aria-label="WhatsApp"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-[#25d366] transition hover:bg-[#25d366] hover:text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-black">NAVEGACIÓN</h3>
          <ul className="mt-5 space-y-2 text-sm text-zinc-300">
            {navigation.map((item) => (
              <li key={item.label}>
                <a className="transition hover:text-ember-500" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-black">LEGAL</h3>
          <ul className="mt-5 space-y-2 text-sm text-zinc-300">
            {legal.map((item) => (
              <li key={item.label}>
                <a className="transition hover:text-ember-500" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-black">CONTACTO</h3>
          <p className="mt-5 text-sm text-zinc-300">¿Tienes dudas?</p>
          <p className="mt-1 text-sm text-zinc-300">Escríbenos por WhatsApp</p>
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ember-500 px-5 py-3 text-sm font-black text-white shadow-glow transition hover:bg-ember-400"
          >
            Contáctanos ahora
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-zinc-400">
        2026 Veo TV. Todos los derechos reservados.
      </div>
    </footer>
  );
}
