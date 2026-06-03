import { InfoPage } from "@/components/InfoPage";

export default function HowItWorksPage() {
  return (
    <InfoPage
      title="Cómo funciona"
      intro="Contrata, activa y disfruta Veo TV desde dispositivos compatibles."
      sections={[
        {
          title: "Elige tu plan",
          body: "Selecciona el plan según la duración y cantidad de dispositivos simultáneos que necesitas.",
        },
        {
          title: "Contáctanos por WhatsApp",
          body: "Presiona cualquier botón de contratación para hablar con soporte y recibir instrucciones de pago y activación.",
        },
        {
          title: "Activación de cuenta",
          body: "Una vez confirmado el pago, activamos tu cuenta y te enviamos las instrucciones de instalación o acceso.",
        },
        {
          title: "Soporte",
          body: "Si necesitas ayuda con configuración o compatibilidad, puedes escribirnos por WhatsApp para recibir asistencia.",
        },
      ]}
    />
  );
}
