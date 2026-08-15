interface NarrativeSectionProps {
  heading: string;
  paragraphs: string[];
  bg?: string;
}

export default function NarrativeSection({
  heading,
  paragraphs,
  bg = "bg-brand-tint2",
}: NarrativeSectionProps) {
  return (
    <section className={`${bg} py-20 sm:py-24`}>
      <div className="mx-auto max-w-[1160px] px-6 sm:px-10 lg:px-[171px]">
        <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
          {heading}
        </h2>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-black sm:text-lg lg:text-xl lg:leading-[1.5]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
