import { getWhatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_16px_36px_rgba(37,211,102,.35)] transition hover:-translate-y-1 hover:brightness-110"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
