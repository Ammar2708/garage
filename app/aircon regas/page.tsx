import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Fan,
  Gauge,
  Phone,
  ShieldCheck,
  Snowflake,
} from "lucide-react";

const processSteps = [
  {
    title: "Diagnostic Check",
    text: "We check temperature, pressure, and visible AC system condition.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Evacuation",
    text: "Old refrigerant and moisture are removed safely where required.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Recharge",
    text: "The system is refilled with the correct gas and measured quantity.",
    image: "/imgi_14_car-aircon-regas-content-body-img.webp",
  },
  {
    title: "Performance Test",
    text: "We confirm the vents are blowing colder before handover.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "Air from the vents is not cold enough",
  "Cooling performance drops gradually over time",
  "Bad smell appears when the AC is switched on",
  "The AC makes unusual noises while running",
  "Windows take longer to demist in humid weather",
  "The system needs gas more often than expected",
];

const fluidServices = [
  "Engine Oil Change",
  "Brake Fluid Change",
  "Engine Coolant Replacement",
  "Transmission Fluid Change",
  "Power Steering Fluid Change",
  "Fuel Injector Replacement",
  "Engine Oil Leakage",
  "Car Aircon Regas",
];

const serviceSteps = [
  "Vehicle AC temperature and pressure readings checked first",
  "Refrigerant type confirmed before refill",
  "Old gas recovered safely using AC service equipment",
  "Vacuum test completed to help identify obvious leaks",
  "Correct refrigerant quantity and oil added where required",
  "Final cooling performance checked at the vents",
];

const components = [
  {
    title: "Aircon Pump",
    text: "A faulty compressor can reduce cooling and may need replacement before the system can perform properly.",
    image: "/imgi_4_car-aircon-regas-pg-aircon-pump.webp",
  },
  {
    title: "Thermal Expansion Valve",
    text: "This valve controls refrigerant flow. If it sticks or fails, cooling can become weak or inconsistent.",
    image: "/imgi_5_car-aircon-regas-pg-thermal-expansion-valve.webp",
  },
  {
    title: "Receiver Drier",
    text: "The receiver drier helps remove moisture and debris from the air-conditioning system.",
    image: "/imgi_6_car-aircon-regas-pg-receiver-drier.webp",
  },
];

const whyCards = [
  {
    title: "Convenience",
    text: "Book a practical aircon check and regas service with clear timing and helpful workshop advice.",
    icon: CalendarCheck,
  },
  {
    title: "Affordable Pricing",
    text: "We confirm the required gas type and service scope before work starts.",
    icon: ClipboardCheck,
  },
  {
    title: "Transparency",
    text: "If a leak or faulty component is found, we explain the repair route before replacing parts.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "How much should a car aircon regas cost?",
    answer:
      "The cost depends on the refrigerant type, vehicle model, and whether leaks or component faults are found during the check.",
  },
  {
    question: "How do I know if my AC needs regassing?",
    answer:
      "Weak cooling, slow demisting, unusual AC noise, or warm air from the vents can all suggest the system needs inspection or regassing.",
  },
  {
    question: "What is the difference between regas and recharge?",
    answer:
      "Both terms usually describe refilling the air-conditioning system with refrigerant. A proper service may also include recovery, vacuum testing, and performance checks.",
  },
  {
    question: "How long does AC gas last?",
    answer:
      "Many systems gradually lose refrigerant over time. A check every couple of years helps keep cooling efficient and can reveal leaks early.",
  },
  {
    question: "What happens when AC gas is low?",
    answer:
      "The system may blow warmer air, take longer to cool the cabin, or put extra strain on AC components.",
  },
  {
    question: "Why is AC recharge sometimes expensive?",
    answer:
      "Pricing can vary because newer refrigerants, leak diagnosis, labour time, and replacement parts all affect the final cost.",
  },
];

const serviceHref = (service: string) => {
  if (service === "Engine Oil Change") return "/oil-change";
  if (service === "Brake Fluid Change") return "/brake-fluid";
  if (service === "Engine Coolant Replacement") return "/coolant";
  if (service === "Transmission Fluid Change") return "/fluid-change";
  if (service === "Power Steering Fluid Change") return "/steering-fluid";
  if (service === "Fuel Injector Replacement") return "/injector";
  if (service === "Engine Oil Leakage" || service === "Engine Oil Leakage Repairs") return "/oil-leakage";
  if (service === "Car Aircon Regas") return "/aircon-regas";
  return "/auto";
};

export default function CarAirconRegasPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[540px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_100_Car-Aircon-Regas-hero-banner-image-scaled.webp"
          alt="Car aircon regas equipment connected to a vehicle"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[540px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Car aircon regas
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Beat The Heat With Professional Car Aircon Regas
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Restore cold air, remove moisture from the system, and keep cabin comfort reliable with a careful air-conditioning recharge from TaylorMOT.
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
            <Image src="/imgi_14_car-aircon-regas-content-body-img.webp" alt="Aircon regas service in progress" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Specialised Garage In London For <span className="text-red-600">Car Aircon Regas</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A car air-conditioning system can slowly lose refrigerant through natural seepage. When the gas level drops, the cabin takes longer to cool and the system may work harder than it should.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks the AC system, confirms the right refrigerant, and refills it carefully so your car can deliver cooler air again.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-[32px]">How It Works</h2>
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
              <p className="mx-auto mt-3 max-w-xs text-sm font-medium leading-6 text-neutral-800">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[430px_1fr]">
          <aside className="space-y-7">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-68">
                <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Workshop service advisor" fill className="object-cover" sizes="430px" />
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
              <h3 className="text-center text-2xl font-black text-red-600">Oil And Fluid Services</h3>
              <div className="mt-6 space-y-3">
                {fluidServices.map((service) => (
                  <Link key={service} href={serviceHref(service)} className="flex items-center gap-4 rounded-md bg-white px-5 py-3.5 text-sm font-semibold transition hover:text-red-600 sm:text-base">
                    <Gauge className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={23} />
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
              When Do I Need Car Aircon Repair Or Regas?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              If the cabin is no longer cooling properly, a visual inspection and pressure check can show whether the AC simply needs a recharge or whether there is a fault that needs repair first.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {warningSigns.map((sign) => (
                <div key={sign} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={21} />
                  {sign}
                </div>
              ))}
            </div>
            <div className="relative mt-9 min-h-[400px] overflow-hidden rounded-md">
              <Image src="/imgi_14_car-aircon-regas-content-body-img.webp" alt="Car AC recharge close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
          What Are The Components Of A Car Aircon System?
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          During an aircon regas or repair, these components are commonly checked because each one can affect cooling performance.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {components.map((part) => (
            <article key={part.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className="relative h-64 bg-red-600">
                <Image src={part.image} alt={part.title} fill className="object-contain p-7" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black text-red-600 sm:text-2xl">{part.title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-6 text-neutral-800">
                  {part.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          Which Gas Does My Car Aircon Need?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Most vehicles use either R134a or R1234yf refrigerant. Newer vehicles commonly use R1234yf, while older cars may use R134a. We confirm the correct gas before regassing the system.
        </p>
        <h2 className="mt-9 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          How Much Does Car Aircon Regas Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          The cost depends on the refrigerant type, vehicle condition, and whether leak diagnosis or component repair is needed. Share your registration and our team will advise the right option.
        </p>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          What Is Included In Car Aircon Regas?
        </h2>
        <p className="mt-5 max-w-[1650px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Our AC service focuses on the correct refrigerant, careful recovery, system checks, and a final cooling test.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {serviceSteps.map((item) => (
            <div key={item} className="flex items-center gap-4 text-sm font-semibold sm:text-[15px]">
              <Snowflake className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">Why TaylorMOT For Aircon Regas Near You?</h2>
        <div className="mx-auto mt-10 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {whyCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-md border border-neutral-300 px-7 py-10">
                <Icon className="mx-auto text-red-600" size={62} strokeWidth={1.7} />
                <h3 className="mt-6 text-xl font-black text-red-600 sm:text-2xl">{card.title}</h3>
                <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-6 text-neutral-800">
                  {card.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
              Common AC Issues We Check
            </h2>
            <div className="mt-7 space-y-6">
              {[
                ["Faulty AC Fan", "A weak fan can reduce airflow and make the cabin feel warm even when the AC is running."],
                ["Bad Smell", "Unpleasant odours can point to moisture and build-up inside the ventilation system."],
                ["Faulty Component", "A compressor, valve, condenser, or receiver drier issue can stop the system cooling correctly."],
                ["No Cooling", "Warm air from the vents is the most common sign that the AC system needs a professional check."],
              ].map(([title, text]) => (
                <div key={title} className="flex gap-4">
                  <Fan className="mt-1 shrink-0 text-red-600" size={24} />
                  <div>
                    <h3 className="text-lg font-black">{title}</h3>
                    <p className="mt-2 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-md">
            <Image src="/imgi_100_Car-Aircon-Regas-hero-banner-image-scaled.webp" alt="Air conditioning regas equipment" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[520px]">
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Car aircon regas quote" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about the service needed</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Service needed" placeholder="Tell us about warm air, poor cooling, bad smell, AC noise, or your vehicle details" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
            <button className="mt-7 block rounded-md bg-red-600 px-14 py-3 text-sm font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
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
              <p className="border-t border-neutral-300 px-6 py-5 text-sm font-medium leading-7 text-neutral-800">
                {item.answer}
              </p>
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
