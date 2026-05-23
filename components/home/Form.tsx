import Image from "next/image";
import { Check } from "lucide-react";

const benefits = [
  "Repair details confirmed before booking.",
  "Warranted parts for repair and maintenance.",
  "Workshop updates at every key stage.",
  "Guaranteed work for peace of mind.",
  "IMI registered service standards.",
];

const fields = [
  { label: "Full Name", name: "name", type: "text", autoComplete: "name" },
  { label: "Phone Number", name: "phone", type: "tel", autoComplete: "tel" },
  { label: "E-mail Address", name: "email", type: "email", autoComplete: "email" },
  { label: "Car Reg No#", name: "registration", type: "text", autoComplete: "off" },
];

const Form = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-black text-white">
      <Image
        src="/bg1.webp"
        alt="Car repair workshop"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-55"
      />
      <div className="absolute inset-0 bg-[#7b0206]/88" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#8d070a] via-[#790407]/92 to-[#560104]/95" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:py-16">
        <div className="flex flex-col justify-center">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-white/80">
            Appointment Booking
          </span>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
            Professional <span className="text-[#ff080d]">car repair</span> with clear next steps.
          </h2>

          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/90 sm:text-lg">
            Tell us what your vehicle needs and our team will contact you to confirm the repair details,
            availability, and next steps.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-black leading-tight sm:text-3xl">What you get</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm font-black leading-6 sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={4} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form className="rounded-2xl bg-white px-5 py-7 text-black shadow-2xl sm:px-8 lg:px-9 lg:py-9">
          <h2 className="text-center text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Book an <span className="text-[#f4070b]">Appointment</span>
          </h2>

          <div className="mt-7 space-y-4">
            {fields.map((field) => (
              <label key={field.name} className="block">
                <span className="sr-only">{field.label}</span>
                <input
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.label.toUpperCase()}
                  className="h-13 w-full rounded-lg border border-[#f4070b] bg-gray-100 px-5 text-sm font-semibold uppercase text-black outline-none transition-colors placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-[#f4070b]/25 sm:h-14 sm:text-base"
                />
              </label>
            ))}

            <label className="block">
              <span className="sr-only">Repair Details</span>
              <textarea
                name="message"
                rows={4}
                placeholder="REPAIR DETAILS"
                className="min-h-28 w-full resize-y rounded-lg border border-[#f4070b] bg-gray-100 px-5 py-4 text-sm font-semibold uppercase text-black outline-none transition-colors placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-[#f4070b]/25 sm:text-base"
              />
            </label>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#f4070b] px-8 text-base font-black uppercase text-white transition-colors hover:bg-black sm:w-48"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
