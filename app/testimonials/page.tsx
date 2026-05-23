import { MessageCircle, Quote, Star, Wrench } from "lucide-react";

const testimonials = [
  {
    name: "BrownCandy (Candy)",
    highlight: true,
    text: "I went to TAYLORMOT for accident body repair. My car had a deep scratch and a broken mirror cover. The team were helpful, quick, and fixed the damage perfectly.",
  },
  {
    name: "Ali Ji",
    text: "I recently took my car in for bodywork repairs and was impressed by the quality of their work. They took great care of my car and kept the price fair.",
  },
  {
    name: "P17RVV",
    text: "My car needed body repair. I was updated daily on the progress and the result was excellent. Great value for money.",
  },
  {
    name: "Humera Khan",
    highlight: true,
    text: "I came here for bodywork even though I live across London. The service was brilliant, my questions were answered, and the car was well looked after.",
  },
  {
    name: "Deb Bailey",
    text: "Travelled from Surrey to view a car with my daughter. The team were lovely, accommodating, and made the whole process straightforward.",
  },
  {
    name: "David A",
    highlight: true,
    text: "The team responded quickly and booked me in for repairs straight away. They did a great job replacing my broken wing mirror.",
  },
  {
    name: "Huawei Wali",
    text: "The whole process was effortless. Everything happened exactly as promised and I received a high standard of customer care from start to finish.",
  },
  {
    name: "Amrish Patel",
    highlight: true,
    text: "Booked two cars with these guys. Both were in fantastic condition and the service was professional. I will definitely use them again.",
  },
  {
    name: "Meral Abadi",
    text: "I am extremely pleased with the bodywork repair on my vehicle. The repair was completed on time and the team gave me the best price.",
  },
  {
    name: "D Davies",
    text: "I had a great experience at the garage. The receptionist was polite and helpful, and the person who showed me around the car was professional and kind.",
  },
  {
    name: "Umar Abdul Khaliq",
    highlight: true,
    text: "Very good service. They kept me updated on the repairs, completed everything on time, and returned my car cleaned inside and out.",
  },
  {
    name: "Blue Green",
    text: "Friendly staff and great customer service. Fast fixing, helpful advice, and I will use the service again.",
  },
  {
    name: "Farhan Khan",
    highlight: true,
    text: "One of the coolest garages. Customer support was very nice and they kept me updated throughout the bodywork repair.",
  },
  {
    name: "Peter Poet",
    text: "Used this garage after a recommendation and they did not disappoint. Booked for MOT and repairs, and the car came back the same day.",
  },
  {
    name: "Martin Marinov",
    highlight: true,
    text: "Got my Vauxhall fixed after it started losing acceleration and shaking while idling. Communication was quick and the price was reasonable.",
  },
];

const Stars = () => (
  <div className="flex items-center gap-1" aria-label="Five star rating">
    {Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className="h-5 w-5 fill-[#f3aa13] text-[#f3aa13]" strokeWidth={0} />
    ))}
  </div>
);

const TestimonialsPage = () => {
  return (
    <main className="bg-white text-[#2c2c2c]">
      <section className="px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tight text-black sm:text-5xl">Testimonials</h1>

            <div className="mt-5 flex items-center justify-center gap-4">
              <span className="h-px w-24 bg-black" />
              <Wrench className="h-9 w-9 text-[#f4070b]" strokeWidth={1.8} />
              <span className="h-px w-24 bg-black" />
            </div>

            <h2 className="mx-auto mt-14 max-w-6xl text-2xl font-black leading-tight text-black sm:text-3xl lg:text-[36px]">
              Explore Authentic Testimonials Showcasing Our{" "}
              <span className="text-[#f4070b]">Commitment To Excellence</span>
            </h2>
          </div>

          <div className="mt-24 columns-1 gap-7 sm:columns-2 xl:columns-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                className="mb-7 break-inside-avoid border border-[#dddddd] bg-[#fbfbfb] px-5 py-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] sm:px-6 lg:px-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <h3 className="max-w-[75%] text-xl font-medium leading-tight text-[#2c2c2c] sm:text-2xl">
                    {testimonial.name}
                  </h3>
                  <Quote
                    className={`h-12 w-12 shrink-0 fill-current ${
                      testimonial.highlight ? "text-[#f4070b]" : "text-[#d5d5d5]"
                    }`}
                    strokeWidth={0}
                  />
                </div>

                <div className="mt-5">
                  <Stars />
                </div>

                <p className="mt-10 text-lg font-medium leading-8 text-[#2d2d2d] sm:text-[21px] sm:leading-[1.55]">
                  {testimonial.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/442033371831"
        aria-label="Contact TAYLORMOT on WhatsApp"
        className="fixed bottom-7 right-6 z-50 flex items-center gap-3"
      >
        <span className="hidden rounded-xl bg-white px-5 py-3 text-xl font-medium text-[#333] shadow-[0_8px_24px_rgba(0,0,0,0.16)] sm:block">
          Whatsapp
        </span>
        <span className="grid h-20 w-20 place-items-center rounded-full bg-[#39e75f] text-white shadow-[0_10px_28px_rgba(57,231,95,0.35)]">
          <MessageCircle className="h-11 w-11" strokeWidth={2.5} />
        </span>
      </a>
    </main>
  );
};

export default TestimonialsPage;
