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
  Sparkles,
  Timer,
  Wallet,
  Wrench,
} from "lucide-react";

const bodyServices = [
  "Car Dent Repair",
  "Car Scratch Repair",
  "Bumper Repair",
  "Panel Beating",
  "Car Paint Repair",
  "Windscreen Replacement",
  "Wing Mirror Replacement",
  "Car Window Tint",
  "Accidental Car Repair",
];

const processSteps = [
  {
    title: "Fill A Form",
    text: "Share your vehicle details and the mirror damage.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We confirm the mirror type and give clear pricing.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let Us Fit",
    text: "Our technicians replace the glass, cover, or full unit.",
    image: "/imgi_13_wing-mirror-replacement-content-img.webp",
  },
  {
    title: "Drive Away",
    text: "Visibility, adjustment, heating, and folding are checked.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const mirrorTypes = [
  {
    title: "Electric Mirror",
    text: "Electric mirrors adjust from inside the car and may include heating, folding, indicators, or sensors.",
    image: "/imgi_4_wing-mirror-replacement-pg-electric-mirror.webp",
  },
  {
    title: "Manual Mirror",
    text: "Manual mirrors use a lever or cable system and need careful fitting to keep visibility accurate.",
    image: "/imgi_5_wing-mirror-replacement-pg-manual-mirror.webp",
  },
];

const replacementChecks = [
  "Cracked mirror glass, loose covers, snapped clips, and missing units checked",
  "Electric adjustment, heating, indicator lights, and folding operation reviewed",
  "Correct mirror glass, casing, or full replacement unit identified",
  "Damaged parts removed carefully to protect wiring and door trim",
  "Final adjustment and road-view visibility check completed before handover",
];

const commonProblems = [
  {
    title: "Broken Mirror Glass",
    text: "Cracked or missing glass reduces your view and should be replaced promptly.",
  },
  {
    title: "Loose Housing",
    text: "A damaged casing can shake while driving and may expose clips, wiring, or indicators.",
  },
  {
    title: "Electrical Faults",
    text: "Adjustment, heating, folding, and indicator features can fail after impact or water ingress.",
  },
  {
    title: "Poor Visibility",
    text: "If the mirror cannot hold position or gives an unclear view, it needs inspection.",
  },
];

const whyCards = [
  {
    title: "One-Stop Solution",
    text: "We handle mirror glass, covers, manual units, and electric mirror assemblies.",
    icon: ShieldCheck,
  },
  {
    title: "Quick Replacement",
    text: "Most straightforward mirror glass and unit replacements can be completed quickly.",
    icon: Timer,
  },
  {
    title: "Clear Prices",
    text: "Vehicle details help us quote the correct part before replacement begins.",
    icon: Wallet,
  },
];

const faqItems = [
  {
    question: "Why is it essential to replace a broken wing mirror?",
    answer:
      "A damaged mirror limits your view, increases blind spots, and can make the car unsafe for normal road use. Prompt replacement restores visibility and helps protect other mirror components.",
  },
  {
    question: "How long does it take to replace a wing mirror at TaylorMOT?",
    answer:
      "Simple mirror glass replacements are often quick. Full electric units, painted covers, indicators, or special-order parts can take longer depending on vehicle specification.",
  },
  {
    question: "What types of wing mirrors do you replace?",
    answer:
      "We replace manual mirrors, electric mirrors, heated mirrors, folding units, mirror glass, covers, and complete assemblies where the correct part is available.",
  },
  {
    question: "Can I drive with a broken wing mirror in London?",
    answer:
      "Driving with missing or unsafe mirror visibility can put you and other road users at risk. Arrange repair as soon as possible, especially if the driver's view is affected.",
  },
  {
    question: "How much does wing mirror replacement cost?",
    answer:
      "Cost depends on the vehicle, mirror type, glass, heating, folding, indicator features, paint finish, and whether the full unit is needed. Send your registration for a clear quote.",
  },
];

const serviceHref = (service: string) => {
  if (service === "Car Dent Repair") return "/car-dent-repair";
  if (service === "Car Scratch Repair") return "/car-scratch-repair";
  if (service === "Bumper Repair") return "/bumper";
  if (service === "Panel Beating") return "/panel beating";
  if (service === "Accidental Car Repair") return "/accident";
  if (service === "Car Paint Repair") return "/car-paint-repair";
  if (service === "Windscreen Replacement") return "/windscreen";
  if (service === "Wing Mirror Replacement") return "/wing-mirror-replacement";
  return "/auto";
};

export default function WingMirrorPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[510px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_101_wing-mirror-replacement-hero-banner-img.webp"
          alt="Car wing mirror replacement"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[510px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Wing mirror replacement</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Professional Wing Mirror Replacement In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Replace cracked mirror glass, damaged covers, loose housings, and complete side mirror units with careful fitting from TaylorMOT.
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
            <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Mechanic ready for wing mirror replacement" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Fast <span className="text-red-600">Side Mirror</span> Replacement Support
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Wing mirrors are essential for lane changes, parking, and safe road awareness. If the glass is cracked, the cover is broken, or the unit is loose, we can inspect it and recommend the right replacement.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT replaces manual and electric wing mirrors, including mirror glass, covers, heated units, folding units, and complete assemblies where required.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Choose The Right Wing Mirror For Safe Driving
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          We identify the correct mirror type for your vehicle before fitting, so the replacement matches your car and its features.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1500px] gap-7 md:grid-cols-2">
          {mirrorTypes.map((type) => (
            <article key={type.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className="relative h-72 bg-neutral-50">
                <Image src={type.image} alt={type.title} fill className="object-contain p-8" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black text-red-600 sm:text-2xl">{type.title}</h3>
                <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-6 text-neutral-800">{type.text}</p>
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
              <div className="relative h-68">
                <Image src="/imgi_13_wing-mirror-replacement-content-img.webp" alt="Wing mirror replacement work" fill className="object-cover" sizes="430px" />
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
            <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
              Why Is Wing Mirror Replacement Crucial?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A missing or broken side mirror can reduce visibility, create blind spots, and make daily driving more stressful. Replacing it promptly protects your view and helps prevent further damage to the mirror housing.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {replacementChecks.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={21} />
                  {item}
                </div>
              ))}
            </div>
            <div className="relative mt-8 min-h-[390px] overflow-hidden rounded-md">
              <Image src="/imgi_13_wing-mirror-replacement-content-img.webp" alt="Car side mirror view after replacement" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-md">
            <Image src="/imgi_78_image-26.webp" alt="Technician ready to inspect side mirror" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </div>
          <div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              When Do You Need To Replace A Wing Mirror?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Damage can be obvious after a knock, but small faults also matter. If the mirror is loose, unclear, cracked, or no longer adjusts correctly, book an inspection.
            </p>
            <div className="mt-9 space-y-7">
              {commonProblems.map((problem) => (
                <div key={problem.title} className="flex gap-4">
                  <Wrench className="mt-1 shrink-0 rounded-full bg-red-600 p-1 text-white" size={25} />
                  <div>
                    <h3 className="text-lg font-black text-neutral-950">{problem.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">{problem.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          How Does TaylorMOT Replace Wing Mirrors?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          We inspect the glass, housing, clips, wiring, heating, folding, and indicator functions before replacing the damaged part. The new mirror is fitted, aligned, and checked for clear visibility.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            { text: "Mirror glass, casing, wiring, and clips inspected carefully", icon: ShieldCheck },
            { text: "Electric features checked before and after fitting", icon: Sparkles },
            { text: "Correct glass or complete unit installed neatly", icon: ClipboardCheck },
            { text: "Mirror movement and road-view angle checked before handover", icon: CheckCircle2 },
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
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          Can I Drive With A Broken Wing Mirror?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Driving with poor side visibility is unsafe and can lead to avoidable risk. If the mirror glass, housing, or adjustment has failed, arrange replacement before relying on the vehicle for regular journeys.
        </p>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          How Much Does Wing Mirror Replacement Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          The cost depends on your vehicle, mirror type, paint finish, glass, heating, folding, indicators, and whether the full unit is required. TaylorMOT provides clear quotes before work begins.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">Why TaylorMOT For Side Mirror Glass Replacement?</h2>
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
        <Image src="/imgi_135_car-repair-hero-section-bg.webp" alt="Workshop call to action background" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable mirror fitting</p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Get Your Wing Mirror Replaced And Back On The Road
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
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Wing mirror replacement quote request" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your wing mirror</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Wing mirror replacement details" placeholder="Tell us about broken glass, loose housing, electric faults, heating, folding, or full unit replacement" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
