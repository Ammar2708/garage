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
  "EV Services",
];

const serviceHref = (service: string) => {
  if (service === "Engine Replacement") return "/engine-replacement";
  if (service === "Brake Pad Replacement") return "/brake-pad-replacement";
  if (service === "Shock Absorber Repair") return "/shock";
  if (service === "Car Exhaust Repair") return "/exhaust";
  if (service === "Fuel System Repair") return "/fuel";
  if (service === "Power Steering Replacement") return "/steering-fluid";
  if (service === "Car AC Repair") return "/aircon-regas";
  if (service === "Timing Belt Replacement") return "/timing-belt-replacement";
  if (service === "Turbo Replacement") return "/turbo";
  if (service === "Clutch Replacement") return "/clutch";
  if (service === "EV Services") return "/ev";
  return "/auto";
};

const suspensionParts = [
  {
    title: "Shock Absorbers",
    text: "Control bounce and vibration so the tyres stay in better contact with the road.",
    image: "/imgi_67_car-shock-absorber-repair-conten-1024x683.webp",
  },
  {
    title: "Coil Springs",
    text: "Support vehicle weight and help the suspension absorb rough roads smoothly.",
    image: "/imgi_14_car-shock-absorber-repair-conten.webp",
  },
  {
    title: "Control Arms",
    text: "Hold wheel position steady and support accurate steering, braking, and alignment.",
    image: "/imgi_96_shock-absorber-repair-gallery-img-1-814x491.webp",
  },
];

const processSteps = [
  {
    title: "Fill a Form",
    text: "Tell us what you feel while driving and share your car details.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get a Quote",
    text: "We confirm inspection needs, parts, labour, and expected timing.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let us Fix",
    text: "Our technicians repair or replace worn shock absorber components.",
    image: "/imgi_21_tyre-gallery-1-scaled.webp",
  },
  {
    title: "Relax & Drive",
    text: "Enjoy a smoother, safer ride with restored suspension control.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "Knocking sounds while driving over bumps",
  "Vibration in the steering wheel or cabin",
  "Car bouncing more than usual after dips or speed bumps",
  "Uneven or early tyre wear",
  "Fluid leakage around the shock absorber",
  "Rough handling, nose-diving, or poor stability when braking",
];

const includedServices = [
  "Inspection of the complete suspension system",
  "Removal of worn shock absorbers or struts",
  "Installation of suitable replacement shock or strut units",
  "Post-repair checks for ride height, road feel, and alignment symptoms",
];

const whyCards = [
  {
    title: "Quality Parts",
    text: "We fit suitable replacement components to restore ride comfort and road control.",
    icon: Wrench,
  },
  {
    title: "Careful Diagnosis",
    text: "Our technicians inspect related suspension parts before recommending repairs.",
    icon: ClipboardCheck,
  },
  {
    title: "Clear Support",
    text: "You get practical advice, transparent pricing, and help booking at a convenient time.",
    icon: ShieldCheck,
  },
];

const galleryImages = [
  "/imgi_96_shock-absorber-repair-gallery-img-1-814x491.webp",
  "/imgi_20_shock-absorber-repair-gallery-img-2.webp",
  "/imgi_21_shock-absorber-repair-gallery-img-3.webp",
  "/imgi_30_shock-absorber-repair-cost.webp",
  "/imgi_31_shock-absorber-repair-cost.webp",
  "/imgi_67_car-shock-absorber-repair-conten-1024x683.webp",
];

const faqItems = [
  {
    question: "How can I tell if my car needs shock absorber repair?",
    answer:
      "Common signs include knocking noises, excessive bouncing, steering vibration, uneven tyre wear, fluid leakage, and poor grip over rough roads.",
  },
  {
    question: "Is suspension damage repairable?",
    answer:
      "Many suspension issues are repairable, but worn shock absorbers, struts, or damaged related parts may need replacement after inspection.",
  },
  {
    question: "How long does shock absorber replacement take?",
    answer:
      "Most shock absorber jobs can be completed within a few hours, depending on the vehicle, part availability, and the condition of surrounding components.",
  },
  {
    question: "Can I get a suspension check before booking repair?",
    answer:
      "Yes. We inspect the suspension first and explain whether repair, replacement, or monitoring is the right next step.",
  },
  {
    question: "Why choose TaylorMOT for shock absorber repair?",
    answer:
      "TaylorMOT combines experienced technicians, clear pricing, quality replacement parts, and practical advice for safer, smoother driving.",
  },
];

const relatedResources = [
  {
    title: "Car Shock Absorber Repair Cost Guide",
    text: "Understand common suspension symptoms and what can affect repair cost.",
    date: "November 30, 2024",
    image: "/imgi_30_shock-absorber-repair-cost.webp",
  },
  {
    title: "How Much Does an Auxiliary Belt Really Cost?",
    text: "A practical guide to belt symptoms, prices, and replacement timing.",
    date: "August 6, 2025",
    image: "/imgi_119_auxiliary-belt-cost-uk-870x455.webp",
  },
  {
    title: "How Much Does Head Gasket Repair Cost in 2025?",
    text: "Find out what affects head gasket repair pricing and urgent inspection.",
    date: "August 7, 2025",
    image: "/imgi_29_How-Much-Does-a-Head-Gasket-Repair-Cost-banner-scaled.webp",
  },
];

export default function ShockPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[500px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_160_Shock-Absorber-Repair-hero-banner-image.webp"
          alt="Shock absorber repair service"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Shock absorber repair</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Get Your Shocks Back In Shape With <span className="text-red-500">TaylorMOT</span>
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            If bumps, vibration, or poor handling are making every drive uncomfortable, our technicians can inspect and repair your suspension for a smoother ride.
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
            <Image src="/imgi_67_car-shock-absorber-repair-conten-1024x683.webp" alt="Mechanic inspecting car suspension" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Professional <span className="text-red-600">Car Shock Absorber Repair</span> In London
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Shock absorbers help keep your tyres planted, reduce bouncing, and protect steering control. When they wear out, the car can feel unstable on bumps, braking, and uneven roads.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT starts with a clear inspection and only recommends shock absorber replacement when it is genuinely needed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_160_Shock-Absorber-Repair-hero-banner-image.webp" alt="Shock absorber specialist in London" fill className="object-cover" sizes="430px" />
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
              <Image src="/imgi_14_car-shock-absorber-repair-conten.webp" alt="Shock absorber and suspension inspection" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
              How To Know If Suspension Repairs Are Needed
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Suspension problems usually show up through noise, bounce, vibration, or tyre wear. A prompt inspection helps prevent extra strain on steering, brakes, and tyres.
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
              <Image src="/imgi_96_shock-absorber-repair-gallery-img-1-814x491.webp" alt="Suspension repair close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Enjoy A Smooth Ride After <span className="text-red-600">Shock Absorber Repairs</span>
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          These key suspension parts work together to keep your car stable, comfortable, and controlled.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {suspensionParts.map((part, index) => (
            <article key={part.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className={index === 1 ? "relative h-64 bg-neutral-50" : "relative h-64 bg-red-600"}>
                <Image src={part.image} alt={part.title} fill className="object-contain p-6" sizes="(max-width: 768px) 100vw, 33vw" />
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
          <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Quote request for shock absorber repair" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your suspension issue</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Shock absorber repair details" placeholder="Tell us about knocking, vibration, bouncing, tyre wear, or fluid leaks" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          What Does Shock Absorber Replacement Include?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          We inspect the full suspension area before fitting parts, so the repair addresses the real cause of poor ride quality.
        </p>
        <div className="mt-8 space-y-4">
          {includedServices.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
              <CheckCircle2 className="mt-0.5 shrink-0 text-red-600" size={21} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          Ensure Driving Smoothness With Routine Shock Absorber Checks
        </h2>
        <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          A well-maintained shock absorber is vital for vehicle performance, comfort, and control. Regular checks help catch early wear before it becomes a larger suspension expense.
        </p>
        <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Whether you need car shock absorber repair, shock absorber replacement, or a quick suspension check, TaylorMOT can help keep your car roadworthy and safe.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Why TaylorMOT For <span className="text-red-600">Shock Absorber Repair?</span>
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
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="Shock absorber appointment call to action" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable suspension care</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Say No To A Rough Ride
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
              Book a shock absorber inspection before poor handling, bounce, or vibration becomes a bigger repair.
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
          Shock Absorber Repair <span className="text-red-600">Gallery</span>
        </h2>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative h-72 overflow-hidden rounded-md">
              <Image src={image} alt={`Shock absorber repair gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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
