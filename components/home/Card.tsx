import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Mechanical Repairs",
    href: "/auto",
    image: "/imgi_143_car-mechanical-services.webp",
    imageClass: "object-center",
    copy:
      "Diagnostics, repairs, and replacement work with clear updates from start to finish.",
  },
  {
    title: "Bodywork & Paint",
    href: "/car-paint-repair",
    image: "/imgi_144_auto-repairpg-car-bodywork-1-1.webp",
    imageClass: "object-center",
    copy:
      "Panel, paint, and finish support to restore your vehicle with careful attention to detail.",
  },
  {
    title: "Car Servicing",
    href: "/wash",
    image: "/imgi_145_aut-repair-car-servicing-1-1.webp",
    imageClass: "object-center",
    copy:
      "Routine, interim, and major servicing to protect reliability and long-term vehicle health.",
  },
  {
    title: "MOT Preparation",
    href: "/mot",
    image: "/imgi_137_auto-repair-pg.car-mot-1-1.webp",
    imageClass: "object-center",
    copy:
      "Pre-checks and essential repairs to help your vehicle meet MOT standards.",
  },
  {
    title: "Electrical Repairs",
    href: "/battery",
    image: "/imgi_138_auto-repair-pg-car-electrical-services-1.webp",
    imageClass: "object-center",
    copy:
      "Fault finding for batteries, warning lights, wiring, sensors, and vehicle systems.",
  },
  {
    title: "Engine Diagnostics",
    href: "/daignostic",
    image: "/imgi_139_auto-repair-pg-car-diagnostics-1-1.webp",
    imageClass: "object-center",
    copy:
      "Accurate checks for engine issues, unusual noises, and dashboard warning lights.",
  },
];

const columns = [services.slice(0, 2), services.slice(2, 4), services.slice(4, 6)];

const Card = () => {
  return (
    <section className="bg-white px-4 py-12 text-black sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Trusted <span className="text-[#f4070b]">car repair services</span> in London
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg">
            Professional mechanical, bodywork, servicing, MOT, and electrical support from one reliable garage.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex flex-col gap-5 lg:gap-6 ${
                columnIndex === 1 ? "md:-translate-y-5" : columnIndex === 2 ? "md:translate-y-5" : ""
              }`}
            >
              {column.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5"
                >
                  <div className="relative h-44 overflow-hidden rounded-xl bg-gray-100 sm:h-52 md:h-44 lg:h-52">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 768px) 33vw, 100vw"
                      className={`object-cover ${service.imageClass}`}
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-black leading-tight tracking-tight lg:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-700 lg:text-base">{service.copy}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
