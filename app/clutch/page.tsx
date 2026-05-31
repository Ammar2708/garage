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
  if (service === "Clutch Replacement") return "/clutch";
  return "/auto";
};

const clutchParts = [
  {
    title: "Pressure Plate",
    text: "Applies steady pressure to hold the clutch disc against the flywheel for smooth power transfer.",
    image: "/imgi_21_car-clutch-replacenebt-gallery-img-1.webp",
  },
  {
    title: "Clutch Disc",
    text: "The friction disc sits between the flywheel and pressure plate and helps the car engage gears smoothly.",
    image: "/imgi_22_car-clutch-replacenebt-gallery-img-2.webp",
  },
  {
    title: "Flywheel",
    text: "A heavy rotating disc that supports smooth engine pulses and gives the clutch disc a clean contact surface.",
    image: "/imgi_23_car-clutch-replacenebt-gallery-img-3.webp",
  },
];

const processSteps = [
  {
    title: "Fill a Form",
    text: "Tell us your car details and the clutch symptoms you have noticed.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get a Quote",
    text: "We confirm parts, labour, timing, and the right repair route.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let us Fix",
    text: "Our technicians inspect, remove, and replace the clutch assembly.",
    image: "/imgi_21_tyre-gallery-1-scaled.webp",
  },
  {
    title: "Relax & Enjoy",
    text: "Drive away with smoother gear changes and stronger control.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "Grinding, squealing, or rattling noises from the gearbox area",
  "A higher clutch biting point than normal",
  "Difficulty engaging or changing gears",
  "Slipping clutch, poor acceleration, or sudden vibration",
  "Burning smell after traffic, hills, or heavy stop-start driving",
];

const stageItems = [
  {
    title: "Dismantle Related Parts",
    text: "We remove the parts needed to reach the clutch safely and inspect nearby components.",
  },
  {
    title: "Remove Old Clutch",
    text: "The worn clutch plate, pressure plate, release bearing, and related hardware are checked and removed.",
  },
  {
    title: "Install New Clutch",
    text: "A suitable replacement clutch is fitted with care, including alignment and fastening checks.",
  },
  {
    title: "Final Assembly",
    text: "We reconnect components, inspect operation, and confirm the clutch feels smooth before handover.",
  },
];

const whyCards = [
  {
    title: "Trusted Garage",
    text: "Your car is handled by experienced technicians who understand clutch, gearbox, and drivetrain repairs.",
    icon: Wrench,
  },
  {
    title: "Clear Pricing",
    text: "We explain the clutch replacement cost before work begins, so there are no awkward surprises.",
    icon: ClipboardCheck,
  },
  {
    title: "Quality Work",
    text: "We use reliable parts, careful fitting, and final checks to help your clutch last longer.",
    icon: ShieldCheck,
  },
];

const galleryImages = [
  "/imgi_21_car-clutch-replacenebt-gallery-img-1.webp",
  "/imgi_22_car-clutch-replacenebt-gallery-img-2.webp",
  "/imgi_23_car-clutch-replacenebt-gallery-img-3.webp",
  "/imgi_24_car-clutch-replacenebt-gallery-img-4.webp",
  "/imgi_25_car-clutch-replacenebt-gallery-img-5.webp",
  "/imgi_26_car-clutch-replacenebt-gallery-img-6.webp",
];

const faqItems = [
  {
    question: "How do I know if my car clutch needs replacement?",
    answer:
      "Common signs include slipping, vibration, difficulty changing gears, a high biting point, strange noises, poor acceleration, or a burning smell.",
  },
  {
    question: "How long does a clutch replacement take?",
    answer:
      "Most clutch replacement jobs take around 2 to 3 hours, although timing can change depending on vehicle make, condition, and access.",
  },
  {
    question: "What affects clutch replacement cost?",
    answer:
      "Cost depends on the vehicle, clutch kit, labour time, flywheel condition, gearbox access, and whether extra parts are needed.",
  },
  {
    question: "Can I drive with a slipping clutch?",
    answer:
      "It is best to avoid driving with a slipping clutch. Continued use can damage related parts and may leave the car unable to move.",
  },
  {
    question: "Do you inspect the clutch before replacement?",
    answer:
      "Yes. We inspect the clutch operation and related components first, then explain whether repair, adjustment, or replacement is the sensible option.",
  },
];

const relatedResources = [
  {
    title: "How Much Does Head Gasket Repair Cost in 2025?",
    text: "Find out what affects head gasket repair pricing and when urgent inspection is needed.",
    date: "August 7, 2025",
    image: "/imgi_29_How-Much-Does-a-Head-Gasket-Repair-Cost-banner-scaled.webp",
  },
  {
    title: "How Much Does an Auxiliary Belt Really Cost?",
    text: "A practical guide to auxiliary belt symptoms, prices, and replacement timing.",
    date: "August 6, 2025",
    image: "/imgi_119_auxiliary-belt-cost-uk-870x455.webp",
  },
  {
    title: "Car Shock Absorber Repair Cost Guide",
    text: "Understand common suspension symptoms and what can affect repair cost.",
    date: "November 30, 2024",
    image: "/imgi_30_shock-absorber-repair-cost.webp",
  },
];

export default function ClutchPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[500px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_14_car-clutch-replacement-content-body-img.webp"
          alt="Car clutch replacement service"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Car clutch replacement</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Smooth Gear Changes With Expert <span className="text-red-500">Clutch Replacement</span>
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            If your clutch slips, judders, smells burnt, or makes gear changes difficult, TaylorMOT can inspect the system and fit the right replacement.
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
            <Image src="/imgi_14_car-clutch-replacement-content-body-img.webp" alt="Technician holding a clutch disc" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Car Clutch Replacement <span className="text-red-600">Services In London</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              The clutch connects the engine to the gearbox and helps your car pull away, change gear, and drive smoothly. When it wears out, the car can feel noisy, heavy, or slow to respond.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks the clutch, gearbox area, flywheel condition, and release components before recommending a clear repair or replacement plan.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_14_car-clutch-replacement-content-body-img.webp" alt="Clutch specialist in London" fill className="object-cover" sizes="430px" />
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
              <Image src="/imgi_21_car-clutch-replacenebt-gallery-img-1.webp" alt="Car clutch inspection close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
              When Should You Book A Clutch Replacement?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A clutch usually wears gradually, but symptoms can become serious quickly. Book an inspection if the pedal feel, gear selection, or acceleration changes.
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
              <Image src="/imgi_88_car-clutch-replacenebt-gallery-img-2-1024x683.webp" alt="Mechanic replacing a clutch" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Key Parts In A <span className="text-red-600">Clutch Replacement</span>
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          A proper clutch job checks the components that work together every time you press the pedal.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {clutchParts.map((part, index) => (
            <article key={part.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className={index === 1 ? "relative h-64 bg-neutral-50" : "relative h-64 bg-red-600"}>
                <Image src={part.image} alt={part.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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
        <h2 className="text-3xl font-black leading-tight sm:text-[31px]">How It Works</h2>
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
          <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Quote request for clutch replacement" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your clutch issue</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Clutch replacement details" placeholder="Tell us about slipping, noise, biting point, gear changes, or vibration" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          What Are The Clutch Replacement Stages?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          We keep the process clear from first inspection to final testing, so you know what is happening and why it matters.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {stageItems.map((item) => (
            <div key={item.title} className="rounded-md border border-neutral-200 px-5 py-5">
              <h3 className="flex items-center gap-3 text-base font-black sm:text-lg">
                <ShieldCheck className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-neutral-800">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Why TaylorMOT For <span className="text-red-600">Clutch Replacement?</span>
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
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="Clutch replacement appointment" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable and well-versed</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Do Not Let A Faulty Clutch Keep You Off The Road
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
              Book a clutch inspection before slipping, noise, or hard gear changes become a bigger gearbox problem.
            </p>
            <Link href="/appointment" className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-7 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700">
              Book Appointment
              <CalendarCheck size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-center text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Clutch Replacement <span className="text-red-600">Gallery</span>
        </h2>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative h-72 overflow-hidden rounded-md">
              <Image src={image} alt={`Clutch replacement gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
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
