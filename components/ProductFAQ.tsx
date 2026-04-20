"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';

interface FAQItem {
    q: string;
    a: string;
}

interface ProductFAQProps {
    faqs: FAQItem[];
}

const ProductFAQ = ({ faqs }: ProductFAQProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // Start with all closed

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="mt-20">
            <div className="flex items-center gap-4 mb-14">
                <div className="h-10 w-1.5 bg-emerald-500 rounded-full" />
                <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Sık Sorulan Sorular</h2>
            </div>
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div 
                        key={idx} 
                        className={`group bg-slate-50/50 rounded-3xl border transition-all duration-500 ${
                            activeIndex === idx 
                            ? 'bg-white border-brand-blue/20 shadow-xl shadow-slate-200/50' 
                            : 'border-slate-100 hover:border-slate-200 hover:bg-white'
                        }`}
                    >
                        <button
                            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-7 sm:p-8 text-left cursor-pointer outline-none"
                        >
                            <div className="flex items-center gap-5">
                                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                                    activeIndex === idx ? 'bg-emerald-500 text-white rotate-[360deg]' : 'bg-white text-slate-400 shadow-sm'
                                }`}>
                                    <HelpCircle className="w-5 h-5" />
                                </div>
                                <h4 className={`text-base sm:text-lg font-extrabold tracking-tight transition-colors duration-300 ${
                                    activeIndex === idx ? 'text-brand-blue' : 'text-slate-800'
                                }`}>
                                    {faq.q}
                                </h4>
                            </div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                                activeIndex === idx ? 'bg-slate-900 text-white rotate-90' : 'bg-slate-100 text-slate-400'
                            }`}>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </button>
                        
                        <div 
                            className={`grid transition-all duration-500 ease-in-out ${
                                activeIndex === idx ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className="px-8 sm:px-10">
                                    <div className="pl-8 sm:pl-10 border-l-2 border-emerald-500/20 py-1">
                                        <p className="text-slate-500 leading-relaxed font-medium text-sm sm:text-base">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductFAQ;
