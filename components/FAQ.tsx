'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HelpCircle, Plus, Minus, ArrowRight } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onToggle }: { question: string, answer: string, isOpen: boolean, onToggle: () => void }) => {
    return (
        <div className={`group transition-all duration-500 ${isOpen ? 'bg-slate-50/70 -mx-4 px-4 rounded-3xl' : ''}`}>
            <button
                onClick={onToggle}
                className="w-full py-5 flex items-start justify-between gap-4 text-left group"
            >
                <div className="flex gap-5">
                    <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen ? 'bg-brand-blue border-brand-blue shadow-lg shadow-blue-200' : 'border-slate-200 group-hover:border-brand-blue/30'}`}>
                        <HelpCircle className={`w-3.5 h-3.5 transition-colors ${isOpen ? 'text-white' : 'text-slate-400 group-hover:text-brand-blue'}`} />
                    </div>
                    <span className={`text-[15px] md:text-[17px] font-bold tracking-tight leading-snug transition-colors font-heading ${isOpen ? 'text-brand-blue font-extrabold' : 'text-slate-800'}`}>
                        {question}
                    </span>
                </div>
                <div className={`mt-1 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-blue/5 rotate-180' : 'bg-slate-50 group-hover:bg-brand-blue group-hover:text-white'}`}>
                    {isOpen ? (
                        <Minus className="w-4 h-4 text-brand-blue" />
                    ) : (
                        <Plus className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    )}
                </div>
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <p className="pl-[44px] text-slate-500 font-medium leading-relaxed text-[14px] md:text-base pr-4 max-w-2xl">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

    const questions = [
        {
            question: "Trafik sigortası her yıl zorunlu mu?",
            answer: "Evet, Zorunlu Trafik Sigortası her yıl yenilenmesi gereken kanuni bir zorunluluktur. Poliçesi biten araçların trafiğe çıkması yasaktır ve tespiti halinde araç trafikten men edilir."
        },
        {
            question: "Kasko ile trafik sigortası arasındaki temel fark nedir?",
            answer: "Trafik sigortası kaza anında karşı tarafın hasarını karşılarken; kasko sigortası sizin kendi aracınızdaki hasarları (çarpma, çalınma, yangın vb.) güvence altına alır. Kasko isteğe bağlıdır ancak tam koruma için tavsiye edilir."
        },
        {
            question: "Sigorta teklifi almak ne kadar sürer?",
            answer: "Çabuk Sigorta olarak 'çabuk' ismimizin hakkını veriyoruz. WhatsApp üzerinden ruhsatınızı ilettiğinizde, ekibimiz tüm şirketlerden teklifleri karşılaştırıp 5 dakika içinde size PDF olarak sunar."
        },
        {
            question: "Hasar anında ne yapmalıyım?",
            answer: "Sakinliğinizi koruyarak öncelikle bir hasar tespit tutanağı tutmalı ve fotoğraflar çekmelisiniz. Ardından 7/24 aktif olan WhatsApp hattımızdan bize ulaşarak hasar danışmanlarımızdan anlık destek alabilirsiniz."
        },
        {
            question: "Poliçe ödemelerinde taksit imkanı var mı?",
            answer: "Evet, anlaşmalı olduğumuz tüm önemli bankaların kredi kartlarına 9 aya varan taksit seçenekleri sunuyoruz. Ayrıca dijital ödeme sistemlerimiz ile güvenli bir şekilde ödemenizi tamamlayabilirsiniz."
        }
    ];

    return (
        <section id="sss" className="py-24 bg-white min-h-screen scroll-mt-20 relative overflow-hidden flex flex-col justify-center">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-50/30 rounded-full blur-[100px] -z-0" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-red-50/20 rounded-full blur-[80px] -z-0" />

            <div className="wrapper relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    
                    {/* Header Side */}
                    <div className="lg:col-span-5 relative">
                        <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl -z-10" />

                        <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 border border-slate-100 bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                                <HelpCircle className="w-3.5 h-3.5 text-brand-blue" />
                                Yardım Merkezi
                            </div>
                            <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-[1.15] tracking-tight font-heading">
                                Aklınıza Takılan <br className="hidden lg:block" />
                                <span className="text-brand-blue">Soruların</span> Cevapları Burada.
                            </h2>
                            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-sm">
                                Sigorta süreçleri ve poliçe detayları hakkında en çok merak edilen soruları sizin için derledik.
                            </p>
                            
                            <div className="pt-4">
                                <a 
                                    href="https://wa.me/905352621717?text=Merhaba, desteğe ihtiyacım var."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-4 bg-slate-900 text-white px-9 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-blue transition-all group hover:-translate-y-1 shadow-xl shadow-slate-100"
                                >
                                    DESTEK ALIN
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 min-h-[520px] relative flex flex-col justify-start">
                        {/* Optimized Background Image */}
                        <div className="absolute -bottom-10 -right-10 w-72 h-72 pointer-events-none opacity-[0.25] -z-10">
                            <Image 
                                src="/sikcasorulansorula.jpg"
                                alt="SSS Süsleme"
                                fill
                                sizes="288px"
                                className="object-contain object-right-bottom"
                                style={{ 
                                    maskImage: 'linear-gradient(to top left, black, transparent)',
                                    WebkitMaskImage: 'linear-gradient(to top left, black, transparent)'
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            {questions.map((item, index) => (
                                <FAQItem 
                                    key={index} 
                                    {...item} 
                                    isOpen={openIndex === index}
                                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
