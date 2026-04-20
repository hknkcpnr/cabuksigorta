import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ShieldCheck, ArrowRight, CheckCircle2, Info, MessageCircle, PhoneCall } from 'lucide-react';
import Image from 'next/image';

const productData: Record<string, any> = {
    "trafik-sigortasi": {
        title: "Trafik Sigortası",
        description: "Karayolları Motorlu Araçlar Zorunlu Mali Sorumluluk Sigortası (Trafik Sigortası), her araç sahibinin yaptırması kanunen zorunlu olan, kaza anında karşı tarafı koruyan bir sigorta türüdür.",
        features: [
            "Karşı tarafın maddi hasarlarını güvence altına alır.",
            "Üçüncü şahısların bedeni zararlarını (tedavi, sakatlık) karşılar.",
            "Kaza durumunda hukuki koruma sağlar.",
            "2024 yılı güncel limitleri ile tam uyumludur."
        ],
        sections: [
            {
                title: "Trafik Sigortası Nedir?",
                content: "Zorunlu Trafik Sigortası, aracınızla trafikteyken üçüncü şahıslara (diğer araç sahipleri, yayalar, kamu malları) verebileceğiniz maddi ve bedeni zararları yasal limitler dahilinde karşılayan bir sigortadır. Kendi aracınızdaki hasarı değil, verdiğiniz zararı sizin adınıza sigorta şirketi öder."
            },
            {
                title: "Neden Yaptırılması Zorunludur?",
                content: "Bu sigorta, trafikte oluşabilecek yüksek maliyetli kazalarda mağdur olan tarafların zararlarının tazmin edilmesini garanti altına almak için devlet tarafından zorunlu tutulmuştur. Sosyal adaleti sağlamak ve kaza sonrası ekonomik kayıpları minimize etmek temel amaçtır."
            },
            {
                title: "Yaptırılmazsa Ne Olur? (Cezaları)",
                content: "Trafik sigortası olmayan araçlar trafikten men edilir ve otoparka çekilir. Ayrıca para cezası uygulanır. Eski poliçe yenilenmediğinde her ay için %5 gecikme zammı uygulanır. En önemlisi, kaza anında oluşan tüm zarar (milyonlarca lira olabilir) doğrudan araç sahibinden tahsil edilir."
            },
            {
                title: "Ücret Bilgileri ve Fiyatlama",
                content: "Trafik sigortası fiyatları; aracın plakası (şehri), kullanım amacı (hususi, ticari), aracın markası ve en önemlisi sürücünün 'Hasarsızlık Basamağı'na (1-7 arası) göre değişkenlik gösterir. 2024 yılında fiyatlar, tavan fiyat uygulaması çerçevesinde sigorta şirketleri arasında rekabetçi bir şekilde sunulmaktadır."
            }
        ],
        details: "Trafik Sigortası, trafikte güvenli bir yolculuk için temel şarttır. Poliçenizi yaptırmadan trafiğe çıkmak hem yasal hem de maddi açıdan büyük riskler taşır. Çabuk Sigorta olarak size saniyeler içinde en doğru teklifi sunuyoruz.",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200"
    },
    "kasko": {
        title: "Kasko Sigortası",
        description: "Aracınızı kaza, hırsızlık, yangın ve doğal afet gibi beklenmedik risklere karşı koruma altına alan en kapsamlı araç sigortasıdır.",
        features: [
            "Çarpma, çarpışma ve devrilme hasarları.",
            "Hırsızlık ve hırsızlığa teşebbüs.",
            "Yangın, sel ve su baskını teminatları.",
            "7/24 Yol yardım ve ikame araç hizmeti."
        ],
        details: "Kasko sigortası, zorunlu trafik sigortasının aksine sizin aracınızı ve bütçenizi korur. Genişletilmiş kasko paketleri ile mini onarım, cam kırılması ve ferdi kaza gibi ek teminatlarla tam koruma sağlayabilirsiniz.",
        image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200"
    },
    "tamamlayici-saglik": {
        title: "Tamamlayıcı Sağlık Sigortası",
        description: "SGK anlaşmalı özel hastanelerde fark ücreti ödemeden muayene ve tedavi olmanızı sağlayan bütçe dostu sağlık çözümüdür.",
        features: [
            "Özel hastanelerde 0 TL fark ücreti.",
            "Yatarak ve ayakta tedavi seçenekleri.",
            "Sınırsız yatarak tedavi teminatı.",
            "Yıllık 10 adet doktor muayenesi hakkı."
        ],
        details: "SGK'lı çalışanlar, memurlar veya emekliler için geçerlidir. Sadece SGK ile anlaşmalı özel hastanelerde geçerli olup, konforlu bir sağlık hizmeti almanızı sağlar. Vergi avantajından yararlanarak maliyetinizi daha da düşürebilirsiniz.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200"
    },
    "dask": {
        title: "DASK (Zorunlu Deprem Sigortası)",
        description: "Deprem ve deprem sonucu meydana gelen yangın, infilak, dev dalga (tsunami) veya yer kaymasının doğrudan neden olacağı maddi zararları karşılar.",
        features: [
            "Binalardaki deprem hasarlarını nakit karşılar.",
            "Devlet güvencesindedir (Doğal Afet Sigortaları Kurumu).",
            "Su, elektrik ve doğalgaz abonelikleri için zorunludur.",
            "Tapu işlemlerinde mecburi tutulur."
        ],
        details: "DASK, belediye sınırları içindeki tüm konutlar için zorunlu bir sigortadır. Amaç, deprem sonrası yaşamın hızla normale dönmesini sağlamaktır.",
        image: "https://images.unsplash.com/photo-1542601039-291110c80149?auto=format&fit=crop&q=80&w=1200"
    },
    "ozel-saglik": {
        title: "Özel Sağlık Sigortası",
        description: "En geniş hastane ağında, en yüksek limitlerle ve en konforlu koşullarda sağlık hizmeti almanızı sağlayan kişiye özel sigortadır.",
        features: [
            "Hemen hemen tüm özel hastanelerde geçerlidir.",
            "Yurt dışı tedavi teminatı eklenebilir.",
            "Check-up ve diş muayenesi gibi ek hizmetler.",
            "Limitsiz sağlık güvencesi."
        ],
        details: "Özel sağlık sigortası ile dilediğiniz doktoru ve hastaneyi seçme özgürlüğüne sahip olursunuz. SGK zorunluluğu yoktur.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
    },
    "konut-sigortasi": {
        title: "Konut Sigortası",
        description: "Evinizi ve içindeki eşyaları yangın, hırsızlık, su baskını ve daha pek çok riski kapsayacak şekilde güvenceye alır.",
        features: [
            "Eşya teminatı (hırsızlık, hasar).",
            "Komşulara verilen zararların karşılanması.",
            "Dekorasyon ve cam kırılması hasarları.",
            "Ücretsiz kombi/klima bakımı ve tesisatçı hizmeti."
        ],
        details: "Sadece binayı değil, yaşam alanınızı ve anılarınızı da korur. Kiracılar için de 'Eşya Sigortası' şeklinde yapılabilir.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
    },
    "seyahat-saglik": {
        title: "Seyahat Sağlık Sigortası",
        description: "Yurt dışı seyahatlerinizde başınıza gelebilecek ani hastalık veya kaza durumlarında tıbbi yardım ve transfer hizmeti sunan zorunlu sigortadır.",
        features: [
            "Vize başvuruları (Schengen vb.) için zorunludur.",
            "30.000 Euro teminatlı dünya genelinde geçerlilik.",
            "Tıbbi nakil ve vefat durumunda cenaze nakli.",
            "Kayıp valiz ve seyahat iptali ek teminatları."
        ],
        details: "Yurt dışına çıkmadan önce yaptırılması gerekir. Tatilinizi veya iş seyahatinizi beklenmedik hastane masraflarından korur.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109c05e?auto=format&fit=crop&q=80&w=1200"
    },
    "cep-telefonu": {
        title: "Cep Telefonu Sigortası",
        description: "Yeni nesil akıllı telefonlarınızı ekran kırılması, sıvı teması ve hırsızlığa karşı koruyan cihaz sigortasıdır.",
        features: [
            "Ekran kırılmasına karşı %100 güvence.",
            "Sıvı teması ve yüksek voltaj hasarları.",
            "Yetkili servis garantisi ile onarım.",
            "Kaza sonucu oluşan her türlü hasar."
        ],
        details: "Telefonların yüksek tamir maliyetlerine karşı cebinizi korur. Sadece yeni (genellikle ilk 30 gün içinde alınan) cihazlar için yapılabilir.",
        image: "https://images.unsplash.com/photo-1556656793-062ff987b50d?auto=format&fit=crop&q=80&w=1200"
    }
};

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = productData[id];

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Ürün Bulunamadı</h1>
                    <p className="text-slate-600 mb-8">Aradığınız sigorta ürünü henüz sistemimize eklenmemiş olabilir.</p>
                    <a href="/" className="bg-brand-red text-white px-8 py-3 rounded-full font-bold">Ana Sayfaya Dön</a>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50/50">
            <Navbar />
            
            {/* Hero Section */}
            <header className="relative min-h-[calc(100vh-61px)] flex flex-col justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                </div>

                <div className="wrapper relative z-10">
                    <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
                        <div className="inline-flex items-center gap-2 bg-brand-red text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
                            <ShieldCheck className="w-4 h-4" />
                            Kurumsal Sigorta Çözümleri
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                            {product.title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
                            {product.description}
                        </p>
                    </div>
                </div>
            </header>

            {/* Content Section */}
            <section className="py-20 lg:py-28">
                <div className="wrapper">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        
                        {/* Main Content */}
                        <div className="lg:col-span-7 space-y-12">
                            {/* Key Sections */}
                            {product.sections && (
                                <div className="space-y-8">
                                    {product.sections.map((section: any, idx: number) => (
                                        <div key={idx} className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500">
                                            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                                                <div className="w-2 h-6 bg-brand-blue rounded-full" />
                                                {section.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed font-medium">
                                                {section.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                                <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight flex items-center gap-3">
                                    <div className="w-1.5 h-8 bg-brand-red rounded-full" />
                                    Teminat Özeti
                                </h2>
                                <p className="text-slate-600 leading-loose text-lg font-medium italic mb-8">
                                    {product.details}
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {product.features.map((feature: string, idx: number) => (
                                        <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group transition-all">
                                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                                                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                                            </div>
                                            <span className="text-slate-700 font-bold text-sm leading-snug">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / CTA */}
                        <aside className="lg:col-span-5 sticky top-32 space-y-6">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl -mr-16 -mt-16" />
                                
                                <h3 className="text-2xl font-black text-slate-800 mb-6 relative z-10 font-heading tracking-tight">Anında Teklif Al</h3>
                                <p className="text-slate-500 mb-10 text-base leading-relaxed relative z-10 font-medium font-outfit">
                                    Dakikalarca beklemenize gerek yok. Tek tıkla WhatsApp üzerinden bize ulaşın, poliçeniz anında cebinizde olsun.
                                </p>
                                
                                <div className="space-y-4 relative z-10">
                                    <a 
                                        href={`https://wa.me/905352621717?text=${encodeURIComponent(product.title + " hakkında hızlı teklif almak istiyorum.")}`}
                                        className="w-full h-14 bg-[#25D366] text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:bg-[#128C7E] shadow-lg shadow-green-500/20 active:scale-[0.98]"
                                    >
                                        <MessageCircle className="w-5 h-5 fill-white/10" />
                                        WhatsApp&apos;tan Yaz
                                    </a>
                                    <a 
                                        href="tel:02323367172"
                                        className="w-full h-14 bg-slate-50 border border-slate-100 text-slate-600 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:bg-slate-100 active:scale-[0.98]"
                                    >
                                        <PhoneCall className="w-5 h-5" />
                                        Bizi Arayın
                                    </a>
                                </div>
                                
                                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-center">
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">10.000+ MUTLU MÜŞTERİ</span>
                                </div>
                            </div>
                            
                            <div className="bg-white p-8 rounded-[2rem] border border-slate-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                                        <Info className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900">Güven Veriyoruz</h4>
                                </div>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    Tüm süreçlerimiz KVKK kapsamında korunmakta ve en güvenilir sigorta şirketleri ile çalışmaktayız.
                                </p>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppFloat />
        </main>
    );
}
