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
  Timer,
  Wrench,
} from "lucide-react";

const mechanicalServices = [
  "Engine Replacement",
  "Automatic Gearbox Repair",
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
];

const serviceHref = (service: string) => {
  if (service === "Engine Replacement") return "/engine-replacement";
  if (service === "Automatic Gearbox Repair") return "/gearbox";
  if (service === "Brake Pad Replacement") return "/brake-pad-replacement";
  if (service === "Car Exhaust Repair") return "/exhaust";
  if (service === "Fuel System Repair") return "/fuel";
  if (service === "Power Steering Replacement") return "/power steering";
  if (service === "Car AC Repair") return "/ac-repair";
  if (service === "Timing Belt Replacement") return "/timing-belt-replacement";
  if (service === "Auxiliary Belt Replacement") return "/belt";
  if (service === "Engine Mount Replacement") return "/engine mount";
  if (service === "Turbo Replacement") return "/turbo";
  if (service === "Clutch Replacement") return "/clutch";
  if (service === "Shock Absorber Repair") return "/shock";
  return "/auto";
};

const symptoms = [
  "Heavy steering when turning or parking",
  "Whining, groaning, or knocking noises from the steering",
  "Power steering fluid leaks under the vehicle",
  "A steering wheel that feels slow, stiff, or uneven",
  "Burning smell or discoloured steering fluid",
  "Warning lights or repeated steering fluid top-ups",
];

const steeringParts = [
  {
    title: "Power Steering Pump",
    text: "The pump builds hydraulic pressure so the steering wheel can turn smoothly with less effort.",
    image: "/imgi_4_steering-system-syatem-repair-pg_power-staring-Pump.webp",
  },
  {
    title: "Rotary Valve",
    text: "The valve directs hydraulic assistance to the correct side of the steering system while you turn.",
    image: "/imgi_5_steering-system-syatem-repair-pg_rotary-valve.webp",
  },
  {
    title: "Fluid Reservoir",
    text: "Clean fluid supports smooth steering movement and helps protect the pump, rack, and lines.",
    image: "/imgi_6_steering-system-syatem-repair-pg_fluid-reservior.webp",
  },
];

const processSteps = [
  {
    title: "Submit Query",
    text: "Share your car details and the steering symptoms you have noticed.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We confirm the inspection route and explain the expected cost clearly.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let Us Fix",
    text: "Our technicians repair or replace the faulty steering component.",
    image: "/imgi_21_tyre-gallery-1-scaled.webp",
  },
  {
    title: "Drive Smoothly",
    text: "Final checks help restore stable, responsive steering.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const replacementSteps = [
  {
    title: "Steering Diagnosis",
    text: "We inspect the steering pump, rack, hoses, fluid level, leaks, noises, and road feel.",
  },
  {
    title: "Clear Estimate",
    text: "You receive a straightforward quote for repair, replacement, fluid service, or related checks.",
  },
  {
    title: "Repair Or Replacement",
    text: "Approved work is completed carefully using suitable parts for the vehicle and fault.",
  },
  {
    title: "Bleed And Test",
    text: "The system is checked for air, leaks, steering feel, and smooth operation before handover.",
  },
];

const whyCards = [
  {
    title: "No Pricing Surprises",
    text: "We inspect the fault first and explain the cost before approved repair work begins.",
    icon: ClipboardCheck,
  },
  {
    title: "Trained Technicians",
    text: "Our team handles steering pumps, racks, hoses, reservoirs, and fluid-related issues.",
    icon: Wrench,
  },
  {
    title: "Reliable Repairs",
    text: "Each repair is checked for steering response, leaks, and safe road feel.",
    icon: ShieldCheck,
  },
];

const galleryImages = [
  "/imgi_14_power-steering-replacement-pg-gallery-1.webp",
  "/imgi_77_power-steering-replacement-pg-gallery-2-768x432.webp",
  "/imgi_21_power-steering-replacement-pg-gallery-3.webp",
  "/imgi_22_power-steering-replacement-pg-gallery-4.webp",
  "/imgi_23_power-steering-replacement-pg-gallery-5.webp",
  "/imgi_24_power-steering-replacement-pg-gallery-6.webp",
];

const faqItems = [
  {
    question: "What are the signs I need power steering replacement?",
    answer:
      "Common signs include heavy steering, unusual noises while turning, fluid leaks, repeated low-fluid warnings, or a steering wheel that feels slow and uneven.",
  },
  {
    question: "Can I repair my power steering system myself?",
    answer:
      "Power steering repairs are best handled by a trained technician because the system uses pressurised fluid and safety-critical steering components.",
  },
  {
    question: "How much does power steering replacement cost?",
    answer:
      "The price depends on the vehicle, the faulty part, and whether the pump, rack, hose, reservoir, or fluid system needs attention. We quote after inspection.",
  },
  {
    question: "How long does power steering replacement take?",
    answer:
      "Timing depends on the fault and parts availability. Smaller repairs may be quicker, while rack or pump replacement can take longer.",
  },
  {
    question: "Is it safe to drive with faulty power steering?",
    answer:
      "It is not recommended. Faulty steering can make the car harder to control, especially at low speed, during parking, or in an emergency.",
  },
];

const relatedResources = [
  {
    title: "How Much Does Head Gasket Repair Cost?",
    text: "Find out what affects head gasket repair pricing and when urgent inspection is needed.",
    date: "August 7, 2025",
    image: "/imgi_29_How-Much-Does-a-Head-Gasket-Repair-Cost-banner-scaled.webp",
  },
  {
    title: "How Much Does An Auxiliary Belt Really Cost?",
    text: "A practical guide to auxiliary belt symptoms, prices, and replacement timing.",
    date: "August 6, 2025",
    image: "/imgi_119_auxiliary-belt-cost-uk-870x455.webp",
  },
  {
    title: "How Much Does Gearbox Replacement Cost?",
    text: "Understand common gearbox faults, pricing factors, and replacement options.",
    date: "November 30, 2024",
    image: "/imgi_106_gearbox-replacement-cost-1-1024x538.webp",
  },
];

export default function PowerSteeringPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[500px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_160_Power-Steering-Replacement-hero-banner-image-1.webp"
          alt="Power steering replacement service"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Power steering replacement</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Power Steering Replacement In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Restore smooth, responsive steering with careful diagnosis, clear pricing, and professional power steering repair from TaylorMOT.
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
          <div className="relative mx-auto min-h-[380px] w-full max-w-xl">
            <Image src="/imgi_14_power-steering-replacement-pg-gallery-1.webp" alt="Technician inspecting a power steering component" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Get Your Car Back On The Road With <span className="text-red-600">Power Steering Replacement</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              If your steering feels heavy, noisy, or inconsistent, the system may need repair before the fault becomes more serious.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks the pump, rack, hoses, fluid, and related parts so you know whether repair, replacement, or fluid service is the right solution.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_77_power-steering-replacement-pg-gallery-2-768x432.webp" alt="Power steering mechanic in London" fill className="object-cover" sizes="430px" />
              </div>
              <div className="px-6 py-7">
                <h3 className="text-xl font-black">Best Car Mechanics In London</h3>
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
              <Image src="/imgi_77_power-steering-replacement-pg-gallery-2-768x432.webp" alt="Power steering repair close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              When Do I Need To Replace My Car&apos;s <span className="text-red-600">Power Steering?</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Steering faults can affect control and comfort. Book an inspection if the steering gets hard, fluid drops quickly, or the system starts making noise.
            </p>
            <div className="mt-8 space-y-4">
              {symptoms.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-red-600" size={21} />
                  {item}
                </div>
              ))}
            </div>
            <div className="relative mt-8 min-h-[360px] overflow-hidden rounded-md">
              <Image src="/imgi_21_power-steering-replacement-pg-gallery-3.webp" alt="Power steering system inspection" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          What To Know About The <span className="text-red-600">Power Steering System</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Power steering relies on several parts working together. A fault in one part can make the steering heavy, noisy, or unsafe.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {steeringParts.map((part, index) => (
            <article key={part.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className={index === 1 ? "relative h-72 bg-neutral-50" : "relative h-72 bg-red-600"}>
                <Image src={part.image} alt={part.title} fill className="object-contain p-7" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black text-red-600 sm:text-2xl">{part.title}</h3>
                <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-6 text-neutral-800">{part.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-[34px]">How Do We Work?</h2>
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
          <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Quote request for power steering replacement" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your steering issue</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Power steering replacement details" placeholder="Tell us about heavy steering, noise, leaks, warning lights, or recent fluid loss" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          TaylorMOT Power Steering <span className="text-red-600">Repair Process</span>
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          We diagnose the system first, explain the right repair route, complete approved work, and test the steering before returning the vehicle.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {replacementSteps.map((step) => (
            <div key={step.title} className="flex items-start gap-4">
              <Timer className="mt-0.5 shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
              <div>
                <h3 className="text-base font-black">{step.title}</h3>
                <p className="mt-2 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Why TaylorMOT For <span className="text-red-600">Power Steering Replacement?</span>
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
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="Power steering replacement appointment" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable and well-versed</p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Retain Smooth Steering With Professional Replacement
            </h2>
            <Link href="/appointment" className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-white bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700">
              Book Appointment
              <CalendarCheck size={19} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-7 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div key={src} className="relative min-h-72 overflow-hidden rounded-md">
              <Image src={src} alt={`Power steering replacement gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-center text-3xl font-black leading-tight sm:text-[34px]">Frequently Asked Questions</h2>
        <div className="mx-auto mt-9 max-w-[1500px] space-y-4">
          {faqItems.map((item, index) => (
            <details key={item.question} className="group border border-neutral-400" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-sm font-black text-neutral-800 group-open:text-red-600 sm:text-base">
                {item.question}
                <ChevronDown className="shrink-0 text-red-600 transition group-open:rotate-180" size={26} />
              </summary>
              <p className="border-t border-neutral-300 px-6 py-5 text-sm font-medium leading-7 text-neutral-800">{item.answer}</p>
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

      <Link href="https://wa.me/441784240000" className="fixed bottom-8 right-8 z-40 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl">
        <Phone size={34} />
        <span className="sr-only">Whatsapp</span>
      </Link>
    </main>
  );
}
