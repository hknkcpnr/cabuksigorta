import React from 'react';
import { Mail, Phone, ShieldCheck, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-bg text-white pt-20 pb-10">
            <div className="wrapper">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-16 border-b border-white/5">
                    {/* Brand */}
                    <div>
                        <div className="text-xl font-extrabold mb-6 tracking-tight font-heading">
                            <span className="text-white">hakiki</span>
                            <span className="text-brand-red">çabuk</span>
                            <span className="text-white/30">sigorta</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm mb-8 max-w-xs">
                            Sigortacılığı dijital hız ve insani dokunuşla yeniden tanımlıyoruz. 7/24 uzman desteği ile yanınızdayız.
                        </p>
                        <div className="flex gap-3">
                            {['fb', 'tw', 'ig', 'li'].map(social => (
                                <div key={social} className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all cursor-pointer">
                                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                                </div>
                            ))}
                        </div>
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

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                    <p>&copy; 2024 Hakiki Çabuk Sigorta | Tüm Hakları Saklıdır</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma</a>
                        <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
