import Image from "next/image";

const Appointment = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 text-black sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)]">
        <div className="relative z-10 text-center lg:text-left">
          <span className="pointer-events-none absolute left-1/2 top-8 -z-10 -translate-x-1/2 select-none text-[76px] font-black uppercase leading-none text-black/[0.035] sm:text-[110px] lg:left-20 lg:translate-x-0 lg:text-[130px]">
            Book
          </span>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#2b2b2d] sm:text-4xl lg:text-[46px]">
            Book Your <span className="text-[#f4070b]">Service Appointment</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base font-black uppercase leading-7 text-[#2b2b2d] sm:text-lg lg:text-xl">
            Professional car repair, maintenance, diagnostics, and bodywork support in W12 London.
          </p>

          <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="tel:+441784240000"
              className="max-w-full text-3xl font-black leading-none tracking-[0.08em] text-[#f4070b] sm:text-4xl"
            >
              +44 1784 240000
            </a>

            <a
              href="tel:+441784240000"
              className="inline-flex min-h-12 items-center justify-center border border-black px-7 text-base font-black text-[#333333] transition-colors hover:bg-black hover:text-white"
            >
              Call Us
            </a>
          </div>
        </div>

        <div className="relative min-h-[160px] sm:min-h-[220px] lg:min-h-[280px]">
          <Image
            src="/cimg1.webp"
            alt="Silver hybrid car side view"
            fill
            priority={false}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-contain object-center lg:scale-[1.35] lg:object-left"
          />
        </div>
      </div>
    </section>
  );
};

export default Appointment;
