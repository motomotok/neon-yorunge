/* ===== HAYAT VERİSİ: Hasan (kaynak metin: ../../hayatlar/01_simitci_hasan.md) =====
   Bu dosyada yalnız veri var; motor js/ klasöründe. Yeni hayat = bu dosyanın bir kopyası.
   Sahneler sırayla oynanır; atla(b) doğruysa sahne geçilir. b = bu oyunda konan bayraklar.
   metin: tek sayfa ya da sayfa listesi (her sayfa en fazla 3 kısa cümle).
   Seçim tipleri: dokun (varsayılan) · basili (basılı tut) · sureli (süre dolunca ilk seçenek) · surukle (kartı yukarı, sahneye sürükle)
   Seçim alanları: etki {enerji,huzur,para,bag} · bayrak · sonuc (seçimden sonra beliren satırlar) · oyun (denge/topla) · saatSonra
   Görseller: assets/<klasor>/<gorsel>.jpg; yoksa yedek mekan plakaları (assets/<yedek>.jpg) sırayla denenir. */
window.HAYATLAR = window.HAYATLAR || {};
/* simit hesabı: tanesi 15 liraya satılır, fırına 10 lira borçlanılır; ıslak simit 8 lira */
const hSat = (n, fiyat = 15) => ({ simit:-n, para:n * fiyat, satis:n });
const hHesap = b => b.fazla ? 1300 : 1200;      // 120 x 10; fazlanın yarısını Rıza üstleniyor
HAYATLAR.hasan = {
  id: "hasan", klasor: "hasan", isim: "Hasan", gunAdi: "Hasan'ın günü", hazir: true,
  /* bölüm başına ortam sesi; bir sahnede ortam:"..." ile değişir. efekt: sahne girişinde çalar (alarm ve telefon sahne boyunca) */
  /* bölüm başına müzik; bir sahnede muzik:"..." ya da muzik:null (sus) ile değişir */
  muzikler: { b01:"hasan_gun", b02:"hasan_gun", b03:"hasan_gun", b04:"hasan_gun", b05:"hasan_gun", b06:"hasan_gun", b07:"hasan_gun", b08:"hasan_gun", b09:"hasan_yagmur", b10:"hasan_yagmur", b11:"hasan_yagmur", b12:"hasan_aksam", b13:"hasan_aksam" },
  /* Kader Haritası: iz = kırmızı çizginin başladığı saat, ucundaki damga ve sonundaki söz, digerleri = sondaki öteki hayatlar */
  harita: {
    iz: { bas:"06:00", damga:"yagmurluk", yazi:["Kırmızı çizgi senin yolun değil.", "Bütün gün biri peşinden geldi."] },
    digerleri: [
      { ad:"Deniz", damga:"deniz", not:"Son soruyu yetiştiremeyecek." },
      { ad:"Kemal", damga:"kemal", not:"Ocağını kaybettiğini öğrenecek." },
      { ad:"Emre", damga:"emre", not:"İlk tutanağını yazacak." },
      { ad:"Burak", damga:"burak", not:"Hesabı kapatılacak." },
      { ad:"?", damga:"yagmurluk", not:"Kırmızı çizginin sahibi. Hepsini bitirince." }
    ]
  },
  ortamlar: { b01:"gece", b02:"firin", b03:"sabah", b04:"sabah", b05:"sabah", b06:"sokak", b07:"sokak", b08:"ruzgar", b09:"yagmur", b10:"cisenti", b11:"aksam", b12:"gece", b13:"ev" },
  kader: { cumle: "Bu Salı, saat 15:00'te Hasan'ın simitleri yere düşecek.", meta: "Hasan · Salı · 05:30", cizim: "assets/kader_hasan.jpg" },
  baslangic: { enerji: 6, huzur: 5, para: 0, bag: 3, simit: 0, satis: 0, rizaOdenen: 0, rizaBorc: 0 },
  gostergeler: {
    enerji: "Bedenin. Düşükse tepsi daha çok sallanır, yağmurda daha az simit kurtarırsın.",
    huzur: "Zihnin. Düşükse basılı tutmak uzar, hatırlamak zorlaşır.",
    para: "Kasan. Akşam fırına simit parasını ödeyeceksin.",
    bag: "Yanındakiler. Yüksekse yağmurda sana daha çok el uzanır."
  },
  kapanis: "Simitler yine düşecek, son simit yine Deniz'e gidecekti. Ama yağmurda yanında kimin olduğunu sen seçtin.",
  sahneler: [
    /* --- BÖLÜM 1 · SABAH (05:30-06:10): görsel sayfası b01, 9 kare --- */
    { saat:"05:30", gorsel:"b01/01", efekt:"alarm", yedek:"hasan_yatak_odasi", kamera:"50% 60%",
      metin:"Otuz yıllık saatin zili. Karanlıkta, her sabahki gibi." },
    { saat:"05:30", gorsel:"b01/01", yedek:"hasan_yatak_odasi", atla:(b, n) => n < 2,
      metin:"Bir an duruyorsun: “Bu sabahı daha önce yaşamış gibiyim.”" },
    { saat:"05:30", gorsel:"b01/02", yedek:"hasan_yatak_odasi", damga:"saat",
      metin:"Elin saati karanlıkta bile bulur.",
      secimler:[
        { yazi:"Hemen kalk", etki:{enerji:-1, huzur:+1}, bayrak:"kalkti" },
        { yazi:"Beş dakika daha", tip:"basili", saatSonra:"05:47", etki:{enerji:+1, huzur:-1}, bayrak:"uyudu" } ] },
    { saat:b => b.uyudu ? "05:47" : "05:30", gorsel:"b01/03", yedek:"hasan_yatak_odasi",
      metin:b => b.uyudu ? "Gözünü açtığında saat 05:47. Beş dakika demiştin."
                         : "Yatağın kenarına oturuyorsun. Dizin bir an sızlıyor." },
    { saat:b => b.uyudu ? "05:47" : "05:30", gorsel:"b01/04", yedek:"hasan_yatak_odasi", kamera:"40% 45%",
      metin:"Nuran öbür yana dönmüş. Nefesi uyuyan biri gibi değil." },
    { saat:b => b.uyudu ? "05:50" : "05:40", gorsel:"b01/05", ortam:"ev", yedek:"hasan_mutfak",
      metin:b => (b.uyudu ? "Çay demlenecek ama vakit yok." : "Çaydanlık ocakta.") + " Pencerede sokak hâlâ karanlık." },
    { saat:b => b.uyudu ? "05:55" : "05:50", gorsel:"b01/06", yedek:"hasan_mutfak",
      metin:"Askıda Nuran'ın kırmızı yağmurluğu. Kuru." },
    { saat:b => b.uyudu ? "05:55" : "05:50", gorsel:"b01/06", yedek:"hasan_mutfak", yuz:"hasan/6",
      metin:"Kapıda duruyorsun: ocağı kapattın mı? Dönüp bakıyorsun. Kapalı." },
    { saat:b => b.uyudu ? "05:56" : "05:51", gorsel:"b01/07", yedek:"apartman_merdiven",
      metin:"Merdivenler soğuk; nefesin buğulanıyor." },

    { saat:"06:00", gorsel:"b01/10", yedek:"sokak_0600", atla:b => !b.kalkti,
      metin:"Karanlık sokak. Geçen bir otobüsün camında, ön koltukta tanıdık bir yüz uyukluyor.",
      secimler:[ { yazi:"Fırına yürü" } ] },
    { saat:"06:00", gorsel:"b01/08", efekt:"motor", yedek:["sokak_0600","kose_0800"], atla:b => !b.uyudu,
      metin:"Otobüs durakta, kapıları açık.",
      secimler:[ { yazi:"Otobüse koş", tip:"sureli", sure:3 } ] },
    { saat:"06:00", gorsel:"b01/11", yedek:"kose_0800", atla:b => !b.uyudu,
      metin:"Ön sıralarda Kemal: “Hasan abi, geç kaldık ikimiz de.”",
      secimler:[ { yazi:"Yanına otur" } ] },
    { saat:"06:10", gorsel:"b01/09", ortam:"firin", yedek:"firin",
      metin:b => b.uyudu ? "Otobüsten inince fırının ışığı karşında. Rıza Usta çoktan başlamış."
                         : "Sokağın sonunda fırının ışığı. Fırına ilk sen varıyorsun.",
      secimler:[ { yazi:"İçeri gir" } ] },

    /* --- BÖLÜM 2 · FIRIN (06:15-07:00): görsel sayfası b02, 9 kare --- */
    { saat:"06:15", gorsel:"b02/01", yedek:"firin",
      metin:"Fırının sıcağı yüzüne çarpıyor. Raflar dolu, fırın uğulduyor." },
    { saat:"06:15", gorsel:"b02/02", yedek:"firin", damga:"tepsi",
      metin:"Rıza Usta alnını siliyor: “Hava açık diyorlar. Yirmi fazla al istersen.”",
      secimler:[
        { yazi:"Yirmi fazla al", etki:{enerji:-1, simit:+140}, bayrak:"fazla" },
        { yazi:"Her zamanki kadar", etki:{huzur:+1, simit:+120} } ] },
    { saat:"06:15", gorsel:"b02/03", yedek:"firin",
      metin:b => b.fazla ? "Yüz kırk simit. Tepsi her zamankinden ağır."
                         : "“Ben bu havayı bilirim.” Yüz yirmi simit, her zamanki gibi." },
    { saat:"06:18", gorsel:"b02/04", yedek:"firin", kamera:"55% 40%",
      metin:"Arka duvarda yeni asılmış bir kroki. Köşesinde Rıza'nın el yazısı: “Şube 2”." },
    { saat:"06:18", gorsel:"b02/05", yedek:"firin", yuz:"hasan/5",
      metin:"Rıza Usta bakışını yakalıyor, gözünü kaçırıyor. “Bir sigara içip geliyorum.”" },
    { saat:"06:20", gorsel:"b02/06", yedek:"firin",
      metin:"Kapının önünde Rıza karşı kaldırıma bakıyor. Kime baktığını göremiyorsun." },
    { saat:"06:30", gorsel:"b02/07", yedek:"firin",
      metin:b => "Tepsiyi başına alıyorsun. " + (b.fazla ? "Yirmi simit fazla; boynun hemen fark ediyor." : "Otuz bir yıldır aynı ağırlık.") },
    { saat:"06:35", gorsel:"b02/08", ortam:"sabah", yedek:["sokak_0600","kose_0800"], kamera:false,
      metin:"Tepsiyi dengede tut. Çok sallarsan bir simit düşer.",
      secimler:[ { yazi:"Yürü", oyun:"denge", sure:6, agir:b => b.fazla ? 1.25 : 1, oyunEtki:dustu => dustu ? { simit:-1 } : null,
        oyunSonuc:dustu => dustu ? "Bir simit düştü. Bir sokak köpeği kaptı bile." : "Tek simit düşmedi." } ] },
    { saat:"06:45", gorsel:"b02/09", ortam:"sabah", yedek:"kose_0800",
      metin:"Köşen. Okulun kapısı daha kapalı. Sehpayı açıyor, tepsiyi üstüne koyuyorsun." },

    /* --- BÖLÜM 3 · ECZANE (07:15-07:40): görsel sayfası b03 --- */
    { saat:"07:15", gorsel:"b03/01", yedek:"kose_0800", damga:"ilac",
      metin:["Tezgah hazır, kalabalık daha gelmedi.", "Cebine elini atıyorsun: boş bir ilaç kutusu. Nuran'ın ilacı bitmiş; unutmayasın diye dün koymuştun.", "Eczane bir sokak geride. Birazdan açar."],
      secimler:[
        { yazi:"Uğra", etki:{enerji:-1, bag:+2}, bayrak:"ilac" },
        { yazi:"Akşam hallederim", etki:{huzur:-1}, sonuc:"İçinde küçük bir şey kalıyor." } ] },
    { saat:"07:25", gorsel:"b03/02", yedek:"kose_0800", atla:b => !b.ilac,
      metin:"Tepsinin üstüne bezi örtüyorsun. Bir sokak, üç dakika." },
    { saat:"07:30", gorsel:"b03/03", efekt:"kapizili", yedek:"eczane", atla:b => !b.ilac,
      metin:"Kepenk yeni kalkmış. Kapının zili çalıyor." },
    { saat:"07:30", gorsel:"b03/04", yedek:"eczane", atla:b => !b.ilac,
      metin:"“Hasan abi, erkencisin.” Boş kutuyu uzatıyorsun." },
    { saat:"07:31", gorsel:"b03/05", yedek:"eczane", atla:b => !b.ilac,
      metin:"Gülay kutuyu buluyor. Bir an rafların arkasına bakıyor, sonra sana." },
    { saat:"07:32", gorsel:"b03/06", yedek:"eczane", atla:b => !b.ilac,
      metin:"“Parası sonra abi. Nuran ablaya söyle, cuma akşamı size çaya geliyoruz.”" },
    { saat:"07:32", gorsel:"b03/07", yedek:"eczane", atla:b => !b.ilac,
      metin:"“Cuma. Çay.” Kendi kendine iki kere söylüyorsun." },
    { saat:"07:33", gorsel:"b03/08", efekt:"kapizili", yedek:"eczane", atla:b => !b.ilac,
      metin:"Çıkarken kapıda kırmızı yağmurluklu bir kadınla omuz omuza geliyorsun. Bu havada yağmurluk. Yüzünü görmüyorsun." },
    { saat:"07:33", gorsel:"b03/09", yedek:"eczane", atla:b => !b.ilac,
      metin:"Dönüp bakıyorsun. Kadın köşeyi dönmüş bile.",
      secimler:[ { yazi:"Köşeye dön" } ] },

    /* --- BÖLÜM 4 · OKUL ÖNÜ (07:45-08:15): görsel sayfası b04 --- */
    { saat:"07:45", gorsel:"b04/01", yedek:"kose_0800", girince:hSat(30),
      metin:"Zil yaklaşınca köşe doluyor. Bir simit, bir bozuk para, bir “sağ ol amca”." },
    { saat:"07:55", gorsel:"b04/02", efekt:"motor", yedek:"kose_0800",
      metin:"Bir motokurye kaldırıma yakın geçiyor. Bir kız geri sıçrıyor, bir an yere, ızgaraya bakıyor." },
    { saat:"08:00", gorsel:"b04/03", yedek:"kose_0800", damga:"el",
      metin:"Aynı kız, sırt çantası iki omzunda: “Amca, yarın getirsem olur mu? Param bitti.”",
      secimler:[
        { yazi:"Ver", tip:"surukle", etki:{simit:-1, satis:+1, bag:+2}, bayrak:"veresiye" },
        { yazi:"Verme", etki:{huzur:-1} } ] },
    { saat:"08:00", gorsel:"b04/04", yedek:"kose_0800", yuz:"deniz/3", atla:b => !b.veresiye,
      metin:"“Deniz,” diyor, sen sormadan." },
    { saat:"08:01", gorsel:"b04/05", yedek:"kose_0800", atla:b => !b.veresiye,
      metin:"Defterini açıyorsun: Deniz 15." },
    { saat:"08:00", gorsel:"b04/06", yedek:"kose_0800", atla:b => b.veresiye,
      metin:"“Herkese veresiye versem dükkan kapanır.” Kız başını eğiyor." },
    { saat:"08:02", gorsel:"b04/07", yedek:"kose_0800",
      metin:"Kız giderken arkasından sesleniyorsun: “Sınav mı var? Yüzünden belli, geçer kızım.”" },
    { saat:"08:10", gorsel:"b04/08", yedek:"kose_0800",
      metin:"Zil çalıyor, köşe boşalıyor." },
    { saat:"08:15", gorsel:"b04/09", yedek:"kose_0800",
      metin:"Rüzgar boş simit kağıtlarını ızgaraya sürüklüyor." },

    /* --- BÖLÜM 5 · SABAH SATIŞI (08:40-10:20): görsel sayfası b05 --- */
    { saat:"08:40", gorsel:"b05/01", yedek:"kose_0800", girince:hSat(20),
      metin:"Sabahın ikinci dalgası: iki işçi, bir otobüs şoförü. Kasa kıpırdıyor." },
    { saat:"09:00", gorsel:"b05/02", yedek:"kose_0800",
      metin:"“Günaydın Hasan!” Otuz yıldır her sabah aynı saatte, aynı simit." },
    { saat:"09:00", gorsel:"b05/03", yedek:"kose_0800", damga:"kasket",
      metin:"Yüzünü biliyorsun. Bastonunu, torununu biliyorsun. Adı...",
      secimler:[
        { yazi:"Adını sor", etki:{huzur:-1}, bayrak:"sordu" },
        { yazi:"“Hocam” de, geç", etki:{huzur:+1}, bayrak:"hocam" } ] },
    { saat:"09:01", gorsel:"b05/04", yedek:"kose_0800", atla:b => !b.sordu,
      metin:"“Sabri be! Yaşlandın mı Hasan?” Gülüyorsun. Elin hafif titriyor." },
    { saat:"09:01", gorsel:"b05/05", yedek:"kose_0800", atla:b => !b.hocam,
      metin:"“Buyur hocam.” Kurtardın. Kimse anlamadı." },
    { saat:"09:05", gorsel:"b05/06", yedek:"kose_0800",
      metin:b => "Gidince kalemi çıkarıyorsun. Defterin kenarına: " + (b.sordu ? "Sabri Hoca." : "Hoca. Adı neydi?") },
    { saat:"09:40", gorsel:"b05/07", yedek:"kose_0800", girince:hSat(2),
      metin:"Bir kadın iki simit alıyor, elli lira uzatıyor." },
    { saat:"09:40", gorsel:"b05/08", yedek:"kose_0800", yuz:"hasan/6",
      kart:"Bir daha say",
      metin:(b, st) => ["Üstünü sayıyorsun.", "Bir daha sayıyorsun. " + (st.huzur <= 4 ? "Otuz uzatıyorsun. " : "") + "“Yirmi değil mi amca?” Yirmi."] },
    { saat:"10:20", gorsel:"b05/09", ortam:"sokak", yedek:"kose_0800", girince:{enerji:-1},
      metin:"Kalabalık bitti. Dizini ovuyorsun. Sokağın başında beyaz bir belediye arabası dönüyor." },

    /* --- BÖLÜM 6 · ZABITA (10:30-11:00): görsel sayfası b06 --- */
    { saat:"10:30", gorsel:"b06/01", yedek:"kose_0800",
      metin:"Arabadan genç bir zabıta iniyor. Yeni olduğu her halinden belli." },
    { saat:"10:31", gorsel:"b06/02", yedek:"kose_0800",
      metin:"“Amca, burası yasak bölge olmuş.”" },
    { saat:"10:31", gorsel:"b06/03", yedek:"kose_0800",
      metin:"Seni uzun süzüyor, sanki bir şey hatırlamaya çalışıyor." },
    { saat:"10:32", gorsel:"b06/04", yedek:"kose_0800", damga:"zabita",
      metin:"Bir an karşı kaldırıma bakıyor, sonra yine sana. Sen de dönüp bakıyorsun; bir otobüs geçiyor.",
      secimler:[
        { yazi:"Yer değiştir", etki:{huzur:-1}, bayrak:"tasindi" },
        { yazi:"Konuş", etki:{huzur:+1}, bayrak:"konustu" } ] },
    { saat:"10:33", gorsel:"b06/05", yedek:"kose_0800", yuz:"emre/9", atla:b => !b.konustu,
      metin:"“Evladım, ben burada senin baban okula giderken simit satıyordum.”" },
    { saat:"10:33", gorsel:"b06/06", efekt:"telsiz", yedek:"kose_0800", atla:b => !b.konustu,
      metin:"Telsiz cızırdıyor. Çocuk yutkunuyor." },
    { saat:"10:34", gorsel:"b06/07", yedek:"kose_0800", atla:b => !b.konustu,
      metin:"“Bugünlük bir şey yazmıyorum amca.”" },
    { saat:"10:33", gorsel:"b06/08", yedek:"kose_0800", yuz:"emre/7", atla:b => !b.tasindi,
      metin:"“İki sokak öteye geçsen amca.” Bir şey demiyorsun, sehpayı koltuğunun altına alıyorsun." },
    { saat:"11:00", gorsel:"b06/09", yedek:"kose_0800", atla:b => !b.tasindi,
      metin:"Otuz bir yıllık köşeni arkanda bırakıyorsun. İki sokak ötede müşterilerin seni bulamıyor; kasa düşük." },

    /* --- BÖLÜM 7 · KEMAL'İN ÇAYI (12:00-13:00): görsel sayfası b07 --- */
    { saat:"12:00", gorsel:"b07/09", yedek:"kose_0800", damga:"yarim", girince:b => b.tasindi ? hSat(3) : hSat(12),
      metin:b => (b.tasindi ? "Belediye arabası gidince otuz bir yıllık köşene dönüyorsun." : "Öğle sessizliği.") + " Okuldan zil sesi geliyor; sabahki kızın sınavı bitmiştir. Sabahtan beri ağzına lokma koymadın.",
      secimler:[
        { yazi:"Kendine bir simit ayır", etki:{enerji:+2, simit:-1}, bayrak:"yedi" },
        { yazi:"Onu da sat", etki:hSat(1) } ] },
    { saat:"12:05", gorsel:"b07/01", yedek:"kose_0800", atla:b => !b.yedi,
      metin:"Otuz bir yıldır satıyorsun, hâlâ sıcağını seviyorsun. Dizin biraz kendine geliyor." },
    { saat:"12:30", gorsel:"b07/02", yedek:"cay_ocagi_dis",
      metin:"Çay ocağından Kemal, elinde iki ince belli çayla geliyor." },
    { saat:"12:31", gorsel:"b07/03", yedek:"kose_0800", yuz:"kemal/3", girince:{enerji:+1},
      metin:"Çayın buharı. Bir süre havadan konuşuyorsunuz." },
    { saat:"12:33", gorsel:"b07/04", yedek:"kose_0800", damga:"cay",
      metin:"“Abi, kirayı yetiştiremedim. İki yüz lira, cumaya veririm.”",
      secimler:[
        { yazi:"Ver", etki:{para:-200, bag:+2}, bayrak:"kemal" },
        { yazi:"Reddet", etki:{huzur:-1} } ] },
    { saat:"12:34", gorsel:"b07/05", yedek:"kose_0800", yuz:"kemal/7", atla:b => !b.kemal,
      metin:"Kemal parayı cebine koyuyor, gözünü kaldırmadan." },
    { saat:"12:35", gorsel:"b07/06", yedek:"kose_0800", atla:b => !b.kemal,
      metin:"Defterine yazıyorsun: Kemal 200. Cuma. Kaç cuma geçti, saymıyorsun." },
    { saat:"12:34", gorsel:"b07/07", yedek:"kose_0800", yuz:"kemal/7", atla:b => b.kemal,
      metin:"“Bu ay bende de yok Kemal.” İkiniz de biliyorsunuz." },
    { saat:"12:40", gorsel:"b07/08", yedek:"kose_0800", yuz:"kemal/6",
      metin:"Giderken dönüyor: “Akşam eve rahat gidiyor musun abi?” Neden sorduğunu anlamıyorsun." },
    { saat:"13:00", gorsel:"b07/09", yedek:"kose_0800", girince:hSat(10),
      metin:b => "Tepsinin yarısı gitti. Hava hâlâ açık. " + (b.fazla ? "Yirmi fazla iyi oldu galiba." : "Rıza haklı çıkacak galiba.") },

    /* --- BÖLÜM 8 · BULUTLAR (13:30-14:59): görsel sayfası b08 --- */
    { saat:"13:30", gorsel:"b08/01", yedek:"kose_0800", girince:{enerji:-1}, kart:"Kırk üç",
      metin:"Kalanları sayıyorsun: kırk bir, kırk iki..." },
    { saat:"13:31", gorsel:"b08/02", yedek:"kose_0800", kart:"Bir, iki...",
      metin:"Kaçta kalmıştın? Baştan." },
    { saat:"14:00", gorsel:"b08/03", yedek:"kose_0800",
      metin:"Cebinden eski telefonu çıkarıyorsun. Oğlun bu ay aradı mı? Hatırlamıyorsun." },
    { saat:"14:30", gorsel:"b08/04", yedek:"kose_0800", damga:"bulut",
      metin:"Rüzgar birden dönüyor. Gökyüzü kurşun rengi.",
      secimler:[
        { yazi:"Erken topla", etki:{huzur:+1}, bayrak:"erken" },
        { yazi:"Devam et", bayrak:"devam" },
        { yazi:"Otobüsle eve dön", bayrak:"kacis", goster:(b, n) => n > 1 } ] },
    { saat:"14:40", gorsel:"b08/05", yedek:"kose_0800",
      metin:"Okul çıkışı. Çocuklar durağa doğru akıyor." },
    { saat:"14:45", gorsel:"b08/09", ortam:"cisenti", efekt:"damla", yedek:"kose_1500", kamera:"55% 70%",
      metin:"İlk damla simidin üstüne düşüyor." },
    { saat:"14:50", gorsel:"b08/06", ortam:"cisenti", yedek:"kose_0800", atla:b => !b.erken,
      metin:"Damlalar sıklaşıyor. Bezi örtüyorsun, sehpayı katlıyorsun. “Bu havayı bilirim.”" },
    { saat:"14:50", gorsel:"b08/07", ortam:"cisenti", yedek:"kose_0800", atla:b => !b.devam, girince:hSat(8),
      metin:"Damlalar sıklaşıyor. “Belki geçer.” Yakanı kaldırıyorsun; çıkıştaki çocuklar sekiz simit daha alıyor." },
    { saat:"14:50", gorsel:"b08/08", ortam:"cisenti", yedek:"kose_0800", atla:b => !b.kacis,
      metin:"Bezi örtüp durağa geçiyorsun. Bugün erken kapatıyorsun. Otobüs iki durak geride." },
    { saat:"14:58", gorsel:"b04/09", ortam:"cisenti", efekt:"damla", yagmur:true, yedek:"kose_1500", kamera:"50% 70%",
      metin:"Izgaranın ağzı kağıt dolu. Su gidecek yer bulamıyor, kaldırımın dibinde toplanıyor." },

    /* --- BÖLÜM 9 · ⚑ YAĞMUR (15:00-15:10): görsel sayfası b09 --- */
    { saat:"15:00", kader:true, yagmur:true, gorsel:"b09/01", efekt:"gok", muzik:null, yedek:"kose_1500", atla:b => !b.erken,
      metin:"Yağmur bastırıyor. Bir motokurye su birikintisinden geçiyor; yana kaçarken tepsi elinden kayıyor." },
    { saat:"15:00", kader:true, yagmur:true, gorsel:"b09/02", efekt:"gok", muzik:null, yedek:"kose_1500", atla:b => !b.devam,
      metin:"Yağmur bastırıyor. Tezgahı kaldırırken ayağın kayıyor." },
    { saat:"15:00", kader:true, yagmur:true, gorsel:"b09/03", efekt:"gok", muzik:null, yedek:"kose_1500", atla:b => !b.kacis,
      metin:["Durakta otobüsü bekliyorsun. Yağmur bastırınca herkes durağın altına koşuyor.",
             "Biri omzuna çarpıyor, tepsi elinden kayıyor. Otobüsün farları köşede göründü bile."] },
    { saat:"15:00", kader:true, yagmur:true, gorsel:"b09/04", efekt:"tepsi", titre:[90, 40, 180], muzik:null, yedek:"kose_1500",
      metin:"Simitler kaldırıma saçılıyor." },
    { saat:"15:01", kader:true, yagmur:true, gorsel:"b09/05", yedek:"kose_1500", kamera:false, muzik:null, damga:"sacilan", kaderSatir:"Simitler yere saçıldı",
      metin:"Su kaldırıma kadar yükselmiş. Hepsini kurtaramazsın.",
      secimler:[ { yazi:"Topla", oyun:"topla", sure:8, oyunEtki:(n, b, st) => ({ simit:n - st.simit }),
        oyunSonuc:n => n ? `${n} simit kurtardın. Gerisi suyun içinde.` : "Elin yetişmedi. Hepsi suyun içinde." } ] },
    { saat:"15:02", kader:true, yagmur:true, gorsel:"b09/06", yedek:"kose_1500", atla:b => !b.veresiye, girince:{simit:+4},
      metin:"Deniz koşup geliyor: “Amca, sabahki borcumu böyle ödeyeyim.”" },
    { saat:"15:02", kader:true, yagmur:true, gorsel:"b09/07", yedek:"kose_1500", atla:b => !b.kemal, girince:{simit:+4},
      metin:b => "Kemal şemsiyesiz koşuyor: “Sen geç abi, ben toplarım.”" + (b.veresiye ? "" : " Sabahki kız da gelmiş, bir şey demeden topluyor.") },
    { saat:"15:02", kader:true, yagmur:true, gorsel:"b09/08", efekt:"motor", muzik:null, yedek:"kose_1500", atla:b => b.veresiye || b.kemal,
      girince:{huzur:-2},
      metin:"Bir kurye motorunu durdurup bakıyor, sonra gidiyor." },
    { saat:"15:10", kader:true, yagmur:true, gorsel:"b09/09", yedek:"kose_1500", kamera:"50% 60%",
      girince:(b, st) => ({ simit:Math.max(3, st.simit + (b.erken ? 2 : 0) + (st.bag >= 7 ? 3 : 0)) - st.simit }),   // en az 3 simit her zaman kalır
      metin:(b, st) => [
        ...(st.bag >= 7 ? ["Durağın altındakiler de eğilip birkaç simit uzatıyor."] : []),
        ...(b.erken ? ["Bezin altındakilerin ikisi kuru kalmış."] : []),
        `Tepsinde ${st.simit} simit var.`],
      secimler:[ { yazi:"Bezle sil", oyun:"ov", ipucu:"Parmağını simitlerin üstünde sağa sola sürt. Damlalar silinsin." } ] },

    /* --- BÖLÜM 10 · SONRASI (15:40-17:50): görsel sayfası b10 --- */
    { saat:"15:40", gorsel:"b10/01", yedek:"kose_1500", damga:"ayakkabi",
      metin:"Yağmur inceliyor. Dizin artık gerçekten sızlıyor.",
      secimler:[
        { yazi:"Eve dön", bayrak:"eve" },
        { yazi:"Kalanları sat", etki:{enerji:-1}, bayrak:"sat" } ] },
    { saat:"16:15", gorsel:"b10/02", yedek:"kose_1500", atla:b => !b.sat,
      metin:"Durağın altına oturuyorsun. Islak simit de simittir; yarı fiyatına." },
    { saat:"16:30", gorsel:"b10/03", yedek:"kose_1500", atla:b => !b.sat,
      metin:"Uzakta, çay ocağının önünde genç zabıta bir şey yazıyor." },
    { saat:"17:00", gorsel:"b10/04", yedek:"kose_1800", atla:b => !b.sat,
      metin:"Belediye ekibi ızgarayı açıyor. İçinden bir avuç ıslak simit kağıdı çıkıyor." },
    { saat:"17:01", gorsel:"b10/05", yedek:"kose_1800", atla:b => !b.sat,
      metin:"“Bütün göl bundan olmuş.” Kağıtlar senin kağıtların. Bir şey demiyorsun." },
    { saat:"17:30", gorsel:"b10/06", yedek:"kose_1800", atla:b => !b.sat, girince:(b, st) => hSat(st.simit - 1, 8),
      metin:"Islak da olsa alan oluyor. Tepsi yavaş yavaş boşalıyor." },
    { saat:"17:50", gorsel:"b10/07", ortam:"aksam", yedek:"kose_1800", atla:b => !b.sat,
      metin:"Sokak lambası yanıyor. Tepside tek simit kaldı." },
    { saat:"16:15", gorsel:"b10/08", yedek:["sokak_0600","kose_1800"], atla:b => !b.eve,
      girince:(b, st) => ({ ...hSat(Math.min(4, st.simit - 1), 8), simit:1 - st.simit }),   // en fazla dördü satılır, kalanı dağıtılır
      metin:["Eve yürüyorsun. Su ayakkabının içinde.", "Yolda bir kapıcı, iki çocuk. Kimine satıyor, kimine veriyorsun; kalanlar bitiyor."] },
    { saat:"17:40", gorsel:"b10/09", ortam:"aksam", yedek:["apartman_merdiven","kose_1800"], atla:b => !b.eve,
      metin:"Diz izin vermiyor, üç kez duruyorsun. Yirmi dakikalık yol; saat nasıl 17:40 oldu? Tepsinin dibinde tek simit kalmış." },

    /* --- BÖLÜM 11 · ⚑ SON SİMİT (17:55-18:40): görsel sayfası b11 --- */
    { saat:"17:55", gorsel:"b11/01", yedek:"kose_1800", atla:b => !b.sat,
      metin:b => b.veresiye ? "Durağın altında Deniz oturuyor. Seni görünce cebini karıştırıyor." : "Sabahki kız durağın altında. Ağlıyor." },
    { saat:"17:58", gorsel:"b11/02", yedek:"kose_1800", yuz:"deniz/3", atla:b => !(b.sat && b.veresiye), girince:{para:+15},
      metin:"Deniz buruşuk on beş lirayı uzatıyor. “Sınav nasıl geçti?” Gülümsüyor, cevap vermiyor; gözleri dolu.",
      secimler:[ { yazi:"Devam", bayrak:"odedi" } ] },
    { saat:"18:00", kader:true, gorsel:"b11/03", yedek:"kose_1800", damga:"sonsimit", kaderSatir:"Son simit Deniz'e gitti", atla:b => !b.sat,
      metin:"Tepsinin dibinde son simit.",
      secimler:[
        { yazi:"Son simidi uzat", tip:"surukle", etki:{simit:-1}, goster:b => !b.veresiye, sonuc:["“Para istemem.”", "Burnunu çekiyor: “Ben Deniz, amca.”"] },
        { yazi:"Son simidi uzat", tip:"surukle", etki:{simit:-1}, goster:b => b.veresiye, sonuc:"“Bu da benden.”" } ] },
    { saat:"18:02", gorsel:"b11/04", yedek:"kose_1800", atla:b => !b.sat,
      metin:"Bankın öbür ucunda ıslak bir kurye telefonuna bakıyor: “Kapattılar.”" },
    { saat:"18:00", kader:true, gorsel:"b11/05", ortam:"ev", yedek:["apartman_merdiven","kose_1800"], atla:b => !b.eve,
      metin:b => `Yan bloğun kapısı açık. Merdivende ${b.veresiye ? "Deniz" : "sabahki kız"} oturuyor, çantası yanında.` },
    { saat:"18:00", kader:true, gorsel:"b11/06", ortam:"ev", yedek:["apartman_merdiven","kose_1800"], damga:"sonsimit", kaderSatir:"Son simit Deniz'e gitti", atla:b => !b.eve,
      metin:"“Anahtarı mı unuttun? Al bakalım.”",
      secimler:[ { yazi:"Son simidi uzat", tip:"surukle", etki:{simit:-1} } ] },
    { saat:"18:02", gorsel:"b11/07", ortam:"ev", yedek:["apartman_merdiven","kose_1800"], yuz:"deniz/5", atla:b => !b.eve,
      metin:b => (b.veresiye ? "“Sen de mi buradasın amca?”" : "“Ben Deniz, amca. Siz de mi buradasınız?”") + " “Yan bloktayım.” Yıllardır komşusunuz, bugün öğreniyorsunuz." },
    { saat:"18:15", gorsel:"b11/08", yedek:"kose_1800",
      metin:b => [b.eve ? "Tepsi fırının; her akşamki gibi geri götürüyorsun." : "Boş tepsiyi alıp fırına yürüyorsun.",
                 "Çay ocağının önünden geçiyorsun. Kepenk yarıya inmiş, Kemal içeride oturuyor. El sallıyorsun; görmüyor."] },
    { saat:"18:40", gorsel:"b11/09", ortam:"firin", yedek:"firin", yuz:"riza/9", damga:"hesap",
      metin:(b, st) => ["Rıza çayını uzatıyor: “Hava açık demiştim. " + (b.fazla ? "Yirmi fazlayı da ben aldırdım, kusura bakma; onların yarısı benden.”" : "İyi ki dinlemedin.”"),
                         `Simit hesabı ${TL(hHesap(b))}. Kasada ${TL(st.para)}.`],
      secimler:[
        { yazi:"Hepsini öde", goster:(b, n, st) => st.para >= hHesap(b), etki:(b, st) => ({ para:-hHesap(b), rizaOdenen:hHesap(b), huzur:+1 }), sonuc:"“Eline sağlık Hasan.”" },
        { yazi:"Kasadakini ver", goster:(b, n, st) => st.para < hHesap(b), etki:(b, st) => ({ para:-st.para, rizaOdenen:st.para, rizaBorc:hHesap(b) - st.para, huzur:-1 }), sonuc:"“Kalanını yazdım. Acelesi yok.”" },
        { yazi:"Yarın vereyim usta", etki:(b, st) => ({ rizaBorc:hHesap(b), huzur:-2 }), sonuc:"“Yazdım. Acelesi yok.” Yine de yazıyor." } ] },
    { saat:"18:45", gorsel:"b02/04", yedek:"firin", kamera:"50% 50%",
      metin:["Duvarda sabahki kroki. “Şube nereye açılıyor usta?”", "“Kemal'i gördün mü bugün?” diyor, soruna cevap vermeden. Gözünü kaçırıyor."] },

    /* --- BÖLÜM 12 · DÖNÜŞ (19:00-19:55): görsel sayfası b12 --- */
    { saat:"19:00", gorsel:"b12/01", ortam:"gece", yedek:"sokak_0600",
      metin:"Fırından çıkıyorsun. Eller boş, bacaklar ağır." },
    { saat:"19:10", gorsel:"b12/02", yedek:"sokak_0600",
      metin:"Bu yolu otuz bir yıldır yürüyorsun. Gözün kapalı gidersin." },
    { saat:"19:15", gorsel:"b12/03", yedek:"vefa_kosesi",
      metin:"Vefa'ya çıkan köşe. Bir an duruyorsun." },
    { saat:"19:15", gorsel:"b12/04", yedek:"vefa_kosesi",
      metin:"Sağ mı, sol mu?",
      secimler:[ { yazi:"Hatırla", tip:"basili" } ] },
    { saat:"19:16", gorsel:"b12/05", yedek:"vefa_kosesi",
      metin:(b, st) => "Sokak sessiz. Kimse yok. " + (st.huzur <= 3 ? "Çok uzun bir dakika sonra hatırlıyorsun." : "Bir dakika sonra hatırlıyorsun.") },
    { saat:"19:17", gorsel:"b12/06", yedek:"vefa_kosesi",
      metin:"Tabii ki bu taraf. Kimseye söylemeyeceksin." },
    { saat:"19:50", gorsel:"b12/07", yedek:"sokak_0600",
      metin:["Mutfağın ışığı yanıyor. Nuran çorbayı ısıtmıştır.", "Saate bakıyorsun: 19:50. Köşede bir dakika durmuştun, değil mi?"] },
    { saat:"19:53", gorsel:"b12/08", ortam:"ev", efekt:"damla", yedek:"apartman_merdiven",
      metin:"Merdivende damla damla su izi. Yağmur çoktan dindi." },
    { saat:"19:55", gorsel:"b12/09", ortam:"ev", efekt:"anahtar", yedek:"hasan_mutfak", kart:"Kapıyı aç",
      metin:"Anahtar kilitte dönüyor." },

    /* --- BÖLÜM 13 · EV (20:00-21:10): görsel sayfası b13 --- */
    { saat:"20:00", gorsel:"b13/01", yedek:"hasan_mutfak",
      metin:"Askıda Nuran'ın kırmızı yağmurluğu duruyor.",
      secimler:[ { yazi:"yağmurluğa dokun", tip:"sahne" } ] },
    { saat:"20:00", gorsel:"b13/02", yedek:"hasan_mutfak", kamera:"50% 55%", efekt:"damla", titre:35,
      metin:"Islak. Soğuk, ıslak. Sabah kuruydu; Nuran bugün evdeydi." },
    { saat:"20:02", gorsel:"b13/03", yedek:"hasan_mutfak",
      metin:"Mutfakta Nuran çorbayı karıştırıyor, sana dönmeden: “Ellerini yıka, soğumasın.”" },
    { saat:"20:10", gorsel:"b13/04", yedek:"hasan_mutfak", atla:b => !b.ilac, girince:{bag:+2},
      metin:"Kutuyu masaya koyuyorsun. Nuran kutuya bakıyor, elini elinin üstüne koyuyor." },
    { saat:"20:10", gorsel:"b13/05", yedek:"hasan_mutfak", atla:b => b.ilac,
      metin:["Cebindeki boş kutu aklına geliyor. Akşam halledecektin.", "Masada yeni bir kutu duruyor. “Biliyordum, Gülay getirdi.” Nuran gülüyor, sen gülemiyorsun."] },
    { saat:"20:15", gorsel:"b13/06", yedek:"hasan_mutfak", yuz:"nuran/7", atla:b => !b.ilac,
      metin:["Bir şey söyleyecektin. Neydi?", "“Cuma Gülaylar çaya gelecek, biliyorum.” Sen daha söylemedin."] },
    { saat:"20:30", gorsel:"b13/07", efekt:"telefon", yedek:"hasan_mutfak", atla:(b, n, st) => st.bag < 6,
      metin:["Telefon çalıyor: oğlun, Almanya'dan.", "“İyiyiz oğlum, merak etme.”"] },
    { saat:"20:30", gorsel:"b08/03", ortam:"ev", yedek:"hasan_mutfak", atla:(b, n, st) => st.bag >= 6,
      metin:"Eski telefonu masaya koyuyorsun. Çalmıyor. Oğlun bu ay aradı mı?" },
    { saat:"20:50", gorsel:"b13/08", yedek:"hasan_mutfak",
      metin:"Sofra kalktı. Nuran'a bir şey soracaktın; neydi? Defteri önüne çekiyorsun." },
    { saat:"21:00", kader:true, ozel:"defter", gorsel:"b13/08", yedek:"hasan_mutfak" },
    { saat:"21:10", gorsel:"b13/09", yedek:"hasan_mutfak",
      metin:"Başını kaldırıyorsun. Kapıda Nuran duruyor; ne zamandır orada, bilmiyorsun." }
  ]
};

/* 21:00 defteri (ozel:"defter") */
HAYATLAR.hasan.defter = {
  giris: "Otuz bir yıllık veresiye defteri. Son üç aydır her akşam bir de satır yazıyorsun.",
  satir: (st, b) => {
    const kimler = [b.veresiye && "Deniz'i", b.kemal && "Kemal'i", b.ilac && "Nuran'ı"].filter(Boolean);
    return st.bag >= 7 && kimler.length ? `Bugün de geçti. ${kimler.join(", ")} düşündüm.` : "Bugün de geçti.";
  },
  duraklama: st => st.huzur <= 3 ? 5 : -1,      // huzur düşükse kalem "Bugün"den sonra bir an durur
  kaderSatir: "“Bugün de geçti.”",
  damga: "defter",
  /* sayfalar: 0 = bu akşam, sonra geriye doğru */
  sayfalar(b, st){
    const g = n => Array(n).fill("Bugün de geçti.");
    const k = () => ({ k: 35 + Math.round(Math.random()*40) });       // okunmayan eski satır
    const bugun = [`${st.satis} simit satıldı.`];
    if (st.rizaOdenen) bugun.push(`Rıza'ya ${TL(st.rizaOdenen)}`);
    if (st.rizaBorc) bugun.push(`Rıza ${st.rizaBorc}, yarın`);
    if (b.veresiye) bugun.push(b.odedi ? "<s>Deniz 15</s>" : "Deniz 15");
    bugun.push(b.sordu ? "Sabri Hoca" : "Hoca. Adı neydi?");
    if (b.kemal) bugun.push("Kemal 200");
    bugun.push(`Eve ${TL(st.para)}`);
    return [
      { h:"Salı", satirlar:bugun, not:"Sayfaları geriye çevirebilirsin." },
      { h:"Geçen Salı", satirlar:["Kemal'le eve geldim. Neden?", "Bugün de geçti.", "Vefa'da sağ.", "Bugün de geçti."], not:"" },
      { h:"Ekim", satirlar:[...g(2), "Hocanın adı Sabri. Sabri.", g(1)[0], "Kemal 500", "14 Ekim. Bugün de geçti.", "14 Ekim. Bugün de geçti.", "Bugün de geç", g(1)[0]], not:"" },
      { h:"Eylül", satirlar:[...g(3), "Kemal 200", g(1)[0], "Oğlan aradı. İyiyiz dedim.", ...g(3)], not:"" },
      { h:"Ağustos", satirlar:[k(), "Kemal 300", { n:"Çarşamba gidiyoruz. N." }, "Nereye?", ...g(4)], not:"" },
      { h:"Mart · Haziran", satirlar:[k(), "Kemal 200, cumaya", k(), "Oğlanın doğum günü neydi? Nuran'a sor.", "Kemal 150", k()], not:"" },
      { h:"2017", satirlar:[k(), "Küçük kız, çanta kendinden büyük. Annesi nöbetteymiş. Para almadım.", k()], not:"" },
      { h:"2011 · 2012", satirlar:["Rıza yirmi fazla al dedi. Yağdı.", k(), k(), "Oğlan gitti. Satış iyiydi."], not:"" },
      { h:"2002 · 2004", satirlar:["Necati baba olmuş. Borcu hâlâ yarın.", k(), k(), "Nuran'a yağmurluk. Kırmızı olsun, kalabalıkta bulurum."], not:"" },
      { h:"1996", satirlar:[k(), "Yeni hoca, adı Sabri. Her sabah dokuzda.", k()], not:"" },
      { h:"1995", satirlar:["Necati, 1 simit, yarın.", "Yarın geldi, Necati gelmedi."], not:"İlk sayfa." },
      { kapak:true, yazi:"Her akşam bir satır.<br>Doktor öyle dedi.", not:"İç kapakta başka bir el yazısı var." }
    ];
  }
};
