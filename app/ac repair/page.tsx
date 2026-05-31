import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Gauge,
  Phone,
  Snowflake,
  Wrench,
} from "lucide-react";

const mechanicalServices = [
  "Engine Replacement",
  "Auto Gearbox Replacement",
  "Brake Pad Replacement",
  "Shock Absorber Repair",
  "Car Exhaust Repair",
  "Power Steering Replacement",
  "Car AC Repair",
  "Fuel System Repair",
  "Clutch Replacement",
  "Timing Belt Replacement",
  "Auxiliary Belt Replacement",
  "Engine Mount Replacement",
  "Turbo Replacement",
  "EV Services",
];

const serviceHref = (service: string) => {
  if (service === "Engine Replacement") return "/engine-replacement";
  if (service === "Brake Pad Replacement") return "/brake-pad-replacement";
  if (service === "Shock Absorber Repair") return "/shock";
  if (service === "Car Exhaust Repair") return "/exhaust";
  if (service === "Fuel System Repair") return "/fuel";
  if (service === "Power Steering Replacement") return "/steering-fluid";
  if (service === "Car AC Repair") return "/ac-repair";
  if (service === "Timing Belt Replacement") return "/timing-belt-replacement";
  if (service === "Turbo Replacement") return "/turbo";
  if (service === "Clutch Replacement") return "/clutch";
  if (service === "EV Services") return "/ev";
  return "/auto";
};

const acParts = [
  {
    title: "Compressor",
    text: "Pressurises refrigerant and moves it through the AC system.",
    image: "/imgi_4_car-ac-repair-compressor.webp",
  },
  {
    title: "Condenser",
    text: "Releases heat and converts hot gas into high-pressure liquid.",
    image: "/imgi_5_car-ac-repair-pg-condensor.webp",
  },
  {
    title: "Evaporator",
    text: "Absorbs cabin heat so cool air can flow through the vents.",
    image: "/imgi_6_car-ac-repair-pg-evaporator.webp",
  },
];

const processSteps = [
  {
    title: "Fill a Form",
    text: "Share your car details and the cooling issue you have noticed.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get a Quote",
    text: "We confirm the likely checks, repair route, and estimated cost.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let us Fix",
    text: "Our technicians test, repair, regas, and inspect the AC system.",
    image: "/imgi_21_tyre-gallery-1-scaled.webp",
  },
  {
    title: "Relax & Enjoy",
    text: "Drive away with a cooler cabin and a healthier AC system.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "No defogging on the windscreen",
  "Warm air or weak airflow from the vents",
  "Humidity or unpleasant smells inside the cabin",
  "Low pressure, leaking gas, or compressor faults",
  "Unusual noises when the AC is switched on",
  "Damaged fans, blocked filters, or internal obstruction",
];

const includedServices = [
  "AC pressure and temperature checks",
  "Leak testing and refrigerant recovery",
  "Filter cleaning and airflow inspection",
  "Compressor, condenser, and evaporator diagnostics",
  "Air and moisture evacuation",
  "Regas support and post-repair system testing",
];

const priceItems = [
  "Leak repairs: from GBP 50 to GBP 200",
  "Compressor repair: from GBP 400 to GBP 1000",
  "Condenser repair: from GBP 200 to GBP 550",
  "Aircon regas: from GBP 50 to GBP 250",
];

const whyCards = [
  {
    title: "Well-Equipped Garage",
    text: "Modern tools help us test leaks, pressure, temperature, and AC component performance.",
    icon: Wrench,
  },
  {
    title: "Same-Day AC Repairs",
    text: "We handle diagnostics and common AC repairs quickly for most makes and models.",
    icon: Snowflake,
  },
  {
    title: "Clear Before Repair",
    text: "You get a practical estimate and repair explanation before work starts.",
    icon: ClipboardCheck,
  },
];

const galleryImages = [
  "/imgi_20_car-ac-repair-gallery-img-1.webp",
  "/imgi_21_car-ac-repair-gallery-img-2.webp",
  "/imgi_22_car-ac-repair-gallery-img-3.webp",
  "/imgi_23_car-ac-repair-gallery-img-4.webp",
  "/imgi_24_car-ac-repair-gallery-img-5.webp",
  "/imgi_25_car-ac-repair-gallery-img-6.webp",
];

const faqItems = [
  {
    question: "What are the main signs my car AC needs repair?",
    answer:
      "Common signs include warm air, weak airflow, high cabin humidity, bad smells, windscreen misting, AC noises, or compressor issues.",
  },
  {
    question: "How often should I service my car AC?",
    answer:
      "A car AC service every two years is a sensible routine, even if the system still feels usable.",
  },
  {
    question: "What does TaylorMOT offer under car AC repair services?",
    answer:
      "We check leaks, pressure, temperature, filters, refrigerant condition, compressor performance, condenser condition, and airflow problems.",
  },
  {
    question: "How much does car AC repair cost?",
    answer:
      "Cost depends on the fault and vehicle. Leak repairs, compressor repair, condenser repair, and regas work all have different parts and labour needs.",
  },
  {
    question: "Do you offer same-day AC repair services?",
    answer:
      "Yes, many AC diagnostic and repair jobs can be handled the same day, depending on parts, vehicle condition, and booking time.",
  },
];

const relatedResources = [
  {
    title: "How Much Does Head Gasket Repair Cost in 2025?",
    text: "Find out what affects head gasket repair pricing and when urgent inspection is needed.",
    date: "August 7, 2025",
    image: "/imgi_29_How-Much-Does-a-Head-Gasket-Repair-Cost-banner-scaled.webp",
  },
  {
    title: "How Much Does an Auxiliary Belt Really Cost?",
    text: "A practical guide to auxiliary belt symptoms, prices, and replacement timing.",
    date: "August 6, 2025",
    image: "/imgi_119_auxiliary-belt-cost-uk-870x455.webp",
  },
  {
    title: "Car Shock Absorber Repair Cost Guide",
    text: "Understand common suspension symptoms and what can affect repair cost.",
    date: "November 30, 2024",
    image: "/imgi_30_shock-absorber-repair-cost.webp",
  },
];

export default function AcRepairPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[500px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_14_car-ac-repair-content-img.webp"
          alt="Car AC repair gauges connected to a vehicle"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Car AC repair</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Beat The Heat With Expert <span className="text-red-500">Car AC Repair</span>
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            If your car is not cooling properly, TaylorMOT can inspect leaks, pressure, airflow, and AC components so every drive feels fresh again.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="tel:+441784240000" className="inline-flex min-w-44 items-center justify-center gap-2 rounded-md border-2 border-white bg-white px-6 py-3 text-sm font-black uppercase text-black transition hover:bg-transparent hover:text-white">
              <Phone size={18} />
              Call Now
            </Link>
            <Link href="/appointment" className="inline-flex min-w-44 items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700">
              Book Now
              <CalendarCheck size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto min-h-[380px] w-full max-w-xl overflow-hidden rounded-md">
            <Image src="/imgi_14_car-ac-repair-content-img.webp" alt="Car AC repair technician" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Stay Cool With <span className="text-red-600">Car AC Repair</span> In London
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A healthy air conditioning system keeps the cabin comfortable, reduces moisture, and helps prevent stale odours. When cooling drops, the cause may be low gas, a leak, a blocked filter, or a failing component.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks the system properly before repair, so you get clear advice and a practical solution.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_14_car-ac-repair-content-img.webp" alt="AC repair specialist in London" fill className="object-cover" sizes="430px" />
              </div>
              <div className="px-6 py-7">
                <h3 className="text-xl font-black">Best Car Mechanics In London</h3>
                <div className="mt-5 rounded-md bg-white px-6 py-5 text-neutral-950">
                  <p className="text-base font-black text-red-600">Call Now And Get A Free Quote</p>
                  <p className="mt-3 text-2xl font-black">+44 1784 240000</p>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-neutral-100 px-6 py-7">
              <h3 className="text-center text-2xl font-black text-red-600">Car Mechanical Services</h3>
              <div className="mt-6 space-y-3">
                {mechanicalServices.map((service) => (
                  <Link key={service} href={serviceHref(service)} className="flex items-center gap-4 rounded-md bg-white px-5 py-3.5 text-sm font-semibold transition hover:text-red-600 sm:text-base">
                    <Gauge className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={23} />
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="relative min-h-[360px] overflow-hidden rounded-md">
              <Image src="/imgi_14_car-ac-repair-content-img.webp" alt="AC pressure gauges attached to a car" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
              When Do You Need A Car AC Repair Shop?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Book an inspection when the AC takes too long to cool, smells unpleasant, or stops clearing moisture from the cabin.
            </p>
            <div className="mt-8 space-y-4">
              {warningSigns.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-red-600" size={21} />
                  {item}
                </div>
              ))}
            </div>
            <div className="relative mt-8 min-h-[360px] overflow-hidden rounded-md">
              <Image src="/imgi_20_car-ac-repair-gallery-img-1.webp" alt="Car AC diagnostic work" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Main Parts Of A <span className="text-red-600">Car AC System</span>
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          These components work together to circulate refrigerant, remove heat, and cool the cabin.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {acParts.map((part, index) => (
            <article key={part.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className={index === 1 ? "relative h-64 bg-neutral-50" : "relative h-64 bg-red-600"}>
                <Image src={part.image} alt={part.title} fill className="object-contain p-6" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black text-red-600 sm:text-2xl">{part.title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-6 text-neutral-800">{part.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-[31px]">How It Works</h2>
        <Link href="/appointment" className="mx-auto mt-3 inline-flex min-w-64 justify-center rounded-none bg-red-600 px-7 py-2 text-sm font-black uppercase text-white transition hover:bg-red-700">
          Book For Appointment
        </Link>
        <div className="mx-auto mt-12 grid max-w-[1800px] gap-9 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.title} className="px-4">
              <div className="relative mx-auto h-52 w-52 overflow-hidden rounded-full">
                <Image src={step.image} alt={step.title} fill className="object-cover" sizes="208px" />
              </div>
              <h3 className="mt-6 text-xl font-black leading-tight text-red-600 sm:text-2xl">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm font-medium leading-6 text-neutral-800">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[520px]">
          <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Quote request for AC repair" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your AC issue</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="AC repair details" placeholder="Tell us about cooling, smell, leaks, noises, or airflow problems" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          What Does Car Air Conditioning Repair Include?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          We inspect the system before repair so leaks, airflow faults, weak cooling, and component problems are handled properly.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {includedServices.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
              <CheckCircle2 className="mt-0.5 shrink-0 text-red-600" size={21} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          How Much Does Car AC Repair Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Prices vary by fault, vehicle, and parts required. These guide prices help you understand typical repair ranges.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {priceItems.map((item) => (
            <div key={item} className="rounded-md border border-neutral-200 px-5 py-4 text-sm font-black text-neutral-800 sm:text-[15px]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Why TaylorMOT For <span className="text-red-600">Car AC Repair?</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {whyCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-md border border-neutral-300 px-7 py-10">
                <Icon className="mx-auto text-red-600" size={62} strokeWidth={1.7} />
                <h3 className="mt-6 text-xl font-black text-red-600 sm:text-2xl">{card.title}</h3>
                <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-6 text-neutral-800">{card.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="Car AC appointment call to action" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable and well-versed</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Keep Your Car AC In Optimum Condition
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
              Book an AC check before weak cooling, bad smells, or leaks turn into a larger repair.
            </p>
            <Link href="/appointment" className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-7 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700">
              Book Appointment
              <CalendarCheck size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-center text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Car AC Repair <span className="text-red-600">Gallery</span>
        </h2>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative h-72 overflow-hidden rounded-md">
              <Image src={image} alt={`Car AC repair gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-center text-3xl font-black leading-tight sm:text-[36px]">Frequently Asked Questions</h2>
        <div className="mx-auto mt-9 max-w-[1500px] space-y-5">
          {faqItems.map((item) => (
            <details key={item.question} className="group rounded-none border border-neutral-400 px-5 py-5 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-black text-neutral-800 sm:text-lg">
                {item.question}
                <ChevronDown className="shrink-0 text-red-600 transition group-open:rotate-180" size={24} />
              </summary>
              <p className="mt-4 text-left text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="flex items-center gap-5">
          <h2 className="text-2xl font-black uppercase">Read Also</h2>
          <span className="h-1 w-20 bg-red-600" />
        </div>
        <div className="mt-9 grid gap-7 md:grid-cols-3">
          {relatedResources.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-md bg-neutral-50">
              <div className="relative h-64">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black leading-tight text-neutral-800">{item.title}</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-neutral-800">{item.text}</p>
                <div className="mt-7 flex items-center justify-between gap-4">
                  <p className="text-sm font-medium">{item.date}</p>
                  <Link href="/blogs" className="rounded-md bg-red-600 px-6 py-2.5 text-sm font-black text-white transition hover:bg-red-700">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
