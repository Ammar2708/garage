import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarCheck,
  ChevronDown,
  Phone,
  Settings,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const trustItems = [
  {
    title: "Detailed Checks",
    text: "A careful inspection of service items that influence safety, comfort, and daily reliability.",
    icon: BadgeCheck,
  },
  {
    title: "Complete Servicing",
    text: "From fluids to filters, we review the important wear points your car depends on.",
    icon: Wrench,
  },
  {
    title: "Trained Mechanics",
    text: "Experienced technicians handle your vehicle with practical, model-aware maintenance advice.",
    icon: ShieldCheck,
  },
];

const serviceIncludes = [
  "Engine oil and filter review",
  "Brake condition and fluid checks",
  "Coolant, radiator, and hose inspection",
  "Tyre pressure and wheel balance check",
  "Battery, lights, and charging system",
  "Air, cabin, and fuel filter checks",
];

const whyChoose = [
  "Clear service advice before work starts",
  "Competitive pricing and straightforward booking",
  "Comfortable waiting area with Wi-Fi",
  "Modern tools for inspection and diagnostics",
  "Service options for daily drivers and long-distance users",
];

const warningSigns = [
  "Dashboard warning lights",
  "Lower fuel efficiency",
  "Vibration while braking",
  "Rough idle or unusual engine noise",
  "Weak air conditioning or heating",
  "Longer stopping distance",
];

const skipService = [
  "Small faults can become expensive repairs.",
  "Dirty oil and blocked filters can increase engine wear.",
  "Brake or suspension issues may affect road safety.",
  "A weak service history can reduce buyer confidence.",
  "MOT preparation can become harder if maintenance is delayed.",
];

const faqs = [
  {
    question: "What is included in a full car service?",
    answer:
      "A full service reviews key maintenance items such as oil, filters, brakes, tyres, steering, suspension, fluids, lights, battery, and visible wear points.",
  },
  {
    question: "How often should I book a full service?",
    answer:
      "Most drivers book once a year or around every 12,000 miles, but your vehicle manual, mileage, and driving conditions can change the right interval.",
  },
  {
    question: "Can I book service and MOT together?",
    answer:
      "Yes. Booking both together is often convenient because service checks can highlight issues before the MOT inspection.",
  },
  {
    question: "Can I wait while the car is serviced?",
    answer:
      "For some jobs, yes. Timing depends on the work required, parts availability, and workshop schedule, so it is best to confirm when booking.",
  },
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm font-semibold leading-7 sm:text-base">
      <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-red-600" />
      <span>{children}</span>
    </li>
  );
}

function GearItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm font-semibold leading-7 sm:text-base">
      <Settings className="mt-1 shrink-0 text-red-600" size={19} strokeWidth={3} />
      <span>{children}</span>
    </li>
  );
}

export default function WashPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative overflow-hidden bg-[#f8f8f8]">
        <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_center,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:7px_7px]" />
        <div className="relative mx-auto grid min-h-[660px] max-w-[1900px] items-center gap-6 px-5 py-12 lg:grid-cols-[0.52fr_0.48fr] lg:px-8 xl:px-12">
          <div className="relative order-2 min-h-[360px] self-end lg:order-1 lg:min-h-[570px]">
            <Image
              src="/imgi_3_hero-banner-img-car-servicing.webp"
              alt="Blue car and mechanic for full car service"
              fill
              priority
              className="object-contain object-bottom-left"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>
          <div className="order-1 mx-auto max-w-[780px] text-center lg:order-2 lg:ml-auto lg:mr-0 lg:pt-5">
            <h1 className="text-4xl font-black leading-[1.06] sm:text-5xl xl:text-6xl">
              Your Trusted Local Garage for Full Service & Auto Repairs
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-sm font-medium leading-7 text-neutral-800 sm:text-base lg:ml-auto">
              Keep your vehicle performing at its best with a comprehensive service from our West London garage. Whether you commute daily or prepare for longer journeys, we help your car stay road-ready.
            </p>
            <div className="mt-20 flex flex-wrap justify-center gap-7 lg:justify-end">
              <Link href="/appointment" className="inline-flex min-w-64 items-center justify-center gap-2 rounded-md bg-red-600 px-8 py-4 text-base font-black uppercase text-white transition hover:bg-red-700">
                Book Now
                <CalendarCheck size={18} />
              </Link>
              <Link href="tel:+441784240000" className="inline-flex min-w-64 items-center justify-center gap-2 rounded-md border-2 border-black px-8 py-4 text-base font-black uppercase text-black transition hover:bg-black hover:text-white">
                Call Now
                <Phone size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] gap-10 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="text-center">
                <Icon className="mx-auto text-red-600" size={72} strokeWidth={1.6} />
                <h2 className="mt-6 text-xl font-black">{item.title}</h2>
                <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-7 text-neutral-700">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-neutral-50 px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[430px]">
            <Image src="/imgi_4_get-to-know-about-us-car-servicing.webp" alt="Mechanics servicing a car" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-600">Verified and trusted</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">What Is A Full Service?</h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-700">
              A full service is a detailed maintenance visit that checks the parts your vehicle relies on every day. It helps catch wear early, protect performance, and keep the car more dependable between MOT dates.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-700">
              Our technicians review fluids, filters, brakes, tyres, lights, battery, steering, suspension, and visible mechanical condition before explaining the work clearly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/appointment" className="rounded-md bg-red-600 px-8 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700">
                Book Now
              </Link>
              <Link href="tel:+441784240000" className="rounded-md bg-red-600 px-8 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700">
                Call For Booking
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1700px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">What Is Included In Our Full Service?</h2>
              <p className="mt-5 text-base font-medium leading-8 text-neutral-700">
                Your service is built around practical checks that support safer driving, better reliability, and clearer repair planning.
              </p>
              <ul className="mt-7 space-y-3">
                {serviceIncludes.map((item) => (
                  <GearItem key={item}>{item}</GearItem>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">Why Choose TaylorMOT?</h2>
              <p className="mt-5 text-base font-medium leading-8 text-neutral-700">
                We keep the process clear from booking to handover, with professional checks and useful guidance for your vehicle.
              </p>
              <ul className="mt-7 space-y-3">
                {whyChoose.map((item) => (
                  <GearItem key={item}>{item}</GearItem>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-xl border-2 border-red-600 p-6 sm:p-9">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">Warning Signs You May Need A Full Service</h2>
            <p className="mt-5 max-w-5xl text-base font-medium leading-8 text-neutral-700">
              Early signs are easy to ignore, but they can point to wear, low fluids, or parts that need attention. Book a check if you notice any of these changes.
            </p>
            <ul className="mt-7 grid gap-3 md:grid-cols-2">
              {warningSigns.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-xl border-2 border-red-600 p-6 sm:p-9">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">What Happens If You Skip A Full Service?</h2>
            <p className="mt-5 max-w-5xl text-base font-medium leading-8 text-neutral-700">
              Delayed maintenance can make small issues harder to control. A regular service gives you a better chance of spotting concerns before they become disruptive.
            </p>
            <ul className="mt-7 space-y-3">
              {skipService.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid bg-red-600 text-white lg:grid-cols-[0.7fr_1.3fr]">
        <div className="relative min-h-[300px]">
          <Image src="/imgi_72_image-26.webp" alt="Car service appointment" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
        </div>
        <div className="px-6 py-12 lg:px-14">
          <h2 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
            Schedule Your Car Service At 6, 12, Or 24 Month Intervals
          </h2>
          <p className="mt-5 max-w-4xl text-base font-semibold leading-8 text-white/90">
            Regular checks help your car stay efficient, comfortable, and prepared for everyday driving around W12 and beyond.
          </p>
          <Link href="tel:+441784240000" className="mt-8 inline-flex items-center gap-3 text-3xl font-black text-white sm:text-4xl">
            <Phone size={34} />
            +44 1784 240000
          </Link>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-flex rounded-md bg-red-600 px-8 py-3 text-lg font-black text-white">Frequently Asked Questions</span>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <a key={faq.question} href={`#${faq.question.toLowerCase().replaceAll(" ", "-").replaceAll("?", "")}`} className="block text-base font-medium underline underline-offset-4">
                  {faq.question}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <details key={faq.question} id={faq.question.toLowerCase().replaceAll(" ", "-").replaceAll("?", "")} className="group border-b border-neutral-200 pb-6" open={faq === faqs[0]}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-xl font-black">
                  <span>{faq.question}</span>
                  <ChevronDown className="shrink-0 text-red-600 transition group-open:rotate-180" size={24} />
                </summary>
                <p className="mt-4 text-base font-medium leading-8 text-neutral-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-5 py-16 text-white lg:px-10">
        <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Garage background" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="relative mx-auto flex max-w-[1700px] flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-red-500">Need a service slot?</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
              Keep Your Vehicle Running Smoothly With TaylorMOT
            </h2>
            <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-white/85">
              Book a full service, ask about MOT preparation, or call for practical advice before your next journey.
            </p>
          </div>
          <Link href="/appointment" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-red-600 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-red-700">
            Book Appointment
            <Sparkles size={18} />
          </Link>
        </div>
      </section>

      <Link
        href="https://wa.me/441784240000"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-semibold text-neutral-700 shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <span>Whatsapp</span>
        <span className="grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-[18px_16px_0_rgba(0,0,0,0.95)]">
          <Phone size={28} />
        </span>
      </Link>
    </main>
  );
}
