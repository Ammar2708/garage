import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  Car,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Gauge,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
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
    title: "Fill a Form",
    text: "Tell us about starting trouble, warning lights, or poor fuel economy.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get a Quote",
    text: "We confirm the inspection route, likely parts, labour, and timing.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let us Fix",
    text: "Our technicians inspect pumps, filters, injectors, lines, and pressure.",
    image: "/imgi_86_Oil-Leakage-Repair.webp",
  },
  {
    title: "Relax & Joy",
    text: "Drive away with smoother starting, cleaner delivery, and better response.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const fuelParts = [
  {
    title: "Fuel Pump",
    text: "The fuel pump moves fuel from the tank to the engine. Weak pressure can cause hard starts, stalling, power loss, and rough acceleration.",
    image: "/imgi_4_Fuel-Pump.png",
  },
  {
    title: "Fuel Filter",
    text: "The filter keeps harmful particles away from injectors. A blocked filter can reduce flow, lower performance, and make the engine struggle.",
    image: "/imgi_5_Fuel-Filter.png",
  },
  {
    title: "Fuel Injectors",
    text: "Injectors deliver fuel into the engine precisely. Dirty or faulty injectors can cause misfires, poor economy, smoke, and uneven idle.",
    image: "/imgi_6_Fuel-Injectors.png",
  },
];

const symptoms = [
  {
    title: "High Temperature",
    text: "A weak pump may overwork and struggle to deliver fuel correctly, causing engine heat and poor running.",
  },
  {
    title: "Acceleration Issues",
    text: "When fuel pressure drops, the engine may hesitate, surge, or feel weak when you press the accelerator.",
  },
  {
    title: "Vehicle Surge",
    text: "Too much or inconsistent fuel delivery can cause sudden pickup and loss of speed, especially while driving.",
  },
  {
    title: "Engine Misfire",
    text: "Faulty injectors, poor pressure, or restricted filters can interrupt combustion and create misfires.",
  },
  {
    title: "Loud Fuel Tank Noise",
    text: "A whining fuel tank noise can point to a tired pump that is working harder than it should.",
  },
  {
    title: "Reduced Fuel Efficiency",
    text: "A dirty or failing fuel system can make the car consume more fuel while delivering less performance.",
  },
];

const whyCards = [
  {
    title: "Boost Performance",
    text: "Healthy fuel delivery helps restore smoother acceleration, cleaner starts, and better everyday driveability.",
    icon: Wallet,
  },
  {
    title: "Increased Safety",
    text: "We inspect lines, clamps, filters, tanks, injectors, and fuel pressure with careful workshop checks.",
    icon: ShieldCheck,
  },
  {
    title: "Engine Performance",
    text: "Correct fuel flow protects the engine from hesitation, misfires, rough idle, and unnecessary strain.",
    icon: Timer,
  },
];

const faqItems = [
  {
    question: "What is a fuel system?",
    answer:
      "The fuel system includes the tank, pump, filter, injectors, fuel lines, and related controls that deliver fuel to the engine for combustion.",
  },
  {
    question: "What are the symptoms of a flawed fuel system?",
    answer:
      "Common symptoms include hard starting, stalling, engine hesitation, misfires, poor acceleration, reduced fuel economy, fuel smell, or a warning light.",
  },
  {
    question: "What is fuel system treatment?",
    answer:
      "Fuel system treatment can include inspection, cleaning, pressure checks, injector cleaning, filter replacement, pump repair, or replacement of damaged parts.",
  },
  {
    question: "Can dirty fuel damage injectors?",
    answer:
      "Yes. Dirt and debris can block injector nozzles, disturb spray patterns, reduce fuel efficiency, and create misfires or rough idle.",
  },
  {
    question: "How often should I service my fuel system?",
    answer:
      "Follow your vehicle service schedule and book an inspection sooner if you notice poor performance, hard starts, high fuel use, or warning lights.",
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

const serviceHref = (service: string) => {
  if (service === "Engine Replacement") return "/engine-replacement";
  if (service === "Brake Pad Replacement") return "/brake-pad-replacement";
  if (service === "Car Exhaust Repair") return "/exhaust";
  if (service === "Fuel System Repair") return "/fuel";
  if (service === "Power Steering Replacement") return "/steering-fluid";
  if (service === "Car AC Repair") return "/aircon-regas";
  return "/auto";
};

export default function FuelPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[500px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_93_Fuel-Injector-Replacement-hero-banner-image.jpg"
          alt="Fuel system repair service in London"
          fill
          priority
          className="object-cover opacity-62"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Fuel system repair</p>
          <h1 className="mt-4 max-w-5xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Drive Farther, Drive Better With <span className="text-red-500">Fuel System Repair</span>
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Fuel pump, filter, injector, tank, and line checks for smoother starts, better economy, and stronger engine response.
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
            <Image src="/imgi_7_Mask_Group_1.webp" alt="Fuel system repair technician" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Keep Your Car Running Smoothly With <span className="text-red-600">Fuel System Repair</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A clean, well-maintained fuel system supports engine life, fuel efficiency, and reliable performance. Skipping checks can lead to premature pump, filter, or injector failure.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT diagnoses fuel delivery issues, injector problems, tank concerns, pressure loss, and blocked filters, then recommends the most practical repair for your vehicle.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Replace Your Faulty <span className="text-red-600">Fuel System Parts</span> To Avoid Damage
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Regular fuel injector cleaning, filter checks, and pump inspections help prevent breakdowns and rough running.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {fuelParts.map((part, index) => (
            <article key={part.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className={index === 1 ? "relative h-64 bg-neutral-50" : "relative h-64 bg-red-600"}>
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

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-72">
                <Image src="/imgi_14_fuel-system-repair-content-img.webp" alt="Fuel system inspection" fill className="object-cover" sizes="430px" />
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
              Common Symptoms Of Fuel System Problems
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A faulty pump, blocked filter, dirty injector, or fuel pressure issue can affect performance and leave you stranded. Early inspection keeps the repair focused and cost clearer.
            </p>
            <div className="mt-8 space-y-6">
              {symptoms.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={21} />
                  <div>
                    <h3 className="text-base font-black">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-8 min-h-[390px] overflow-hidden rounded-md">
              <Image src="/imgi_14_fuel-system-repair-content-img.webp" alt="Mechanic checking fuel system components" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              What Are The Signs Of A <span className="text-red-600">Damaged Fuel System?</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Fuel systems can fail due to poor fuel quality, driving conditions, vehicle age, missed maintenance, or accidental misfuelling. Petrol direct injection cars need extra care because injector condition affects performance quickly.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              We suggest a fuel system check when the car starts poorly, stalls, loses power, smells of fuel, or uses more fuel than normal.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                { text: "Fuel lines and clamps checked", icon: Sparkles },
                { text: "Pump pressure and delivery inspected", icon: Car },
                { text: "Injectors and filters reviewed", icon: ClipboardCheck },
                { text: "Clear quote before repair begins", icon: Wrench },
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
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-md">
            <Image src="/imgi_11_fuel-injector-replacement-content-body-img.webp" alt="Fuel injector and fuel line inspection" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <Image src="/imgi_84_car-repair-hero-banner.webp" alt="Fuel system repair appointment banner" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-red-500">Reliable and well-versed</p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Do Not Let A Faulty Fuel System Hold You Back
            </h2>
            <Link href="/appointment" className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-white bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700">
              Book Appointment
              <CalendarCheck size={19} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Why TaylorMOT For <span className="text-red-600">Fuel System Repair?</span>
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

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          We Suggest A Fuel System Check To Ensure Safety
        </h2>
        <div className="mt-8 space-y-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={24} />
            <div>
              <h3 className="text-base font-black sm:text-lg">Checking The Fuel Lines</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
                Fuel system hoses and clamps can crack, soften, or loosen over time, leading to leaks. Proper inspection helps keep the system secure.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={24} />
            <div>
              <h3 className="text-base font-black sm:text-lg">Depressurising The Fuel System</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
                Before fuel injector replacement or pump work, pressure must be relieved carefully to avoid hazardous fuel spray.
              </p>
            </div>
          </div>
        </div>
        <h2 className="mt-10 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          Get Your Fuel System Repaired At TaylorMOT
        </h2>
        <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Our team handles fuel injector replacement, injector cleaning, fuel injection repair, tank checks, pump replacement, filter installation, and debris removal.
        </p>
      </section>

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[520px]">
          <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Fuel system repair quote request" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">FREE QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your fuel system issue</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Fuel system repair details" placeholder="Tell us about hard starts, misfires, fuel smell, warning lights, poor economy, or the service needed" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="grid gap-7 md:grid-cols-3">
          {["/imgi_21_fuel-system-repair-gallery-img-1-1.webp", "/imgi_20_fuel-system-repair-gallery-img-2-1.webp", "/imgi_22_fuel-system-repair-gallery-img-3.webp", "/imgi_23_fuel-system-repair-gallery-img-6.webp", "/imgi_24_fuel-system-repair-gallery-img-4.webp", "/imgi_25_fuel-system-repair-gallery-img-5.webp"].map((image, index) => (
            <div key={image} className="relative h-72 overflow-hidden rounded-md">
              <Image src={image} alt={`Fuel system repair gallery ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-center text-3xl font-black leading-tight sm:text-[34px]">
          Frequently Asked Questions - <span className="text-red-600">FAQ</span>
        </h2>
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
        <h2 className="text-3xl font-black leading-tight">Read Also</h2>
        <div className="mt-8 grid gap-7 md:grid-cols-3">
          {relatedResources.map((resource) => (
            <article key={resource.title} className="overflow-hidden rounded-md bg-neutral-50">
              <div className="relative h-64">
                <Image src={resource.image} alt={resource.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-lg font-black leading-7 text-neutral-800">{resource.title}</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-neutral-800">{resource.text}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium">{resource.date}</span>
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
