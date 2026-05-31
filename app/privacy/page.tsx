"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Minus, Plus } from "lucide-react";

const privacySections = [
  {
    title: "Introduction",
    body: [
      <>
        This website is operated by{" "}
        <Link href="/" className="font-black text-[#f4070b] hover:text-white">
          https://londonmotorsports.co.uk/
        </Link>
        , well-known as LMS (London Motor Sports Ltd), with a registered VAT number:{" "}
        <strong>GB 340315935</strong> and company number <strong>11696697</strong>. Our only garage is located
        at <strong>32-34 Feltham Rd, Ashford TW15 1DL, United Kingdom</strong>. We provide car repair services and this privacy policy
        explains what information we collect and how we use it.
      </>,
      "We care about the privacy of our visitors and customers. We use personal information only to respond to enquiries, manage bookings, provide services, and meet legal or operational requirements.",
      <>
        If you have any queries, concerns, or privacy issues, contact us at{" "}
        <a href="mailto:sm@londonmotorsports.co.uk" className="font-black hover:text-[#f4070b]">
          sm@londonmotorsports.co.uk
        </a>{" "}
        or call{" "}
        <a href="tel:+441784240000" className="font-black hover:text-[#f4070b]">
          +44 1784 240000
        </a>
        .
      </>,
    ],
  },
  {
    title: "What Personal Data Do We Collect?",
    body: [
      "We may collect your name, phone number, email address, vehicle details, appointment details, messages you send us, and information needed to quote, book, or complete a garage service.",
      "If you use our website, we may also collect basic technical information such as pages visited, browser type, device information, and approximate location data through analytics or cookies.",
    ],
  },
  {
    title: "Why Do We Retain Personal Data?",
    body: [
      "We retain personal data so we can manage customer enquiries, maintain service records, provide aftercare, deal with complaints, meet tax and accounting obligations, and protect the business from fraud or misuse.",
      "We keep information only for as long as it is reasonably needed for the purpose it was collected, unless the law requires a longer retention period.",
    ],
  },
  {
    title: "How Do We Process Personal Data?",
    body: [
      "We process data fairly and transparently. Your information may be used to reply to messages, confirm appointments, prepare estimates, order parts, complete repairs, send updates, and improve customer support.",
      "Access to customer information is limited to people who need it for business purposes, such as workshop staff, customer support, administration, or approved service providers.",
    ],
  },
  {
    title: "For Our Legitimate Interests Including",
    body: [
      "We may use your information for legitimate business interests such as maintaining service quality, responding to reviews or complaints, keeping security records, improving our website, and managing customer relationships.",
      "We balance these interests with your privacy rights and avoid using your data in a way that would be unexpected or unfair.",
    ],
  },
  {
    title: "Do We Share Personal Data?",
    body: [
      "We do not sell your personal information. We may share limited information with trusted suppliers, payment providers, IT support, insurers, legal advisers, or public authorities where necessary.",
      "Where third parties help us operate the business, they are expected to handle personal data securely and only for the agreed purpose.",
    ],
  },
  {
    title: "How Do We Use Cookies and Tracking Technologies?",
    body: [
      "Our website may use cookies or similar technologies to keep the site working, understand visitor activity, improve performance, and support marketing or analytics where permitted.",
      "You can usually manage or block cookies through your browser settings. Some website features may not work as expected if essential cookies are disabled.",
    ],
  },
  {
    title: "What Privacy Choices Are Available To You?",
    body: [
      "You can ask us to update incorrect information, stop certain communications, explain how your data is used, or delete information where we no longer need to keep it.",
      "You can also control cookies through your browser and choose whether to provide optional information when contacting us.",
    ],
  },
  {
    title: "What Are Your Rights?",
    body: [
      "Depending on the circumstances, you may have the right to access your personal data, request correction, request deletion, object to processing, restrict processing, or ask for a copy of your information.",
      "To make a privacy request, contact us using the details on this page. We may need to verify your identity before responding.",
    ],
  },
  {
    title: "How Do We Protect Your Data?",
    body: [
      "We use practical technical and organisational measures to protect personal information from unauthorised access, loss, misuse, alteration, or disclosure.",
      "No website or digital system can be guaranteed as completely secure, but we review our processes and use sensible safeguards for the information we hold.",
    ],
  },
  {
    title: "Can Children Use Our Services?",
    body: [
      "Our garage services are intended for vehicle owners, drivers, and adults arranging repairs. We do not knowingly collect personal information from children.",
      "If you believe a child has provided us with personal information, please contact us so we can review and remove it where appropriate.",
    ],
  },
  {
    title: "What Else Should You Know?",
    body: [
      "We may update this privacy policy from time to time by changing this page. Please check this page occasionally to make sure you are happy with any updates.",
      "This policy should be read together with any terms, booking information, or notices shown elsewhere on our website.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      <>
        For privacy questions, email{" "}
        <a href="mailto:sm@londonmotorsports.co.uk" className="font-black text-[#f4070b] hover:text-white">
          sm@londonmotorsports.co.uk
        </a>{" "}
        or call{" "}
        <a href="tel:+441784240000" className="font-black text-[#f4070b] hover:text-white">
          +44 1784 240000
        </a>
        .
      </>,
      "You can also write to or visit London Motor Sports Ltd, 32-34 Feltham Rd, Ashford TW15 1DL, United Kingdom.",
    ],
  },
  {
    title: "Definitions",
    body: [
      "Personal data means information that can identify a person directly or indirectly. Processing means collecting, storing, using, sharing, deleting, or otherwise handling that information.",
      "We, us, and our refer to London Motor Sports Ltd / TAYLORMOT. You and your refer to website visitors, customers, and people who contact our garage.",
    ],
  },
];

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-black leading-none md:text-6xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="px-4 py-14 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1700px] space-y-10">
          {privacySections.map((section, index) => {
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
