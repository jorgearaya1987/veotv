export const WHATSAPP_NUMBER = "56940995447";
export const WHATSAPP_DISPLAY = "+56 9 4099 5447";
export const WHATSAPP_MESSAGE = "Hola, quiero contratar un plan de Veo TV";

export function getWhatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
