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
  SunMedium,
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
    text: "Share your vehicle details and the tint style you want.",
    image: "/imgi_13_Inner-Services-Pages-How-We-Work-Step2.webp",
  },
  {
    title: "Get A Quote",
    text: "We confirm the glass areas, film type, and legal requirements.",
    image: "/imgi_66_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
  {
    title: "Let Us Fit",
    text: "Our technicians prepare the glass and apply the film neatly.",
    image: "/imgi_14_car-window-tinting-service-by-london-motor-sports.webp",
  },
  {
    title: "Drive Away",
    text: "Your tint is checked for finish, visibility, and clean edges.",
    image: "/imgi_74_Inner-Services-Pages-How-We-Work-Step4-178x179.webp",
  },
];

const tintTypes = [
  {
    title: "Dyed",
    text: "A cost-effective film that gives a darker appearance and helps reduce glare.",
    image: "/imgi_4_car-window-tint-pg-dyed.webp",
  },
  {
    title: "Metalised",
    text: "A reflective film option designed to improve heat rejection and privacy.",
    image: "/imgi_5_car-window-tint-pg-metalised.webp",
  },
  {
    title: "Ceramic",
    text: "A premium non-metal film that offers strong heat reduction and UV protection.",
    image: "/imgi_6_car-window-tint-pg-ceramic.webp",
  },
];

const tintChecks = [
  "Side, rear, and sun strip tint requirements checked before fitting",
  "Glass cleaned and prepared to reduce dust, bubbles, and edge lift",
  "Film measured, shaped, trimmed, and applied with professional tools",
  "UK front glass visibility rules considered before work begins",
  "Final inspection for smooth finish, tidy edges, and clear visibility",
];

const tintBenefits = [
  {
    title: "Reduces Fading",
    text: "Quality tint film helps protect upholstery, trims, and interior surfaces from sun damage.",
  },
  {
    title: "Protects Your Skin",
    text: "Tinted film can block a high level of UV rays, helping make daily driving more comfortable.",
  },
  {
    title: "Reduces Heat",
    text: "Tinted windows help keep the cabin cooler by reducing direct solar heat through the glass.",
  },
  {
    title: "Adds Privacy",
    text: "A well-chosen tint improves privacy for passengers and belongings without overdoing the look.",
  },
];

const whyCards = [
  {
    title: "Wide Range Of Tints",
    text: "Choose from practical film options for privacy, comfort, style, and heat reduction.",
    icon: SunMedium,
  },
  {
    title: "Clear Pricing",
    text: "We quote based on vehicle size, glass areas, film type, and fitting needs.",
    icon: Wallet,
  },
  {
    title: "Professional Finish",
    text: "Our fitting process focuses on clean edges, smooth application, and legal visibility.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "What are the different types of car window tint available?",
    answer:
      "TaylorMOT can fit dyed, metalised, and ceramic tint films. The right option depends on your budget, heat reduction needs, privacy preference, and vehicle glass.",
  },
  {
    question: "How does the car window tint installation process work?",
    answer:
      "We clean the glass, prepare the surface, trim the film to suit the window, apply it carefully, remove moisture, and check the edges for a neat finish.",
  },
  {
    question: "Why should I consider car window tinting, especially in summer?",
    answer:
      "Window tinting helps reduce heat, glare, and UV exposure, making the vehicle more comfortable during warmer months.",
  },
  {
    question: "How does car window tinting improve comfort and safety?",
    answer:
      "Tint film can reduce glare, improve privacy, protect the interior, and help hold glass fragments together if a window is damaged.",
  },
  {
    question: "Is it legal to install car window tints in the UK?",
    answer:
      "Yes, but front windows must meet UK visibility rules. The windscreen and front side windows need enough visible light transmission, so we guide you before fitting.",
  },
  {
    question: "What is the cost of car window tint installation in the UK?",
    answer:
      "Pricing depends on vehicle size, number of windows, film type, and preparation required. Send your registration for a clear quote.",
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
  if (service === "Car Window Tint") return "/car-window-tint";
  return "/auto";
};

export default function WindowTintPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative min-h-[510px] overflow-hidden bg-black text-white">
        <Image
          src="/imgi_102_window-tinting-hero-banner-img.webp"
          alt="Professional car window tint installation"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="relative mx-auto flex min-h-[510px] max-w-[1800px] flex-col justify-center px-5 py-14 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-red-400">Car window tint</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
            Professional Car Window Tint Installation In London
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/90 sm:text-[15px]">
            Upgrade comfort, privacy, and style with neatly fitted car window tint film from TaylorMOT.
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
            <Image src="/imgi_50_Inner-Services-Pages-Get-A-Quite-Left-Image-277x300.webp" alt="Mechanic ready for window tint installation" fill className="object-contain object-bottom" sizes="(max-width: 1024px) 90vw, 34vw" />
          </div>
          <div>
            <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              A Cleaner Way To Add <span className="text-red-600">Privacy And Comfort</span>
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Window tinting is a practical upgrade for drivers who want a smarter look, reduced glare, and a cooler cabin. We help you choose a film that suits your car and stays within sensible visibility limits.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              TaylorMOT fits tint film with careful glass preparation, precise trimming, and a tidy finish across side windows, rear windows, and legal sun strip options.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
          Types Of Car Window Tint
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Different films offer different levels of privacy, heat control, appearance, and long-term performance.
        </p>
        <div className="mx-auto mt-9 grid max-w-[1800px] gap-7 md:grid-cols-3">
          {tintTypes.map((type, index) => (
            <article key={type.title} className="overflow-hidden rounded-md border border-neutral-200">
              <div className={index === 1 ? "relative h-64 bg-neutral-50" : "relative h-64 bg-red-600"}>
                <Image src={type.image} alt={type.title} fill className="object-contain p-7" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-xl font-black text-red-600 sm:text-2xl">{type.title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-6 text-neutral-800">{type.text}</p>
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
                <Image src="/imgi_14_car-window-tinting-service-by-london-motor-sports.webp" alt="Car window tint fitting work" fill className="object-cover" sizes="430px" />
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
              Why Consider Car Window Tinting?
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              Tinting can make daily driving more comfortable by reducing glare, lowering cabin heat, improving privacy, and helping protect the interior from sunlight.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {tintChecks.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 sm:text-[15px]">
                  <CheckCircle2 className="mt-1 shrink-0 text-red-600" size={21} />
                  {item}
                </div>
              ))}
            </div>
            <div className="relative mt-8 min-h-[390px] overflow-hidden rounded-md">
              <Image src="/imgi_14_car-window-tinting-service-by-london-motor-sports.webp" alt="Applying car window tint film" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <div className="mx-auto grid max-w-[1800px] items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-md">
            <Image src="/imgi_78_image-26.webp" alt="Technician ready to install car window tint" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </div>
          <div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">
              Comfort, Privacy, And A Sharper Finish
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
              A good tint should look clean and feel practical. We focus on film choice, glass preparation, and installation quality so the final result feels polished.
            </p>
            <div className="mt-9 space-y-7">
              {tintBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <Wrench className="mt-1 shrink-0 rounded-full bg-red-600 p-1 text-white" size={25} />
                  <div>
                    <h3 className="text-lg font-black text-neutral-950">{benefit.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          How We Install Car Window Tint Film
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Our technicians clean each window, size and trim the film, remove the liner, apply the tint, smooth the surface, and inspect the edges. The aim is a smart finish with fewer bubbles, marks, or rough cuts.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            { text: "Window glass cleaned and prepared carefully", icon: Sparkles },
            { text: "Film selected for privacy, comfort, and appearance", icon: SunMedium },
            { text: "Tint trimmed and applied with controlled tools", icon: ClipboardCheck },
            { text: "Final finish checked before handover", icon: ShieldCheck },
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
          Is Car Window Tint Legal In The UK?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Car tinting is legal when it follows UK visibility rules. Front side windows and windscreens must allow enough light through, so we can advise on suitable tint levels before installation.
        </p>
      </section>

      <section className="px-5 py-12 lg:px-10">
        <h2 className="text-2xl font-black leading-tight text-red-600 sm:text-3xl lg:text-[31px]">
          How Much Does Car Window Tint Installation Cost?
        </h2>
        <p className="mt-5 max-w-[1700px] text-sm font-medium leading-7 text-neutral-800 sm:text-[15px]">
          Cost depends on the vehicle, number of windows, film type, window size, and preparation required. TaylorMOT provides a clear quote before fitting begins.
        </p>
      </section>

      <section className="px-5 py-12 text-center lg:px-10">
        <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-[31px]">Why TaylorMOT For Car Window Tint?</h2>
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
            <p className="text-xs font-black uppercase tracking-[0.16em]">Reliable tint fitting</p>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-[40px]">
              Give Your Car A Smarter Look With Professional Window Tint
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
          <Image src="/imgi_150_car-repair-pg-before-footer-cta-bg.webp" alt="Car window tint quote request" fill className="object-cover object-left opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex items-center p-5 lg:p-10">
          <form className="w-full rounded-md bg-white/95 px-6 py-9 text-center lg:px-14">
            <h2 className="text-3xl font-black sm:text-[34px]">GET A <span className="text-red-600">QUOTE</span></h2>
            <p className="mt-2 text-sm font-black uppercase">Tell us about your tint request</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Phone", "Car Reg"].map((field) => (
                <input key={field} aria-label={field} placeholder={field} className="h-14 rounded-md border border-neutral-900 px-5 text-sm font-bold outline-none focus:border-red-600" />
              ))}
            </div>
            <textarea aria-label="Window tint installation details" placeholder="Tell us which windows need tinting and whether you prefer dyed, metalised, or ceramic film" className="mt-7 h-44 w-full rounded-md border border-neutral-900 px-5 py-5 text-sm font-bold outline-none focus:border-red-600" />
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
