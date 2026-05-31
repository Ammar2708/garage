import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Gauge,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Timer,
  Wallet,
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
    title: "Fill A Form",
    text: "Share your details and tell us what paint damage needs attention.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We review the repair area and prepare a clear estimate for you.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let Us Fix",
    text: "Our technicians repair, match, refinish, and polish the affected paintwork.",
    image: "/imgi_14_car-paint-repair-content-img.webp",
  },
  {
    title: "Relax And Enjoy",
    text: "Collect a cleaner, glossier car with paintwork restored properly.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const repairTypes = [
  {
    title: "Car Paint Repairs",
    text: "Small marks, dull patches, chips, and local paint damage are restored with careful preparation.",
    image: "/imgi_4_capint-repair-content-img.webp",
  },
  {
    title: "Scratch Repairs",
    text: "Surface scratches and deeper paint marks are assessed before polishing, touch-up, or refinishing.",
    image: "/imgi_5_car-paint-repair-content-img-.webp",
  },
  {
    title: "Touch-Up Paint",
    text: "Stone chips and scuffs are treated with colour-matched paint to improve the finish.",
    image: "/imgi_14_car-paint-repair-content-img.webp",
  },
];

const paintChecks = [
  "Paint scratches, chips, scuffs, bumper marks, and dull areas inspected",
  "Colour matching for a cleaner blend with the existing finish",
  "Sanding, priming, touch-up, respray, polishing, and final checks",
  "SMART repair advice for smaller marks and localised damage",
  "Clear quote based on damage size, finish, colour, and repair method",
];

const commonProblems = [
  {
    title: "Scratches And Scuffs",
    text: "Daily driving, tight parking, keys, and road contact can mark the clear coat or paint layer.",
  },
  {
    title: "Stone Chips",
    text: "Road debris can chip paint and expose the surface underneath, so early repair helps prevent spreading.",
  },
  {
    title: "Bumper Paint Damage",
    text: "Plastic bumpers often suffer scuffs, scrapes, and colour damage that need careful refinishing.",
  },
  {
    title: "Dull Or Faded Finish",
    text: "Sunlight, age, and poor previous repairs can reduce gloss and make paintwork look tired.",
  },
];

const whyCards = [
  {
    title: "Maintain Your Car's Value",
    text: "Timely paint repair helps protect appearance and resale value.",
    icon: ShieldCheck,
  },
  {
    title: "Save Money",
    text: "Minor paint repair can be more affordable than delaying until damage spreads.",
    icon: Wallet,
  },
  {
    title: "Save Time",
    text: "Many local paint repairs can be completed without a full body shop respray.",
    icon: Timer,
  },
];

const faqItems = [
  {
    question: "What types of car paint damage can be fixed?",
    answer:
      "We can assess scratches, scuffs, stone chips, dull paint, bumper marks, and local paint damage. The right repair depends on depth, colour, panel location, and finish condition.",
  },
  {
    question: "How long does car paint repair take?",
    answer:
      "Small touch-ups and SMART repairs may be completed quickly, while deeper scratches, bumper refinishing, or larger respray work can take longer.",
  },
  {
    question: "How much does car paint repair cost?",
    answer:
      "Cost depends on damage size, colour matching, paint materials, labour time, and whether the panel needs a touch-up, polish, or respray.",
  },
  {
    question: "Do you offer colour matching?",
    answer:
      "Yes. We use careful paint matching methods to help the repaired area blend with the vehicle's existing colour and finish.",
  },
  {
    question: "Why choose TaylorMOT for car paint repair?",
    answer:
      "TaylorMOT offers practical advice, professional preparation, colour matching, and finishing support for scratches, chips, scuffs, and cosmetic paintwork.",
  },
];

const serviceHref = (service: string) => {
  if (service === "Car Dent Repair") return "/car-dent-repair";
  if (service === "Car Scratch Repair") return "/car-scratch-repair";
  if (service === "Bumper Repair") return "/bumper";
  if (service === "Panel Beating") return "/panel beating";
  if (service === "Accidental Car Repair") return "/accident";
  if (service === "Car Paint Repair") return "/car-paint-repair";
  return "/auto";
};

export default function CarPaintPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_101_car-paint-repair-hero-banner-img-e1718984941207.webp"
          alt="Technician spraying car paint"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Car paint repair
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Smart Car Paint Repair Services In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Restore scratches, chips, bumper scuffs, dull paint, and cosmetic paint damage with careful colour matching and professional refinishing from TaylorMOT.
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
            <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Mechanic ready for car paint repair" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Get Your Car&apos;s Shine Back With <span className="text-red-600">Quality Paint Repair</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Even small paint damage can affect your vehicle&apos;s appearance and value. Whether it is a light scratch, stone chip, bumper scuff, or dull patch, our paint repair service is built to restore a cleaner finish.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              From small touch-ups to larger refinishing work, TaylorMOT uses careful preparation and colour matching so your car looks sharp again without oversized claims or confusing language.
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
                <Image src="/imgi_14_car-paint-repair-content-img.webp" alt="Car paint repair in workshop" fill className="object-cover" sizes="430px" />
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
              <Image src="/imgi_14_car-paint-repair-content-img.webp" alt="Red car being polished after paint repair" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
              Advanced Paintwork Techniques
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              We repair paintwork with a practical process: inspect the damage, prepare the surface, match the colour, apply the right finish, and polish the area for a cleaner look.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {paintChecks.map((item) => (
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
          How Does TaylorMOT Provide Car Paint Fix?
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Whether you need a complete respray, local touch-up, or scratch repair, we choose a repair route that fits the damage and protects the finish.
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
            <Image src="/imgi_78_image-26.webp" alt="Technician in a car repair workshop" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </div>
          <div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Why TaylorMOT For Your Car Paint Repair?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Our team handles paint scratches, chips, scuffs, bumper marks, and cosmetic spray work with a focus on preparation, colour matching, and finish quality.
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
          Looking For A Comprehensive Car Paint Repair Solution?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          We repair minor scuffs, deeper scratches, paint chips, and bumper marks using suitable preparation and refinishing methods. The aim is a smooth, clean result without unnecessary work.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            { text: "Scratch, scuff, and stone chip repair", icon: SprayCan },
            { text: "Bumper paint repair and local refinishing", icon: Paintbrush },
            { text: "Colour matching and shine restoration", icon: Sparkles },
            { text: "Clear guidance before any paintwork starts", icon: ClipboardCheck },
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
          How Much Does Car Paint Repair Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Pricing depends on the damage size, repair area, colour, materials, and whether the vehicle needs a local touch-up, SMART repair, bumper refinish, or larger respray. Send photos for a clearer quote.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">Why TaylorMOT As Car Body Paint Shop?</h2>
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

      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <Image src="/imgi_135_car-repair-hero-section-bg.webp" alt="Car repair workshop background" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable and well-versed</p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
              From A Minor Paint Repair To A Major Scuff, TaylorMOT Can Help
            </h2>
            <Link href="/appointment" className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-white bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700">
              Book Appointment
              <CalendarCheck size={19} />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[520px]">
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Car paint repair quote request" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about the paint damage</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Car paint repair details" placeholder="Tell us about scratches, chips, bumper scuffs, paint colour, or respray needs" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
