import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Gauge,
  Paintbrush,
  Phone,
  ShieldCheck,
  Timer,
} from "lucide-react";

const bodyServices = [
  "Car Scratch Repair",
  "Bumper Repair",
  "Panel Beating",
  "Car Dent Repair",
  "Windscreen Replacement",
  "Wing Mirror Replacement",
  "Car Window Tint",
  "Accidental Car Repair",
];

const processSteps = [
  {
    title: "Fill A Form",
    text: "Share your car details and photos of the scratch or scuff.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We assess the scratch depth and confirm the likely repair method.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let Us Fix",
    text: "Our technicians polish, touch up, or repaint the affected area.",
    image: "/imgi_14_car-scratch-repair-service-content-image-1.webp",
  },
  {
    title: "Relax And Enjoy",
    text: "We check the finish so your vehicle looks clean again.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const scratchTypes = [
  {
    title: "Clear Coat Scratch",
    text: "Light scratches usually affect only the clear coat and can often be removed with careful polishing and compounding.",
    image: "/imgi_4_scar-scratch-repair-pg-clear-coat-scratch.webp",
  },
  {
    title: "Paint Scratch",
    text: "Paint scratches need colour matching, touch-up work, blending, and a neat finish around the damaged area.",
    image: "/imgi_5_car-scratch-repair-img-paint-clear-scratch.webp",
  },
  {
    title: "Deep Paint Scratch",
    text: "Deep scratches can reach primer or metal, so sanding, priming, and repainting may be needed for a durable repair.",
    image: "/imgi_6_car-scratch-repair-pg-deep-paint-scratch.webp",
  },
];

const warningSigns = [
  "The scratch has gone through the clear coat",
  "Paint colour is missing or chipped away",
  "Primer or bare metal is visible",
  "The damaged area feels rough to the touch",
  "Rust is starting near the scratch",
  "The scuff is spread across a bumper or panel",
];

const repairMethods = [
  "Scratch depth and paint condition inspected first",
  "Clear-coat scratches polished where suitable",
  "Paint scratches colour-matched and blended carefully",
  "Deep scratches sanded, primed, and painted where needed",
  "Final finish checked for shine, colour, and surface quality",
];

const whyCards = [
  {
    title: "Assured Quality",
    text: "We choose the right repair route for the scratch depth and panel condition.",
    icon: ShieldCheck,
  },
  {
    title: "Convenient",
    text: "Send photos first and get practical advice before booking workshop time.",
    icon: CalendarCheck,
  },
  {
    title: "Save Time",
    text: "Minor scratches and scuffs can often be repaired quickly after inspection.",
    icon: Timer,
  },
];

const faqItems = [
  {
    question: "How quickly can TaylorMOT repair car scratches?",
    answer:
      "Minor clear-coat scratches may be repaired quickly with polishing. Deeper scratches or paint repairs can take longer because they need preparation, colour matching, and finishing.",
  },
  {
    question: "What types of car scratches can TaylorMOT repair?",
    answer:
      "We repair clear-coat scratches, paint scratches, bumper scuffs, and deeper scratches that may need sanding, primer, and paintwork.",
  },
  {
    question: "What should I do if my car gets scratched in a collision?",
    answer:
      "Take clear photos, avoid rubbing the damaged area, and book an inspection so the scratch depth and panel condition can be checked properly.",
  },
  {
    question: "What is the cost range for car scratch repair in London?",
    answer:
      "The cost depends on scratch depth, size, location, colour, and whether polishing, touch-up paint, or panel repainting is needed.",
  },
  {
    question: "How does TaylorMOT handle minor car scratches and scuffs?",
    answer:
      "If the damage is light, we may polish and compound the clear coat. If paint is missing, we advise the right touch-up or paint repair option.",
  },
  {
    question: "What methods does TaylorMOT use for deep car scratches?",
    answer:
      "Deep scratches may need sanding, priming, colour matching, paint application, and finishing to protect the panel and restore appearance.",
  },
  {
    question: "Why should I choose TaylorMOT for car scratch repair services?",
    answer:
      "You get clear assessment, practical repair advice, fair pricing, and careful finishing from a local workshop team.",
  },
  {
    question: "How does the TaylorMOT car scratch repair process work?",
    answer:
      "We inspect the damage, identify the scratch type, confirm the repair method, complete the work, and check the finish before handover.",
  },
  {
    question: "Can TaylorMOT provide an instant estimate for car scratch repair?",
    answer:
      "We can often provide an early estimate from photos, but the final quote depends on inspection of depth, paint condition, and panel access.",
  },
  {
    question: "What factors affect the cost of car scratch repair?",
    answer:
      "Scratch depth, paint colour, panel location, number of scratches, required materials, and labour time all affect the repair cost.",
  },
];

const serviceHref = (service: string) => {
  if (service === "Car Scratch Repair") return "/car-scratch-repair";
  if (service === "Car Dent Repair") return "/car-dent-repair";
  return "/auto";
};

export default function CarScratchRepairPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[540px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_106_car-scratch-repair-hero-banner-img-e1718973309354.webp"
          alt="Car scratch repair polishing a red vehicle"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[540px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Car scratch repair
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            High-Quality Car Scratch Repair Services In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Restore your paintwork with clear-coat polishing, scuff removal, colour-matched touch-up, and deep scratch repair from TaylorMOT.
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
            <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Technician ready for scratch repair" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Guaranteed Car Scratch Repair And <span className="text-red-600">Scratch Removal</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Scratches and scuffs can happen through parking knocks, road debris, brushes against walls, or small collisions. Even light marks can reduce the clean finish of your car.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks the scratch depth and recommends the right repair, from machine polishing to professional paint repair for deeper damage.
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
                <Image src="/imgi_14_car-scratch-repair-service-content-image-1.webp" alt="Scratch repair close up" fill className="object-cover" sizes="430px" />
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
              <Image src="/imgi_14_car-scratch-repair-service-content-image-1.webp" alt="Blue bumper scratch close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
              TaylorMOT Takes Out Scratches With Paint Repair Specialists
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Whether the mark is a light scuff, a clear-coat scratch, or deeper paint damage, our team inspects the area and repairs it with the most suitable process.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {warningSigns.map((sign) => (
                <div key={sign} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={21} />
                  {sign}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
          What Are The Most Common Types Of Car Scratches?
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          The repair method depends on how deep the scratch has gone through the paint layers.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {scratchTypes.map((part) => (
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
          How Does TaylorMOT Fix Car Scuff And Paint Repairs?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Light marks can often be polished. Paint scratches need colour matching and blending. Deep damage may need sanding, primer, and paintwork for a lasting repair.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {repairMethods.map((item) => (
            <div key={item} className="flex items-center gap-4 text-sm font-semibold sm:text-[15px]">
              <Paintbrush className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-black text-red-600 sm:text-2xl">The Right Repair Method Depends On Scratch Depth</h3>
          <div className="mt-6 grid gap-5">
            {[
              "Clear-coat scratches: careful machine polishing can remove many light marks.",
              "Paint scratches: colour-matched touch-up or local paint repair may be required.",
              "Deep scratches: sanding, priming, and repainting may be needed if primer or metal is exposed.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 text-sm font-semibold leading-6 sm:text-[15px]">
                <CheckCircle2 className="mt-0.5 shrink-0 text-red-600" size={22} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          How Much Does Car Scratch Repair Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Pricing depends on scratch type, depth, colour, panel location, and the number of marks. Send photos or visit the workshop so we can give a clear estimate.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">Why TaylorMOT For Car Scratch Repairs?</h2>
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
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Car scratch repair quote" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
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
            <textarea aria-label="Service needed" placeholder="Tell us about scratch depth, colour, panel location, and how the damage happened" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
