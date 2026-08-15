export default function ExplorationSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1512px] px-6 sm:px-10 lg:px-[157px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[362px_1fr] lg:gap-12">
          <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
            Exploration, Ideation: 1A &amp; Wireframes
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-black sm:text-lg lg:text-xl lg:leading-[1.5]">
            <p>
              In the exploration and ideation phase for the Hilton hotel
              booking experience, I focused on the core functionalities that
              would address the main needs and pain points identified through
              user research-simplified hotel discovery, transparent pricing,
              easy room selection, and seamless reservation management.
            </p>
            <p>
              Recognizing the need for a smooth and intuitive booking
              journey, I mapped out how travelers search for destinations,
              select travel dates, compare hotels and amenities, choose rooms
              and rates, customize their stay, and complete their
              reservation. Special attention was given to reducing
              unnecessary steps and presenting important information clearly
              throughout the process.
            </p>
            <p>
              Key features were conceptualized to include location-based
              hotel search, advanced filters, list and map views, room and
              rate comparisons, Hilton Honors benefits, stay customization,
              secure payment, and clear booking confirmation.
            </p>
            <p>
              With these priorities established, I began creating initial
              sketches and user flows, which ultimately guided the
              development of the first set of wireframes for the redesigned
              Hilton booking experience.
            </p>
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/edf9d5291dbd7eeb04c2778dae834c4ba1410225?width=2334"
          alt="Wireframes overview"
          className="mx-auto mt-16 w-full max-w-[1167px] rounded-xl object-contain"
        />
      </div>
    </section>
  );
}
