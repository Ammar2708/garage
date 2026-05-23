import Image from "next/image";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";

const contactCards = [
  {
    label: "Phone Call",
    value: "+44 203 337 1831",
    href: "tel:+442033371831",
    icon: Phone,
  },
  {
    label: "Email drop Us",
    value: "sm@londonmotorsports.co.uk",
    href: "mailto:sm@londonmotorsports.co.uk",
    icon: Mail,
  },
  {
    label: "Location",
    value: "142 Bentworth Rd, London W12 7AH",
    href: "https://www.google.com/maps/search/?api=1&query=142+Bentworth+Rd+London+W12+7AH",
    icon: MapPin,
  },
];

const socialLinks = [
  { label: "Facebook", text: "f" },
  { label: "Twitter", text: "X" },
  { label: "LinkedIn", text: "in" },
  { label: "YouTube", text: "yt" },
  { label: "Instagram", text: "ig" },
];

const Page = () => {
  return (
    <main className="bg-white text-black">
      <section className="relative min-h-[240px] overflow-hidden bg-black sm:min-h-[300px] lg:min-h-[380px]">
        <Image
          src="/bg2.webp"
          alt="Close up of performance car bodywork"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex min-h-[240px] max-w-7xl items-center px-4 sm:min-h-[300px] sm:px-6 lg:min-h-[380px] lg:px-8">
          <h1 className="max-w-4xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-[58px]">
            Contact Us For Car Repair Services
          </h1>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:gap-12">
          <div>
            <div className="mb-8">
              <div className="mb-5 flex items-center gap-4">
                <span className="relative h-2 w-10">
                  <span className="absolute left-0 top-0 h-0.5 w-full bg-[#f4070b]" />
                  <span className="absolute bottom-0 left-0 h-0.5 w-7 bg-[#f4070b]" />
                </span>
                <p className="text-base font-black uppercase tracking-wide text-[#f4070b]">
                  Let&apos;s Talk
                </p>
              </div>

              <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-[44px]">
                <span className="text-[#f4070b]">Hello!</span> We Are Waiting for You
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#333333] sm:text-lg">
                Are you looking for top-tier auto repair services? Your hassle is over now.
                Reach out to us for any repair and maintenance services by experts.
              </p>
            </div>

            <div className="space-y-5">
              {contactCards.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-md transition-colors"
                  target={label === "Location" ? "_blank" : undefined}
                  rel={label === "Location" ? "noreferrer" : undefined}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f4070b] text-white ring-4 ring-[#f4070b]/10 transition-transform group-hover:scale-105">
                    <Icon size={22} strokeWidth={2.6} />
                  </span>
                  <span>
                    <span className="block text-lg font-black text-[#f4070b]">
                      {label}
                    </span>
                    <span className="mt-1 block break-words text-xl font-black leading-tight text-black sm:text-2xl">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <p className="mr-2 text-2xl font-black">Follow Us:</p>
              {socialLinks.map(({ label, text }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f1f1] text-black transition-colors hover:bg-[#f4070b] hover:text-white"
                >
                  <span className="text-sm font-black uppercase">{text}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="rounded-2xl bg-[#f4f4f4] p-5 sm:p-8 lg:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="h-14 rounded-md border border-black/10 bg-white px-5 text-base font-semibold text-black outline-none transition focus:border-[#f4070b]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="h-14 rounded-md border border-black/10 bg-white px-5 text-base font-semibold text-black outline-none transition focus:border-[#f4070b]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="h-14 rounded-md border border-black/10 bg-white px-5 text-base font-semibold text-black outline-none transition focus:border-[#f4070b]"
              />
              <select
                name="subject"
                defaultValue=""
                className="h-14 rounded-md border border-black/10 bg-white px-5 text-base font-semibold text-[#7b8290] outline-none transition focus:border-[#f4070b]"
              >
                <option value="" disabled>
                  Select Your Subject
                </option>
                <option>Car Repair</option>
                <option>Maintenance</option>
                <option>Diagnostics</option>
                <option>Bodywork</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              className="mt-4 min-h-[180px] w-full rounded-md border border-black/10 bg-white px-5 py-4 text-base font-semibold text-black outline-none transition focus:border-[#f4070b] lg:min-h-[220px]"
            />
            <button
              type="submit"
              className="mt-5 inline-flex h-14 min-w-[190px] items-center justify-center rounded-md bg-[#f4070b] px-7 text-sm font-black uppercase tracking-wide text-white shadow-md shadow-black/15 transition-colors hover:bg-black"
            >
              Submit Message
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#fafafa] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.24fr_0.76fr]">
          <div className="text-center lg:text-left">
            <p className="text-3xl font-black">Good</p>
            <div className="mt-2 flex justify-center gap-1 text-[#ffc928] lg:justify-start">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={20} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-2 text-lg">
              Based On <span className="font-black">1K+ Reviews</span>
            </p>
            <p className="mt-3 text-4xl font-medium tracking-tight">
              <span className="text-[#4285f4]">G</span>
              <span className="text-[#ea4335]">o</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </p>
          </div>

          <div>
            <article className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-black/5 sm:px-8">
              <div className="flex gap-1 text-[#ffd72f]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-base italic leading-7 text-[#2e2e2e] sm:text-lg">
                Very good and fast service. I had a bumper scratch which needed to be repaired.
                The work was carried out quickly and had my car ready the following day.
                Relatively good pricing- will definitely recommend
              </p>
              <div className="mt-5 flex items-end justify-between gap-6">
                <p className="text-lg font-black text-[#2d2d2d]">Jermin Simon</p>
                <span className="text-3xl font-black text-[#4285f4]">G</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative h-[320px] overflow-hidden border-t border-black/10 lg:h-[420px]">
        <iframe
          title="142 Bentworth Road London map"
          src="https://www.google.com/maps?q=142%20Bentworth%20Rd%2C%20London%20W12%207AH&output=embed"
          loading="lazy"
          className="h-full w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <a
        href="https://wa.me/442033371831"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[120] flex items-center gap-3"
        aria-label="Chat on WhatsApp"
      >
        <span className="hidden rounded-lg bg-white px-4 py-2 text-base text-[#3b3b3b] shadow-lg sm:block">
          Whatsapp
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#39e75f] text-white shadow-xl">
          <MessageCircle size={32} />
        </span>
      </a>
    </main>
  );
};

export default Page;
