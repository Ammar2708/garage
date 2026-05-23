import Image from "next/image";
import { CarFront, Droplets, Gauge } from "lucide-react";

const engineIssues = [
  {
    title: "No fluid leaks",
    icon: <Droplets className="h-8 w-8" strokeWidth={2.2} />,
  },
  {
    title: "Improved acceleration",
    icon: <Gauge className="h-8 w-8" strokeWidth={2.2} />,
  },
  {
    title: "Stronger performance",
    icon: <CarFront className="h-8 w-8" strokeWidth={2.2} />,
  },
];

const Engine = () => {
  return (
    <section className="overflow-hidden bg-black px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.22em] text-[#f4070b]">
            Engine Repair
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            Engine repair for <span className="text-[#f4070b]">stronger performance</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-white/80">
            Used or new engine support, diagnostics, and repair work to restore reliability and road confidence.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {engineIssues.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/15 bg-white/[0.03] p-4 text-center transition-colors hover:border-[#f4070b] hover:bg-[#f4070b]/10"
              >
                <div className="mx-auto grid h-10 w-10 place-items-center text-[#f4070b]">
                  {item.icon}
                </div>
                <h3 className="mt-3 text-base font-black leading-tight">{item.title}</h3>
              </article>
            ))}
          </div>

          <a
            href="tel:+442033371831"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#f4070b] px-7 text-xs font-black uppercase text-white shadow-[0_12px_30px_rgba(244,7,11,0.24)] transition-colors hover:bg-white hover:text-black"
          >
            Start the engine
          </a>
        </div>

        <div className="group relative mx-auto flex min-h-[230px] w-full max-w-xl items-center justify-center lg:min-h-[340px]">
          <div className="absolute inset-x-12 bottom-8 h-14 rounded-full bg-[#f4070b]/16 blur-3xl" />
          <Image
            src="/for1.webp"
            alt="Engine repair illustration"
            width={620}
            height={460}
            className="engine-hover-shake relative z-10 h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Engine;
