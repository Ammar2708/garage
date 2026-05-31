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
  ScanLine,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    title: "Quick Diagnosis",
    text: "We inspect the vehicle and trace the source of the oil leak.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Clear Quote",
    text: "You get practical repair advice before replacement work begins.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Expert Repair",
    text: "Faulty seals, gaskets, plugs, or oil-pan parts are repaired where needed.",
    image: "/imgi_7_car-engine-oil-leakage-repair-by.webp",
  },
  {
    title: "Leak Check",
    text: "We test the repair and check the oil level before handover.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "Oil spots or puddles appear under the car",
  "Burning oil smell after driving",
  "Oil level drops between services",
  "Smoke appears from the engine bay or exhaust",
  "Oil warning light appears on the dashboard",
  "Engine bay, sump, or undertray looks wet with oil",
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
  "Oil level and visible leak areas inspected first",
  "Undertray, oil pan, filter housing, and drain plug checked",
  "Valve-cover gasket, seals, and pressure sensor checked where accessible",
  "Faulty gasket, seal, plug, or damaged part repaired or replaced",
  "Oil level topped to specification and the repair checked for leaks",
];

const leakSources = [
  {
    title: "Engine Oil Pan",
    text: "Impact damage, loose bolts, worn gaskets, or a damaged drain plug can allow oil to seep from the lower engine area.",
    image: "/imgi_4_engine-oil-leak-repair-pg-engines-oil-pan.webp",
  },
  {
    title: "Valve Cover Gasket",
    text: "A worn valve-cover gasket can leak oil down the engine, often creating a burning smell or visible wet patches.",
    image: "/imgi_5_engine-oil-leak-repair-pg-valve-cover-gasket.webp",
  },
  {
    title: "Camshaft And Crankshaft Seals",
    text: "Failed rotating seals can create persistent leaks and should be checked before oil loss leads to engine damage.",
    image: "/imgi_30_engine-oil-leak-repair-pg-camshaft-and-crankshaft-seals-300x225.webp",
  },
];

const whyCards = [
  {
    title: "Accurate Leak Tracing",
    text: "We look for the source instead of guessing, so the repair targets the real problem.",
    icon: ScanLine,
  },
  {
    title: "Quality Repairs",
    text: "Our technicians repair common leak points with suitable gaskets, seals, plugs, and parts.",
    icon: Wrench,
  },
  {
    title: "Peace Of Mind",
    text: "We check the oil level and visible leak area after repair before returning the vehicle.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "Is an engine oil leak a problem?",
    answer:
      "Yes. Oil leaks can reduce lubrication, create burning smells, damage nearby parts, and lead to costly engine damage if ignored.",
  },
  {
    question: "Is it OK to drive a car with an oil leak?",
    answer:
      "It is best to book a check quickly. A small leak can become worse, and driving with low oil can damage the engine.",
  },
  {
    question: "What causes an oil leak?",
    answer:
      "Common causes include worn gaskets, damaged seals, loose drain plugs, oil-filter issues, cracked oil pans, and faulty oil-pressure sensors.",
  },
  {
    question: "Can an oil leak destroy an engine?",
    answer:
      "Yes. If enough oil is lost, the engine may run with poor lubrication, overheat, seize, or suffer serious internal wear.",
  },
  {
    question: "Does an oil leak increase fuel consumption?",
    answer:
      "It can. Oil leaks may increase friction, heat, and engine strain, which can affect efficiency and performance.",
  },
  {
    question: "How much oil leakage is too much?",
    answer:
      "Any visible leak should be checked. A steady drip, oil smell, warning light, or falling oil level needs prompt attention.",
  },
  {
    question: "Can an oil leak cause a loss of power?",
    answer:
      "Low oil or oil contamination can increase engine friction and heat, which may reduce performance and reliability.",
  },
  {
    question: "What colour is the oil leak?",
    answer:
      "Engine oil is usually amber, brown, or black. If the fluid is red, green, pink, or clear, it may be a different vehicle fluid.",
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

export default function OilLeakageRepairPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[540px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_86_Oil-Leakage-Repair.webp"
          alt="Oil leakage repair under a vehicle"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[540px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Engine oil leakage repairs
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Stop The Drip With Professional Oil Leakage Repair
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Protect your engine, driveway, and safety with careful oil-leak diagnosis, gasket checks, seal repairs, and clear workshop advice from TaylorMOT.
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
            <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Technician ready for oil leakage repair" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Trustworthy Engine Care Through Oil Leakage Repair
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Engine oil lubricates moving parts and helps manage heat. When oil leaks, the engine can run low on protection, nearby rubber parts can deteriorate, and repair costs can rise quickly.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks common leak points, identifies the likely source, and repairs the affected gasket, seal, plug, or part where needed.
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
            <div className="relative min-h-[360px] overflow-hidden rounded-md">
              <Image src="/imgi_7_car-engine-oil-leakage-repair-by.webp" alt="Engine oil leak close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Common Sources Of Engine Oil Leaks
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Oil leaks can come from a simple drain plug, a filter seal, a pressure sensor, a gasket, or a worn rotating seal. Finding the correct source is the key to a lasting repair.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {warningSigns.map((sign) => (
                <div key={sign} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={21} />
                  {sign}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
          Replace Faulty Components To Prevent Engine Oil Leakage
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Contact TaylorMOT to repair the faulty components that commonly cause oil leaks and protect your engine from avoidable damage.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {leakSources.map((part) => (
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
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          What We Do For Engine Oil Leak Repair
        </h2>
        <p className="mt-5 max-w-[1650px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Our service focuses on the likely leak source, correct replacement parts, and practical checks before the vehicle leaves the workshop.
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
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          Engine Oil Leak Prevention
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Regular oil changes, correct oil grade, clean filter fitting, and timely inspections help reduce the chance of repeated oil leaks.
        </p>
        <div className="mt-8 grid gap-5">
          {[
            "Use the correct oil grade listed for your vehicle.",
            "Avoid overfilling the engine oil level.",
            "Replace oil filters cleanly with the old seal removed.",
            "Book inspections if the oil level drops or a wet patch appears.",
            "Repair worn gaskets and seals before a slow leak becomes a major fault.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-4 text-sm font-semibold leading-6 sm:text-[15px]">
              <Droplets className="mt-0.5 shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">Why TaylorMOT For Engine Oil Leakage Repairs?</h2>
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
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Oil leakage repair quote" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
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
            <textarea aria-label="Service needed" placeholder="Tell us about oil spots, warning lights, burning smell, oil level, or visible leaks" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
