"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CarFront, Cog, Play, Wrench } from "lucide-react";

const stats = [
  {
    value: 1300,
    suffix: "+",
    label: "Happy Drivers",
  },
  {
    value: 6,
    suffix: "+",
    label: "Years in Service",
  },
  {
    value: 100,
    suffix: "+",
    label: "Workshop Solutions",
  },
  {
    value: 98,
    suffix: "%",
    label: "Return Clients",
  },
];

const solutionItems = [
  {
    title: "Accurate Diagnosis",
    copy: "We identify the issue clearly before recommending the right repair.",
    icon: <Cog className="h-12 w-12 text-[#f4070b]" strokeWidth={2.5} />,
  },
  {
    title: "Transparent Service",
    copy: "You get clear updates, honest guidance, and practical repair options.",
    icon: <CarFront className="h-12 w-12 text-black" strokeWidth={2.3} />,
  },
  {
    title: "Quality Finish",
    copy: "Every job is completed with attention to safety, reliability, and detail.",
    icon: <Wrench className="h-12 w-12 text-black" strokeWidth={2.3} />,
  },
];

const partnerBrands = [
  {
    name: "fixmycar",
    mark: (
      <span className="text-[34px] font-black lowercase text-[#14263a] sm:text-[42px]">
        fix<span className="font-bold text-[#263f59]">mycar</span>
      </span>
    ),
  },
  {
    name: "Book My Garage",
    mark: (
      <span className="flex flex-col text-center text-[26px] font-black uppercase leading-[0.86] sm:text-[34px]">
        <span className="text-[#0c72b8]">Book My</span>
        <span className="text-[#f5a623]">Garage</span>
      </span>
    ),
  },
  {
    name: "MyCarNeedsA.com",
    mark: (
      <span className="text-[24px] font-black text-[#2c3f8f] sm:text-[30px]">
        MyCarNeedsA<span className="ml-1 rounded-full bg-[#70b84a] px-2 py-1 text-white">.com</span>
      </span>
    ),
  },
  {
    name: "autobutler",
    mark: (
      <span className="text-[34px] font-black italic text-[#0076b6] sm:text-[42px]">
        auto<span className="font-medium text-[#f3a22e]">butler</span>
      </span>
    ),
  },
];

const Sol = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const statsElement = statsRef.current;

    if (!statsElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) {
      return;
    }

    const duration = 1400;
    let animationFrame = 0;
    let startTime: number | null = null;

    const animateCounts = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((item) => Math.round(item.value * easedProgress)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCounts);
      }
    };

    animationFrame = requestAnimationFrame(animateCounts);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasAnimated]);

  return (
    <section className="bg-white text-black">
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Reliable Automotive Care,{" "}
            <span className="text-[#f4070b]">Built Around You</span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base font-medium leading-7 text-gray-700 sm:text-lg">
            London Motor Sports delivers dependable servicing, diagnostics, bodywork, and mechanical repairs
            with a clean, customer-first approach. We inspect thoroughly, explain the work clearly, and complete
            every repair with the care your vehicle deserves.
          </p>

          <Link
            href="/appointment"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4070b] px-7 text-sm font-black uppercase text-white transition-colors hover:bg-black"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="px-4 pb-10 sm:px-6 lg:px-8">
        <div ref={statsRef} className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <article
              key={item.label}
              className="flex min-h-36 flex-col items-center justify-center rounded-lg bg-black px-5 py-8 text-center text-white"
            >
              <strong className="text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-[64px]">
                {counts[index].toLocaleString()}
                {item.suffix}
              </strong>
              <span className="mt-4 text-lg font-black leading-tight sm:text-xl">{item.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="px-4 pb-12 pt-2 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#3d3d3f] sm:text-4xl lg:text-[46px]">
            Expert Support For <span className="text-[#f4070b]">Every Journey</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base font-medium leading-7 text-gray-700 sm:text-lg">
            A professional repair experience shaped around accuracy, communication, and long-lasting results.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 bg-[#f4070b]" />

          <div className="mt-10 grid gap-y-10 md:grid-cols-3 md:gap-y-0">
            {solutionItems.map((item, index) => (
              <article
                key={item.title}
                className={`flex min-w-0 flex-col items-center px-6 text-center ${
                  index > 0 ? "md:border-l md:border-gray-200" : ""
                }`}
              >
                <div className="grid h-16 w-16 place-items-center">{item.icon}</div>
                <h3 className="mt-5 text-xl font-black leading-tight tracking-tight">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm font-medium leading-6 text-gray-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-12 sm:py-14">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

          <div className="logo-slider-track flex w-max items-center gap-16 sm:gap-24 lg:gap-32">
            {[...partnerBrands, ...partnerBrands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex min-w-[220px] items-center justify-center opacity-85 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:min-w-[300px]"
                aria-label={brand.name}
              >
                {brand.mark}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .logo-slider-track {
            animation: logo-scroll 22s linear infinite;
          }

          .logo-slider-track:hover {
            animation-play-state: paused;
          }

          @keyframes logo-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .logo-slider-track {
              animation: none;
            }
          }
        `}</style>
      </div>

      <div className="bg-[#353535] text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <span className="pointer-events-none absolute bottom-[-28px] left-4 select-none text-[110px] font-black leading-none text-white/[0.03] sm:text-[150px] lg:left-8 lg:text-[190px]">
              Quality
            </span>

            <div className="relative z-10 mx-auto max-w-2xl lg:ml-auto lg:mr-12">
              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
                A Professional Standard You Can Trust
              </h2>
              <div className="mt-7 h-1 w-20 bg-[#f4070b]" />

              <div className="mt-10 space-y-6 text-base font-semibold leading-8 text-white/78 sm:text-lg">
                <p>
                  Our workshop is built around disciplined processes, experienced technicians, and modern
                  repair methods. Every vehicle is handled with the same focus: diagnose correctly, repair
                  properly, and return it with confidence.
                </p>
                <p>
                  From the first inspection to the final quality check, LMS keeps the work transparent,
                  efficient, and aligned with the standards expected from a trusted W12 London garage.
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[330px] overflow-hidden border-t border-white/30 lg:min-h-[520px] lg:border-l lg:border-t-0">
            <Image
              src="/imgc1.webp"
              alt="LMS technician completing professional car repair work"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/15" />
            <button
              type="button"
              aria-label="Play accreditation video"
              className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#2f2f2f] text-white shadow-2xl transition-transform hover:scale-105 sm:h-32 sm:w-32"
            >
              <Play className="ml-1 h-10 w-10 sm:h-12 sm:w-12" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sol;
