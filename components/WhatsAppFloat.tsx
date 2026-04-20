'use client';

import { HelpCircle, X, ShieldCheck, MapPin, Zap } from 'lucide-react';
import React, { useState } from 'react';

const WhatsAppFloat = () => {
    const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
                {/* How it Works Button - Mobile Only */}
                <button
                    onClick={() => setIsHowItWorksOpen(true)}
                    aria-label="Nasıl Çalışıyoruz?"
                    className="md:hidden bg-brand-blue text-white w-12 h-12 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                >
                    <HelpCircle className="w-6 h-6" />
                </button>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/905352621717?text=Merhaba, sigorta teklifi almak istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp ile iletişime geç"
                    className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95 animate-whatsapp-pulse"
                >
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 448 512">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.3 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.6-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                </a>
            </div>

            {/* How it Works Modal - Only for Mobile */}
            {isHowItWorksOpen && (
                <div className="fixed inset-0 z-[110] md:hidden flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-sm rounded-[2rem] shadow-2xl overflow-hidden relative animate-in zoom-in-95 slide-in-from-bottom-5 duration-400">
                        {/* Close button */}
                        <button 
                            onClick={() => setIsHowItWorksOpen(false)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 active:scale-90 transition-transform"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8">
                            <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-2">
                                <Zap className="w-6 h-6 text-brand-red fill-brand-red/10" />
                                Nasıl Çalışıyoruz?
                            </h3>

                            <div className="space-y-8 relative">
                                <div className="absolute left-[17px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-400 via-emerald-400 to-red-400 opacity-20" />

                                {/* Steps */}
                                <div className="flex gap-5">
                                    <div className="relative z-10 w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
                                        <span className="text-brand-blue font-black text-xs">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-slate-900 text-[15px]">İhtiyacınızı Belirtin</h4>
                                        <p className="text-[13px] text-slate-500 font-medium mt-1">Ürünlerimizden size uygun olanı seçip hızlıca iletin.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="relative z-10 w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
                                        <span className="text-emerald-600 font-black text-xs">2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-slate-900 text-[15px]">Teklifi Seçin</h4>
                                        <p className="text-[13px] text-slate-500 font-medium mt-1">En uygun teklifler arasından seçiminizi yapıp onaylayın.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="relative z-10 w-9 h-9 rounded-full bg-red-50 flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
                                        <span className="text-brand-red font-black text-xs">3</span>
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-slate-900 text-[15px]">Poliçeniz Hazır</h4>
                                        <p className="text-[13px] text-slate-500 font-medium mt-1">Poliçeniz PDF olarak saniyeler içinde WhatsApp&apos;ınıza gelsin.</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsHowItWorksOpen(false)}
                                className="w-full mt-10 bg-brand-blue text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-blue-200 active:scale-95 transition-transform"
                            >
                                Anladım
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppFloat;
