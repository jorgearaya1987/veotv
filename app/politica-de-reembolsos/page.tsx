import { InfoPage } from "@/components/InfoPage";

export default function RefundPage() {
  return (
    <InfoPage
      title="Política de reembolsos"
      intro="Condiciones aplicables para solicitudes de devolución o revisión de pagos."
      sections={[
        {
          title: "Plan demo",
          body: "El plan demo permite revisar el funcionamiento antes de contratar un plan pagado, sujeto a disponibilidad y validación comercial.",
        },
        {
          title: "Planes activados",
          body: "Una vez activado un plan pagado, las solicitudes de reembolso se revisan caso a caso, considerando tiempo de uso, evidencia técnica y condiciones del servicio contratado.",
        },
        {
          title: "Problemas técnicos",
          body: "Si existe una incidencia técnica, se priorizará soporte, reinstalación, guía de configuración o extensión compensatoria cuando corresponda.",
        },
        {
          title: "Cómo solicitar revisión",
          body: "Toda solicitud debe realizarse por WhatsApp indicando nombre, plan contratado, fecha de pago y descripción del problema.",
        },
      ]}
    />
  );
}
