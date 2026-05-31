import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Gauge,
  MonitorCheck,
  Phone,
  ScanLine,
  ShieldCheck,
} from "lucide-react";

const diagnosticServices = [
  "Check engine light diagnosis",
  "Electrical system diagnostics",
  "Fuel system diagnostics",
  "Steering system diagnostics",
  "Brake system diagnostics",
  "Emission system diagnostics",
];

const scanSteps = [
  {
    title: "Choose The Service",
    text: "Tell us what you have noticed, from dashboard lights to unusual sounds, and we will recommend the right diagnostic route.",
    icon: ClipboardCheck,
  },
  {
    title: "Schedule Your Appointment",
    text: "Pick a convenient time and our team will reserve the diagnostic slot before your vehicle arrives.",
    icon: CalendarCheck,
  },
  {
    title: "Receive Clear Results",
    text: "We scan, inspect, and explain the findings in plain language so you can approve the right repair with confidence.",
    icon: MonitorCheck,
  },
];

const trustPoints = [
  "Technicians on-site",
  "Licensed and certified service",
  "Precise diagnostic testing",
  "Clear and detailed reporting",
];

const moduleChecks = [
  "Engine control module",
  "Transmission control module",
  "Anti-lock braking system",
  "Steering angle system",
  "Tyre pressure monitoring system",
  "Lighting and comfort control system",
  "Body control module",
];

const mechanicalServices = [
  "Engine Replacement",
  "Automatic Gearbox Replacement",
  "Brake Pad Replacement",
  "Shock Absorber Repair",
  "Car Exhaust Repair & Replacement",
  "Power Steering Replacement",
  "Car AC Repair",
  "Fuel System Repair",
  "Clutch Replacement",
  "Timing Belt Replacement",
  "Auxiliary Belt Replacement",
  "Engine Mount Replacement",
  "Turbo Replacement",
];

const categoryLinks = [
  { label: "Car Mechanical Services", href: "/auto", active: true },
  { label: "Car Body Repair", href: "/auto" },
  { label: "Car Electrician Services", href: "/auto" },
  { label: "Fluid & Oil Change Services", href: "/auto" },
  { label: "Wheel & Tyre Services", href: "/auto" },
];

const faqItems = [
  {
    question: "What is a car diagnostic service?",
    answer:
      "A car diagnostic service uses professional scan tools and technician checks to read vehicle fault data, test live values, and identify the likely cause of warning lights, poor performance, starting issues, or unusual behaviour.",
  },
  {
    question: "How much does a car diagnostic cost in the UK?",
    answer:
      "The cost depends on the depth of testing, vehicle model, and whether extra investigation is needed after the scan. We explain the diagnostic scope and quote clearly before work starts.",
  },
  {
    question: "Why should a car diagnostic test be performed?",
    answer:
      "A diagnostic test helps locate faults before parts are replaced. It can save time, reduce guesswork, and help prevent small issues from becoming expensive repairs.",
  },
  {
    question: "What is done during a car diagnostic?",
    answer:
      "We read fault codes, review live sensor data, inspect related systems, verify symptoms, and provide a practical report with recommended next steps.",
  },
  {
    question: "Do I need a diagnostic service if my dashboard has no warning lights?",
    answer:
      "Yes, sometimes. A vehicle can have stored or pending faults without a visible warning light, especially if you notice rough running, poor fuel economy, unusual noises, or intermittent starting issues.",
  },
  {
    question: "Can a diagnostic service predict future problems?",
    answer:
      "It cannot predict every future failure, but it can reveal early warning signs, stored faults, sensor irregularities, and system data that help you act before a breakdown.",
  },
];

export default function DiagnosticServicePage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[720px] overflow-hidden bg-black text-white">
        <Image src="/imgi_4_Car-Diagnostics-Car-Diagnostics-Check-Image.webp" alt="Car diagnostic scanner connected to vehicle" fill priority className="object-cover opacity-55" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-red-950/60" />
        <div className="relative mx-auto flex min-h-[720px] max-w-[1800px] flex-col justify-center px-5 py-20 lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-400">Vehicle fault finding</p>
          <h1 className="mt-5 max-w-6xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Car Diagnostic Scans That Find Faults Before They Become Repairs
          </h1>
          <p className="mt-7 max-w-4xl text-base font-semibold leading-8 text-white/90">
            Modern vehicles rely on sensors, modules, and electronic systems. TaylorMOT uses professional diagnostic equipment and experienced technicians to identify faults accurately, explain the results clearly, and help you choose the right repair.
          </p>
          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diagnosticServices.map((service) => (
              <div key={service} className="flex items-center gap-3 text-sm font-bold">
                <CheckCircle2 className="shrink-0 text-red-500" size={22} />
                {service}
              </div>
            ))}
          </div>
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
        <div className="mx-auto grid max-w-[1700px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[520px]">
            <div className="absolute left-0 top-28 h-[330px] w-[68%] overflow-hidden rounded-md">
              <Image src="/imgi_139_auto-repair-pg-car-diagnostics-1-1.webp" alt="Diagnostic technician checking engine" fill className="object-cover" sizes="(max-width: 1024px) 80vw, 32vw" />
            </div>
            <div className="absolute right-0 top-0 h-[330px] w-[54%] overflow-hidden rounded-md">
              <Image src="/imgi_138_auto-repair-pg-car-electrical-services-1.webp" alt="Technician using vehicle diagnostic tablet" fill className="object-cover" sizes="(max-width: 1024px) 70vw, 26vw" />
            </div>
            <div className="absolute bottom-0 left-[28%] rounded-md bg-white px-8 py-8 shadow-2xl">
              <ShieldCheck className="text-red-600" size={54} />
              <p className="mt-4 text-sm font-black uppercase">Certified service</p>
              <p className="mt-2 text-2xl font-black">Approved Auto Repair</p>
            </div>
          </div>
          <div>
            <p className="flex items-center gap-4 text-lg font-medium text-red-600">
              <span className="h-1 w-20 bg-red-600" />
              Troubleshoot Problems
            </p>
            <h2 className="mt-8 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Professional Car Diagnostics To Locate The Real Error</h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
              A warning light is only the starting point. We combine scan data with hands-on checks so the cause is confirmed before any repair is recommended.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-800">
              Our diagnostic service covers common issues such as engine management warnings, poor starting, electrical faults, fuel delivery problems, braking alerts, steering messages, and emissions concerns.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {diagnosticServices.map((service) => (
                <div key={service} className="flex items-center gap-3 text-lg font-semibold">
                  <CheckCircle2 className="shrink-0 text-red-600" size={28} />
                  {service}
                </div>
              ))}
            </div>
            <Link href="tel:+441784240000" className="mt-10 inline-flex items-center gap-4 rounded-md bg-red-600 px-10 py-4 text-lg font-black uppercase text-white transition hover:bg-red-700">
              Call Now
              <CheckCircle2 size={24} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl">
          Car <span className="text-red-600">Diagnostic Scan</span> In Simple Steps
        </h2>
        <div className="mx-auto mt-16 grid max-w-[1800px] gap-12 md:grid-cols-3">
          {scanSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="px-4">
                <Icon className="mx-auto text-red-600" size={88} strokeWidth={1.7} />
                <h3 className="mt-7 text-2xl font-black">{step.title}</h3>
                <p className="mx-auto mt-5 max-w-md text-base font-medium leading-8">{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-5 py-20 text-white lg:px-10">
        <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Diagnostic service background" fill className="object-cover opacity-25" sizes="100vw" />
        <div className="relative mx-auto grid max-w-[1700px] gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="flex items-center gap-4 text-lg font-medium">
              <span className="h-1 w-20 bg-red-600" />
              Smart Inspection
            </p>
            <h2 className="mt-8 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Leave Your Car In Safe Hands</h2>
            <p className="mt-7 max-w-4xl text-base font-semibold leading-8 text-white/90">
              Diagnostic checks are only useful when the results are interpreted correctly. Our team checks the scan data, related components, and symptoms together so you do not pay for guesswork.
            </p>
            <div className="mt-10 divide-y divide-white/15">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-6 py-6 text-xl font-black">
                  <ScanLine className="shrink-0 text-red-500" size={42} />
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="flex items-center gap-4 text-lg font-medium">
              <span className="h-1 w-16 bg-red-600" />
              What We Do
            </p>
            <h2 className="mt-8 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Quote For Any Service</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-[250px_1fr]">
              <div className="relative min-h-[330px] overflow-hidden rounded-md">
                <Image src="/imgi_5_car-repair-pg-1st-section-imagepicture-1.webp" alt="Vehicle inspection close up" fill className="object-cover" sizes="250px" />
              </div>
              <p className="text-base font-semibold leading-8 text-white/90">
                Fault detection takes trained hands and the right equipment. We go beyond basic code reading and inspect the systems behind the warning, including engine, braking, transmission, comfort, and control modules where relevant.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-16 max-w-[1600px] rounded-md bg-red-600 px-8 py-10 text-white lg:px-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_auto]">
            <div>
              <h3 className="text-3xl font-black leading-tight sm:text-4xl">Get a Full Diagnostic Check</h3>
              <p className="mt-4 text-base font-bold">A focused scan and inspection for the systems causing concern.</p>
            </div>
            <p className="text-3xl font-black">+44 1784 240000</p>
            <Link href="tel:+441784240000" className="inline-flex justify-center rounded-md bg-white px-8 py-4 text-sm font-black uppercase text-black transition hover:bg-neutral-100">
              Call Now
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl">How Often Should You Book A Car Diagnostic?</h2>
        <p className="mx-auto mt-7 max-w-[1500px] text-base font-medium leading-8 text-neutral-800">
          A yearly diagnostic check is useful for preventative care, especially before long journeys, after buying a used car, or when symptoms appear without a clear warning light. If the engine light, ABS light, steering warning, or emissions message appears, book a scan as soon as possible.
        </p>
      </section>

      <section className="grid lg:grid-cols-[0.75fr_1.1fr]">
        <div className="relative min-h-[330px]">
          <Image src="/imgi_84_car-repair-hero-banner.webp" alt="Performance car diagnostic service" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
        </div>
        <div className="bg-red-600 px-8 py-12 text-white lg:px-14">
          <h2 className="max-w-5xl text-3xl font-black leading-tight sm:text-4xl">Advanced Diagnostics To Pinpoint Your Problem</h2>
          <p className="mt-5 text-lg font-semibold">Your diagnostic specialist for a healthier ride.</p>
          <p className="mt-8 text-4xl font-black">+44 1784 240000</p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] items-center gap-14 lg:grid-cols-[0.95fr_1fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-md">
            <Image src="/imgi_13_car-repair-pg-section-img-left-1.webp" alt="Mechanic inspecting engine module" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">We Scan The Important Modules In Your Vehicle</h2>
            <p className="mt-7 text-base font-medium leading-8 text-neutral-800">
              Every vehicle is different, so our diagnostic route follows the symptoms and available vehicle data. We provide a clear health-check report so you can decide what needs attention first.
            </p>
            <div className="mt-10 grid gap-5">
              {moduleChecks.map((module) => (
                <div key={module} className="flex items-center gap-4 text-xl font-semibold">
                  <CheckCircle2 className="shrink-0 text-red-600" size={24} />
                  {module}
                </div>
              ))}
            </div>
            <Link href="/appointment" className="mt-10 inline-flex rounded-md bg-red-600 px-8 py-4 text-lg font-black text-white transition hover:bg-red-700">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-14 lg:grid-cols-[1fr_450px]">
          <div>
            <h2 className="text-3xl font-black text-red-600 underline decoration-red-600 decoration-2 underline-offset-4">Car Mechanical Services</h2>
            <div className="mt-8 grid gap-6">
              {mechanicalServices.map((service) => (
                <Link key={service} href="/auto" className="flex items-center gap-4 text-xl font-black transition hover:text-red-600">
                  <Gauge className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={30} />
                  {service}
                </Link>
              ))}
            </div>
          </div>
          <aside className="space-y-4">
            {categoryLinks.map((item) => (
              <Link key={item.label} href={item.href} className={`block rounded-md px-8 py-6 text-center text-xl font-black text-white transition ${item.active ? "bg-red-600 hover:bg-red-700" : "bg-black hover:bg-neutral-800"}`}>
                {item.label}
              </Link>
            ))}
          </aside>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <h2 className="mx-auto w-fit rounded-md bg-red-600 px-12 py-4 text-center text-2xl font-black text-white">Frequently Asked Questions</h2>
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

      <Link href="https://wa.me/441784240000" className="fixed bottom-8 right-8 z-40 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl">
        <Phone size={34} />
        <span className="sr-only">Whatsapp</span>
      </Link>
    </main>
  );
}
