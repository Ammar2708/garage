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
    text: "Share your registration and the exhaust symptoms you have noticed.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We confirm inspection, parts, labour, timing, and the best repair route.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Exhaust Check",
    text: "Pipes, mountings, leaks, corrosion, sensors, and noise are inspected.",
    image: "/imgi_86_Oil-Leakage-Repair.webp",
  },
  {
    title: "Drive Cleaner",
    text: "Your exhaust system is checked before the car returns to the road.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const exhaustParts = [
  {
    title: "Exhaust Manifold",
    text: "The manifold collects gases from the engine and directs them into the exhaust system. Cracks or gasket leaks can cause noise, fumes, and poor performance.",
    image: "/imgi_4_service-page-engine-1.webp",
  },
  {
    title: "Catalytic Converter",
    text: "The catalytic converter helps reduce harmful emissions before gases leave the car. Blockage, theft, or internal failure can trigger warning lights and power loss.",
    image: "/imgi_5_service-page-engine-3.webp",
  },
  {
    title: "Muffler And Pipes",
    text: "Pipes and silencers reduce noise and guide fumes safely away from the cabin. Corrosion or loose joints should be repaired quickly.",
    image: "/imgi_6_service-page-engine-2.webp",
  },
];

const signs = [
  "Increased or unusual noise from under the car",
  "Rattling sounds near the exhaust or engine",
  "Burning smell or exhaust fumes around the cabin",
  "Low power, poor acceleration, or reduced fuel economy",
  "Visible corrosion, loose pipes, or blue and white smoke",
  "Engine warning light linked to emissions or oxygen sensors",
];

const whyCards = [
  {
    title: "Transparent Rates",
    text: "You receive a clear quote before work begins, with parts and labour explained in plain language.",
    icon: Wallet,
  },
  {
    title: "Expert Diagnosis",
    text: "Our technicians check the full exhaust route so we repair the cause, not only the loudest symptom.",
    icon: ShieldCheck,
  },
  {
    title: "Same-Day Support",
    text: "Many inspections and common exhaust repairs can be handled quickly once parts are confirmed.",
    icon: Timer,
  },
];

const faqItems = [
  {
    question: "What are the signs that my car needs exhaust repair or replacement?",
    answer:
      "Common signs include louder engine noise, rattling, fumes, poor fuel economy, reduced acceleration, corrosion, smoke, or an emissions warning light.",
  },
  {
    question: "Why is repairing a faulty exhaust system important?",
    answer:
      "A damaged exhaust can increase noise, reduce efficiency, affect emissions, and allow harmful fumes to build up around the vehicle.",
  },
  {
    question: "How much does car exhaust repair cost?",
    answer:
      "Cost depends on the vehicle, damaged parts, corrosion level, and whether the car needs a small repair or full section replacement. Send your registration for a quote.",
  },
  {
    question: "Can I drive with a damaged exhaust?",
    answer:
      "It is best to avoid delaying repairs. Exhaust damage can worsen quickly, affect emissions, create excessive noise, and make the car unsafe if fumes enter the cabin.",
  },
  {
    question: "Can I get a free exhaust system check?",
    answer:
      "Yes. Contact TaylorMOT with your car details and symptoms, and we can advise the right inspection and repair route.",
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

const serviceHref = (service: string) => {
  if (service === "Engine Replacement") return "/engine-replacement";
  if (service === "Brake Pad Replacement") return "/brake-pad-replacement";
  if (service === "Car Exhaust Repair") return "/exhaust";
  if (service === "Fuel System Repair") return "/fuel";
  if (service === "Power Steering Replacement") return "/steering-fluid";
  if (service === "Car AC Repair") return "/aircon-regas";
  return "/auto";
};

export default function ExhaustPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[500px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_86_Oil-Leakage-Repair.webp"
          alt="Car exhaust repair service in London"
          fill
          priority
          className="object-cover opacity-62"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Car exhaust repair</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Same-Day <span className="text-red-500">Car Exhaust Repair</span> And Replacement In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Quiet, efficient, and safe exhaust repairs for leaks, rattles, corrosion, smoke, and emissions issues.
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
            <Image src="/imgi_7_Mask_Group_1.webp" alt="Mechanic ready for exhaust inspection" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Get <span className="text-red-600">Same-Day Car Exhaust Repair</span> At TaylorMOT
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Your exhaust system plays a vital role in performance, emissions, noise control, and cabin safety. A small leak or loose pipe can quickly become a bigger repair if ignored.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks the system carefully and recommends the most practical repair, whether your car needs a minor exhaust fix, a replacement section, or full system advice.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Quick Overview Of <span className="text-red-600">Car Exhaust Parts</span>
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Exhaust systems work as a chain. Checking the full route helps avoid replacing parts that are still healthy.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {exhaustParts.map((part, index) => (
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

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_87_service-section-cta-2.webp" alt="Workshop exhaust repair support" fill className="object-cover" sizes="430px" />
              </div>
              <div className="px-6 py-7">
                <h3 className="text-xl font-black">Cleaner Exhaust, Better Drive</h3>
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
              How To Know It Is Time For Car Exhaust Repair
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Exhaust issues usually start with sound, smell, smoke, or performance changes. Early inspection can prevent further damage and keep your car running safely.
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
              <Image src="/imgi_86_Oil-Leakage-Repair.webp" alt="Mechanic inspecting exhaust under a vehicle" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              What Happens If My <span className="text-red-600">Car Exhaust Fails?</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A failing exhaust can make the car louder, reduce efficiency, increase emissions, and allow harmful fumes to collect around the vehicle. Loose brackets or corrosion can also make the system unsafe.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Our technicians inspect the issue, explain the cause, and advise whether a focused repair or replacement section is the better long-term option.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                { text: "Leaks, corrosion, and mountings checked", icon: Sparkles },
                { text: "Noise and rattles inspected carefully", icon: Car },
                { text: "Emissions-related parts reviewed", icon: ClipboardCheck },
                { text: "Clear quote before repair begins", icon: Wrench },
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
            <Image src="/imgi_7_Mask_Group_1.webp" alt="TaylorMOT exhaust repair technician" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <Image src="/imgi_84_car-repair-hero-banner.webp" alt="Exhaust repair appointment banner" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable and well-versed</p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Say Goodbye To Rattling Noise With Quick Car Exhaust Repair
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
          Why Choose TaylorMOT For <span className="text-red-600">Car Exhaust Repair?</span>
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
          <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Exhaust repair quote request" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">FREE QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your exhaust issue</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Car exhaust repair details" placeholder="Tell us about rattling, fumes, smoke, corrosion, warning lights, or the service needed" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
        <h2 className="text-3xl font-black leading-tight">Read Also</h2>
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
