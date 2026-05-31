import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  ClipboardCheck,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const serviceLinks = [
  { label: "Tyre Fitting & Replacement", href: "/w-fitting" },
  { label: "Wheel Alignment & Balancing", href: "/alling" },
  { label: "Alloy Wheel Refurbishment", href: "/alloy" },
  { label: "Tyre Puncture Repair", href: "/puncher" },
  { label: "Wheel Bearing Replacement", href: "/auto" },
];

const repairOptions = [
  {
    title: "On-Site Puncture Repair",
    text: "A workshop-quality repair for eligible tread punctures, completed with the right plug, patch, valve check, and pressure test.",
    image: "/imgi_14_Tyre-Punture-inner-section.webp",
  },
  {
    title: "Tyre Change Support",
    text: "If the damage is too close to the sidewall or the casing is unsafe, we help you choose a suitable replacement tyre.",
    image: "/imgi_173_Tyre-Fitting.webp",
  },
  {
    title: "Mobile Tyre Advice",
    text: "Stranded nearby? Tell us the tyre size, location, and symptoms so our team can guide you to the quickest safe solution.",
    image: "/imgi_156_car-tyre-punture-repair-hero-banner-e1720451003638.webp",
  },
];

const repairReasons = [
  {
    title: "Fast Turnaround",
    text: "Most straightforward tread repairs can be assessed and handled quickly once the wheel is inspected.",
  },
  {
    title: "Safety First",
    text: "We check the puncture position, tyre condition, pressure loss, and visible sidewall damage before recommending repair.",
  },
  {
    title: "Clear Pricing",
    text: "You get a clear repair or replacement route before work starts, with no guesswork around tyre safety.",
  },
];

const damageRules = [
  {
    title: "Usually Repairable",
    text: "Small punctures in the central tread area are often repairable when the tyre has not been driven flat or damaged internally.",
  },
  {
    title: "Not Safe To Repair",
    text: "Sidewall damage, shoulder punctures, exposed cords, splits, bulges, and large holes normally require tyre replacement.",
  },
  {
    title: "Needs Inspection",
    text: "Run-flat tyres, slow leaks, valve issues, and bead leaks need a careful check before a safe repair decision can be made.",
  },
];

const bookingSteps = [
  {
    title: "Share The Issue",
    text: "Tell us your tyre size, vehicle registration, location, and whether you can still drive safely.",
    image: "/imgi_139_auto-repair-pg-car-diagnostics-1-1.webp",
  },
  {
    title: "Get Clear Advice",
    text: "We confirm whether a repair inspection, tyre change, or appointment is the best next step.",
    image: "/imgi_13_car-repair-pg-section-img-left-1.webp",
  },
  {
    title: "Let Us Repair",
    text: "Our technician removes the cause, checks the casing, repairs when safe, then pressure tests the tyre.",
    image: "/imgi_14_tyre-repair-inner.webp",
  },
  {
    title: "Drive With Confidence",
    text: "You leave with the tyre checked, inflated, and ready for sensible everyday driving.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const qualityCards = [
  {
    title: "Six Days A Week",
    text: "Monday to Saturday availability for urgent tyre repair appointments.",
    icon: CalendarCheck,
  },
  {
    title: "Practical Diagnosis",
    text: "We find whether the leak is from a nail, valve, bead, rim, or tyre casing.",
    icon: ClipboardCheck,
  },
  {
    title: "Road-Safe Repairs",
    text: "Every repair decision is based on tyre condition, damage location, and driver safety.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "Can TaylorMOT fix tyre punctures?",
    answer:
      "Yes. TaylorMOT can inspect punctured tyres and repair suitable tread punctures. If the tyre is unsafe to repair, we will explain the replacement option clearly.",
  },
  {
    question: "How do I know if my puncture can be repaired?",
    answer:
      "Small punctures in the central tread area are often repairable. Sidewall damage, shoulder damage, large holes, exposed cords, and tyres driven flat are usually not safe to repair.",
  },
  {
    question: "Is it safe to drive on a punctured tyre?",
    answer:
      "It is best not to drive on a punctured tyre. Driving while flat can damage the tyre casing, wheel rim, and suspension, turning a simple repair into a replacement.",
  },
  {
    question: "Can you repair a slow puncture?",
    answer:
      "Yes, many slow punctures can be fixed after inspection. Slow leaks can come from nails, valves, bead seals, corrosion, or tiny tread damage.",
  },
  {
    question: "Do I need a new tyre after every puncture?",
    answer:
      "No. Many tread punctures are repairable, but the tyre must be inspected first to confirm the position, size, and internal condition.",
  },
  {
    question: "Can run-flat tyres be repaired?",
    answer:
      "Run-flat repair depends on the tyre manufacturer guidance, the damage position, and whether the tyre was driven after pressure loss. We inspect before advising.",
  },
];

const galleryImages = [
  "/imgi_74_Tyre-Punture-gallery-1-300x200.webp",
  "/imgi_22_Tyre-Punture-gallery-2.webp",
  "/imgi_23_Tyre-Punture-gallery-3.webp",
  "/imgi_25_Tyre-Punture-gallery-5.webp",
  "/imgi_26_Tyre-Punture-gallery-6.webp",
  "/imgi_100_tyre-gallery-3-300x200.webp",
];

function RedBullet({ title, text }: { title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <CircleDot className="mt-1 shrink-0 text-red-600" size={24} strokeWidth={5} />
      <div>
        <h3 className="text-xl font-black">{title}</h3>
        <p className="mt-3 text-base font-medium leading-8 text-neutral-800">{text}</p>
      </div>
    </li>
  );
}

export default function TyrePunctureRepairPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[680px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_156_car-tyre-punture-repair-hero-banner-e1720451003638.webp"
          alt="Tyre puncture repair service"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1800px] flex-col justify-center px-5 py-20 lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-400">Tyre puncture repair in West London</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Fast, Professional Tyre Puncture Repair For London Drivers
          </h1>
          <p className="mt-7 max-w-3xl text-base font-semibold leading-8 text-white/90">
            A flat tyre should not derail your day. TaylorMOT inspects punctures, confirms whether the tyre is safe to repair, and gets you moving with clear, practical support.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="tel:+441784240000" className="inline-flex min-w-56 items-center justify-center gap-2 rounded-md border-2 border-white bg-white px-8 py-4 text-sm font-black uppercase text-black transition hover:bg-transparent hover:text-white">
              <Phone size={18} />
              Call Now
            </Link>
            <Link href="/appointment" className="inline-flex min-w-56 items-center justify-center gap-2 rounded-md bg-red-600 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-red-700">
              Book Repair
              <CalendarCheck size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative min-h-[430px]">
            <Image src="/imgi_14_Tyre-Punture-inner-section.webp" alt="Technician inspecting a punctured tyre" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 38vw" />
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Flat Tyre In London? <span className="text-red-600">Do Not Wait For It To Get Worse</span>
            </h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
              Nails, screws, glass, potholes, valve leaks, and rim seal problems can all cause pressure loss. Our team checks the tyre properly before deciding whether repair or replacement is the responsible option.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-800">
              If the puncture is repairable, we use a professional process designed to protect tyre integrity and road safety. If it is not repairable, you will get honest guidance before spending money.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">Tyre Puncture Services Built Around Real Driving Problems</h2>
          <p className="mx-auto mt-6 max-w-5xl text-base font-medium leading-8 text-neutral-800">
            Whether your tyre is losing air slowly or went flat suddenly, we help identify the safest and most economical route.
          </p>
          <div className="mt-14 grid gap-0 md:grid-cols-3">
            {repairOptions.map((card, index) => (
              <article key={card.title} className={index === 1 ? "bg-neutral-50" : "bg-red-600 text-white"}>
                <div className="relative h-96">
                  <h3 className="relative z-10 px-6 pt-10 text-3xl font-black">{card.title}</h3>
                  <Image src={card.image} alt={card.title} fill className="object-contain px-12 pt-24" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <p className="px-10 pb-12 text-base font-medium leading-8 text-current">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-14 lg:grid-cols-[490px_1fr]">
          <aside className="space-y-8">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-80">
                <Image src="/imgi_13_car-repair-pg-section-img-left-1.webp" alt="TaylorMOT tyre technician" fill className="object-cover" sizes="490px" />
              </div>
              <div className="px-8 pb-10 text-center">
                <h3 className="text-2xl font-black">Need A Tyre Checked Today?</h3>
                <div className="relative mt-8 rounded-md bg-white px-8 py-8 text-left text-neutral-950">
                  <span className="absolute -left-12 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
                    <Phone size={32} />
                  </span>
                  <p className="text-xl font-black text-red-600">Call Now & Get Advice</p>
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

          <div className="space-y-16">
            <section>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                What Happens During A <span className="text-red-600">Professional Puncture Repair?</span>
              </h2>
              <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
                A good puncture repair starts with inspection. We remove the object where appropriate, check whether the tyre has been driven underinflated, inspect the internal casing, and confirm the puncture sits in a repairable area.
              </p>
              <ul className="mt-10 space-y-8">
                {repairReasons.map((item) => (
                  <RedBullet key={item.title} {...item} />
                ))}
              </ul>
            </section>
            <div className="relative min-h-[430px] overflow-hidden rounded-md">
              <Image src="/imgi_22_Tyre-Punture-gallery-2.webp" alt="Tyre puncture repair close up" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">Repairable Tyre Damage And When Replacement Is Safer</h2>
          <p className="mt-6 max-w-6xl text-base font-medium leading-8 text-neutral-800">
            Not every puncture should be fixed. A professional repair must protect the driver, passengers, and other road users, so the tyre condition matters as much as the hole itself.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {damageRules.map((item) => (
              <article key={item.title} className="rounded-md border border-neutral-300 px-8 py-10">
                <ShieldCheck className="text-red-600" size={48} strokeWidth={2} />
                <h3 className="mt-7 text-2xl font-black">{item.title}</h3>
                <p className="mt-5 text-base font-medium leading-8 text-neutral-800">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">
          How To Book A <span className="text-red-600">Same-Day Tyre Puncture Check</span>
        </h2>
        <div className="mx-auto mt-16 grid max-w-[1800px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((step) => (
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

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">Why Choose TaylorMOT For Tyre Puncture Repair?</h2>
        <p className="mx-auto mt-6 max-w-4xl text-base font-medium leading-8 text-neutral-800">
          Our technicians combine practical tyre knowledge with a safety-led repair process for everyday London driving.
        </p>
        <div className="mx-auto mt-14 grid max-w-[1800px] gap-8 md:grid-cols-3">
          {qualityCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-md border border-neutral-300 px-8 py-12">
                <Icon className="mx-auto text-red-600" size={72} strokeWidth={1.8} />
                <h3 className="mt-8 text-2xl font-black text-red-600">{card.title}</h3>
                <p className="mx-auto mt-5 max-w-sm text-base font-medium leading-7">{card.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[560px]">
          <Image src="/imgi_13_car-repair-pg-section-img-left-1.webp" alt="Get a tyre puncture repair quote" fill className="object-cover object-left" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-10 text-center lg:px-16">
            <h2 className="text-4xl font-black">GET A QUOTE</h2>
            <p className="mt-2 text-xl font-black uppercase">Tell us about the puncture</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-16 rounded-md border border-neutral-900 px-6 text-base font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Service needed" placeholder="Tell us the tyre size, pressure issue, and what caused the puncture if known" className="mt-8 h-56 w-full rounded-md border border-neutral-900 px-6 py-6 text-base font-bold outline-none focus:border-red-600" />
            <button className="mt-8 block rounded-md bg-red-600 px-16 py-4 text-base font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-8 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative h-80 overflow-hidden rounded-md">
              <Image src={image} alt={`Tyre puncture repair gallery ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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

      <section className="relative overflow-hidden bg-black px-5 py-20 text-white lg:px-10">
        <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Tyre puncture repair call to action" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-400">Trusted & competent</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Need An Urgent Puncture Repair? We Are Here.</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="tel:+441784240000" className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-8 py-4 text-sm font-black uppercase text-black transition hover:bg-neutral-200">
              <Phone size={18} />
              Call Us
            </Link>
            <Link href="/appointment" className="inline-flex items-center justify-center gap-3 rounded-md bg-red-600 px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-red-700">
              <CheckCircle2 size={18} />
              Book Online
            </Link>
          </div>
        </div>
      </section>

      <Link href="https://wa.me/441784240000" className="fixed bottom-8 right-8 z-40 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl">
        <MapPin size={34} />
        <span className="sr-only">Whatsapp</span>
      </Link>
    </main>
  );
}
