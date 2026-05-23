"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const whatsappUrl = "https://wa.me/442033371831";

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] font-sans text-white">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg1.webp" 
          alt="Performance car"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-bottom"
        />
        {/* Gradient Overlay to ensure text readability on the left without hiding the full-screen image */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.9)_26%,rgba(5,5,5,0.48)_52%,rgba(5,5,5,0.1)_78%,rgba(5,5,5,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_72%,rgba(255,7,11,0.32)_0,rgba(255,7,11,0.12)_10%,rgba(255,7,11,0)_28%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col">
        
       
        

        {/* Hero Body */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-1 flex-col justify-center px-6 lg:px-[5vw]"
        >
          <h1 className="mb-2 text-[clamp(40px,5vw,72px)] font-black leading-[1.1] tracking-tight">
            MOT, Repair, <br />
            Servicing and Free <br />
            <span className="text-[#ff070b]">Instant Quotes.</span>
          </h1>

          {/* MOT Due Banner */}
          <div className="group mt-6 flex w-fit cursor-pointer items-center overflow-hidden rounded-lg bg-[#e41217] p-1 pr-6 transition-all hover:bg-[#c30f14]">
            <div className="mr-4 flex items-center bg-[#1169af] p-2 px-3 shadow-inner">
               <svg className="h-8 w-8 text-white" viewBox="0 0 54 54" fill="none">
                  <path d="M27 6 42 32H12L27 6Z" stroke="currentColor" strokeWidth="4" />
                  <path d="m15 14 15 26H0L15 14Z" transform="translate(5 5)" stroke="currentColor" strokeWidth="4" />
               </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-bold opacity-90">IS YOUR</span>
              <span className="text-2xl font-black italic">MOT DUE?</span>
            </div>
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">Check Now</p>

          {/* Registration Form */}
          <form className="mt-4 flex h-14 w-full max-w-[450px] overflow-hidden rounded-lg bg-white shadow-2xl">
            <div className="flex w-14 shrink-0 flex-col items-center justify-center bg-[#0b55b5] text-white">
               {/* Simplified GB Flag icon */}
              <div className="h-3 w-6 bg-white/20 mb-1" /> 
              <span className="text-[10px] font-black">GB</span>
            </div>
            <input
              placeholder="ENTER REG"
              className="w-full px-5 text-xl font-black text-black outline-none placeholder:text-gray-300"
            />
            <button className="bg-[#fb080d] px-8 text-lg font-black italic text-white transition-colors hover:bg-black">
              GO
            </button>
          </form>

          {/* Bottom Actions */}
          <div className="mt-8 flex gap-4">
            <button className="h-14 w-44 rounded-lg bg-white text-base font-black text-[#e41217] transition-all hover:bg-gray-100">
              CALL NOW
            </button>
            <button className="h-14 w-44 rounded-lg bg-[#e41217] text-base font-black text-white shadow-lg transition-all hover:brightness-110">
              Quote & Book!
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, y: 18, scale: 0.9 }}
        animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { duration: 0.3 },
          y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full md:bottom-8 md:right-8"
      >
        <span className="hidden rounded-md bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow-xl md:block">
          WhatsApp
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_22px_rgba(37,211,102,0.55)] ring-4 ring-white/90 transition-shadow hover:shadow-[0_0_30px_rgba(37,211,102,0.75)] md:h-16 md:w-16">
          <svg className="h-8 w-8 md:h-10 md:w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
