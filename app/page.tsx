import CapabilityCard from './components/CapabilityCard';
import FAQ from './components/FAQ';

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-sunrise/20 blur-3xl" aria-hidden />

      <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-20">
        <header className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AI Video Assistant</p>
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
            Understanding my current video generation limits
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            I can script, storyboard, or automate tooling for videos, but I cannot directly render or stream raw
            footage. Instead, I help you plan production workflows and leverage third-party services that render the
            final video output.
          </p>
        </header>

        <CapabilityCard />

        <FAQ />

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold">Need help producing longer videos?</h2>
          <p className="mt-3 text-slate-300">
            I can assemble scripts, shot lists, motion graphics prompts, and automated editing workflows for videos of
            any length. If you share your target duration and distribution platform, I will tailor a production plan
            and suggest the right rendering tools (Runway, Pika, Stable Video, Descript, etc.) to bring it to life.
          </p>
          <ul className="mt-6 grid gap-4 text-left text-slate-200 sm:grid-cols-2">
            <li className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <h3 className="text-lg font-medium text-white">Storyboard + Script Support</h3>
              <p className="mt-2 text-sm text-slate-400">
                Provide the narrative beats, pacing, and dialogue you need for projects from shorts to feature-length.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <h3 className="text-lg font-medium text-white">Automation & Tooling</h3>
              <p className="mt-2 text-sm text-slate-400">
                Generate prompt batches, shot templates, or edit scripts compatible with your favorite render platform.
              </p>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
