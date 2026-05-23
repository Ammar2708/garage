import Image from "next/image";
import Link from "next/link";
import {
  BadgePercent,
  CalendarCheck,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Phone,
  Settings,
  ShieldCheck,
  Star,
} from "lucide-react";

const services = [
  { title: "MOT Preparation", image: "/imgi_137_auto-repair-pg.car-mot-1-1.webp" },
  { title: "Electrical Fault Repairs", image: "/imgi_138_auto-repair-pg-car-electrical-services-1.webp" },
  { title: "Vehicle Diagnostics", image: "/imgi_139_auto-repair-pg-car-diagnostics-1-1.webp" },
  { title: "Oil & Fluid Service", image: "/imgi_140_aut-repair-car-oil-change-1-1.webp" },
  { title: "Tyres & Wheel Care", image: "/imgi_141_aut-repair-car-tyre-services-1-1.webp" },
  { title: "Fleet Support", image: "/imgi_142_aut-repair-car-modification-1.webp" },
  { title: "Mechanical Repairs", image: "/imgi_143_car-mechanical-services.webp" },
  { title: "Bodywork Repairs", image: "/imgi_144_auto-repairpg-car-bodywork-1-1.webp" },
  { title: "Full Car Servicing", image: "/imgi_145_aut-repair-car-servicing-1-1.webp" },
];

const repairFeatures = [
  {
    icon: ClipboardCheck,
    title: "Planned Maintenance",
    text: "Book routine servicing that helps prevent expensive repairs and keeps your vehicle road-ready.",
  },
  {
    icon: Car,
    title: "Model-Specific Care",
    text: "Our team follows repair methods suited to your vehicle make, model, and service history.",
  },
  {
    icon: CheckCircle2,
    title: "Inspect Before Repair",
    text: "We identify the fault first, explain the required work, then begin only once the scope is clear.",
  },
  {
    icon: Gauge,
    title: "Clear Job Updates",
    text: "Stay informed while your car is in the garage, from diagnosis through completion.",
  },
];

const pricePlans = [
  {
    name: "Engine Replacement",
    price: "£1,999 - £4,999",
    image: "/imgi_12_Auto-Repair-Pricing-Plan-Engine-Replacement.webp",
    note: "Includes inspection, fitting checks, and fluid top-ups where applicable.",
  },
  {
    name: "Brake Pads Replacement",
    price: "£150 - £800",
    image: "/imgi_8_Auto-Repair-Pricing-Plan-Brake-Pads-Replacement.webp",
    note: "Brake checks, pad replacement, and safety inspection included.",
  },
  {
    name: "Transmission Replacement",
    price: "£1,500 - £4,500",
    image: "/imgi_9_Auto-Repair-Pricing-Plan-Internal-Transmission-Repair.webp",
    note: "Diagnosis, replacement guidance, and post-repair checks included.",
  },
];

const brands = [
  "/imgi_18_1.png",
  "/imgi_19_8.png",
  "/imgi_20_9.png",
  "/imgi_21_7.png",
  "/imgi_23_14.png",
  "/imgi_27_10.png",
  "/imgi_28_5.png",
  "/imgi_29_2.png",
  "/imgi_80_1-300x218.png",
  "/imgi_81_8-300x218.png",
  "/imgi_82_9-300x218.png",
  "/imgi_83_7-300x218.png",
];

const whyUs = [
  {
    icon: BadgePercent,
    title: "Fair Pricing",
    text: "You receive a clear estimate before work begins, with no surprise extras added after approval.",
  },
  {
    icon: CalendarCheck,
    title: "Saturday Availability",
    text: "Busy during the week? Book selected repair and maintenance services on Saturdays.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Support",
    text: "Replacement work can include warranty coverage on eligible parts and labour.",
  },
];

const process = [
  { title: "Choose your repair", image: "/imgi_80_1-300x218.png" },
  { title: "Confirm your booking", image: "/imgi_81_8-300x218.png" },
  { title: "We inspect the vehicle", image: "/imgi_82_9-300x218.png" },
  { title: "Collect with confidence", image: "/imgi_83_7-300x218.png" },
];

const diagnostics = [
  "Engine warning light checks",
  "Steering and suspension diagnostics",
  "Electrical system testing",
  "Fuel system diagnostics",
  "Brake performance inspection",
  "Emissions and sensor checks",
];

const faqs = [
  {
    question: "How much does auto repair cost in London?",
    answer:
      "The final cost depends on the repair type, vehicle condition, parts required, and labour time. We inspect first and provide a clear estimate before starting work.",
  },
  {
    question: "Can I book a car repair online?",
    answer:
      "Yes. You can send your details through the quote form or call our team, and we will confirm the next available appointment.",
  },
  {
    question: "Do you handle both mechanical and body repairs?",
    answer:
      "Yes. Our services cover mechanical repairs, diagnostics, servicing, MOT preparation, bodywork, tyres, and electrical faults.",
  },
  {
    question: "Do you work on different vehicle makes?",
    answer:
      "Yes. We repair and maintain a wide range of everyday, premium, and commercial vehicles using suitable diagnostic equipment and quality parts.",
  },
  {
    question: "Should I repair my vehicle if it is under warranty?",
    answer:
      "Contact us first with your warranty details. We can advise on inspection, approved parts, and whether the repair may need manufacturer authorisation.",
  },
];

const QuoteForm = () => (
  <form className="rounded-[2rem] border border-[#f4070a] bg-white p-6 shadow-2xl sm:p-8 lg:p-10">
    <h2 className="text-center text-2xl font-black text-[#111827] sm:text-3xl">
      Request a Repair Quote
    </h2>
    <div className="mt-7 grid gap-5 sm:grid-cols-2">
      {[
        ["Full Name", "Enter your name"],
        ["Email Address", "Enter your email"],
        ["Telephone", "Enter your phone number"],
        ["Vehicle Reg", "Registration number"],
      ].map(([label, placeholder]) => (
        <label key={label} className="block text-sm font-black text-[#111827]">
          {label} <span className="text-[#f4070a]">*</span>
          <input
            className="mt-3 h-12 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 text-sm font-medium outline-none transition focus:border-[#f4070a] focus:bg-white"
            placeholder={placeholder}
          />
        </label>
      ))}
    </div>
    <label className="mt-6 block text-sm font-black text-[#111827]">
      Repair Details <span className="text-[#f4070a]">*</span>
      <textarea
        className="mt-3 min-h-24 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-[#f4070a] focus:bg-white"
        placeholder="Tell us what needs checking or repairing"
      />
    </label>
    <button
      type="submit"
      className="mt-6 w-full rounded-lg bg-[#f4070a] px-8 py-3 text-lg font-black text-white transition hover:bg-red-700"
    >
      Submit Request
    </button>
  </form>
);

const AutoPage = () => {
  return (
    <main className="bg-white font-sans text-black">
      <section className="relative overflow-hidden bg-white">
        <Image src="/imgi_135_car-repair-hero-section-bg.webp" alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Professional <span className="text-[#f4070a]">Auto Repair</span> and
              Maintenance Services
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-7 sm:text-lg">
              Reliable repairs, accurate diagnostics, and clear estimates from a
              West London team focused on quality workmanship and practical advice.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="tel:+442033371831" className="rounded-xl border-2 border-black bg-white px-8 py-3 text-base font-black transition hover:bg-black hover:text-white">
                CALL NOW
              </Link>
              <Link href="/contact" className="rounded-xl bg-[#f4070a] px-8 py-3 text-base font-black text-white transition hover:bg-red-700">
                BOOK NOW
              </Link>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[440px]">
            <Image
              src="/imgi_3_hero-car-repair-hero-section-img-1-768x646-1.webp"
              alt="Car repair tools, vehicle, and engine"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#292929] px-4 py-10 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.2fr_0.8fr_0.65fr]">
          <h2 className="text-2xl font-black leading-tight sm:text-3xl">
            Fast Estimates
            <br />
            <span className="text-[#f4070a]">For Reliable Repairs</span>
          </h2>
          <p className="max-w-xl text-base font-semibold leading-7">
            From bodywork and diagnostics to major mechanical repairs, we assess
            the issue clearly so you can make the right decision.
          </p>
          <div className="relative hidden min-h-[150px] lg:block">
            <Image src="/imgi_4_Auto-Repair-Running-Smooth-uniing-Key-Images.webp" alt="Car key" fill className="object-contain" sizes="25vw" />
          </div>
          <Link href="/contact" className="justify-self-start border border-[#f4070a] px-7 py-3 text-base font-black transition hover:bg-[#f4070a] lg:justify-self-end">
            Get Estimate
          </Link>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.56fr_0.44fr]">
          <div className="relative min-h-[420px]">
            <div className="absolute left-[22%] top-0 h-full w-[36%] skew-x-[-14deg] bg-[#f4070a]/80" />
            <Image
              src="/imgi_5_car-repair-pg-1st-section-imagepicture-1.webp"
              alt="Technician repairing a vehicle"
              width={360}
              height={500}
              className="absolute left-0 top-20 h-[360px] w-[46%] rounded-lg object-cover shadow-lg"
            />
            <Image
              src="/imgi_13_car-repair-pg-section-img-left-1.webp"
              alt="Engine repair close up"
              width={360}
              height={330}
              className="absolute right-4 top-36 h-[300px] w-[44%] rounded-lg object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Clear Repair Advice Before Work Begins
            </h2>
            <div className="mt-6 space-y-4 text-base font-medium leading-7 sm:text-lg">
              <p>
                Whether your car needs a minor repair, diagnostics, or a full
                service, our technicians inspect it carefully and explain the
                recommended work in plain language.
              </p>
              <p>
                We support private drivers and business vehicles with dependable
                workmanship, transparent estimates, and efficient turnaround.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-5">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-[#f4070a] text-white">
                <Phone className="h-8 w-8" />
              </span>
              <div>
                <p className="text-lg font-black text-[#f4070a]">Call Our Team</p>
                <Link href="tel:+442033371831" className="text-2xl font-black">
                  +44 203 337 1831
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-4 py-12 text-white sm:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-base font-black uppercase text-[#f4070a]">
                Repair, servicing, diagnostics
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
                Complete Vehicle Repair & Maintenance
              </h2>
            </div>
            <Link href="/contact" className="rounded-lg bg-[#f4070a] px-8 py-3 text-base font-black text-white transition hover:bg-red-700">
              BOOK CAR SERVICE NOW
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group relative min-h-[260px] overflow-hidden border border-white/20">
                <Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#f4070a]/75 to-transparent p-7">
                  <h3 className="text-2xl font-black">{service.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-12 sm:px-8 lg:py-16">
        <div className="absolute inset-0 opacity-5">
          <Car className="mx-auto h-full w-[80%]" strokeWidth={1} />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            A Repair Process Built Around Confidence
          </h2>
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_380px_1fr]">
            <div className="space-y-8">
              {repairFeatures.slice(0, 2).map((item) => (
                <div key={item.title} className="grid grid-cols-[90px_1fr] gap-5">
                  <span className="grid h-20 w-20 place-items-center bg-[#f4070a] text-black">
                    <item.icon className="h-12 w-12" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 text-base font-medium leading-7">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative min-h-[330px]">
              <Image src="/imgi_7_car-repair-pg-rotating-section-img-1.webp" alt="Automotive service parts" fill className="object-contain" sizes="420px" />
            </div>
            <div className="space-y-8">
              {repairFeatures.slice(2).map((item) => (
                <div key={item.title} className="grid grid-cols-[90px_1fr] gap-5">
                  <span className="grid h-20 w-20 place-items-center bg-[#f4070a] text-black">
                    <item.icon className="h-12 w-12" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 text-base font-medium leading-7">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#333] px-4 py-12 text-white sm:px-8 lg:py-16">
        <Image src="/imgi_146_Auto-Repair-Pricing-Plan-Background-Image.webp" alt="" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Featured Repair Price Guides
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-base font-medium leading-7 sm:text-lg">
            These guide prices help you plan ahead. We confirm the final estimate
            after inspecting your vehicle and checking parts availability.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricePlans.map((plan) => (
              <article key={plan.name} className="bg-white px-7 py-9 text-[#292929]">
                <h3 className="text-xl font-black">{plan.name}</h3>
                <p className="mt-4 text-4xl font-black">{plan.price}</p>
                <div className="relative mx-auto mt-8 h-60 max-w-sm">
                  <Image src={plan.image} alt={plan.name} fill className="object-contain" sizes="360px" />
                </div>
                <p className="mt-6 min-h-16 text-base font-medium leading-7">{plan.note}</p>
                <Link href="tel:+442033371831" className="mt-7 inline-block border border-[#292929] px-8 py-3 text-base font-black transition hover:bg-[#f4070a] hover:text-white">
                  CALL NOW
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-black text-[#292929] sm:text-4xl">
            We Work on a Wide Range of Makes & Models
          </h2>
          <p className="mx-auto mt-5 max-w-5xl text-base font-medium leading-7 text-[#333] sm:text-lg">
            From daily-use hatchbacks to premium vehicles and commercial fleets,
            our technicians use the right equipment, checks, and repair methods
            for each job.
          </p>
          <div className="mx-auto mt-8 h-1 w-20 bg-[#f4070a]" />
          <div className="mt-10 grid grid-cols-2 gap-px bg-gray-200 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div key={brand} className="grid h-36 place-items-center bg-white p-6">
                <Image src={brand} alt="Vehicle brand logo" width={150} height={110} className="max-h-24 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative grid overflow-hidden bg-black lg:grid-cols-2">
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="relative z-10 flex min-h-[720px] flex-col justify-center px-4 py-16 text-white sm:px-8 lg:px-14">
          <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            Restore Performance With a Clear Repair Plan
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8">
            Tell us what your vehicle is doing, what has changed, and when you
            need it back. We will review the details and respond with the next
            practical step.
          </p>
          <div className="mt-10 flex gap-4">
            {["f", "ig", "yt", "in"].map((label) => (
              <Link
                key={label}
                href="#"
                className="grid h-12 w-12 place-items-center rounded bg-white/10 text-sm font-black uppercase text-white transition hover:bg-[#f4070a]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative z-10 flex items-center px-4 py-16 sm:px-8 lg:px-10">
          <QuoteForm />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Book a Clear and Affordable Repair Estimate
          </h2>
          <p className="mx-auto mt-5 max-w-5xl text-base font-medium leading-7 sm:text-lg">
            We keep the process simple: inspect the car, explain the issue,
            confirm the estimate, and complete the approved work with care.
          </p>
          <div className="mx-auto mt-10 h-1 w-20 bg-[#f4070a]" />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {whyUs.map((item) => (
              <article key={item.title} className="bg-[#f7f7f7] px-8 py-12">
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-[#ffc417] text-white">
                  <item.icon className="h-12 w-12" fill="currentColor" />
                </div>
                <h3 className="mt-8 text-2xl font-black text-[#444]">{item.title}</h3>
                <p className="mx-auto mt-4 max-w-sm text-base font-semibold leading-7 text-[#666]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8 lg:pb-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-black text-[#333] sm:text-4xl">How It Works</h2>
          <p className="mx-auto mt-5 max-w-5xl text-base font-medium leading-7 text-[#333] sm:text-lg">
            Your booking moves through a clear sequence so you always know where
            the job stands.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <article key={step.title}>
                <div className="relative mx-auto grid h-64 w-64 place-items-center rounded-full bg-[#f5f5f5]">
                  <span className="absolute left-6 top-0 text-8xl font-black text-black/5">
                    0{index + 1}
                  </span>
                  <Image src={step.image} alt={step.title} width={170} height={130} className="relative z-10 max-h-36 w-auto object-contain" />
                </div>
                <h3 className="mt-6 text-xl font-black text-[#333]">{step.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black sm:text-4xl">Quality Parts and Accurate Diagnostics</h2>
          <p className="mt-6 text-base font-medium leading-7 sm:text-lg">
            We use suitable parts and proven diagnostic routines to protect your
            vehicle&apos;s reliability. If performance drops, warning lights appear,
            or handling feels different, our team can trace the issue and explain
            the repair options before work begins.
          </p>
          <h3 className="mt-8 text-2xl font-black">
            Diagnostic checks available for common repair faults
          </h3>
          <ul className="mt-6 grid gap-4 text-base font-medium sm:grid-cols-2 sm:text-lg">
            {diagnostics.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <Settings className="h-7 w-7 text-[#f4070a]" fill="currentColor" />
                {item}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-2xl font-black">
            Dependable repairs with the right tools at hand
          </h3>
          <p className="mt-5 text-base font-medium leading-7 sm:text-lg">
            Our workshop is equipped for mechanical repairs, diagnostics, servicing,
            replacement work, and body care. Book an appointment and we will help
            you plan the most sensible repair route for your vehicle.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[320px_1fr]">
          <div className="text-center">
            <p className="text-4xl font-black">Good</p>
            <div className="mt-2 flex justify-center gap-1 text-[#ffcf21]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-7 w-7" fill="currentColor" />
              ))}
            </div>
            <p className="mt-3 text-xl font-medium">
              Based on <span className="font-black">1k+</span> Reviews
            </p>
            <p className="mt-3 text-4xl font-medium tracking-tight">
              <span className="text-[#4285f4]">G</span>
              <span className="text-[#ea4335]">o</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </p>
          </div>
          <blockquote className="rounded-2xl bg-[#f5f5f5] p-8">
            <div className="flex gap-1 text-[#ffcf21]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5" fill="currentColor" />
              ))}
            </div>
            <p className="mt-5 text-lg italic leading-8 text-[#333]">
              The team diagnosed the fault quickly, explained the repair clearly,
              and returned the car in excellent condition. Professional service
              from start to finish.
            </p>
            <cite className="mt-6 block text-lg font-black not-italic">Verified customer</cite>
          </blockquote>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="border border-gray-500 p-6" open={index === 0}>
                <summary className="cursor-pointer list-none text-lg font-black text-[#333] marker:hidden">
                  <span className={index === 0 ? "text-[#f4070a]" : ""}>{faq.question}</span>
                </summary>
                <p className="mt-5 text-base font-medium leading-7">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[420px] overflow-hidden bg-black">
        <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="" fill className="object-cover opacity-50" sizes="100vw" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 mx-auto grid min-h-[420px] max-w-7xl items-center gap-8 px-4 py-16 text-white sm:px-8 lg:grid-cols-[1fr_0.45fr]">
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Your Trusted <span className="text-[#f4070a]">Auto Repair Garage</span> in West London
            </h2>
            <p className="mt-5 max-w-3xl text-lg font-medium leading-8">
              For servicing, diagnostics, bodywork, and mechanical repairs, our
              team is ready to help you get back on the road with confidence.
            </p>
          </div>
          <Link href="/contact" className="justify-self-start rounded-lg bg-[#f4070a] px-8 py-4 text-lg font-black transition hover:bg-red-700 lg:justify-self-end">
            BOOK APPOINTMENT NOW
          </Link>
        </div>
      </section>

      <Link
        href="https://wa.me/442033371831"
        className="fixed bottom-8 right-6 z-[120] flex items-center gap-3"
        aria-label="Contact TAYLORMOT on WhatsApp"
      >
        <span className="rounded-xl bg-white px-4 py-2 text-lg font-medium text-[#333] shadow-lg">
          Whatsapp
        </span>
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#39e75f] text-white shadow-xl">
          <Phone className="h-8 w-8" fill="currentColor" />
          <span className="absolute -bottom-3 -right-3 -z-10 h-14 w-14 rounded-full bg-black" />
        </span>
      </Link>
    </main>
  );
};

export default AutoPage;
