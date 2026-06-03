import { InfoPage } from "@/components/InfoPage";

export default function DevicesPage() {
  return (
    <InfoPage
      title="Dispositivos compatibles"
      intro="Veo TV funciona en equipos compatibles con aplicaciones de televisión por internet."
      sections={[
        {
          title: "Smart TV",
          body: "Compatible con Smart TV que permitan instalar aplicaciones o reproductores compatibles con el servicio.",
        },
        {
          title: "TV Box y Android TV",
          body: "Funciona en dispositivos Android TV, TV Box y equipos similares con conexión estable a internet.",
        },
        {
          title: "Celulares y tablets",
          body: "Puede usarse en Android, iOS y tablets compatibles según la aplicación recomendada durante la activación.",
        },
        {
          title: "Requisitos de conexión",
          body: "Se recomienda internet estable y velocidad suficiente para reproducción fluida, especialmente en contenido HD o múltiples dispositivos.",
        },
      ]}
    />
  );
}
