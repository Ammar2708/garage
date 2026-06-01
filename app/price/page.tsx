import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightCircle,
  CalendarClock,
  Check,
  Headphones,
  Home,
  Phone,
  Scissors,
  Wrench,
} from "lucide-react";

const coupons = [
  {
    expires: "1/05/2027",
    offer: "£ 25 off",
    service: "On Body Repairs",
    title: "Bodywork special",
    detail: "Any repair of £250 or more.",
  },
  {
    expires: "1/05/2027",
    offer: "% 10 off",
    service: "On Major Service",
    title: "Seasonal special Coupon",
    detail: "Any service of £170 or more.",
    active: true,
  },
  {
    expires: "1/05/2027",
    offer: "£ 50 off",
    service: "On Mechanical Repairs",
    title: "Mechanical special",
    detail: "Any repair of £400 or more.",
  },
  {
    expires: "1/05/2027",
    offer: "% 10 off",
    service: "On Wheel Alignment",
    title: "Alignment special",
    detail: "Valid for any wheel alignment service of £110 or more.",
  },
  {
    expires: "1/05/2027",
    offer: "% 12 off",
    service: "On Brake Replacement",
    title: "Brake special Coupon",
    detail: "Valid for any brake replacement service of £220 or more.",
    active: true,
  },
  {
    expires: "1/05/2027",
    offer: "£ 35",
    service: "On Suspension Repairs",
    title: "Suspension special",
    detail: "Valid for any suspension repair work of £300 or more.",
  },
];

const prices = [
  ["CAMBELT, WATER PUMP", "4 Hours", "£ 350 + VAT"],
  ["GEARBOX SERVICE", "1 Day", "£ 280 + VAT"],
  ["Battery Fitment", "30 Minutes", "£40 incl. VAT"],
  ["Interim Service", "1 Hour", "£95 + VAT"],
  ["Full Service", "1.5 Hour", "£125 + VAT"],
  ["Major Service", "1.5 Hour", "£185 + VAT"],
  ["EGR Valve", "4 Hours", "£300 + VAT"],
  ["Fuel Pump", "4 Hours", "£350 + VAT"],
  ["Starter Motor", "2 Hours", "£220 + VAT"],
  ["Spark Plugs", "2 Hours", "£ 165 + VAT"],
  ["Car Inspection", "1 Hour", "£90 incl. VAT"],
  ["Window Motor", "3 Hours", "£200 incl. VAT"],
  ["Alternator Replacement", "3 Hours", "£300 + VAT"],
  ["Radiator", "3 Hours", "£250 + VAT"],
  ["OIL CHANGE", "0.5 Hour", "£75"],
  ["Air Filter Replacement", "0.5 Hour", "£70 + VAT"],
  ["FRONT BRAKE PADS", "1 Hour", "£100 + VAT"],
  ["FRONT & REAR BRAKE PADS", "1.5 Hours", "£150 + VAT"],
  ["FRONT & REAR BRAKE PADS & DISCS", "2 Hours", "£300 + VAT"],
  ["DIAGNOSIS", "1-3 Hours", "£75 + VAT"],
  ["MOT", "0.5 Hour", "£45 + VAT"],
  ["FRONT BRAKE PADS AND DISCS", "1 Hour", "£180 + VAT"],
];

const benefits = [
  "Guaranteed Competitive Rates",
  "Exclusive Discounts and Promotions",
  "Quality Repairs With Seasonal Savings",
  "Clear Pricing Across Core Services",
  "Affordable Car Care",
];

const terms = [
  "TAYLORMOT reserves the right to amend, cancel, or withdraw coupon offers at any time.",
  "Each coupon applies only to the specific service stated on the coupon.",
  "Only one coupon or promotional offer may be used per visit, unless agreed in writing.",
  "Printed coupons and vouchers are not transferable and must be presented before work begins.",
  "Coupons are void where restricted or prohibited by law.",
  "Coupon promotions cannot be combined with other promotional deals.",
];

const CouponCard = ({
  coupon,
}: {
  coupon: (typeof coupons)[number];
}) => (
  <article className="overflow-hidden bg-[#292929] text-center text-white">
    <div className="relative bg-[#f4070a] px-4 pb-7 pt-6">
      <p className="text-xs font-semibold uppercase tracking-wide sm:text-sm">Expires: {coupon.expires}</p>
      <p className="mt-1 text-3xl font-black leading-none sm:text-4xl lg:text-5xl">
        {coupon.offer}
      </p>
      <p className="mt-2 text-xl font-black leading-tight sm:text-2xl">
        {coupon.service}
      </p>
      <div className="absolute -bottom-7 left-0 right-0 flex items-center">
        <Scissors className="ml-6 h-10 w-10 -rotate-12 text-white" strokeWidth={3} />
        <div className="h-[5px] flex-1 border-t-[5px] border-dashed border-white" />
      </div>
    </div>
    <div className="px-5 pb-9 pt-14">
      <h3 className="text-xl font-black sm:text-2xl">{coupon.title}</h3>
      <p className="mx-auto mt-3 max-w-md text-base font-semibold leading-snug text-[#ff1111]">
        {coupon.detail}
      </p>
      <button
        type="button"
        className={`mt-6 border border-[#f4070a] px-6 py-3 text-sm font-black transition-colors ${
          coupon.active
            ? "bg-[#f4070a] text-black hover:bg-red-700"
            : "text-white hover:bg-[#f4070a]"
        }`}
      >
        Print Coupon
      </button>
    </div>
  </article>
);

const PricePage = () => {
  return (
    <main className="bg-white font-sans text-black">
      <section className="relative min-h-[420px] overflow-hidden bg-black">
        <Image
          src="/bg2.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-85"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex min-h-[420px] max-w-7xl flex-col justify-center px-4 py-16 sm:px-8">
          <h1 className="max-w-5xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Explore Our Pricing & Coupon Offers
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="tel:+441784240000"
              className="rounded-lg bg-white px-7 py-3 text-base font-black text-black shadow-lg transition hover:bg-gray-100"
            >
              CALL NOW
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-[#f4070a] px-7 py-3 text-base font-black text-white shadow-lg shadow-red-900/30 transition hover:bg-red-700"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-[1760px] text-center">
            <h2 className="text-2xl font-black uppercase sm:text-3xl lg:text-4xl">
              Car Repair Coupons & Offers
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-base font-medium leading-7 text-black/75 sm:text-lg">
              Save on trusted car repair and maintenance services with current
              TAYLORMOT coupon offers. Browse the available discounts below and
              choose the service that fits your vehicle&apos;s needs.
            </p>
          </div>
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {coupons.map((coupon) => (
              <CouponCard key={`${coupon.offer}-${coupon.service}`} coupon={coupon} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-black px-7 py-3 text-lg font-black text-white transition hover:bg-[#f4070a]"
            >
              Book Appointment Now
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-12 sm:px-8 lg:py-16">
        <div className="absolute inset-x-0 top-0 h-24 bg-white" />
        <div className="relative mx-auto max-w-[1900px] overflow-hidden bg-[#f4070a]">
          <div className="absolute inset-y-0 left-0 w-[78%]">
            <Image
              src="/img4A.png"
              alt=""
              fill
              className="object-cover grayscale"
              sizes="80vw"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
          <div className="absolute inset-y-0 right-[22%] hidden w-56 skew-x-[-17deg] bg-black/85 lg:block" />
          <div className="relative z-10 grid min-h-[460px] items-center gap-8 px-4 py-12 sm:px-8 lg:grid-cols-[1fr_1.05fr]">
            <div className="max-w-4xl text-white">
              <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                Exclusive Money Saving Offers 
                <br />
                 <span className="text-[#f4070a]">Don&apos;t Miss Out!!</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/85 sm:text-lg">
                Get practical discounts from a trusted London car repair and
                maintenance team.
              </p>
              <Link
                href="tel:+441784240000"
                className="mt-6 inline-flex items-center gap-3 rounded-[2rem] bg-[#f4070a] px-7 py-3 text-base font-black text-white transition hover:bg-red-700"
              >
                CALL NOW <ArrowRightCircle className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative min-h-[260px] lg:min-h-[360px]">
              <Image
                src="/img3A.webp"
                alt="Car and tyre repair offer"
                fill
                className="object-contain object-center"
                sizes="(min-width: 1024px) 50vw, 90vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 lg:py-18">
        <div className="mx-auto grid max-w-[1770px] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
              Lower Repair Costs
              <br />
              <span className="text-[#f4070a]">Mean Savings</span> For You
            </h2>
            <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-black/75 sm:text-lg">
              Our technicians handle repairs with care, clear communication, and
              practical pricing. These offers help reduce service costs while
              keeping quality workmanship at the centre of every job.
            </p>
            <ul className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-base font-medium text-black/80 sm:text-lg">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-[#f4070a] text-white">
                    <Check className="h-4 w-4" strokeWidth={4} />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-6">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-50 text-[#f4070a]">
                  <Headphones className="h-14 w-14" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-base font-bold sm:text-lg">Free Support</p>
                  <p className="mt-2 text-2xl font-black text-[#17181c]">
                    +44 1784 240000
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-[2rem] bg-[#f4070a] px-8 py-4 text-base font-black text-white transition hover:bg-red-700"
              >
                Get Quote <ArrowRightCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[430px]">
            <Image
              src="/img1A.webp"
              alt="Mechanic repairing a vehicle"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-[1710px] text-center">
          <h2 className="text-2xl font-black text-[#292929] sm:text-3xl lg:text-4xl">
            Explore Our Price Ranges For Featured Services
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-base font-medium leading-7 text-black/75 sm:text-lg">
            Review common repair and maintenance price ranges before booking.
            Final costs may vary after inspection, but this table gives you a
            clear starting point.
          </p>
          <div className="mt-8 overflow-hidden rounded-t-lg text-left">
            <div className="grid grid-cols-1 gap-4 bg-black px-6 py-5 text-base font-black text-white sm:grid-cols-3 sm:text-lg">
              <div className="flex items-center gap-5">
                <Home className="h-6 w-6" />
                Major Car Repairs
              </div>
              <div className="flex items-center gap-5">
                <CalendarClock className="h-6 w-6" />
                Time Required
              </div>
              <div className="flex items-center gap-5">
                <Wrench className="h-6 w-6" />
                Cost Range
              </div>
            </div>
            <div className="text-base font-medium sm:text-lg">
              {prices.map(([service, time, cost], index) => (
                <div
                  key={service}
                  className={`grid grid-cols-1 gap-4 px-6 py-4 sm:grid-cols-3 ${
                    index % 2 === 1 ? "bg-[#f0f0f0]" : "bg-white"
                  }`}
                >
                  <div>{service}</div>
                  <div>{time}</div>
                  <div>{cost}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1770px] gap-16 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
          <div className="relative min-h-[340px] lg:min-h-[500px]">
            <Image
              src="/b2.webp"
              alt="Garage tools and engine service"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
          <div>
            <div className="mb-9 flex justify-end gap-3">
              <span className="h-16 w-4 skew-x-[-12deg] bg-black" />
              <span className="h-16 w-4 skew-x-[-12deg] bg-[#d5a61d]" />
              <span className="h-16 w-4 skew-x-[-12deg] bg-[#f4070a]" />
            </div>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              Go The Extra Mile With TAYLORMOT Savings
            </h2>
            <div className="mt-6 space-y-5 text-base font-medium leading-7 text-black/75 sm:text-lg">
              <p>
                When your vehicle needs attention, our coupon section gives you
                quick access to current savings on selected repairs and services.
                We keep the process simple so you can book with confidence.
              </p>
              <p>
                Choose the coupon that matches your service, present it when you
                book, and our team will confirm the applicable discount before
                work begins.
              </p>
            </div>
            <h3 className="mt-7 text-2xl font-black leading-tight text-[#f4070a]">
              Schedule Your Appointment Today!
            </h3>
            <Link
              href="tel:+441784240000"
              className="mt-6 inline-flex items-center gap-3 rounded-[2rem] bg-[#f4070a] px-7 py-3 text-base font-black text-white transition hover:bg-red-700"
            >
              CALL NOW <ArrowRightCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-[1890px]">
          <h2 className="text-2xl font-black text-[#17181c] sm:text-3xl">
            Disclaimer Terms & Conditions For Coupons
          </h2>
          <p className="mt-5 text-base font-black text-[#17181c]">
            Please read the coupon terms before booking.
          </p>
          <div className="mt-7 space-y-4 pl-0 text-base font-medium leading-7 text-black/75 sm:pl-10 sm:text-lg">
            {terms.map((term) => (
              <p key={term}>{term}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[440px] overflow-hidden bg-black">
        <Image
          src="/img5A.png"
          alt=""
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 grid min-h-[440px] max-w-[1700px] items-center gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_0.35fr]">
          <div>
            <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
              Explore Our Pricing And Coupons & Get
              <br />
              Best Deals On <span className="text-[#f4070a]">Car Mechanical Repairs</span>
            </h2>
            <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-white/85 sm:text-lg">
              Book reliable repairs with clear pricing, practical discounts, and
              service support from a team focused on lasting results.
            </p>
          </div>
          <Link
            href="tel:+441784240000"
            className="justify-self-start rounded-lg bg-[#f4070a] px-7 py-3 text-lg font-black text-white transition hover:bg-red-700 lg:justify-self-center"
          >
            CALL NOW
          </Link>
        </div>
      </section>

      <Link
        href="https://wa.me/441784240000"
        className="fixed bottom-8 right-6 z-[120] flex items-center gap-3"
        aria-label="Contact TaylorMot on WhatsApp"
      >
        <span className="rounded-xl bg-white px-4 py-2 text-lg font-medium text-[#333] shadow-lg">
          Whatsapp
        </span>
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#39e75f] text-white shadow-xl">
          <Phone className="h-8 w-8" fill="currentColor" />
          <span className="absolute -bottom-3 -right-3 -z-10 h-14 w-14 rounded-full bg-black" />
        </span>
      </Link>
    </main>
  );
};

export default PricePage;
