import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: 'swap',
});

// 81 İl SEO Listesi
const provinces = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

export const metadata: Metadata = {
  title: "Çabuk Sigorta | 81 İlde Hızlı Teklif & Güvenilir Sigortacılık",
  description: "Türkiye'nin 81 ilinde en uygun Kasko, Trafik, Sağlık ve Konut sigortası tekliflerini saniyeler içinde sunuyoruz. WhatsApp ile anında teklif ve poliçe hizmeti.",
  keywords: "sigorta, kasko teklifi, trafik sigortası, özel sağlık sigortası, konut sigortası, tamalayıcı sağlık, 81 il sigorta acentesi, hızlı sigorta teklifi",
  authors: [{ name: "Çabuk Sigorta" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  alternates: {
    canonical: "https://cabuksigorta.com.tr",
  },
  openGraph: {
    title: "Çabuk Sigorta | 81 İlde Hızlı Teklif & Güvenilir Sigortacılık",
    description: "Türkiye'nin her yerinde en uygun sigorta teklifleri. WhatsApp üzerinden anında poliçeniz hazır.",
    url: "https://cabuksigorta.com.tr",
    siteName: "Çabuk Sigorta",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Çabuk Sigorta",
    "image": "https://cabuksigorta.com.tr/logo.png",
    "@id": "https://cabuksigorta.com.tr",
    "url": "https://cabuksigorta.com.tr",
    "telephone": "02323367172", // Güncel numara
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "İzmir, Türkiye",
      "addressLocality": "İzmir",
      "addressRegion": "Ege",
      "postalCode": "35000",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.4237,
      "longitude": 27.1428
    },
    "areaServed": provinces.map(city => ({
      "@type": "AdministrativeArea",
      "name": city
    })),
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/cabuksigorta",
      "https://instagram.com/cabuksigorta"
    ]
  };

  return (
    <html lang="tr">
      <body className={`${outfit.variable} ${plusJakartaSans.variable} font-sans min-h-full flex flex-col selection:bg-brand-blue/10 selection:text-brand-blue`}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

