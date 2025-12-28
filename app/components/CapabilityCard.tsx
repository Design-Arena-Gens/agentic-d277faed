const bulletItems = [
  {
    title: 'Direct rendering',
    status: 'Not supported',
    detail:
      'I am a text-based system without access to a render engine, so I cannot export MP4 files or stream live footage.'
  },
  {
    title: 'Duration guidance',
    status: 'Unlimited',
    detail:
      'I can plan and structure content for videos of any length—from 15-second reels to multi-hour educational series.'
  },
  {
    title: 'Workflow automation',
    status: 'Available',
    detail:
      'I can generate scripts, AI prompts, batch shot lists, and integrations that hand off to third-party render tools.'
  }
];

export default function CapabilityCard() {
  return (
    <section className="grid gap-6 rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur">
      <div>
        <h2 className="text-2xl font-semibold text-white">Video duration I can help with</h2>
        <p className="mt-3 text-slate-300">
          There is no hard cap on the duration I can support. I focus on pre-production and automation steps that scale
          with your project size, then guide you toward render services that output the final footage.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {bulletItems.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-lg backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.status}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
