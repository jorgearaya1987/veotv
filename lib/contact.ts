export const WHATSAPP_NUMBER = "56900000000";
export const WHATSAPP_MESSAGE = "Hola, quiero contratar un plan de Veo TV";
export const WHATSAPP_TEXT = "Hola,%20quiero%20contratar%20un%20plan%20de%20Veo%20TV";

export function getWhatsappUrl(message = WHATSAPP_MESSAGE) {
  const text = message === WHATSAPP_MESSAGE ? WHATSAPP_TEXT : encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
