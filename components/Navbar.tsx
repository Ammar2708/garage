"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BatteryCharging,
  CalendarDays,
  ChevronDown,
  CircleDot,
  Cog,
  Droplets,
  MapPin,
  Paintbrush,
  Settings,
} from "lucide-react";

const whoWeAreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Garage Awards", href: "/garage-awards" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blogs", href: "/blogs" },
  { label: "Pricing & Coupons", href: "/price" },
];

const whatWeDoLinks = [
  { label: "Auto Repair & Maintenance", href: "/auto" },
  { label: "Car MOT Check", href: "/mot" },
  { label: "Fleet Maintenance", href: "/fleet" },
  { label: "Car Recovery & Tow", href: "/recovery" },
  { label: "Full Car Service", href: "/wash" },
  { label: "Interim Car Service", href: "/interim" },
];

const repairCategories = [
  {
    name: "Car Mechanical Services",
    icon: Settings,
    title: "Mechanical Repair",
    href: "/auto",
    items: [
      "Engine Replacement",
      "Brake Pad Replacement",
      "Car Exhaust Repair",
      "Fuel System Repair",
      "Timing Belt Replacement",
      "Turbo Replacement",
      "EV Services",
    ],
  },
  {
    name: "Car Body Repair & Paint",
    icon: Paintbrush,
    title: "Car Body Shop",
    href: "/auto",
    items: [
      "Car Dent Repair",
      "Car Scratch Repair",
      "Bumper Repair & Replacement",
      "Car Accident Repair",
      "Panel Beating & Replacement",
      "Car Paint Repair",
      "Windscreen Replacement & Repair",
      "Wing Mirror Replacement",
      "Car Window Tint",
    ],
  },
  {
    name: "Car Electrician Repairs",
    icon: BatteryCharging,
    title: "Auto Electrician Repairs",
    href: "/auto",
    items: [
      "Car Battery Replacement",
      "Alternator Repair & Replacement",
      "Starter Motor Repair & Replacement",
      "Ignition System Repairs",
    ],
  },
  {
    name: "Oil Change Services",
    icon: Droplets,
    title: "Fluid & Oil Change Services",
    href: "/auto",
    items: [
      "Engine Oil Change",
      "Brake Fluid Change",
      "Engine Coolant Replacement",
      "Transmission Fluid Change",
      "Power Steering Fluid Change",
      "Fuel Injector Replacement",
      "Engine Oil Leakage Repairs",
      "Car Aircon Regas",
    ],
  },
  {
    name: "Wheel & Tyres Services",
    icon: CircleDot,
    title: "Wheel and Tyre Service",
    href: "/auto",
    items: [
      "Tyre Fitting & Replacement",
      "Wheel Alignment & Balancing",
      "Alloy Wheel Refurbishment",
      "Tyre Puncture Repair",
      "Wheel Bearing Replacement",
    ],
  },
  {
    name: "Other Major Services",
    icon: Cog,
    title: "Other Major Services",
    href: "/auto",
    items: ["Car Diagnostics Services", "MOT", "Full Car Servicing", "Interim Car Service"],
  },
];

const serviceHref = (service: string) => {
  if (service === "Tyre Fitting & Replacement") return "/w-fitting";
  if (service === "Wheel Alignment & Balancing") return "/alling";
  if (service === "MOT") return "/mot";
  if (service === "Full Car Servicing") return "/wash";
  if (service === "Interim Car Service") return "/interim";
  return "/auto";
};

const Navbar = () => {
  const [activeRepairCategory, setActiveRepairCategory] = useState(repairCategories[0]);

  return (
    <nav className="w-full font-sans">
      <div className="flex items-center justify-between border-b border-white/5 bg-[#17181C] px-4 py-2 text-[11px] text-[#A7A9B0] md:px-10">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-[#D61F2C]" />
          <span>142 Bentworth Rd, London W12 7AH</span>
          <Link href="#" className="ml-1 text-[#2C4F9E] underline transition-colors hover:text-[#D61F2C]">
            (Get Directions)
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-2">
            <span className="font-medium">Call Now</span>
            <span className="text-sm font-bold text-[#D61F2C]">+44 20 3337 1831</span>
          </div>
          <div className="flex gap-4 opacity-80">
            <span className="cursor-pointer transition-colors hover:text-[#2C4F9E]">f</span>
            <span className="cursor-pointer transition-colors hover:text-[#2C4F9E]">X</span>
            <span className="cursor-pointer transition-colors hover:text-[#2C4F9E]">in</span>
            <span className="cursor-pointer transition-colors hover:text-[#2C4F9E]">ig</span>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-[100] flex items-center justify-between bg-[#0B0B0D] px-4 py-3 text-[#F5F5F5] shadow-2xl md:px-10">
        <Link href="/" className="group flex flex-col items-start">
          <div className="relative flex flex-col items-center">
            <div className="relative mb-1 h-3 w-24">
              <div className="absolute left-0 top-0 h-full w-full -rotate-2 scale-x-110 rounded-[100%] border-t-2 border-[#D61F2C]" />
              <div className="absolute bottom-0 left-4 h-full w-[80%] rotate-2 scale-x-110 rounded-[100%] border-b-2 border-[#2C4F9E] opacity-80" />
            </div>
            <h1 className="text-xl font-light leading-none tracking-[0.2em] md:text-2xl">
              TAYLOR<span className="font-bold">MOT</span>
            </h1>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-[13px] font-bold uppercase tracking-widest lg:flex">
          <div className="group relative py-4">
            <button className="flex items-center gap-1 transition-colors hover:text-[#D61F2C]">
              Who We Are <ChevronDown size={15} className="opacity-70" />
            </button>
            <div className="absolute left-0 top-full hidden w-56 border-t-4 border-[#D61F2C] bg-white text-[#1E2024] shadow-2xl group-hover:block">
              {whoWeAreLinks.map((link) => (
                <Link key={link.label} href={link.href} className="block border-b border-gray-100 px-6 py-3 text-[12px] font-bold transition-colors hover:bg-gray-50 hover:text-[#2C4F9E]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative py-4 text-[#D61F2C]">
            <button className="flex items-center gap-1">
              What We Do <ChevronDown size={15} />
            </button>
            <div className="absolute left-0 top-full hidden w-64 border-t-4 border-[#D61F2C] bg-white text-[#1E2024] shadow-2xl group-hover:block">
              {whatWeDoLinks.map((item) => (
                <Link key={item.label} href={item.href} className="block border-b border-gray-100 px-6 py-3 text-[12px] font-bold transition-colors hover:bg-gray-50 hover:text-[#2C4F9E]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative py-4">
            <button className="flex items-center gap-1 transition-colors hover:text-[#D61F2C]">
              Repair Services <ChevronDown size={15} className="opacity-70 transition group-hover:rotate-180" />
            </button>
            <div className="absolute -left-64 top-full z-[120] hidden w-[48rem] rounded-b-xl border-t-4 border-[#D61F2C] bg-white text-[#1E2024] shadow-2xl group-hover:grid group-hover:grid-cols-[19rem_1fr]">
              <div className="border-r border-gray-100 bg-[#F5F5F5] py-3">
                {repairCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeRepairCategory.name === cat.name;

                  return (
                    <button
                      key={cat.name}
                      type="button"
                      onMouseEnter={() => setActiveRepairCategory(cat)}
                      className={`flex w-full items-center gap-3 border-b border-gray-200 px-5 py-3 text-left text-[12px] font-black normal-case tracking-normal transition ${isActive ? "bg-white text-[#D61F2C]" : "text-gray-600 hover:bg-white hover:text-[#2C4F9E]"}`}
                    >
                      <Icon size={20} strokeWidth={2} className={isActive ? "shrink-0 text-[#D61F2C]" : "shrink-0 text-gray-400"} />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="p-7 normal-case tracking-normal">
                <h3 className="flex items-center justify-between border-b border-red-50 pb-2 text-sm font-black uppercase text-[#D61F2C]">
                  <Link href={activeRepairCategory.href}>{activeRepairCategory.title}</Link>{" "}
                  <Link href={activeRepairCategory.href} className="text-[10px] font-black underline">
                    (view page)
                  </Link>
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-x-6">
                  {activeRepairCategory.items.map((service) => (
                    <Link key={service} href={serviceHref(service)} className="block border-b border-gray-100 py-2.5 text-[12px] font-semibold text-gray-700 transition hover:text-[#2C4F9E]">
                      {service}
                    </Link>
                  ))}
                </div>
                <Link href="/contact" className="mt-5 inline-flex rounded-md bg-[#D61F2C] px-6 py-3 text-[12px] font-black uppercase text-white transition hover:bg-red-700">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contact" className="transition-colors hover:text-[#2C4F9E]">
            Contact
          </Link>
        </div>

        <Link href="/appointment" className="flex items-center gap-3 rounded-lg bg-[#D61F2C] px-5 py-2.5 shadow-lg shadow-red-900/20 transition-all duration-300 hover:bg-red-700">
          <CalendarDays size={28} />
          <div className="text-left font-black leading-tight">
            <p className="text-[10px] uppercase tracking-tighter opacity-90">Book</p>
            <p className="text-sm uppercase tracking-tighter">Appointment</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
