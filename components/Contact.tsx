import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, ChevronRight, Globe } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, value, subValue, colorClass, link }: any) => (
    <div className="group relative p-6 rounded-3xl bg-white border border-indigo-50/50 hover:border-indigo-100 hover:shadow-[0_15px_30px_-10px_rgba(79,70,229,0.08)] transition-all duration-500 overflow-hidden">
        <div className={`absolute top-0 right-0 w-20 h-20 -mr-6 -mt-6 bg-gradient-to-br ${colorClass} opacity-[0.03] rounded-full blur-2xl group-hover:opacity-[0.06] transition-opacity`} />
        <div className="flex flex-col h-full">
            <div className="w-10 h-10 rounded-xl bg-indigo-50/50 border border-indigo-50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                <Icon className="w-4.5 h-4.5" />
            </div>
            <div className="space-y-0.5">
                <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 font-heading">{title}</h4>
                <div className="text-base font-bold text-slate-900 font-heading tracking-tight leading-snug">
                    {value}
                </div>
                {subValue && (
                    <p className="text-[10px] font-semibold text-slate-400 mt-1">{subValue}</p>
                )}
            </div>
        </div>
    </div>
);

const Contact = () => {
    return (
        <section id="iletisim" className="py-24 bg-white min-h-screen scroll-mt-20 relative overflow-hidden flex flex-col justify-center">
            {/* Minimalist Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            
            <div className="wrapper relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        {/* Left Column: Focused Intent */}
                        <div className="lg:col-span-5 space-y-10">
                            <div className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-heading">İletişim Üssü</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95] font-heading">
                                    Size <span className="text-brand-blue">Tek Tık</span> <br className="hidden lg:block" />
                                    Kadar Yakınız.
                                </h2>
                                <p className="text-base text-slate-500 font-medium leading-relaxed max-w-sm">
                                    Sigorta ihtiyaçlarınıza cerrahi hassasiyetle yaklaşıyor, en uygun çözümleri anında sunuyoruz.
                                </p>
                            </div>

                            {/* Dense Quick Action Block */}
                            <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group shadow-2xl shadow-slate-200">
                                <div className="absolute -right-4 -top-4 w-32 h-32 bg-brand-blue opacity-10 blur-3xl" />
                                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest opacity-80">Hızlı Destek Hattı</p>
                                        <a href="tel:02323367172" className="text-2xl font-black font-heading tracking-tight hover:text-brand-blue transition-colors block">
                                            (0232) 336 71 72
                                        </a>
                                    </div>
                                    <a href="https://wa.me/905352621717" className="h-14 px-8 bg-brand-blue text-white rounded-xl flex items-center justify-center font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all active:scale-95 shadow-lg shadow-brand-blue/20">
                                        WHATSAPP
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Information Grid & Map */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ContactCard 
                                    icon={MapPin}
                                    title="Merkez Ofis"
                                    value={<>Şemikler, 6255. Sk. 9 A, <br />Karşıyaka/İzmir</>}
                                    colorClass="from-brand-blue to-blue-400"
                                />
                                <ContactCard 
                                    icon={Clock}
                                    title="Çalışma Saatleri"
                                    value="09:00 - 18:00"
                                    subValue="Cumartesi: 09:00 - 13:00"
                                    colorClass="from-brand-red to-red-400"
                                />
                            </div>
                            
                            {/* Integrated Architectural Map */}
                            <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl group h-[340px] relative">
                                <iframe 
                                    src="https://maps.google.com/maps?q=Şemikler, 6255. Sk. 9 A, 35560 Karşıyaka/İzmir&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen 
                                    loading="lazy" 
                                    className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute bottom-6 left-6 right-6 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl flex items-center justify-between z-20">
                                    <div className="px-5 py-2 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                                        <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest font-heading">Merkez Şubemiz</span>
                                    </div>
                                    <a href="https://www.google.com/maps/dir/?api=1&destination=Şemikler,+6255.+Sk.+9+A,+35560+Karşıyaka/İzmir" target="_blank" rel="noopener noreferrer" className="h-10 px-5 bg-slate-900 text-white rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-brand-blue transition-all">
                                        YOL TARİFİ
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
        </section>
    );
};

export default Contact;
