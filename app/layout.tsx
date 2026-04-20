import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Çabuk Sigorta | Güvenceniz Bizimle",
  description: "Türkiye'nin en hızlı sigorta acenteliği. WhatsApp üzerinden anında teklif alın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${outfit.variable} ${plusJakartaSans.variable} font-sans min-h-full flex flex-col selection:bg-brand-blue/10 selection:text-brand-blue`}>
        {children}
      </body>
    </html>
  );
}

