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
    text: "Share your vehicle details and clear photos of the bumper damage.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get Advice",
    text: "We assess repair, repaint, sensor, and replacement requirements.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "We Repair",
    text: "Our technicians restore scuffs, cracks, dents, paint, and fittings.",
    image: "/imgi_14_car-bumper-repair-content-img.webp",
  },
  {
    title: "Drive Away",
    text: "The finish is checked so the bumper looks clean and fits correctly.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const bumperParts = [
  {
    title: "Lights",
    text: "Bumper lights and reflectors are checked for damage, alignment, and secure fitting after an impact.",
    image: "/imgi_4_bumper-repair-replacement-pg-bumper-lights.webp",
  },
  {
    title: "Sensors",
    text: "Parking sensors, warning units, and trims are inspected before repair or replacement work begins.",
    image: "/imgi_5_bumper-repair-replacement-pg-Warning-signals-and-sensors.webp",
  },
  {
    title: "Trim And Moulding",
    text: "Split trim, loose clips, paint marks, and moulding damage are restored for a neater bumper finish.",
    image: "/imgi_14_car-bumper-repair-content-img.webp",
  },
];

const repairChecks = [
  "Scuffs, scratches, cracks, and dents inspected before quoting",
  "Plastic repair and bumper welding considered where suitable",
  "Paint damage sanded, primed, blended, and refinished carefully",
  "Mounting brackets, clips, trims, lights, and sensors checked",
  "Replacement advised only when repair is not the right option",
];

const whyCards = [
  {
    title: "Same-Day Options",
    text: "Minor bumper scuffs and cosmetic repairs can often be handled quickly after inspection.",
    icon: CalendarCheck,
  },
  {
    title: "Clear Estimates",
    text: "We explain whether repair, repainting, or replacement gives the better result for your vehicle.",
    icon: ClipboardCheck,
  },
  {
    title: "Careful Finish",
    text: "Our team focuses on colour match, panel fit, trims, and a clean final appearance.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "What bumper damage can TaylorMOT repair?",
    answer:
      "We repair bumper scuffs, scratches, cracks, dents, paint damage, loose trims, and minor fitting issues. Severe structural damage may need replacement.",
  },
  {
    question: "Is it better to repair or replace a bumper?",
    answer:
      "Repair is usually best for cosmetic damage. Replacement may be recommended if the bumper is badly split, distorted, unsafe, or has broken mounting points.",
  },
  {
    question: "How long does bumper repair take?",
    answer:
      "Small cosmetic repairs can often be completed quickly. Larger repairs, paintwork, sensor checks, or replacements can take longer depending on parts and preparation.",
  },
  {
    question: "Can you repair plastic bumpers?",
    answer:
      "Yes. Many plastic bumpers can be repaired with sanding, plastic repair, filling, priming, repainting, and refitting where the damage is suitable.",
  },
  {
    question: "Do you repair bumper paint damage?",
    answer:
      "Yes. We handle bumper paint scuffs, scratches, chips, and local repainting with colour matching and careful finishing.",
  },
];

const serviceHref = (service: string) => {
  if (service === "Car Dent Repair") return "/car-dent-repair";
  if (service === "Car Scratch Repair") return "/car-scratch-repair";
  if (service === "Bumper Repair") return "/bumper";
  return "/auto";
};

export default function BumperRepairPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_100_car-bumper-repair-hero-banner-img.webp"
          alt="Technician painting a car bumper"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Bumper repair and replacement
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Professional Car Bumper Repair And Replacement In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Restore bumper scuffs, dents, cracks, paint damage, trims, and fittings with practical repair advice and careful workshop finishing from TaylorMOT.
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
            <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Mechanic ready for bumper repair" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Expert <span className="text-red-600">Bumper Repair</span> For Everyday Damage
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A bumper protects your vehicle during low-speed impacts, but it also carries trims, lights, sensors, and painted surfaces. Small damage can quickly make the car look tired or affect fitment.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks the bumper properly and recommends a sensible repair route, from scuff repair and paint refinishing to full bumper replacement where needed.
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
                <Image src="/imgi_14_car-bumper-repair-content-img.webp" alt="Car bumper refinishing" fill className="object-cover" sizes="430px" />
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
              <Image src="/imgi_14_car-bumper-repair-content-img.webp" alt="Red bumper paint repair" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
              Plastic Bumper Repair Specialists
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Whether you drive an electric, hybrid, or fuel-powered vehicle, our team can assess bumper damage and explain the best repair or replacement option.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {repairChecks.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={21} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-[32px]">
          Why Invest In Car Bumper Restoration?
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          A clean, secure bumper protects key parts of the vehicle and helps keep the exterior looking professional after everyday knocks.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {bumperParts.map((part) => (
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
          How We Repair Bumper Damage
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          We inspect the damage extent, check whether the bumper still fits correctly, and choose the right process for plastic repair, paint refinishing, trim replacement, or bumper replacement.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {repairChecks.map((item) => (
            <div key={item} className="flex items-center gap-4 text-sm font-semibold sm:text-[15px]">
              <Wrench className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h3 className="text-xl font-black text-red-600 sm:text-2xl">Repair, Repaint, Or Replace</h3>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Cosmetic scuffs may only need local paintwork. Cracks, broken clips, deep dents, or unsafe damage may need extra repair time or a replacement bumper.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-md">
            <Image src="/imgi_14_car-bumper-repair-content-img.webp" alt="Bumper paint repair process" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          How Much Does Bumper Repair Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Pricing depends on damage size, bumper material, paint colour, sensor or light involvement, and whether repair or replacement is required. Send photos for a clear estimate.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">Why TaylorMOT For Bumper Repair?</h2>
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
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Bumper repair quote" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
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
            <textarea aria-label="Service needed" placeholder="Tell us about the bumper damage, paint colour, sensors, and replacement needs" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
