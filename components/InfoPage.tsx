import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";

type Section = {
  title: string;
  body: string;
};

type InfoPageProps = {
  title: string;
  intro: string;
  sections: Section[];
};

export function InfoPage({ title, intro, sections }: InfoPageProps) {
  return (
    <main className="min-h-screen bg-ink-900 text-white">
      <section className="hero-vignette px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <a href="/" className="inline-flex">
            <Logo />
          </a>
          <div className="mt-12">
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              {title.includes(" ") ? (
                <>
                  {title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-ember-500">{title.split(" ").slice(-1).join(" ")}</span>
                </>
              ) : (
                title
              )}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">{intro}</p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-5 py-12 text-zinc-950 sm:px-8">
        <div className="mx-auto grid max-w-4xl gap-5">
          {sections.map((section) => (
            <article key={section.title} className="rounded-lg bg-white p-6 shadow-card">
              <h2 className="text-xl font-black">{section.title}</h2>
              <p className="mt-3 leading-7 text-zinc-700">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
