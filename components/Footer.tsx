import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Give Us A Feedback", href: "#" },
    { label: "Pricing & Coupons", href: "#" },
    { label: "Sitemap", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Our Blogs", href: "#" },
  ];

  return (
    <footer className="bg-[#0B0B0D] text-[#F5F5F5] pt-16 pb-8 px-4 md:px-10 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Logo & Socials */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex flex-col items-start group">
            <div className="relative flex flex-col items-center">
              <div className="relative w-20 h-3 mb-1">
                <div className="absolute top-0 left-0 w-full h-full border-t-2 border-[#D61F2C] rounded-[100%] scale-x-110 -rotate-2"></div>
                <div className="absolute bottom-0 left-4 w-[80%] h-full border-b-2 border-[#2C4F9E] rounded-[100%] scale-x-110 rotate-2 opacity-80"></div>
              </div>
              <h1 className="text-xl font-light tracking-[0.2em] leading-none text-white">
                TAYLOR<span className="font-bold">MOT</span>
              </h1>
            </div>
          </Link>
          
          <p className="text-[#A7A9B0] text-sm leading-relaxed">
            We Repair Any Car Anytime. Come to TAYLORMOT and get professional auto repair services in West London.
          </p>

          <div className="flex gap-4 text-white/80">
            {['f', '𝕏', 'yt', 'in', 'ig', 'tk'].map((icon) => (
              <Link key={icon} href="#" className="hover:text-[#D61F2C] transition-colors text-lg">
                {icon}
              </Link>
            ))}
          </div>

          <div className="mt-4">
             {/* Placeholder for Trustpilot/Bark widgets */}
             <div className="bg-white/5 p-4 rounded-lg inline-block border border-white/10">
                <span className="text-[#D61F2C] font-black italic">bark</span>
                <div className="text-yellow-500 text-xs">★★★★★</div>
             </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex flex-col">
            Quick Links
            <span className="w-8 h-[2px] bg-[#D61F2C] mt-2"></span>
          </h3>
          <ul className="space-y-4 text-sm font-semibold text-[#A7A9B0]">
            {quickLinks.map((link) => (
              <li key={link.label} className="flex items-center group">
                <span className="w-2 h-[2px] bg-[#D61F2C] mr-3 transition-all group-hover:w-4"></span>
                <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Common Repairs */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex flex-col">
            Common Repairs
            <span className="w-8 h-[2px] bg-[#D61F2C] mt-2"></span>
          </h3>
          <ul className="space-y-4 text-sm font-semibold text-[#A7A9B0]">
            {["MOT", "Car Servicing", "Car Body Repairs", "Engine Replacement", "Car Mechanical Repairs", "Brake Pads Replacement"].map((link) => (
              <li key={link} className="flex items-center group">
                <span className="w-2 h-[2px] bg-[#D61F2C] mr-3 transition-all group-hover:w-4"></span>
                <Link href="#" className={`hover:text-white transition-colors ${link === 'Car Body Repairs' ? 'text-[#D61F2C]' : ''}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold mb-6 flex flex-col">
            Contact
            <span className="w-8 h-[2px] bg-[#D61F2C] mt-2"></span>
          </h3>
          
          {/* Support */}
          <div className="flex items-start gap-4 group">
            <div className="bg-[#D61F2C] p-3 rounded-lg">
              <span className="text-white text-xl">📞</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Talk To Repair Support</p>
              <p className="text-[#A7A9B0] text-sm">+44 20 3337 1831</p>
            </div>
          </div>

          {/* Timings */}
          <div className="flex items-start gap-4 group">
            <div className="bg-[#D61F2C] p-3 rounded-lg text-white">
              <span className="text-xl">🕒</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Garage Timings</p>
              <p className="text-[#A7A9B0] text-sm leading-snug">Mon-Fri: 07 AM to 5:30 PM <br/> Sat: 07 AM to 3:30 PM</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 group">
            <div className="bg-[#D61F2C] p-3 rounded-lg">
              <span className="text-white text-xl">📍</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Visit Us</p>
              <p className="text-[#A7A9B0] text-sm">142 Bentworth Rd, London W12 7AH</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-16 pt-8 border-t border-white/5 text-center text-[#A7A9B0] text-xs">
        <p>© {new Date().getFullYear()} TAYLORMOT. All Rights Reserved. Developed by Ammar Alam.</p>
      </div>
    </footer>
  );
};

export default Footer;
