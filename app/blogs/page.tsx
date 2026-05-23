"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";

const blogSections = [
  {
    title: "Price Guide",
    posts: [
      {
        image: "/b1.jpg",
        title: "How Much Does Head Gasket Repair Cost in 2026?",
        excerpt: "Find out what affects head gasket repair pricing, warning signs, and when repair is still worth it.",
        date: "May 19, 2026",
      },
      {
        image: "/b2.webp",
        title: "Auxiliary Belt Cost Guide for Everyday Drivers",
        excerpt: "A simple guide to belt symptoms, expected labour, and when to replace related pulleys.",
        date: "May 15, 2026",
      },
      {
        image: "/b3.webp",
        title: "Car Production Faces Pressure: What It Means for Repairs",
        excerpt: "Parts delays and supply changes can affect repair timing. Here is what drivers should know.",
        date: "May 8, 2026",
      },
    ],
  },
  {
    title: "Advice & Tips",
    posts: [
      {
        image: "/b4.png",
        title: "Easy Guide to Fix EV Battery Temperature Sensor Faults",
        excerpt: "Understand common EV battery temperature warnings and the checks technicians carry out.",
        date: "April 24, 2026",
      },
      {
        image: "/b5.png",
        title: "How to Diagnose EV Battery Cooling System Failure",
        excerpt: "Cooling problems can reduce battery life. Learn the signs before they become expensive.",
        date: "April 18, 2026",
      },
      {
        image: "/b6.jpg",
        title: "Steering Wheel Lock: Why It Matters for Car Security",
        excerpt: "A practical look at steering locks, ignition faults, and when to ask for a workshop check.",
        date: "March 28, 2026",
      },
    ],
  },
  {
    title: "Diagnostics & Repair",
    posts: [
      {
        image: "/b7.webp",
        title: "How to Fix U0126: Guided Steps to Solve the Error",
        excerpt: "A readable guide to communication faults, dashboard warnings, and safe diagnostic steps.",
        date: "April 21, 2026",
      },
      {
        image: "/b8.webp",
        title: "Electric Car Battery Cost: Charging and Repair Guide",
        excerpt: "Battery health, charging habits, and repair options explained without workshop jargon.",
        date: "April 14, 2026",
      },
      {
        image: "/b9.webp",
        title: "Repairing Battery Capacity Degradation in EVs",
        excerpt: "What capacity loss means, how it is tested, and when a battery issue needs attention.",
        date: "April 9, 2026",
      },
    ],
  },
  {
    title: "News",
    posts: [
      {
        image: "/b11.png",
        title: "Car Driveshaft: The Key Component for Transferring Torque",
        excerpt: "Learn how driveshaft issues feel on the road and why early inspection matters.",
        date: "October 6, 2025",
      },
      {
        image: "/b12.webp",
        title: "Car Differential Explained: How Power Gets to the Wheels",
        excerpt: "A clear explanation of differential noise, leaks, wear, and repair warning signs.",
        date: "October 3, 2025",
      },
      {
        image: "/b13.webp",
        title: "UK Car Registrations: What Drivers Should Watch",
        excerpt: "Market changes can affect parts availability, vehicle values, and servicing decisions.",
        date: "August 7, 2025",
      },
    ],
  },
  {
    title: "Informational",
    posts: [
      {
        image: "/b14.webp",
        title: "Average Car Mechanic Salary in the UK",
        excerpt: "A helpful overview for anyone thinking about a future in the repair industry.",
        date: "November 22, 2024",
      },
      {
        image: "/b15.webp",
        title: "How Can I Become a Car Mechanic?",
        excerpt: "Training routes, useful skills, and what workshop life looks like day to day.",
        date: "November 20, 2024",
      },
      {
        image: "/b16.webp",
        title: "Benefits of the Car Mechanic Profession in the UK",
        excerpt: "Why practical repair skills remain valuable as vehicles become more advanced.",
        date: "November 20, 2024",
      },
    ],
  },
];

const allPosts = blogSections.flatMap((section) =>
  section.posts.map((post) => ({
    ...post,
    section: section.title,
  }))
);

const BlogCard = ({ post }: { post: (typeof allPosts)[number] }) => (
  <article className="overflow-hidden rounded-xl bg-[#f7f7f7] shadow-sm">
    <div className="relative min-h-[245px] overflow-hidden bg-black sm:min-h-[270px]">
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6 sm:p-7">
      <h3 className="text-xl font-black leading-snug text-[#242a31] sm:text-[22px]">{post.title}</h3>
      <p className="mt-4 text-base font-medium leading-7 text-black">{post.excerpt}</p>
      <div className="mt-7 flex items-center justify-between gap-4">
        <time className="text-sm font-medium text-black">{post.date}</time>
        <Link
          href="#"
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#f4070b] px-7 text-base font-bold text-white transition-colors hover:bg-red-700"
        >
          Read More
        </Link>
      </div>
    </div>
  </article>
);

const BlogsPage = () => {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return null;
    }

    return allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.section.toLowerCase().includes(searchTerm)
    );
  }, [query]);

  return (
    <main className="bg-white text-black">
      <section className="relative min-h-[620px] overflow-hidden bg-black px-4 text-white sm:px-6 lg:px-8">
        <Image src="/b18.png" alt="TAYLORMOT car repair blog" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center">
          <h1 className="max-w-5xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-[66px]">
            Car Repair & Maintenance Blog
          </h1>
          <p className="mt-6 text-lg font-bold">
            <Link href="/" className="hover:text-[#f4070b]">Home</Link> &raquo; Blog | TAYLORMOT
          </p>
          <div className="mt-14 flex flex-wrap gap-5">
            <a
              href="tel:+442033371831"
              className="inline-flex min-h-16 min-w-[210px] items-center justify-center rounded-2xl bg-white px-8 text-xl font-black text-black shadow-lg transition-colors hover:bg-gray-100"
            >
              CALL NOW
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-16 min-w-[210px] items-center justify-center rounded-2xl bg-[#f4070b] px-8 text-xl font-black text-white shadow-lg shadow-red-900/30 transition-colors hover:bg-red-700"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xl font-bold uppercase text-[#161b22]">Advice</p>
          <h2 className="mt-7 text-4xl font-black leading-tight text-[#f4070b] sm:text-5xl">Car advice and news</h2>
          <p className="mx-auto mt-14 max-w-4xl text-xl font-medium leading-8">
            The team at TAYLORMOT keeps drivers up to date with car repair guides, maintenance tips, diagnostic advice,
            and simple ways to avoid expensive workshop surprises.
          </p>

          <form className="mx-auto mt-12 max-w-4xl" onSubmit={(event) => event.preventDefault()}>
            <label className="relative block">
              <span className="sr-only">Search blog posts</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search..."
                className="h-[76px] w-full rounded-xl border border-[#f4070b] px-7 pr-16 text-xl font-medium outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(244,7,11,0.12)]"
              />
              <Search className="absolute right-7 top-1/2 h-9 w-9 -translate-y-1/2 text-[#f4070b]" strokeWidth={3} />
            </label>
            <p className="mt-5 text-left text-base font-medium">Type above to filter guides.</p>
          </form>
        </div>
      </section>

      {filteredPosts ? (
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-3xl font-black uppercase">Search Results</h2>
              <span className="h-1 w-14 bg-[#d6111b]" />
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={`${post.section}-${post.title}`} post={post} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        blogSections.map((section) => (
          <section key={section.title} className="px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-black uppercase leading-tight">{section.title}</h2>
                  <span className="hidden h-1 w-14 bg-[#d6111b] sm:block" />
                </div>
                <Link href="#" className="text-xl font-medium text-[#f4070b] hover:text-red-700">
                  More Guides
                </Link>
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {section.posts.map((post) => (
                  <BlogCard key={`${section.title}-${post.title}`} post={{ ...post, section: section.title }} />
                ))}
              </div>
            </div>
          </section>
        ))
      )}

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

export default BlogsPage;
