"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRightCircle,
  BadgeCheck,
  CarFront,
  Check,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "General Repairs",
    heading: (
      <>
        Complete <span className="text-[#f4070b]">Repair Support</span> For Your Car
      </>
    ),
    copy:
      "From servicing and brake checks to diagnostics and maintenance, Taylormot keeps repair work clear, practical, and focused on getting your vehicle safely back on the road.",
  },
  {
    title: "Electrical Repair",
    heading: (
      <>
        Accurate <span className="text-[#f4070b]">Electrical Diagnostics</span>
      </>
    ),
    copy:
      "We inspect batteries, warning lights, sensors, locks, windows, and electrical faults carefully before recommending the right repair.",
  },
  {
    title: "Bodywork & Paint",
    heading: (
      <>
        Clean <span className="text-[#f4070b]">Bodywork And Paint</span> Results
      </>
    ),
    copy:
      "Our bodywork service covers dents, scratches, panel damage, and paint refinishing with a focus on clean presentation and finish quality.",
  },
  {
    title: "Vetted Mechanics",
    heading: (
      <>
        Skilled <span className="text-[#f4070b]">Mechanics You Can Trust</span>
      </>
    ),
    copy:
      "Our technicians support private drivers and business vehicles with clear advice, careful inspections, and dependable workshop standards.",
  },
];

const strengths = [
  "Clear repair advice before work begins",
  "Mechanical, electrical, and bodywork support",
  "Straightforward booking and communication",
  "Final checks before vehicle handover",
];

const stats = [
  ["1,300+", "5-Star Reviews"],
  ["6+", "Years Experience"],
  ["100+", "Repair Services"],
  ["98%", "Returning Clients"],
];

const facilities = [
  { title: "Large Workshop", icon: <CarFront /> },
  { title: "Quality Checks", icon: <ShieldCheck /> },
  { title: "Diagnostics", icon: <Zap /> },
  { title: "Repair Support", icon: <Wrench /> },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const service = services[activeTab];

  return (
    <main className="overflow-hidden bg-white text-black">
      <section className="relative flex min-h-[480px] items-center overflow-hidden bg-black px-4 py-18 text-white sm:px-6 lg:px-8">
        <Image src="/bg3.webp" alt="Dark automotive background" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f4070b]">About Taylormot</p>
          <h1 className="mx-auto mt-5 max-w-5xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Professional car repairs, servicing, and diagnostics in W12 London.
          </h1>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[330px_1fr] lg:gap-14">
          <div className="space-y-3 lg:pt-8">
            {services.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`min-h-12 w-full rounded-lg px-5 text-left text-base font-black transition-colors ${
                  activeTab === index ? "bg-[#f4070b] text-white" : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <article className="rounded-lg bg-white lg:px-4">
            <h2 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              {service.heading}
            </h2>
            <p className="mt-5 max-w-4xl text-base font-medium leading-7 text-gray-700 sm:text-lg">
              {service.copy}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[#f4070b]" strokeWidth={3} />
                  <span className="text-xs font-black leading-5 sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="relative min-h-[480px] bg-[#f4070b] text-white lg:min-h-[560px]">
          <div className="absolute inset-y-0 left-0 w-full lg:w-[68%]">
            <Image src="/bg1.webp" alt="Mechanic workshop background" fill sizes="70vw" className="object-cover object-left grayscale" />
            <div className="absolute inset-0 bg-black/65" />
          </div>
          <div className="absolute inset-y-0 right-0 hidden w-[46%] skew-x-[-17deg] bg-[#f4070b] lg:block" />
          <Image
            src="/img3A.webp"
            alt="Black car and tyre"
            width={760}
            height={360}
            className="absolute right-0 top-1/2 z-10 hidden w-[48vw] max-w-[780px] -translate-y-1/2 lg:block"
          />
          <div className="relative z-20 flex min-h-[480px] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:min-h-[560px] lg:px-8">
            <p className="text-base font-black uppercase tracking-wide sm:text-lg">Reliable and Well Prepared</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Choose The Service, We Handle The Repair
            </h2>
            <Link
              href="/appointment"
              className="mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-full border-2 border-white bg-[#f4070b] px-6 text-base font-black text-white transition-colors hover:bg-black"
            >
              Book Appointment <ArrowRightCircle className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-gray-100">
            <Image src="/img2A.webp" alt="Taylormot mechanic in garage" fill sizes="(min-width:1024px) 48vw, 100vw" className="object-cover object-center" />
            <div className="absolute bottom-6 right-6 grid h-36 w-36 place-items-center rounded-full border-[18px] border-white bg-[#ef1720] text-center text-white shadow-xl">
              <div>
                <strong className="block text-4xl font-black">06+</strong>
                <span className="block text-sm font-black leading-tight">Years<br />Experience</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              London&apos;s trusted <span className="text-[#f4070b]">car repair and maintenance</span> workshop.
            </h2>
            <div className="mt-5 space-y-4 text-base font-medium leading-7 text-gray-700">
              <p>
                Taylormot supports local drivers with servicing, diagnostics, mechanical repairs, bodywork, and paint.
                We explain the issue clearly and agree the repair before work begins.
              </p>
              <p>
                Our goal is simple: return every vehicle in a safer, cleaner, and more dependable condition.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                ["Experienced Team", "Skilled support for everyday repairs and maintenance.", <Phone key="phone" />],
                ["Quality Service", "Clear workshop standards from inspection to handover.", <BadgeCheck key="badge" />],
              ].map(([title, copy, icon]) => (
                <div key={title as string} className="flex gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gray-100 text-[#f4070b]">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-base font-black">{title}</h3>
                    <p className="mt-1 text-xs font-medium leading-5 text-gray-700 sm:text-sm">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4070b] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => (
            <article key={item.title} className="text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white text-[#f4070b]">
                <div className="h-9 w-9">{item.icon}</div>
              </div>
              <h3 className="mt-4 text-lg font-black leading-tight">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#161616] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <article key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-6 text-center">
              <strong className="block text-4xl font-black leading-none text-[#f4070b] sm:text-5xl">{value}</strong>
              <span className="mt-4 block text-sm font-black sm:text-base">{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[320px_1fr]">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black">Good</h2>
            <div className="mt-3 flex justify-center gap-1 text-yellow-400 lg:justify-start" aria-label="Five star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-6 w-6 fill-current" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-3 text-lg">Based On <strong>1K+ Reviews</strong></p>
          </div>
          <article className="rounded-lg bg-[#f5f5f5] px-7 py-8 sm:px-10">
            <p className="text-base font-medium italic leading-7 text-[#333]">
              The team was helpful, clear, and professional. They explained the work properly and completed the repair quickly.
            </p>
            <h3 className="mt-5 text-lg font-black text-[#333]">Ripal Sheth</h3>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;
