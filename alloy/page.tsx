import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Clock3,
  Phone,
  Settings,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

const serviceLinks = [
  { label: "Tyre Fitting & Replacement", href: "/w-fitting" },
  { label: "Wheel Alignment & Balancing", href: "/alling" },
  { label: "Alloy Wheel Refurbishment", href: "/alloy" },
  { label: "Tyre Puncture Repair", href: "/auto" },
  { label: "Wheel Bearing Replacement", href: "/auto" },
];

const valueCards = [
  {
    title: "Six Days A Week",
    text: "Book practical wheel care from Monday to Saturday with clear appointment support.",
    icon: CalendarCheck,
  },
  {
    title: "Workshop Finish",
    text: "Every rim is prepared, repaired, coated, and checked with a detail-led process.",
    icon: Wrench,
  },
  {
    title: "Fast Booking",
    text: "Send your vehicle details, choose a slot, and get a straightforward repair plan.",
    icon: Clock3,
  },
];

const reasons = [
  {
    title: "Kerb Scuffs",
    text: "Scrapes and chips can expose the rim surface. Refinishing removes the visible damage and restores a clean edge.",
  },
  {
    title: "Corrosion Marks",
    text: "Road salt, brake dust, and moisture can dull the finish. We strip and treat the wheel before applying fresh protection.",
  },
  {
    title: "Peeling Coating",
    text: "Old lacquer and paint can flake over time. A renewed coating gives the wheel a sharper, more consistent appearance.",
  },
  {
    title: "Bent Or Damaged Rims",
    text: "Impact damage can affect safety and tyre performance. Our team checks the rim shape before recommending repair.",
  },
  {
    title: "Everyday Wear",
    text: "Minor marks build up through daily use. Refurbishment refreshes the look and helps extend the life of your alloys.",
  },
];

const techniques = [
  {
    title: "Powder Coating",
    image: "/imgi_4_Powder-Coating.webp",
    text: "A durable finish for drivers who want strong coverage, rich colour, and long-lasting resistance to chips and fading.",
  },
  {
    title: "Diamond Cutting",
    image: "/imgi_5_Diamond-Cutting.webp",
    text: "A premium machine-cut finish that creates a crisp polished face, then seals the surface with protective lacquer.",
  },
  {
    title: "Wet Painting",
    image: "/imgi_57_Wet_Painting_tyre_png-491x491.webp",
    text: "A flexible refinishing option for custom colours, smooth coverage, and a refreshed factory-style look.",
  },
];

const processSteps = [
  {
    title: "Diagnosis & Quote",
    image: "/imgi_139_auto-repair-pg-car-diagnostics-1-1.webp",
    text: "We inspect the wheels and confirm a fixed repair route before work starts.",
  },
  {
    title: "Strip & Repair",
    image: "/imgi_72_image-26.webp",
    text: "Old finish, corrosion, and visible damage are removed before the rim is prepared.",
  },
  {
    title: "Refinish",
    image: "/imgi_14_Wheel-Refurbishment-inner-section.webp",
    text: "Your chosen coating is applied with careful preparation and controlled finishing.",
  },
  {
    title: "Cure & Refit",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
    text: "The wheel is cured, checked, balanced where needed, and refitted for collection.",
  },
];

const advantages = [
  {
    title: "Saves Money & Time",
    text: "Refurbishing is usually more affordable than replacing a complete alloy wheel set.",
  },
  {
    title: "Trained Mechanics",
    text: "Your wheels are handled by technicians who understand finishes, tyres, and fitment.",
  },
  {
    title: "Customer Care",
    text: "We explain what can be repaired, what finish suits the wheel, and when it will be ready.",
  },
  {
    title: "Agreed Prices",
    text: "Clear pricing is confirmed before work begins, with no surprise workshop extras.",
  },
];

const comparisonRows = [
  {
    feature: "Specialist Equipment",
    approach: "We use professional preparation, repair, and refinishing equipment for consistent results.",
  },
  {
    feature: "Detail Control",
    approach: "Each wheel is inspected through cleaning, repair, coating, curing, and final checks.",
  },
  {
    feature: "Proven Finish Quality",
    approach: "Our process is designed to restore both appearance and everyday wheel durability.",
  },
  {
    feature: "Quality Materials",
    approach: "We choose coatings and lacquers that support long wear and a polished final look.",
  },
];

const galleryImages = [
  "/imgi_22_Wheel-Refurbishment-Gallery-1.webp",
  "/imgi_23_Wheel-Refurbishment-Gallery-2.webp",
  "/imgi_24_Wheel-Refurbishment-Gallery-3.webp",
  "/imgi_25_Wheel-Refurbishment-Gallery-4.webp",
  "/imgi_26_Wheel-Refurbishment-Gallery-5.webp",
  "/imgi_96_Wheel-Refurbishment-Gallery-1-491x491.webp",
];

const faqItems = [
  {
    question: "How long does alloy wheel refurbishment take?",
    answer:
      "Minor cosmetic repairs can often be completed quickly, while full strip, repair, coating, and curing work may take one to three working days depending on damage and finish choice.",
  },
  {
    question: "Can badly kerbed wheels be repaired?",
    answer:
      "Most kerb scuffs, chips, and light rim damage can be repaired. If a wheel is structurally unsafe, we will explain the safest option before any work begins.",
  },
  {
    question: "Which finish should I choose?",
    answer:
      "Powder coating is durable, diamond cutting gives a premium polished face, and wet painting works well for colour matching or custom finishes.",
  },
  {
    question: "Do you remove tyres during the process?",
    answer:
      "For many refurbishment jobs the tyres, valves, and weights are removed so the wheel can be prepared and finished properly.",
  },
];

const readAlso = [
  {
    title: "How Much Does Head Gasket Repair Cost in 2025?",
    image: "/imgi_30_How-Much-Does-a-Head-Gasket-Repair-Cost-banner-scaled.webp",
    date: "August 7, 2025",
    text: "Understand the common cost factors, repair stages, and warning signs before booking engine work.",
  },
  {
    title: "Auxiliary Belt Cost: Complete Guide",
    image: "/imgi_119_auxiliary-belt-cost-uk-870x455.webp",
    date: "August 6, 2025",
    text: "A practical guide to auxiliary belt pricing, symptoms, and when replacement makes sense.",
  },
  {
    title: "Gearbox Replacement Cost Explained",
    image: "/imgi_32_gearbox-replacement-cost-1.webp",
    date: "November 30, 2024",
    text: "Compare manual and automatic gearbox costs, repair choices, and inspection advice.",
  },
];

function RedTitle({ children }: { children: React.ReactNode }) {
  return <span className="text-red-600">{children}</span>;
}

export default function AlloyPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[700px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_86_main-banner1.webp"
          alt="Close up alloy wheel refurbishment service"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />
        <div className="relative mx-auto flex min-h-[700px] max-w-[1800px] flex-col justify-center px-5 py-24 lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">Alloy wheel specialists in West London</p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Restore Your Alloy Wheels With A Cleaner, Stronger Finish
          </h1>
          <p className="mt-7 max-w-3xl text-base font-semibold leading-8 text-white/90 sm:text-lg">
            TaylorMOT repairs kerb damage, tired coatings, corrosion, and everyday wear with a professional refurbishment process built for sharp looks and reliable road use.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="tel:+441784240000" className="inline-flex min-w-56 items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-black uppercase text-black transition hover:bg-neutral-200">
              <Phone size={18} />
              Call Now
            </Link>
            <Link href="/appointment" className="inline-flex min-w-56 items-center justify-center gap-2 rounded-md bg-red-600 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-red-700">
              Book Now
              <CalendarCheck size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] gap-8 md:grid-cols-3">
          {valueCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-md border border-neutral-300 px-8 py-12 text-center">
                <Icon className="mx-auto text-red-600" size={76} strokeWidth={1.8} />
                <h2 className="mt-7 text-2xl font-black text-red-600">{card.title}</h2>
                <p className="mx-auto mt-5 max-w-md text-base font-medium leading-8 text-neutral-800">{card.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] items-center gap-14 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="relative min-h-[500px]">
            <Image src="/imgi_13_18532-1.webp" alt="TaylorMOT alloy wheel technician" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 100vw, 38vw" />
          </div>
          <div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Why Replace When You Can <RedTitle>Refurbish Your Alloys?</RedTitle>
            </h2>
            <p className="mt-7 text-base font-medium leading-8 text-neutral-800">
              Alloy wheel refurbishment restores the look, finish, and usable condition of wheels affected by kerb scuffs, corrosion, peeling lacquer, and general wear.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-800">
              Our process includes deep cleaning, damage repair, surface preparation, refinishing, and final checks so your wheels leave the workshop looking precise and road-ready.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-800">
              If your alloys still suit the car, refurbishment is a smart way to bring back the style without paying for a full replacement set.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-14 lg:grid-cols-[490px_1fr]">
          <aside className="space-y-8">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-80">
                <Image src="/imgi_16_951ac5b75bbb40a68f4a794f285c2a32_ful-1.webp" alt="Specialist wheel refurbishment support" fill className="object-cover" sizes="490px" />
              </div>
              <div className="px-8 pb-10 text-center">
                <h3 className="text-2xl font-black">Specialists In Wheel Refurbishment</h3>
                <div className="relative mt-8 rounded-md bg-white px-8 py-8 text-left text-neutral-950">
                  <span className="absolute -left-12 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white">
                    <Phone size={32} />
                  </span>
                  <p className="text-xl font-black text-red-600">Call Now & Get A Free Quote</p>
                  <p className="mt-6 text-3xl font-black">+44 1784 240000</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 p-8">
              <h3 className="text-3xl font-black text-red-600">All Wheel & Tyre Services</h3>
              <div className="mt-8 space-y-5">
                {serviceLinks.map((service) => (
                  <Link key={service.label} href={service.href} className="flex items-center gap-5 rounded-md bg-white px-5 py-4 text-lg font-semibold transition hover:text-red-600">
                    <CircleDot className="shrink-0 text-red-600" size={24} strokeWidth={5} />
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="relative min-h-[480px] overflow-hidden rounded-md">
              <Image src="/imgi_15_wheel-refurbishment-content-table-img-scaled.webp" alt="Mechanic working on alloy wheel" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
            </div>
            <ul className="mt-10 space-y-8">
              <li className="flex gap-5">
                <Settings className="mt-1 shrink-0 text-red-600" size={24} strokeWidth={3} />
                <div>
                  <h3 className="text-2xl font-black">Enhances Appearance</h3>
                  <p className="mt-3 text-base font-medium leading-8 text-neutral-800">
                    Refresh dull, marked, or damaged wheels with a finish that immediately lifts your vehicle&apos;s stance.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <Settings className="mt-1 shrink-0 text-red-600" size={24} strokeWidth={3} />
                <div>
                  <h3 className="text-2xl font-black">Supports Resale Value</h3>
                  <p className="mt-3 text-base font-medium leading-8 text-neutral-800">
                    Clean, well-finished alloys help your car present better to buyers and show careful ownership.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <Settings className="mt-1 shrink-0 text-red-600" size={24} strokeWidth={3} />
                <div>
                  <h3 className="text-2xl font-black">Cost-Effective</h3>
                  <p className="mt-3 text-base font-medium leading-8 text-neutral-800">
                    Repairing and refinishing existing wheels is often much more economical than replacing them.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Why Do You <RedTitle>Need Alloy Wheel Refurbishment?</RedTitle>
          </h2>
          <p className="mt-7 max-w-6xl text-base font-medium leading-8 text-neutral-800">
            Alloy wheels face constant exposure to impact, weather, brake dust, and road grime. Refurbishment brings the finish back under control and helps prevent small visual problems becoming bigger repair concerns.
          </p>
          <ul className="mt-12 space-y-10">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="flex gap-5">
                <Settings className="mt-1 shrink-0 text-red-600" size={24} strokeWidth={3} />
                <div>
                  <h3 className="text-2xl font-black">
                    {index + 1}: {reason.title}
                  </h3>
                  <p className="mt-3 text-base font-medium leading-8 text-neutral-800">{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">Alloy Rim Refurbishment Techniques</h2>
        <p className="mx-auto mt-5 max-w-4xl text-base font-medium leading-8 text-neutral-800">
          Choose a finish that suits your car, driving habits, and preferred look.
        </p>
        <div className="mx-auto mt-14 grid max-w-[1800px] gap-0 md:grid-cols-3">
          {techniques.map((technique, index) => (
            <article key={technique.title} className={index === 1 ? "bg-neutral-50" : "bg-red-600 text-white"}>
              <div className="relative h-[360px]">
                <h3 className="relative z-10 pt-10 text-3xl font-black">{technique.title}</h3>
                <Image src={technique.image} alt={technique.title} fill className="object-contain px-12 pt-24" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <p className="px-10 pb-12 text-base font-medium leading-8">{technique.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">
          Leading Alloy Refurbishment Across West London <RedTitle>Since 2018</RedTitle>
        </h2>
        <p className="mx-auto mt-7 max-w-5xl text-base font-medium leading-8 text-neutral-800">
          TaylorMOT combines practical workshop experience with clear advice, fair pricing, and a process designed around long-lasting results.
        </p>
        <div className="mx-auto mt-14 grid max-w-[1700px] items-center gap-10 lg:grid-cols-[1fr_0.85fr_1fr]">
          <div className="space-y-12 text-left">
            {advantages.slice(0, 2).map((item, index) => (
              <div key={item.title} className="flex items-start gap-7">
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-2xl font-black">{index + 1}.</span>
                <div>
                  <h3 className="text-2xl font-black text-neutral-800">{item.title}</h3>
                  <p className="mt-4 text-base font-medium leading-7 text-neutral-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative mx-auto h-80 w-full max-w-md">
            <Image src="/imgi_14_wheel-balancing-wheel-alignment-content-img-scaled.webp" alt="Alloy wheel rim set" fill className="object-contain" sizes="430px" />
          </div>
          <div className="space-y-12 text-left">
            {advantages.slice(2).map((item, index) => (
              <div key={item.title} className="flex items-start gap-7">
                <div>
                  <h3 className="text-2xl font-black text-neutral-800">{item.title}</h3>
                  <p className="mt-4 text-base font-medium leading-7 text-neutral-700">{item.text}</p>
                </div>
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-2xl font-black">{index + 3}.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">Why TaylorMOT For Alloy Wheel Refurbishment?</h2>
        <div className="mx-auto mt-14 grid max-w-[1700px] gap-8 md:grid-cols-3">
          {valueCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={`why-${card.title}`} className="rounded-md border border-neutral-300 px-8 py-12">
                <Icon className="mx-auto text-red-600" size={76} strokeWidth={1.8} />
                <h3 className="mt-8 text-2xl font-black text-red-600">{card.title}</h3>
                <p className="mx-auto mt-5 max-w-sm text-base font-medium leading-7">{card.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1500px] text-center">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Your Search For <RedTitle>Alloy Wheel Restoration Near Me</RedTitle> Ends Here
          </h2>
          <p className="mx-auto mt-6 max-w-5xl text-base font-medium leading-8 text-neutral-800">
            Compare the TaylorMOT approach at a glance. We keep the process clear, polished, and customer-focused from first quote to final handover.
          </p>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="border border-neutral-700 bg-red-600 px-8 py-7 text-2xl font-black text-white">Wheel Refurbishment</th>
                  <th className="border border-neutral-700 px-8 py-7 text-2xl font-black">How Our Technicians Approach It</th>
                  <th className="border border-neutral-700 px-8 py-7 text-2xl font-black">Customer Ratings</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="border border-neutral-700 bg-red-600 px-8 py-8 text-xl font-black text-white">{row.feature}</td>
                    <td className="border border-neutral-700 px-8 py-8 text-lg font-medium leading-7">{row.approach}</td>
                    <td className="border border-neutral-700 px-8 py-8">
                      <div className="flex gap-1 text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={32} fill="currentColor" strokeWidth={0} />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">How Do We Work?</h2>
        <div className="mx-auto mt-16 grid max-w-[1800px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.title} className="text-center">
              <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full">
                <Image src={step.image} alt={step.title} fill className="object-cover" sizes="224px" />
              </div>
              <h3 className="mt-7 text-3xl font-black text-red-600">{step.title}</h3>
              <p className="mx-auto mt-4 max-w-xs text-base font-medium leading-7">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[560px]">
          <Image src="/imgi_13_car-repair-pg-section-img-left-1.webp" alt="Get a free alloy wheel assessment" fill className="object-cover object-left" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-10 text-center lg:px-16">
            <h2 className="text-4xl font-black">GET A FREE ASSESSMENT</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-16 rounded-md border border-neutral-900 px-6 text-base font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Service needed" placeholder="Tell us about the wheel damage or finish you want" className="mt-8 h-56 w-full rounded-md border border-neutral-900 px-6 py-6 text-base font-bold outline-none focus:border-red-600" />
            <button className="mt-8 block rounded-md bg-red-600 px-16 py-4 text-base font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-8 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative h-80 overflow-hidden rounded-md">
              <Image src={image} alt={`Alloy wheel refurbishment gallery ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <h2 className="text-center text-4xl font-black">Frequently Asked Questions</h2>
        <div className="mx-auto mt-12 max-w-[1500px] space-y-5">
          {faqItems.map((item, index) => (
            <details key={item.question} className="group border border-neutral-400" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-8 py-6 text-lg font-black text-neutral-800 group-open:text-red-600">
                {item.question}
                <ChevronDown className="shrink-0 text-red-600 transition group-open:rotate-180" size={26} />
              </summary>
              <p className="border-t border-neutral-300 px-8 py-6 text-base font-medium leading-8 text-neutral-800">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-10 flex items-center gap-5">
            <h2 className="text-3xl font-black uppercase">Read Also</h2>
            <span className="h-1 w-20 bg-red-600" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {readAlso.map((post) => (
              <article key={post.title} className="bg-neutral-50">
                <div className="relative h-72">
                  <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black leading-tight text-neutral-800">{post.title}</h3>
                  <p className="mt-5 text-base font-medium leading-8">{post.text}</p>
                  <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
                    <p className="text-sm font-medium">{post.date}</p>
                    <Link href="/blogs" className="rounded-md bg-red-600 px-8 py-3 text-sm font-black text-white transition hover:bg-red-700">
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-5 py-20 text-white lg:px-10">
        <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Alloy wheel repair call to action" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="relative mx-auto flex max-w-[1700px] flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-red-500">Reliability with excellence</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">
              Experience Quality Alloy Wheel Repairs With TaylorMOT
            </h2>
          </div>
          <Link href="/appointment" className="inline-flex shrink-0 items-center gap-3 rounded-md bg-red-600 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-red-700">
            Book Appointment
            <Sparkles size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-red-600 px-5 py-12 text-white lg:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-center gap-10 text-center md:flex-row md:justify-around">
          <Link href="tel:+441784240000" className="inline-flex items-center gap-4 text-3xl font-black">
            <Phone size={42} />
            Call Us
          </Link>
          <Link href="/appointment" className="inline-flex items-center gap-4 text-3xl font-black">
            <CheckCircle2 size={42} />
            Book Online
          </Link>
        </div>
      </section>

      <Link
        href="https://wa.me/441784240000"
        className="fixed bottom-8 right-8 z-40 flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-semibold text-neutral-700 shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <span>Whatsapp</span>
        <span className="grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-[18px_16px_0_rgba(0,0,0,0.95)]">
          <Phone size={28} />
        </span>
      </Link>
    </main>
  );
}
