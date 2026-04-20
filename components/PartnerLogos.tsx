import React from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

const partners = [
    { name: "QUICK SİGORTA", logo: "/sigortaicon/quick.png" },
    { name: "AKSİGORTA", logo: "/sigortaicon/aksigorta.png" },
    { name: "SOMPO SİGORTA", logo: "/sigortaicon/simpo.png" },
    { name: "DOĞA SİGORTA", logo: "/sigortaicon/dogasigorta.png" },
    { name: "NEOVA SİGORTA", logo: "/sigortaicon/Neova.svg.png" },
    { name: "HEPİYİ SİGORTA", logo: "/sigortaicon/hepiyi.png" },
    { name: "ZURICH SİGORTA", logo: "/sigortaicon/zurıch.png" },
];

const PartnerLogos = () => {
    return (
        <section className="py-24 bg-slate-50/50 min-h-[70vh] relative overflow-hidden flex flex-col justify-center">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            
            <div className="wrapper mb-20 text-center">
                <div className="inline-flex items-center gap-2 border border-slate-200 bg-white text-slate-500 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                    Güçlü İş Ortaklığı
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-heading mb-6">
                    Güvenle Çalıştığımız <br />
                    <span className="text-brand-blue">İş Ortaklarımız</span>
                </h2>
                <div className="h-1.5 w-20 bg-brand-blue/10 mx-auto rounded-full mb-8" />
                <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                    Türkiye'nin en saygın sigorta şirketleriyle iş birliği yaparak, size en avantajlı <br className="hidden md:block" /> teklifleri en geniş kapsama alanıyla sunuyoruz.
                </p>
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {partners.map((partner, index) => (
                        <div
                            key={partner.name}
                            className="bg-white group relative aspect-square md:aspect-[4/3] flex items-center justify-center p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 hover:-translate-y-1 transition-all duration-500 ease-out"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative w-full h-full grayscale-0 opacity-100 md:grayscale md:opacity-50 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    sizes="(max-width: 640px) 150px, 200px"
                                    className={`object-contain transition-transform duration-700 group-hover:scale-110 ${["DOĞA SİGORTA", "HEPİYİ SİGORTA", "ZURICH SİGORTA"].includes(partner.name)
                                        ? "scale-[1.25]"
                                        : "scale-[1.0]"
                                        }`}
                                />
                            </div>
                        </div>
                    ))}
                    {/* Placeholder for future growth as seen in the reference image */}
                    <div className="bg-slate-100/30 border border-dashed border-slate-200 rounded-3xl aspect-square md:aspect-[4/3] flex items-center justify-center p-6 transition-colors hover:bg-slate-100/50 group">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand-blue transition-colors">Ve Daha Fazlası</div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </section>
    );
};

export default PartnerLogos;

