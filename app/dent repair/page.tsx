import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Gauge,
  Hammer,
  Phone,
  ShieldCheck,
} from "lucide-react";

const dentServices = [
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
    text: "Send your vehicle details and a photo of the damaged area.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We review the dent size, location, and likely repair method.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let Us Fix",
    text: "Our technicians repair the dent using the most suitable process.",
    image: "/imgi_14_car-dent-repair-service-by-london-motor-sports-get-cheap-car-dent-repair-service-in-london-e1720537807286.webp",
  },
  {
    title: "Relax And Enjoy",
    text: "We check the finish so your car looks clean and presentable again.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const warningSigns = [
  "The dent has cracked or damaged paint",
  "The panel has sharp creases or stretched metal",
  "A bumper or door dent affects alignment",
  "The dent is close to a body line or edge",
  "Rust is starting around the damaged area",
  "You want to protect the vehicle resale value",
];

const dentTypes = [
  {
    title: "Creased Dent",
    text: "A creased dent usually affects a longer section of the panel and may need careful reshaping before finishing.",
    image: "/imgi_4_dent-repair-pg-creased-dent.webp",
  },
  {
    title: "Round Dent",
    text: "Round dents are common after small impacts and are often more straightforward to repair when paint is intact.",
    image: "/imgi_5_dent-repair-pg-round-dent.webp",
  },
  {
    title: "Ding",
    text: "Small door dings and parking dents can usually be improved quickly when the panel has not been badly stretched.",
    image: "/imgi_6_dent-repair-pg-ding-dent.webp",
  },
];

const repairSteps = [
  "Dent size, location, and paint condition inspected first",
  "Panel access and body line damage checked before quoting",
  "Paintless dent removal considered when the finish is suitable",
  "Traditional repair used where filler, sanding, or paintwork is required",
  "Finished area checked for shape, texture, and panel appearance",
];

const whyCards = [
  {
    title: "Quick Estimates",
    text: "Send us the damage details and we will advise the likely dent repair route clearly.",
    icon: ClipboardCheck,
  },
  {
    title: "Assured Quality",
    text: "We focus on neat panel repair, practical finishing, and honest advice before work starts.",
    icon: ShieldCheck,
  },
  {
    title: "Open Saturdays",
    text: "Book dent checks and body repair work around a busy schedule with helpful workshop support.",
    icon: CalendarCheck,
  },
];

const faqItems = [
  {
    question: "What is a dent repair?",
    answer:
      "Dent repair restores damaged body panels after dings, creases, parking impacts, or minor collision marks. The method depends on the depth, location, and paint condition.",
  },
  {
    question: "How much does it cost to repair a car dent?",
    answer:
      "The cost depends on the dent size, panel location, paint condition, and whether paintless dent removal or traditional body repair is needed.",
  },
  {
    question: "How are car dents repaired?",
    answer:
      "Small dents may be repaired with paintless dent removal. Deeper or painted damage can need panel reshaping, filler, sanding, primer, and paintwork.",
  },
  {
    question: "Can dents come back?",
    answer:
      "A properly repaired dent should not return. Poor repairs, stretched metal, or unresolved panel stress can affect the final result.",
  },
  {
    question: "Can I drive with a dent in my car?",
    answer:
      "Usually yes, but dents should be checked if they affect lights, doors, bumpers, sharp edges, safety, paint damage, or rust protection.",
  },
  {
    question: "Are bumper dents repairable?",
    answer:
      "Many bumper dents can be repaired, especially if the plastic is not split and mounting points are not damaged.",
  },
  {
    question: "How do you know if a dent is repairable?",
    answer:
      "A technician checks depth, access, metal stretch, paint cracking, panel edges, and whether the dent sits on a body line.",
  },
  {
    question: "How did my car get a dent?",
    answer:
      "Common causes include parking knocks, door impacts, shopping trolleys, hail, road debris, and low-speed collisions.",
  },
];

const serviceHref = (service: string) => {
  if (service === "Car Dent Repair") return "/car-dent-repair";
  return "/auto";
};

export default function CarDentRepairPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[540px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_106_car-dent-repair-e1718978181141.webp"
          alt="Car dent repair using a puller tool"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[540px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">
            Car dent repair
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Same-Day Car Dent Repair For A Cleaner Finish
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Repair dings, creases, bumper dents, and minor body damage with practical inspection, clear pricing, and professional panel care from TaylorMOT.
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
            <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Technician ready for dent repair" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">
              Fix The Damage With Affordable <span className="text-red-600">Car Dent Repair</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Dents can happen through parking knocks, light impacts, road debris, or everyday accidents. Even a small dent can spoil the finish and expose paint damage if it is ignored.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT checks the dent properly and recommends the right repair method, from paintless dent removal to traditional body repair where paintwork is needed.
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
                <Image src="/imgi_14_car-dent-repair-service-by-london-motor-sports-get-cheap-car-dent-repair-service-in-london-e1720537807286.webp" alt="Car body repair technician" fill className="object-cover" sizes="430px" />
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
                {dentServices.map((service) => (
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
              <Image src="/imgi_14_car-dent-repair-service-by-london-motor-sports-get-cheap-car-dent-repair-service-in-london-e1720537807286.webp" alt="Dent on a rear car panel" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
            <h2 className="mt-8 text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
              Why Should I Consider Car Body Dent Removal?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Repairing dents early helps protect paint, preserve vehicle value, and prevent small body damage from becoming a larger repair later.
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
        <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-[32px]">
          What Are The Basic Types Of Car Dents?
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Different dent shapes need different repair techniques. Our technicians assess the panel before choosing the safest repair route.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {dentTypes.map((part) => (
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
          How Does TaylorMOT Offer Car Dent Repair Services?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          We inspect the damage, explain whether paintless repair is suitable, and use traditional repair methods where the paint or panel has been damaged.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {repairSteps.map((item) => (
            <div key={item} className="flex items-center gap-4 text-sm font-semibold sm:text-[15px]">
              <Hammer className="shrink-0 rounded-full bg-red-600 p-1 text-white" size={27} />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h3 className="text-xl font-black text-red-600 sm:text-2xl">Traditional Car Dent Removal</h3>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              For deeper dents, cracked paint, or stretched panels, traditional repair may include reshaping, filling, sanding, priming, and paint finishing.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-md">
            <Image src="/imgi_106_car-dent-repair-e1718978181141.webp" alt="Traditional dent repair process" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[32px]">
          How Much Does Car Dent Restoration Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Dent repair pricing depends on the size, depth, location, access, and paint condition. Minor dents usually cost less than larger body repairs that need paintwork.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[32px]">Why TaylorMOT For Car Dent Repair In London?</h2>
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
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Car dent repair quote" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
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
            <textarea aria-label="Service needed" placeholder="Tell us about the dent size, location, paint damage, and how it happened" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
