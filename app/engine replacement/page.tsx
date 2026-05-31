import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  Car,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Cog,
  Gauge,
  Phone,
  ShieldCheck,
  Sparkles,
  Wallet,
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

const processSteps = [
  {
    title: "Fill A Form",
    text: "Send your car details and the engine symptoms you have noticed.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We inspect the details and explain the best replacement option.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let Us Fit",
    text: "Our technicians remove the faulty engine and fit the replacement.",
    image: "/imgi_14_Engine-Replacement-Content-Image.webp",
  },
  {
    title: "Drive Away",
    text: "Final checks help make sure your car is ready for the road.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const engineTypes = [
  {
    title: "Used Engines",
    text: "A practical choice when you want an affordable replacement from a tested engine source.",
    image: "/imgi_4_service-page-engine-1.webp",
  },
  {
    title: "New Engines",
    text: "A suitable option when long-term performance and fresh components are the main priority.",
    image: "/imgi_5_service-page-engine-3.webp",
  },
  {
    title: "Remanufactured Engines",
    text: "A rebuilt option that balances value, reliability, and renewed internal components.",
    image: "/imgi_6_service-page-engine-2.webp",
  },
];

const symptoms = [
  "Dashboard engine warning light",
  "Heavy exhaust smoke",
  "Difficulty starting the car",
  "Unusual smells or engine noises",
  "Low fuel efficiency",
  "Loss of power while driving",
];

const trustPoints = [
  {
    title: "Quick Engine Fitting",
    text: "Our team plans the replacement carefully so the vehicle spends less time off the road.",
  },
  {
    title: "Affordable Options",
    text: "We can discuss used, new, and remanufactured engines based on your budget and vehicle.",
  },
  {
    title: "Tested Performance",
    text: "The replacement is checked after fitting so the car leaves with smoother, more reliable running.",
  },
];

const whyCards = [
  {
    title: "Wide Range Of Engines",
    text: "We help source suitable used, new, and remanufactured engines for many car models.",
    icon: Car,
  },
  {
    title: "Clear Pricing",
    text: "You get a direct quote based on the engine type, labour, parts, and vehicle condition.",
    icon: Wallet,
  },
  {
    title: "Replacement Specialists",
    text: "Experienced technicians handle diagnosis, removal, fitting, and final checks.",
    icon: ShieldCheck,
  },
];

const galleryImages = [
  "/imgi_20_Engine-Relpacement-Gallery-Image1.webp",
  "/imgi_21_Engine-Relpacement-Gallery-Image3.webp",
  "/imgi_23_Engine-Relpacement-Gallery-Image6.webp",
  "/imgi_24_Engine-Relpacement-Gallery-Image.webp",
  "/imgi_25_Engine-Relpacement-Gallery-Image-1.webp",
  "/imgi_84_Engine-Relpacement-Gallery-Image-1-768x432.webp",
];

const faqItems = [
  {
    question: "How much does it cost to replace an entire car engine?",
    answer:
      "Engine replacement cost depends on the car model, engine type, parts, labour, and the condition of the vehicle. Send your registration for a clear quote.",
  },
  {
    question: "How long does it take to replace a whole engine?",
    answer:
      "A straightforward engine replacement can often be completed within a few working days, but timing depends on parts availability, diagnosis, and extra repairs.",
  },
  {
    question: "Does a new engine reset mileage?",
    answer:
      "No. The vehicle mileage remains the same because it records the distance travelled by the car, not only the engine.",
  },
  {
    question: "When should an engine be replaced?",
    answer:
      "Replacement may be needed after severe mechanical failure, low compression, major internal damage, repeated overheating, or repair costs that exceed the value of fitting another engine.",
  },
  {
    question: "Do I need to inform the DVLA if I change my engine?",
    answer:
      "Yes, engine number or capacity changes should be updated with the DVLA and may also need supporting evidence from the garage.",
  },
  {
    question: "Does changing the engine affect insurance?",
    answer:
      "It can. Always inform your insurer before or after an engine change so your policy details remain accurate.",
  },
];

const serviceHref = (service: string) => {
  if (service === "Engine Replacement") return "/engine-replacement";
  if (service === "Auto Gearbox Replacement") return "/auto";
  if (service === "Brake Pad Replacement") return "/brake-pad-replacement";
  if (service === "Shock Absorber Repair") return "/auto";
  if (service === "Car Exhaust Repair") return "/auto";
  if (service === "Power Steering Replacement") return "/steering-fluid";
  if (service === "Car AC Repair") return "/aircon-regas";
  if (service === "Fuel System Repair") return "/auto";
  if (service === "Timing Belt Replacement") return "/auto";
  if (service === "Turbo Replacement") return "/auto";
  return "/auto";
};

export default function EngineReplacementPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[510px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_150_Car-Engine-Replacement-hero-banner-image.webp"
          alt="Car engine replacement service in London"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[510px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Engine replacement</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Car Engine Replacement Garage In W12, London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Expert engine diagnosis, replacement, and fitting for drivers who need their vehicle running reliably again.
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
          <div className="relative mx-auto min-h-[390px] w-full max-w-xl">
            <Image src="/imgi_14_Engine-Replacement-Content-Image.webp" alt="Replacement car engine" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Professional <span className="text-red-600">Engine Replacement</span> In London
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              If your engine is underperforming, noisy, overheating, or beyond economical repair, TaylorMOT can inspect the vehicle and recommend the most suitable replacement route.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              We handle diagnosis, engine sourcing guidance, removal, fitting, fluids, and final checks with a clean, practical workflow designed for dependable results.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          How To Replace A Faulty Car Engine
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          We help you compare replacement choices before work begins, so the repair suits both your car and your budget.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {engineTypes.map((type, index) => (
            <article key={type.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className={index === 1 ? "relative h-64 bg-neutral-50" : "relative h-64 bg-red-600"}>
                <Image src={type.image} alt={type.title} fill className="object-contain p-7" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black text-red-600 sm:text-2xl">{type.title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-6 text-neutral-800">{type.text}</p>
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
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Engine replacement quote request" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your engine issue</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Engine replacement details" placeholder="Tell us about warning lights, smoke, noises, overheating, power loss, or any diagnosis already completed" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_70_Engine-Replacement-Content-Image-1536x1024.webp" alt="Engine replacement work" fill className="object-cover" sizes="430px" />
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
            <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
              When Should I Replace My Car Engine?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Engine failure can start with small signs before becoming a major breakdown. If repair costs are rising or the engine has serious internal damage, replacement may be the smarter choice.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {symptoms.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <Car className="mt-1 shrink-0 text-red-600" size={21} />
                  {item}
                </div>
              ))}
            </div>
            <div className="relative mt-8 min-h-[390px] overflow-hidden rounded-md">
              <Image src="/imgi_70_Engine-Replacement-Content-Image-1536x1024.webp" alt="Mechanic inspecting engine components" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          LMS, A Name You Can Trust
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          TaylorMOT provides careful engine replacement support for local and imported cars. We inspect the vehicle, explain the work clearly, and fit the replacement with attention to the connected parts around it.
        </p>
        <p className="mt-4 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          From engine diagnostics to final road-readiness checks, the goal is a smooth service that helps your car return to reliable everyday use.
        </p>
        <div className="mt-9 space-y-7">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex gap-4">
              <Cog className="mt-1 shrink-0 rounded-full bg-red-600 p-1 text-white" size={25} />
              <div>
                <h3 className="text-lg font-black text-neutral-950">{point.title}</h3>
                <p className="mt-2 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          Drive More Miles With A Replaced Engine
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          A replacement engine can restore dependable performance when the existing engine is badly damaged or no longer cost-effective to repair. We help you choose an option that matches the vehicle, usage, and budget.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            { text: "Engine condition and symptoms reviewed before replacement", icon: Sparkles },
            { text: "Suitable used, new, or remanufactured options discussed", icon: ClipboardCheck },
            { text: "Core fitting work completed by experienced technicians", icon: Wrench },
            { text: "Fluids, connections, and final running checks completed", icon: CheckCircle2 },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-4 text-sm font-semibold sm:text-[15px]">
                <Icon className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
                {item.text}
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">Why TaylorMOT For Engine Replacement?</h2>
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
        <Image src="/imgi_135_car-repair-hero-section-bg.webp" alt="Workshop engine replacement appointment" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable and well-versed</p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Looking For A Powerful Engine Swap? Get Expert Support
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
              <Image src={src} alt={`Engine replacement gallery image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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

      <Link href="https://wa.me/441784240000" className="fixed bottom-8 right-8 z-40 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl">
        <Phone size={34} />
        <span className="sr-only">Whatsapp</span>
      </Link>
    </main>
  );
}
