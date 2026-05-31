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

const serviceHref = (service: string) => {
  if (service === "Engine Replacement") return "/engine-replacement";
  if (service === "Brake Pad Replacement") return "/brake-pad-replacement";
  if (service === "Car Exhaust Repair") return "/exhaust";
  if (service === "Fuel System Repair") return "/fuel";
  if (service === "Power Steering Replacement") return "/steering-fluid";
  if (service === "Car AC Repair") return "/aircon-regas";
  if (service === "Timing Belt Replacement") return "/timing-belt-replacement";
  if (service === "Turbo Replacement") return "/turbo";
  return "/auto";
};

const turboTypes = [
  {
    title: "Twin-Scroll Turbo",
    text: "Uses divided exhaust flow to reduce lag and improve response.",
    image: "/imgi_4_turbo-replacement-pg-twin-scroll-turbo.webp",
  },
  {
    title: "Variable Geometry Turbo",
    text: "Adjusts turbine flow for stronger boost across more engine speeds.",
    image: "/imgi_5_turbo-replacement-pg-variable-geometry-turbo.webp",
  },
  {
    title: "Electric Turbo",
    text: "Uses electric assistance to spool faster and support smooth torque.",
    image: "/imgi_6_turbo-replacement-pg-electric-turbo.webp",
  },
];

const processSteps = [
  {
    title: "Fill a Form",
    text: "Tell us about smoke, noises, warning lights, or power loss.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get a Quote",
    text: "We confirm the diagnostic route, parts, labour, and timing.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let us Fix",
    text: "Our technicians replace the turbo and inspect related systems.",
    image: "/imgi_21_tyre-gallery-1-scaled.webp",
  },
  {
    title: "Relax & Joy",
    text: "Drive away with restored boost, response, and confidence.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "Loss of power or poor acceleration",
  "Blue, grey, or excessive exhaust smoke",
  "Whining, siren, or grinding noise under boost",
  "Engine warning light or limp mode",
  "Oil leaks around turbo pipes or intercooler hoses",
];

const faultItems = [
  {
    title: "Contaminated Oil",
    text: "Dirty oil can block small passages and damage turbo bearings.",
  },
  {
    title: "Boost Pressure Issues",
    text: "Leaks, wastegate faults, or restrictions can reduce boost and performance.",
  },
  {
    title: "Excessive Heat",
    text: "High heat and hard use can weaken turbo seals, housings, and moving parts.",
  },
  {
    title: "Foreign Object Damage",
    text: "Debris entering the intake can damage compressor blades and airflow.",
  },
];

const whyCards = [
  {
    title: "Diagnostic Tools",
    text: "We check boost pressure, oil feed, intake leaks, and fault codes before replacement.",
    icon: ClipboardCheck,
  },
  {
    title: "Quality Turbos",
    text: "Replacement parts are chosen to suit your vehicle and restore reliable performance.",
    icon: ShieldCheck,
  },
  {
    title: "Skilled Technicians",
    text: "Our team handles turbo fitting, pipework checks, and final road-ready inspection.",
    icon: Wrench,
  },
];

const galleryImages = [
  "/imgi_20_turbo-replacement-gallery-1.webp",
  "/imgi_21_turbo-replacement-gallery-2.webp",
  "/imgi_89_turbo-replacement-gallery-5-1024x681.webp",
  "/imgi_93_turbo-replacement-gallery-6-1024x576.webp",
  "/imgi_159_turbo-replacement-hero-banner-img.webp",
  "/imgi_14_turbo-replacement-content-img.webp",
];

const faqItems = [
  {
    question: "How do you know if your turbo needs replacing?",
    answer:
      "Common signs include power loss, smoke, whining noises, oil leaks, warning lights, or poor fuel economy. A diagnostic check confirms whether repair or replacement is needed.",
  },
  {
    question: "What should I do after a turbo replacement?",
    answer:
      "Use the correct oil, allow gentle warm-up and cool-down, and follow the service schedule. This helps protect the new turbo from heat and lubrication issues.",
  },
  {
    question: "What are the symptoms if the turbo has failed?",
    answer:
      "A failed turbo can cause limp mode, heavy smoke, loud boost noise, poor acceleration, oil consumption, or complete loss of boost.",
  },
  {
    question: "Will a new turbo improve performance?",
    answer:
      "If the old turbo is weak or damaged, a correct replacement can restore boost, throttle response, and engine efficiency.",
  },
  {
    question: "Can a turbo cause engine damage?",
    answer:
      "Yes. Continuing to drive with turbo failure can send oil or debris into the intake and may damage the engine. Stop driving and book an inspection.",
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

export default function TurboPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[500px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_159_turbo-replacement-hero-banner-img.webp"
          alt="Turbo replacement service in London"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Turbo replacement</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Feel the Surge With Expert <span className="text-red-500">Turbo Replacement</span>
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Restore boost, acceleration, and driveability with professional turbo diagnosis, fitting, and final system checks.
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
            <Image src="/imgi_14_turbo-replacement-content-img.webp" alt="Mechanic ready for turbo replacement" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Improve Engine Performance With <span className="text-red-600">Turbo Replacement</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A turbocharger uses exhaust energy to push more air into the engine. When it fails, your car can lose power, smoke heavily, or enter limp mode.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT inspects the turbo, oil supply, intake pipework, boost control, and related components before recommending the right replacement.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_14_turbo-replacement-content-img.webp" alt="Turbo specialist in London" fill className="object-cover" sizes="430px" />
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
              <Image src="/imgi_20_turbo-replacement-gallery-1.webp" alt="Turbocharger replacement close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
              Warning Signs Of A Blown Turbo
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A failing turbo can quickly affect engine performance. If you suspect turbo failure, avoid hard driving and book a diagnostic check before further damage occurs.
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
              <Image src="/imgi_21_turbo-replacement-gallery-2.webp" alt="Turbo replacement workshop inspection" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Consider These Categories During <span className="text-red-600">Turbo Replacement</span>
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          The right replacement depends on your vehicle, engine layout, and performance requirements.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {turboTypes.map((part, index) => (
            <article key={part.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className={index === 1 ? "relative h-64 bg-neutral-50" : "relative h-64 bg-red-600"}>
                <Image src={part.image} alt={part.title} fill className="object-contain p-7" sizes="(max-width: 768px) 100vw, 33vw" />
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
          <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Quote request for turbo replacement" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your turbo issue</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Turbo replacement details" placeholder="Tell us about smoke, power loss, noises, oil leaks, or warning lights" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          Common Turbo Faults That Require Replacement
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Turbo problems are often linked to oil quality, boost leaks, high heat, blocked filters, or wear inside the turbo assembly. A careful inspection helps prevent repeat failure.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {faultItems.map((item) => (
            <div key={item.title} className="rounded-md border border-neutral-200 px-5 py-5">
              <h3 className="flex items-center gap-3 text-base font-black sm:text-lg">
                <ShieldCheck className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-neutral-800">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Why TaylorMOT For <span className="text-red-600">Turbo Replacement?</span>
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
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="Turbo replacement appointment" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable and well-versed</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Do Not Let A Faulty Turbo Slow You Down
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
              Book a turbo inspection and replacement service before poor boost turns into a bigger engine problem.
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
          Turbo Replacement <span className="text-red-600">Gallery</span>
        </h2>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative h-72 overflow-hidden rounded-md">
              <Image src={image} alt={`Turbo replacement gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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
