import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Gauge,
  Phone,
  ScanLine,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    title: "Diagnosis",
    text: "We scan the vehicle and confirm whether the injector is faulty.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Preparation",
    text: "The fuel system is made safe before any injector work begins.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Replacement",
    text: "Faulty injectors are removed and new seals or parts are fitted.",
    image: "/imgi_11_fuel-injector-replacement-content-body-img.webp",
  },
  {
    title: "Testing",
    text: "We test for leaks, coding needs, idle quality, and road-readiness.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "Engine misfires or feels rough at idle",
  "Acceleration feels weak, delayed, or uneven",
  "Fuel economy drops without a clear reason",
  "Strong fuel smell around the car or engine bay",
  "Engine warning light appears on the dashboard",
  "Smoke, failed emissions, or poor combustion symptoms appear",
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
  "Diagnostic scan and symptom check completed first",
  "Fuel pressure and injector-related faults reviewed",
  "Faulty injector removed carefully with seals replaced where needed",
  "New or repaired injector fitted to the correct specification",
  "Leak check, idle check, and coding or adaptation completed where required",
];

const affectedParts = [
  {
    title: "Fuel Injector",
    text: "A faulty injector can over-fuel, under-fuel, leak, or disturb combustion.",
    image: "/imgi_11_fuel-injector-replacement-content-body-img.webp",
  },
  {
    title: "Engine Performance",
    text: "Misfires, rough idle, and poor acceleration often start with poor fuel delivery.",
    image: "/imgi_93_Fuel-Injector-Replacement-hero-banner-image.jpg",
  },
  {
    title: "Emissions System",
    text: "Incorrect fuelling can increase smoke, emissions, and catalytic-converter strain.",
    image: "/imgi_140_aut-repair-car-oil-change-1-1.webp",
  },
];

const whyCards = [
  {
    title: "Clear Diagnosis",
    text: "We confirm the likely injector fault before recommending replacement.",
    icon: ScanLine,
  },
  {
    title: "Same-Day Service",
    text: "Many injector checks and straightforward replacements can be handled promptly.",
    icon: Wrench,
  },
  {
    title: "No Extras",
    text: "You get clear advice and a quote before extra repair work is carried out.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "What are the symptoms of dirty fuel injectors?",
    answer:
      "Common signs include rough idle, misfires, poor acceleration, higher fuel use, fuel smell, smoke, or an engine warning light.",
  },
  {
    question: "When should fuel injectors be replaced?",
    answer:
      "Injectors should be replaced when cleaning or repair is not enough, or when testing confirms a leaking, blocked, damaged, or electrically faulty injector.",
  },
  {
    question: "Can a fuel injector be cleaned?",
    answer:
      "Sometimes. If the injector is only dirty, cleaning may help. If it is cracked, leaking, electrically failed, or badly worn, replacement is usually the better option.",
  },
  {
    question: "Can you drive with bad injectors?",
    answer:
      "It is not recommended for long. Bad injectors can cause misfires, poor performance, high fuel use, emissions issues, and possible damage to other engine parts.",
  },
  {
    question: "Should I replace all injectors?",
    answer:
      "Not always. Some vehicles only need one faulty injector replaced, while others may benefit from a matched set. We advise after diagnosis.",
  },
  {
    question: "How serious is a fuel injector problem?",
    answer:
      "It can become serious if ignored. Poor fuelling can affect drivability, emissions, fuel economy, and long-term engine health.",
  },
  {
    question: "Do fuel injectors affect acceleration?",
    answer:
      "Yes. A blocked or failing injector can reduce fuel delivery and cause hesitation, poor throttle response, or uneven acceleration.",
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

export default function FuelInjectorReplacementPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[540px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_93_Fuel-Injector-Replacement-hero-banner-image.jpg"
          alt="Fuel injector replacement service"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[540px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Fuel injector replacement
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Expert Fuel Injector Replacement And Cleaning Services
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Restore smooth running, cleaner combustion, and reliable fuel delivery with professional injector diagnosis, repair, and replacement from TaylorMOT.
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
            <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Technician ready for injector service" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              What Is A <span className="text-red-600">Fuel Injector?</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A fuel injector delivers a precise amount of fuel into the engine for efficient combustion. When an injector becomes clogged, worn, or electrically faulty, the engine can misfire, idle roughly, or lose power.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks the fault properly, explains whether cleaning or replacement is suitable, and fits the right injector parts for your vehicle.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-[32px]">How It Works</h2>
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
                <h3 className="text-xl font-black">Best Car Mechanics In London</h3>
                <div className="mt-5 rounded-md bg-white px-6 py-5 text-neutral-950">
                  <p className="text-base font-black text-red-600">Call Now And Get A Free Quote</p>
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
            <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
              Why Is Fuel Injector Replacement Important?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A failing injector can disrupt the air-fuel balance, increase emissions, waste fuel, and create rough running. Timely diagnosis helps protect engine performance and repair costs.
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
              <Image src="/imgi_11_fuel-injector-replacement-content-body-img.webp" alt="Fuel injector being replaced" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
          Parts Affected By Faulty Fuel Injectors
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Injector faults can affect more than fuel delivery. Poor combustion can place extra strain on the engine and emissions system.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {affectedParts.map((part) => (
            <article key={part.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className="relative h-64 bg-red-600">
                <Image src={part.image} alt={part.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          What Is Included In Fuel Injector Replacement?
        </h2>
        <p className="mt-5 max-w-[1650px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Our process is built around confirming the fault, fitting parts carefully, and checking the engine runs correctly after the work.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {serviceSteps.map((item) => (
            <div key={item} className="flex items-center gap-4 text-sm font-semibold sm:text-[15px]">
              <ClipboardCheck className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="relative mx-auto min-h-[420px] max-w-[1500px] overflow-hidden rounded-md">
          <Image src="/imgi_11_fuel-injector-replacement-content-body-img.webp" alt="Injector replacement close up" fill className="object-cover" sizes="100vw" />
        </div>
        <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          How Much Does Fuel Injector Replacement Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          The cost depends on the vehicle, injector type, parts availability, coding requirements, and whether one injector or several need attention.
        </p>
        <p className="mt-4 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Share your registration and symptoms so our team can advise the right injector replacement option.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">Why TaylorMOT For Fuel Injector Repairs And Replacement?</h2>
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
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Fuel injector quote" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
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
            <textarea aria-label="Service needed" placeholder="Tell us about misfires, warning lights, fuel smell, smoke, or poor acceleration" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
