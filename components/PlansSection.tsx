import { Check, MessageCircle } from "lucide-react";
import { getWhatsappUrl } from "@/lib/contact";
import { plans } from "@/lib/plans";

const features = ["+2.500 canales", "+8.000 películas", "Activación inmediata"];

export function PlansSection() {
  return (
    <section id="planes" className="bg-zinc-100 px-5 py-6 text-zinc-950 sm:px-8 lg:py-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-wide sm:text-4xl">PLANES DISPONIBLES</h2>
          <p className="mt-3 text-base text-zinc-700">A continuación se muestran los planes disponibles para contratar.</p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="group relative flex min-h-[360px] flex-col rounded-lg border border-white/10 bg-ink-800 p-5 text-white shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ember-500 px-4 py-1 text-xs font-black">
                  POPULAR
                </span>
              )}
              <h3 className="text-center text-xl font-black">{plan.name}</h3>
              <p className="mt-3 text-center text-sm font-black text-ember-400">{plan.devices}</p>
              <p className="mt-7 text-center text-4xl font-black tracking-tight">{plan.price}</p>

              <div className="my-7 h-px bg-white/10" />

              <ul className="space-y-4 text-sm">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-ember-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-ember-500 px-4 py-3 text-center text-sm font-black text-white shadow-[0_12px_28px_rgba(255,104,31,.28)] transition duration-300 hover:bg-ember-400"
              >
                {plan.buttonLabel}
                {plan.name === "PLAN DEMO" && <MessageCircle className="h-5 w-5" />}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
