import React, { useState } from 'react';
import { Info, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface Product {
    name: string;
    icon: React.ReactNode;
    infoLink: string;
    quoteLink: string;
    isNew?: boolean;
}

interface ServiceCardProps {
    title: string;
    icon: React.ReactNode;
    bgColor: string;
    textColor: string;
    accentColor: string;
    products: Product[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, bgColor, textColor, accentColor, products }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const isBlue = accentColor === 'border-blue-100';

    return (
        <div className="service-card group/card">
            {/* Colored Top Bar */}
            <div className={`h-1 ${isBlue ? 'bg-gradient-to-r from-brand-blue to-blue-400' : 'bg-gradient-to-r from-brand-red to-red-400'}`} />

            {/* Card Header - Clickable on Mobile */}
            <div 
                className="p-5 pb-3 cursor-pointer md:cursor-default"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className={`${bgColor} ${textColor} w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-3`}>
                            {icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-slate-800 tracking-tight">{title}</h3>
                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{products.length} Sigorta Ürünü</p>
                        </div>
                    </div>
                    
                    {/* Mobile Only Toggle Icon */}
                    <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center md:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-5 h-5 text-slate-500" />
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="mx-5 h-px bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100" />

            {/* Products List - Collapsible on Mobile with smooth transition */}
            <div className={`grid transition-all duration-300 ease-in-out md:grid-rows-[1fr] md:opacity-100 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 md:opacity-100'}`}>
                <div className="overflow-hidden">
                    <div className="p-2 pt-0 flex-1 flex flex-col">
                        {/* Initial 3 Products */}
                        {products.slice(0, 3).map((product, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-slate-50 transition-all group/item"
                            >
                                {/* Icon Container */}
                                <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover/item:bg-white group-hover/item:shadow-md group-hover/item:shadow-blue-500/10 group-hover/item:scale-110 flex items-center justify-center transition-all duration-300 shrink-0 border border-slate-100/50">
                                    <span className="text-slate-400 group-hover/item:text-brand-blue transition-colors [&>svg]:w-4 [&>svg]:h-4">
                                        {product.icon}
                                    </span>
                                </div>

                                {/* Name */}
                                <div className="flex-1 min-w-0 flex items-center gap-2">
                                    <span className="text-[13px] font-bold text-slate-600 group-hover/item:text-brand-blue transition-colors truncate">
                                        {product.name}
                                    </span>
                                </div>

                                {/* Buttons */}
                                <div className="flex items-center gap-1 shrink-0">
                                    <Link
                                        href={product.infoLink}
                                        title="Bilgi Al"
                                        className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-100 text-slate-400 hover:bg-brand-red hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm hover:shadow-red-200"
                                    >
                                        <Info className="w-3.5 h-3.5" />
                                    </Link>
                                    <a
                                        href={product.quoteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-7 px-3 flex items-center gap-1.5 rounded-md bg-slate-100 text-slate-500 hover:bg-brand-blue hover:text-white transition-all font-bold text-[10px] uppercase tracking-wide transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-blue-200 group/btn"
                                    >
                                        <span className="opacity-70 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">Teklif</span>
                                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}

                        {/* Extra Products with Slide Animation */}
                        <div className={`grid transition-all duration-500 ease-in-out grid-rows-[1fr] opacity-100 md:grid-rows-[0fr] md:opacity-0 ${isExpanded ? 'md:grid-rows-[1fr] md:opacity-100 mt-0' : ''}`}>
                            <div className="overflow-hidden">
                                {products.slice(3).map((product, index) => (
                                    <div
                                        key={index + 3}
                                        className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-slate-50 transition-all group/item"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover/item:bg-white group-hover/item:shadow-md group-hover/item:shadow-blue-500/10 group-hover/item:scale-110 flex items-center justify-center transition-all duration-300 shrink-0 border border-slate-100/50">
                                            <span className="text-slate-400 group-hover/item:text-brand-blue transition-colors [&>svg]:w-4 [&>svg]:h-4">
                                                {product.icon}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0 flex items-center gap-2">
                                            <span className="text-[13px] font-bold text-slate-600 group-hover/item:text-brand-blue transition-colors truncate">
                                                {product.name}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 shrink-0">
                                            <Link href={product.infoLink} title="Bilgi Al" className="w-7 h-7 flex items-center justify-center rounded-md bg-slate-100 text-slate-400 hover:bg-brand-red hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm hover:shadow-red-200">
                                                <Info className="w-3.5 h-3.5" />
                                            </Link>
                                            <a href={product.quoteLink} target="_blank" rel="noopener noreferrer" className="h-7 px-3 flex items-center gap-1.5 rounded-md bg-slate-100 text-slate-500 hover:bg-brand-blue hover:text-white transition-all font-bold text-[10px] uppercase tracking-wide transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-blue-200 group/btn">
                                                <span className="opacity-70 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">Teklif</span>
                                                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Show More / Show Less Button - Desktop Only */}
                        {products.length > 3 && (
                            <button 
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-2 mx-3 py-2 px-4 hidden md:flex rounded-lg bg-slate-50 text-slate-500 hover:bg-brand-blue hover:text-white transition-all text-[11px] font-black uppercase tracking-widest items-center justify-center gap-2 group/more border border-slate-100 shadow-sm"
                            >
                                <span>{isExpanded ? 'Daha Az' : `Daha Fazla (+${products.length - 3})`}</span>
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
