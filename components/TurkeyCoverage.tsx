'use client';

import React from 'react';
import { MapPin, Globe, ShieldCheck } from 'lucide-react';

const cities = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

const TurkeyCoverage = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-20" />
            
            <div className="wrapper relative z-10">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    
                    {/* Left Side: Stats & Info */}
                    <div className="space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest">
                            <Globe className="w-3.5 h-3.5 animate-spin-slow" />
                            Yaygın Hizmet Ağı
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight font-heading tracking-tight">
                            Türkiye'nin <span className="text-brand-blue">81 İlinde</span><br />
                            Yanınızdayız.
                        </h2>
                        
                        <p className="text-[15px] text-slate-500 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed opacity-90">
                            İstanbul'dan Kars'a, Edirne'den Hakkari'ye... 973 ilçenin tamamında, 
                            dijital altyapımızla saniyeler içinde yanınızdayız. Mesafe tanımayan 
                            sigortacılık anlayışıyla Türkiye'nin her yerindeyiz.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 group hover:border-brand-blue/30 transition-colors">
                                <p className="text-2xl font-black text-brand-blue mb-0.5">81</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">İl Kapsamı</p>
                            </div>
                            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 group hover:border-brand-blue/30 transition-colors">
                                <p className="text-2xl font-black text-brand-red mb-0.5">973</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">İlçe Erişimi</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Visual Map/City Cloud */}
                    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                        {/* Central Hub */}
                        <div className="relative z-20 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-8 border-slate-50 group hover:scale-105 transition-transform duration-700">
                            <div className="absolute inset-0 rounded-full border-2 border-brand-blue/20 animate-ping shadow-[0_0_50px_rgba(0,102,255,0.2)]" />
                            <MapPin className="w-12 h-12 text-brand-red mb-3 animate-bounce" />
                            <span className="text-4xl font-black text-slate-900">81 İL</span>
                            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mt-1">Türkiye Geneli</span>
                        </div>

                        {/* Floating Cities Background - Animated Marquee Style */}
                        <div className="absolute inset-0 z-10 flex flex-wrap justify-center content-center gap-3 opacity-20 pointer-events-none overflow-hidden blur-[1px]">
                            {cities.slice(0, 40).map((city, index) => (
                                <span key={index} className="text-sm md:text-lg font-black text-slate-400 whitespace-nowrap uppercase">
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom City Strip - Animated Badge Scroll */}
            <div className="mt-20 relative w-full overflow-hidden py-8 bg-white border-y border-slate-100">
                <div className="flex animate-scroll whitespace-nowrap gap-6 items-center">
                    {[...cities, ...cities].map((city, index) => (
                        <div key={index} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center hover:border-brand-blue/30 hover:bg-white transition-all shadow-sm">
                            <span className="text-[10px] md:text-[11px] font-black text-slate-500 hover:text-brand-blue uppercase tracking-widest leading-none">
                                {city}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 60s linear infinite;
                }
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default TurkeyCoverage;
