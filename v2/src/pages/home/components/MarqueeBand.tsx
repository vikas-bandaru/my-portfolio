const words = [
  "Observe",
  "Translate",
  "Connect",
  "Question",
  "Imagine",
  "Experiment",
  "Build",
  "Share",
];

export default function MarqueeBand() {
  const sequence = [...words, ...words];

  return (
    <div className="w-full bg-primary-500 py-4 overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-8 px-4">
        {sequence.map((word, index) => (
          <div key={`${word}-${index}`} className="flex items-center gap-8">
            <span className="font-heading text-lg md:text-xl font-semibold text-background-50 whitespace-nowrap">
              {word}
            </span>
            <i className="ri-asterisk text-background-50/60 text-base" aria-hidden="true"></i>
          </div>
        ))}
      </div>
    </div>
  );
}