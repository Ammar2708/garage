"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRightCircle, Check, ChevronLeft, ChevronRight, Scissors, Star } from "lucide-react";

const reviews = [
  {
    name: "Adam Zaki",
    text: "Fantastic team of mechanics. Incredible job, professional service, and very fair pricing.",
  },
  {
    name: "Sarah Mitchell",
    text: "Clear communication from start to finish. The repair was completed quickly and the car feels perfect again.",
  },
  {
    name: "Daniel Brooks",
    text: "A reliable garage with honest advice and excellent workmanship. I would confidently recommend LMS.",
  },
];

const comfortPoints = [
  "Clear guidance from a polite, experienced team.",
  "Regular updates while your vehicle is in the workshop.",
  "Comfortable waiting space with Wi-Fi access.",
  "Seasonal offers on selected repair and service work.",
  "Final checks completed before vehicle handover.",
];

const Stars = ({ muted = false }: { muted?: boolean }) => (
  <div className="flex items-center gap-1" aria-label="Five star rating">
    {Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 fill-current ${muted && index === 4 ? "text-gray-300" : "text-[#ffd22f]"}`}
        strokeWidth={0}
      />
    ))}
  </div>
);

const Comment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));
  };

  return (
    <>
      <section className="bg-white px-4 py-10 text-black sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[300px_1fr] lg:gap-10">
          <div className="relative flex min-h-44 flex-col items-center justify-center text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
              <span className="text-[76px] font-black uppercase leading-none text-[#f4070b]">LMS</span>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-black leading-none tracking-tight">Excellent</h2>
              <div className="mt-3 flex justify-center">
                <Stars muted />
              </div>
              <p className="mt-4 text-xl leading-tight">
                Based On <strong className="font-black">1K+ Reviews</strong>
              </p>
              <p className="mt-2 text-4xl font-medium tracking-tight">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#db4437]">o</span>
                <span className="text-[#f4b400]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#0f9d58]">l</span>
                <span className="text-[#db4437]">e</span>
              </p>
            </div>
          </div>

          <div className="grid items-center gap-4 sm:grid-cols-[44px_1fr_44px]">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous review"
              className="hidden h-11 w-11 place-items-center rounded-full text-black transition-colors hover:bg-gray-100 sm:grid"
            >
              <ChevronLeft className="h-9 w-9" strokeWidth={3.2} />
            </button>

            <article className="relative min-h-52 rounded-2xl bg-[#f5f5f5] px-6 py-7 sm:px-8 lg:px-10">
              <Stars />
              <p className="mt-5 text-lg font-medium italic leading-7 text-[#292929] lg:text-xl">
                {activeReview.text}
              </p>
              <h3 className="mt-5 text-xl font-black leading-tight text-[#303030]">{activeReview.name}</h3>

              <div className="absolute bottom-7 right-7 text-4xl font-black leading-none">
                <span className="text-[#4285f4]">G</span>
              </div>
            </article>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next review"
              className="hidden h-11 w-11 place-items-center rounded-full text-black transition-colors hover:bg-gray-100 sm:grid"
            >
              <ChevronRight className="h-9 w-9" strokeWidth={3.2} />
            </button>

            <div className="flex justify-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Show previous review"
                className="grid h-11 w-11 place-items-center rounded-full bg-gray-100 text-black"
              >
                <ChevronLeft className="h-7 w-7" strokeWidth={3} />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Show next review"
                className="grid h-11 w-11 place-items-center rounded-full bg-gray-100 text-black"
              >
                <ChevronRight className="h-7 w-7" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-12 pt-4 text-center text-black sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[46px]">
            <span className="block text-[#f4070b]">Car Body Repair</span>
            <span className="block text-black">From Bonnet To Boot</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-7 text-gray-700 sm:text-lg">
            Restore your vehicle&apos;s finish with expert paintwork, panel repair, and careful refinishing. From{" "}
            <a href="#contact" className="font-black text-[#f4070b] underline decoration-[#f4070b]">
              dents
            </a>
            ,{" "}
            <a href="#contact" className="font-black text-[#f4070b] underline decoration-[#f4070b]">
              scratches
            </a>
            , and scuffs to larger bodywork repairs, LMS W12 delivers a clean, precise finish.
          </p>

          <a
            href="tel:+442033371831"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border-2 border-black px-7 text-base font-black text-black transition-colors hover:bg-black hover:text-white"
          >
            Book Appointment
            <ArrowRightCircle className="h-6 w-6" strokeWidth={2.5} />
          </a>
        </div>
      </section>

      <section className="border-t-2 border-black bg-white px-4 py-12 text-black sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1fr] lg:gap-12">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src="/bg1.webp"
              alt="Vehicle wheel being inspected at LMS garage"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-center grayscale"
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-0 right-0 w-[72%] bg-[#f4070b] px-5 py-6 text-center text-white sm:w-[52%] sm:px-8">
              <p className="text-base font-black leading-tight">Coupons from</p>
              <p className="mt-2 text-5xl font-black leading-none tracking-tight">&pound;25 off</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide">selected services</p>
            </div>

            <div className="absolute right-0 top-0 w-[72%] bg-[#2d2d2d] px-5 py-6 text-center text-white sm:w-[52%] sm:px-8">
              <div className="absolute left-5 top-[-18px] grid h-11 w-11 place-items-center rounded-full bg-[#f4070b]">
                <Scissors className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">Current Workshop Offer</h3>
              <p className="mt-3 text-sm font-medium text-[#f4070b]">Available on services over &pound;250</p>
              <a
                href="tel:+442033371831"
                className="mt-5 inline-flex min-h-11 items-center justify-center border border-[#f4070b] px-5 text-sm font-black text-white transition-colors hover:bg-[#f4070b]"
              >
                Claim Offer
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[46px]">
              Relax While We <span className="text-[#f4070b]">Handle The Repair</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#f4070b]" />

            <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-gray-700 sm:text-lg">
              Bring your vehicle to LMS and enjoy a smoother workshop visit. From{" "}
              <a href="#contact" className="font-black text-[#f4070b] underline decoration-[#f4070b]">
                general inspection
              </a>{" "}
              to bodywork and mechanical repair, we keep the process clear, comfortable, and efficient.
            </p>

            <ul className="mt-7 space-y-4">
              {comfortPoints.map((point) => (
                <li key={point} className="flex gap-4 text-base font-medium leading-7 sm:text-lg">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[#d90000]" strokeWidth={3.5} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comment;
