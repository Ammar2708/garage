import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteAnimations from "@/components/SiteAnimations";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

export const metadata = {
  title: "TAYLORMOT",
  description:
    "HS Construction and Electrical Group Ltd provides professional construction, electrical, and property services across the UK. Reliable, certified, and high-quality solutions for residential and commercial projects.",
  
  keywords: [
    "emergency electrical services",
    "24/7 emergency electrician UK",
    "emergency electrician near me",
    "urgent electrical repairs",
    "same day electrician UK",
    "electrical fault repair",
    "construction services UK",
    "electrical services UK",
    "property maintenance",
    "residential construction",
    "electricians UK",
    "HS Construction and Electrical Group Ltd"
  ],

  icons: {
    icon: "/logo1.png",
  },

  metadataBase: new URL("https://www.hsconstructionandelectricalgroupltd.co.uk"),

  openGraph: {
    title: "TAYLORMOT",
    description:
      "Expert construction and electrical services across the UK. Delivering quality workmanship for residential and commercial projects.",
    url: "https://www.hsconstructionandelectricalgroupltd.co.uk",
    siteName: "TAYLORMOT",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "TAYLORMOT",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TAYLORMOT",
    description:
      "Professional construction and electrical services across the UK.",
    images: ["/logo1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="site-shell">
        <SiteAnimations />
        <Navbar />
        <div className="site-page">{children}</div>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
