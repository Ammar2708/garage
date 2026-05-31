import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  Car,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Gauge,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
  Wallet,
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
];

const processSteps = [
  {
    title: "Send Details",
    text: "Share your registration and the brake symptoms you have noticed.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We confirm likely parts, labour, timing, and the best repair route.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Brake Inspection",
    text: "Pads, discs, fluid, calipers, and wear levels are checked carefully.",
    image: "/imgi_5_Brake-pad-replacement-pg-first-section-img.webp",
  },
  {
    title: "Drive Away",
    text: "Your braking system is checked before the car returns to the road.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const brakeComponents = [
  {
    title: "Brake Pads Replacement",
    text: "Worn brake pads reduce friction and can increase stopping distance. We replace them before they damage discs or affect safe braking.",
    image: "/imgi_47_brake-pad-pg_metallic-break-pad-300x225.webp",
  },
  {
    title: "Brake Discs Replacement",
    text: "Warped or heavily worn discs can cause vibration, noise, and poor braking. Timely replacement restores smoother stopping power.",
    image: "/imgi_9_Brake-replacement-pg-3img-sect-2.webp",
  },
  {
    title: "Brake Fluid Replacement",
    text: "Brake fluid should stay clean and effective so the hydraulic system can deliver consistent pressure when you press the pedal.",
    image: "/imgi_11_brake-fluid-change-pg-content-img-1.webp",
  },
];

const signs = [
  "Squeaking, grinding, or scraping noise when braking",
  "Soft brake pedal or longer pedal travel than usual",
  "Vehicle pulling to one side when slowing down",
  "Vibration through the steering wheel or brake pedal",
  "Dashboard brake warning light or visible low fluid level",
];

const whyCards = [
  {
    title: "Transparent Rates",
    text: "You receive clear pricing for brake pads, discs, fluid, parts, and labour before work begins.",
    icon: Wallet,
  },
  {
    title: "Careful Diagnosis",
    text: "Our technicians inspect the full braking system, not just the part making the loudest noise.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Turnaround",
    text: "Many brake pad jobs can be completed quickly once the right parts are confirmed.",
    icon: Timer,
  },
];

const faqItems = [
  {
    question: "How do brake pads work?",
    answer:
      "When you press the brake pedal, hydraulic pressure helps the caliper press the brake pads against the disc. That friction slows the vehicle down.",
  },
  {
    question: "How long do brake pads last?",
    answer:
      "Brake pad life depends on driving style, traffic, vehicle weight, pad quality, and road conditions. City driving usually wears pads faster than steady motorway driving.",
  },
  {
    question: "What does brake pads replacement cost?",
    answer:
      "Cost depends on the vehicle, front or rear axle, pad quality, disc condition, sensors, and labour. Send your registration for a clear quote.",
  },
  {
    question: "Can I replace just the brake pads?",
    answer:
      "Sometimes yes, but if the discs are badly worn, scored, warped, or below specification, pads alone may not solve the problem safely.",
  },
  {
    question: "How often should brakes be inspected?",
    answer:
      "Have brakes checked during servicing, before long trips, and whenever you notice noise, vibration, warning lights, or reduced stopping performance.",
  },
];

const relatedResources = [
  {
    title: "Worried About Brake Pad Costs? Get The Best Deal Today!",
    text: "Understand what affects brake pad replacement prices and how to avoid unnecessary repairs.",
    date: "September 18, 2024",
    image: "/imgi_18_BRAKE-PAD-REPLACEMENT-COSTS.webp",
  },
  {
    title: "Brake Fluid Change Cost: What You Need to Know",
    text: "Learn why brake fluid matters and when your car may need a brake fluid change.",
    date: "August 24, 2024",
    image: "/imgi_17_brake-fluid-change-cost.webp",
  },
  {
    title: "What You Need to Know About Brake Pad Replacement Costs?",
    text: "A practical guide to brake pad replacement pricing, symptoms, and service timing.",
    date: "January 4, 2024",
    image: "/imgi_18_BRAKE-PAD-REPLACEMENT-COSTS.webp",
  },
];

const serviceHref = (service: string) => {
  if (service === "Engine Replacement") return "/engine-replacement";
  if (service === "Brake Pad Replacement") return "/brake-pad-replacement";
  if (service === "Power Steering Replacement") return "/steering-fluid";
  if (service === "Car AC Repair") return "/aircon-regas";
  return "/auto";
};

export default function BrakePadsPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[510px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_3_Brake-pad-replacement-pg-header-banner-img.webp"
          alt="Brake pads replacement service in London"
          fill
          priority
          className="object-cover opacity-65"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="relative mx-auto flex min-h-[510px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Brake pad replacement</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Get Your Car&apos;s <span className="text-red-500">Brake Pads Replacement</span> In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Professional brake pad, disc, and fluid checks for safer stopping power, clearer pricing, and quick workshop support in W12.
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
            <Image src="/imgi_5_Brake-pad-replacement-pg-first-section-img.webp" alt="Brake pads and discs" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Car <span className="text-red-600">Brake Pads Replacement</span> Service That Won&apos;t Slow You Down
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Brake pads are a core safety component. When they wear down, stopping distance increases and the discs can become damaged. TaylorMOT inspects the braking system and fits suitable replacement parts when needed.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Whether you need front pads, rear pads, discs, fluid, or a full brake check, our team keeps the process direct, practical, and focused on safe daily driving.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Major <span className="text-red-600">Brake Components</span> That Need Timely Replacement
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Your braking system works as a set. Pads, discs, and fluid should be checked together so the repair solves the real issue.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {brakeComponents.map((component, index) => (
            <article key={component.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className={index === 1 ? "relative h-64 bg-neutral-50" : "relative h-64 bg-red-600"}>
                <Image src={component.image} alt={component.title} fill className="object-contain p-7" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black text-red-600 sm:text-2xl">{component.title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-6 text-neutral-800">{component.text}</p>
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

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_10_Brake-replacement-pg-3img-sect-1.webp" alt="Brake replacement work" fill className="object-cover" sizes="430px" />
              </div>
              <div className="px-6 py-7">
                <h3 className="text-xl font-black">Better Brakes, More Control</h3>
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
            <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
              Signs Your Car Needs Brake Replacement
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              If you catch brake problems early, you can often reduce repair cost and prevent damage to connected parts. A short inspection can confirm whether the issue is pads, discs, fluid, calipers, or another component.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {signs.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={21} />
                  {item}
                </div>
              ))}
            </div>
            <div className="relative mt-8 min-h-[390px] overflow-hidden rounded-md">
              <Image src="/imgi_10_Brake-replacement-pg-3img-sect-1.webp" alt="Mechanic inspecting a braking system" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Importance Of <span className="text-red-600">Timely Brake Pads Replacement</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Brake pads wear every time you slow down. Delaying replacement can reduce stopping performance, create metal-on-metal noise, damage the discs, and increase total repair cost.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT can inspect pad thickness, disc condition, brake fluid, and braking balance, then recommend only the work your car actually needs.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                { text: "Pad thickness and disc condition checked", icon: Sparkles },
                { text: "Front and rear brakes inspected carefully", icon: Car },
                { text: "Brake fluid condition reviewed", icon: ClipboardCheck },
                { text: "Clear quote before replacement begins", icon: Wrench },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-4 text-sm font-semibold sm:text-[15px]">
                    <Icon className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-md">
            <Image src="/imgi_9_Brake-replacement-pg-3img-sect-2.webp" alt="Brake discs replacement parts" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <Image src="/imgi_39_Brake-replacement-pg-banner-below-img-2-768x120.webp" alt="Brake replacement appointment banner" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Stopping on time matters</p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Don&apos;t Compromise On Safety, Choose Quality Brake Repairs
            </h2>
            <Link href="/appointment" className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-white bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700">
              Book Appointment
              <CalendarCheck size={19} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          What Makes Us Different In The <span className="text-red-600">Brake Pads Industry?</span>
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

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[520px]">
          <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Brake replacement quote request" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">FREE QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your brake issue</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Brake pads replacement details" placeholder="Tell us about brake noise, warning lights, vibration, soft pedal, or the service needed" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-center text-3xl font-black leading-tight sm:text-[34px]">
          Frequently Asked Questions - <span className="text-red-600">FAQ</span>
        </h2>
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
        <h2 className="text-3xl font-black leading-tight">Related<br />Resources</h2>
        <div className="mt-8 grid gap-7 md:grid-cols-3">
          {relatedResources.map((resource) => (
            <article key={resource.title} className="overflow-hidden rounded-md bg-neutral-50">
              <div className="relative h-64">
                <Image src={resource.image} alt={resource.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-lg font-black leading-7 text-neutral-800">{resource.title}</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-neutral-800">{resource.text}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium">{resource.date}</span>
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
