"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Minus, Plus } from "lucide-react";

const termsSections = [
  {
    title: "Introduction",
    body: [
      <>
        This website is operated by{" "}
        <Link href="/" className="font-black text-[#f4070b] hover:text-white">
          https://londonmotorsports.co.uk/
        </Link>
        , well-known as LMS (London Motor Sports Ltd), with a registered VAT number:{" "}
        <strong>GB 340315935</strong> and company number <strong>11696697</strong>. We are London Motor Sports
        Ltd, doing business as London Motor Sports (&quot;LMS&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), registered in England at{" "}
        <strong>32-34 Feltham Rd, Ashford TW15 1DL, United Kingdom</strong>.
      </>,
      "These Terms and Conditions explain the rules for using our website, booking our garage services, and dealing with London Motor Sports. By accessing the site or using our services, you agree to be bound by these legal terms.",
      "London Motor Sports Ltd is synonymous with excellence in car repair and maintenance. Established in 2018 and located at 32-34 Feltham Rd, Ashford TW15 1DL, United Kingdom, our garage stands among the city's local car repair garages.",
      <>
        You can contact us by phone at{" "}
        <a href="tel:+441784240000" className="font-black text-[#f4070b] hover:text-white">
          +44 1784 240000
        </a>
        , by email at{" "}
        <a href="mailto:sm@londonmotorsports.co.uk" className="font-black hover:text-[#f4070b]">
          sm@londonmotorsports.co.uk
        </a>
        , or by mail to 32-34 Feltham Rd, Ashford TW15 1DL, United Kingdom.
      </>,
      "If you do not agree with these legal terms, you must discontinue use of the services immediately.",
    ],
  },
  {
    title: "When These Terms Apply?",
    body: [
      "These terms apply whenever you visit our website, contact us, request an estimate, book a vehicle inspection, approve repair work, buy parts through us, or use any related services provided by London Motor Sports.",
      "Additional written terms may apply to specific repair work, bodywork, diagnostics, warranty claims, trade work, or promotional offers.",
    ],
  },
  {
    title: "Our Intellectual Property",
    body: [
      "All website content, branding, text, images, layouts, service descriptions, and other materials are owned by or licensed to London Motor Sports unless stated otherwise.",
      "You may view and use the website for personal and non-commercial purposes. You must not copy, reproduce, sell, scrape, or reuse our content without written permission.",
    ],
  },
  {
    title: "What Is Meant By Services?",
    body: [
      "Services means the website, customer support, appointments, vehicle inspections, diagnostics, mechanical repairs, MOT-related work, body repairs, paintwork, parts supply, and any other garage service we agree to provide.",
      "The exact scope of a service depends on the booking, inspection findings, written estimate, invoice, and any work that you approve.",
    ],
  },
  {
    title: "Terminology",
    body: [
      "You and your refer to the customer, visitor, vehicle owner, authorised driver, or person arranging work. We, us, our, LMS, and London Motor Sports refer to London Motor Sports Ltd.",
      "Vehicle means the car or vehicle presented to us for inspection, repair, servicing, or other work.",
    ],
  },
  {
    title: "Data Usage for Promotional Activities",
    body: [
      "We may use contact details to respond to enquiries, send service updates, and share relevant offers where permitted. You can ask us to stop promotional messages at any time.",
      "Personal information is handled in line with our Privacy Policy and applicable data protection laws.",
    ],
  },
  {
    title: "How We Use Your Data",
    body: [
      "We use customer and vehicle data to manage bookings, prepare quotes, order parts, complete repairs, maintain service records, process payments, respond to complaints, and meet legal obligations.",
      "For more detail about how personal data is collected, used, retained, and protected, please read our Privacy Policy.",
    ],
  },
  {
    title: "Hourly Rate Work",
    body: [
      "Some work may be charged by time spent, especially diagnostics, investigation work, complex electrical faults, dismantling, or repair work where the full issue cannot be known in advance.",
      "We will explain expected charges where possible, but additional time may be required if faults are hidden, intermittent, or more complex than first expected.",
    ],
  },
  {
    title: "Fixed Price Work",
    body: [
      "Where we agree a fixed price, that price applies to the work described in the estimate or invoice. It does not include extra faults, parts, labour, or hidden damage discovered later unless expressly stated.",
      "If extra work is needed, we will contact you before proceeding where practical.",
    ],
  },
  {
    title: "Offers and Incentives",
    body: [
      "Offers, discounts, coupons, and incentives are subject to availability and may be changed or withdrawn without notice.",
      "Promotional offers cannot usually be combined with other offers unless we confirm this in writing.",
    ],
  },
  {
    title: "Material and Parts Collection",
    body: [
      "Parts availability can affect repair times. We may source new, used, aftermarket, or original equipment parts depending on the agreed repair, availability, budget, and suitability.",
      "Special order parts may require payment in advance and may not be refundable once ordered.",
    ],
  },
  {
    title: "Invoices and Payments",
    body: [
      "Payment is due when work is complete and before the vehicle is released, unless a different arrangement has been agreed in writing.",
      "Invoices may include labour, parts, consumables, diagnostic time, storage, recovery, VAT where applicable, and other approved charges.",
    ],
  },
  {
    title: "Time Keeping",
    body: [
      "We aim to complete work within the estimated time, but repair times are estimates only. Delays can happen because of parts supply, additional faults, paint curing, supplier delays, or workload.",
      "We will keep you updated where a delay materially affects the expected completion time.",
    ],
  },
  {
    title: "Cancellation",
    body: [
      "Please tell us as soon as possible if you need to cancel or rearrange a booking. Charges may apply where parts have been ordered, work has started, or a booked slot has been held for you.",
      "If a vehicle is not collected after completion, storage charges may apply after reasonable notice.",
    ],
  },
  {
    title: "Your Satisfaction",
    body: [
      "We want customers to be happy with the work completed. If you have a concern, contact us promptly so we can review the issue and advise on the next step.",
      "Complaints should include your name, vehicle registration, invoice or booking details, and a clear description of the problem.",
    ],
  },
  {
    title: "Guarantee",
    body: [
      "Any guarantee depends on the type of work, parts used, supplier warranty, vehicle condition, and how the vehicle is used after repair.",
      "Guarantees do not cover unrelated faults, misuse, wear and tear, accident damage, customer-supplied parts unless agreed, or faults caused by work carried out elsewhere.",
    ],
  },
  {
    title: "Liability",
    body: [
      "We are responsible for providing services with reasonable care and skill. We are not liable for losses caused by inaccurate information, pre-existing faults, hidden defects, missed appointments, or circumstances outside our reasonable control.",
      "Nothing in these terms limits liability where it would be unlawful to do so.",
    ],
  },
  {
    title: "Title to Goods",
    body: [
      "Parts and goods supplied by us remain our property until paid for in full. We may retain the vehicle or supplied goods where payment remains outstanding, subject to applicable law.",
      "Customer-supplied parts are fitted at the customer's risk unless we agree otherwise in writing.",
    ],
  },
  {
    title: "General",
    body: [
      "We may update these terms from time to time by changing this page. Updated terms apply from the date they are posted unless a different date is stated.",
      "If any part of these terms is found to be invalid, the rest of the terms will continue to apply.",
    ],
  },
  {
    title: "Additional Terms and Conditions for Body Repairs",
    body: [
      "Body repair estimates are based on visible damage and the information available at inspection. Additional damage may be discovered after dismantling, sanding, or paint preparation.",
      "Paint matching, panel alignment, finish quality, and repair methods can be affected by previous repairs, vehicle age, existing paint condition, corrosion, and part availability.",
    ],
  },
  {
    title: "Contact",
    body: [
      <>
        Questions about these Terms and Conditions can be sent to{" "}
        <a href="mailto:sm@londonmotorsports.co.uk" className="font-black text-[#f4070b] hover:text-white">
          sm@londonmotorsports.co.uk
        </a>{" "}
        or by calling{" "}
        <a href="tel:+441784240000" className="font-black text-[#f4070b] hover:text-white">
          +44 1784 240000
        </a>
        .
      </>,
      "You can also write to London Motor Sports Ltd, 32-34 Feltham Rd, Ashford TW15 1DL, United Kingdom.",
    ],
  },
];

export default function TermsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="bg-black text-white">
      <section className="relative min-h-[380px] overflow-hidden md:min-h-[490px]">
        <Image
          src="/imgi_135_car-repair-hero-section-bg.webp"
          alt="Workshop lights"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex min-h-[380px] items-end px-4 pb-16 md:min-h-[490px] md:px-10 lg:px-16">
          <h1 className="text-4xl font-black leading-none md:text-6xl">Terms and Conditions</h1>
        </div>
      </section>

      <section className="px-4 py-14 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1700px] space-y-10">
          {termsSections.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={section.title} className="border border-white/25 bg-black">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`group flex min-h-24 w-full -skew-x-12 items-center justify-between gap-5 px-6 py-5 text-left transition-colors md:px-10 ${
                    isOpen ? "bg-[#f4070b]" : "bg-[#272727] hover:bg-[#333]"
                  }`}
                >
                  <span className="skew-x-12 text-base font-black italic leading-tight sm:text-lg md:text-2xl">
                    {index + 1}. {section.title}
                  </span>
                  <span
                    className={`grid h-12 w-12 shrink-0 skew-x-12 place-items-center ${
                      isOpen ? "bg-black text-white" : "bg-white text-[#272727]"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus className="h-9 w-9" strokeWidth={4} /> : <Plus className="h-9 w-9" strokeWidth={4} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="space-y-5 px-5 py-6 text-base font-semibold leading-8 text-white md:px-8 md:py-7 md:text-lg md:leading-8">
                    {section.body.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <a
        href="https://wa.me/441784240000"
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
}
