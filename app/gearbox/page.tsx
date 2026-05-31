import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Gauge,
  Phone,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";

const mechanicalServices = [
  "Engine Replacement",
  "Automatic Gearbox Repair",
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
];

const serviceHref = (service: string) => {
  if (service === "Engine Replacement") return "/engine-replacement";
  if (service === "Automatic Gearbox Repair") return "/gearbox";
  if (service === "Brake Pad Replacement") return "/brake-pad-replacement";
  if (service === "Car Exhaust Repair") return "/exhaust";
  if (service === "Fuel System Repair") return "/fuel";
  if (service === "Power Steering Replacement") return "/steering-fluid";
  if (service === "Car AC Repair") return "/ac-repair";
  if (service === "Timing Belt Replacement") return "/timing-belt-replacement";
  if (service === "Auxiliary Belt Replacement") return "/belt";
  if (service === "Turbo Replacement") return "/turbo";
  if (service === "Clutch Replacement") return "/clutch";
  if (service === "Shock Absorber Repair") return "/shock";
  return "/auto";
};

const signs = [
  "Slipping gears or unexpected gear changes",
  "Delayed response when shifting into drive or reverse",
  "Grinding, whining, or knocking noises",
  "Burnt smell or dark transmission fluid",
  "Transmission fluid leaks under the car",
  "Dashboard warning lights for gearbox faults",
];

const gearboxTypes = [
  {
    title: "Manual Gearboxes",
    text: "Manual gearboxes rely on the driver, clutch, and gear lever to select each gear. We inspect clutch condition, gear engagement, and internal wear before recommending repair or replacement.",
    image: "/imgi_4_gearbox-pg-manual-gearbox.webp",
  },
  {
    title: "Automatic Gearboxes",
    text: "Automatic gearboxes shift without driver input and depend on clean fluid, correct pressure, and healthy internal parts. TaylorMOT can diagnose faults and advise the right repair route.",
    image: "/imgi_5_gearbox-pg-automatic-gearbox.webp",
  },
];

const processSteps = [
  {
    title: "Submit Query",
    text: "Share the gearbox symptoms, car model, mileage, and registration.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We confirm the inspection plan and explain the repair cost clearly.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let Us Fix",
    text: "Our technicians repair, replace, or test the gearbox as required.",
    image: "/imgi_21_tyre-gallery-1-scaled.webp",
  },
  {
    title: "Relax And Drive",
    text: "Final checks help make sure the car shifts smoothly and safely.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const replacementSteps = [
  {
    title: "Gearbox Diagnosis",
    text: "We scan the vehicle, road-test where suitable, and inspect visible gearbox, fluid, and mounting condition.",
  },
  {
    title: "Transparent Estimate",
    text: "You receive a clear quote covering labour, parts, and any recommended gearbox repair or replacement work.",
  },
  {
    title: "Removal And Installation",
    text: "Faulty parts are removed carefully and the replacement or repaired gearbox is fitted to the correct standard.",
  },
  {
    title: "Post-Repair Testing",
    text: "We test gear selection, leaks, warning lights, and drive quality before handing the vehicle back.",
  },
];

const whyCards = [
  {
    title: "Quality Parts",
    text: "We use suitable replacement parts and explain the best option for your vehicle before work starts.",
    icon: ShieldCheck,
  },
  {
    title: "Cost-Saving Repairs",
    text: "Our team checks whether repair, service, or replacement is the most sensible route for the fault.",
    icon: Wrench,
  },
  {
    title: "Careful Testing",
    text: "Gear changes, warning lights, leaks, and drive feel are checked after repair for added confidence.",
    icon: ClipboardCheck,
  },
];

const galleryImages = [
  "/imgi_19_gearbox-repalcement-gallery-img-1.webp",
  "/imgi_20_gearbox-repalcement-gallery-img-4.webp",
  "/imgi_79_gearbox-repalcement-gallery-img-5-1024x768.webp",
  "/imgi_106_gearbox-replacement-cost-1-1024x538.webp",
  "/imgi_4_gearbox-pg-manual-gearbox.webp",
  "/imgi_5_gearbox-pg-automatic-gearbox.webp",
];

const faqItems = [
  {
    question: "What gearbox services does TaylorMOT offer?",
    answer:
      "We handle automatic gearbox repair, replacement, diagnostics, fluid-related checks, leak inspection, and advice for manual gearbox issues.",
  },
  {
    question: "How do I get an automatic gearbox repair quote?",
    answer:
      "Send your car registration, mileage, symptoms, and any warning light details. We will confirm the inspection route and quote before repair work begins.",
  },
  {
    question: "Can you repair both automatic and manual gearboxes?",
    answer:
      "Yes. We inspect both automatic and manual gearbox faults, then explain whether repair, replacement, or a related service is the best option.",
  },
  {
    question: "How long does gearbox repair or replacement take?",
    answer:
      "Timing depends on the vehicle, fault, parts availability, and whether the gearbox can be repaired or needs replacement. We confirm timing after diagnosis.",
  },
  {
    question: "Are there hidden charges?",
    answer:
      "No. We explain the diagnosis, labour, parts, and any extra recommendations clearly before carrying out approved work.",
  },
];

const relatedResources = [
  {
    title: "How Much Does Head Gasket Repair Cost?",
    text: "Find out what affects head gasket repair pricing and when urgent inspection is needed.",
    date: "August 7, 2025",
    image: "/imgi_29_How-Much-Does-a-Head-Gasket-Repair-Cost-banner-scaled.webp",
  },
  {
    title: "How Much Does An Auxiliary Belt Really Cost?",
    text: "A practical guide to auxiliary belt symptoms, prices, and replacement timing.",
    date: "August 6, 2025",
    image: "/imgi_119_auxiliary-belt-cost-uk-870x455.webp",
  },
  {
    title: "How Much Does Gearbox Replacement Cost?",
    text: "Understand common gearbox faults, pricing factors, and replacement options.",
    date: "November 30, 2024",
    image: "/imgi_106_gearbox-replacement-cost-1-1024x538.webp",
  },
];

export default function GearboxPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[500px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_158_Automatic-Gearbox-Replacement-hero-banner-image.webp"
          alt="Automatic gearbox repair service"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Automatic gearbox repair</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Automatic Gearbox Repair And Replacement In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Smooth shifting starts with accurate diagnosis, clear pricing, and careful gearbox repair from TaylorMOT technicians.
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
          <div className="relative mx-auto min-h-[380px] w-full max-w-xl">
            <Image src="/imgi_13_automatic-gearbox-content-img.webp" alt="Mechanic offering automatic gearbox repair" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Enhance Your Car Safety With <span className="text-red-600">Automatic Gearbox Repair</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT specialises in gearbox maintenance, automatic gearbox repair, and replacement support for drivers who want smooth, reliable gear changes.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Whether you need diagnosis, a gearbox swap, or advice on repair cost, our team explains the right solution before work begins.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_13_automatic-gearbox-content-img.webp" alt="Gearbox mechanic in London" fill className="object-cover" sizes="430px" />
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
              <Image src="/imgi_106_gearbox-replacement-cost-1-1024x538.webp" alt="Automatic gearbox repair close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Warning Signs <span className="text-red-600">You Need Gearbox Repair</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Gearbox faults often start small. Book an inspection if the car feels slow to respond, changes gear roughly, leaks fluid, or shows a transmission warning light.
            </p>
            <div className="mt-8 space-y-4">
              {signs.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-red-600" size={21} />
                  {item}
                </div>
              ))}
            </div>
            <div className="relative mt-8 min-h-[360px] overflow-hidden rounded-md">
              <Image src="/imgi_19_gearbox-repalcement-gallery-img-1.webp" alt="Gearbox parts being inspected" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Pick The <span className="text-red-600">Right Type</span> Of Gearbox
        </h2>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-2">
          {gearboxTypes.map((type, index) => (
            <article key={type.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className={index === 0 ? "relative h-72 bg-red-600" : "relative h-72 bg-neutral-50"}>
                <Image src={type.image} alt={type.title} fill className="object-contain p-7" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black text-red-600 sm:text-2xl">{type.title}</h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-6 text-neutral-800">{type.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-[34px]">How Do We Work?</h2>
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
          <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Quote request for automatic gearbox repair" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your gearbox issue</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Automatic gearbox repair details" placeholder="Tell us about gear changes, noises, leaks, warning lights, or driving symptoms" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Take A Look At Our <span className="text-red-600">Gearbox Repair Process</span>
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Our process is built around diagnosis first. We check the fault, explain the options, and complete approved repair or replacement work with careful testing.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {replacementSteps.map((step) => (
            <div key={step.title} className="flex items-start gap-4">
              <Timer className="mt-0.5 shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
              <div>
                <h3 className="text-base font-black">{step.title}</h3>
                <p className="mt-2 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Why TaylorMOT For <span className="text-red-600">Gearbox Repair?</span>
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
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="Automatic gearbox repair appointment" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable and well-versed</p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Repair Your Gearbox Now To Prevent Costlier Damage
            </h2>
            <Link href="/appointment" className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-white bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700">
              Book Appointment
              <CalendarCheck size={19} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-7 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div key={src} className="relative min-h-72 overflow-hidden rounded-md">
              <Image src={src} alt={`Automatic gearbox repair gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-center text-3xl font-black leading-tight sm:text-[34px]">Frequently Asked Questions</h2>
        <div className="mx-auto mt-9 max-w-[1500px] space-y-4">
          {faqItems.map((item, index) => (
            <details key={item.question} className="group border border-neutral-400" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-sm font-black text-neutral-800 group-open:text-red-600 sm:text-base">
                {item.question}
                <ChevronDown className="shrink-0 text-red-600 transition group-open:rotate-180" size={26} />
              </summary>
              <p className="border-t border-neutral-300 px-6 py-5 text-sm font-medium leading-7 text-neutral-800">{item.answer}</p>
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

      <Link href="https://wa.me/441784240000" className="fixed bottom-8 right-8 z-40 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl">
        <Phone size={34} />
        <span className="sr-only">Whatsapp</span>
      </Link>
    </main>
  );
}
