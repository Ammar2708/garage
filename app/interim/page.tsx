import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronDown,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const trustItems = [
  {
    title: "Focused Checks",
    text: "Essential maintenance points are reviewed so your car stays ready for daily journeys.",
    icon: BadgeCheck,
  },
  {
    title: "Quick Servicing",
    text: "A practical service option for drivers who cover regular miles between annual services.",
    icon: Wrench,
  },
  {
    title: "Experienced Team",
    text: "Our technicians look for early warning signs and explain anything that needs attention.",
    icon: ShieldCheck,
  },
];

const includedItems = [
  "Engine oil condition check",
  "Oil filter replacement advice",
  "Brake and tyre visual checks",
  "Fluid level top-ups where required",
  "Lights and indicator inspection",
  "Steering and suspension review",
  "Drive belt condition check",
];

const comparisonRows = [
  {
    feature: "Service frequency",
    interim: "Every 6 months or around 6,000 miles, depending on how the vehicle is used.",
    full: "Every 12 months or around 12,000 miles for a wider maintenance review.",
  },
  {
    feature: "Best suited for",
    interim: "Drivers who want a mid-year health check between larger services.",
    full: "Drivers who need a more detailed annual service and maintenance report.",
  },
  {
    feature: "Engine oil and filter",
    interim: "Included",
    full: "Included",
  },
  {
    feature: "Fluid levels",
    interim: "Checked and topped up where suitable",
    full: "Checked, topped up, and reviewed in more detail",
  },
  {
    feature: "Brake checks",
    interim: "Basic inspection",
    full: "Detailed inspection and adjustment advice",
  },
  {
    feature: "Steering and suspension",
    interim: "Visual safety check",
    full: "Comprehensive inspection",
  },
  {
    feature: "Lights and indicators",
    interim: "Included",
    full: "Included",
  },
  {
    feature: "Tyres and tread",
    interim: "Included",
    full: "Included",
  },
];

const faqs = [
  {
    question: "When should I book an interim service?",
    answer:
      "An interim service is useful around the six-month point or when your mileage is building quickly between annual services.",
  },
  {
    question: "Is an interim service the same as a full service?",
    answer:
      "No. An interim service focuses on essential checks and routine maintenance, while a full service covers a broader list of vehicle systems.",
  },
  {
    question: "Can you service my car before an MOT?",
    answer:
      "Yes. We can inspect common wear points before your MOT and advise if anything needs attention.",
  },
  {
    question: "How long does an interim service take?",
    answer:
      "Most interim services can be completed in around 1 to 1.5 hours, depending on the vehicle and workshop schedule.",
  },
];

function GearItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm font-semibold leading-7 sm:text-base">
      <Settings className="mt-1 shrink-0 text-red-600" size={19} strokeWidth={3} />
      <span>{children}</span>
    </li>
  );
}

function TableValue({ children }: { children: React.ReactNode }) {
  const text = String(children);
  const icon =
    text === "Included" ? (
      <Check className="mt-1 shrink-0 rounded-[3px] bg-green-600 p-0.5 text-white" size={22} strokeWidth={4} />
    ) : text.includes("inspection") || text.includes("check") ? (
      <Search className="mt-1 shrink-0 text-red-600" size={21} strokeWidth={2.7} />
    ) : null;

  return (
    <div className="flex items-start gap-2">
      {icon}
      <span>{children}</span>
    </div>
  );
}

export default function InterimPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative overflow-hidden bg-[#f7f7f7]">
        <div className="absolute inset-0 opacity-60 [background-image:repeating-linear-gradient(70deg,transparent_0_8px,rgba(0,0,0,0.04)_8px_10px)]" />
        <div className="relative mx-auto grid min-h-[690px] max-w-[1900px] items-center gap-8 px-5 py-12 lg:grid-cols-[0.56fr_0.44fr] lg:px-8 xl:px-12">
          <div className="relative order-2 min-h-[390px] self-end lg:order-1 lg:min-h-[600px]">
            <Image
              src="/imgi_3_interm-service.webp"
              alt="Mechanics completing an interim car service"
              fill
              priority
              className="object-contain object-bottom-left"
              sizes="(max-width: 1024px) 100vw, 56vw"
            />
          </div>
          <div className="order-1 mx-auto max-w-[760px] text-center lg:order-2 lg:ml-auto lg:mr-0 lg:pt-3">
            <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl xl:text-6xl">
              Book An Interim Car Service In London
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-sm font-medium leading-7 text-neutral-800 sm:text-base lg:ml-auto">
              Keep your vehicle in good shape between annual services with a focused check on the items that affect reliability, safety, and everyday driving comfort.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-neutral-800 sm:text-base lg:ml-auto">
              Our team checks key fluids, filters, tyres, brakes, lights, and visible wear points, then explains the next steps clearly before any extra work begins.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-7 lg:justify-end">
              <Link href="/appointment" className="inline-flex min-w-64 items-center justify-center gap-2 rounded-md bg-red-600 px-8 py-4 text-base font-black uppercase text-white transition hover:bg-red-700">
                Book Now
                <CalendarCheck size={18} />
              </Link>
              <Link href="tel:+442033371831" className="inline-flex min-w-64 items-center justify-center gap-2 rounded-md border-2 border-black px-8 py-4 text-base font-black uppercase text-black transition hover:bg-black hover:text-white">
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
          <div className="relative min-h-[430px] overflow-hidden rounded-lg">
            <Image src="/imgi_4_get-to-know-about-us-car-servicing.webp" alt="Technician checking a car engine" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-600">Verified and trusted</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">What Is An Interim Service?</h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-700">
              An interim service is a shorter maintenance visit designed to keep high-use vehicles checked between full services. It focuses on the essentials that help your car remain dependable day to day.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-700">
              It is especially helpful if you drive frequently, spend time in traffic, or want a professional look over the vehicle before a long trip.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/appointment" className="rounded-md bg-red-600 px-8 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700">
                Book Now
              </Link>
              <Link href="tel:+442033371831" className="rounded-md bg-red-600 px-8 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700">
                Call For Booking
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1700px]">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">What Is Included In Our Interim Service?</h2>
          <p className="mt-5 max-w-5xl text-base font-medium leading-8 text-neutral-700">
            We keep the check practical and targeted, covering the service items most likely to affect how your vehicle feels, stops, and performs between scheduled visits.
          </p>
          <ul className="mt-7 space-y-3">
            {includedItems.map((item) => (
              <GearItem key={item}>{item}</GearItem>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border-2 border-red-600 p-6 sm:p-9">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">Interim Service Compared With Full Service</h2>
            <p className="mt-5 max-w-6xl text-base font-medium leading-8 text-neutral-700">
              An interim service is the lighter mid-year check. A full service is broader and usually booked annually. Both help protect your vehicle, but they are designed for different maintenance moments.
            </p>
            <p className="mt-5 max-w-6xl text-base font-medium leading-8 text-neutral-700">
              If your car covers regular mileage, combining interim and full servicing through the year can help spot wear earlier and keep maintenance more predictable.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg bg-white shadow-[0_0_22px_rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto p-4 sm:p-8">
              <table className="w-full min-w-[840px] border-collapse text-left text-base font-medium">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="w-[24%] border border-red-500 px-5 py-5 text-lg font-black">Feature</th>
                    <th className="w-[36%] border border-red-500 px-5 py-5 text-lg font-black">Interim Service</th>
                    <th className="w-[40%] border border-red-500 px-5 py-5 text-lg font-black">Full Service</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? "bg-white" : "bg-neutral-100"}>
                      <td className="border border-neutral-200 px-5 py-5 font-semibold">{row.feature}</td>
                      <td className="border border-neutral-200 px-5 py-5 leading-8">
                        <TableValue>{row.interim}</TableValue>
                      </td>
                      <td className="border border-neutral-200 px-5 py-5 leading-8">
                        <TableValue>{row.full}</TableValue>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-red-600 text-white lg:grid-cols-[0.7fr_1.3fr]">
        <div className="relative min-h-[300px]">
          <Image src="/imgi_72_image-26.webp" alt="Interim service booking" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
        </div>
        <div className="px-6 py-12 lg:px-14">
          <h2 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
            Interim Service Pricing From TaylorMOT
          </h2>
          <p className="mt-5 max-w-4xl text-base font-semibold leading-8 text-white/90">
            Contact our team for a clear interim service quote based on your vehicle, mileage, and any concerns you want checked during the visit.
          </p>
          <Link href="tel:+442033371831" className="mt-8 inline-flex items-center gap-3 text-3xl font-black text-white sm:text-4xl">
            <Phone size={34} />
            +44 20 3337 1831
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

      <Link
        href="https://wa.me/442033371831"
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
