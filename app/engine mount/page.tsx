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
  if (service === "Engine Mount Replacement") return "/engine mount";
  if (service === "Turbo Replacement") return "/turbo";
  if (service === "Clutch Replacement") return "/clutch";
  if (service === "Shock Absorber Repair") return "/shock";
  return "/auto";
};

const mountTypes = [
  {
    title: "Rubber Motor Mounts",
    text: "Solid rubber mounts help cushion engine movement and reduce vibration through the chassis.",
    image: "/imgi_4_engine-mount-pg-rubber-motor-mounts.webp",
  },
  {
    title: "Hydraulic Motor Mounts",
    text: "Fluid-filled mounts absorb vibration more smoothly and are common on comfort-focused vehicles.",
    image: "/imgi_5_engine-mount-pg-hydraulic-motor-mounts.webp",
  },
  {
    title: "Metal Motor Mounts",
    text: "Metal mounts provide a firm connection where strength and control are the main priorities.",
    image: "/imgi_6_engine-mount-pg-metal-motor-mounts.webp",
  },
];

const symptoms = [
  "Excessive noise or clunking from the engine bay",
  "Strong vibration through the body or steering wheel",
  "Engine movement when accelerating, braking, or changing gear",
  "Rough ride quality over bumps and uneven roads",
  "Visible cracks, sagging, leaks, or worn mount rubber",
  "Misalignment that affects connected engine components",
];

const processSteps = [
  {
    title: "Submit Query",
    text: "Tell us your vehicle details and the symptoms you have noticed.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We inspect the issue and explain the repair cost clearly.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let Us Fix",
    text: "Our technicians replace the worn mount and check related parts.",
    image: "/imgi_21_tyre-gallery-1-scaled.webp",
  },
  {
    title: "Relax And Drive",
    text: "Final checks help restore a smoother, safer ride.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const replacementSteps = [
  {
    title: "Inspection And Support",
    text: "We support the engine safely, inspect the mounts, and check surrounding components for movement or damage.",
  },
  {
    title: "Remove Worn Mounts",
    text: "The damaged mount is removed carefully while maintaining control of the engine position.",
  },
  {
    title: "Fit Quality Parts",
    text: "A suitable replacement mount is installed and tightened to the correct standard for the vehicle.",
  },
  {
    title: "Road-Test And Recheck",
    text: "We check vibration, noise, alignment, and drive feel before the vehicle is returned.",
  },
];

const whyCards = [
  {
    title: "Expert Technicians",
    text: "Our team understands engine support systems and fits mounts with the right care and control.",
    icon: Wrench,
  },
  {
    title: "Quality Parts",
    text: "We recommend suitable replacement parts and explain your options before work begins.",
    icon: ShieldCheck,
  },
  {
    title: "Clear Pricing",
    text: "You receive a straightforward quote covering labour, parts, and any related checks.",
    icon: ClipboardCheck,
  },
];

const galleryImages = [
  "/imgi_20_engine-mount-replacement-gallery-img-1.webp",
  "/imgi_88_engine-mount-replacement-gallery-img-4-1024x576.webp",
  "/imgi_92_engine-mount-replacement-gallery-img-5-1024x576.webp",
  "/imgi_14_engine-mount-replacement-content-img.webp",
  "/imgi_4_engine-mount-pg-rubber-motor-mounts.webp",
  "/imgi_5_engine-mount-pg-hydraulic-motor-mounts.webp",
];

const faqItems = [
  {
    question: "What is engine mount replacement?",
    answer:
      "It is the process of removing a worn or damaged engine mount and fitting a new mount so the engine stays stable and vibration is controlled.",
  },
  {
    question: "What does an engine mount replacement involve?",
    answer:
      "The engine is supported, the faulty mount is removed, the replacement is fitted, and the technician checks alignment, vibration, and related parts.",
  },
  {
    question: "What does replacing engine mounts do?",
    answer:
      "Replacing worn mounts can reduce vibration, clunking noises, engine movement, and stress on surrounding components.",
  },
  {
    question: "How many engine mounts are in a car?",
    answer:
      "Most cars use several mounts, often three or four, but the exact number depends on the vehicle design.",
  },
  {
    question: "What are the different types of engine mounts?",
    answer:
      "Common types include rubber mounts, hydraulic mounts, and metal or performance-style mounts.",
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

export default function EngineMountPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[500px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_14_engine-mount-replacement-content-img.webp"
          alt="Engine mount replacement service"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Engine mount replacement</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Engine Mount Replacement In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Restore engine stability, reduce vibration, and protect connected components with careful engine mount replacement from TaylorMOT.
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
            <Image src="/imgi_14_engine-mount-replacement-content-img.webp" alt="Technician holding an engine mount" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Maximize Engine Power With <span className="text-red-600">Engine Mount Replacement</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Engine mounts hold the engine securely and help control vibration, noise, and movement while you drive.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              When a mount wears out, the engine can shift under load, causing clunks, roughness, and extra strain on nearby components. TaylorMOT diagnoses the fault and fits the right replacement for your vehicle.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_14_engine-mount-replacement-content-img.webp" alt="Engine mount technician in London" fill className="object-cover" sizes="430px" />
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
              <Image src="/imgi_20_engine-mount-replacement-gallery-img-1.webp" alt="Engine mount inspection close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Warning Signs Of <span className="text-red-600">Worn Engine Mounts</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Worn mounts can make a vehicle feel rough, noisy, and unstable. Book an inspection if the engine moves more than normal or the cabin vibration suddenly increases.
            </p>
            <div className="mt-8 space-y-4">
              {symptoms.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-red-600" size={21} />
                  {item}
                </div>
              ))}
            </div>
            <div className="relative mt-8 min-h-[360px] overflow-hidden rounded-md">
              <Image src="/imgi_88_engine-mount-replacement-gallery-img-4-1024x576.webp" alt="Engine mount replacement work" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Categories During <span className="text-red-600">Engine Mount Replacement</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Choosing the correct mount depends on the vehicle design, driving needs, and the condition of the existing part.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {mountTypes.map((type, index) => (
            <article key={type.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className={index === 1 ? "relative h-72 bg-neutral-50" : "relative h-72 bg-red-600"}>
                <Image src={type.image} alt={type.title} fill className="object-contain p-7" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black text-red-600 sm:text-2xl">{type.title}</h3>
                <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-6 text-neutral-800">{type.text}</p>
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
          <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Quote request for engine mount replacement" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your engine mount issue</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Engine mount replacement details" placeholder="Tell us about vibration, clunking, rough driving, or visible mount damage" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          TaylorMOT Engine Mount <span className="text-red-600">Replacement Process</span>
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Our technicians inspect the fault first, support the engine correctly, replace the worn mount, and recheck the vehicle so the repair feels stable on the road.
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
          Why TaylorMOT For <span className="text-red-600">Engine Mount Replacement?</span>
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
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="Engine mount replacement appointment" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable and well-versed</p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Is Your Ride Feeling Rough? Book Engine Mount Replacement Today
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
              <Image src={src} alt={`Engine mount replacement gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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
