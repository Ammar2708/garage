import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  ClipboardList,
  Gauge,
  Phone,
  Settings,
  Wrench,
} from "lucide-react";

const serviceLinks = [
  { label: "Tyre Fitting & Replacement", href: "/w-fitting" },
  { label: "Wheel Alignment & Balancing", href: "/alling" },
  { label: "Alloy Wheel Refurbishment", href: "/auto" },
  { label: "Tyre Puncture Repair", href: "/auto" },
  { label: "Wheel Bearing Replacement", href: "/auto" },
];

const alignmentTypes = [
  {
    title: "Toe Alignment",
    text: "Toe alignment indicates whether the front of the tyre is closer or farther apart than the rear.",
  },
  {
    title: "Camber Alignment",
    text: "Camber alignment shows whether the tyre tilt is inward or outward.",
  },
  {
    title: "Caster Alignment",
    text: "Caster alignment is determined by the angle between the vertical line and the steering pivot axis.",
  },
];

const balancingTypes = [
  {
    title: "Dynamic Balancing",
    text: "Corrects imbalance in two planes using weights on both sides of the rim for smooth operation at speed.",
  },
  {
    title: "Road Force Balancing",
    text: "Simulates the tyre footprint on the road to identify stiffness and contact issues other methods can miss.",
  },
  {
    title: "Static Balancing",
    text: "Corrects imbalance in a single vertical plane and suits simpler wheel balance requirements.",
  },
];

const essenceItems = [
  {
    title: "Optimal Safety",
    text: "Balanced and aligned wheels reduce vibration and help your car stay stable at higher speeds.",
  },
  {
    title: "Car Performance",
    text: "Correct wheel angles reduce rolling resistance, protect suspension parts, and improve everyday handling.",
  },
  {
    title: "Tyre Longevity",
    text: "Routine alignment checks prevent uneven tread wear and help maximise the life of your tyres.",
  },
  {
    title: "Comfortable Ride",
    text: "A properly balanced wheel set gives you a smoother drive with less steering shake and fatigue.",
  },
];

const qualityCards = [
  {
    title: "Quick & Reliable Service",
    text: "Fast, professional same-day wheel balancing and alignment service.",
  },
  {
    title: "Deals & Discounts",
    text: "Clear wheel service pricing with practical options for your budget.",
  },
  {
    title: "Certified Mechanics",
    text: "Your vehicle is handled by trained technicians who understand wheel geometry.",
  },
  {
    title: "Customer Support",
    text: "Our team explains the issue and guides you toward the right repair.",
  },
];

const shopCards = [
  {
    title: "Six Days A Week",
    text: "We are open on Saturday for quick wheel service support.",
    icon: Gauge,
  },
  {
    title: "Convenient Service",
    text: "Book expert wheel alignment and balancing without a long wait.",
    icon: Wrench,
  },
  {
    title: "Quick Booking",
    text: "Choose the wheel service, pick a date and time, and we will handle the rest.",
    icon: CalendarCheck,
  },
];

const signCards = [
  {
    title: "Uneven Tyre Wear",
    image: "/imgi_173_Tyre-Fitting.webp",
    text: "If your tyres are not wearing evenly, your car may need alignment or balancing service.",
  },
  {
    title: "Car Pulling To One Side",
    image: "/imgi_14_wheel-balancing-wheel-alignment-content-img-scaled.webp",
    text: "Pulling on a flat road is a clear sign that wheel angles need professional attention.",
  },
  {
    title: "Steering Wheel Vibration",
    image: "/imgi_58_Busted-Tyres-png.webp",
    text: "Vibration at higher speeds often points to a wheel balance or alignment problem.",
  },
];

const bookingSteps = [
  {
    title: "Fill a Form",
    text: "Share your vehicle and the wheel service you need.",
    image: "/imgi_139_auto-repair-pg-car-diagnostics-1-1.webp",
  },
  {
    title: "Get a Quote",
    text: "Receive a clear quote that suits your repair needs.",
    image: "/imgi_13_car-repair-pg-section-img-left-1.webp",
  },
  {
    title: "Let Us Fix",
    text: "We inspect and correct the wheel problem with care.",
    image: "/imgi_14_tyre-repair-inner.webp",
  },
  {
    title: "Enjoy Your Ride",
    text: "Drive away with a smoother and safer road feel.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const faqItems = [
  {
    question: "Can I drive if my alignment is bad?",
    answer:
      "Driving with misaligned wheels is not advisable. It can create steering issues, uneven tyre wear, poor fuel economy, and a less stable drive.",
  },
  {
    question: "How do you know if you need an alignment?",
    answer:
      "Common signs include uneven tyre wear, the car pulling to one side, a crooked steering wheel, or vibration while driving.",
  },
  {
    question: "How much is a full car alignment in the UK?",
    answer:
      "The price depends on vehicle type and whether two-wheel or four-wheel alignment is required. We confirm the cost before work begins.",
  },
  {
    question: "Is wheel tyre alignment an MOT failure?",
    answer:
      "Alignment itself is not usually an MOT item, but the tyre wear or handling issues caused by poor alignment can contribute to MOT problems.",
  },
  {
    question: "How do I know if my wheels need balancing?",
    answer:
      "Wheel balancing is often needed when you feel steering wheel vibration, seat vibration, or shaking at higher speeds.",
  },
  {
    question: "What does an unbalanced wheel feel like?",
    answer:
      "An unbalanced wheel can feel like a steady vibration that becomes more noticeable as speed increases.",
  },
  {
    question: "How do I know if I need a balance or alignment?",
    answer:
      "Vibration usually points toward balancing, while pulling to one side or uneven tread wear usually points toward alignment.",
  },
  {
    question: "Is wheel/tyre alignment necessary after wheel balancing?",
    answer:
      "Not always, but if there are alignment symptoms as well as vibration, both checks are the safest choice.",
  },
];

const galleryImages = [
  "/imgi_21_wheel-replacement-gallery-2.webp",
  "/imgi_22_wheel-replacement-gallery-6.webp",
  "/imgi_23_wheel-replacement-gallery-5.webp",
  "/imgi_24_wheel-replacement-gallery-3.webp",
  "/imgi_25_wheel-replacement-gallery-4.webp",
  "/imgi_26_wheel-replacement-gallery-1.webp",
];

function GearBullet({ title, text }: { title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <Settings className="mt-1 shrink-0 text-red-600" size={22} strokeWidth={3} />
      <div>
        <h3 className="text-xl font-black">{title}</h3>
        <p className="mt-3 text-base font-medium leading-8 text-neutral-800">{text}</p>
      </div>
    </li>
  );
}

function WheelBullet({ title, text }: { title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <CircleDot className="mt-1 shrink-0 text-red-600" size={24} strokeWidth={4} />
      <div>
        <h3 className="text-xl font-black">{title}</h3>
        <p className="mt-3 text-base font-medium leading-8 text-neutral-800">{text}</p>
      </div>
    </li>
  );
}

export default function WheelAlignmentPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[640px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_11_Auto-Repair-Pricing-Plan-Wheel-Alignment-Special.webp"
          alt="Wheel alignment and balancing service"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto flex min-h-[640px] max-w-[1800px] flex-col justify-center px-5 py-20 lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.18em]">Established & familiar</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Professional Wheel Alignment And Balancing In London
          </h1>
          <p className="mt-7 max-w-4xl text-base font-semibold leading-8 text-white/90">
            Our expert wheel alignment services and balancing help protect tyre wear, steering control, fuel economy, and long-term vehicle safety.
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
        <div className="mx-auto grid max-w-[1700px] items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative min-h-[420px]">
            <Image src="/imgi_3_service-section-mechanic-e1700575367613.webp" alt="Alignment mechanic" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 38vw" />
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Competitive <span className="text-red-600">Four Wheel Tyre Alignment</span> Service, West London
            </h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
              When it comes to four-wheel tyre alignment and balancing, TaylorMOT gives your wheels the attention they deserve. Our technicians inspect steering response, tyre wear, and wheel angles before recommending the right correction.
            </p>
            <h3 className="mt-10 text-3xl font-black">Why Wheel Alignment Matters?</h3>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-800">
              Properly aligned and balanced wheels improve control, reduce uneven tyre wear, and make your vehicle feel steadier on the road.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-4xl font-black text-red-600">Wheel Alignment</h2>
          <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
            Car wheel alignment adjusts the angles of the wheels so they sit correctly against the road. This makes the car easier to steer, safer to ride, and better prepared for everyday driving.
          </p>
          <h2 className="mt-20 text-3xl font-black leading-tight sm:text-4xl">
            Explore <span className="text-red-600">Wheel Alignment Types</span> With Us
          </h2>
          <p className="mt-6 text-base font-medium leading-8">The following three primary classes of vehicle alignment are:</p>
          <ul className="mt-8 space-y-8">
            {alignmentTypes.map((item) => (
              <GearBullet key={item.title} {...item} />
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-14 lg:grid-cols-[490px_1fr]">
          <aside className="space-y-8">
            <div className="overflow-hidden rounded-md bg-red-600 text-white">
              <div className="relative h-80">
                <Image src="/imgi_3_service-section-mechanic-e1700575367613.webp" alt="TaylorMOT mechanic" fill className="object-cover" sizes="490px" />
              </div>
              <div className="px-8 pb-10 text-center">
                <h3 className="text-2xl font-black">Expert Vehicle Alignment Nearby London</h3>
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
            <div className="rounded-md border border-neutral-200 p-4">
              <Image src="/imgi_14_wheel-balancing-wheel-alignment-content-img-scaled.webp" alt="Wheel balancing vs wheel alignment comparison" width={1000} height={620} className="mx-auto w-full max-w-5xl object-contain" />
            </div>
            <section>
              <h2 className="text-4xl font-black text-red-600">Wheel Balancing</h2>
              <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
                Wheel balancing ensures the weight around the wheel and tyre assembly is distributed evenly. It is a crucial step for smooth, comfortable road travel.
              </p>
              <h3 className="mt-8 text-3xl font-black">
                Take a Look at Types of <span className="text-red-600">Wheel Balancing</span>
              </h3>
              <ul className="mt-8 space-y-8">
                {balancingTypes.map((item) => (
                  <WheelBullet key={item.title} {...item} />
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1800px]">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Essence of <span className="text-red-600">Wheel Balancing & Alignment</span> at TaylorMOT
          </h2>
          <ul className="mt-10 space-y-10">
            {essenceItems.map((item) => (
              <WheelBullet key={item.title} {...item} />
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <div className="mx-auto max-w-[1700px]">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Car <span className="text-red-600">Alignment Shops Nearby London</span> That Suit You
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-base font-medium leading-8 text-neutral-800">
            TaylorMOT meets your wheel needs with professional service, practical advice, and clear support.
          </p>
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_0.8fr_1fr]">
            <div className="space-y-12 text-left">
              {qualityCards.slice(0, 2).map((card, index) => (
                <div key={card.title} className="flex items-start gap-7">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-2xl font-black">{index + 1}.</span>
                  <div>
                    <h3 className="text-2xl font-black text-neutral-800">{card.title}</h3>
                    <p className="mt-4 text-base font-medium leading-7 text-neutral-700">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mx-auto h-72 w-full max-w-md">
              <Image src="/imgi_14_wheel-balancing-wheel-alignment-content-img-scaled.webp" alt="Wheel rim balancing" fill className="object-contain" sizes="360px" />
            </div>
            <div className="space-y-12 text-left">
              {qualityCards.slice(2).map((card, index) => (
                <div key={card.title} className="flex items-start gap-7">
                  <div>
                    <h3 className="text-2xl font-black text-neutral-800">{card.title}</h3>
                    <p className="mt-4 text-base font-medium leading-7 text-neutral-700">{card.text}</p>
                  </div>
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-2xl font-black">{index + 3}.</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">
          Searching For <span className="text-red-600">Quality Tyre Alignment Shops Near Me?</span> It&apos;s Here!
        </h2>
        <p className="mt-6 text-base font-medium">Based in West London, TaylorMOT delivers complete wheel care.</p>
        <div className="mx-auto mt-14 grid max-w-[1800px] gap-8 md:grid-cols-3">
          {shopCards.map((card) => {
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

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">Common Signs You Need a Wheel Alignment & Balancing</h2>
        <p className="mx-auto mt-6 max-w-5xl text-base font-medium leading-8">
          If you notice these signs, your car needs a wheel balancing and alignment check as soon as possible.
        </p>
        <div className="mx-auto mt-14 grid max-w-[1800px] gap-0 md:grid-cols-3">
          {signCards.map((card, index) => (
            <article key={card.title} className={index === 1 ? "bg-neutral-50" : "bg-red-600 text-white"}>
              <div className="relative h-96">
                <h3 className="relative z-10 pt-10 text-3xl font-black">{card.title}</h3>
                <Image src={card.image} alt={card.title} fill className="object-contain px-14 pt-20" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <p className="px-10 pb-12 text-base font-medium leading-8 text-current">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 text-center lg:px-10">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl">
          How To Book For <span className="text-red-600">Same-Day Balancing & Alignment</span> Check
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

      <section className="grid bg-black lg:grid-cols-[0.95fr_1fr]">
        <div className="relative min-h-[560px]">
          <Image src="/imgi_13_Inner-Services-Pages-Get-A-Quite-Left-Image.webp" alt="Get an alignment quote" fill className="object-cover object-left" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-10 text-center lg:px-16">
            <h2 className="text-4xl font-black">GET A QUOTE</h2>
            <p className="mt-2 text-xl font-black uppercase">Schedule your alignment today</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-16 rounded-md border border-neutral-900 px-6 text-base font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Service needed" placeholder="Let us know about the service needed" className="mt-8 h-56 w-full rounded-md border border-neutral-900 px-6 py-6 text-base font-bold outline-none focus:border-red-600" />
            <button className="mt-8 block rounded-md bg-red-600 px-16 py-4 text-base font-black text-white transition hover:bg-red-700">Submit</button>
          </form>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] gap-8 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative h-80 overflow-hidden rounded-md">
              <Image src={image} alt={`Wheel alignment gallery ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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

      <section className="bg-red-600 px-5 py-12 text-white lg:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-center gap-10 text-center md:flex-row md:justify-around">
          <Link href="tel:+442033371831" className="inline-flex items-center gap-4 text-3xl font-black">
            <Phone size={42} />
            Call Us
          </Link>
          <Link href="/appointment" className="inline-flex items-center gap-4 text-3xl font-black">
            <CheckCircle2 size={42} />
            Book Online
          </Link>
        </div>
      </section>

      <Link href="https://wa.me/442033371831" className="fixed bottom-8 right-8 z-40 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl">
        <ClipboardList size={34} />
        <span className="sr-only">Whatsapp</span>
      </Link>
    </main>
  );
}
