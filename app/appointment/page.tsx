"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CarFront,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  Wrench,
} from "lucide-react";

const repairServices = [
  "MOT",
  "Full Car Service",
  "Interim Car Service",
  "Car Diagnostics",
  "Brake Pad Replacement",
  "Engine Repair",
  "Gearbox Repair",
  "Clutch Replacement",
  "AC Repair",
  "Body Repair",
  "Wheel Alignment",
  "Tyre Fitting",
];

const contactCards = [
  {
    icon: Phone,
    title: "Give us a call",
    detail: "+44 1784 240000",
    href: "tel:+441784240000",
  },
  {
    icon: Mail,
    title: "Contact via email",
    detail: "info@taylormot.co.uk",
    href: "mailto:info@taylormot.co.uk",
  },
  {
    icon: MapPin,
    title: "Visit the garage",
    detail: "32-34 Feltham Rd, Ashford TW15 1DL",
    href: "https://www.google.com/maps/search/?api=1&query=32-34+Feltham+Rd+Ashford+TW15+1DL+United+Kingdom",
  },
];

export default function AppointmentPage() {
  return (
    <main className="bg-white text-black">
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src="/imgi_51_Book-Appointment-Hero-Section-Background-Image.webp"
          alt="Customer booking a car repair appointment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_38%,rgba(0,0,0,0.38)_64%,rgba(0,0,0,0.7)_100%)]" />

        <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em]">
              <CalendarDays className="h-4 w-4" />
              Book Online
            </span>
            <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Fix It Right, Fix It Fast - Book Your Appointment
            </h1>
            <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-white/85">
              Tell us what your car needs and our team will confirm the next suitable slot. We handle MOT,
              servicing, diagnostics, bodywork, and mechanical repair with clear advice before work begins.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+441784240000"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-red-600 px-6 text-sm font-black text-white transition hover:bg-red-700"
              >
                <Phone className="h-5 w-5" />
                Click to Call Us
              </a>
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-black text-white transition hover:bg-white hover:text-black"
              >
                Back To Home
              </Link>
            </div>
          </div>

          <form className="rounded-2xl bg-white p-5 text-black shadow-2xl sm:p-7 lg:p-8">
            <div className="text-center">
              <h2 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Appoint Us Instantly
              </h2>
              <p className="mt-2 text-base font-black sm:text-lg">
                We <span className="text-red-600">Meet</span> Your{" "}
                <span className="text-red-600">Needs!</span>
              </p>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-black">
                Full Name <span className="text-red-600">*</span>
                <input
                  required
                  type="text"
                  placeholder="Your Name Here"
                  className="min-h-[52px] rounded-md border border-gray-200 bg-gray-100 px-4 text-sm font-semibold text-black outline-none transition placeholder:text-gray-500 focus:border-red-600 focus:bg-white"
                />
              </label>

              <label className="grid gap-2 text-sm font-black">
                Email Address <span className="text-red-600">*</span>
                <input
                  required
                  type="email"
                  placeholder="Add email"
                  className="min-h-[52px] rounded-md border border-gray-200 bg-gray-100 px-4 text-sm font-semibold text-black outline-none transition placeholder:text-gray-500 focus:border-red-600 focus:bg-white"
                />
              </label>

              <label className="grid gap-2 text-sm font-black">
                Telephone <span className="text-red-600">*</span>
                <input
                  required
                  type="tel"
                  placeholder="+44 1784 240000"
                  className="min-h-[52px] rounded-md border border-gray-200 bg-gray-100 px-4 text-sm font-semibold text-black outline-none transition placeholder:text-gray-500 focus:border-red-600 focus:bg-white"
                />
              </label>

              <label className="grid gap-2 text-sm font-black">
                Car Reg Number <span className="text-red-600">*</span>
                <input
                  required
                  type="text"
                  placeholder="Car Registration Number"
                  className="min-h-[52px] rounded-md border border-gray-200 bg-gray-100 px-4 text-sm font-semibold uppercase text-black outline-none transition placeholder:normal-case placeholder:text-gray-500 focus:border-red-600 focus:bg-white"
                />
              </label>

              <label className="grid gap-2 text-sm font-black">
                Date <span className="text-red-600">*</span>
                <input
                  required
                  type="date"
                  className="min-h-[52px] rounded-md border border-gray-200 bg-gray-100 px-4 text-sm font-semibold text-black outline-none transition focus:border-red-600 focus:bg-white"
                />
              </label>

              <label className="grid gap-2 text-sm font-black">
                Which Repair Service Required <span className="text-red-600">*</span>
                <select
                  required
                  defaultValue=""
                  className="min-h-[52px] rounded-md border border-gray-200 bg-gray-100 px-4 text-sm font-semibold text-gray-600 outline-none transition focus:border-red-600 focus:bg-white"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {repairServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-black">
              Message <span className="text-red-600">*</span>
              <textarea
                required
                placeholder="Enter Your Message"
                rows={5}
                className="rounded-md border border-gray-200 bg-gray-100 px-4 py-3 text-sm font-semibold text-black outline-none transition placeholder:text-gray-500 focus:border-red-600 focus:bg-white"
              />
            </label>

            <button
              type="submit"
              className="mt-7 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-md bg-red-600 px-6 text-base font-black text-white transition hover:bg-black"
            >
              Send Message
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-md border border-gray-200 bg-white p-5 shadow-sm transition hover:border-red-600"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-red-600 text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span>
                    <strong className="block text-lg font-black">{card.title}</strong>
                    <span className="mt-1 block text-base font-semibold text-gray-700">{card.detail}</span>
                  </span>
                </a>
              );
            })}
          </div>

          <div className="rounded-md bg-black p-6 text-white sm:p-7 lg:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: CarFront, title: "Share Vehicle Details", text: "Send your registration and the issue you want checked." },
                { icon: Wrench, title: "Get Clear Advice", text: "We confirm the service, quote path, and workshop availability." },
                { icon: MessageSquareText, title: "Visit With Confidence", text: "Arrive at the agreed time and let the team handle the repair." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-md border border-white/10 p-5">
                    <Icon className="h-9 w-9 text-red-600" />
                    <h3 className="mt-4 text-lg font-black leading-tight">{item.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-white/75">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
