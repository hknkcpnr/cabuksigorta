import React from 'react';
import { Mail, Phone, ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-bg text-white pt-20 pb-12">
            <div className="wrapper">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {/* Brand */}
                    <div>
                        <div className="relative inline-flex items-center mb-6 pr-12">
                            <div className="text-xl font-extrabold tracking-tight font-heading">
                                <span className="text-white">hakiki</span>
                                <span className="text-brand-red">çabuk</span>
                                <span className="text-white/30">sigorta</span>
                            </div>
                            <div className="absolute top-[-4px] right-0 bg-white/10 text-white px-1.5 py-0.5 rounded text-[8px] font-black tracking-widest border border-white/10">
                                .COM.TR
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
                            Sigortacılığı dijital hız ve insani dokunuşla yeniden tanımlıyoruz. Hızlı ve uzman desteği ile her ihtiyacınızda yanınızdayız.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 font-heading">İletişim</h4>
                        <div className="space-y-6">
                            <a href="tel:+905352621717" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                    <Phone className="w-4 h-4 text-green-500" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase text-slate-500 tracking-wider mb-0.5">WhatsApp Hattı</p>
                                    <p className="text-base font-bold text-white tabular-nums font-heading">+90 535 262 17 17</p>
                                </div>
                            </a>
                            <a href="mailto:info@cabuksigorta.com.tr" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                                    <Mail className="w-4 h-4 text-brand-red" />
                                </div>
                                <div>
                                    <p className="text-[9px] font-bold uppercase text-slate-500 tracking-wider mb-0.5">E-Posta</p>
                                    <p className="text-base font-bold text-white">info@cabuksigorta.com.tr</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* License */}
                    <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 font-heading">Resmi Lisanslar</h4>
                        <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-2.5 mb-4">
                                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                                <p className="text-sm text-slate-300 font-semibold">Yetkili Sigorta Acentesi</p>
                            </div>
                            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                                T.C. Hazine ve Maliye Bakanlığı ve SEDDK tarafından yetkilendirilmiş resmi sigorta acentesidir.
                            </p>
                            <div className="flex gap-3">
                                <div className="h-9 px-4 bg-white/5 rounded-lg flex items-center text-[10px] font-bold tracking-widest text-slate-400 border border-white/5">SEDDK</div>
                                <div className="h-9 px-4 bg-white/5 rounded-lg flex items-center text-[10px] font-bold tracking-widest text-slate-400 border border-white/5">TOBB</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Only Copyright */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                        &copy; 2026 Hakiki Çabuk Sigorta | Tüm Hakları Saklıdır
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
