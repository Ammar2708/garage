import Image from "next/image";
import {
  CalendarDays,
  CarFront,
  CheckCircle2,
  ClipboardCheck,
  HandCoins,
  Layers3,
  ShieldCheck,
  UserRoundCheck,
  Wifi,
} from "lucide-react";

const awards = [
  {
    title: "National Service Performer",
    image: "/icon3.webp",
    imageAlt: "National service performer award badge",
    copy:
      "Recognised for consistent repair standards, dependable workshop care, and a customer-first approach across our services.",
    reverse: false,
  },
  {
    title: "Silver Customer Care",
    image: "/icon2.webp",
    imageAlt: "Silver customer care award badge",
    copy:
      "Awarded for clear communication, smooth booking support, and helpful service from the first enquiry to vehicle collection.",
    reverse: false,
  },
  {
    title: "Best Garage London Nominee",
    image: "/icon2.webp",
    imageAlt: "Garage awards nominee badge",
    copy:
      "Shortlisted for our commitment to quality repairs, careful inspections, and reliable support for local London drivers.",
    reverse: true,
  },
  {
    title: "Bodywork Repair Specialist",
    image: "/icon1.webp",
    imageAlt: "Bodywork specialist award badge",
    copy:
      "Recognised for skilled dent, panel, and paint repair work that helps restore vehicles to a clean, road-ready finish.",
    reverse: true,
  },
];

const processItems = [
  { title: "No Hidden Charges", icon: <HandCoins /> },
  { title: "Fast Quotes", icon: <ClipboardCheck /> },
  { title: "Vetted Technicians", icon: <UserRoundCheck /> },
  { title: "Guaranteed Work", icon: <CheckCircle2 /> },
  { title: "Flexible Booking", icon: <CalendarDays /> },
];

const facilities = [
  { title: "130 Cars Space", icon: <CarFront /> },
  { title: "5 Floors Garage", icon: <Layers3 /> },
  { title: "Waiting Area", icon: <UserRoundCheck /> },
  { title: "Wi-Fi for Customers", icon: <Wifi /> },
  { title: "20K Sq. Ft Area", icon: <ShieldCheck /> },
];

const Award = () => {
  return (
    <section id="garage-awards" className="scroll-mt-28 bg-white text-black">
      <div className="relative min-h-[620px] overflow-hidden bg-black px-4 py-20 text-white sm:px-6 lg:px-8">
        <Image
          src="/bg4.webp"
          alt="Dark awards hero background"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-7xl flex-col justify-center">
          <p className="text-2xl font-black leading-tight sm:text-3xl">London Motor Sports Ltd</p>
          <h2 className="mt-7 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Awards & Recognition: Excellence in Automotive Care 🏆
          </h2>
          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href="tel:+442033371831"
              className="inline-flex min-h-14 w-56 items-center justify-center rounded-xl bg-white px-7 text-lg font-black text-black transition-colors hover:bg-gray-100"
            >
              CALL NOW
            </a>
            <a
              href="tel:+442033371831"
              className="inline-flex min-h-14 w-56 items-center justify-center rounded-xl bg-[#f4070b] px-7 text-lg font-black text-white transition-colors hover:bg-black"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-12 shadow-[0_12px_24px_rgba(0,0,0,0.14)] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {processItems.map((item) => (
            <article key={item.title} className="text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center text-[#3f3f3f]">
                <div className="h-16 w-16 text-[#3f3f3f] [&>svg]:h-full [&>svg]:w-full [&>svg]:stroke-[1.8]">
                  {item.icon}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-black leading-tight">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>

      <div className="space-y-0">
        {awards.map((award, index) => (
          <article
            key={award.title}
            className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
          >
            <div
              className={`mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 ${
                award.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="flex justify-center">
                <Image
                  src={award.image}
                  alt={award.imageAlt}
                  width={310}
                  height={310}
                  className={`${index === 2 ? "opacity-45 grayscale" : ""} h-auto w-56 object-contain sm:w-72`}
                />
              </div>
              <div className={award.reverse ? "lg:pr-10" : "lg:pl-10"}>
                <p className="text-lg font-black uppercase tracking-wide text-[#f4070b]">About This Award</p>
                <h3 className="mt-7 text-4xl font-black leading-tight tracking-tight text-[#2d2d2d] sm:text-5xl">
                  {award.title}
                </h3>
                <p className="mt-8 max-w-3xl text-xl font-medium leading-10 text-black sm:text-2xl">
                  {award.copy}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="bg-[#f4070b] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {facilities.map((item) => (
            <article key={item.title} className="text-center">
              <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-white text-[#f4070b]">
                <div className="h-12 w-12 [&>svg]:h-full [&>svg]:w-full [&>svg]:stroke-[1.8]">{item.icon}</div>
              </div>
              <h3 className="mt-6 text-2xl font-black leading-tight">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Award;
