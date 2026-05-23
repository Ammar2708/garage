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
  ShieldCheck,
  Wrench,
} from "lucide-react";

const tyreProblems = [
  {
    title: "Busted Tyres",
    image: "/imgi_58_Busted-Tyres-png.webp",
    text: "A tyre blowout can cause fast pressure loss. Pull over safely and arrange a replacement before continuing your journey.",
  },
  {
    title: "Uneven Tread Wear",
    image: "/imgi_173_Tyre-Fitting.webp",
    text: "Irregular tread can affect steering, braking, and grip. We check the tyre condition before recommending the right fix.",
  },
  {
    title: "Bulged Tyres",
    image: "/imgi_37_tyre-bluges.webp",
    text: "Bulges can show internal tyre damage and should be treated seriously. Replacing the tyre is usually the safest option.",
  },
];

const bookingSteps = [
  {
    title: "Fill a Form",
    text: "Share your vehicle details and the tyre service you need.",
    image: "/imgi_139_auto-repair-pg-car-diagnostics-1-1.webp",
  },
  {
    title: "Get a Quote",
    text: "Receive a clear quote before the tyre work begins.",
    image: "/imgi_13_car-repair-pg-section-img-left-1.webp",
  },
  {
    title: "Let Us Fix",
    text: "Our team fits or replaces the tyres with careful checks.",
    image: "/imgi_14_tyre-repair-inner.webp",
  },
  {
    title: "Relax & Drive",
    text: "Drive away with better grip, balance, and confidence.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const services = [
  "Tyre Fitting & Replacement",
  "Wheel Alignment & Balancing",
  "Alloy Wheel Refurbishment",
  "Tyre Puncture Repair",
  "Wheel Bearing Inspection & Replacement",
];

const warningSigns = ["Air leaks", "Car vibrating on roads", "Misalignment", "Low tread depth", "Tyre cracks", "Old or hardened tyres"];

const mobileBenefits = [
  {
    title: "Speedy Tyre Replacement",
    text: "Fast, practical tyre replacement for urgent driving needs.",
  },
  {
    title: "Balanced And Aligned Tyres",
    text: "We focus on fitment, pressure, and safe road contact.",
  },
  {
    title: "Tyre Service To Suit Your Pocket",
    text: "Clear guidance so you can choose a tyre option that fits your budget.",
  },
  {
    title: "Certified Technicians",
    text: "Your tyre fitting is handled by trained garage professionals.",
  },
];

const tips = [
  {
    title: "Check Tyre Pressure",
    text: "Proper pressure helps protect the tyre shape, braking distance, and fuel efficiency.",
  },
  {
    title: "Avoid Old Tyres",
    text: "Replace tyres once wear, cracks, or hardening make them unsafe for daily use.",
  },
  {
    title: "Inspect Vehicle Rims",
    text: "Damaged rims can cause air loss and uneven tyre wear, especially with tubeless tyres.",
  },
  {
    title: "Choose The Right Tyres",
    text: "The right size, load rating, and tyre type help your vehicle handle as intended.",
  },
  {
    title: "Avoid Road Hazards",
    text: "Potholes, debris, nails, and sharp edges can damage tyres quickly.",
  },
  {
    title: "Book Regular Inspection",
    text: "Routine tyre checks help spot damage before it turns into a roadside problem.",
  },
];

const safetySteps = [
  {
    title: "Diagnostic Check",
    text: "We inspect the tyre issue and identify whether repair or replacement is the safer choice.",
  },
  {
    title: "Quality Parts & Tools",
    text: "Our team uses suitable tools and tyre handling methods to protect the wheel assembly.",
  },
  {
    title: "Tyre Mounting",
    text: "The tyre is fitted carefully, checked, and prepared for a safer return to the road.",
  },
];

const faqItems = [
  {
    question: "How much does it cost to replace a tyre?",
    answer:
      "The cost depends on tyre size, brand, and vehicle type. We confirm the quote before fitting so the price is clear.",
  },
  {
    question: "Can I replace just one tyre on my car?",
    answer:
      "Often yes, but tread depth, axle balance, and manufacturer guidance should be checked first.",
  },
  {
    question: "How often should tyres be replaced?",
    answer:
      "Replace tyres when tread is low, damage is visible, or the rubber has aged beyond safe use.",
  },
  {
    question: "Do TaylorMOT fit your tyres?",
    answer:
      "Yes. Bring the vehicle to us and we can inspect, fit, and advise on tyre replacement.",
  },
  {
    question: "Can tyre technicians repair punctured tyres?",
    answer:
      "Some punctures can be repaired if the damage is in a safe repair zone and the tyre condition is suitable.",
  },
  {
    question: "What is included in a tyre fitting service?",
    answer:
      "Tyre fitting usually includes removing the old tyre, fitting the replacement, pressure checks, and safety advice.",
  },
];

const galleryImages = [
  "/imgi_21_tyre-gallery-1-scaled.webp",
  "/imgi_22_tyre-gallery-2-scaled.webp",
  "/imgi_23_tyre-gallery-3.webp",
  "/imgi_24_tyre-gallery-4.webp",
  "/imgi_25_tyre-gallery-5.webp",
  "/imgi_26_tyre-gallery-6.webp",
];

function GearBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-base font-semibold leading-8">
      <Settings className="mt-1 shrink-0 text-red-600" size={19} strokeWidth={3} />
      <span>{children}</span>
    </li>
  );
}

export default function TyreFittingPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[640px] overflow-hidden bg-black text-white">
        <Image src="/imgi_173_Tyre-Fitting.webp" alt="Tyre fitting service" fill priority className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto flex min-h-[640px] max-w-[1800px] flex-col justify-center px-5 py-20 lg:px-10">
          <p className="text-sm font-black uppercase tracking-[0.18em]">Trusted & well-known</p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Quality Tyre Fitting & Replacement In London
          </h1>
          <p className="mt-7 max-w-4xl text-base font-semibold leading-8 text-white/90">
            Do not let flat, worn, or damaged tyres interrupt your journey. TaylorMOT provides practical tyre fitting support, careful inspections, and clear advice before replacement.
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
          <div className="relative min-h-[360px]">
            <Image src="/imgi_13_Inner-Services-Pages-Get-A-Quite-Left-Image.webp" alt="Tyre technician" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Ready For A <span className="text-red-600">Same-Day Tyre Installation</span> Experience?
            </h2>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-800">
              If you have a flat or badly worn tyre, our team can inspect the problem and recommend the right replacement. Vehicle tyres are essential for road safety, handling, and braking confidence.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-800">
              Regular maintenance helps prevent tyre issues, but when a tyre has already failed, fast professional fitting keeps the repair process simple and safer.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 lg:px-10">
        <div className="mx-auto max-w-[1700px] text-center">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            3 <span className="text-red-600">Significant Reasons</span> For Car Tyre Change
          </h2>
          <p className="mx-auto mt-5 max-w-5xl text-base font-medium leading-8">
            Tyres should be inspected when pressure, tread, or sidewall condition changes. These are common reasons a replacement may be needed.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {tyreProblems.map((item) => (
              <article key={item.title} className="text-center">
                <div className="relative min-h-[300px] overflow-hidden bg-red-600">
                  <h3 className="relative z-10 pt-8 text-3xl font-black text-white">{item.title}</h3>
                  <Image src={item.image} alt={item.title} fill className="object-contain object-bottom p-8" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <p className="mx-auto mt-7 max-w-sm text-base font-medium leading-8">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1700px] text-center">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            How Do I Book An <span className="text-red-600">Appointment For Tyre Renewal</span>
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {bookingSteps.map((step) => (
              <article key={step.title} className="text-center">
                <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full">
                  <Image src={step.image} alt={step.title} fill className="object-cover" sizes="224px" />
                </div>
                <h3 className="mt-7 text-2xl font-black text-red-600">{step.title}</h3>
                <p className="mx-auto mt-4 max-w-xs text-base font-medium leading-7">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-black text-white lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[520px]">
          <Image src="/imgi_13_Inner-Services-Pages-Get-A-Quite-Left-Image.webp" alt="Tyre fitting quote" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 100vw, 45vw" />
        </div>
        <div className="px-5 py-12 lg:px-10">
          <form className="rounded-2xl bg-white/95 p-6 text-black sm:p-10">
            <h2 className="text-center text-3xl font-black uppercase sm:text-4xl">Get A Quote</h2>
            <p className="text-center text-lg font-black uppercase">Where services are promised</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-16 rounded-md border border-black px-5 text-base font-bold outline-none focus:border-red-600" />
              ))}
              <textarea aria-label="Service needed" placeholder="Let us know about the service needed" className="min-h-40 rounded-md border border-black px-5 py-4 text-base font-bold outline-none focus:border-red-600 sm:col-span-2" />
              <button type="button" className="h-14 rounded-md bg-red-600 px-9 text-sm font-black uppercase text-white transition hover:bg-red-700">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] gap-12 lg:grid-cols-[0.32fr_0.68fr]">
          <aside>
            <div className="rounded-xl bg-red-600 p-7 text-white">
              <h2 className="text-2xl font-black">Call Now & Get A Free Quote</h2>
              <Link href="tel:+442033371831" className="mt-6 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-4 text-xl font-black text-black">
                <Phone size={24} />
                +44 20 3337 1831
              </Link>
            </div>
            <div className="mt-8 bg-neutral-100 p-7">
              <h2 className="text-2xl font-black text-red-600">All Wheel & Tyre Services</h2>
              <div className="mt-6 space-y-4">
                {services.map((service) => (
                  <Link key={service} href={service === "Tyre Fitting & Replacement" ? "/w-fitting" : "/auto"} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-base font-semibold transition hover:text-red-600">
                    <CircleDot className="text-red-600" size={20} />
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
          <div>
            <div className="relative min-h-[420px] overflow-hidden rounded-xl">
              <Image src="/imgi_21_tyre-gallery-1-scaled.webp" alt="Car tyre fitting in garage" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 68vw" />
            </div>
            <h2 className="mt-10 text-3xl font-black leading-tight sm:text-4xl">Warning Signs For Tyres Worn Out</h2>
            <p className="mt-5 text-base font-medium leading-8">
              Watch for signs that indicate your tyres may need replacement before they put your safety at risk.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {warningSigns.map((item) => (
                <GearBullet key={item}>{item}</GearBullet>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1700px] text-center">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Quick <span className="text-red-600">Mobile Tyre Fitting</span> In London
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-base font-medium leading-8">
            Whether you are at home, work, or dealing with a roadside tyre issue, our tyre service is built around practical help and clear communication.
          </p>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_0.8fr_1fr]">
            <div className="space-y-8 text-left">
              {mobileBenefits.slice(0, 2).map((item, index) => (
                <article key={item.title} className="flex gap-5">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-neutral-100 text-xl font-black">{index + 1}.</span>
                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-base font-medium leading-7 text-neutral-700">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="relative min-h-[320px]">
              <Image src="/imgi_173_Tyre-Fitting.webp" alt="Tyre stack" fill className="object-contain" sizes="(max-width: 1024px) 100vw, 28vw" />
            </div>
            <div className="space-y-8 text-left">
              {mobileBenefits.slice(2).map((item, index) => (
                <article key={item.title} className="flex gap-5">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-neutral-100 text-xl font-black">{index + 3}.</span>
                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-base font-medium leading-7 text-neutral-700">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1700px]">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            8 Tips To <span className="text-red-600">Prevent Tyre Replacement Cost</span>
          </h2>
          <p className="mt-6 text-base font-medium leading-8">
            A little tyre care can reduce avoidable damage and help you spot issues before replacement becomes urgent.
          </p>
          <div className="mt-9 space-y-6">
            {tips.map((tip) => (
              <article key={tip.title} className="flex gap-4">
                <Settings className="mt-1 shrink-0 text-red-600" size={22} strokeWidth={3} />
                <div>
                  <h3 className="text-lg font-black">{tip.title}</h3>
                  <p className="mt-2 text-base font-medium leading-8">{tip.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1700px]">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            <span className="text-red-600">Tyre Installation With Safety</span> At TaylorMOT
          </h2>
          <p className="mt-6 text-base font-medium leading-8">
            Our team treats tyre fitting as a safety-critical job, from inspection through final checks.
          </p>
          <div className="mt-9 space-y-6">
            {safetySteps.map((step) => (
              <article key={step.title} className="flex gap-4">
                <ShieldCheck className="mt-1 shrink-0 text-red-600" size={24} />
                <div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-2 text-base font-medium leading-8">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1700px] text-center">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Enjoy Transparent, Upfront Pricing For Your Tyre Change.
          </h2>
          <p className="mx-auto mt-6 max-w-5xl text-base font-medium italic leading-8">
            Looking for a reliable local tyre fitting service? We provide clear advice, convenient booking, and careful replacement support.
          </p>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {[
              { title: "Six Days A Week", text: "Open Saturday for quick tyre service relief.", icon: Gauge },
              { title: "Convenient Service", text: "No more waiting around for tyre renewal.", icon: Wrench },
              { title: "Easy Booking", text: "Choose the service, date, and time.", icon: ClipboardList },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-xl border border-neutral-400 p-8 text-center">
                  <Icon className="mx-auto text-red-600" size={72} strokeWidth={1.5} />
                  <h3 className="mt-6 text-2xl font-black text-red-600">{item.title}</h3>
                  <p className="mx-auto mt-4 max-w-sm text-base font-medium leading-7">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1700px] gap-7 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative min-h-[310px] overflow-hidden rounded-xl">
              <Image src={image} alt={`Tyre fitting gallery ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-center text-3xl font-black sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-5">
            {faqItems.map((faq, index) => (
              <details key={faq.question} className="group border border-neutral-400" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-black text-neutral-800 group-open:text-red-600">
                  <span>{faq.question}</span>
                  <ChevronDown className="shrink-0 text-red-600 transition group-open:rotate-180" size={24} />
                </summary>
                <p className="border-t border-neutral-300 px-6 py-5 text-base font-medium leading-8">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-red-600 px-5 py-12 text-white lg:px-10">
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="Garage background" fill className="object-cover opacity-20" sizes="100vw" />
        <div className="relative mx-auto flex max-w-[1700px] flex-col gap-8 md:flex-row md:items-center md:justify-around">
          <Link href="tel:+442033371831" className="inline-flex items-center justify-center gap-4 text-3xl font-black">
            <Phone size={36} />
            Call Us
          </Link>
          <Link href="/appointment" className="inline-flex items-center justify-center gap-4 text-3xl font-black">
            <CheckCircle2 size={36} />
            Book Online
          </Link>
        </div>
      </section>

      <Link
        href="https://wa.me/442033371831"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-semibold text-neutral-700 shadow-xl"
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
