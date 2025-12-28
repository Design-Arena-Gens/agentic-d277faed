const faqs = [
  {
    question: 'Can you export a video file for me?',
    answer:
      'No. I cannot render a video file directly. I provide scripts, storyboard prompts, motion cues, and automation logic that you can run in video tools such as Runway, Pika, Stable Video, or Adobe apps.'
  },
  {
    question: 'Is there a maximum duration you support?',
    answer:
      'There is no maximum duration. I can help outline a structure, pacing, and asset plan for any length, including multi-hour productions.'
  },
  {
    question: 'How do I turn your output into an actual video?',
    answer:
      'I recommend feeding the generated scripts and prompts into your preferred render platform or editing suite. I can also draft API workflows or CLI scripts that call external services to automate rendering.'
  }
];

export default function FAQ() {
  return (
    <section className="rounded-3xl border border-white/10 bg-black/30 p-8 text-left backdrop-blur">
      <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
      <dl className="mt-6 space-y-6">
        {faqs.map((item) => (
          <div key={item.question}>
            <dt className="text-lg font-medium text-white">{item.question}</dt>
            <dd className="mt-2 text-sm text-slate-300">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
