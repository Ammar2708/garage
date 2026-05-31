import React from 'react';
import Image from 'next/image';
import { 
  CircleDollarSign, 
  ClipboardCheck, 
  UserCheck, 
  ShieldCheck, 
  CalendarCheck2,
  Phone,
} from 'lucide-react';

const features = [
  { id: 1, title: "Clear Pricing", icon: <CircleDollarSign className="h-8 w-8" /> },
  { id: 2, title: "Fast Quotes", icon: <ClipboardCheck className="h-8 w-8" /> },
  { id: 3, title: "Skilled Technicians", icon: <UserCheck className="h-8 w-8" /> },
  { id: 4, title: "Quality Work", icon: <ShieldCheck className="h-8 w-8" /> },
  { id: 5, title: "Flexible Booking", icon: <CalendarCheck2 className="h-8 w-8" /> },
];

const CarRepairLanding = () => {
  return (
    <div className="font-sans text-gray-900">
      <section className="relative overflow-hidden bg-white py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-8">
          
          <div className="z-10">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-red-600">
              Expert Car Repair
            </span>
            <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Reliable repairs that keep your car moving.
            </h1>
            
            <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-gray-600">
              <p>
                From MOT checks and servicing to diagnostics and repairs, our team keeps the process simple, clear, and efficient.
              </p>
              <p>
                We inspect the issue, explain the work, and provide a fair quote before any repair begins.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-[#111] shadow-2xl lg:min-h-[430px]">
              <Image
                src="/imgc1.webp"
                alt="Mechanic working on a car"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              
                
            </div>
            
            <div className="absolute -bottom-8 left-4 right-4 rounded-xl bg-red-600 p-5 text-white shadow-xl sm:left-5 sm:right-5 sm:p-6 md:left-8 md:right-auto md:w-80">
              <h2 className="text-sm font-black uppercase tracking-[0.16em]">Free Quote</h2>
              <a href="tel:+441784240000" className="mt-2 block text-2xl font-black hover:underline">
                +44 1784 240000
              </a>
              <p className="mt-3 text-sm leading-6 text-white/85">
                Quick help for MOT, servicing, diagnostics, and repairs.
              </p>
              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-black transition-transform hover:-translate-y-0.5">
                <Phone size={18} /> Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 pb-14 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {features.map((feature) => (
              <div key={feature.id} className="group rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-transform hover:-translate-y-1">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gray-100 text-zinc-800 transition-colors group-hover:bg-red-600 group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-sm font-black leading-snug text-gray-800">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default CarRepairLanding;
