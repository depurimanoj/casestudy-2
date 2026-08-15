interface ScreensGalleryProps {
  images: string[];
  bg?: string;
}

export default function ScreensGallery({
  images,
  bg = "bg-brand-tint",
}: ScreensGalleryProps) {
  return (
    <section className={`${bg} py-16 sm:py-20`}>
      <div className="mx-auto grid max-w-[1512px] grid-cols-2 gap-6 px-6 sm:grid-cols-3 sm:px-10 md:grid-cols-5 lg:px-[130px]">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Hilton app screen ${i + 1}`}
            className="aspect-[185/400] w-full rounded-xl object-cover shadow-sm"
          />
        ))}
      </div>
    </section>
  );
}
