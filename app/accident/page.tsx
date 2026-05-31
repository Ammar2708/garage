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

const bodyServices = [
  "Car Dent Repair",
  "Car Scratch Repair",
  "Bumper Repair",
  "Panel Beating",
  "Windscreen Replacement",
  "Wing Mirror Replacement",
  "Car Window Tint",
  "Accidental Car Repair",
];

const processSteps = [
  {
    title: "Send Details",
    text: "Share vehicle details, photos, and notes about the accident damage.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get Estimate",
    text: "We inspect visible damage and advise the likely repair route clearly.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Repair Work",
    text: "Our technicians repair bodywork, paint, bumper, and structural damage.",
    image: "/imgi_11_car-accident-repair-content-body-im.webp",
  },
  {
    title: "Final Check",
    text: "We check the finish, fitment, and safety points before handover.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const repairServices = [
  "Body panel repair and replacement after collision damage",
  "Bumper, trim, light, and paint repairs after low-speed impact",
  "Scratch, dent, scuff, and cosmetic accident repair work",
  "Structural checks where impact damage may affect alignment",
  "Final inspection to confirm fitment, finish, and road-readiness",
];

const accidentRisks = [
  {
    title: "Hidden Damage",
    text: "Impacts can affect brackets, trims, alignment, sensors, and panels even when damage looks minor.",
  },
  {
    title: "Paint And Rust",
    text: "Scratched or cracked paint should be repaired early to reduce the chance of corrosion.",
  },
  {
    title: "Safety Concerns",
    text: "Loose panels, damaged lights, or poor alignment can affect safety and visibility.",
  },
];

const whyCards = [
  {
    title: "Fast Support",
    text: "We help you understand the next step after a collision without making the process complicated.",
    icon: Timer,
  },
  {
    title: "Clear Estimates",
    text: "You get practical advice on repair cost, repair scope, and replacement needs before work starts.",
    icon: ClipboardCheck,
  },
  {
    title: "Quality Checks",
    text: "Every completed repair is checked for finish, fitment, and sensible safety details.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "What is the car accident repair process?",
    answer:
      "We inspect the vehicle, identify visible and possible hidden damage, prepare an estimate, complete the agreed repairs, refinish affected areas, and complete final checks before handover.",
  },
  {
    question: "How much does accident repair cost?",
    answer:
      "Cost depends on impact severity, damaged parts, paintwork, labour time, and whether replacement parts are needed. Photos or an inspection help us give a clearer estimate.",
  },
  {
    question: "How can I find reliable accident repair near me?",
    answer:
      "Choose a workshop that explains the repair process clearly, checks safety-related damage, uses suitable equipment, and gives transparent estimates before starting work.",
  },
  {
    question: "How long will accident repairs take?",
    answer:
      "Minor cosmetic repairs may be completed quickly. Larger bodywork, structural repairs, paintwork, or parts replacement can take longer depending on availability and preparation.",
  },
  {
    question: "What types of vehicles do you repair?",
    answer:
      "TaylorMOT works on many vehicle makes and models. The exact repair approach depends on the vehicle, damage location, and required parts.",
  },
];

const serviceHref = (service: string) => {
  if (service === "Car Dent Repair") return "/car-dent-repair";
  if (service === "Car Scratch Repair") return "/car-scratch-repair";
  if (service === "Bumper Repair") return "/bumper";
  if (service === "Accidental Car Repair") return "/accident";
  return "/auto";
};

export default function AccidentRepairPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_94_accidental-car-repair-hero-banner-img-1.webp"
          alt="Accidental car repair in a workshop"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Car accident repair
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Expert Accidental Car Repair Services In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Get practical accident repair support for dents, scratches, bumper damage, bodywork repairs, paint refinishing, and post-collision checks from TaylorMOT.
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
            <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Mechanic ready for accident repair" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              From Recovery To <span className="text-red-600">Accidental Car Repair</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              After an accident, the first priority is safety. Once everyone is safe, the next step is getting clear advice on the damage and the right repair plan.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT handles accident repairs with a practical process, from inspection and estimates to bodywork, paint, bumper, and final quality checks.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-3xl font-black leading-tight sm:text-[32px]">How We Work</h2>
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
                <Image src="/imgi_11_car-accident-repair-content-body-im.webp" alt="Accident body repair work" fill className="object-cover" sizes="430px" />
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
              <h3 className="text-center text-2xl font-black text-red-600">Car Body Repair Services</h3>
              <div className="mt-6 space-y-3">
                {bodyServices.map((service) => (
                  <Link key={service} href={serviceHref(service)} className="flex items-center gap-4 rounded-md bg-white px-5 py-3.5 text-sm font-semibold transition hover:text-red-600 sm:text-base">
                    <Gauge className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={23} />
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="relative min-h-[390px] overflow-hidden rounded-md">
              <Image src="/imgi_11_car-accident-repair-content-body-im.webp" alt="Car bodywork repair after an accident" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
              What We Offer Under Car Accident Repairs
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Accident damage can include paint scuffs, panel dents, cracked bumpers, broken fittings, and alignment concerns. We inspect the damage and explain the most suitable repair route.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {repairServices.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={21} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          Our Car Accident Repair Process
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          We keep the repair process straightforward: assess the vehicle, agree the scope, complete the work, refinish the affected areas, and complete a final inspection.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {repairServices.map((item) => (
            <div key={item} className="flex items-center gap-4 text-sm font-semibold sm:text-[15px]">
              <Wrench className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
          Why Repair Accident Damage Promptly?
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Repairs after an accident are about more than appearance. Early inspection helps protect safety, value, and long-term vehicle condition.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {accidentRisks.map((risk) => (
            <article key={risk.title} className="rounded-md border border-neutral-300 px-7 py-10">
              <Wrench className="mx-auto text-red-600" size={62} strokeWidth={1.7} />
              <h3 className="mt-6 text-xl font-black text-red-600 sm:text-2xl">{risk.title}</h3>
              <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-6 text-neutral-800">
                {risk.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          How Much Do Collision Repairs Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Accident repair cost depends on damage severity, replacement parts, paintwork, labour, and whether hidden damage is found during inspection. We provide clear estimates before work begins.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">Why TaylorMOT For Accident Repairs?</h2>
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

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[520px]">
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Accident repair quote" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
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
            <textarea aria-label="Service needed" placeholder="Tell us about the accident, visible damage, affected panels, and repair needs" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
