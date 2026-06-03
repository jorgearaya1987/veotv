import { CreditCard, HelpCircle, Power, Radio, Smartphone, XCircle } from "lucide-react";

const faqs = [
  {
    icon: Radio,
    question: "¿Qué es Veo TV?",
    answer:
      "Veo TV es un servicio de televisión por internet que permite acceder a contenido mediante conexión estable y dispositivos compatibles.",
  },
  {
    icon: Smartphone,
    question: "¿En cuántos dispositivos puedo usar mi cuenta?",
    answer: "Todos nuestros planes incluyen la cantidad de dispositivos simultáneos indicada en cada plan contratado.",
  },
  {
    icon: Power,
    question: "¿La activación es inmediata?",
    answer: "Sí, una vez confirmado el pago, tu cuenta será activada a la brevedad.",
  },
  {
    icon: CreditCard,
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos transferencias bancarias, tarjetas de crédito, débito y otros medios digitales.",
  },
  {
    icon: XCircle,
    question: "¿Puedo cancelar en cualquier momento?",
    answer: "Sí, puedes cancelar tu suscripción cuando desees, sin permanencia.",
  },
  {
    icon: HelpCircle,
    question: "¿Qué necesito para usar Veo TV?",
    answer:
      "Solo necesitas una conexión a internet estable y un dispositivo compatible como Smart TV, TV Box, Android, iOS o similar.",
  },
];

export function FAQSection() {
  return (
    <section id="preguntas" className="bg-ink-900 px-5 py-8 sm:px-8 lg:py-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-black tracking-wide sm:text-4xl">
          PREGUNTAS <span className="text-ember-500">FRECUENTES</span>
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-14 bg-ember-500" />

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-white/5 bg-ink-700/80 shadow-[0_16px_35px_rgba(0,0,0,.25)] transition duration-300 open:border-ember-500/40"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-4 py-4 sm:px-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-ember-500/40 bg-ember-500/15 text-ember-500">
                  <faq.icon className="h-5 w-5" />
                </span>
                <span className="flex-1 text-left text-base font-black sm:text-lg">{faq.question}</span>
                <span className="faq-plus text-3xl font-light leading-none text-white transition duration-300">+</span>
              </summary>
              <div className="faq-panel grid">
                <div className="overflow-hidden">
                  <p className="px-4 pb-5 pl-[4.75rem] text-sm leading-6 text-zinc-300 sm:px-5 sm:pl-20 sm:text-base">{faq.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
