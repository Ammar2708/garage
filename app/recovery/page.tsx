import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  Car,
  Check,
  ChevronDown,
  Clock3,
  HeartHandshake,
  Phone,
  PoundSterling,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

const features = [
  {
    title: "Skilled Operators",
    text: "Careful recovery support from trained staff who handle vehicles with practical attention.",
    icon: HeartHandshake,
  },
  {
    title: "Garage Support",
    text: "Vehicles can be moved to our workshop for inspection, repair advice, and next steps.",
    icon: Wrench,
  },
  {
    title: "Clear Pricing",
    text: "We confirm the recovery plan and quote before work begins, with no confusing extras.",
    icon: PoundSterling,
  },
  {
    title: "Easy Booking",
    text: "Call or book online and we will guide you through the safest recovery option.",
    icon: Clock3,
  },
];

const recoveryChecks = [
  "Vehicle condition reviewed before loading.",
  "Safe loading for non-running or damaged cars.",
  "Transport to your chosen address or our garage.",
  "Repair guidance after arrival at the workshop.",
  "Support for accident-damaged and immobilised vehicles.",
];

const routeItems = [
  "Collect damaged vehicles and bring them to the garage.",
  "Provide the right truck and driver for the job.",
  "Arrange repair advice after the vehicle arrives.",
  "Keep you updated during the recovery process.",
  "Handle bookings Monday to Saturday.",
];

const assistance = [
  {
    title: "Prompt Recovery",
    text: "Share your location and vehicle issue so our team can advise the next move.",
    icon: Truck,
  },
  {
    title: "Save Time",
    text: "We reduce the stress of arranging transport when the vehicle cannot be driven.",
    icon: Clock3,
  },
  {
    title: "Flexible Booking",
    text: "Plans can be adjusted when schedules change, subject to availability.",
    icon: CalendarCheck,
  },
  {
    title: "Quote First",
    text: "You receive a clear recovery quote before confirming the job.",
    icon: ShieldCheck,
  },
  {
    title: "Ongoing Help",
    text: "Our workshop can inspect the vehicle and recommend practical repairs.",
    icon: Wrench,
  },
  {
    title: "Car Towing",
    text: "We tow vehicles safely to a garage, home address, or selected destination.",
    icon: Car,
  },
];

const faqs = [
  {
    question: "How do I request car recovery?",
    answer:
      "Call the team or use the booking form with your location, vehicle details, and the problem. We will confirm availability and the next steps.",
  },
  {
    question: "Can you take my vehicle to a specific place?",
    answer:
      "Yes. We can discuss transport to our garage, your home, or another agreed destination before confirming the recovery.",
  },
  {
    question: "What vehicles can you help with?",
    answer:
      "We mainly support cars and light vehicles. If your vehicle is larger or heavily damaged, contact us first so we can confirm the right option.",
  },
  {
    question: "How quickly can you arrive?",
    answer:
      "Arrival time depends on location, traffic, and availability. We will give a realistic estimate when you contact us.",
  },
];

function CheckItem({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <li className="flex items-start gap-3 border-b border-current/15 py-3 text-sm font-semibold leading-7 sm:text-base">
      <Check className={`mt-1 shrink-0 ${light ? "text-white" : "text-red-600"}`} size={18} strokeWidth={4} />
      <span>{children}</span>
    </li>
  );
}

export default function RecoveryPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[620px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_3_car_recovery_and_tow_hero_section-scaled-e1700571955457.webp"
          alt="Car recovery background"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto flex min-h-[620px] max-w-[1700px] flex-col items-center justify-center px-5 text-center lg:px-10">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-red-500">Recovery and towing support</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Quick Hook-Ups & Car Recovery
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/85">
            Safe vehicle collection, towing, and garage support when your car cannot continue the journey.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="tel:+441784240000"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-black uppercase text-black transition hover:bg-neutral-100"
            >
              <Phone size={18} />
              Call Now
            </Link>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-8 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700"
            >
              Book Now
              <CalendarCheck size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-56 bg-[repeating-linear-gradient(135deg,#f5bd00_0_210px,#050505_210px_380px)]" />
        <div className="relative mx-auto max-w-[1800px] px-5 pt-16 lg:px-10">
          <div className="relative mx-auto h-[300px] max-w-[1500px] sm:h-[420px]">
            <Image
              src="/imgi_4_n_65-1651587_tow-truck-png-tra.png"
              alt="Flatbed recovery truck"
              fill
              className="object-contain object-bottom"
              sizes="100vw"
            />
          </div>
          <div className="grid gap-8 pb-14 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="text-center">
                  <Icon className="mx-auto text-red-600" size={58} strokeWidth={1.7} />
                  <h2 className="mt-5 text-lg font-black">{item.title}</h2>
                  <p className="mx-auto mt-3 max-w-xs text-sm font-medium leading-7 text-neutral-700">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-2">
          <article className="relative min-h-[390px] overflow-hidden px-8 py-10 text-white">
            <Image src="/imgi_9_car_bg-1.webp" alt="Car recovery service" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-black/62" />
            <div className="relative">
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">Car Recovery</h2>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/90">
                If your vehicle is damaged, stranded, or unsafe to drive, we can arrange transport to a garage or agreed destination.
              </p>
              <Link href="tel:+441784240000" className="mt-10 inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-white text-white">
                <Phone size={28} />
              </Link>
            </div>
          </article>
          <article className="relative min-h-[390px] overflow-hidden px-8 py-10 text-white">
            <Image src="/imgi_139_auto-repair-pg-car-diagnostics-1-1.webp" alt="Car towing service" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-red-600/78" />
            <div className="relative">
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">Car Towing</h2>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/90">
                Stuck after a breakdown or collision? We help move the vehicle safely so the repair conversation can start sooner.
              </p>
              <Link href="tel:+441784240000" className="mt-10 inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-white text-white">
                <Phone size={28} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[420px]">
            <Image src="/imgi_87_Mask_Group_8.png" alt="Recovery truck in London" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Top-Tier <span className="text-red-600">Vehicle Recovery</span> Support
            </h2>
            <h3 className="mt-5 text-base font-black uppercase tracking-wide">Effective flatbed transportation</h3>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-700">
              Breakdowns rarely arrive at a convenient time. Our team helps organise recovery for cars that are damaged, stuck, or no longer safe to drive.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-700">
              Once the vehicle reaches the garage, we can inspect the issue, explain the repair path, and help you decide what should happen next.
            </p>
            <ul className="mt-7">
              {recoveryChecks.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid text-white lg:grid-cols-2">
        <div className="relative overflow-hidden bg-red-600 px-6 py-14 lg:px-14">
          <Image src="/imgi_87_Mask_Group_8.png" alt="Tow vehicle background" fill className="object-cover opacity-18" sizes="50vw" />
          <div className="relative">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Rescue Your Vehicle <span className="text-black">From Anywhere</span>
            </h2>
            <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-white/90">
              We collect vehicles from agreed London locations and transport them carefully. Our focus is simple: secure loading, clear communication, and a smooth handover.
            </p>
            <Link href="/contact" className="mt-10 inline-flex rounded-md bg-black px-8 py-3 text-sm font-black uppercase text-white transition hover:bg-neutral-900">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden bg-neutral-900 px-6 py-14 lg:px-14">
          <Image src="/imgi_88_Mask_Group_9.webp" alt="Recovery route background" fill className="object-cover opacity-20" sizes="50vw" />
          <div className="relative">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Guide The Route To <span className="text-red-500">Your Repair</span>
            </h2>
            <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-white/90">
              Recovery and repair planning work best together. We move the vehicle, assess the condition, and keep the next steps practical.
            </p>
            <ul className="mt-7">
              {routeItems.map((item) => (
                <CheckItem key={item} light>
                  {item}
                </CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1700px]">
          <div className="mb-10 text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-neutral-500">Emergency assistance</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Complete Recovery Support For Drivers
            </h2>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr_1fr]">
            <div className="space-y-7">
              {assistance.slice(0, 3).map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex gap-4">
                    <Icon className="mt-1 shrink-0 text-red-600" size={44} strokeWidth={1.8} />
                    <div>
                      <h3 className="text-lg font-black text-red-600">{item.title}</h3>
                      <p className="mt-2 text-sm font-medium leading-7 text-neutral-700">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="relative min-h-[420px]">
              <Image src="/imgi_4_n_65-1651587_tow-truck-png-tra.png" alt="Recovery truck rear view" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 33vw" />
            </div>
            <div className="space-y-7">
              {assistance.slice(3).map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex gap-4">
                    <Icon className="mt-1 shrink-0 text-red-600" size={44} strokeWidth={1.8} />
                    <div>
                      <h3 className="text-lg font-black text-red-600">{item.title}</h3>
                      <p className="mt-2 text-sm font-medium leading-7 text-neutral-700">{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-5 py-16 text-white lg:px-10">
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="Vehicle repair background" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="relative mx-auto grid max-w-[1700px] items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
              No Roadblock Too Tough, <span className="text-red-500">Get Reliable Recovery</span>
            </h2>
            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/85">
              From minor faults to accident recovery, we help move your vehicle safely and point you toward the right repair route.
            </p>
          </div>
          <Link href="tel:+441784240000" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-red-700">
            Call Now
            <Phone size={18} />
          </Link>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Established <span className="text-red-600">Recovery Services</span> In London
            </h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-700">
              London roads can be unpredictable, especially around busy junctions and narrow routes. If your vehicle is damaged or unsafe, planned recovery is often the better choice.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-700">
              We help arrange collection, move the vehicle carefully, and support the repair conversation after arrival.
            </p>
          </div>
          <div className="relative min-h-[420px]">
            <Image src="/imgi_39_stopwatch-416x491.webp" alt="Fast recovery stopwatch" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute right-0 top-10 -z-0 h-56 w-3/4 bg-red-600/90" />
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative px-5 py-16 lg:px-10">
          <div className="absolute inset-0 opacity-10">
            <Image src="/imgi_13_imgbin-car-club-united-states--e1700573401212.webp" alt="" fill className="object-contain object-center" sizes="50vw" />
          </div>
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Frequently <span className="text-red-600">Asked Questions</span>
            </h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group border border-red-600 bg-white" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 bg-white px-6 py-5 text-base font-black text-black group-open:bg-red-600 group-open:text-white">
                    <span>{faq.question}</span>
                    <ChevronDown className="shrink-0 transition group-open:rotate-180" size={22} />
                  </summary>
                  <p className="px-6 py-5 text-sm font-medium leading-7 text-neutral-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-black px-5 py-16 text-white lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-light uppercase leading-tight sm:text-4xl">
              Get A <span className="text-red-600">Callback</span>
            </h2>
            <form className="mt-10 grid gap-5 sm:grid-cols-2">
              {["Name", "Email", "Phone", "Subject"].map((field) => (
                <input
                  key={field}
                  aria-label={field}
                  placeholder={field}
                  className="h-14 rounded-md border border-white/70 bg-transparent px-5 text-sm font-semibold text-white outline-none placeholder:text-white/80 focus:border-red-500"
                />
              ))}
              <textarea
                aria-label="Message"
                placeholder="Message"
                className="min-h-28 rounded-md border border-white/70 bg-transparent px-5 py-4 text-sm font-semibold text-white outline-none placeholder:text-white/80 focus:border-red-500 sm:col-span-2"
              />
              <div className="flex h-20 items-center gap-4 bg-white px-5 text-sm font-medium text-black sm:col-span-2 sm:max-w-md">
                <span className="h-8 w-8 border-2 border-neutral-500" />
                <span>I&apos;m not a robot</span>
                <span className="ml-auto text-xs text-neutral-500">reCAPTCHA</span>
              </div>
              <button type="button" className="h-14 rounded-md bg-red-600 px-9 text-sm font-black uppercase text-white transition hover:bg-red-700 sm:col-span-2 sm:mx-auto">
                Submit
              </button>
            </form>
          </div>
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
