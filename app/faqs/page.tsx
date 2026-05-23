"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Clock, MessageCircle, Phone, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const faqGroups = [
  {
    title: "Bookings & Visits",
    kicker: "Before you arrive",
    faqs: [
      {
        question: "Do I need an appointment before visiting TAYLORMOT?",
        answer:
          "Appointments are best because they help us prepare the right technician and bay for your car. If the issue is urgent, call us first and we will tell you the quickest available slot.",
      },
      {
        question: "Can I wait while my car is checked?",
        answer:
          "For quick inspections and smaller jobs, waiting is usually fine. For diagnostics, MOT work, or body repair, we recommend leaving the vehicle with us so the team can inspect it properly.",
      },
      {
        question: "What should I bring when dropping off my car?",
        answer:
          "Bring your key, locking wheel nut if you have one, and any notes about the problem. If the warning light appears only sometimes, a photo or short video can help us diagnose it faster.",
      },
    ],
  },
  {
    title: "MOT & Servicing",
    kicker: "Keeping it road-ready",
    faqs: [
      {
        question: "Can you handle MOT and service together?",
        answer:
          "Yes. Many customers book MOT and service together so the car can be inspected, serviced, and advised on in one visit. We will contact you before any extra repair work is carried out.",
      },
      {
        question: "How often should I service my car?",
        answer:
          "Most cars benefit from a yearly service or servicing by mileage, whichever comes first. If you drive short city journeys, your brakes, oil, tyres, and battery may need closer attention.",
      },
      {
        question: "Will you explain what failed or needs repair?",
        answer:
          "Yes. We keep communication clear and practical. If something needs work, we explain the issue, the likely cause, and the repair options before you approve the job.",
      },
    ],
  },
  {
    title: "Bodywork & Repairs",
    kicker: "Paint, panels, and mechanical work",
    faqs: [
      {
        question: "Do you repair scratches, dents, bumpers, and accident damage?",
        answer:
          "Yes. We handle bodywork repairs from light scratches and bumper scuffs to larger accident repair jobs. We can inspect the damage and give you a repair plan before work begins.",
      },
      {
        question: "Can you source replacement parts?",
        answer:
          "In most cases, yes. We can advise whether a new, used, or repaired part makes sense depending on condition, availability, budget, and how quickly you need the car back.",
      },
      {
        question: "How long will my repair take?",
        answer:
          "Timing depends on the repair type, parts availability, and paint or curing time. Small repairs can be quick, while bodywork and diagnostics may need longer. We will give you a realistic estimate after inspection.",
      },
    ],
  },
];

const quickFacts = [
  {
    icon: Clock,
    title: "Garage Hours",
    text: "Mon-Fri 7:00 AM-5:30 PM, Sat 7:00 AM-3:30 PM",
  },
  {
    icon: Phone,
    title: "Talk To Us",
    text: "+44 20 3337 1831",
  },
  {
    icon: ShieldCheck,
    title: "Clear Approval",
    text: "No extra repair work starts before you confirm it.",
  },
];

const FaqsPage = () => {
  const [openItem, setOpenItem] = useState("Bookings & Visits-0");

  return (
    <main className="bg-white text-[#242424]">
      <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f4070b]">TAYLORMOT Help Desk</p>
              <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl lg:text-[46px]">
                Answers Before Your Car Reaches The Ramp
              </h1>
            </div>

            <div className="border-l-4 border-[#f4070b] pl-6">
              <p className="text-base font-medium leading-7 text-[#555]">
                Practical answers for MOT bookings, servicing, diagnostics, and body repair. If your question is
                specific to your car, contact the workshop and we will guide you from there.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div key={fact.title} className="border border-[#e4e4e4] bg-[#fafafa] p-5">
                  <Icon className="h-8 w-8 text-[#f4070b]" strokeWidth={2.3} />
                  <h2 className="mt-4 text-base font-black text-black">{fact.title}</h2>
                  <p className="mt-2 text-xs font-medium leading-6 text-[#5d5d5d]">{fact.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[310px_1fr]">
          <aside className="h-fit bg-[#0b0b0d] p-7 text-white">
            <Wrench className="h-10 w-10 text-[#f4070b]" strokeWidth={2} />
            <h2 className="mt-5 text-xl font-black leading-tight">Still unsure what your car needs?</h2>
            <p className="mt-4 text-xs font-medium leading-6 text-[#bfc1c7]">
              Send a short message with your car model, the issue, and any dashboard warning lights. We will help you
              choose the right next step.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-12 items-center justify-center bg-[#f4070b] px-6 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-red-700"
            >
              Contact Workshop
            </Link>
          </aside>

          <div className="space-y-8">
            {faqGroups.map((group) => (
              <section key={group.title} className="border border-[#e1e1e1]">
                <div className="flex flex-col gap-2 border-b border-[#e1e1e1] bg-[#f7f7f7] px-5 py-5 sm:px-7">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f4070b]">{group.kicker}</p>
                  <h2 className="text-xl font-black text-black">{group.title}</h2>
                </div>

                <div>
                  {group.faqs.map((faq, index) => {
                    const id = `${group.title}-${index}`;
                    const isOpen = openItem === id;

                    return (
                      <div key={faq.question} className="border-b border-[#e8e8e8] last:border-b-0">
                        <button
                          type="button"
                          onClick={() => setOpenItem(isOpen ? "" : id)}
                          className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                        >
                          <span className="text-base font-black leading-7 text-black">{faq.question}</span>
                          <ChevronDown
                            className={`h-6 w-6 shrink-0 text-[#f4070b] transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            strokeWidth={2.5}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-6 sm:px-7">
                            <p className="max-w-4xl text-sm font-medium leading-7 text-[#555]">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4070b] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Sparkles className="h-9 w-9" strokeWidth={2.2} />
            <div>
              <h2 className="text-xl font-black">Need a quick workshop answer?</h2>
              <p className="mt-1 text-xs font-medium text-white/85">Call us before you travel and we will point you in the right direction.</p>
            </div>
          </div>
          <a href="tel:+442033371831" className="inline-flex min-h-12 items-center justify-center bg-black px-6 text-sm font-black uppercase tracking-wide">
            Call Now
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/442033371831"
        aria-label="Contact TAYLORMOT on WhatsApp"
        className="fixed bottom-7 right-6 z-50 flex items-center gap-3"
      >
        <span className="hidden rounded-xl bg-white px-5 py-3 text-xl font-medium text-[#333] shadow-[0_8px_24px_rgba(0,0,0,0.16)] sm:block">
          Whatsapp
        </span>
        <span className="grid h-20 w-20 place-items-center rounded-full bg-[#39e75f] text-white shadow-[0_10px_28px_rgba(57,231,95,0.35)]">
          <MessageCircle className="h-11 w-11" strokeWidth={2.5} />
        </span>
      </a>
    </main>
  );
};

export default FaqsPage;
