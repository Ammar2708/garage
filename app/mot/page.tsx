import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronDown,
  Phone,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const preMotCards = [
  {
    title: "Pre-MOT Inspection",
    text: "A focused pre-check helps identify small issues before they become MOT failures. We review key safety items and explain what needs attention.",
  },
  {
    title: "How The Check Works",
    text: "Bring your vehicle in, or speak to our team before booking. We inspect the common failure points, advise on repairs, and prepare your car for testing.",
  },
  {
    title: "What We Look For",
    text: "Tyres, brakes, suspension, lights, emissions, seat belts, mirrors, body condition, and registration details are all checked carefully.",
  },
];

const particulars = [
  "Book early for peace of mind before your certificate expires.",
  "Cars over 3 years old need a valid MOT certificate.",
  "Older vehicles may need additional condition checks.",
  "Major changes should be reviewed before the test.",
  "Keep your MOT certificate current for a safer drive.",
];

const commonFailures = [
  "Poor visibility from damaged wipers, mirrors, or windscreens.",
  "Faulty lights, indicators, brake lights, or battery issues.",
  "Tyre tread, cuts, bulges, or wheel condition concerns.",
  "Brake performance, discs, pads, and cable faults.",
  "Suspension wear, leaks, or unsafe steering response.",
];

const checklistImages = [
  {
    title: "Tyres & Wheels",
    image: "/imgi_5_2e5bda43f9-1.webp",
    href: "/w-fitting",
  },
  {
    title: "Brakes & Suspension",
    image: "/imgi_6_2148327525-1.webp",
    href: "/brake-pad-replacement",
  },
  {
    title: "Body & Visibility",
    image: "/imgi_7_2149342629-1.webp",
    href: "/windscreen",
  },
];

const testAreas = [
  {
    title: "Axles, Wheels & Tyres",
    image: "/imgi_5_2e5bda43f9-1.webp",
    href: "/w-fitting",
    text: "We check tyre tread, sidewall condition, wheel security, and visible damage that could affect road safety.",
  },
  {
    title: "Car Brakes",
    image: "/imgi_6_2148327525-1.webp",
    href: "/brake-pad-replacement",
    text: "Brake pads, discs, cables, and stopping performance are reviewed so faults can be corrected before the MOT.",
    red: true,
  },
  {
    title: "Car Bodywork",
    image: "/imgi_7_2149342629-1.webp",
    href: "/panel-beating",
    text: "Sharp edges, corrosion, insecure panels, and visible structural issues are checked with practical repair advice.",
  },
  {
    title: "DPF",
    image: "/imgi_8_4263-1.webp",
    href: "/exhaust",
    text: "Diesel particulate filter concerns can affect emissions. We inspect warning signs and advise the right repair route.",
    red: true,
  },
  {
    title: "Exhaust & Emissions",
    image: "/imgi_9_11830-1.webp",
    href: "/exhaust",
    text: "The exhaust system is checked for leaks, noise, emissions concerns, and secure mounting points.",
  },
  {
    title: "Lights & Battery",
    image: "/imgi_10_1134-1.webp",
    href: "/battery",
    text: "Headlights, brake lights, indicators, number plate lights, and battery health are checked before testing.",
    red: true,
  },
  {
    title: "Windows & Mirrors",
    image: "/imgi_11_7658-1.webp",
    href: "/windscreen",
    text: "We look for visibility issues, damaged glass, loose mirrors, and worn wipers that can lead to a fail.",
  },
  {
    title: "Seat & Seat Belts",
    image: "/imgi_12_698-1.webp",
    href: "/appointment",
    text: "Seats must be secure and seat belts must latch, retract, and hold correctly for safe road use.",
    red: true,
  },
  {
    title: "Fuel System",
    image: "/imgi_13_18532-1.webp",
    href: "/fuel",
    text: "Fuel caps, lines, leaks, and visible system condition are checked to reduce safety and emissions risks.",
  },
  {
    title: "Horn Check",
    image: "/imgi_14_10048254a-2.webp",
    href: "/daignostic",
    text: "The horn should work clearly and reliably, with no novelty tones or intermittent faults.",
    red: true,
  },
  {
    title: "Air Filter",
    image: "/imgi_15_Cabin-Air-Filter-1.webp",
    href: "/interim",
    text: "A clean, correctly fitted filter supports engine efficiency and helps avoid avoidable performance issues.",
  },
  {
    title: "VIN",
    image: "/imgi_16_951ac5b75bbb40a68f4a794f285c2a32_ful-1.webp",
    href: "/appointment",
    text: "We confirm the vehicle identification number is present, readable, and consistent with the vehicle.",
    red: true,
  },
];

const faqs = [
  {
    question: "What is a car MOT service?",
    answer:
      "An MOT is an annual roadworthiness test for vehicles over 3 years old. It checks safety, emissions, and key vehicle components required by UK law.",
  },
  {
    question: "How early can I book my MOT?",
    answer:
      "You can book up to one month minus one day before your current MOT expires and still keep the same renewal date.",
  },
  {
    question: "Can I get a service and MOT together?",
    answer:
      "Yes. Combining a service with an MOT is often practical because maintenance issues can be reviewed before the test.",
  },
  {
    question: "Is it okay to drive without an MOT?",
    answer:
      "You should not drive without a valid MOT unless you are travelling to a pre-booked MOT test or approved repair appointment.",
  },
  {
    question: "What happens if my car fails its MOT?",
    answer:
      "We explain the failure points clearly, quote for the required repairs, and help prepare the vehicle for a retest.",
  },
  {
    question: "Do I need a full tank of fuel for an MOT?",
    answer:
      "No, but the vehicle should have enough fuel for the inspection and emissions checks to be completed properly.",
  },
];

function MotCheckForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={`flex w-full max-w-xl overflow-hidden rounded-md border-2 border-black bg-white ${compact ? "h-14" : "h-16"}`}>
      <div className="flex w-20 shrink-0 flex-col items-center justify-center bg-[#064aa0] text-xs font-black text-white">
        <span className="text-sm">GB</span>
        <span className="text-[10px] tracking-widest">UK</span>
      </div>
      <input
        aria-label="Vehicle registration"
        className="min-w-0 flex-1 px-5 text-base font-bold uppercase tracking-[0.18em] text-neutral-800 outline-none placeholder:text-neutral-400"
        placeholder="ENTER REG"
      />
      <button className="w-28 bg-red-600 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-700" type="button">
        Go
      </button>
    </form>
  );
}

export default function MotPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative overflow-hidden bg-red-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(255,255,255,0.16),transparent_32%)]" />
        <div className="relative mx-auto grid min-h-[640px] max-w-[1860px] items-center gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="z-10 max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-white/85">MOT testing support in West London</p>
            <h1 className="text-3xl font-black leading-tight text-white sm:text-5xl lg:text-4xl">
              Reliable Car MOT Checks, Pre-Inspections & Repairs
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/90">
              Prepare your vehicle with practical checks, clear repair advice, and a straightforward booking process from the LMS team.
            </p>

            <div className="mt-9 rounded-md bg-black p-5 shadow-2xl md:max-w-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-md bg-white px-4 py-3 text-lg font-black text-black">MOT DUE?</div>
                <span className="text-sm font-bold uppercase tracking-widest text-white/80">Check your registration</span>
              </div>
              <MotCheckForm />
              <div className="mt-5 flex flex-wrap gap-4">
                <Link
                  href="tel:+441784240000"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black uppercase text-black transition hover:bg-neutral-100"
                >
                  <Phone size={18} />
                  Call Now
                </Link>
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-black uppercase text-white ring-1 ring-white/30 transition hover:bg-neutral-900"
                >
                  Book MOT
                  <CalendarCheck size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px] md:min-h-[520px]">
            <Image
              src="/imgi_4_MOT-hero-section-hotspot.webp"
              alt="Orange car for MOT inspection"
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <div className="absolute left-[24%] top-[59%] h-7 w-7 rounded-full border-4 border-white bg-white/80 shadow-lg" />
            <div className="absolute left-[50%] top-[64%] h-7 w-7 rounded-full border-4 border-white bg-white/80 shadow-lg" />
            <div className="absolute right-[17%] top-[56%] h-7 w-7 rounded-full border-4 border-white bg-white/80 shadow-lg" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Common MOT Failure Points We Check Before Test Day
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-700 sm:text-lg">
              Many MOT failures come from small issues that can be spotted early. Our pre-check keeps the process simple and helps you understand what needs attention before the official test.
            </p>
          </div>
          <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commonFailures.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base font-semibold text-neutral-800">
                <Check className="mt-1 shrink-0 text-red-600" size={22} strokeWidth={4} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white lg:px-12">
        <div className="mx-auto max-w-[1860px]">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Save Your <span className="text-red-500">Vehicle</span> From MOT Surprises
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {preMotCards.map((card) => (
              <article key={card.title} className="rounded-lg bg-white p-7 text-black shadow-xl">
                <h3 className="text-2xl font-black">{card.title}</h3>
                <p className="mt-4 text-base leading-8 text-neutral-700">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1860px]">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Particulars For A Better MOT Result
          </h2>
          <div className="relative mt-10 grid gap-5 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-1/2 hidden h-3 -translate-y-1/2 bg-red-700 lg:block" />
            {particulars.map((item) => (
              <div key={item} className="relative rounded-xl bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
                <p className="text-xl font-black leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1860px]">
          <div className="max-w-6xl">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Car MOT <span className="text-red-600">Inspection Checklist</span> At LMS Garage
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-700 sm:text-lg">
              A pre-MOT check is a practical way to review the visible condition of your car before testing. Our technicians inspect the areas most likely to affect safety, compliance, and roadworthiness.
            </p>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {checklistImages.map((item) => (
              <Link key={item.title} href={item.href} className="group overflow-hidden bg-white shadow-sm">
                <div className="relative h-64">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="border-t-4 border-red-600 p-6">
                  <h3 className="text-2xl font-black">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1860px]">
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {testAreas.map((item) => (
              <Link key={item.title} href={item.href} className={`group overflow-hidden ${item.red ? "bg-red-600 text-white" : "bg-black text-white"}`}>
                <div className="relative h-64">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-base font-medium leading-8 text-white/90">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-6 py-16 text-white lg:px-12">
        <Image src="/imgi_98_CTA-Section-MOT-Page.webp" alt="Mechanic completing MOT inspection" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="relative mx-auto grid max-w-[1860px] gap-8 md:grid-cols-2">
          <div className="bg-red-600 p-8 sm:p-10 lg:p-14">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Book A Pre-MOT Check Before Your Test Date
            </h2>
            <p className="mt-5 text-base font-medium leading-8 text-white/90">
              Get clear guidance before your MOT. We inspect common failure points, quote only for the work required, and help you move forward with confidence.
            </p>
            <Link
              href="/appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase text-red-600 transition hover:bg-neutral-100"
            >
              Book Now
              <BadgeCheck size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid bg-black text-white lg:grid-cols-2">
        <div className="relative min-h-[520px] p-8 sm:p-12">
          <Image src="/imgi_100_MOT-WITH-SERVICES-MOT-PAGE.webp" alt="Mechanic inspecting car underside" fill className="object-cover opacity-45" sizes="50vw" />
          <div className="relative">
            <h2 className="text-3xl font-black sm:text-4xl">Get Your MOT With Us</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90">
              LMS provides inspection, repair advice, and booking support for drivers who want a smoother MOT experience in West London.
            </p>
            <ul className="mt-8 space-y-4 text-lg font-bold">
              {["Inspection, repair advice and testing support", "Clear quote before any repair begins", "Online booking and phone support", "Practical checks before your MOT date"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Wrench className="text-red-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative min-h-[520px] p-8 sm:p-12">
          <Image src="/imgi_101_MOT-WITH-SERVICES-with-cost-MOT-PAGE.webp" alt="Technician writing vehicle notes" fill className="object-cover opacity-45" sizes="50vw" />
          <div className="relative">
            <h2 className="bg-red-600 p-5 text-3xl font-black sm:text-4xl">Why Choose LMS For MOT?</h2>
            <ul className="mt-8 space-y-4 text-lg font-bold">
              {["Experienced technicians", "Fast visual inspections", "Transparent repair advice", "OEM-quality replacement options", "Convenient booking support", "West London garage team"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <ShieldCheck className="text-red-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-md bg-red-600 px-8 py-3 text-lg font-black text-white">MOT History Checker</span>
          <h2 className="mt-8 text-3xl font-black leading-tight sm:text-4xl">
            Check Your Registration Before You Book
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-neutral-700">
            Enter your registration to start a quick MOT status check, then speak with our team if you need repairs, servicing, or a pre-test inspection.
          </p>
          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="w-full sm:flex-1">
              <MotCheckForm compact />
            </div>
            <button className="inline-flex h-14 items-center gap-2 rounded-md bg-red-600 px-8 text-sm font-black uppercase text-white transition hover:bg-red-700" type="button">
              <Search size={18} />
              Check
            </button>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group border border-neutral-300 bg-white p-6" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black text-neutral-800">
                  <span>{faq.question}</span>
                  <ChevronDown className="shrink-0 text-red-600 transition group-open:rotate-180" size={24} />
                </summary>
                <p className="mt-5 max-w-5xl text-base leading-8 text-neutral-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-6 py-16 text-white lg:px-12">
        <Image src="/bg2.webp" alt="Garage background" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="relative mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-red-500">Need help today?</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Keep Your Vehicle MOT-Ready With LMS
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/85">
              Whether you need a pre-check, repair quote, or full booking support, our team can help you prepare your car for a safer test result.
            </p>
          </div>
          <Link
            href="/appointment"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-red-600 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-red-700"
          >
            Book Appointment
            <CalendarCheck size={20} />
          </Link>
        </div>
      </section>

      <Link
        href="https://wa.me/441784240000"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-white px-4 py-3 text-base font-semibold text-neutral-700 shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <span>Whatsapp</span>
        <span className="grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-[18px_16px_0_rgba(0,0,0,0.95)]">
          <Phone size={30} />
        </span>
      </Link>
    </main>
  );
}
