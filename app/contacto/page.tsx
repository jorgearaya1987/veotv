import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, getWhatsappUrl } from "@/lib/contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ink-900 text-white">
      <section className="hero-vignette px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <a href="/" className="inline-flex">
            <Logo />
          </a>
          <div className="mt-12">
            <h1 className="text-4xl font-black sm:text-5xl">
              CONTACTO <span className="text-ember-500">VEO TV</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              ¿Tienes dudas o quieres contratar? Escríbenos directamente por WhatsApp.
            </p>
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-ember-500 px-7 py-4 text-base font-black text-white shadow-glow transition hover:bg-ember-400"
            >
              <WhatsAppIcon className="h-6 w-6 text-[#25d366] drop-shadow-[0_0_6px_rgba(37,211,102,.4)]" />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
