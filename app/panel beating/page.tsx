import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Gauge,
  Hammer,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
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
    title: "Share Photos",
    text: "Send clear images of dents, scratches, rust, and panel damage.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Panel Check",
    text: "We assess whether repair, reshaping, paint, or replacement is best.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Repair Work",
    text: "Our technicians restore damaged panels with controlled workshop methods.",
    image: "/imgi_7_car-panel-beating-content-img.webp",
  },
  {
    title: "Final Finish",
    text: "The repaired area is checked for fit, surface quality, and appearance.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const repairTypes = [
  {
    title: "Dents And Scratches",
    text: "Small dents, creases, scratches, and surface marks are restored with careful reshaping and finishing.",
    image: "/imgi_4_panel-beating-img-dents-and-scratches.webp",
  },
  {
    title: "Collision Damage",
    text: "Impact damage is inspected for panel shape, alignment, paintwork, and replacement needs.",
    image: "/imgi_5_panel-beating-img-collision-damage.webp",
  },
  {
    title: "Rust Damage",
    text: "Corroded sections are assessed early so repair or replacement can protect the vehicle body.",
    image: "/imgi_6_panel-beating-img-rust-damage.webp",
  },
];

const panelChecks = [
  "Dents, creases, scratches, rust, and impact damage inspected",
  "Repair or replacement advice based on damage location and severity",
  "Panel shaping, sanding, priming, paint matching, and finishing",
  "Door, wing, bumper, trim, and body panel fitment checked",
  "Final surface inspection for a cleaner professional result",
];

const commonProblems = [
  {
    title: "Collisions And Accidents",
    text: "Impacts can leave dents, folds, poor gaps, loose trims, and structural concerns that need proper inspection.",
  },
  {
    title: "Car Park Damage",
    text: "Tight parking spaces often cause door dings, scraped panels, bumper marks, and small creases.",
  },
  {
    title: "Rust And Corrosion",
    text: "Moisture and chipped paint can expose metal, so timely repair helps preserve the panel.",
  },
  {
    title: "Age And Wear",
    text: "Older panels can weaken, distort, or lose finish quality, especially around repaired or exposed areas.",
  },
];

const whyCards = [
  {
    title: "Practical Estimates",
    text: "We explain what can be repaired and when replacement is the better route.",
    icon: ClipboardCheck,
  },
  {
    title: "Careful Craft",
    text: "Our technicians focus on panel shape, surface prep, colour match, and final fit.",
    icon: Hammer,
  },
  {
    title: "Lasting Finish",
    text: "Repairs are completed with attention to primer, paint, protection, and inspection.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "What is panel beating?",
    answer:
      "Panel beating is the repair and reshaping of damaged vehicle body panels. It can include dent removal, panel alignment, filling, sanding, priming, and paint refinishing.",
  },
  {
    question: "Do you repair or replace damaged panels?",
    answer:
      "Both options are available. Minor and moderate damage can often be repaired, while heavily creased, rusted, or unsafe sections may need replacement.",
  },
  {
    question: "How long does panel beating take?",
    answer:
      "Timing depends on damage size, paintwork, panel location, and parts availability. Small repairs may be quicker, while collision or replacement work can take longer.",
  },
  {
    question: "Can you fix car door panel damage?",
    answer:
      "Yes. We can assess door dents, scratches, creases, rust, and fitment issues, then recommend repair, refinishing, or replacement where needed.",
  },
  {
    question: "How much does panel beating cost?",
    answer:
      "Cost depends on the repair area, labour time, materials, paint matching, and whether replacement parts are required. Photos help us provide a clearer estimate.",
  },
];

const serviceHref = (service: string) => {
  if (service === "Car Dent Repair") return "/car-dent-repair";
  if (service === "Car Scratch Repair") return "/car-scratch-repair";
  if (service === "Bumper Repair") return "/bumper";
  if (service === "Panel Beating") return "/panel beating";
  if (service === "Accidental Car Repair") return "/accident";
  return "/auto";
};

export default function PanelBeatingPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_78_car-panel-beater-hero-banner-img.webp"
          alt="Car panel beating repair in progress"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Panel beating and replacement
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Professional Car Panel Beating Services In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Restore dents, creases, rust, scratches, collision damage, and damaged body panels with careful repair and replacement support from TaylorMOT.
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
            <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Mechanic ready for panel repair" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Expert <span className="text-red-600">Panel Restoration</span> For Damaged Bodywork
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Panel beating restores damaged metal and exterior panels after everyday knocks, parking scrapes, rust, and accident damage. The goal is a clean shape, secure fit, and finish that suits the vehicle.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks each panel properly before recommending repair, paintwork, or replacement. You get clear advice without oversized text or overcomplicated wording.
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
                <Image src="/imgi_7_car-panel-beating-content-img.webp" alt="Panel beating workshop repair" fill className="object-cover" sizes="430px" />
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
              <Image src="/imgi_7_car-panel-beating-content-img.webp" alt="Hammer and dolly used for car panel beating" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
              What Does Panel Beating Include?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Our panel beating service covers reshaping, replacing damaged sections, surface preparation, priming, paint matching, and final checks. Each repair is planned around the actual damage rather than a one-size-fits-all method.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {panelChecks.map((item) => (
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
          Repairs Included In Panel Beating
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Different panels need different repair routes. We inspect the damage first, then choose the most practical way to restore appearance and strength.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {repairTypes.map((type) => (
            <article key={type.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className="relative h-64 bg-red-600">
                <Image src={type.image} alt={type.title} fill className="object-contain p-7" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black text-red-600 sm:text-2xl">{type.title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-6 text-neutral-800">
                  {type.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-md">
            <Image src="/imgi_78_image-26.webp" alt="Technician working in a body repair shop" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </div>
          <div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Common Problems That Need A Car Panel Beater
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Vehicle panels can suffer from accidents, weather, car park knocks, and age. Repairing them early can protect appearance, paint, and bodywork condition.
            </p>
            <div className="mt-9 space-y-7">
              {commonProblems.map((problem) => (
                <div key={problem.title} className="flex gap-4">
                  <Wrench className="mt-1 shrink-0 rounded-full bg-red-600 p-1 text-white" size={25} />
                  <div>
                    <h3 className="text-lg font-black text-neutral-950">{problem.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
                      {problem.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          How We Restore Damaged Panels
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          The repair path can include dent removal, controlled hammering, cutting out damaged sections, welding, filling, sanding, primer, paint, and polishing. Replacement is recommended when a panel is too damaged to repair properly.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            { text: "Panel reshaping and dent correction", icon: Hammer },
            { text: "Primer, sanding, paint matching, and polishing", icon: Paintbrush },
            { text: "Rust repair and damaged section replacement", icon: Wrench },
            { text: "Final surface and panel gap inspection", icon: Sparkles },
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

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          How Much Does Panel Beating Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Pricing depends on damage size, panel location, paint colour, labour time, material use, and whether replacement panels are needed. Send photos or book an inspection for a more accurate quote.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">Why TaylorMOT For Panel Beating?</h2>
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
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Panel beating quote request" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about the panel damage</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Panel beating details" placeholder="Tell us about dents, scratches, rust, paintwork, or replacement needs" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
