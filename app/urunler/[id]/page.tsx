import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ShieldCheck, CheckCircle2, MessageCircle, PhoneCall, ArrowRight, Zap, Award, Clock, Heart, Home, Smartphone, Plane, Activity, Building2, ClipboardList, Ribbon, Dog } from 'lucide-react';
import { Metadata } from 'next';

const productData: Record<string, any> = {
    "trafik-sigortasi": {
        title: "Trafik Sigortası Teklifi | 2026 Güncel Limitler & Hızlı Poliçe",
        headerTitle: "Trafik Sigortası",
        description: "2026 yılı yasal limitleri ile uyumlu, Türkiye'nin 81 ilinde geçerli en uygun zorunlu trafik sigortası.",
        longDescription: "Zorunlu Trafik Sigortası, 2026 yılı itibarıyla güncellenen yüksek yasal limitlerle, trafikte üçüncü şahıslara verilebilecek maddi ve bedeni zararları teminat altına alır. Çabuk Sigorta olarak biz, SEDDK tarafından belirlenen en güncel tavan fiyat uygulamaları üzerinden saniyeler içinde teklif hazırlıyoruz.",
        requiredInfo: ["TC Kimlik Numarası", "Araç Plaka Numarası", "Ruhsat Seri ve Sıra No"],
        features: [
            { icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />, title: "2026 Güncel Limitler", desc: "Vefat, sakatlık ve maddi hasarlarda en yüksek yasal teminat garantisi." },
            { icon: <Zap className="w-6 h-6 text-brand-red" />, title: "Hızlı Teklif", desc: "Ruhsat bilgilerinizle WhatsApp üzerinden 1 dakikada poliçeniz hazır." },
            { icon: <Clock className="w-6 h-6 text-orange-500" />, title: "İptal & İade Kolaylığı", desc: "Araç satışı veya poliçe iptallerinde hızlı iade süreci." },
            { icon: <Award className="w-6 h-6 text-emerald-500" />, title: "Hasarsızlık Koruma", desc: "Basamak yükseltme ve indirim hakkınızın titizlikle takibi." }
        ],
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200"
    },
    "kasko": {
        title: "Kasko Sigortası | 2026 En Kapsamlı Araç Koruma Paketleri",
        headerTitle: "Kasko Sigortası",
        description: "Aracınızın değerini 2026 piyasa koşullarına göre koruyan, en geniş teminatlı kasko çözümleri.",
        longDescription: "2026 yılı ekonomik koşullarında araç bedellerinin korunması her zamankinden daha kritik. Genişletilmiş Kasko ürünümüz; çarpma, çarpışma, yanma ve hırsızlık gibi ana teminatların yanı sıra deprem, sel ve su baskını gibi doğal afetleri de eksiksiz kapsar.",
        requiredInfo: ["TC Kimlik Numarası", "Araç Plaka Numarası", "Ruhsat Seri Kodu", "Araç KM Bilgisi"],
        features: [
            { icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />, title: "Sınırsız İMM", desc: "Karşı tarafa verilebilecek zararlarda ucu açık, sınırsız koruma kalkanı." },
            { icon: <Zap className="w-6 h-6 text-brand-red" />, title: "Yetkili Servis", desc: "81 ilde markanızın tüm yetkili servislerinde orijinal parça garantisi." },
            { icon: <Clock className="w-6 h-6 text-orange-500" />, title: "Yol Yardım Desteği", desc: "Çekici ve yakıt ikmali Türkiye'nin her noktasında profesyonel hizmet." },
            { icon: <Award className="w-6 h-6 text-emerald-500" />, title: "Sıfır Değer Koruması", desc: "Yeni araçlarda ilk yıl içinde yaşanacak tam hasarlarda 0 km araç bedeli." }
        ],
        image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200"
    },
    "tamamlayici-saglik": {
        title: "Tamamlayıcı Sağlık Sigortası | 2026 Özel Hastane Ağı",
        headerTitle: "Tamamlayıcı Sağlık",
        description: "2026 yılında SGK anlaşmalı en seçkin özel hastanelerde ek ücret ödemeden tedavi imkanı.",
        longDescription: "Tamamlayıcı Sağlık Sigortası (TSS), SGK'lı çalışanlar için 2026 yılında en konforlu sağlık çözümüdür. Fark ücreti ödemeden modern tıbbın tüm imkanlarından yararlanabilirsiniz.",
        requiredInfo: ["TC Kimlik Numaraları (Tüm Bireyler)", "Boy ve Kilo Bilgisi"],
        features: [
            { icon: <Heart className="w-6 h-6 text-brand-red" />, title: "0 TL Katılım Payı", desc: "Özel hastanelerde fark ödemeden sadece devlet katılım payıyla muayene." },
            { icon: <Zap className="w-6 h-6 text-brand-blue" />, title: "Sınırsız Yatarak", desc: "Ameliyat, oda-yemek ve yoğun bakım giderlerinde sınırsız kapsam." },
            { icon: <Clock className="w-6 h-6 text-orange-500" />, title: "Doğum Teminatı", desc: "Bekleme süreli veya süresiz yeni nesil doğum paketi seçenekleri." },
            { icon: <Award className="w-6 h-6 text-emerald-500" />, title: "Vergi Avantajı", desc: "Ödediğiniz primin bir kısmını vergi indirimi olarak geri alabilirsiniz." }
        ],
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200"
    },
    "ozel-saglik": {
        title: "Özel Sağlık Sigortası | En Geniş Hastane Ağı & Global Koruma",
        headerTitle: "Özel Sağlık Sigortası",
        description: "Dünya standartlarında sağlık hizmeti ve dilediğiniz doktoru seçme özgürlüğü.",
        longDescription: "Özel Sağlık Sigortası, en geniş hastane ağında, SGK şartı aranmaksızın size en konforlu koşullarda tedavi imkanı sunar. Yurt dışı tedavi ve ücretsiz check-up gibi ek ayrıcalıklar hayatınızı kolaylaştırır.",
        requiredInfo: ["TC Kimlik Numarası", "Boy / Kilo", "Eski Poliçe Varsa Bilgisi"],
        features: [
            { icon: <Heart className="w-6 h-6 text-brand-red" />, title: "Limitsiz Güvence", desc: "Hemen hemen tüm özel hastanelerde geçerli limitsiz ve esnek seçenekler." },
            { icon: <Plane className="w-6 h-6 text-sky-500" />, title: "Global Koruma", desc: "Sınır tanımayan sağlık güvencesi ile dünyanın her yerinde yanınızdayız." },
            { icon: <Activity className="w-6 h-6 text-emerald-500" />, title: "Check-Up Paketi", desc: "Yılda bir kez ücretsiz profesyonel check-up ve diş bakım hizmeti." },
            { icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />, title: "Esnek Teminat", desc: "Sadece ihtiyacınız olan branşları içeren maliyet odaklı paketler." }
        ],
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
    },
    "dask": {
        title: "DASK Sigortası | 2026 Zorunlu Deprem Sigortası",
        headerTitle: "DASK Sigortası",
        description: "Deprem ve deprem kaynaklı afetlere karşı devlet güvenceli binanızı koruma altına alın.",
        longDescription: "2026 yılı güncellenen yapı birim maliyetleri üzerinden evinizi güvenceye alın. Deprem sonrası yaşamın hızla normale dönmesi için DASK en büyük yasal güvencenizdir.",
        requiredInfo: ["TC Kimlik Numarası", "Tam Açık Adres", "Tapu Ada/Parsel veya Tapu Kaydı"],
        features: [
            { icon: <Building2 className="w-6 h-6 text-brand-blue" />, title: "Yasal Zorunluluk", desc: "Tapu, elektrik ve su abonelik işlemleri için zorunlu yasal belge." },
            { icon: <Zap className="w-6 h-6 text-brand-red" />, title: "Devlet Güvencesi", desc: "Doğal Afet Sigortaları Kurumu tarafından sunulan tam mali kalkan." },
            { icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />, title: "Anında Poliçe", desc: "Adres bilgilerinizle WhatsApp'tan saniyeler içinde yasal poliçe." },
            { icon: <Clock className="w-6 h-6 text-orange-500" />, title: "Hasar Ödemesi", desc: "Olası bir sarsıntı anında hızlı nakit akışı ve hasar yönetimi." }
        ],
        image: "https://images.unsplash.com/photo-1542601039-291110c80149?auto=format&fit=crop&q=80&w=1200"
    },
    "konut-sigortasi": {
        title: "Konut Sigortası | Evinizi ve Eşyalarınızı Güvenle Koruyun",
        headerTitle: "Konut Sigortası",
        description: "Yangın, hırsızlık ve su baskını gibi ev içi tüm risklere karşı tam kapsamlı çözüm.",
        longDescription: "Konut Sigortası, sadece binanızı değil; evinizdeki tüm değerli eşyaları, mobilyaları ve elektronik cihazları korur. Çilingirden tesisatçıya kadar ücretsiz asistanlık hizmetleri de paketimize dahildir.",
        requiredInfo: ["TC Kimlik Numarası", "Tam Adres", "Bina m² ve İnşa Yılı Bilgisi"],
        features: [
            { icon: <Home className="w-6 h-6 text-brand-blue" />, title: "Eşya Koruması", desc: "Hırsızlık ve kaza sonucu oluşan eşya zararlarına karşı tam teminat." },
            { icon: <Zap className="w-6 h-6 text-brand-red" />, title: "Asistanlık", desc: "Ücretsiz kombi/klima bakımı, çilingir ve su tesisatı desteği." },
            { icon: <Clock className="w-6 h-6 text-orange-500" />, title: "Su Baskını", desc: "İçeriden veya dışarıdan kaynaklı tüm su hasarlarında tam güvence." },
            { icon: <Award className="w-6 h-6 text-emerald-500" />, title: "Komşu Sorumluluk", desc: "Komşunuza verebileceğiniz zararları (örn: su sızması) karşılar." }
        ],
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
    },
    "seyahat-saglik": {
        title: "Seyahat Sağlık Sigortası | Vize Uyumlu & Global Koruma",
        headerTitle: "Seyahat Sağlık",
        description: "Yurt dışı seyahatlerinizde vize başvurularına uyumlu 30.000€ teminatlı koruma.",
        longDescription: "Schengen vizesi başta olmak üzere tüm vize başvurularınızda zorunlu olan Seyahat Sağlık Sigortası, yurt dışındayken yaşayabileceğiniz kaza veya ani hastalık giderlerini karşılar. Kayıp bagajdan geri dönüş masraflarına kadar geniş bir asistanlık ağına sahip olun.",
        requiredInfo: ["TC Kimlik Numarası", "Gidilecek Ülke Grubu", "Seyahat Başlangıç ve Bitiş Tarihi"],
        features: [
            { icon: <Plane className="w-6 h-6 text-sky-500" />, title: "Vize Uyumlu", desc: "Schengen ve tüm dünya vizeleri için geçerli resmi poliçe." },
            { icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />, title: "Bagaj Koruma", desc: "Uçuş sırasında kaybolan veya hasar gören bagajlar için teminat." },
            { icon: <Activity className="w-6 h-6 text-brand-red" />, title: "Tıbbi Destek", desc: "Yurt dışındaki hastane ve ilaç masrafları için anında provizyon." },
            { icon: <Clock className="w-6 h-6 text-orange-500" />, title: "Asistan Hizmeti", desc: "Geri dönüş organizasyonu ve kayıp evrak danışmanlığı." }
        ],
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109c055?auto=format&fit=crop&q=80&w=1200"
    },
    "cep-telefonu": {
        title: "Cep Telefonu Sigortası | Ekran Kırılması & Sıvı Teması Koruması",
        headerTitle: "Cep Telefonu Sigortası",
        description: "Akıllı telefonlarınızı yüksek tamir maliyetlerine karşı 2026 standartlarında koruyun.",
        longDescription: "Yeni nesil cihazların ekran değişim maliyetleri binlerce lirayı bulabiliyor. Cep Telefonu Sigortası ile kaza sonucu kırılma veya sıvı teması durumlarında yetkili servis güvencesiyle onarım imkanı yakalayın.",
        requiredInfo: ["TC Kimlik Numarası", "Cihazın IMEI Numarası", "Cihaz Marka ve Model Bilgisi"],
        features: [
            { icon: <Smartphone className="w-6 h-6 text-slate-700" />, title: "Ekran Onarımı", desc: "Sadece orijinal parça kullanılarak profesyonel ekran değişimi." },
            { icon: <Zap className="w-6 h-6 text-brand-red" />, title: "Sıvı Teması", desc: "İstenmeyen dökülmeler ve sıvı hasarlarına karşı tam tamir kapsamı." },
            { icon: <Clock className="w-6 h-6 text-brand-blue" />, title: "Ücretsiz Kargo", desc: "Hasarlı cihazın evden alınıp servis sonrası eve teslim edilmesi." },
            { icon: <Award className="w-6 h-6 text-emerald-500" />, title: "Hırsızlık", desc: "Zor kullanılarak yapılan hırsızlıklara karşı ek teminat imkanı." }
        ],
        image: "https://images.unsplash.com/photo-1556656793-062ff987b50d?auto=format&fit=crop&q=80&w=1200"
    }
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const product = productData[id];
    if (!product) return { title: "Ürün Bulunamadı | Çabuk Sigorta" };
    return { title: product.title, description: product.description };
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = productData[id];

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
                <div className="text-center">
                    <h1 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Ürün Kaydı Eksik</h1>
                    <p className="text-slate-500 mb-8 max-w-sm mx-auto">Bu ürün için detaylı bilgi sayfası hazırlanıyor. Hemen teklif almak için WhatsApp hattımıza yazabilirsiniz.</p>
                    <div className="flex flex-col gap-3 max-w-xs mx-auto">
                        <a href={`https://wa.me/905352621717?text=Merhaba, bilgi almak istiyorum.`} className="bg-brand-red text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-red-500/20">Hemen WhatsApp&apos;a Yaz</a>
                        <a href="/" className="text-slate-400 font-bold uppercase text-[10px] tracking-widest hover:text-brand-blue py-2 transition-colors">Ana Sayfaya Dön</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            {/* Header Area */}
            <header className="pt-20 pb-16 bg-slate-900 relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-20">
                    <img src={product.image} alt={product.headerTitle} className="w-full h-full object-cover blur-sm" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
                <div className="wrapper relative z-10 pt-4">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/90 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/10">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                        2026 Güncel Güvence Standartları
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-tight">{product.headerTitle}</h1>
                    <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-medium">{product.description}</p>
                </div>
            </header>

            <section className="py-20 lg:py-28">
                <div className="wrapper">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        
                        <div className="lg:col-span-8 space-y-24">
                            {/* Detailed Info */}
                            <section>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-10 w-1.5 bg-brand-red rounded-full" />
                                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Kapsamlı Bilgilendirme</h2>
                                </div>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium">{product.longDescription}</p>
                            </section>

                            {/* Required Documents Section */}
                            <section className="bg-slate-50 p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -mr-16 -mt-16" />
                                <div className="flex items-center gap-5 mb-12 relative z-10 text-center md:text-left">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md">
                                        <ClipboardList className="w-7 h-7 text-brand-red" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Hazırlamanız Gerekenler</h2>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Hızlı Teklif İçin Yanınızda Bulunsun</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                                    {product.requiredInfo && product.requiredInfo.map((info: string, idx: number) => (
                                        <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-[1.8rem] border border-slate-100 group hover:border-brand-blue transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/5">
                                            <div className="w-7 h-7 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700 font-black text-sm tracking-tight uppercase leading-none">{info}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between opacity-60">
                                    <p className="text-[10px] text-slate-400 font-bold italic">* Bilgileriniz KVKK kapsamında %100 güvence altındadır.</p>
                                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                </div>
                            </section>

                            {/* Features Grid */}
                            <section>
                                <div className="flex items-center gap-4 mb-14">
                                    <div className="h-10 w-1.5 bg-brand-blue rounded-full" />
                                    <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Ürün Avantajları</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                                    {product.features && product.features.map((feature: any, idx: number) => (
                                        <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group">
                                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm border border-slate-50">{feature.icon}</div>
                                            <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{feature.title}</h4>
                                            <p className="text-slate-500 text-base leading-relaxed font-medium">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
                            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] text-center relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red via-brand-blue to-brand-red animate-shimmer"></div>
                                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter">İhtiyacın Olan <br/>Poliçe Tek Tıkla.</h3>
                                <p className="text-slate-500 mb-12 text-base font-medium leading-relaxed">2026 vizyonumuzla en doğru teklifi saniyeler içinde WhatsApp üzerinden hazırlıyoruz.</p>
                                
                                <div className="space-y-4">
                                    <a 
                                        href={`https://wa.me/905352621717?text=${encodeURIComponent(product.headerTitle + " teklifi almak istiyorum. Hazırlanması gereken bilgilerim yanımda.")}`}
                                        className="w-full h-18 lg:h-20 bg-[#25D366] text-white rounded-[1.5rem] font-black text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-4 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-2xl shadow-green-500/25"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <MessageCircle className="w-6 h-6 fill-white/10" />
                                        WhatsApp Teklif
                                        <ArrowRight className="w-4 h-4 opacity-30" />
                                    </a>
                                    <a href="tel:02323367172" className="w-full h-18 lg:h-20 bg-slate-50 text-slate-600 border border-slate-100 rounded-[1.5rem] font-black text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-4 hover:bg-slate-100 transition-all">
                                        <PhoneCall className="w-6 h-6 opacity-40" />
                                        Hemen Bizi Arayın
                                    </a>
                                </div>
                                <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-center gap-3">
                                    <Award className="w-4 h-4 text-brand-blue" />
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Resmi Yetkili Acente</span>
                                </div>
                            </div>

                            {/* Visual Signal */}
                            <div className="bg-brand-blue/5 p-8 rounded-[2.5rem] border border-brand-blue/10 flex items-center gap-5 group">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 group-hover:-rotate-6 transition-transform duration-500">
                                    <ShieldCheck className="w-7 h-7 text-brand-blue" />
                                </div>
                                <div className="text-xs font-bold text-slate-600 leading-relaxed uppercase tracking-tighter">
                                    Poliçelerimiz <span className="text-brand-blue">Türkiye&apos;nin 81 ilinde</span> servis garantili ve tam yetkilidir.
                                </div>
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
