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
  Wrench,
} from "lucide-react";

const processSteps = [
  {
    title: "Share Details",
    text: "Tell us your vehicle details and any steering symptoms you have noticed.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We confirm the right power-steering fluid service before work begins.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Replace Fluid",
    text: "Old fluid is removed where suitable and fresh fluid is refilled to spec.",
    image: "/imgi_11_power-steering-fluid-replacement-content-img.webp",
  },
  {
    title: "Steering Check",
    text: "We check steering feel, visible leaks, and final fluid level before handover.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "Steering feels heavy, stiff, or inconsistent",
  "Whining or groaning noise appears while turning",
  "Fluid looks dark, foamy, or contaminated",
  "Red or amber fluid marks appear under the car",
  "The steering wheel judders at low speed",
  "The reservoir level keeps dropping after top-up",
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
  "Power-steering fluid level and condition checked first",
  "Reservoir, hoses, pump, and visible seals inspected for leaks",
  "Old fluid removed where the service route allows",
  "Correct power-steering fluid refilled to the recommended level",
  "Steering operation, noise, and visible leaks checked after service",
];

const affectedParts = [
  {
    title: "Steering Pump",
    text: "Low or dirty fluid can make the pump noisy and reduce hydraulic assistance.",
    image: "/imgi_11_power-steering-fluid-replacement-content-img.webp",
  },
  {
    title: "Hoses And Seals",
    text: "Leaks around pipes and seals can lower pressure and leave the steering heavy.",
    image: "/imgi_4_Loose_Steering.webp",
  },
  {
    title: "Steering Rack",
    text: "Clean fluid helps protect the steering rack from wear, heat, and contamination.",
    image: "/imgi_93_Power-Steering-Fluid-Replacement-hero-banner-image-e1719318987564.webp",
  },
];

const whyCards = [
  {
    title: "Fair Pricing",
    text: "We confirm the service scope clearly, so you know what is being done before work starts.",
    icon: ClipboardCheck,
  },
  {
    title: "Quick Replacement",
    text: "Most straightforward power-steering fluid services can be handled promptly in our workshop.",
    icon: Wrench,
  },
  {
    title: "Careful Checks",
    text: "Our technicians check for leaks, noise, and steering response before handing the vehicle back.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "What are the signs of low power-steering fluid?",
    answer:
      "Heavy steering, whining noises while turning, juddering at low speed, fluid stains, or a dropping reservoir level can all point to low or contaminated steering fluid.",
  },
  {
    question: "Does it matter what steering fluid you use?",
    answer:
      "Yes. Vehicles can require different power-steering fluid specifications. Using the wrong fluid may affect seals, steering feel, and long-term reliability.",
  },
  {
    question: "Is it OK to drive with low power-steering fluid?",
    answer:
      "It is best to avoid driving with low fluid. The steering may become harder to control and the pump can be damaged if the system runs low for too long.",
  },
  {
    question: "How often do you need to change steering fluid?",
    answer:
      "The interval depends on the vehicle and usage. Many cars benefit from inspection during routine servicing, especially if the fluid is dark, noisy, leaking, or the steering feels heavy.",
  },
  {
    question: "How much does replacing power-steering fluid cost?",
    answer:
      "The price depends on the vehicle, fluid specification, and whether leaks or extra repairs are found. Share your registration and we will confirm the right quote.",
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

export default function PowerSteeringFluidPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[540px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_93_Power-Steering-Fluid-Replacement-hero-banner-image-e1719318987564.webp"
          alt="Power steering fluid replacement"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[540px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Power steering fluid change
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Maintain Smooth Steering With Fresh Power-Steering Fluid
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Keep steering light, responsive, and reliable with fluid checks, clean replacement, and practical leak inspection from TaylorMOT technicians.
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
              src="/imgi_11_power-steering-fluid-replacement-content-img.webp"
              alt="Technician ready for power-steering fluid service"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 90vw, 34vw"
            />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Turn The Wheel Easily With Timely Fluid Replacement
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Power-steering fluid helps transfer hydraulic force through the steering system. When it becomes old, low, or contaminated, the wheel can feel heavy and the pump may become noisy.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks the fluid condition, looks for obvious leaks, and replaces the fluid with the correct specification for safer, smoother steering.
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
              When Do I Need To Replace Power-Steering Fluid?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A power-steering fluid change is recommended when the fluid becomes contaminated, overheats, leaks, or breaks down with age. Early checks can prevent heavy steering and avoid unnecessary pump wear.
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
              <Image src="/imgi_93_Power-Steering-Fluid-Replacement-hero-banner-image-e1719318987564.webp" alt="Power steering fluid reservoir" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
          Parts Affected By Poor Power-Steering Fluid
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Steering fluid protects the system from heat, wear, and contamination. If it drops too low or becomes dirty, several components can suffer.
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
          How Does TaylorMOT Change Power-Steering Fluid?
        </h2>
        <p className="mt-5 max-w-[1650px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Our service focuses on clean handling, correct fluid, and sensible checks around the steering system.
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
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          How Much Does Power-Steering Fluid Change Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Pricing depends on the vehicle, the required fluid specification, and whether leaks or related repairs are found during inspection.
        </p>
        <p className="mt-4 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Share your registration or vehicle details and our team will confirm the right power-steering fluid option for your car.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">Why Choose TaylorMOT For Power-Steering Fluid Replacement?</h2>
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
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Power-steering fluid quote" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
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
            <textarea aria-label="Service needed" placeholder="Tell us about heavy steering, noises, leaks, mileage, or warning lights" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
