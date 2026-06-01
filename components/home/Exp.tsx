import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck2,
  CarFront,
  Check,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const serviceList = [
  "Repair & Maintenance",
  "Recovery & Towing",
  "Fleet Maintenance",
  "Vehicle Trade Support",
  "MOT Preparation",
];

const insightCards = [
  {
    title: "Experienced Team",
    copy:
      "Skilled technicians handling servicing, diagnostics, bodywork, and repair work with care.",
    icon: <BriefcaseBusiness strokeWidth={2.3} className="h-7 w-7" />,
  },
  {
    title: "Clear Communication",
    copy:
      "Straightforward advice, practical options, and transparent updates before work begins.",
    icon: <Handshake strokeWidth={2.3} className="h-7 w-7" />,
  },
  {
    title: "Reliable Results",
    copy:
      "Repairs focused on safety, performance, and long-term vehicle health.",
    icon: <CarFront strokeWidth={2.3} className="h-7 w-7" />,
  },
];

const repairPanels = [
  {
    title: "Car Body Repair",
    image: "/imgc1.webp",
    tone: "bg-gradient-to-r from-[#f4070b]/92 via-[#f4070b]/76 to-black/35",
    imageClass: "object-cover object-center",
    copy:
      "Panel repairs, dent removal, resprays, and finish restoration for accident damage and everyday wear.",
  },
  {
    title: "Vehicle Repair",
    image: "/bg1.webp",
    tone: "bg-gradient-to-r from-black/88 via-black/68 to-black/25",
    imageClass: "object-cover object-right-bottom",
    copy:
      "Mechanical repairs, diagnostics, servicing, and performance checks carried out by a trusted local garage.",
  },
];

const Exp = () => {
  return (
    <section className="bg-white text-black">
      <div className="relative overflow-hidden bg-gray-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[90rem] items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-10">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#f4070b]">
              Service Expertise
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Professional car servicing in{" "}
              <span className="text-[#f4070b]">W12 London</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-700 sm:text-lg">
              From routine servicing to urgent repairs, LMS keeps your vehicle road-ready with honest advice,
              careful workmanship, and efficient turnaround times.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceList.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-black leading-tight shadow-sm sm:text-base"
                >
                  <Check className="h-5 w-5 shrink-0 text-[#e3070b]" strokeWidth={3.2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/appointment"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4070b] px-6 text-sm font-black text-white transition-colors hover:bg-black"
              >
                Book Appointment
              </Link>
              <Link
                href="/appointment"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 text-sm font-black text-black transition-colors hover:border-black"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid min-w-0 gap-5 sm:grid-cols-3 lg:gap-7">
            {insightCards.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md lg:p-7"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gray-100 text-[#f4070b]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-black leading-tight tracking-tight lg:text-[21px]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#f4070b]">
              Bodywork & Mechanical
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Keep your car looking sharp and running properly.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg">
              Book expert support for cosmetic damage, routine maintenance, diagnostics, and mechanical repairs.
            </p>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-2xl bg-black shadow-xl lg:grid-cols-2">
            {repairPanels.map((panel) => (
            <article
                key={panel.title}
                className="relative min-h-[340px] overflow-hidden px-5 py-9 text-white sm:min-h-[420px] sm:px-10 lg:min-h-[500px] lg:px-12 lg:py-14"
              >
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={panel.imageClass}
                />
                <div className={`absolute inset-0 ${panel.tone}`} />
                <div className="relative z-10 flex min-h-[250px] max-w-xl flex-col justify-end sm:min-h-[340px] lg:min-h-[390px]">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-white text-[#f4070b]">
                    {panel.title === "Car Body Repair" ? (
                      <ShieldCheck className="h-6 w-6" strokeWidth={2.5} />
                    ) : (
                      <CalendarCheck2 className="h-6 w-6" strokeWidth={2.5} />
                    )}
                  </div>
                  <h3 className="text-2xl font-black leading-tight tracking-tight sm:text-4xl">
                    {panel.title}
                  </h3>
                  <p className="mt-4 text-base font-medium leading-7 text-white/90 sm:text-lg">
                    {panel.copy}
                  </p>
                  <Link
                    href="/appointment"
                    className="mt-7 inline-flex min-h-12 w-fit items-center justify-center rounded-lg bg-white px-6 text-sm font-black text-black transition-colors hover:bg-[#f4070b] hover:text-white"
                  >
                    Book Appointment
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
