const IMAGES = [
  "https://api.builder.io/api/v1/image/assets/TEMP/42cd147f8cfd8b5f747aea66277cd3e570fa51cf?width=322",
  "https://api.builder.io/api/v1/image/assets/TEMP/67184743fcaf50aede091813cdd47095b7f4f36c?width=342",
  "https://api.builder.io/api/v1/image/assets/TEMP/6395b0fb38bc876e4bc6e96e80bcc74e7d5d0c91?width=354",
];

export default function BlueShowcase() {
  return (
    <section className="bg-brand-blue py-20 sm:py-24">
      <div className="mx-auto max-w-[1092px] px-6 sm:px-10">
        <div
          className="flex items-end justify-center gap-4 rounded-[80px] p-8 backdrop-blur-md sm:gap-8 sm:p-12 lg:rounded-[277.5px] lg:p-16"
          style={{
            background:
              "linear-gradient(92deg, rgba(217, 217, 217, 0.23) 1.2%, rgba(115, 115, 115, 0.02) 98.8%)",
          }}
        >
          {IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Hilton app screen highlight ${i + 1}`}
              className="w-1/3 max-w-[177px] rounded-2xl object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
