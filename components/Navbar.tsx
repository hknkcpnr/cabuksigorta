'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Phone, Plane, Menu, X, HelpCircle, MapPin, Grid, ChevronRight, Zap, Heart, Activity, Building2, Home, Smartphone, Dog } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="sticky top-0 z-[100] glass-nav border-b border-slate-100">
            <div className="w-full px-6 md:px-12 flex items-center justify-between py-2.5">
                {/* Logo */}
                <a href="/" className="relative w-56 sm:w-64 shrink-0 transition-transform hover:scale-105">
                    <Image src="/cabuksigortaLogo.png" alt="Çabuk Sigorta" width={200} height={160} className="w-full h-auto" />
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-10">
                    <div className="group relative py-4">
                        <button className="flex items-center gap-1.5 text-[14px] font-semibold text-slate-700 group-hover:text-brand-blue transition-colors outline-none cursor-default">
                            Ürünlerimiz
                            <ChevronRight className="w-3.5 h-3.5 rotate-90 group-hover:rotate-[-90deg] transition-transform duration-300" />
                        </button>

                        {/* Mega Dropdown menu */}
                        <div className="absolute top-full left-[-380px] w-[960px] bg-white rounded-[3rem] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.2)] border border-slate-100 p-12 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 z-[110] overflow-hidden">
                            <div className="grid grid-cols-4 gap-12">
                                {/* Category 1: Araç */}
                                <div>
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-3">Araç Sigortaları</h5>
                                    <div className="space-y-1">
                                        <a href="/urunler/trafik-sigortasi" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group/item">
                                            <div className="w-8 h-8 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-blue group-hover/item:bg-brand-blue group-hover/item:text-white transition-all">
                                                <ShieldCheck className="w-4 h-4" />
                                            </div>
                                            <p className="text-[13px] font-bold text-slate-700">Trafik Sigortası</p>
                                        </a>
                                        <a href="/urunler/trafik-sigortasi" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group/item">
                                            <div className="w-8 h-8 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-400 group-hover/item:bg-blue-400 group-hover/item:text-white transition-all">
                                                <Zap className="w-4 h-4" />
                                            </div>
                                            <p className="text-[13px] font-bold text-slate-700">2. El Trafik</p>
                                        </a>
                                        <a href="/urunler/trafik-sigortasi" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group/item">
                                            <div className="w-8 h-8 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-emerald-500 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all">
                                                <Plane className="w-4 h-4" />
                                            </div>
                                            <p className="text-[13px] font-bold text-slate-700">Yeşil Kart Sigortası</p>
                                        </a>
                                        <a href="/urunler/kasko" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group/item">
                                            <div className="w-8 h-8 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-brand-red group-hover/item:bg-brand-red group-hover/item:text-white transition-all">
                                                <ShieldCheck className="w-4 h-4" />
                                            </div>
                                            <p className="text-[13px] font-bold text-slate-700">Kasko Sigortası</p>
                                        </a>
                                        <a href="/urunler/kasko" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group/item">
                                            <div className="w-8 h-8 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all">
                                                <Zap className="w-4 h-4" />
                                            </div>
                                            <p className="text-[13px] font-bold text-slate-700">Elektrikli Araç Kasko</p>
                                        </a>
                                        <a href="/urunler/trafik-sigortasi" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group/item">
                                            <div className="w-8 h-8 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover/item:bg-slate-400 group-hover/item:text-white transition-all">
                                                <Activity className="w-4 h-4" />
                                            </div>
                                            <p className="text-[13px] font-bold text-slate-700">Kısa Süreli Trafik</p>
                                        </a>
                                        <a href="/urunler/trafik-sigortasi" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group/item">
                                            <div className="w-8 h-8 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all">
                                                <ShieldCheck className="w-4 h-4" />
                                            </div>
                                            <p className="text-[13px] font-bold text-slate-700">İMM Sigortası</p>
                                        </a>
                                    </div>
                                </div>

                                {/* Category 2: Sağlık */}
                                <div>
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-3">Sağlık Sigortaları</h5>
                                    <div className="space-y-1">
                                        <a href="/urunler/tamamlayici-saglik" className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-emerald-50 transition-colors group/item">
                                            <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-500 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all">
                                                <Heart className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700">Tamamlayıcı Sağlık</p>
                                                <p className="text-[11px] text-slate-400 font-medium">Özel Hastane Ağı</p>
                                            </div>
                                        </a>
                                        <a href="/urunler/ozel-saglik" className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-emerald-50 transition-colors group/item">
                                            <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-blue group-hover/item:bg-brand-blue group-hover/item:text-white transition-all">
                                                <Activity className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700">Özel Sağlık</p>
                                                <p className="text-[11px] text-slate-400 font-medium">Lüks Hastane Konforu</p>
                                            </div>
                                        </a>
                                        <a href="/urunler/seyahat-saglik" className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-emerald-50 transition-colors group/item">
                                            <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-sky-500 group-hover/item:bg-sky-500 group-hover/item:text-white transition-all">
                                                <Plane className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700">Seyahat Sağlık</p>
                                                <p className="text-[11px] text-slate-400 font-medium">Vize & Yurt Dışı</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Category 3: Konut */}
                                <div>
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-3">Konut & Mal</h5>
                                    <div className="space-y-1">
                                        <a href="/urunler/dask" className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-orange-50 transition-colors group/item">
                                            <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-blue group-hover/item:bg-brand-blue group-hover/item:text-white transition-all">
                                                <Building2 className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700">DASK Sigortası</p>
                                                <p className="text-[11px] text-slate-400 font-medium">Zorunlu Deprem</p>
                                            </div>
                                        </a>
                                        <a href="/urunler/konut-sigortasi" className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-orange-50 transition-colors group/item">
                                            <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-500 group-hover/item:bg-orange-500 group-hover/item:text-white transition-all">
                                                <Home className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700">Konut Sigortası</p>
                                                <p className="text-[11px] text-slate-400 font-medium">Eviniz Güvende</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Category 4: Diğer */}
                                <div>
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-3">Özel Güvenceler</h5>
                                    <div className="space-y-1">
                                        <a href="/urunler/cep-telefonu" className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-100 transition-colors group/item">
                                            <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-600 group-hover/item:bg-slate-600 group-hover/item:text-white transition-all">
                                                <Smartphone className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700">Cep Telefonu</p>
                                                <p className="text-[11px] text-slate-400 font-medium">Kırılma & Sıvı</p>
                                            </div>
                                        </a>
                                        <a href="/urunler/evcil-hayvan" className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-100 transition-colors group/item">
                                            <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover/item:bg-orange-600 group-hover/item:text-white transition-all">
                                                <Dog className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700">Evcil Hayvan</p>
                                                <p className="text-[11px] text-slate-400 font-medium">Patili Dostlar</p>
                                            </div>
                                        </a>
                                        <a href="/urunler/ferdi-kaza" className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-100 transition-colors group/item">
                                            <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-red-500 group-hover/item:bg-red-500 group-hover/item:text-white transition-all">
                                                <ShieldCheck className="w-4.5 h-4.5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-700">Ferdi Kaza</p>
                                                <p className="text-[11px] text-slate-400 font-medium">Maddi Güvence</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Dropdown Footer */}
                            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Tüm poliçeler 2026 yasal limitleri ile uyumludur.</p>
                                <a href="/#hizmetler" className="text-[10px] font-black text-brand-blue uppercase hover:underline">Tümünü Gör</a>
                            </div>
                        </div>
                    </div>

                    <a href="/#iletisim" className="text-[14px] font-semibold text-slate-700 hover:text-brand-blue transition-colors">
                        İletişim
                    </a>
                    <a href="/#sss" className="group flex items-center gap-2.5 text-[14px] font-bold text-slate-700 hover:text-brand-blue transition-colors">
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
            <div className={`lg:hidden fixed inset-x-0 top-[80px] bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                <div className="p-6 flex flex-col gap-6">
                    {/* Links */}
                    <div className="flex flex-col gap-2">
                        <a href="/#hizmetler" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-bold text-slate-800 hover:text-brand-blue transition-colors p-3 rounded-xl hover:bg-slate-50">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <Grid className="w-5 h-5 text-brand-blue" />
                            </div>
                            Ürünlerimiz
                        </a>
                        <a href="/#sss" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-bold text-slate-800 hover:text-brand-blue transition-colors p-3 rounded-xl hover:bg-slate-50">
                            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                                <HelpCircle className="w-5 h-5 text-slate-500" />
                            </div>
                            Sıkça Sorulan Sorular
                        </a>
                        <a href="/#iletisim" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-bold text-slate-800 hover:text-brand-blue transition-colors p-3 rounded-xl hover:bg-slate-50">
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
