import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Droplets,
  Gauge,
  Phone,
  ShieldCheck,
  Timer,
} from "lucide-react";

const processSteps = [
  {
    title: "Send Details",
    text: "Share your vehicle information and the brake symptoms you have noticed.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We confirm the likely service route and explain the brake-fluid change clearly.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Flush And Refill",
    text: "Old fluid is removed and fresh brake fluid is added to the correct specification.",
    image: "/imgi_11_brake-fluid-change-pg-content-img-1.webp",
  },
  {
    title: "Pedal Check",
    text: "The system is checked for firm pedal feel, visible leaks, and safe operation.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "Brake pedal feels soft, low, or spongy",
  "Brake warning light appears on the dashboard",
  "Fluid level keeps dropping in the reservoir",
  "Braking response feels less sharp than usual",
  "Brake fluid looks dark or contaminated",
  "The service interval is due or overdue",
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
  "Brake-fluid condition and level checked before work starts",
  "Old fluid removed from the reservoir and hydraulic lines",
  "Correct fluid specification refilled for the vehicle",
  "System bled to remove trapped air where required",
  "Pedal feel and visible leak points checked before handover",
];

const whyCards = [
  {
    title: "Focused Safety Check",
    text: "We inspect the brake-fluid condition and related warning signs before recommending replacement.",
    icon: ShieldCheck,
  },
  {
    title: "Correct Fluid",
    text: "The replacement fluid is matched to the vehicle specification for reliable brake performance.",
    icon: Droplets,
  },
  {
    title: "Efficient Visit",
    text: "Most brake-fluid services are handled promptly, with clear advice if extra brake work is needed.",
    icon: Timer,
  },
];

const faqItems = [
  {
    question: "Is brake-fluid replacement necessary?",
    answer:
      "Yes. Brake fluid absorbs moisture over time, which can reduce braking performance and make the system less reliable under heat and pressure.",
  },
  {
    question: "How often should brake fluid be changed?",
    answer:
      "Many vehicles require brake-fluid replacement around every two years, but the exact timing depends on the manufacturer guidance and fluid condition.",
  },
  {
    question: "Can I drive with old brake fluid?",
    answer:
      "It is not wise to ignore old or contaminated brake fluid. If the pedal feels soft or a warning light appears, book an inspection as soon as possible.",
  },
  {
    question: "How long does a brake-fluid change take?",
    answer:
      "A straightforward brake-fluid change is usually a short workshop visit, although extra time may be needed if leaks, seized bleed points, or other brake faults are found.",
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

export default function BrakeFluidChangePage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[620px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_93_Brake-Fluid-Change-hero-banner-image.webp"
          alt="Brake fluid being poured into a vehicle reservoir"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[620px] max-w-[1800px] flex-col justify-center px-5 py-16 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-red-400">
            Brake fluid replacement
          </p>
          <h1 className="mt-5 max-w-5xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Brake Fluid Change For Confident Stopping Power
          </h1>
          <p className="mt-6 max-w-3xl text-sm font-semibold leading-7 text-white/90 sm:text-base">
            Keep your braking system responsive with fresh fluid, careful bleeding, and practical safety checks from TaylorMOT technicians.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="tel:+441784240000" className="inline-flex min-w-48 items-center justify-center gap-2 rounded-md border-2 border-white bg-white px-7 py-3 text-sm font-black uppercase text-black transition hover:bg-transparent hover:text-white">
              <Phone size={18} />
              Call Now
            </Link>
            <Link href="/appointment" className="inline-flex min-w-48 items-center justify-center gap-2 rounded-md bg-red-600 px-7 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700">
              Book Now
              <CalendarCheck size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto min-h-[430px] w-full max-w-xl">
            <Image
              src="/imgi_11_engine-oil-change-content-img.webp"
              alt="Mechanic ready for brake-fluid service"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 90vw, 34vw"
            />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
              Timely Brake Fluid Care For A Safer Pedal Feel
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-base">
              Brake fluid transfers pedal pressure through the hydraulic system. As it ages, moisture and contamination can lower its boiling point and reduce braking consistency, especially in traffic or under heavier braking.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-base">
              TaylorMOT checks the fluid condition, replaces it with the correct grade, and helps identify any brake issue that may need attention before it becomes a safety concern.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl">How It Works</h2>
        <Link href="/appointment" className="mx-auto mt-3 inline-flex min-w-72 justify-center rounded-none bg-red-600 px-8 py-2 text-sm font-black uppercase text-white transition hover:bg-red-700 sm:text-base">
          Book For Appointment
        </Link>
        <div className="mx-auto mt-14 grid max-w-[1800px] gap-10 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.title} className="px-4">
              <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full">
                <Image src={step.image} alt={step.title} fill className="object-cover" sizes="224px" />
              </div>
              <h3 className="mt-7 text-2xl font-black leading-tight text-red-600">{step.title}</h3>
              <p className="mx-auto mt-4 max-w-xs text-sm font-medium leading-7 text-neutral-800">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[470px_1fr]">
          <aside className="space-y-8">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Workshop service advisor" fill className="object-cover" sizes="470px" />
              </div>
              <div className="px-7 py-8">
                <h3 className="text-2xl font-black">Talk To A Brake Specialist</h3>
                <div className="mt-6 rounded-md bg-white px-7 py-6 text-neutral-950">
                  <p className="text-lg font-black text-red-600">Call Now For A Quote</p>
                  <p className="mt-4 text-2xl font-black">+44 1784 240000</p>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-neutral-100 px-7 py-8">
              <h3 className="text-center text-2xl font-black text-red-600">Oil And Fluid Services</h3>
              <div className="mt-7 space-y-4">
                {fluidServices.map((service) => (
                  <Link key={service} href={serviceHref(service)} className="flex items-center gap-4 rounded-md bg-white px-5 py-4 text-base font-semibold transition hover:text-red-600">
                    <Gauge className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={24} />
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <h2 className="text-3xl font-black leading-tight text-red-600 sm:text-4xl">
              When Does Brake Fluid Need Replacing?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-base">
              The best interval depends on the vehicle and the manufacturer schedule. Many cars need brake-fluid replacement around every two years, but symptoms can appear sooner if the fluid is contaminated or there is a leak.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-base">
              If braking feels different, the reservoir level drops, or a warning appears, arrange a check before continuing to rely on the vehicle every day.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {warningSigns.map((sign) => (
                <div key={sign} className="flex items-start gap-3 text-sm font-semibold leading-7 sm:text-base">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={22} />
                  {sign}
                </div>
              ))}
            </div>
            <div className="relative mt-10 min-h-[430px] overflow-hidden rounded-md">
              <Image src="/imgi_11_brake-fluid-change-pg-content-img-1.webp" alt="Brake fluid service close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-10">
        <h2 className="text-3xl font-black leading-tight text-red-600 sm:text-4xl">
          What Happens During A Brake Fluid Change?
        </h2>
        <p className="mt-5 max-w-[1650px] text-sm font-medium leading-7 text-neutral-800 sm:text-base">
          Brake-fluid replacement is a precision service because the hydraulic system must remain clean and free from trapped air. Our process is built around clear checks, correct fluid, and a firm pedal feel.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {serviceSteps.map((item) => (
            <div key={item} className="flex items-center gap-4 text-sm font-semibold sm:text-base">
              <Droplets className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={28} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 lg:px-10">
        <h2 className="text-3xl font-black leading-tight text-red-600 sm:text-4xl">
          How Much Does A Brake Fluid Change Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-base">
          The price depends on the vehicle, fluid specification, and whether the brake system needs extra investigation. We confirm the service scope before work starts, so the cost is clear.
        </p>
        <p className="mt-4 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-base">
          Share your registration or vehicle details and our team will advise the right brake-fluid option for your car.
        </p>
      </section>

      <section className="px-5 py-14 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl">Why Choose TaylorMOT For Brake Fluid Service?</h2>
        <div className="mx-auto mt-12 grid max-w-[1800px] gap-8 md:grid-cols-3">
          {whyCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-md border border-neutral-300 px-8 py-12">
                <Icon className="mx-auto text-red-600" size={70} strokeWidth={1.7} />
                <h3 className="mt-7 text-2xl font-black text-red-600">{card.title}</h3>
                <p className="mx-auto mt-5 max-w-md text-sm font-medium leading-7 text-neutral-800 sm:text-base">
                  {card.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-14 lg:px-10">
        <h2 className="text-center text-3xl font-black leading-tight sm:text-4xl">Frequently Asked Questions</h2>
        <div className="mx-auto mt-10 max-w-[1500px] space-y-5">
          {faqItems.map((item, index) => (
            <details key={item.question} className="group border border-neutral-400" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 text-base font-black text-neutral-800 group-open:text-red-600 sm:text-lg">
                {item.question}
                <ChevronDown className="shrink-0 text-red-600 transition group-open:rotate-180" size={28} />
              </summary>
              <p className="border-t border-neutral-300 px-7 py-5 text-sm font-medium leading-7 text-neutral-800 sm:text-base">
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
