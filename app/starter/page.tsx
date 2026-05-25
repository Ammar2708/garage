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
  { label: "Starter Motor Repair & Replacement", href: "/starter" },
  { label: "Ignition System Repairs", href: "/auto" },
];

const starterTypes = [
  {
    title: "Inertia Starter",
    text: "A traditional starter design that uses inertia to engage the pinion with the flywheel before the engine fires.",
    image: "/imgi_4_starter-motor-repair-pg-inertia-starter.webp",
  },
  {
    title: "Pre-Engaged Starter",
    text: "Common on modern vehicles, this type engages the pinion before the motor spins for smoother and more reliable starting.",
    image: "/imgi_5_starter-motor-repair-pg-re-engaged-starters.webp",
  },
  {
    title: "Heavy Vehicle Starter",
    text: "Designed for higher torque demands, these units support larger engines that need stronger cranking power.",
    image: "/imgi_36_starter-motor-repair-pg-heavy-vehicle-starters-300x225.webp",
  },
];

const warningSigns = [
  {
    title: "Clicking Or No Crank",
    text: "A single click, repeated clicking, or no crank at all can point to a worn starter motor, weak connection, or solenoid fault.",
  },
  {
    title: "Slow Engine Turnover",
    text: "If the engine turns slowly even with a healthy battery, the starter may be struggling to deliver enough torque.",
  },
  {
    title: "Grinding Noise",
    text: "Grinding while starting can mean the starter gear is not engaging correctly with the flywheel and should be checked quickly.",
  },
];

const failureReasons = [
  {
    title: "Loose Wiring",
    text: "Loose or damaged wiring can reduce current flow to the starter and cause weak cranking, intermittent starting, or complete failure.",
  },
  {
    title: "Dirty Connections",
    text: "Corrosion and dirt around terminals can interrupt power delivery and make a good starter behave like a faulty one.",
  },
  {
    title: "Damaged Solenoid",
    text: "A faulty solenoid may click without engaging the starter motor, leaving the engine unable to crank.",
  },
  {
    title: "Worn Starter Parts",
    text: "Brushes, bearings, gears, and internal contacts wear over time, especially on vehicles used for frequent short journeys.",
  },
];

const bookingSteps = [
  {
    title: "Fill a Form",
    text: "Tell us what happens when you turn the key or press the start button.",
    image: "/imgi_139_auto-repair-pg-car-diagnostics-1-1.webp",
  },
  {
    title: "Get a Quote",
    text: "We inspect the starting circuit and give a clear repair or replacement price.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Let Us Replace",
    text: "Our technician repairs the connection issue or fits the correct starter motor.",
    image: "/imgi_14_starter-motor-repair-content-body-img-1.webp",
  },
  {
    title: "Relax & Drive",
    text: "Drive away with dependable cranking and fewer starting worries.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const qualityCards = [
  {
    title: "Trained Technicians",
    text: "Our team checks the battery, ignition signal, starter wiring, solenoid, and motor before replacing parts.",
    icon: CalendarCheck,
  },
  {
    title: "Affordable Plans",
    text: "Starter motor repair and replacement quotes are explained clearly before work begins.",
    icon: ClipboardCheck,
  },
  {
    title: "Collect & Deliver",
    text: "If your car will not start, contact us and we will advise the most convenient way to get help.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "What is a car starter motor?",
    answer:
      "A starter motor is an electric motor that turns the engine when you start the car. It helps begin the combustion process so the engine can run on its own.",
  },
  {
    question: "How much does a starter motor cost?",
    answer:
      "Cost depends on the vehicle, part quality, labour access, and whether wiring or battery faults are also present. We inspect first and provide a clear quote.",
  },
  {
    question: "Can you start a car without a starter motor?",
    answer:
      "Normally no. Most modern vehicles need a working starter motor, healthy battery, and correct ignition signal to crank the engine.",
  },
  {
    question: "What is the difference between a starter and an alternator?",
    answer:
      "The starter motor cranks the engine to start it. The alternator charges the battery and powers electrical systems once the engine is running.",
  },
  {
    question: "Why do starter motors fail?",
    answer:
      "Common causes include worn brushes, damaged solenoids, heat, oil contamination, corrosion, loose wiring, repeated short trips, or age-related wear.",
  },
  {
    question: "Can a bad starter drain a battery?",
    answer:
      "A failing starter can draw excessive current while cranking, but repeated battery drain can also come from alternator faults, battery age, or parasitic electrical loads.",
  },
];

function RedBullet({ title, text }: { title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <CircleDot className="mt-1 shrink-0 text-red-600" size={24} strokeWidth={5} />
      <div>
        <h3 className="text-lg font-black">{title}</h3>
        <p className="mt-3 text-sm font-medium leading-7 text-neutral-800">{text}</p>
      </div>
    </li>
  );
}

export default function StarterMotorRepairReplacementPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[680px] overflow-hidden bg-black text-white">
        <Image src="/imgi_101_Starter-Motor-Repair-hero-banner-image.webp" alt="Starter motor repair and replacement service" fill priority className="object-cover opacity-60" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1800px] flex-col justify-center px-5 py-20 lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-400">Reliable starter motor repair</p>
          <h1 className="mt-6 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Starter Motor Repair & Replacement In West London</h1>
          <p className="mt-7 max-w-3xl text-sm font-semibold leading-7 text-white/90">
            Clicking, grinding, whirring, or no crank when starting your car can point to a faulty starter motor. TaylorMOT checks the full starting circuit and offers practical repair or replacement support.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="tel:+442033371831" className="inline-flex min-w-56 items-center justify-center gap-2 rounded-md border-2 border-white bg-white px-8 py-4 text-sm font-black uppercase text-black transition hover:bg-transparent hover:text-white">
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
            <Image src="/imgi_14_starter-motor-repair-content-body-img-1.webp" alt="Starter motor replacement technician" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 38vw" />
          </div>
          <div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
              What Is A <span className="text-red-600">Starter Motor</span> And Why Is It Important?
            </h2>
            <p className="mt-6 text-sm font-medium leading-7 text-neutral-800">
              The starter motor is an electric motor that cranks the engine when you turn the key or press the start button. If it is weak or faulty, the engine may not turn over properly.
            </p>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800">
              Our technicians inspect the starter motor, battery, ignition signal, solenoid, wiring, and connections before recommending repair or replacement.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">What Are The Basic Types Of Starter Motors?</h2>
          <p className="mx-auto mt-6 max-w-5xl text-sm font-medium leading-7 text-neutral-800">
            Different vehicles use different starter designs. Correct diagnosis helps confirm whether the fault is in the motor, solenoid, wiring, battery, or ignition circuit.
          </p>
          <div className="mt-14 grid gap-0 md:grid-cols-3">
            {starterTypes.map((card, index) => (
              <article key={card.title} className={index === 1 ? "bg-neutral-50" : "bg-red-600 text-white"}>
                <div className="relative h-96">
                  <h3 className="relative z-10 px-6 pt-10 text-2xl font-black">{card.title}</h3>
                  <Image src={card.image} alt={card.title} fill className="object-contain px-12 pt-24" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <p className="px-10 pb-12 text-sm font-medium leading-7 text-current">{card.text}</p>
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
                <Image src="/imgi_138_auto-repair-pg-car-electrical-services-1.webp" alt="TaylorMOT starter motor technician" fill className="object-cover" sizes="490px" />
              </div>
              <div className="px-8 pb-10 text-center">
                <h3 className="text-xl font-black">Need Starter Help?</h3>
                <div className="relative mt-8 rounded-md bg-white px-8 py-8 text-left text-neutral-950">
                  <span className="absolute -left-12 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
                    <Phone size={32} />
                  </span>
                  <p className="text-lg font-black text-red-600">Call Now & Get A Free Quote</p>
                  <p className="mt-6 text-2xl font-black">+44 20 3337 1831</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 p-8">
              <h3 className="text-2xl font-black text-red-600">Car Electrician Repair</h3>
              <div className="mt-8 space-y-5">
                {serviceLinks.map((service) => (
                  <Link key={service.label} href={service.href} className="flex items-center gap-5 rounded-md bg-white px-5 py-4 text-base font-semibold transition hover:text-red-600">
                    <CircleDot className="shrink-0 text-red-600" size={24} strokeWidth={5} />
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-black leading-tight text-red-600 sm:text-4xl">Common Signs Of A Faulty Starter Motor</h2>
              <p className="mt-6 text-sm font-medium leading-7 text-neutral-800">
                Starter faults often appear suddenly, but small symptoms can show up first. If the battery is healthy and the engine still struggles to crank, the starter system needs attention.
              </p>
              <ul className="mt-10 space-y-8">
                {warningSigns.map((item) => (
                  <RedBullet key={item.title} {...item} />
                ))}
              </ul>
            </section>
            <div className="relative min-h-[430px] overflow-hidden rounded-md">
              <Image src="/imgi_14_starter-motor-repair-content-body-img-1.webp" alt="Starter motor fitted in engine bay" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-3xl font-black leading-tight text-red-600 sm:text-4xl">What Are The Reasons For A Failed Starter Motor?</h2>
          <p className="mt-6 max-w-6xl text-sm font-medium leading-7 text-neutral-800">
            Starter motors work under high load every time the vehicle starts. Wear, heat, wiring faults, or contamination can prevent the motor from turning the engine correctly.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {failureReasons.map((item) => (
              <article key={item.title} className="rounded-md border border-neutral-300 px-8 py-10">
                <Wrench className="text-red-600" size={48} strokeWidth={2} />
                <h3 className="mt-7 text-xl font-black">{item.title}</h3>
                <p className="mt-5 text-sm font-medium leading-7 text-neutral-800">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl">
          How It Works For <span className="text-red-600">Starter Motor Replacement</span>
        </h2>
        <div className="mx-auto mt-16 grid max-w-[1800px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((step) => (
            <article key={step.title} className="text-center">
              <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full">
                <Image src={step.image} alt={step.title} fill className="object-cover" sizes="224px" />
              </div>
              <h3 className="mt-7 text-2xl font-black text-red-600">{step.title}</h3>
              <p className="mx-auto mt-4 max-w-xs text-sm font-medium leading-7">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1800px] space-y-10">
          <div>
            <h2 className="text-3xl font-black leading-tight text-red-600 sm:text-4xl">How Much Does Starter Motor Replacement Cost?</h2>
            <p className="mt-6 text-sm font-medium leading-7 text-neutral-800">
              Pricing depends on your car make, model, access to the starter, and the specific part required. We inspect the vehicle and provide a clear quote before repair or replacement.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight text-red-600 sm:text-4xl">When Do I Need To Replace A Car Starter Motor?</h2>
            <p className="mt-6 text-sm font-medium leading-7 text-neutral-800">
              Replacement may be recommended if the starter is worn out, draws excessive current, fails solenoid testing, grinds during engagement, or keeps causing no-start symptoms after battery and wiring checks.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight text-red-600 sm:text-4xl">Is It Safe To Drive With A Faulty Starter Motor?</h2>
            <p className="mt-6 text-sm font-medium leading-7 text-neutral-800">
              A starter fault may not affect driving once the engine is running, but it can leave you stranded when you stop. It is best to repair the issue before it becomes a complete no-start failure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl">Why Choose TaylorMOT For Starter Motor Repair & Replacement?</h2>
        <div className="mx-auto mt-14 grid max-w-[1800px] gap-8 md:grid-cols-3">
          {qualityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-md border border-neutral-300 px-8 py-12">
                <Icon className="mx-auto text-red-600" size={72} strokeWidth={1.8} />
                <h3 className="mt-8 text-xl font-black text-red-600">{card.title}</h3>
                <p className="mx-auto mt-5 max-w-sm text-sm font-medium leading-7">{card.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[560px]">
          <Image src="/imgi_13_car-repair-pg-section-img-left-1.webp" alt="Get a starter motor repair quote" fill className="object-cover object-left" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-10 text-center lg:px-16">
            <h2 className="text-3xl font-black">GET A QUOTE</h2>
            <p className="mt-2 text-lg font-black uppercase">Tell us about the service needed</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-16 rounded-md border border-neutral-900 px-6 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Service needed" placeholder="Tell us about clicking, grinding, no crank, slow starting, or any dashboard warning" className="mt-8 h-56 w-full rounded-md border border-neutral-900 px-6 py-6 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-8 block rounded-md bg-red-600 px-16 py-4 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <h2 className="text-center text-3xl font-black sm:text-4xl">Frequently Asked Questions</h2>
        <div className="mx-auto mt-12 max-w-[1500px] space-y-5">
          {faqItems.map((item, index) => (
            <details key={item.question} className="group border border-neutral-400" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-8 py-6 text-base font-black text-neutral-800 group-open:text-red-600">
                {item.question}
                <ChevronDown className="shrink-0 text-red-600 transition group-open:rotate-180" size={26} />
              </summary>
              <p className="border-t border-neutral-300 px-8 py-6 text-sm font-medium leading-7 text-neutral-800">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-5 py-20 text-white lg:px-10">
        <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Starter motor repair call to action" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-400">Starting system support</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">Car Will Not Crank? Let Us Check Your Starter Motor.</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="tel:+442033371831" className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-8 py-4 text-sm font-black uppercase text-black transition hover:bg-neutral-200">
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

      <Link href="https://wa.me/442033371831" className="fixed bottom-8 right-8 z-40 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl">
        <MapPin size={34} />
        <span className="sr-only">Whatsapp</span>
      </Link>
    </main>
  );
}
