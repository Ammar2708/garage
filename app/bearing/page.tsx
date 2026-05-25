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
  { label: "Wheel Bearing Replacement", href: "/bearing" },
];

const symptomCards = [
  {
    title: "Humming Or Grinding Noise",
    text: "A worn bearing often creates a rumbling, humming, or grinding sound that changes with road speed.",
    image: "/imgi_21_Wheel-Bearing-Replacement-gallery-1-e1720539543931.webp",
  },
  {
    title: "ABS Warning Light",
    text: "Many modern wheel bearings work with the ABS sensor, so bearing play or sensor failure can trigger a dashboard warning.",
    image: "/imgi_22_Wheel-Bearing-Replacement-gallery-2.webp",
  },
  {
    title: "Uneven Tyre Wear",
    text: "Bearing movement can affect wheel stability, causing vibration, poor tracking, and irregular tyre wear.",
    image: "/imgi_24_Wheel-Bearing-Replacement-gallery-4.webp",
  },
];

const repairReasons = [
  {
    title: "Accurate Diagnosis",
    text: "We check wheel play, road noise, hub condition, ABS faults, and tyre wear before recommending replacement.",
  },
  {
    title: "Quality Parts",
    text: "Your vehicle receives suitable bearing kits or hub assemblies selected for the correct fitment and durability.",
  },
  {
    title: "Road-Safe Finish",
    text: "After fitting, we complete torque checks, rotation checks, and final inspection before the vehicle leaves.",
  },
];

const serviceTypes = [
  {
    title: "Front Wheel Bearings",
    text: "Common on vehicles with steering vibration, cornering noise, or front-end humming at speed.",
  },
  {
    title: "Rear Wheel Bearings",
    text: "Rear bearing wear can create drone-like cabin noise, unstable handling, or heat around the hub area.",
  },
  {
    title: "Hub Assembly Replacement",
    text: "Some vehicles need a complete hub unit rather than a separate bearing, especially when ABS sensors are integrated.",
  },
];

const bookingSteps = [
  {
    title: "Fill a Form",
    text: "Share your vehicle details and the noise or handling issue you noticed.",
    image: "/imgi_139_auto-repair-pg-car-diagnostics-1-1.webp",
  },
  {
    title: "Get a Quote",
    text: "We confirm the inspection route and give clear bearing replacement advice.",
    image: "/imgi_13_car-repair-pg-section-img-left-1.webp",
  },
  {
    title: "Let Us Fix",
    text: "Our technician removes the worn bearing or hub and fits the correct replacement.",
    image: "/imgi_23_Wheel-Bearing-Replacement-gallery-3.webp",
  },
  {
    title: "Relax & Drive",
    text: "Drive away with a quieter, steadier wheel assembly.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const qualityCards = [
  {
    title: "Six Days A Week",
    text: "Book wheel bearing diagnosis and repair support Monday to Saturday.",
    icon: CalendarCheck,
  },
  {
    title: "Precise Inspection",
    text: "We identify whether the fault is bearing wear, hub damage, tyre noise, or suspension movement.",
    icon: ClipboardCheck,
  },
  {
    title: "Safe Replacement",
    text: "Every repair is completed with careful fitting, correct torque, and final safety checks.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "What are the signs of a bad wheel bearing?",
    answer:
      "Common signs include humming or grinding noise, vibration, loose steering feel, ABS warning lights, uneven tyre wear, or heat around the wheel hub.",
  },
  {
    question: "Can I drive with a bad wheel bearing?",
    answer:
      "It is not recommended. A failing bearing can affect wheel stability and braking systems, and severe failure can make the vehicle unsafe.",
  },
  {
    question: "How long does wheel bearing replacement take?",
    answer:
      "Many wheel bearing jobs can be completed the same day, but timing depends on the vehicle design, hub condition, and parts availability.",
  },
  {
    question: "Do I need to replace all four wheel bearings?",
    answer:
      "Usually no. We replace the faulty bearing or hub assembly unless inspection shows another bearing is also worn.",
  },
  {
    question: "Is wheel bearing noise the same as tyre noise?",
    answer:
      "They can sound similar. That is why we inspect tyre condition, road noise, wheel play, and hub movement before confirming the repair.",
  },
  {
    question: "Should I get alignment after bearing replacement?",
    answer:
      "It may be recommended if suspension or hub components were disturbed, or if tyre wear and steering symptoms are present.",
  },
];

const galleryImages = [
  "/imgi_21_Wheel-Bearing-Replacement-gallery-1-e1720539543931.webp",
  "/imgi_22_Wheel-Bearing-Replacement-gallery-2.webp",
  "/imgi_23_Wheel-Bearing-Replacement-gallery-3.webp",
  "/imgi_24_Wheel-Bearing-Replacement-gallery-4.webp",
  "/imgi_25_Wheel-Bearing-Replacement-gallery-5.webp",
  "/imgi_26_Wheel-Bearing-Replacement-gallery-6-e1720539253312.webp",
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

export default function WheelBearingReplacementPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[680px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_156_Wheel-Bearing-Replacement-Hero-Banner-scaled.webp"
          alt="Wheel bearing replacement service"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1800px] flex-col justify-center px-5 py-20 lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-400">Reliable wheel bearing replacement</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Professional Wheel Bearing Replacement In West London
          </h1>
          <p className="mt-7 max-w-3xl text-base font-semibold leading-8 text-white/90">
            Strange wheel noise, vibration, or loose steering should be checked quickly. TaylorMOT diagnoses worn wheel bearings and replaces faulty hub parts with a safety-first approach.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="tel:+442033371831" className="inline-flex min-w-56 items-center justify-center gap-2 rounded-md border-2 border-white bg-white px-8 py-4 text-sm font-black uppercase text-black transition hover:bg-transparent hover:text-white">
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
        <div className="mx-auto grid max-w-[1700px] items-center gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative min-h-[430px]">
            <Image src="/imgi_14_Wheel-Repair-Garage-Inner.webp" alt="Mechanic for wheel bearing replacement" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 38vw" />
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Need Quick Help With Your <span className="text-red-600">Wheel Bearing Repair?</span>
            </h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
              Wheel bearings keep the wheel rotating smoothly while supporting the vehicle load. When they wear out, you may hear humming, grinding, squeaking, or feel vibration through the steering and floor.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-800">
              Our technicians inspect the affected corner, confirm the cause, and explain whether your vehicle needs a bearing kit, hub assembly, or related wheel service.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Common Signs That You Need <span className="text-red-600">Wheel Bearing Service</span>
          </h2>
          <p className="mx-auto mt-6 max-w-5xl text-base font-medium leading-8 text-neutral-800">
            If these symptoms appear, book a bearing inspection before the issue affects tyres, suspension, or braking performance.
          </p>
          <div className="mt-14 grid gap-0 md:grid-cols-3">
            {symptomCards.map((card, index) => (
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
                <Image src="/imgi_13_car-repair-pg-section-img-left-1.webp" alt="TaylorMOT wheel technician" fill className="object-cover" sizes="490px" />
              </div>
              <div className="px-8 pb-10 text-center">
                <h3 className="text-2xl font-black">Need A Bearing Checked?</h3>
                <div className="relative mt-8 rounded-md bg-white px-8 py-8 text-left text-neutral-950">
                  <span className="absolute -left-12 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
                    <Phone size={32} />
                  </span>
                  <p className="text-xl font-black text-red-600">Call Now & Get A Free Quote</p>
                  <p className="mt-6 text-3xl font-black">+44 20 3337 1831</p>
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
                How We Replace Bearings At Our <span className="text-red-600">Wheel Repair Garage</span>
              </h2>
              <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
                We safely raise the vehicle, remove the affected wheel assembly, inspect the hub, bearing, ABS wiring, and surrounding components, then fit the correct part using suitable tools and torque settings.
              </p>
              <ul className="mt-10 space-y-8">
                {repairReasons.map((item) => (
                  <RedBullet key={item.title} {...item} />
                ))}
              </ul>
            </section>
            <div className="relative min-h-[430px] overflow-hidden rounded-md">
              <Image src="/imgi_22_Wheel-Bearing-Replacement-gallery-2.webp" alt="Wheel bearing replacement in progress" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Unlock <span className="text-red-600">Wheel Bearing Services</span> At TaylorMOT
          </h2>
          <p className="mt-6 max-w-6xl text-base font-medium leading-8 text-neutral-800">
            We use suitable replacement parts, including complete hub assemblies or precision bearing kits, to restore smooth wheel rotation and dependable road safety.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {serviceTypes.map((item) => (
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
          How To Book A <span className="text-red-600">Wheel Bearing Specialist</span> In London
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
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">Trust TaylorMOT For Nearby Wheel Bearing Replacement</h2>
        <p className="mx-auto mt-6 max-w-4xl text-base font-medium leading-8 text-neutral-800">
          Our team focuses on clear diagnosis, practical advice, and careful replacement for safer everyday driving.
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
          <Image src="/imgi_13_car-repair-pg-section-img-left-1.webp" alt="Get a wheel bearing replacement quote" fill className="object-cover object-left" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-10 text-center lg:px-16">
            <h2 className="text-4xl font-black">GET YOUR FREE QUOTE TODAY</h2>
            <p className="mt-2 text-xl font-black uppercase">Tell us about the wheel noise</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-16 rounded-md border border-neutral-900 px-6 text-base font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Service needed" placeholder="Tell us which wheel is noisy, when the sound appears, and any dashboard warnings" className="mt-8 h-56 w-full rounded-md border border-neutral-900 px-6 py-6 text-base font-bold outline-none focus:border-red-600" />
            <button className="mt-8 block rounded-md bg-red-600 px-16 py-4 text-base font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-8 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative h-80 overflow-hidden rounded-md">
              <Image src={image} alt={`Wheel bearing replacement gallery ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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
        <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Wheel bearing replacement call to action" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="relative mx-auto grid max-w-[1500px] items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-400">Precise & reliable</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Wheel Bearing Noise? Let Us Do The Right Job.</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="tel:+442033371831" className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-8 py-4 text-sm font-black uppercase text-black transition hover:bg-neutral-200">
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

      <Link href="https://wa.me/442033371831" className="fixed bottom-8 right-8 z-40 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl">
        <MapPin size={34} />
        <span className="sr-only">Whatsapp</span>
      </Link>
    </main>
  );
}
