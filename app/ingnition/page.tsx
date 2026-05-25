import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronDown,
  CircleDot,
  ClipboardList,
  Headphones,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const serviceLinks = [
  { label: "Car Battery Replacement", href: "/battery" },
  { label: "Alternator Repair & Replacement", href: "/alter" },
  { label: "Starter Motor Repair & Replacement", href: "/starter" },
  { label: "Car Ignition System Repairs", href: "/ingnition" },
];

const quickBenefits = [
  {
    title: "Drive With Ease",
    text: "Get reliable ignition repair and replacement support that helps restore a stable, confident drive.",
    icon: CheckCircle2,
  },
  {
    title: "Rev Safely",
    text: "Our ignition repair service helps reduce starting trouble, misfires, and unsafe engine behaviour.",
    icon: ShieldCheck,
  },
  {
    title: "Schedule Ignition Repair",
    text: "Book a clear inspection and let our specialists repair or replace the faulty ignition system.",
    icon: Headphones,
  },
];

const ignitionParts = [
  {
    title: "Ignition Coil",
    text: "This converts the battery's low voltage into the high voltage needed to fire the spark plug and ignite the air-fuel mixture.",
    image: "/imgi_4_car-ignition-system-repair-pg-ignition-coil.webp",
  },
  {
    title: "Distributor Rotor",
    text: "This directs high-voltage current from the ignition coil to each spark plug in the correct firing order.",
    image: "/imgi_5_car-ignition-system-repair-pg-distributor-rotor.webp",
  },
  {
    title: "Spark Plug",
    text: "Spark plugs ignite the mixture inside the combustion chamber after receiving current from the ignition system.",
    image: "/imgi_6_car-ignition-system-repair-pg-spark-plug.webp",
  },
];

const warningSigns = [
  {
    title: "Vehicle Stalling",
    text: "A faulty ignition coil or weak spark can cause rough running, misfiring, or sudden stalling while driving.",
  },
  {
    title: "Insufficient Power To Spark Plugs",
    text: "Spark plugs cannot ignite fuel properly without enough power from the coil, which can lead to stalls, poor acceleration, or catalyst faults.",
  },
  {
    title: "Dashboard Lights",
    text: "A persistent check-engine warning after starting may point to an electrical or ignition fault that needs diagnosis.",
  },
  {
    title: "Change In Engine Sound",
    text: "Unusual cranking noises, silent starting attempts, or changes in engine sound can point to ignition trouble.",
  },
  {
    title: "Engine Misfire",
    text: "Sputtering, coughing, vibration, or rough idle can happen when spark plugs, coils, or wiring fail to fire correctly.",
  },
  {
    title: "Key Turning Or Moving",
    text: "If the key is difficult to turn when the steering lock is not engaged, the ignition switch may be at risk.",
  },
];

const processSteps = [
  {
    title: "Instantaneous Booking",
    text: "Book a quote online and our team will get back to you with practical next steps.",
    icon: ClipboardList,
  },
  {
    title: "Outclass Customer Service",
    text: "We listen to the symptoms, inspect the system, and explain the best repair route clearly.",
    icon: Headphones,
  },
  {
    title: "Guaranteed Output",
    text: "We test the repaired or replaced ignition system before handing the car back.",
    icon: Wrench,
  },
];

const faqItems = [
  {
    question: "What is a car ignition system?",
    answer:
      "A car ignition system creates the spark needed to ignite the fuel-air mixture in a petrol engine. Key parts include spark plugs, ignition coils, distributor components, the ignition switch, wiring, and related starting controls.",
  },
  {
    question: "How do you fix an ignition problem?",
    answer:
      "We inspect the battery condition, ignition switch, coils, plugs, wiring, fault codes, and starting circuit before repairing the faulty part or recommending replacement.",
  },
  {
    question: "What is the common problem in the ignition system?",
    answer:
      "Common issues include worn spark plugs, failed ignition coils, damaged wiring, a faulty ignition switch, distributor faults, and poor electrical connections.",
  },
  {
    question: "Can an ignition be replaced?",
    answer:
      "Yes. Depending on the fault, the ignition switch, barrel, coil, spark plugs, distributor parts, or related wiring can be replaced.",
  },
  {
    question: "How do you start a car with an ignition problem?",
    answer:
      "Avoid forcing the key or repeated starting attempts. If the vehicle will not start normally, book a diagnosis so the fault can be isolated safely.",
  },
  {
    question: "What are the 2 most common ignition systems?",
    answer:
      "Older vehicles often use distributor-based ignition, while many modern vehicles use distributorless or coil-on-plug ignition systems.",
  },
  {
    question: "How long does the ignition switch last?",
    answer:
      "It varies by vehicle use and wear. A switch can last many years, but heavy key rings, age, electrical wear, or lock damage can shorten its life.",
  },
  {
    question: "What is the voltage of a car ignition?",
    answer:
      "The vehicle battery is usually around 12 volts, but the ignition coil steps voltage up dramatically so the spark plug can fire.",
  },
];

function RedBullet({ title, text }: { title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <CircleDot className="mt-1 shrink-0 text-red-600" size={22} strokeWidth={5} />
      <div>
        <h3 className="text-xl font-black">{title}</h3>
        <p className="mt-3 text-base font-medium leading-8 text-neutral-800">{text}</p>
      </div>
    </li>
  );
}

export default function IgnitionRepairPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[670px] overflow-hidden bg-black text-white">
        <Image src="/imgi_83_Car-Ignition-System-hero-banner-image.webp" alt="Car ignition repair service" fill priority className="object-cover opacity-55" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="relative mx-auto flex min-h-[670px] max-w-[1800px] flex-col justify-center px-5 py-20 lg:px-10">
          <h1 className="max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Ignition Excellence - London Motor Sports&apos; Car Ignition Repair!
          </h1>
          <p className="mt-7 max-w-4xl text-base font-semibold leading-8 text-white/90">
            Restore the spark to your drive with our reliable car ignition repair service. Trust our skilled technicians to handle ignition issues with care.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="tel:+442033371831" className="inline-flex min-w-56 items-center justify-center rounded-md border-2 border-white bg-white px-8 py-4 text-sm font-black uppercase text-black transition hover:bg-transparent hover:text-white">
              Call Now
            </Link>
            <Link href="/appointment" className="inline-flex min-w-56 items-center justify-center rounded-md bg-red-600 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-red-700">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative min-h-[500px]">
            <Image src="/imgi_7_ignition-system-repair-london-motor-sports.webp" alt="Ignition repair mechanic" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 100vw, 38vw" />
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">What is a Car Ignition System & how does it work?</h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
              In a car, the ignition system creates the spark that ignites the fuel-air mixture and helps the engine start. The system includes important parts such as the battery, ignition coil, distributor rotor, spark plugs, switch, and wiring.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-800">
              Without a strong spark, the engine may not start, idle smoothly, or deliver power correctly. Whether you need a small repair or a full car ignition replacement, understanding the system helps you act before the fault becomes worse.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl">What Happens When Your Ignition Fails?</h2>
        <p className="mx-auto mt-6 max-w-5xl text-base font-medium leading-8 text-neutral-800">
          Ignition systems can fail through wear, poor contacts, weak coils, or unexpected electrical problems. These components are usually the first place we inspect.
        </p>
        <div className="mx-auto mt-12 grid max-w-[1800px] gap-0 md:grid-cols-3">
          {ignitionParts.map((part, index) => (
            <article key={part.title} className={index === 1 ? "bg-neutral-50" : "bg-red-600 text-white"}>
              <div className="relative h-96">
                <h3 className="relative z-10 px-6 pt-10 text-3xl font-black">{part.title}</h3>
                <Image src={part.image} alt={part.title} fill className="object-contain px-12 pt-24" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <p className="px-10 pb-12 text-base font-medium leading-8 text-current">{part.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-red-600 px-5 py-14 text-white lg:px-10">
        <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Book ignition repair" fill className="object-cover opacity-25" sizes="100vw" />
        <div className="relative mx-auto grid max-w-[1300px] gap-8 text-center md:grid-cols-2">
          <Link href="tel:+442033371831" className="inline-flex items-center justify-center gap-4 text-4xl font-black">
            <Phone size={44} />
            Call Us
          </Link>
          <Link href="/appointment" className="inline-flex items-center justify-center gap-4 text-4xl font-black">
            <CheckCircle2 size={44} />
            Book Online
          </Link>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-14 lg:grid-cols-[490px_1fr]">
          <aside className="space-y-8">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-80">
                <Image src="/imgi_138_auto-repair-pg-car-electrical-services-1.webp" alt="Best car mechanics in London" fill className="object-cover" sizes="490px" />
              </div>
              <div className="px-8 pb-10 text-center">
                <h3 className="text-2xl font-black">Best Car Mechanics in London</h3>
                <div className="relative mt-8 rounded-md bg-white px-8 py-8 text-left text-neutral-950">
                  <span className="absolute -left-12 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
                    <Phone size={32} />
                  </span>
                  <p className="text-xl font-black text-red-600">Call Now & Get A Free Quote</p>
                  <p className="mt-6 text-3xl font-black">+44 20 3337 1831</p>
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
              <div className="relative mb-12 min-h-[430px] overflow-hidden rounded-md">
                <Image src="/imgi_31_ignition-system-repair-london-motor-sports-1024x576.webp" alt="Car ignition key repair" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
              </div>
              <h2 className="text-4xl font-black leading-tight text-red-600 sm:text-5xl">London Motor Sports (LMS) is a trusted and smart vehicle repair platform</h2>
              <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
                London Motor Sports provides high-quality ignition repair services in W12. If your car will not start, the key is difficult to turn, or the engine misfires, our team can inspect the problem and recommend the right repair.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">Warning Signs that Help in Finding the Ignition Failure</h2>
              <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
                Ignition faults may start small, but ignoring them can cause more damage. These signs help you book a check before the problem gets worse.
              </p>
              <ul className="mt-10 space-y-8">
                {warningSigns.map((item) => (
                  <RedBullet key={item.title} {...item} />
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">We Provide Service Faster Than You Can Say</h2>
        <div className="mx-auto mt-16 grid max-w-[1800px] gap-12 md:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title}>
                <Icon className="mx-auto text-red-600" size={72} strokeWidth={1.8} />
                <h3 className="mt-7 text-2xl font-black">{index + 1}. {step.title}</h3>
                <p className="mx-auto mt-4 max-w-md text-base font-medium leading-8">{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[560px]">
          <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Get an ignition repair quote" fill className="object-cover object-left" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-10 text-center lg:px-16">
            <h2 className="text-4xl font-black">Get A Quote</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {["Enter Your Name", "Type Your Email", "Telephone", "Service You Want"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-16 rounded-md border border-neutral-900 px-6 text-base font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Additional Information" placeholder="Additional Information" className="mt-8 h-40 w-full rounded-md border border-neutral-900 px-6 py-6 text-base font-bold outline-none focus:border-red-600" />
            <button className="mt-8 inline-flex rounded-md bg-red-600 px-16 py-4 text-base font-black text-white transition hover:bg-red-700">Send Message</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">Get Swift & Reliable Ignition Repair</h2>
        <div className="mx-auto mt-16 grid max-w-[1800px] gap-10 md:grid-cols-3">
          {quickBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="px-4">
                <Icon className="mx-auto text-red-600" size={68} strokeWidth={1.8} />
                <h3 className="mt-7 text-3xl font-black text-red-600">{benefit.title}</h3>
                <p className="mx-auto mt-6 max-w-md text-base font-medium leading-8">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative min-h-[360px] overflow-hidden bg-black text-white">
        <Image src="/imgi_135_car-repair-hero-section-bg.webp" alt="Ignition repair solutions" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="relative mx-auto grid min-h-[360px] max-w-[1800px] items-center gap-8 px-5 py-16 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <h2 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl">Revive Your Engine Performance With Ignition Repair Solutions</h2>
            <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-white/90">
              At TaylorMOT in London, our expert mechanics can handle precision ignition system repairs for everyday drivers and performance vehicles.
            </p>
          </div>
          <Link href="/appointment" className="inline-flex justify-center rounded-md bg-red-600 px-8 py-4 text-xl font-black text-white transition hover:bg-red-700">
            Get Free Quote
          </Link>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <h2 className="text-center text-4xl font-black">Frequently Asked Questions</h2>
        <div className="mx-auto mt-12 max-w-[1500px] space-y-5">
          {faqItems.map((item, index) => (
            <details key={item.question} className="group border border-neutral-400" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-8 py-6 text-lg font-black text-neutral-800 group-open:text-red-600">
                {item.question}
                <ChevronDown className="shrink-0 text-red-600 transition group-open:rotate-180" size={30} />
              </summary>
              <p className="border-t border-neutral-300 px-8 py-6 text-base font-medium leading-8 text-neutral-800">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <Link href="https://wa.me/442033371831" className="fixed bottom-8 right-8 z-40 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl">
        <Phone size={34} />
        <span className="sr-only">Whatsapp</span>
      </Link>
    </main>
  );
}
