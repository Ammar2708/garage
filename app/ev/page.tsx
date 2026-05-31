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
  Zap,
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
  "EV Services",
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
  if (service === "EV Services") return "/ev";
  return "/auto";
};

const evChecks = [
  {
    title: "Battery Health",
    text: "We inspect charge condition, visible cabling, and scan battery-related faults.",
    image: "/imgi_18_car-battery-replacement-content-body-img-scaled.webp",
  },
  {
    title: "Cooling System",
    text: "EV battery and drive units rely on steady cooling, so leaks and levels are checked.",
    image: "/imgi_14_engine-coolant-replacement-content-body-img.webp",
  },
  {
    title: "Cabin Air Filter",
    text: "Fresh filtration keeps the cabin comfortable and supports clean airflow.",
    image: "/imgi_15_Cabin-Air-Filter-1.webp",
  },
];

const processSteps = [
  {
    title: "Book A Visit",
    text: "Share your EV model, warning lights, charging issue, or service request.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "EV Diagnostics",
    text: "We scan systems and inspect visible high-voltage safety areas carefully.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Service Work",
    text: "Our technicians carry out checks, maintenance, and approved repairs.",
    image: "/imgi_21_tyre-gallery-1-scaled.webp",
  },
  {
    title: "Final Report",
    text: "You receive clear guidance before your EV returns to the road.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "Reduced driving range or inconsistent charging",
  "Battery, charging, or drivetrain warning messages",
  "Unusual noise from brakes, tyres, or suspension",
  "Poor cabin heating, cooling, or air quality",
  "Software or diagnostic faults that need professional scanning",
];

const maintenanceItems = [
  {
    title: "Fewer Moving Parts",
    text: "EVs do not need engine oil, spark plugs, timing belts, or exhaust service, so routine visits are usually simpler.",
  },
  {
    title: "Brake And Tyre Care",
    text: "Regenerative braking reduces brake wear, but pads, discs, tyres, and suspension still need inspection.",
  },
  {
    title: "Battery Cooling",
    text: "Coolant checks help protect battery temperature control, charging performance, and long-term reliability.",
  },
  {
    title: "Software Diagnostics",
    text: "Professional scanning helps identify faults in charging, battery management, sensors, and control modules.",
  },
];

const whyCards = [
  {
    title: "EV-Aware Technicians",
    text: "Your electric vehicle is handled with careful checks and clear repair guidance.",
    icon: Wrench,
  },
  {
    title: "Advanced Diagnostics",
    text: "We use diagnostic tools to read EV system faults and explain the next step.",
    icon: ClipboardCheck,
  },
  {
    title: "Practical Convenience",
    text: "From scheduled servicing to fault checks, we keep the visit simple and focused.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "How often should I service my electric vehicle?",
    answer:
      "Most EVs should be checked at the interval shown in the owner manual. Many drivers book an inspection every 6 to 12 months, especially for brakes, tyres, filters, software faults, and cooling checks.",
  },
  {
    question: "Do EVs need less maintenance than petrol or diesel cars?",
    answer:
      "Usually, yes. EVs have fewer moving parts and do not need engine oil, spark plugs, fuel filters, timing belts, or exhaust work, but they still need safety and diagnostic checks.",
  },
  {
    question: "Is EV servicing cheaper than petrol or diesel servicing?",
    answer:
      "It can be cheaper for routine maintenance because there are fewer engine-related parts. The final cost depends on diagnostics, tyres, brakes, filters, coolant, and any fault found.",
  },
  {
    question: "Can I wait while my EV is being serviced?",
    answer:
      "For many routine checks, yes. More detailed diagnostics or repair work may require extra time, and we will confirm timing when booking.",
  },
  {
    question: "Do you offer MOT checks for electric vehicles?",
    answer:
      "Yes. EVs still require MOT testing, including checks for brakes, suspension, lights, tyres, steering, body condition, and safety systems.",
  },
];

const relatedResources = [
  {
    title: "Easy Guide To EV Battery Sensor Faults",
    text: "Learn why battery temperature warnings need prompt inspection.",
    date: "August 7, 2025",
    image: "/imgi_74_EV-service.png",
  },
  {
    title: "EV Battery Cooling System Checks",
    text: "A practical look at cooling problems and charging performance.",
    date: "August 6, 2025",
    image: "/imgi_14_engine-coolant-replacement-content-body-img.webp",
  },
  {
    title: "Repairing Battery Capacity Degradation",
    text: "Understand the checks used when range starts to drop.",
    date: "November 30, 2024",
    image: "/imgi_64_car-battery-Repairing.jpg",
  },
];

export default function EVPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[500px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_74_EV-service.png"
          alt="Electric vehicle service at TaylorMOT"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">EV services</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Electric Vehicle Services At <span className="text-red-500">TaylorMOT</span>
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Keep your EV safe, efficient, and ready for daily driving with careful diagnostics, battery checks, brake inspection, and routine maintenance.
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
          <div className="relative mx-auto min-h-[380px] w-full max-w-xl overflow-hidden rounded-md">
            <Image src="/imgi_74_EV-service.png" alt="EV technician carrying out service checks" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Professional <span className="text-red-600">Electric Car Servicing</span> In London
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              EVs need a different service approach from petrol and diesel cars. There is no engine oil or exhaust system to maintain, but batteries, brakes, tyres, filters, charging systems, and software faults still need expert checks.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT provides clear EV inspections and repair guidance so you know what needs attention now and what can be monitored for later.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_74_EV-service.png" alt="EV service garage in London" fill className="object-cover" sizes="430px" />
              </div>
              <div className="px-6 py-7">
                <h3 className="text-xl font-black">Best EV Mechanics In London</h3>
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
              <Image src="/imgi_74_EV-service.png" alt="Electric vehicle diagnostic service" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
              When Should You Book An EV Service?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Electric cars are simpler in some areas, but they should not be ignored. Book a check when the car shows a warning, loses range, charges inconsistently, or feels different under braking or steering.
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
              <Image src="/imgi_14_engine-coolant-replacement-content-body-img.webp" alt="EV cooling and maintenance inspection" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          What Regular Maintenance Does An <span className="text-red-600">Electric Car</span> Require?
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Routine EV servicing focuses on safety, battery support systems, tyres, brakes, filters, charging performance, and software diagnostics.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {evChecks.map((part) => (
            <article key={part.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className="relative h-64 bg-neutral-50">
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
        <h2 className="text-3xl font-black leading-tight sm:text-[31px]">Our EV Servicing Process</h2>
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
          <Image src="/imgi_74_EV-service.png" alt="Quote request for electric vehicle service" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET AN <span className="text-red-600">EV QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us what your electric vehicle needs</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="EV service details" placeholder="Tell us about range loss, charging faults, warnings, brake noise, tyre wear, or service history" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          Do Electric Vehicles Cost Less To Maintain?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          EV routine maintenance is often simpler than petrol or diesel servicing, but the car still needs regular checks to protect safety, comfort, and range.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {maintenanceItems.map((item) => (
            <div key={item.title} className="rounded-md border border-neutral-200 px-5 py-5">
              <h3 className="flex items-center gap-3 text-base font-black sm:text-lg">
                <Zap className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-neutral-800">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Why TaylorMOT For <span className="text-red-600">EV Services?</span>
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
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="Electric vehicle service appointment" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable EV care</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Book Your Electric Car Service Today
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
              Schedule a focused EV check for battery condition, charging faults, brake wear, tyres, filters, cooling, and diagnostics.
            </p>
            <Link href="/appointment" className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-7 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700">
              Book Appointment
              <CalendarCheck size={18} />
            </Link>
          </div>
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
