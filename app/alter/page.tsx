import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  ClipboardCheck,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const serviceLinks = [
  { label: "Car Battery Replacement", href: "/battery" },
  { label: "Alternator Repair & Replacement", href: "/alter" },
  { label: "Starter Motor Repair & Replacement", href: "/auto" },
  { label: "Ignition System Repairs", href: "/auto" },
];

const checkCards = [
  {
    title: "Drive Belt",
    text: "The drive belt, also called the serpentine belt, connects the alternator to the engine and must be checked for wear, cracks, and tension.",
    image: "/imgi_4_alternator-repair-pg-drive-belt.webp",
  },
  {
    title: "Battery",
    text: "A weak or discharged battery can hide charging faults, so we test battery health before confirming alternator repair or replacement.",
    image: "/imgi_5_alternator-repair-pg-battery.webp",
  },
  {
    title: "Electrical Connections",
    text: "Loose, corroded, or damaged wiring can reduce charging performance and cause warning lights, dim headlights, or starting issues.",
    image: "/imgi_6_alternator-repair-pg-electrical-connections.webp",
  },
];

const repairReasons = [
  {
    title: "Charging Output Test",
    text: "We test alternator voltage and charging behaviour while the engine is running to confirm whether the unit is undercharging or overcharging.",
  },
  {
    title: "Battery & Belt Inspection",
    text: "Our technicians check battery condition, drive belt tension, pulleys, fuses, wiring, and visible wear before recommending parts.",
  },
  {
    title: "Repair Or Replacement",
    text: "If the alternator is faulty, we explain the best option and fit a suitable replacement to restore dependable electrical power.",
  },
];

const warningSigns = [
  {
    title: "Dimmed Headlights",
    text: "If the alternator cannot maintain enough power output, your headlights may appear dim, especially at idle or when accessories are running.",
  },
  {
    title: "Dead Battery",
    text: "A faulty alternator may not recharge the battery while you drive, eventually leaving the vehicle unable to start.",
  },
  {
    title: "Unusual Noises",
    text: "Whining, grinding, or growling near the belt area can point to alternator bearing wear, pulley issues, or belt problems.",
  },
];

const bookingSteps = [
  {
    title: "Fill a Form",
    text: "Tell us about the dashboard warning, battery issue, or electrical fault.",
    image: "/imgi_139_auto-repair-pg-car-diagnostics-1-1.webp",
  },
  {
    title: "Get a Quote",
    text: "We confirm the inspection route and give clear alternator repair advice.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Let Us Fix",
    text: "Our technician tests the charging system and repairs or replaces the alternator.",
    image: "/imgi_14_car-alternator-repair-by-london-motor-sports.webp",
  },
  {
    title: "Relax & Drive",
    text: "Drive away with steady charging, brighter lights, and better starting confidence.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const qualityCards = [
  {
    title: "Collection From Your Doorstep",
    text: "Need help getting the vehicle to us? Contact the team and we will advise the most convenient repair route.",
    icon: CalendarCheck,
  },
  {
    title: "Fair Pricing Plans",
    text: "You receive a clear quote before alternator repair or replacement work begins.",
    icon: ClipboardCheck,
  },
  {
    title: "Alternator Specialists",
    text: "Our technicians inspect the full charging system, not just the alternator, so the actual fault is handled.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "What are the signs that my car alternator needs repair?",
    answer:
      "Common signs include a battery warning light, dim headlights, slow cranking, a dead battery, electrical accessories cutting out, unusual belt-area noises, or burning smells.",
  },
  {
    question: "How long does it take to replace an alternator?",
    answer:
      "Many alternator replacements can be completed the same day, but timing depends on the vehicle model, access, belt condition, and parts availability.",
  },
  {
    question: "What components are checked during alternator repair?",
    answer:
      "We check charging output, battery health, drive belt, pulleys, fuses, wiring, terminals, and dashboard warnings before confirming the repair.",
  },
  {
    question: "How much does alternator repair or replacement cost?",
    answer:
      "The cost depends on the vehicle and whether the alternator can be repaired or needs replacement. We provide a clear quote after inspection.",
  },
  {
    question: "Why should a faulty alternator be repaired quickly?",
    answer:
      "A failing alternator can drain the battery, reduce lighting performance, affect electrical systems, and leave the car unable to start.",
  },
];

function RedBullet({ title, text }: { title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <CircleDot className="mt-1 shrink-0 text-red-600" size={24} strokeWidth={5} />
      <div>
        <h3 className="text-xl font-black">{title}</h3>
        <p className="mt-3 text-base font-medium leading-8 text-neutral-800">{text}</p>
      </div>
    </li>
  );
}

export default function AlternatorRepairReplacementPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[680px] overflow-hidden bg-black text-white">
        <Image src="/imgi_101_Alternator-Repair-hero-banner-image.webp" alt="Alternator repair and replacement service" fill priority className="object-cover opacity-60" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1800px] flex-col justify-center px-5 py-20 lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-400">Reliable alternator repair</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Car Alternator Repair & Replacement In West London</h1>
          <p className="mt-7 max-w-3xl text-base font-semibold leading-8 text-white/90">
            Battery warning light, dim headlights, slow starting, or repeated battery drain can point to a failing alternator. TaylorMOT tests the charging system and provides clear repair or replacement advice.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="tel:+441784240000" className="inline-flex min-w-56 items-center justify-center gap-2 rounded-md border-2 border-white bg-white px-8 py-4 text-sm font-black uppercase text-black transition hover:bg-transparent hover:text-white">
              <Phone size={18} />
              Call Now
            </Link>
            <Link href="/appointment" className="inline-flex min-w-56 items-center justify-center gap-2 rounded-md bg-red-600 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-red-700">
              Book Now
              <CalendarCheck size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative min-h-[430px]">
            <Image src="/imgi_14_car-alternator-repair-by-london-motor-sports.webp" alt="Mechanic holding alternator" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 38vw" />
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Car Alternator Repair Services <span className="text-red-600">Near You</span>
            </h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
              Your alternator powers electrical systems while the engine runs and recharges the battery. When it fails, the battery, headlights, dashboard electronics, and starting performance can all suffer.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-800">
              Our technicians test the alternator, battery, belt, wiring, and related components before recommending alternator repair, reconditioning, or replacement.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            What Components Do We Check During <span className="text-red-600">Alternator Repair?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-5xl text-base font-medium leading-8 text-neutral-800">
            Alternator faults are often linked to the battery, belt, wiring, or charging circuit. These checks help us find the right solution.
          </p>
          <div className="mt-14 grid gap-0 md:grid-cols-3">
            {checkCards.map((card, index) => (
              <article key={card.title} className={index === 1 ? "bg-neutral-50" : "bg-red-600 text-white"}>
                <div className="relative h-96">
                  <h3 className="relative z-10 px-6 pt-10 text-3xl font-black">{card.title}</h3>
                  <Image src={card.image} alt={card.title} fill className="object-contain px-12 pt-24" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <p className="px-10 pb-12 text-base font-medium leading-8 text-current">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-14 lg:grid-cols-[490px_1fr]">
          <aside className="space-y-8">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-80">
                <Image src="/imgi_138_auto-repair-pg-car-electrical-services-1.webp" alt="TaylorMOT electrical repair technician" fill className="object-cover" sizes="490px" />
              </div>
              <div className="px-8 pb-10 text-center">
                <h3 className="text-2xl font-black">Need Alternator Help?</h3>
                <div className="relative mt-8 rounded-md bg-white px-8 py-8 text-left text-neutral-950">
                  <span className="absolute -left-12 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
                    <Phone size={32} />
                  </span>
                  <p className="text-xl font-black text-red-600">Call Now & Get A Free Quote</p>
                  <p className="mt-6 text-3xl font-black">+44 1784 240000</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 p-8">
              <h3 className="text-3xl font-black text-red-600">Car Electrician Repair</h3>
              <div className="mt-8 space-y-5">
                {serviceLinks.map((service) => (
                  <Link key={service.label} href={service.href} className="flex items-center gap-5 rounded-md bg-white px-5 py-4 text-lg font-semibold transition hover:text-red-600">
                    <CircleDot className="shrink-0 text-red-600" size={24} strokeWidth={5} />
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-16">
            <section>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                What Are The Signs Of A <span className="text-red-600">Worn Out Alternator?</span>
              </h2>
              <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
                Alternator problems can look like battery trouble at first. If the battery keeps going flat or electrical components behave strangely, book a charging-system inspection.
              </p>
              <ul className="mt-10 space-y-8">
                {warningSigns.map((item) => (
                  <RedBullet key={item.title} {...item} />
                ))}
              </ul>
            </section>
            <div className="relative min-h-[430px] overflow-hidden rounded-md">
              <Image src="/imgi_14_car-alternator-repair-by-london-motor-sports.webp" alt="Alternator being repaired" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">How Does TaylorMOT Offer Alternator Repairs?</h2>
          <p className="mt-6 max-w-6xl text-base font-medium leading-8 text-neutral-800">
            We follow a practical process that confirms the electrical fault before parts are fitted. This keeps the repair focused and helps avoid unnecessary replacement work.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {repairReasons.map((item) => (
              <article key={item.title} className="rounded-md border border-neutral-300 px-8 py-10">
                <Wrench className="text-red-600" size={48} strokeWidth={2} />
                <h3 className="mt-7 text-2xl font-black">{item.title}</h3>
                <p className="mt-5 text-base font-medium leading-8 text-neutral-800">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">
          How It Works For <span className="text-red-600">Alternator Replacement</span>
        </h2>
        <div className="mx-auto mt-16 grid max-w-[1800px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((step) => (
            <article key={step.title} className="text-center">
              <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full">
                <Image src={step.image} alt={step.title} fill className="object-cover" sizes="224px" />
              </div>
              <h3 className="mt-7 text-3xl font-black text-red-600">{step.title}</h3>
              <p className="mx-auto mt-4 max-w-xs text-base font-medium leading-7">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1800px] space-y-10">
          <div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">When Do I Need Alternator Replacement?</h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
              Alternator repair and replacement depend on your vehicle condition. If output is unstable, the unit is noisy, the belt pulley is damaged, or the battery repeatedly drains after testing healthy, replacement may be the best route.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">How Much Does Alternator Repair Cost?</h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
              Pricing depends on the car model, alternator access, parts quality, and whether related belt or battery work is needed. TaylorMOT checks the system first and provides a clear quote before work starts.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">Why Choose TaylorMOT For Vehicle Alternator Services?</h2>
        <div className="mx-auto mt-14 grid max-w-[1800px] gap-8 md:grid-cols-3">
          {qualityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-md border border-neutral-300 px-8 py-12">
                <Icon className="mx-auto text-red-600" size={72} strokeWidth={1.8} />
                <h3 className="mt-8 text-2xl font-black text-red-600">{card.title}</h3>
                <p className="mx-auto mt-5 max-w-sm text-base font-medium leading-7">{card.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[560px]">
          <Image src="/imgi_13_car-repair-pg-section-img-left-1.webp" alt="Get an alternator repair quote" fill className="object-cover object-left" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-10 text-center lg:px-16">
            <h2 className="text-4xl font-black">GET A QUOTE</h2>
            <p className="mt-2 text-xl font-black uppercase">Tell us about the service needed</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-16 rounded-md border border-neutral-900 px-6 text-base font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Service needed" placeholder="Tell us about the warning light, battery drain, starting issue, or electrical fault" className="mt-8 h-56 w-full rounded-md border border-neutral-900 px-6 py-6 text-base font-bold outline-none focus:border-red-600" />
            <button className="mt-8 block rounded-md bg-red-600 px-16 py-4 text-base font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <h2 className="text-center text-4xl font-black">Frequently Asked Questions</h2>
        <div className="mx-auto mt-12 max-w-[1500px] space-y-5">
          {faqItems.map((item, index) => (
            <details key={item.question} className="group border border-neutral-400" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-8 py-6 text-lg font-black text-neutral-800 group-open:text-red-600">
                {item.question}
                <ChevronDown className="shrink-0 text-red-600 transition group-open:rotate-180" size={26} />
              </summary>
              <p className="border-t border-neutral-300 px-8 py-6 text-base font-medium leading-8 text-neutral-800">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-5 py-20 text-white lg:px-10">
        <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Alternator repair call to action" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-400">Charging system support</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Battery Light On? Let Us Check Your Alternator.</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="tel:+441784240000" className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-8 py-4 text-sm font-black uppercase text-black transition hover:bg-neutral-200">
              <Phone size={18} />
              Call Us
            </Link>
            <Link href="/appointment" className="inline-flex items-center justify-center gap-3 rounded-md bg-red-600 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-red-700">
              <CheckCircle2 size={18} />
              Book Online
            </Link>
          </div>
        </div>
      </section>

      <Link href="https://wa.me/441784240000" className="fixed bottom-8 right-8 z-40 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl">
        <MapPin size={34} />
        <span className="sr-only">Whatsapp</span>
      </Link>
    </main>
  );
}
