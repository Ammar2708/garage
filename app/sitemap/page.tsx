import Image from "next/image";
import Link from "next/link";

const sitemapColumns = [
  [
    {
      title: "London Motor Sports",
      href: "/",
      links: [{ label: "Homepage", href: "/" }],
    },
    {
      title: "Who We Are",
      href: "/about",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Gallery", href: "/gallery" },
        { label: "Testimonial", href: "/testimonials" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
    {
      title: "Car Mechanical Services",
      href: "/auto",
      links: [
        { label: "Engine Replacement", href: "/engine-replacement" },
        { label: "Automatic Gearbox Replacement", href: "/gearbox" },
        { label: "Brake Pad Replacement", href: "/brake-pad-replacement" },
        { label: "Shock Absorber Repair", href: "/shock" },
        { label: "Car Exhaust Repair", href: "/exhaust" },
        { label: "Power Steering Replacement", href: "/power steering" },
        { label: "Car AC Repair", href: "/ac-repair" },
        { label: "Fuel System Repair", href: "/fuel" },
        { label: "Car Clutch Replacement", href: "/clutch" },
        { label: "Timing Belt Replacement", href: "/timing-belt-replacement" },
        { label: "Auxiliary Belt Replacement", href: "/belt" },
        { label: "Engine Mount Replacement", href: "/engine mount" },
        { label: "Turbo Replacement", href: "/turbo" },
      ],
    },
    {
      title: "Wheel & Tyre Services",
      href: "/w-fitting",
      links: [
        { label: "Tyre Fitting", href: "/w-fitting" },
        { label: "Wheel Alignment", href: "/alling" },
        { label: "Wheel Refurbishment", href: "/alloy" },
        { label: "Tyre Puncture Repair", href: "/puncher" },
        { label: "Wheel Bearing Inspection & Replacement", href: "/bearing" },
      ],
    },
  ],
  [
    {
      title: "What We Do",
      href: "/auto",
      links: [
        { label: "Auto Repair & Maintenance", href: "/auto" },
        { label: "Car MOT", href: "/mot" },
        { label: "Car Trade", href: "/price" },
        { label: "Car Recovery & Tow", href: "/recovery" },
        { label: "Fleet Maintenance", href: "/fleet" },
      ],
    },
    {
      title: "Car Bodywork & Paint",
      href: "/car-paint-repair",
      links: [
        { label: "Car Dent Repair", href: "/car-dent-repair" },
        { label: "Car Scratch Repair", href: "/car-scratch-repair" },
        { label: "Bumper Repair & Replacement", href: "/bumper" },
        { label: "Panel Beating & Replacement", href: "/panel-beating" },
        { label: "Car Paint Repair", href: "/car-paint-repair" },
        { label: "Windscreen Replacement & Repair", href: "/windscreen" },
        { label: "Wing Mirror Replacement", href: "/wing-mirror-replacement" },
        { label: "Car Accident Repair", href: "/accident" },
        { label: "Car Window Tint", href: "/car-window-tint" },
      ],
    },
    {
      title: "Other Pages",
      href: "/contact",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Blogs/Articles", href: "/blogs" },
        { label: "Pricing & Coupons", href: "/price" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/term" },
      ],
    },
  ],
  [
    {
      title: "Repair Services",
      href: "/auto",
      links: [
        { label: "Car Mechanical Services", href: "/auto" },
        { label: "Car Body Repair", href: "/car-paint-repair" },
        { label: "Car Servicing", href: "/wash" },
        { label: "Car Electrician Repair", href: "/battery" },
        { label: "Car Diagnostics Services", href: "/daignostic" },
        { label: "Fluid & Oil Change Services", href: "/fluid-change" },
        { label: "Wheel & Tyre Services", href: "/w-fitting" },
      ],
    },
    {
      title: "Car Electrical Repair",
      href: "/battery",
      links: [
        { label: "Car Battery Replacement", href: "/battery" },
        { label: "Alternator Repair & Replacement", href: "/alter" },
        { label: "Starter Motor Repair & Replacement", href: "/starter" },
        { label: "Car Ignition System Repairs", href: "/ingnition" },
      ],
    },
    {
      title: "Fluid & Oil Change Services",
      href: "/fluid-change",
      links: [
        { label: "Car Oil Change", href: "/oil-change" },
        { label: "Brake Fluid Change", href: "/brake-fluid" },
        { label: "Engine Coolant Change", href: "/coolant" },
        { label: "Transmission Fluid Change", href: "/fluid-change" },
        { label: "Power Steering Fluid Change", href: "/steering-fluid" },
        { label: "Fuel Injector Replacement", href: "/injector" },
        { label: "Car Engine Oil Leakage", href: "/oil-leakage" },
        { label: "Car Aircon Regas", href: "/aircon-regas" },
      ],
    },
  ],
];

export const metadata = {
  title: "Sitemap | TAYLORMOT",
  description: "Explore all TAYLORMOT car repair, bodywork, electrical, tyre, MOT, servicing, and information pages.",
};

export default function SitemapPage() {
  return (
    <main className="bg-white text-black">
      <section className="relative grid min-h-[490px] place-items-center overflow-hidden px-6 py-20 text-center text-white">
        <Image
          src="/imgi_135_car-repair-hero-section-bg.webp"
          alt="Car repair workshop lights"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-3xl font-black leading-tight md:text-5xl">
            Sitemap - Explore Our Website
          </h1>
          <p className="mt-4 text-3xl font-black text-[#ef0000] md:text-5xl">
            Repair & Maintenance
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <h2 className="mx-auto max-w-7xl text-center text-2xl font-black leading-tight md:text-4xl">
          Easy Directions - Check Out Our{" "}
          <span className="text-[#ef0000]">Car Repair Sitemap</span>
        </h2>

        <div className="mx-auto mt-14 grid max-w-[1800px] grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {sitemapColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-10">
              {column.map((section) => (
                <section key={section.title} className="space-y-4 p-0">
                  <Link
                    href={section.href}
                    className="block text-2xl font-black leading-tight text-[#ef0000] hover:text-black md:text-3xl"
                  >
                    {section.title}
                  </Link>
                  <ul className="space-y-3 text-base font-semibold leading-7 md:text-lg">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="underline decoration-2 underline-offset-2 hover:text-[#ef0000]">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
