import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Droplets,
  Gauge,
  Phone,
  ShieldCheck,
} from "lucide-react";

const processSteps = [
  {
    title: "Share Details",
    text: "Tell us your vehicle details and any gear-change symptoms you have noticed.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We confirm the right transmission-fluid service before any work begins.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Drain And Refill",
    text: "Old fluid is removed where required and fresh fluid is added to specification.",
    image: "/imgi_14_transmission-fluid-change-near-me-london-motor-sports.webp",
  },
  {
    title: "Road-Ready Check",
    text: "We check operation, visible leaks, and service notes before handover.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "Gear changes feel rough, delayed, or inconsistent",
  "Transmission fluid looks dark or smells burnt",
  "Fluid level drops or visible marks appear under the car",
  "Whining, humming, or clunking appears while driving",
  "The gearbox feels hotter than usual in traffic",
  "Service mileage or manufacturer interval is due",
];

const fluidServices = [
  "Engine Oil Change",
  "Brake Fluid Change",
  "Engine Coolant Replacement",
  "Transmission Fluid Change",
  "Power Steering Fluid Change",
  "Fuel Injector Replacement",
  "Engine Oil Leakage",
  "Car Aircon Regas",
];

const serviceSteps = [
  "Transmission-fluid condition and level checked first",
  "Correct fluid specification confirmed for the vehicle",
  "Old fluid drained or exchanged where the service allows",
  "Fresh fluid refilled to the recommended level",
  "Gear selection, visible leaks, and road-readiness checked",
];

const affectedParts = [
  {
    title: "Gearbox",
    text: "Clean fluid helps reduce friction and supports smoother gear selection.",
    image: "/imgi_13_lms-key-takeaways-img-transmission-fluid-change-pg.webp",
  },
  {
    title: "Fluid Lines",
    text: "Leaks, loose fittings, or damaged lines can reduce pressure and fluid level.",
    image: "/imgi_5_transmission-fluid-pg-damaged-brake-lines.webp",
  },
  {
    title: "Hydraulic Control",
    text: "Contaminated fluid can affect hydraulic response and shift quality.",
    image: "/imgi_6_transmission-fluid-pg-faulty-master-cylinder.webp",
  },
];

const whyCards = [
  {
    title: "Correct Fluid",
    text: "We match the transmission fluid to the vehicle specification for proper protection.",
    icon: Droplets,
  },
  {
    title: "Careful Checks",
    text: "Our technicians check fluid condition, levels, leaks, and service suitability.",
    icon: ClipboardCheck,
  },
  {
    title: "Clear Advice",
    text: "If a gearbox fault needs diagnosis, we explain it before extra work starts.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "When should transmission fluid be changed?",
    answer:
      "The interval depends on the vehicle, gearbox type, mileage, and manufacturer guidance. Rough shifts, dark fluid, or overdue service history are good reasons to book a check.",
  },
  {
    question: "Can old transmission fluid cause gear problems?",
    answer:
      "Yes. Old or contaminated fluid can reduce lubrication and hydraulic performance, which may lead to delayed shifts, heat, noise, or extra wear.",
  },
  {
    question: "Do all vehicles use the same transmission fluid?",
    answer:
      "No. Automatic, manual, CVT, and dual-clutch gearboxes can require different fluids. We check the correct specification before refilling.",
  },
  {
    question: "How much does a transmission-fluid change cost?",
    answer:
      "Pricing depends on the vehicle, gearbox type, fluid quantity, and whether a drain, refill, or fuller exchange is suitable. We confirm the quote before work begins.",
  },
];

const serviceHref = (service: string) => {
  if (service === "Engine Oil Change") return "/oil-change";
  if (service === "Brake Fluid Change") return "/brake-fluid";
  if (service === "Engine Coolant Replacement") return "/coolant";
  if (service === "Transmission Fluid Change") return "/fluid-change";
  if (service === "Power Steering Fluid Change") return "/steering-fluid";
  if (service === "Fuel Injector Replacement") return "/injector";
  if (service === "Engine Oil Leakage" || service === "Engine Oil Leakage Repairs") return "/oil-leakage";
  return "/auto";
};

export default function TransmissionFluidChangePage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[560px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_108_Transmission-Fluid-Change-hero-banner-image.webp"
          alt="Transmission fluid service in a workshop"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[560px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Transmission fluid service
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[44px]">
            Transmission Fluid Change For Smoother Gear Shifts
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Keep your gearbox protected with the correct fluid, a clean refill process, and practical checks for leaks, heat, and shifting concerns.
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
          <div className="relative mx-auto min-h-[390px] w-full max-w-xl">
            <Image
              src="/imgi_14_transmission-fluid-change-near-me-london-motor-sports.webp"
              alt="Technician preparing transmission-fluid service"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 90vw, 34vw"
            />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[34px]">
              Maintain Gearbox Performance With The Right Fluid
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Transmission fluid lubricates moving parts, helps manage heat, and supports smooth gear selection. Over time it can become dirty, oxidised, or low, which may affect the way your vehicle drives.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks the fluid condition, confirms the correct specification, and explains the safest service route for your gearbox before work starts.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-[34px]">How It Works</h2>
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
              <p className="mx-auto mt-3 max-w-xs text-sm font-medium leading-6 text-neutral-800">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-68">
                <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Workshop service advisor" fill className="object-cover" sizes="430px" />
              </div>
              <div className="px-6 py-7">
                <h3 className="text-xl font-black">Ask About Gearbox Fluid</h3>
                <div className="mt-5 rounded-md bg-white px-6 py-5 text-neutral-950">
                  <p className="text-base font-black text-red-600">Call Now For A Quote</p>
                  <p className="mt-3 text-2xl font-black">+44 1784 240000</p>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-neutral-100 px-6 py-7">
              <h3 className="text-center text-2xl font-black text-red-600">Oil And Fluid Services</h3>
              <div className="mt-6 space-y-3">
                {fluidServices.map((service) => (
                  <Link key={service} href={serviceHref(service)} className="flex items-center gap-4 rounded-md bg-white px-5 py-3.5 text-sm font-semibold transition hover:text-red-600 sm:text-base">
                    <Gauge className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={23} />
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <h2 className="text-3xl font-black leading-tight text-red-600 sm:text-[34px]">
              When Does Transmission Fluid Need Replacing?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              The right interval depends on the gearbox type, driving conditions, mileage, and manufacturer schedule. Stop-start traffic, towing, heat, and high mileage can make fluid condition more important.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              If the vehicle hesitates, shifts harshly, or shows signs of leaking fluid, arrange a check before the issue becomes more expensive.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {warningSigns.map((sign) => (
                <div key={sign} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={21} />
                  {sign}
                </div>
              ))}
            </div>
            <div className="relative mt-9 min-h-[400px] overflow-hidden rounded-md">
              <Image src="/imgi_13_lms-key-takeaways-img-transmission-fluid-change-pg.webp" alt="Transmission fluid service close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-[34px]">
          Parts Affected By Poor Transmission Fluid
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Transmission fluid supports more than lubrication. It also helps manage heat, pressure, and internal wear inside the gearbox system.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {affectedParts.map((part) => (
            <article key={part.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className="relative h-64 bg-red-600">
                <Image src={part.image} alt={part.title} fill className="object-contain p-7" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black text-red-600 sm:text-2xl">{part.title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-6 text-neutral-800">
                  {part.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-3xl font-black leading-tight text-red-600 sm:text-[34px]">
          What Is Included In A Transmission-Fluid Change?
        </h2>
        <p className="mt-5 max-w-[1650px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Our service focuses on using the correct fluid, handling the system cleanly, and checking for visible issues that could affect gearbox performance.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {serviceSteps.map((item) => (
            <div key={item} className="flex items-center gap-4 text-sm font-semibold sm:text-[15px]">
              <Droplets className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-3xl font-black leading-tight text-red-600 sm:text-[34px]">
          How Much Does A Transmission-Fluid Change Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Pricing depends on the gearbox type, fluid specification, filter requirements, and whether the vehicle needs a simple drain and refill or a more detailed service.
        </p>
        <p className="mt-4 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Send your registration or vehicle details and our team will advise the right transmission-fluid option for your car.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-[34px]">Why Choose TaylorMOT For Transmission Fluid Service?</h2>
        <div className="mx-auto mt-10 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {whyCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-md border border-neutral-300 px-7 py-10">
                <Icon className="mx-auto text-red-600" size={62} strokeWidth={1.7} />
                <h3 className="mt-6 text-xl font-black text-red-600 sm:text-2xl">{card.title}</h3>
                <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-6 text-neutral-800">
                  {card.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[520px]">
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Transmission fluid quote" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about the service needed</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Service needed" placeholder="Tell us about gear changes, noises, leaks, mileage, or warning lights" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
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
              <p className="border-t border-neutral-300 px-6 py-5 text-sm font-medium leading-7 text-neutral-800">
                {item.answer}
              </p>
            </details>
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
