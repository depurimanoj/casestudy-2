export default function FeatureShowcase() {
  return (
    <section className="bg-brand-tint py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1512px] grid-cols-1 gap-8 px-6 sm:px-10 lg:grid-cols-[1fr_1fr_1fr] lg:px-[116px]">
        <div className="flex flex-col overflow-hidden rounded-[27px] bg-brand-blue p-8">
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Search &amp; Discover
          </h3>
          <p className="mt-3 font-display text-sm font-medium text-white">
            Search &amp; Discover your Dream Vacation
          </p>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bfad439626837651a1dd376f7c6da0b5c9c66add?width=716"
            alt="Search and discover screen"
            className="mx-auto mt-6 w-full max-w-[358px] flex-1 rounded-2xl object-contain"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-brand-blue p-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/7a8cf6ea4921e4a6327d312f197150424b6f2c06?width=388"
              alt="Hotel comparison screen"
              className="h-full max-h-[292px] w-auto rounded-xl object-contain"
            />
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-brand-blue p-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/aeef16a84fa5d46e5cff5062a7ae119aea06c981?width=362"
              alt="Room selection screen"
              className="h-full max-h-[293px] w-auto rounded-xl object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-[27px] bg-brand-blue p-8">
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Finalize
          </h3>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e5a43ad1148af7c69907cbdb546269358313bf4e?width=620"
            alt="Booking confirmation screen"
            className="mx-auto mt-6 w-full max-w-[310px] flex-1 rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
