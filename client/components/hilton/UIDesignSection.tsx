export default function UIDesignSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1512px] px-6 sm:px-10 lg:px-[173px]">
        <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
          User Interface Design
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[548px] space-y-6 text-base leading-relaxed text-black sm:text-lg lg:text-xl lg:leading-[1.5]">
            <p>
              The Hilton hotel booking experience was redesigned through a
              research-driven process focused on understanding how travelers
              search, compare, and reserve accommodations. The goal was to
              create a booking journey that feels simple, trustworthy, and
              efficient from the first search to final confirmation.
            </p>
            <p>
              As I explored the UI design, the initial concept focused on
              presenting hotel information, room options, amenities,
              pricing, and booking details as clearly as possible. However,
              insights from user research encouraged me to simplify the
              experience further by reducing unnecessary steps, improving
              information hierarchy, and making important details easier to
              compare.
            </p>
          </div>
          <div className="max-w-[548px] space-y-6 text-base leading-relaxed text-black sm:text-lg lg:text-xl lg:leading-[1.5]">
            <p>
              The final design direction became clear throughout the
              iterative process. There was one primary mission I wanted the
              experience to accomplish:
            </p>
            <p>
              The Hilton booking journey needed to make finding and
              reserving the right hotel feel effortless, transparent, and
              accessible for travelers with different needs.
            </p>
            <p>
              Ultimately, the design evolved beyond simply searching for
              hotels. It became a complete end-to-end booking experience,
              allowing travelers to discover properties, compare rooms and
              amenities, customize their stay, understand pricing, securely
              enter guest and payment information, and confidently complete
              their reservation—all within one seamless journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
