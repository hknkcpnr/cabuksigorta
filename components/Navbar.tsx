'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Phone, Menu, X, HelpCircle, MapPin, Grid } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="sticky top-0 z-[100] glass-nav border-b border-slate-100">
            <div className="w-full px-6 md:px-12 flex items-center justify-between py-2.5">
                {/* Logo */}
                <a href="/" className="relative w-40 sm:w-44 shrink-0 transition-transform hover:scale-105">
                    <Image src="/cabuksigortaLogo.png" alt="Çabuk Sigorta" width={180} height={160} className="w-full h-auto" />
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-10">
                    <a href="#hizmetler" className="text-[14px] font-semibold text-slate-700 hover:text-brand-blue transition-colors">
                        Ürünlerimiz
                    </a>
                    <a href="#iletisim" className="text-[14px] font-semibold text-slate-700 hover:text-brand-blue transition-colors">
                        İletişim
                    </a>
                    <a href="#sss" className="group flex items-center gap-2.5 text-[14px] font-bold text-slate-700 hover:text-brand-blue transition-colors">
                        Sıkça Sorulan Sorular
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100/50 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all">
                            <HelpCircle className="w-3.5 h-3.5 text-brand-blue group-hover:text-white transition-colors" />
                        </div>
                    </a>
                </div>

                {/* Desktop CTA area */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-full bg-brand-blue/5 flex items-center justify-center border border-brand-blue/10">
                            <Phone className="w-4 h-4 text-brand-blue fill-brand-blue/10" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] font-bold uppercase text-slate-400 tracking-[0.2em]">Bizi Arayın</span>
                            <a href="tel:02323367172" className="text-sm font-extrabold text-brand-blue hover:text-brand-red transition-colors tabular-nums font-heading">
                                (0232) 336 71 72
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button 
                    onClick={toggleMenu}
                    className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    aria-label="Menüyü Aç/Kapat"
                >
                    {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-x-0 top-[61px] bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                <div className="p-6 flex flex-col gap-6">
                    {/* Links */}
                    <div className="flex flex-col gap-2">
                        <a href="#hizmetler" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-bold text-slate-800 hover:text-brand-blue transition-colors p-3 rounded-xl hover:bg-slate-50">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <Grid className="w-5 h-5 text-brand-blue" />
                            </div>
                            Ürünlerimiz
                        </a>
                        <a href="#sss" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-bold text-slate-800 hover:text-brand-blue transition-colors p-3 rounded-xl hover:bg-slate-50">
                            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                                <HelpCircle className="w-5 h-5 text-slate-500" />
                            </div>
                            Sıkça Sorulan Sorular
                        </a>
                        <a href="#iletisim" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-bold text-slate-800 hover:text-brand-blue transition-colors p-3 rounded-xl hover:bg-slate-50">
                            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-brand-red" />
                            </div>
                            İletişim
                        </a>
                    </div>
                    
                    <div className="h-px bg-slate-100 w-full" />

                    {/* Contact Info */}
                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                        <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                            <Phone className="w-5 h-5 text-brand-blue" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Hızlı Destek Hattı</span>
                            <a href="tel:02323367172" className="text-lg font-black text-brand-blue">(0232) 336 71 72</a>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <a
                        href="https://wa.me/905352621717?text=Merhaba, teklif almak istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-brand-red text-white w-full py-3 rounded-2xl text-center text-sm font-black uppercase tracking-[0.1em] shadow-lg shadow-red-100 flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
                    >
                        <ShieldCheck className="w-5 h-5" />
                        Hızlı Teklif Al
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
