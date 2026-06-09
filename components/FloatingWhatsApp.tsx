import { getWhatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full transition hover:-translate-y-1"
    >
      <WhatsAppIcon className="h-14 w-14" />
    </a>
  );
}
