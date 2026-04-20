import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            text: "WhatsApp üzerinden ruhsatı attım, 3 dakika içinde kasko teklifim PDF olarak geldi. Gerçekten çok çabuk!",
            author: "Ahmet Y.",
            initials: "AY",
            color: "bg-brand-blue"
        },
        {
            text: "Tamamlayıcı sağlık sigortası için en uygun fiyatı burada buldum. Müşteri temsilcisi çok ilgiliydi.",
            author: "Selin K.",
            initials: "SK",
            color: "bg-brand-red"
        },
        {
            text: "DASK yenilememi 1 dakika içinde hallettiler. Zamanım bana kaldı, teşekkürler Çabuk Sigorta.",
            author: "Murat B.",
            initials: "MB",
            color: "bg-brand-blue"
        }
    ];

    return (
        <section id="yorumlar" className="py-24 bg-white min-h-screen scroll-mt-20 relative overflow-hidden flex flex-col justify-center">
            <div className="wrapper">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[10px] font-bold uppercase text-brand-red tracking-[0.25em] mb-3 block">
                        Müşteri Deneyimleri
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        Güveniniz Bizim İçin <span className="text-brand-blue">Değerli</span>
                    </h2>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card relative">
                            <Quote className="text-brand-blue/8 w-10 h-10 absolute top-5 right-5" />

                            <div className="flex gap-0.5 mb-4">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
                                &ldquo;{review.text}&rdquo;
                            </p>

                            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                <div className={`w-10 h-10 ${review.color} text-white rounded-xl flex items-center justify-center font-bold text-sm`}>
                                    {review.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-slate-800">{review.author}</div>
                                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Doğrulanmış Müşteri</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
