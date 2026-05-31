import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Gauge,
  GlassWater,
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
    text: "Tell us your vehicle details and what happened to the glass.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We check the glass type, damage, and fitting needs before quoting.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let Us Fit",
    text: "Our technicians remove, prepare, bond, and fit the windscreen correctly.",
    image: "/imgi_14_car-windscreen-replacement-content-img-1.webp",
  },
  {
    title: "Drive Away",
    text: "Your glass is checked for fit, seal, visibility, and safe road use.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const glassTypes = [
  {
    title: "Laminated Windscreen Glass",
    text: "Front windscreens use laminated glass to improve safety, reduce shattering, and support clearer visibility.",
    image: "/imgi_4_windscreen-replacement-pg-laminated-windshield-glass.webp",
  },
  {
    title: "Tempered Glass",
    text: "Tempered glass is commonly used for side and rear windows because it breaks into smaller, blunt pieces.",
    image: "/imgi_5_windscreen-replacement-pg-tempered-windshield-glass.webp",
  },
  {
    title: "Water Repellent Glass",
    text: "Water repellent glass helps rain bead away from the surface, improving visibility in wet conditions.",
    image: "/imgi_6_windscreen-replacement-pg-water-repellent-glass.webp",
  },
];

const replacementChecks = [
  "Stone chips, cracks, smashed glass, seal leaks, and visibility issues checked",
  "Repair or replacement advice based on size, position, and safety risk",
  "Old glass removed with professional tools and careful surface preparation",
  "New glass fitted with secure bonding, gasket checks, and edge inspection",
  "Final review for fit, seal, visibility, and road-ready safety",
];

const commonProblems = [
  {
    title: "Chips And Small Cracks",
    text: "Tiny marks can spread with heat, vibration, and road pressure, so early inspection is sensible.",
  },
  {
    title: "Large Or Spreading Cracks",
    text: "Cracks in the driver's view or near the edge often need replacement rather than repair.",
  },
  {
    title: "Smashed Glass",
    text: "Broken glass should be replaced quickly to protect visibility, safety, and cabin security.",
  },
  {
    title: "Leaks And Poor Seals",
    text: "Water ingress, wind noise, or loose trim may point to a failed seal or previous poor fitting.",
  },
];

const whyCards = [
  {
    title: "Clear Quotes",
    text: "We explain the likely repair route before fitting work begins.",
    icon: Wallet,
  },
  {
    title: "Safe Installation",
    text: "Glass is fitted with careful preparation, bonding, and final checks.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Turnaround",
    text: "Many windscreen replacements can be arranged quickly once the right glass is available.",
    icon: Timer,
  },
];

const faqItems = [
  {
    question: "What is the average cost of windscreen replacement?",
    answer:
      "The cost depends on the vehicle, glass type, sensors, heating elements, damage, and fitting requirements. Photos and vehicle details help us provide a clearer quote.",
  },
  {
    question: "Can I legally drive with a cracked windscreen?",
    answer:
      "A crack can affect visibility and safety. If the damage is in the driver&apos;s view or likely to spread, arrange an inspection before driving further.",
  },
  {
    question: "What is classed as a chipped windscreen?",
    answer:
      "A chip is usually a small point of impact in the glass. Some chips can be repaired, but size, depth, and location decide whether replacement is safer.",
  },
  {
    question: "Do tiny chips in the windscreen need repairing?",
    answer:
      "Yes, small chips should be checked early. They can spread into longer cracks, especially with temperature changes and vibration.",
  },
  {
    question: "How long does it take to fit a windscreen?",
    answer:
      "Timing depends on the vehicle and glass type. The fitting itself can often be completed in a short workshop visit, followed by adhesive curing guidance.",
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
  return "/auto";
};

export default function WindscreenPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_102_car-windscreen-replacement-hero-banner-img.webp"
          alt="Car windscreen replacement tools on glass"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Windscreen replacement
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Expert Car Windscreen Replacement Services In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Replace cracked, chipped, leaking, or smashed windscreens with careful glass fitting, seal checks, and practical advice from TaylorMOT.
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
            <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Mechanic ready for windscreen replacement" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              One-Stop <span className="text-red-600">Windscreen Replacement</span> Support
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A damaged windscreen can affect visibility, comfort, and safety. We inspect chips, cracks, smashed glass, and seal problems before recommending repair or replacement.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT keeps the process simple: send your details, get clear advice, and let our technicians fit the correct glass with a clean finish.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
          Different Types Of Windscreen Glass
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Vehicle glass can vary by position, safety features, coatings, and manufacturer specification. We help identify the right option for your car.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {glassTypes.map((type) => (
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
                <Image src="/imgi_14_car-windscreen-replacement-content-img-1.webp" alt="Windscreen replacement work" fill className="object-cover" sizes="430px" />
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
            <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
              When Do You Need Windscreen Replacement?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Small chips can often be repaired, but larger cracks, damage near the edge, heavy impact marks, or poor visibility may require a replacement windscreen.
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
              <Image src="/imgi_14_car-windscreen-replacement-content-img-1.webp" alt="Professional windscreen glass fitting" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-md">
            <Image src="/imgi_78_image-26.webp" alt="Technician ready to inspect windscreen glass" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </div>
          <div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Common Windscreen Problems We Check
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Windscreen issues can look small at first, but the right repair decision depends on visibility, location, glass type, and whether the damage is spreading.
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
          How We Fit Replacement Windscreens
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Our technicians remove the old glass, clear debris, prepare the bonding area, install the new windscreen, secure the edges, and complete final checks before the vehicle leaves.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            { text: "Old windscreen removed with professional tools", icon: GlassWater },
            { text: "Surface cleaned and primed for secure bonding", icon: Sparkles },
            { text: "Correct glass installed and aligned carefully", icon: ShieldCheck },
            { text: "Seal, trim, and visibility checked before handover", icon: ClipboardCheck },
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
          What If You Do Not Replace A Broken Windscreen?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Delaying windscreen repair can make cracks spread, reduce visibility, and increase safety risk. A proper inspection helps you avoid unnecessary cost and choose the right fix.
        </p>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          How Much Does Windscreen Replacement Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Cost depends on your vehicle, glass specification, sensors, heating, tinting, damage level, and fitting requirements. Contact TaylorMOT with your registration for a practical estimate.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">Why TaylorMOT For Windscreen Replacement?</h2>
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
        <Image src="/imgi_135_car-repair-hero-section-bg.webp" alt="Workshop call to action background" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-14deg] bg-red-600 lg:block" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1800px] items-center px-5 py-14 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable glass fitting</p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
              Get Your Car Windscreen Replaced And Back On The Road
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
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Windscreen replacement quote request" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your glass damage</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Windscreen replacement details" placeholder="Tell us about chips, cracks, smashed glass, leaks, sensors, or replacement needs" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
