interface DiagramSectionProps {
  src: string;
  alt: string;
  bg?: string;
}

export default function DiagramSection({
  src,
  alt,
  bg = "bg-brand-tint",
}: DiagramSectionProps) {
  return (
    <section className={`${bg} py-16 sm:py-20`}>
      <div className="mx-auto max-w-[1397px] px-6 sm:px-10 lg:px-[70px]">
        <img
          src={src}
          alt={alt}
          className="w-full rounded-xl object-contain"
        />
      </div>
    </section>
  );
}
