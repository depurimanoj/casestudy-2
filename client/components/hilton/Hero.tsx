export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32">
      <div className="mx-auto grid max-w-[1512px] grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:px-[130px]">
        <div>
          <h1 className="font-display text-6xl font-bold text-white sm:text-7xl lg:text-[60px]">
            Hilton
          </h1>
          <p className="mt-6 max-w-md font-display text-2xl font-bold text-white sm:text-3xl lg:text-[30px]">
            UI/UX Interaction Designer
          </p>
        </div>
        <div className="relative mx-auto flex h-[340px] w-full max-w-[338px] items-center justify-center lg:mx-0 lg:ml-auto">
          <svg
            viewBox="0 0 338 425"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-full w-full fill-brand-purple"
          >
            <path d="M338 241.374C338 342.788 262.336 425 169 425C75.6639 425 0 342.788 0 241.374C0 139.96 130.914 0 224.25 0C317.586 0 338 139.96 338 241.374Z" />
          </svg>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7cb2363975f6797eaa9c6568ee143aca80df322f?width=380"
            alt="Hilton app screen"
            className="relative h-[81%] w-auto max-w-[56%] rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
