import { InfoPage } from "@/components/InfoPage";

export default function PrivacyPage() {
  return (
    <InfoPage
      title="Política de privacidad"
      intro="Información sobre el tratamiento de datos de contacto y contratación."
      sections={[
        {
          title: "Datos solicitados",
          body: "Podemos solicitar nombre, teléfono, comprobante de pago y datos técnicos básicos del dispositivo para activar y asistir el servicio.",
        },
        {
          title: "Uso de la información",
          body: "La información se usa únicamente para gestionar la contratación, soporte, renovaciones, comprobación de pagos y comunicaciones relacionadas con Veo TV.",
        },
        {
          title: "Protección de datos",
          body: "No vendemos ni publicamos datos personales. La información se mantiene con acceso limitado para operación y atención del servicio.",
        },
        {
          title: "Solicitud de eliminación",
          body: "El cliente puede solicitar la actualización o eliminación de sus datos de contacto escribiendo por los canales oficiales de atención.",
        },
      ]}
    />
  );
}
