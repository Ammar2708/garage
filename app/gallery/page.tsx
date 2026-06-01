"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Star, ZoomIn } from "lucide-react";

type Category = "All" | "Vehicle Repair" | "Other" | "Car Maintenance";

const categories: Category[] = ["All", "Vehicle Repair", "Other", "Car Maintenance"];

const galleryItems = [
  {
    src: "/car1.webp",
    alt: "Black hatchback after workshop service",
    category: "Vehicle Repair",
  },
  {
    src: "/car2.webp",
    alt: "Grey car parked outside the garage",
    category: "Other",
  },
  {
    src: "/car3.webp",
    alt: "Vehicle bodywork close-up after repair",
    category: "Vehicle Repair",
  },
  {
    src: "/car4.webp",
    alt: "Car body repair and maintenance result",
    category: "Car Maintenance",
  },
  {
    src: "/img1A.webp",
    alt: "Vehicle maintenance work completed at TAYLORMOT",
    category: "Car Maintenance",
  },
  {
    src: "/img2A.webp",
    alt: "Car inspection image from the garage",
    category: "Other",
  },
  {
    src: "/img3A.webp",
    alt: "Vehicle repair image from TAYLORMOT",
    category: "Vehicle Repair",
  },
  {
    src: "/imgc1.webp",
    alt: "Car workshop service image",
    category: "Car Maintenance",
  },
] satisfies { src: string; alt: string; category: Exclude<Category, "All"> }[];

const comparisonItems = [
  {
    before: "/car1.webp",
    after: "/car2.webp",
    alt: "Blue car and grey car repair before and after comparison",
  },
  {
    before: "/car3.webp",
    after: "/car4.webp",
    alt: "Bodywork repair before and after comparison",
  },
];

const googleReviews = [
  {
    name: "R. Spencer",
    text: "Booked in for MOT and service. The team explained everything clearly and had the car ready on time.",
  },
  {
    name: "Adam K.",
    text: "Really smooth visit from drop-off to collection. Honest advice, tidy work, and no surprises on the bill.",
  },
  {
    name: "Sarah M.",
    text: "My car came back looking sharp after the repair. Friendly service and proper attention to the little details.",
  },
  {
    name: "Daniel B.",
    text: "A reliable local garage with clear updates throughout. I would happily bring my car back here again.",
  },
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

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeReview, setActiveReview] = useState(0);
  const review = googleReviews[activeReview];

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const showPreviousReview = () => {
    setActiveReview((current) => (current === 0 ? googleReviews.length - 1 : current - 1));
  };

  const showNextReview = () => {
    setActiveReview((current) => (current === googleReviews.length - 1 ? 0 : current + 1));
  };

  return (
    <main className="bg-white text-[#292929]">
      <section className="border-t-4 border-black px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-3xl font-black leading-tight tracking-normal sm:text-4xl lg:text-[44px]">
            Inside The TAYLORMOT Workshop {" "} <br />
            <span className="text-[#f4070b]">Recent Garage Moments</span>
          </h1>

          <div id="filter" className="mt-8 flex flex-wrap justify-center gap-4 lg:gap-7">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative min-h-[82px] min-w-[154px] bg-[#f4f4f4] px-7 text-base font-medium uppercase text-[#4d5660] transition-all duration-300 sm:min-w-[200px] sm:text-lg lg:min-w-[250px] ${
                    isActive ? "bg-white text-[#f4070b] shadow-[0_18px_45px_rgba(0,0,0,0.08)] ring-2 ring-black" : "hover:bg-white"
                  }`}
                >
                  {category}
                  <span
                    className={`absolute bottom-0 left-0 h-2 bg-[#f4070b] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <figure
                key={`${item.src}-${item.category}`}
                className="group relative min-h-[280px] overflow-hidden bg-gray-100 sm:min-h-[320px] lg:min-h-[360px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 grid h-28 w-28 place-items-center bg-[#f4070b] text-[#1f2933] opacity-0 transition-opacity duration-300 [clip-path:polygon(0_0,100%_100%,0_100%)] group-hover:opacity-100">
                  <ZoomIn className="mt-10 h-8 w-8" strokeWidth={3} />
                </div>
              </figure>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {comparisonItems.map((item, index) => (
              <figure key={item.alt} className="relative min-h-[420px] overflow-hidden bg-black">
                <Image
                  src={item.before}
                  alt={`${item.alt} before`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden border-l-[3px] border-white">
                  <Image
                    src={item.after}
                    alt={`${item.alt} after`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/25" />
                <span className="absolute bottom-10 left-8 bg-white/25 px-5 py-3 text-lg font-black text-white backdrop-blur-sm">
                  Before
                </span>
                <span className="absolute bottom-10 right-8 bg-white/25 px-5 py-3 text-lg font-black text-white backdrop-blur-sm">
                  After
                </span>
                <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-[#f4070b] text-white">
                  <div className="flex items-center">
                    <ChevronLeft className="h-7 w-7" strokeWidth={4} />
                    <ChevronRight className="h-7 w-7" strokeWidth={4} />
                  </div>
                </div>
                <figcaption className="sr-only">
                  {index + 1}. {item.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 text-black sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          <div className="relative flex min-h-44 flex-col items-center justify-center text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
              <span className="text-[74px] font-black uppercase leading-none text-[#f4070b]">LMS</span>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-black leading-none tracking-tight">Trusted</h2>
              <div className="mt-3 flex justify-center">
                <Stars muted />
              </div>
              <p className="mt-4 text-lg leading-tight">
                Based On <strong className="font-black">1K+ Reviews</strong>
              </p>
              <p className="mt-2 text-3xl font-medium tracking-tight">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#db4437]">o</span>
                <span className="text-[#f4b400]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#0f9d58]">l</span>
                <span className="text-[#db4437]">e</span>
              </p>
            </div>
          </div>

          <div className="grid items-center gap-4 sm:grid-cols-[48px_1fr_48px]">
            <button
              type="button"
              onClick={showPreviousReview}
              aria-label="Show previous Google review"
              className="hidden h-12 w-12 place-items-center rounded-full text-black transition-colors hover:bg-gray-100 sm:grid"
            >
              <ChevronLeft className="h-8 w-8" strokeWidth={3} />
            </button>

            <article className="relative min-h-64 rounded-3xl bg-[#f5f5f5] px-7 py-8 sm:px-10 lg:px-12">
              <Stars />
              <p className="mt-6 text-lg font-medium italic leading-8 text-[#292929] lg:text-xl">
                {review.text}
              </p>
              <h3 className="mt-6 text-xl font-black leading-tight text-[#303030]">{review.name}</h3>

              <div className="absolute bottom-7 right-7 text-4xl font-black leading-none">
                <span className="text-[#4285f4]">G</span>
              </div>
            </article>

            <button
              type="button"
              onClick={showNextReview}
              aria-label="Show next Google review"
              className="hidden h-12 w-12 place-items-center rounded-full text-black transition-colors hover:bg-gray-100 sm:grid"
            >
              <ChevronRight className="h-8 w-8" strokeWidth={3} />
            </button>

            <div className="flex justify-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={showPreviousReview}
                aria-label="Show previous Google review"
                className="grid h-11 w-11 place-items-center rounded-full bg-gray-100 text-black"
              >
                <ChevronLeft className="h-7 w-7" strokeWidth={3} />
              </button>
              <button
                type="button"
                onClick={showNextReview}
                aria-label="Show next Google review"
                className="grid h-11 w-11 place-items-center rounded-full bg-gray-100 text-black"
              >
                <ChevronRight className="h-7 w-7" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/441784240000"
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

export default GalleryPage;
