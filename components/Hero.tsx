"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Car, HeartPulse, Home as HomeIcon, Shield,
    Zap, FileText, Truck, Globe,
    Stethoscope, Plane, Dog,
    LifeBuoy, Smartphone, Activity, ShieldCheck, Heart, Building2, Smile, FileBadge, Rocket,
    Users, FileCheck, Timer, Handshake, ArrowRight, ChevronDown, Ribbon, Info
} from 'lucide-react';
import ServiceCard from './ServiceCard';



const StatCounter = ({ end, suffix = "", delay = 400 }: { end: number, suffix?: string, delay?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;
        const duration = 2000; // 2 seconds

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out cubic
            const easeOutCubic = 1 - Math.pow(1 - percentage, 3);

            setCount(Math.floor(easeOutCubic * end));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        const timer = setTimeout(() => {
            animationFrame = requestAnimationFrame(animate);
        }, delay);

        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(animationFrame);
        };
    }, [end, delay]);

    return <>{count.toLocaleString('tr-TR')}{suffix}</>;
};

const Hero = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Resize listener to track mobile state
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640); // 640px is sm: break point
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Reset expansion state when category changes
    const [activeCategory, setActiveCategory] = useState<number | null>(0);
    const handleCategoryChange = (index: number) => {
        setActiveCategory(index);
        setIsExpanded(false);
    };

    useEffect(() => {
        setIsExpanded(false);
    }, [activeCategory]);

    const services = [
        {
            title: "Aracım",
            description: "Kasko, Trafik ve fazlası",
            bgColor: "bg-blue-50",
            textColor: "text-brand-blue",
            accentColor: "border-blue-100",
            icon: <Car className="w-8 h-8 stroke-[1.5]" />,
            products: [
                { name: "Trafik Sigortası", icon: <FileCheck className="w-4 h-4 text-blue-500" />, infoLink: "/urunler/trafik-sigortasi", quoteLink: "https://wa.me/905352621717?text=Trafik%20Sigortas%C4%B1%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "2. El Trafik Sigortası", icon: <ArrowRight className="w-4 h-4 text-blue-500" />, infoLink: "/urunler/trafik-sigortasi", quoteLink: "https://wa.me/905352621717?text=2.%20El%20Trafik%20Sigortas%C4%B1%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "Yeşil Kart Sigortası", icon: <Globe className="w-4 h-4 text-emerald-500" />, infoLink: "/urunler/trafik-sigortasi", quoteLink: "https://wa.me/905352621717?text=Ye%C5%9Fil%20Kart%20Sigortas%C4%B1%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "Kasko", icon: <ShieldCheck className="w-4 h-4 text-blue-600" />, infoLink: "/urunler/kasko", quoteLink: "https://wa.me/905352621717?text=Kasko%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "Elektrikli Araç Kasko", icon: <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500/20" />, infoLink: "/urunler/kasko", quoteLink: "https://wa.me/905352621717?text=Elektrikli%20Ara%C3%A7%20Kasko%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "Kısa Süreli Trafik", icon: <Timer className="w-4 h-4 text-slate-500" />, infoLink: "/urunler/trafik-sigortasi", quoteLink: "https://wa.me/905352621717?text=K%C4%B1sa%20S%C3%BCreli%20Trafik%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "İMM", icon: <Shield className="w-4 h-4 text-brand-blue" />, infoLink: "/urunler/kasko", quoteLink: "https://wa.me/905352621717?text=%C4%B0MM%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
            ]
        },
        {
            title: "Sağlığım",
            description: "Özel ve Tamamlayıcı",
            bgColor: "bg-red-50",
            textColor: "text-brand-red",
            accentColor: "border-red-100",
            icon: <Heart className="w-8 h-8 stroke-[1.5] fill-brand-red/10" />,
            products: [
                { name: "Tamamlayıcı Sağlık", icon: <Activity className="w-4 h-4 text-red-500" />, infoLink: "/urunler/tamamlayici-saglik", quoteLink: "https://wa.me/905352621717?text=Tamamlay%C4%B1c%C4%B1%20Sa%C4%9Fl%C4%B1k%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "Özel Sağlık", icon: <Stethoscope className="w-4 h-4 text-red-600" />, infoLink: "/urunler/ozel-saglik", quoteLink: "https://wa.me/905352621717?text=%C3%96zel%20Sa%C4%9Fl%C4%B1k%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "Seyahat Sağlık", icon: <Plane className="w-4 h-4 text-sky-500" />, infoLink: "/urunler/seyahat-saglik", quoteLink: "https://wa.me/905352621717?text=Seyahat%20Sa%C4%9Fl%C4%B1k%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "Pembe Kurdele", icon: <Heart className="w-4 h-4 text-pink-500 fill-pink-500/10" />, infoLink: "/urunler/ozel-saglik", quoteLink: "https://wa.me/905352621717?text=Pembe%20Kurdele%20sigortas%C4%B1%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
            ]
        },
        {
            title: "Evim",
            description: "Tapu ve Konut güvenliği",
            bgColor: "bg-blue-50",
            textColor: "text-brand-blue",
            accentColor: "border-blue-100",
            icon: <Building2 className="w-8 h-8 stroke-[1.5]" />,
            products: [
                { name: "DASK", icon: <ShieldCheck className="w-4 h-4 text-blue-500" />, infoLink: "/urunler/dask", quoteLink: "https://wa.me/905352621717?text=DASK%20sigortas%C4%B1%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "Konut Sigortası", icon: <HomeIcon className="w-4 h-4 text-blue-600" />, infoLink: "/urunler/konut-sigortasi", quoteLink: "https://wa.me/905352621717?text=Konut%20Sigortas%C4%B1%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "Evim Güvende", icon: <LifeBuoy className="w-4 h-4 text-orange-500" />, infoLink: "/urunler/konut-sigortasi", quoteLink: "https://wa.me/905352621717?text=Evim%20G%C3%BCvende%20sigortas%C4%B1%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
            ]
        },
        {
            title: "Diğer",
            description: "Özel risk çözümleri",
            bgColor: "bg-red-50",
            textColor: "text-brand-red",
            accentColor: "border-red-100",
            icon: <Rocket className="w-8 h-8 stroke-[1.5]" />,
            products: [
                { name: "Cep Telefonu", icon: <Smartphone className="w-4 h-4 text-slate-600" />, infoLink: "/urunler/cep-telefonu", quoteLink: "https://wa.me/905352621717?text=Cep%20Telefonu%20sigortas%C4%B1%20hakk%C4%B1nda%20teklif%20almak%20istiyorum" },
                { name: "Evcil Hayvan", icon: <Dog className="w-4 h-4 text-orange-600" />, infoLink: "https://wa.me/905352621717?text=Evcil%20Hayvan%20sigortas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum", quoteLink: "https://wa.me/905352621717?text=Evcil%20Hayvan%20sigortas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" },
                { name: "Ferdi Kaza", icon: <Activity className="w-4 h-4 text-red-500" />, infoLink: "https://wa.me/905352621717?text=Ferdi%20Kaza%20sigortas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum", quoteLink: "https://wa.me/905352621717?text=Ferdi%20Kaza%20sigortas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" },
            ]
        }
    ];

    return (
        <>
            {/* Hero Banner with Background Image */}
            <header className="overflow-hidden bg-white min-h-[85vh] md:min-h-[calc(100vh-61px)] flex flex-col">
                {/* Content Area with Background/Circle Image */}
                <div className="relative flex-1 flex flex-col lg:justify-center py-6 md:py-0">
                    {/* Background/Top Circle Image */}
                    <div className="relative lg:absolute lg:inset-0 z-0 flex items-center justify-center p-0 lg:p-8 mb-1 lg:mb-0">
                        <div className="relative w-full aspect-[16/10] sm:aspect-video lg:aspect-auto lg:w-full lg:max-w-xl lg:h-[450px] rounded-none lg:rounded-none overflow-hidden lg:overflow-visible bg-white lg:bg-transparent shadow-none lg:shadow-none border-0 lg:border-none lg:translate-x-16 lg:-translate-y-12 transition-all duration-700 hover:scale-105 lg:hover:scale-110">
                            <div className="hidden sm:block absolute inset-0">
                                <Image
                                    src="/banner-3.jpg"
                                    alt="Dijital Sigorta Çözümleri - Hakiki Çabuk Sigorta"
                                    fill
                                    priority
                                    sizes="100vw"
                                    className="object-cover lg:object-contain opacity-100 lg:mix-blend-multiply animate-hero-fade will-change-transform"
                                    style={{
                                        animationDuration: '4s',
                                        maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 20%, black 80%)',
                                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 20%, black 80%)'
                                    }}
                                />
                            </div>
                            <div className="block sm:hidden absolute inset-0">
                                <Image
                                    src="/mobilbanner.jpg"
                                    alt="Mobil Sigorta Çözümleri"
                                    fill
                                    priority
                                    sizes="100vw"
                                    className="object-cover opacity-100 animate-hero-zoom will-change-transform"
                                    style={{
                                        animationDuration: '4s'
                                    }}
                                />
                            </div>
                            {/* Floating Badge on Image - Top Centered Minimalist (MOBILE ONLY) */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-brand-blue px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border border-brand-blue/10 shadow-lg animate-fade-in whitespace-nowrap lg:hidden" style={{ animationDelay: '0.5s' }}>
                                <Zap className="w-3 h-3 fill-brand-red text-brand-red" />
                                Türkiye&apos;nin Dijital Sigorta Acentesi
                            </div>

                            {/* Main Title Over the Image - Trapezoid Box (MOBILE ONLY) */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center lg:hidden">
                                <div 
                                    className="bg-black/35 backdrop-blur-[2px] px-10 pt-6 pb-4 flex flex-col items-center text-center"
                                    style={{ 
                                        clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
                                        width: '100%'
                                    }}
                                >
                                    <h1 className="text-[28px] sm:text-3xl font-black text-white leading-[1.1] tracking-tighter fade-up font-heading" style={{ animationDelay: '0.2s' }}>
                                        Sigortada <span className="text-blue-500 italic">Güveni</span>,<br />
                                        Çözümde <span className="text-brand-red italic text-shadow-sm">Hakikiyi Seçin.</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="wrapper relative z-10 pt-1 pb-0 text-center lg:text-left">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
                            {/* Left Column */}
                            <div className="max-w-2xl mx-auto lg:mx-0">
                                {/* Desktop Only Headline */}
                                <h1 className="hidden lg:block text-4xl md:text-6xl font-black text-slate-900 leading-[1.2] mb-6 tracking-tight fade-up font-heading" style={{ animationDelay: '0.2s' }}>
                                    Sigortada <span className="bg-clip-text text-transparent bg-gradient-to-br from-brand-blue via-blue-600 to-brand-blue bg-[length:200%_auto] animate-shimmer">Güveni</span>,<br />
                                    Çözümde <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-red-500 italic drop-shadow-sm">Hakikiyi Seçin.</span>
                                </h1>




                                <p className="mt-8 md:mt-12 text-[15px] md:text-[17px] text-slate-500 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-medium opacity-90 fade-up tracking-tight" style={{ animationDelay: '0.3s' }}>
                                    Saatler süren teklif arayışlarına son verin. Sadece ihtiyacınızı söyleyin, sizin için en uygun paketleri bulalım ve poliçenizi saniyeler içinde cebinize gönderelim.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-6 fade-up" style={{ animationDelay: '0.4s' }}>
                                    <a
                                        href="https://wa.me/905352621717?text=Merhaba, teklif almak istiyorum."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-gradient-to-r from-brand-red to-red-600 text-white px-10 py-5 rounded-full text-[13px] font-black uppercase tracking-[0.25em] hover:shadow-[0_20px_40px_-10px_rgba(239,68,68,0.4)] transition-all hover:-translate-y-1 flex items-center gap-4 active:scale-95 shadow-xl shadow-red-500/20"
                                    >
                                        <ShieldCheck className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                        Hemen Teklif Al
                                    </a>
                                    <a 
                                        href="#hizmetler"
                                        className="text-sm font-black text-slate-600 hover:text-brand-blue transition-all px-6 py-4 flex items-center gap-3 group relative"
                                    >
                                        <span className="relative z-10 uppercase tracking-widest text-[11px]">Ürünlerimizi İncele</span>
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-brand-blue group-hover:translate-x-1 transition-all">
                                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: Step-by-step */}
                            <div id="nasıl-calisıyoruz" className="lg:ml-auto w-full max-w-sm fade-up mb-4 mt-3 hidden md:block group/how lg:translate-x-8" style={{ animationDelay: '0.4s' }}>
                                <div className="bg-white/90 backdrop-blur-xl border border-white/80 p-8 rounded-sm shadow-[0_20px_50px_-12px_rgba(0,63,127,0.12)] transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,63,127,0.15)]">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-[0.2em] flex items-center gap-2.5 font-heading">
                                            Nasıl Çalışıyoruz?
                                        </h3>
                                    </div>

                                    <div className="space-y-8 relative">
                                        {/* Connecting Line */}
                                        <div className="absolute left-[17px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-400 via-emerald-400 to-red-400 opacity-20" />

                                        {/* Step 1 */}
                                        <div className="flex gap-5 fade-up" style={{ animationDelay: '0.7s' }}>
                                            <div
                                                className="relative z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border-2 border-slate-50 step-pulse-1"
                                                style={{
                                                    '--step-bg': '#ebf5ff',
                                                    '--step-glow': 'rgba(0, 102, 255, 0.4)'
                                                } as any}
                                            >
                                                <span className="text-brand-blue font-black text-xs">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-extrabold text-slate-900 text-[15px] tracking-tight transition-colors font-heading">İhtiyacınızı Belirtin</h4>
                                                <p className="text-[13px] text-slate-500 font-medium mt-1.5 leading-relaxed">
                                                    Aşağıdaki <a href="#hizmetler" className="text-brand-red font-black underline decoration-brand-red/30 hover:text-brand-blue hover:decoration-brand-blue transition-all cursor-pointer">ürünlerimizden</a> size uygun olanı seçip, talebinizi hızlıca iletin.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Step 2 */}
                                        <div className="flex gap-5 fade-up" style={{ animationDelay: '1.0s' }}>
                                            <div
                                                className="relative z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border-2 border-slate-50 step-pulse-2"
                                                style={{
                                                    '--step-bg': '#ecfdf5',
                                                    '--step-glow': 'rgba(16, 185, 129, 0.4)'
                                                } as any}
                                            >
                                                <span className="text-emerald-600 font-black text-xs">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-extrabold text-slate-900 text-[15px] tracking-tight transition-colors font-heading">Size Uygun Teklifi Seçin</h4>
                                                <p className="text-[13px] text-slate-500 font-medium mt-1.5 leading-relaxed">Sizin için hazırlayıp ilettiğimiz teklifler arasından ihtiyacınıza en uygun olanı seçip onaylayın.</p>
                                            </div>
                                        </div>

                                        {/* Step 3 */}
                                        <div className="flex gap-5 fade-up" style={{ animationDelay: '1.3s' }}>
                                            <div
                                                className="relative z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border-2 border-slate-50 step-pulse-3"
                                                style={{
                                                    '--step-bg': '#fef2f2',
                                                    '--step-glow': 'rgba(220, 38, 38, 0.4)'
                                                } as any}
                                            >
                                                <span className="text-brand-red font-black text-xs">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-extrabold text-slate-900 text-[15px] tracking-tight transition-colors font-heading">Poliçeniz Anında Hazır</h4>
                                                <p className="text-[13px] text-slate-500 font-medium mt-1.5 leading-relaxed">Poliçeniz PDF olarak saniyeler içinde WhatsApp&apos;ınıza gelsin.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Strip — OUTSIDE background area */}
                <div className="wrapper relative z-10 pb-6 mt-0 fade-up" style={{ animationDelay: '0.4s' }}>
                    <div className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                        {[
                            { value: 10000, suffix: "+", label: "Memnun Müşteri", color: "text-brand-blue", bgColor: "bg-white/80 backdrop-blur-sm" },
                            { value: 50000, suffix: "+", label: "Hazırlanan Poliçe", color: "text-brand-red", bgColor: "bg-slate-50/80 backdrop-blur-sm" },
                            { value: 20, suffix: "+", label: "İş Ortağı", color: "text-brand-blue", bgColor: "bg-white/80 backdrop-blur-sm" },
                        ].map((item, index) => (
                            <div key={index} className={`flex flex-col items-center justify-center p-4 sm:p-10 ${item.bgColor} transition-all border-r border-slate-100 last:border-0`}>
                                <div className={`text-xl md:text-5xl font-black ${item.color} tracking-tighter mb-1 sm:mb-2`}>
                                    <StatCounter end={item.value} suffix={item.suffix} />
                                </div>
                                <p className="text-slate-400 font-bold uppercase text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] text-center">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </header>

            {/* Service Selection section */}
            <section id="hizmetler" className="bg-white py-24 min-h-screen scroll-mt-20 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-40 right-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[100px] -z-0" />
                <div className="absolute top-80 left-[-10%] w-[30%] h-[30%] bg-red-50/50 rounded-full blur-[80px] -z-0" />

                <div className="wrapper relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-10 fade-up">
                        <div className="inline-flex items-center gap-2 border border-slate-100 bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                            <Shield className="w-3.5 h-3.5 text-brand-red" />
                            Poliçe Gezgini
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight font-heading">
                            Ürünle<span className="text-brand-blue">rimiz</span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-500 font-medium max-w-lg mx-auto">
                            İhtiyaçlarınıza en uygun sigorta çözümlerini kategoriler halinde keşfedin ve saniyeler içinde teklifinizi alın.
                        </p>
                    </div>

                    {/* Category Tabs Header - Simplified Full Width */}
                    <div className="mb-10 w-full lg:max-w-5xl lg:mx-auto bg-slate-100/90 lg:bg-slate-100/80 rounded-none lg:rounded-[2.5rem] border-y lg:border border-slate-200/60 shadow-inner overflow-hidden">
                        <div className="grid grid-cols-2 lg:flex lg:flex-nowrap w-full gap-2 p-4 lg:p-2 lg:justify-center">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCategoryChange(index);
                                }}
                                className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 rounded-2xl sm:rounded-[1.8rem] transition-all duration-500 whitespace-nowrap w-full ${
                                    activeCategory === index 
                                    ? 'bg-white text-brand-blue shadow-[0_15px_30px_-5px_rgba(0,102,255,0.15)] border border-brand-blue/10 scale-[1.02]' 
                                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                                }`}
                            >
                                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                                    activeCategory === index ? 'bg-brand-blue text-white' : 'bg-white shadow-sm'
                                }`}>
                                    <div className="scale-[0.6] sm:scale-75">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="text-left leading-none uppercase">
                                    <h3 className="text-[11px] sm:text-sm font-black font-heading mb-1 tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-[7px] sm:text-[9px] font-bold opacity-50 tracking-[0.1em]">
                                        {service.products.length} Ürün
                                    </p>
                                </div>
                            </button>
                        ))}
                        </div>
                    </div>

                    {/* Products Display Area */}
                    <div className="max-w-6xl mx-auto sm:px-0">
                        {services.map((service, sIndex) => (
                            <div 
                                key={sIndex}
                                className={`${activeCategory === sIndex ? 'block' : 'hidden'} animate-in fade-in slide-in-from-bottom-4 duration-700`}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                                    {service.products
                                        .slice(0, (isMobile && !isExpanded) ? 4 : undefined)
                                        .map((product, pIndex) => {
                                            const getIllustration = (name: string) => {
                                                const n = name.toLowerCase();
                                                const props = { className: "w-12 h-12 stroke-[1]" };
                                                
                                                if (n.includes('trafik')) return <Car {...props} />;
                                                if (n.includes('kasko')) return <ShieldCheck {...props} />;
                                                if (n.includes('yeşil kart')) return <Globe {...props} />;
                                                if (n.includes('imm')) return <FileBadge {...props} />;
                                                if (n.includes('sağlık')) return <HeartPulse {...props} />;
                                                if (n.includes('seyahat')) return <Plane {...props} />;
                                                if (n.includes('kurdele')) return <Ribbon {...props} className="w-12 h-12 stroke-[1] text-pink-400" />;
                                                if (n.includes('dask') || n.includes('konut') || n.includes('evim')) return <HomeIcon {...props} />;
                                                if (n.includes('cep telefon') || n.includes('akıllı')) return <Smartphone {...props} />;
                                                if (n.includes('hayvan')) return <Dog {...props} />;
                                                if (n.includes('kaza')) return <Activity {...props} />;
                                                
                                                return <Shield {...props} />;
                                            };

                                            const colors = [
                                                'bg-blue-100/70 border-blue-200/60 hover:bg-blue-200/50',
                                                'bg-red-100/70 border-red-200/60 hover:bg-red-200/50',
                                                'bg-emerald-100/70 border-emerald-200/60 hover:bg-emerald-200/50',
                                                'bg-amber-100/70 border-amber-200/60 hover:bg-amber-200/50',
                                                'bg-indigo-100/70 border-indigo-200/60 hover:bg-indigo-200/50',
                                                'bg-rose-100/70 border-rose-200/60 hover:bg-rose-200/50',
                                            ];
                                            const cardStyle = colors[pIndex % colors.length];

                                            const iconColors = [
                                                'text-blue-600',
                                                'text-red-600',
                                                'text-emerald-600',
                                                'text-amber-600',
                                                'text-indigo-600',
                                                'text-rose-600',
                                            ];
                                            const iconStyle = iconColors[pIndex % iconColors.length];

                                            return (
                                                <div 
                                                    key={pIndex}
                                                    className={`group/item relative ${cardStyle} p-5 sm:p-6 rounded-3xl hover:border-brand-blue/30 transition-all duration-500 hover:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.1)] flex flex-col justify-between min-h-[220px] sm:min-h-[240px] h-full overflow-hidden`}
                                                    style={{ transitionDelay: `${pIndex * 50}ms` }}
                                                >
                                                    {/* Background Glow */}
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 -z-0" />

                                                    {/* Card Header */}
                                                    <div className="relative z-10 flex items-center gap-3 bg-white/60 p-3 rounded-2xl group-hover/item:bg-white transition-all duration-500 border border-white/50 group-hover/item:border-brand-blue/10 group-hover/item:shadow-sm">
                                                        <div className={`w-9 h-9 flex items-center justify-center ${iconStyle} transition-all duration-500 shrink-0 bg-white rounded-xl shadow-sm border border-slate-100`}>
                                                            {product.icon}
                                                        </div>
                                                        <h4 className="text-[12px] sm:text-[13px] font-black text-slate-800 leading-tight font-heading group-hover/item:text-brand-blue transition-colors uppercase tracking-tight">
                                                            {product.name}
                                                        </h4>
                                                    </div>
                                                    
                                                    {/* Illustration Space */}
                                                    <div className="flex-1 flex items-center justify-center my-4 relative">
                                                        <div className={`${iconStyle.replace('600', '300')} opacity-40 group-hover/item:opacity-60 transition-all duration-700 transform group-hover/item:scale-125 group-hover/item:-rotate-6 animate-in zoom-in-50 duration-500`}>
                                                            {getIllustration(product.name)}
                                                        </div>
                                                        
                                                        {/* Decorative Element */}
                                                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 ${iconStyle.replace('600', '100')} rounded-full group-hover/item:bg-brand-blue/10 transition-colors duration-500`} />
                                                    </div>

                                                    {/* Buttons - Redesigned */}
                                                    <div className="relative z-10 flex items-center gap-4 mt-2">
                                                        <a 
                                                            href={product.quoteLink} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="flex-1 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-[10px] font-black uppercase tracking-wider hover:bg-blue-600 transition-all active:scale-95 shadow-md shadow-blue-500/30"
                                                        >
                                                            TEKLİF
                                                        </a>
                                                        <a 
                                                            href={product.infoLink}
                                                            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/60 text-slate-600 hover:text-brand-red hover:bg-white border border-white/80 shadow-sm transition-all duration-300 text-[10px] font-black uppercase tracking-widest whitespace-nowrap"
                                                        >
                                                            <Info className="w-4 h-4" />
                                                            BİLGİ
                                                        </a>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>

                                {/* Show More Button - Mobile Only */}
                                {!isExpanded && service.products.length > 3 && (
                                    <div className="mt-8 flex justify-center sm:hidden">
                                        <button 
                                            onClick={() => setIsExpanded(true)}
                                            className="w-full bg-slate-50 text-slate-500 border border-slate-100 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white hover:text-brand-blue transition-all active:scale-95"
                                        >
                                            TÜM ÜRÜNLERİ GÖR (+{service.products.length - 3})
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
