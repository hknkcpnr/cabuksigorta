import React from 'react';

const Stats = () => {
    const statItems = [
        { value: "10.000+", label: "Memnun Müşteri", color: "text-brand-blue" },
        { value: "50.000+", label: "Hazırlanan Poliçe", color: "text-brand-red" },
        { value: "2 dk", label: "Ortalama Süre", color: "text-brand-blue" },
        { value: "20+", label: "İş Ortağı", color: "text-brand-red" },
    ];

    return (
        <section className="py-16 bg-white border-b border-slate-100">
            <div className="wrapper">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {statItems.map((item, index) => (
                        <div key={index} className="group">
                            <div className={`text-3xl md:text-4xl font-extrabold ${item.color} mb-2 tracking-tight font-heading`}>
                                {item.value}
                            </div>
                            <div className="w-8 h-[2px] bg-slate-200 mx-auto mb-3 group-hover:w-14 group-hover:bg-brand-blue transition-all duration-400" />
                            <p className="text-slate-500 font-bold uppercase text-[11px] tracking-[0.2em]">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
