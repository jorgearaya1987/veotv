import { InfoPage } from "@/components/InfoPage";

export default function TermsPage() {
  return (
    <InfoPage
      title="Términos y condiciones"
      intro="Condiciones generales para contratar y utilizar Veo TV."
      sections={[
        {
          title: "Uso del servicio",
          body: "Veo TV entrega acceso a planes de televisión por internet para dispositivos compatibles. El cliente debe contar con una conexión estable y usar el servicio de acuerdo con el plan contratado.",
        },
        {
          title: "Activación",
          body: "La activación se realiza una vez confirmado el pago y recibidos los datos necesarios para crear o habilitar la cuenta.",
        },
        {
          title: "Responsabilidad del usuario",
          body: "El usuario es responsable de mantener sus accesos de forma privada y de no compartirlos fuera de los dispositivos simultáneos permitidos por su plan.",
        },
        {
          title: "Cambios del servicio",
          body: "Los canales, contenidos, compatibilidad y características pueden variar por actualizaciones técnicas, disponibilidad de proveedores o mejoras del servicio.",
        },
      ]}
    />
  );
}
