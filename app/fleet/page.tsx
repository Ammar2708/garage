import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  Check,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  TimerReset,
  Wrench,
} from "lucide-react";

const supportPoints = [
  "Inspect fleet vehicles before faults become downtime.",
  "Plan repairs around your operating schedule.",
  "Use dependable parts and clear repair notes.",
  "Respond quickly with practical quotes and next steps.",
  "Maintain service records for safer daily operations.",
  "Support mixed fleets, company cars, vans, and pool vehicles.",
];

const mechanicActions = [
  "Check roadworthiness, safety items, and wear points.",
  "Confirm brakes, tyres, steering, lights, and fluids.",
  "Reduce avoidable breakdowns and urgent recovery calls.",
  "Keep vehicles available with planned maintenance windows.",
  "Improve fuel efficiency through regular condition checks.",
];

const maintenancePlan = [
  "Create preventive maintenance schedules.",
  "Track mileage-based service intervals.",
  "Review tyres, brakes, batteries, and fluids.",
  "Prioritise repairs by safety and business impact.",
  "Advise on driver-reported faults and inspection findings.",
  "Help fleet managers control operating costs.",
];

const serviceHighlights = [
  {
    title: "Efficient Booking",
    text: "Simple booking support for single vehicles or grouped fleet visits.",
    icon: MapPin,
  },
  {
    title: "Planned Maintenance",
    text: "Scheduled inspections that keep vehicles moving with less disruption.",
    icon: CalendarCheck,
  },
  {
    title: "Repair Support",
    text: "Clear repair guidance from diagnostics through replacement work.",
    icon: Wrench,
  },
  {
    title: "Fast Turnaround",
    text: "Focused workshop processes for urgent checks and routine servicing.",
    icon: TimerReset,
  },
];

const checklist = [
  "Chassis and body condition",
  "Engine and exhaust checks",
  "Belts, hoses, and visible leaks",
  "Wheels, tyres, and pressure",
  "Electrical system and lighting",
  "Braking system performance",
  "Safety equipment review",
  "Fluid levels and service notes",
];

const organisationTypes = [
  "Passenger transport fleets",
  "Construction and contractor vehicles",
  "Delivery and logistics vehicles",
  "Business and pool cars",
  "Government and public sector vehicles",
  "Corporate vehicle fleets",
  "Charity and community transport",
  "Healthcare support vehicles",
];

const serviceCards = [
  {
    title: "Diagnostic Checks",
    text: "We inspect the key systems that affect safety, reliability, and driver confidence before recommending repair work.",
  },
  {
    title: "Time-Saving Repairs",
    text: "Our team helps organise inspections and repairs around your selected dates so your fleet can return to work sooner.",
  },
  {
    title: "Vehicle Value Protection",
    text: "Regular checks help protect resale value, reduce major faults, and keep maintenance decisions visible.",
  },
  {
    title: "Quality Assurance",
    text: "Vehicles are checked before and after repair work so fleet managers receive a clearer, more reliable handover.",
  },
];

function CheckItem({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <li className="flex items-start gap-3 text-sm font-semibold leading-7 sm:text-base">
      <span className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full ${light ? "bg-white text-red-600" : "bg-red-600 text-white"}`}>
        <Check size={13} strokeWidth={4} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function FleetPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-100 bg-white">
        <div className="mx-auto grid min-h-[600px] max-w-[1860px] items-center gap-8 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 xl:px-14">
          <div className="z-10 max-w-2xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-red-600">Fleet maintenance in West London</p>
            <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
              Monitor Fleet Health With Our <span className="text-red-600">Maintenance</span> Service
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-neutral-700">
              Keep your cars and vans road-ready with organised inspections, clear repair advice, and practical support for daily fleet operations.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="tel:+441784240000"
                className="inline-flex items-center gap-2 rounded-md border-2 border-black px-7 py-3 text-sm font-black uppercase transition hover:bg-black hover:text-white"
              >
                <Phone size={18} />
                Call Now
              </Link>
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-md bg-red-600 px-7 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700"
              >
                Book Now
                <CalendarCheck size={18} />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <div className="absolute bottom-0 right-[20%] top-0 hidden w-28 -skew-x-12 bg-red-500/70 lg:block" />
            <Image
              src="/imgi_86_Fleet-Maintanance_Hero-banner-.webp"
              alt="Technician checking fleet vehicle"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto grid max-w-[1680px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid min-h-[520px] gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-md sm:mt-24">
              <Image src="/imgi_3_fleet-maintainance-image.webp" alt="Mechanic inspecting vehicle system" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
            <div className="relative overflow-hidden rounded-md">
              <Image src="/imgi_100_MOT-WITH-SERVICES-MOT-PAGE.webp" alt="Technicians servicing a fleet vehicle" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
          </div>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">What Is Fleet Maintenance?</h2>
            <div className="mt-6 flex gap-2">
              {[1, 2, 3, 4, 5].map((bar) => (
                <span key={bar} className="h-7 w-8 -skew-x-12 bg-red-600" />
              ))}
            </div>
            <p className="mt-7 text-base font-medium leading-8 text-neutral-700">
              Fleet maintenance is the routine inspection, servicing, and repair of company vehicles so they stay safer, cleaner, and more dependable on the road.
            </p>
            <p className="mt-6 text-base font-medium leading-8 text-neutral-700">
              A planned approach helps fleet managers reduce surprise costs, protect drivers, and keep vehicles available when the business needs them.
            </p>
            <Link
              href="tel:+441784240000"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-red-600 px-7 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700"
            >
              Call Now
              <Phone size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 lg:px-10 xl:px-14">
        <div className="mx-auto grid max-w-[1680px] gap-8 rounded-xl bg-neutral-100 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {serviceHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="text-center">
                <Icon className="mx-auto text-red-600" size={58} strokeWidth={1.8} />
                <h3 className="mt-6 text-lg font-black text-red-600">{item.title}</h3>
                <p className="mx-auto mt-4 max-w-xs text-sm font-medium leading-7 text-neutral-700">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Absolute <span className="text-red-600">Fleet Maintenance</span> Service From LMS
            </h2>
            <p className="mt-5 text-base font-medium leading-8 text-neutral-700">
              Every fleet has different mileage, duty cycles, and driver demands. We help you understand what needs attention, what can be planned, and what should be repaired first.
            </p>
            <p className="mt-4 text-base font-medium leading-8 text-neutral-700">
              From inspection to quote, the process stays straightforward and focused on keeping your vehicles reliable.
            </p>
          </div>
          <ul className="mt-9 grid gap-3 md:grid-cols-2">
            {supportPoints.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-neutral-50 px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">Our Fleet Technicians Help You Stay Ready</h2>
              <p className="mt-5 text-base font-medium leading-8 text-neutral-700">
                We look beyond one-off repairs and focus on the maintenance habits that support uptime, safety, and predictable costs.
              </p>
              <ul className="mt-8 space-y-3">
                {mechanicActions.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">Maintenance Priorities That Matter</h2>
              <p className="mt-5 text-base font-medium leading-8 text-neutral-700">
                Before vehicles enter the workshop, we identify the checks that protect lifespan, performance, and everyday usability.
              </p>
              <ul className="mt-8 space-y-3">
                {maintenancePlan.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <h2 className="text-center text-3xl font-black leading-tight sm:text-4xl">
            The <span className="text-red-600">State-Of-Art</span> Fleet Car Services
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {serviceCards.map((item) => (
              <article key={item.title} className="flex gap-5">
                <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-red-600 text-white">
                  <Check size={18} strokeWidth={4} />
                </span>
                <div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-base font-medium leading-8 text-neutral-700">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid text-white lg:grid-cols-2">
        <div className="bg-black px-6 py-14 lg:px-14">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">Our Service Checklist Includes</h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/85">
            Our technicians review key vehicle components and provide clear notes on condition, repair needs, and recommended next steps.
          </p>
          <ul className="mt-8 space-y-3">
            {checklist.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </div>
        <div className="bg-red-600 px-6 py-14 lg:px-14">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">A Solution For Organisations</h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/90">
            We support businesses and organisations that rely on vehicles every day and need maintenance handled with care.
          </p>
          <ul className="mt-8 space-y-3">
            {organisationTypes.map((item) => (
              <CheckItem key={item} light>
                {item}
              </CheckItem>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[1680px]">
          <h2 className="max-w-6xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Fleet Maintenance vs Operational Cost, <span className="text-red-600">What Should You Track?</span>
          </h2>
          <p className="mt-6 max-w-6xl text-base font-medium leading-8 text-neutral-700">
            Missed inspections can lead to repeated repairs, tyre wear, fuel waste, and unplanned downtime. A steady maintenance plan gives you a clearer view of cost, vehicle condition, and safety risk.
          </p>
          <p className="mt-5 max-w-6xl text-base font-medium leading-8 text-neutral-700">
            LMS helps you review the essentials, schedule repairs sensibly, and keep service decisions visible for your team.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Fewer surprise repairs", "Better driver confidence", "Clearer maintenance planning"].map((item) => (
              <div key={item} className="rounded-md border border-neutral-200 p-6">
                <ShieldCheck className="text-red-600" size={30} />
                <h3 className="mt-4 text-lg font-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-5 py-16 text-white lg:px-10 xl:px-14">
        <Image src="/imgi_149_car-repair-pg-cta-section-bg-whole.webp" alt="Garage service background" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="relative mx-auto flex max-w-[1680px] flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-red-500">Fleet support</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
              Keep Your Fleet Moving With Practical Maintenance Support
            </h2>
            <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-white/85">
              Speak with our team about inspections, repairs, and booking support for your vehicles.
            </p>
          </div>
          <Link href="/appointment" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-red-600 px-7 py-3 text-sm font-black uppercase text-white transition hover:bg-red-700">
            Book Appointment
            <Clock3 size={18} />
          </Link>
        </div>
      </section>

      <Link
        href="https://wa.me/441784240000"
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
