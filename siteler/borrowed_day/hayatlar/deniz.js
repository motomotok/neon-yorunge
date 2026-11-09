/* ===== HAYAT VERİSİ: Deniz (kaynak metin: ../../hayatlar/02_ogrenci_deniz.md) =====
   b.once: bitirilmiş hayatların bayrakları (KURALLAR 4.3). Hasan oynanmadıysa varsayılan: veresiye verdi, yirmi fazla almadı. */
window.HAYATLAR = window.HAYATLAR || {};
const dOnce = (b, ad) => (b.once || {})[ad];
const dVerdi = b => !dOnce(b, "hasan") || dOnce(b, "hasan").veresiye;
/* Hasan oynandıysa onun gününde görülen şey burada kaderdir (KURALLAR 4.3): olmayan seçenek görünür ama kapalıdır.
   Hasan'da kız 08:00'de hep veresiye ister, yani kalemi almıştır. 15:00'te ancak veresiye ya da Kemal varsa gelir. Yer Hasan'ın seçimidir. */
const dH = b => dOnce(b, "hasan");
const dHGeldi = b => dH(b).veresiye || dH(b).kemal;
const dAc = b => b.aclik || (b.istedi && !b.veresiye);
const dKemalKostu = b => dOnce(b, "kemal") ? dOnce(b, "kemal").kostu : dOnce(b, "hasan") && dOnce(b, "hasan").kemal;
HAYATLAR.deniz = {
  id: "deniz", kilitNot: "Bunu Hasan'ın gününde görmüştün. O gün böyle oldu.", klasor: "deniz", isim: "Deniz", gunAdi: "Deniz'in günü", hazir: true,
  muzikler: { b01:"deniz_gun", b02:"deniz_gun", b03:"deniz_gun", b04:"deniz_gun", b05:null, b06:"deniz_gun", b07:"deniz_gun", b08:null, b09:"deniz_gun", b10:"deniz_gun", b11:"deniz_gun", b12:"deniz_gun" },
  ortamlar: { b01:"ev", b02:"sabah", b03:"sabah", b04:"ev", b05:"ev", b06:"ev", b07:"ruzgar", b08:"yagmur", b09:"cisenti", b10:"aksam", b11:"ev", b12:"ev" },
  harita: {
    renk: "#6ea3ff",
    iz: { bas:"15:00", son:"18:05", damga:"yagmurluk", yazi:["Kırmızı çizgi yine senin yolun değil.", "Bir süre seninle aynı duraktaydı."] },
    digerleri: [
      { ad:"Hasan", damga:"hasan", not:"Simitleri yere düşen adam." },
      { ad:"Kemal", damga:"kemal", not:"Ocağını kaybettiğini öğrenecek." },
      { ad:"Emre", damga:"emre", not:"İlk tutanağını yazacak." },
      { ad:"Burak", damga:"burak", not:"Hesabı kapatılacak." },
      { ad:"?", damga:"yagmurluk", not:"Kırmızı çizginin sahibi. Hepsini bitirince." }
    ]
  },
  kader: { cumle: "Bu Salı, Deniz matematik yazılısında son soruyu yetiştiremeyecek.", meta: "Deniz · Salı · 06:50", cizim: "assets/kader_deniz.jpg" },
  baslangic: { enerji: 5, huzur: 4, para: 20, bag: 4 },
  gostergeler: {
    enerji: "Bedenin. Düşükse yazılıda süren kısalır, yağmurda daha az simit toplarsın.",
    huzur: "Zihnin. Düşükse soruları iki kere okursun, sarılmak uzar.",
    para: "Cebin. Yirmi lira ya kaleme ya simite yeter.",
    bag: "Yanındakiler. Yüksekse yağmurda Ece de iner, akşam annene anlatırsın."
  },
  kapanis: "Son soru yine boş kalacaktı. O cümleyi annene yine kuracaktın. Ama yağmurda kime el uzattığını sen seçtin.",
  /* yazılı: beş soru, doğrusu her zaman "d". Son soruya gelen de gelmeyen de onu boş bırakır. */
  yazili: {
    sorular: b => {
      const n = dOnce(b, "hasan") && dOnce(b, "hasan").fazla ? 140 : 120;
      return [
        { s:"3x + 5 = 20 ise x kaç?", c:["3", "5", "15"], d:1 },
        { s:"Bir kenarı 6 olan karenin alanı kaç?", c:["12", "24", "36"], d:2 },
        { s:"2, 6, 18... Sıradaki sayı kaç?", c:["54", "36", "24"], d:0 },
        { s:n === 140 ? "Bir simitçi sabah fırından tanesi 10 liradan 140 simit alıyor. Simidi 15 liradan satıyor. Hepsini satarsa kârı kaç lira?"
                      : "Bir simitçi sabah fırından tanesi 10 liradan 120 simit alıyor. Simidi 15 liradan satıyor. Hepsini satarsa kârı kaç lira?",
          c:n === 140 ? ["2100", "1400", "700"] : ["1800", "1200", "600"], d:2 },
        { s:"Yarıçapı 7 olan dairenin çevresi kaç? (π = 22/7)", c:["14", "44", "49"], d:1 }
      ];
    },
    soru: "Soru",
    akiyor: "Saat akıyor.",
    /* dördüncü soruda köşedeki amca; ikinci oynayışta déjà vu (M6) */
    dorduncu: n => n > 1 ? "Bu soruyu bir yerden biliyorum." : "Köşedeki amca geliyor aklına. Bir an gülümsüyorsun.",
    ikiKere: "Satırlar kayıyor, bir daha okuyorsun.",
    kuru: "Kalem yazmıyor."
  },
  sahneler: [
    /* --- BÖLÜM 1 · MUTFAK (06:50-07:10) --- */
    { saat:"06:50", gorsel:"b01/01", efekt:"alarm", yedek:"hasan_yatak_odasi",
      metin:"Telefonun alarmı. Yanağının altında matematik notları; üstünde uyumuşsun." },
    { saat:"06:52", gorsel:"b01/02", yedek:"hasan_mutfak",
      metin:"Mutfak boş. Annen dün gece nöbetteydi; ışık sabaha kadar açık kalmış." },
    { saat:"06:53", gorsel:"b01/03", yedek:"hasan_mutfak", damga:"not",
      metin:"Masada yirmi lira ve bir not: “Simit al, aç gitme. Nöbet uzadı, öğlene gelirim. Anne”",
      secimler:[
        { yazi:"Anneni ara", etki:{bag:+1}, bayrak:"aradi" },
        { yazi:"Mesaj at: “Tamam.”", etki:{huzur:-1}, bayrak:"mesaj" } ] },
    { saat:"06:55", gorsel:"b01/04", efekt:"telefon", yedek:"hasan_mutfak", atla:b => !b.aradi,
      metin:"Üç kez çalıyor. Yorgun bir ses: “Odaklan kızım, gerisini düşünme.” Arkada bir monitör ötüyor." },
    { saat:"06:55", gorsel:"b01/05", yedek:"hasan_mutfak", atla:b => !b.mesaj,
      metin:"“Tamam.” Tek kelime. Gitti; okunmadı." },
    { saat:"07:00", gorsel:"b01/06", yedek:"hasan_yatak_odasi",
      metin:"Odanda çantanı topluyorsun. Rafın ucunda eski bir defter duruyor.",
      secimler:[ { yazi:"deftere dokun", tip:"sahne" } ] },
    { saat:"07:01", gorsel:"b01/07", yedek:"hasan_yatak_odasi",
      metin:"“Yazdıklarım.” Mavi mürekkep, çocuk el yazın. Arka sayfalar yarım kalmış hikayelerle dolu." },
    { saat:"07:02", gorsel:"b01/08", yedek:"hasan_yatak_odasi",
      metin:"Hiçbirini bitirmedin. Defteri yerine koyuyorsun." },
    { saat:"07:15", gorsel:"b01/09", ortam:"sabah", yedek:"sokak_0600",
      metin:"Dışarısı soğuk. Yıllardır burada oturuyorsun; yan blokta kim var, bilmiyorsun." },

    /* --- BÖLÜM 2 · KIRTASİYE VE YOL (07:30-07:56) --- */
    { saat:"07:30", gorsel:"b02/01", yedek:"kose_0800",
      metin:"Kırtasiyenin önünde kalemini deniyorsun. Bitmiş. Yazılı dördüncü derste." },
    { saat:"07:31", gorsel:"b02/02", yedek:"kose_0800", damga:"kalem",
      metin:"Mavi tükenmez yirmi lira. Cebindeki de yirmi lira.",
      secimler:[
        { yazi:"Yirmi liraya kalem al", etki:{para:-20}, bayrak:"kalem" },
        { yazi:"Ödünç alırım", kapali:b => !!dH(b), etki:{huzur:-1}, bayrak:"odunc" } ] },
    { saat:"07:33", gorsel:"b02/03", yedek:"kose_0800", atla:b => !b.kalem,
      metin:"Yeni kalem elinde. Simit parası gitti, ama bugün bu daha önemli." },
    { saat:"07:33", gorsel:"b02/04", yedek:"kose_0800", atla:b => !b.odunc,
      metin:"Ece'de vardır. Ece'de her zaman vardır." },
    { saat:"07:50", gorsel:"b02/05", yedek:"kose_0800",
      metin:"Okul yolu. Kaldırım dolu, köşede simit tepsisi görünüyor." },
    { saat:"07:55", gorsel:"b02/06", efekt:"motor", yedek:"kose_0800",
      metin:"Arkandan bir motor sesi. Çok yakın, çok hızlı.",
      secimler:[ { yazi:"Geri çekil", tip:"sureli", sure:2,
        gec:{ yazi:"Geri çekil", etki:{huzur:-1}, sonuc:"Gidon kolunu sıyırıyor. Kalbin ağzında." } } ] },
    { saat:"07:55", gorsel:"b02/07", yedek:"kose_0800", kamera:"50% 70%", atla:b => !b.kalem,
      metin:"Kalem elinden kayıyor. Izgaranın demirine bir kez vuruyor, sonra yok." },
    { saat:"07:56", gorsel:"b02/08", yedek:"kose_0800", kamera:"50% 70%", atla:b => !b.kalem,
      metin:"Eğilip bakıyorsun: karanlık, su sesi. Yirmi lira, yirmi dakikada gitti." },
    { saat:"07:56", gorsel:"b02/09", yedek:"kose_0800",
      metin:"Kurye dönüp bakıyor, eliyle “pardon” yapıyor. Sonra köşeyi dönüyor." },

    /* --- BÖLÜM 3 · SİMİTÇİ (08:00-08:02) --- */
    { saat:"08:00", gorsel:"b03/01", yedek:"kose_0800",
      metin:"Köşedeki simitçi amca. Yıllardır görüyorsun, adını bilmiyorsun." },
    { saat:"08:00", gorsel:"b03/02", yedek:"kose_0800", damga:"el",
      metin:b => b.kalem ? "Karnın ağrıyor, cebin boş." : "Tanesi on beş lira. Cebinde yirmi var.",
      secimler:[
        { yazi:"Veresiye iste", goster:b => b.kalem, bayrak:"istedi" },
        { yazi:"İsteme, aç git", kapali:b => !!dH(b), goster:b => b.kalem, etki:{enerji:-2, huzur:-1}, bayrak:"aclik" },
        { yazi:"Simit al", tip:"kendine", cekYer:[78, 24], goster:b => !b.kalem, etki:{para:-15}, bayrak:"simit" },
        { yazi:"Yürü, paran kalsın", goster:b => !b.kalem, etki:{enerji:-2, huzur:-1}, bayrak:"aclik" } ] },
    { saat:"08:00", gorsel:"b03/03", yedek:"kose_0800", atla:b => !b.istedi,
      metin:"“Amca, yarın getirsem olur mu? Param bitti.”" },
    { saat:"08:01", gorsel:"b03/04", yedek:"kose_0800", atla:b => !(b.istedi && dVerdi(b)),
      metin:"Bir an yüzüne bakıyor. Sonra simidi uzatıyor.",
      secimler:[ { yazi:"Simidi al", tip:"kendine", cekYer:[36, 70], etki:{bag:+2}, bayrak:"veresiye" } ] },
    { saat:"08:01", gorsel:"b03/05", yedek:"kose_0800", atla:b => !b.veresiye,
      metin:"“Deniz,” diyorsun, o sormadan. Eski bir deftere yazıyor: Deniz 15." },
    { saat:"08:01", gorsel:"b03/06", yedek:"kose_0800", atla:b => !(b.istedi && !dVerdi(b)), girince:{enerji:-2},
      metin:"“Herkese veresiye versem dükkan kapanır.” Başını eğiyorsun." },
    { saat:"08:01", gorsel:"b03/07", yedek:"kose_0800", atla:b => !b.simit,
      metin:"Simit sıcak. Yürürken yiyorsun; miden yatışıyor." },
    { saat:"08:01", gorsel:"b03/08", yedek:"kose_0800", atla:b => !b.aclik,
      metin:"Selam vermeden geçiyorsun. Yürüdükçe karnın daha çok ağrıyor." },
    { saat:"08:02", gorsel:"b03/09", yedek:"kose_0800",
      metin:"Arkandan simitçinin sesi: “Sınav mı var? Yüzünden belli, geçer kızım.”" },

    /* --- BÖLÜM 4 · OKUL (08:10-10:50) --- */
    { saat:"08:10", gorsel:"b04/01", efekt:"zil", yedek:"kose_0800",
      metin:"Zil. Kapıdan içeri akıyorsunuz." },
    { saat:"08:30", gorsel:"b04/02", yedek:"kose_0800",
      metin:b => "İlk ders Türkçe. Masanın altında formül tekrar ediyorsun." + (dAc(b) ? " Karnın guruldadıkça sıra arkadaşın bakıyor." : "") },
    { saat:"09:00", gorsel:"b04/03", yedek:"kose_0800", kamera:"60% 40%",
      metin:"Pencereden köşe görünüyor. Bastonlu yaşlı bir adam simitçiye el sallıyor." },
    { saat:"09:30", gorsel:"b04/04", yedek:"kose_0800", damga:"kitap",
      metin:"Teneffüs. Ece telaşlı: “Dördüncü konuyu hiç anlamadım. Gel bana bir anlat.”",
      secimler:[
        { yazi:"Ece'ye anlat", etki:{bag:+2, enerji:-1}, bayrak:"anlatti" },
        { yazi:"Kendi tekrarını yap", etki:{huzur:+1}, bayrak:"tekrar" } ] },
    { saat:"09:32", gorsel:"b04/05", yedek:"kose_0800", atla:b => !b.anlatti,
      metin:"Ece'nin kalemiyle defterin arkasına çiziyorsun. Yüzü yavaş yavaş açılıyor." },
    { saat:"09:40", gorsel:"b04/06", yedek:"kose_0800", yuz:null, atla:b => !b.anlatti,
      metin:"“Ya sen öğretmen ol.” Zil çalıyor; kendi tekrarın yarım kaldı." },
    { saat:"09:31", gorsel:"b04/07", yedek:"kose_0800", atla:b => !b.tekrar,
      metin:"“Ece, şimdi olmaz.” Başını eğip gidiyor." },
    { saat:"09:40", gorsel:"b04/08", yedek:"kose_0800", atla:b => !b.tekrar,
      metin:"Konu yerine oturuyor. Ece'nin sırası bu kadar uzak mıydı?" },
    { saat:"10:50", gorsel:"b04/09", yedek:"kose_0800",
      metin:"Matematik öğretmeni bir deste kağıtla geçiyor. Miden sıkışıyor." },

    /* --- BÖLÜM 5 · ⚑ YAZILI (11:00-11:45) --- */
    { saat:"11:00", kader:true, gorsel:"b05/01", yedek:"kose_0800",
      metin:"Kağıtlar dağıtılıyor. Beş soru, kırk dakika." },
    { saat:"11:01", kader:true, gorsel:"b05/02", yedek:"kose_0800", atla:b => !b.anlatti,
      metin:"Kalemin yok. Arkadan bir el uzanıyor: Ece, bir şey demeden kalemini veriyor." },
    { saat:"11:01", kader:true, gorsel:"b05/03", yedek:"kose_0800", atla:b => b.anlatti,
      metin:"Kalemin yok. Öğretmenden istiyorsun; göz deviriyor, çekmeceyi karıştırıyor. İki dakika gitti.",
      secimler:[ { yazi:"Devam", bayrak:"ogretmen" } ] },
    { saat:"11:03", kader:true, gorsel:"b05/04", yedek:"kose_0800", kamera:false,
      metin:"Doğrusunu seç. Saat akıyor.",
      secimler:[ { yazi:"Başla", oyun:"yazili", sure:(b, st) => Math.max(20, 45 - 5 * Math.max(0, 5 - st.enerji) - (b.ogretmen ? 5 : 0)) } ] },
    { saat:"11:40", kader:true, gorsel:"b05/05", yedek:"kose_0800", atla:b => b.yazili !== "yavas",
      metin:"Zil. Son soruya sıra gelmedi." },
    { saat:"11:38", kader:true, gorsel:"b05/06", yedek:"kose_0800", atla:(b, n) => !(b.yazili === "hizli" && n === 1),
      metin:"Vaktin var, cevabı da biliyorsun. Kalem yazmıyor. Sallıyorsun, kağıdı deliyorsun; zil." },
    { saat:"11:38", kader:true, gorsel:"b05/07", yedek:"kose_0800", atla:(b, n) => !(b.yazili === "hizli" && n > 1),
      metin:"Bu kez kalemi önceden sallıyorsun. Yan sıradan bir gürültü: biri bayılmış. Sınıf ayağa kalkıyor, kağıtlar toplanıyor." },
    { saat:"11:40", kader:true, gorsel:"b05/08", yedek:"kose_0800", damga:"kagit", kaderSatir:"Son soru boş kaldı",
      metin:"Kağıdın gidiyor. Mavi satırlar, sonra son sorunun altı bembeyaz." },
    { saat:"11:45", gorsel:"b05/09", yedek:"kose_0800",
      metin:"Koridorda herkes cevap karşılaştırıyor. Yanlarından hızlı geçiyorsun." },

    /* --- BÖLÜM 6 · ÖĞLE (13:00-14:35) --- */
    { saat:"13:00", gorsel:"b06/01", efekt:"telefon", yedek:"kose_0800",
      metin:["Telefonun titriyor. Annen: “Eve geldim, uyuyorum. Anahtar paspasın altında.”", "“Çantanın ön gözüne 50 lira koymuştum, aç kalma.”"] },
    { saat:"13:01", gorsel:"b06/02", yedek:"kose_0800", girince:{para:+50},
      metin:"Ön gözü açıyorsun. Katlanmış elli lira. Ne zaman koymuş?" },
    { saat:"13:05", gorsel:"b06/03", yedek:"kose_0800", damga:"tost",
      metin:"Ece kantinin kapısından el ediyor.",
      secimler:[
        { yazi:"Öğleni Ece'yle geçir", etki:{para:-20, bag:+1, enerji:+1}, bayrak:"tost" },
        { yazi:"Kütüphanede yalnız otur", etki:{huzur:-1}, bayrak:"kutuphane" } ] },
    { saat:"13:10", gorsel:"b06/04", yedek:"kose_0800", atla:b => !b.tost,
      metin:"Bir tostu ikiye bölüyorsunuz. Parasını sen veriyorsun; Ece kaşarlı tarafı sana uzatıyor." },
    { saat:"13:20", gorsel:"b06/05", yedek:"kose_0800", atla:b => !b.tost,
      metin:"“Son soruyu kim yaptı ki?” diyor. Bir an boş kağıt aklından çıkıyor." },
    { saat:"13:10", gorsel:"b06/06", yedek:"kose_0800", atla:b => !b.kutuphane,
      metin:"Kütüphane sessiz. Son soruyu bir kağıda yeniden çözüyorsun." },
    { saat:"13:30", gorsel:"b06/07", yedek:"kose_0800", atla:b => !b.kutuphane,
      metin:"Şimdi çıkıyor. Cevap kırk dört. Kimse sormadı." },
    { saat:"14:30", gorsel:"b06/08", ortam:"ruzgar", yedek:"kose_0800",
      metin:"Son ders. Pencerede gökyüzü kurşun rengine dönüyor." },
    { saat:"14:35", gorsel:"b06/09", ortam:"ruzgar", yedek:"kose_0800",
      metin:"Rüzgar camı titretiyor. Sabah hava açıktı, kimsede şemsiye yok." },

    /* --- BÖLÜM 7 · ÇIKIŞ (14:40-14:58) --- */
    { saat:"14:40", gorsel:"b07/01", efekt:"zil", yedek:"kose_0800",
      metin:"Zil. Herkes durağa doğru akıyor." },
    { saat:"14:41", gorsel:"b07/02", yedek:"kose_0800", damga:"araba", atla:b => !b.tost,
      metin:"Ece: “Babam alacak, seni de bırakalım mı?”",
      secimler:[
        { yazi:"Gel", bayrak:"araba" },
        { yazi:"Yok, otobüsle giderim", bayrak:"durak" } ] },
    { saat:"14:41", gorsel:"b07/03", yedek:"kose_0800", atla:b => b.tost,
      metin:"Ece babasının arabasına biniyor. Seninle göz göze gelmiyor. Durağa yürüyorsun." },
    { saat:"14:43", gorsel:"b07/04", yedek:"kose_0800", atla:b => !b.araba,
      metin:"Araba durağın önünde, kırmızıda bekliyor. Ece'nin babası elini kaldırıyor." },
    { saat:"14:43", gorsel:"b07/05", yedek:"kose_0800", atla:b => b.araba,
      metin:"Durağın altına geçiyorsun. Otobüs iki durak geride." },
    { saat:"14:45", gorsel:"b07/06", ortam:"cisenti", efekt:"damla", yedek:"kose_1500",
      metin:"İlk damla elinin üstüne düşüyor." },
    { saat:"14:50", gorsel:"b07/07", ortam:"cisenti", yedek:"kose_1500",
      metin:"Köşede simitçi amca yakasını kaldırmış, tepsisine eğiliyor." },
    { saat:"14:55", gorsel:"b07/08", ortam:"cisenti", yedek:"kose_1500", kamera:"50% 70%",
      metin:b => "Kaldırımın dibinde su toplanıyor; ızgaranın ağzı kağıt dolu." + (b.kalem ? " Senin kalemin de orada bir yerde." : "") },
    { saat:"14:58", gorsel:"b07/09", ortam:"cisenti", yedek:"kose_1500",
      metin:"Durağın öbür ucunda kırmızı yağmurluklu bir kadın. Bütün durakta bir tek o hazırlıklı." },

    /* --- BÖLÜM 8 · ⚑ YAĞMUR (15:00-15:10) --- */
    { saat:"15:00", kader:true, yagmur:true, gorsel:"b08/01", efekt:"gok", yedek:"kose_1500",
      metin:b => b.araba ? "Arabanın kapısı açılmadan gökyüzü yırtılıyor." : "Gökyüzü yırtılıyor. Herkes durağın altına sıkışıyor." },
    { saat:"15:00", kader:true, yagmur:true, gorsel:"b08/02", efekt:"tepsi", titre:[90, 40, 180], yedek:"kose_1500",
      metin:"Bir motokurye su sıçratarak geçiyor. Önünde bir tepsi havada dönüyor." },
    { saat:"15:00", kader:true, yagmur:true, gorsel:"b08/03", yedek:"kose_1500", kamera:"50% 70%",
      metin:"Simitler ayağının dibine kadar yuvarlanıyor." },
    { saat:"15:01", kader:true, yagmur:true, gorsel:"b08/04", yedek:"kose_1500",
      metin:"Yerde, dizinin üstünde, sabahki simitçi amca." },
    { saat:"15:01", kader:true, yagmur:true, gorsel:"b08/05", yedek:"kose_1500", damga:"sacilan", kaderSatir:"Simitler ayağına geldi",
      metin:b => ["Karşıda belediyenin beyaz aracı ışıkta bekliyor. Durağın öbür ucundaki kadın şemsiyesini sıkıyor; amcaya bakıyor, kıpırdamıyor.",
                  ...(b.araba ? ["Ece kolundan çekiyor: “Deniz, araba bekliyor!”"] : [])],
      secimler:[
        { yazi:"Koş, topla", kapali:b => !!dH(b) && !dHGeldi(b), etki:{bag:+2}, bayrak:"kostu", oyun:"topla", sure:8,
          oyunSonuc:n => n ? `${n} simit topladın. Gerisi suyun içinde.` : "Elin yetişmedi. Hepsi suyun içinde." },
        { yazi:"Donup kal", kapali:b => !!dH(b) && dHGeldi(b), etki:{huzur:-2}, bayrak:"dondu" } ] },
    { saat:"15:03", kader:true, yagmur:true, gorsel:"b08/06", yedek:"kose_1500", atla:b => !b.kostu,
      metin:b => b.veresiye ? "“Amca, sabahki borcumu böyle ödeyeyim.”" : "“Amca, ben toplarım.”" },
    { saat:"15:04", kader:true, yagmur:true, gorsel:"b08/07", yedek:"kose_1500", atla:b => !(b.kostu && b.araba),
      metin:(b, st) => st.bag >= 9 ? "Ece arabadan inmiş. Yanına çömelip iki simit topluyor." : "Ece'nin babası arabayı kenara çekmiş, seni bekliyor. Ece camdan izliyor." },
    { saat:"15:05", kader:true, yagmur:true, gorsel:"b08/08", yedek:"kose_1500", yuz:"kemal/6", atla:b => !(b.kostu && dKemalKostu(b)),
      metin:"Şemsiyesiz bir adam koşup geliyor: çay ocağındaki amca." },
    { saat:"15:02", kader:true, yagmur:true, gorsel:"b08/09", yedek:"kose_1500", kamera:"50% 70%", atla:b => !b.dondu,
      metin:"Ayağının dibindeki simide bakıyorsun. Biri onu alıp tepsiye koyuyor." },

    /* --- BÖLÜM 9 · SIĞINAK (15:40-17:05) --- */
    { saat:"15:40", gorsel:"b09/01", yedek:"kose_1500", damga:"anahtar",
      metin:b => [...(b.araba ? ["“Siz gidin, koltuklar ıslanır.” Araba gidiyor; Ece dönüp bakıyor."] : []), "Sırılsıklamsın. Otobüs yok. Yüz metre ileride çay ocağının ışığı yanıyor."],
      secimler:[
        { yazi:"Çay ocağına gir", kapali:b => !!dH(b) && !!dH(b).eve, bayrak:"ocak" },
        { yazi:"Eve koş", kapali:b => !!dH(b) && !!dH(b).sat, bayrak:"ev" } ] },
    { saat:"16:00", gorsel:"b09/02", yedek:"cay_ocagi_dis", atla:b => !b.ocak,
      girince:b => dOnce(b, "kemal") && dOnce(b, "kemal").normalFiyat ? { para:-15 } : null,
      metin:b => "Kemal amca titreyen ellerine çay tutuşturuyor. " + (dOnce(b, "kemal") && dOnce(b, "kemal").normalFiyat ? "“On beş lira kızım.” Islak parayı uzatıyorsun." : "“Para yok, iç.”") },
    { saat:"16:05", gorsel:"b09/03", efekt:"motor", yedek:"cay_ocagi_dis", atla:b => !b.ocak,
      metin:"Köşede ıslak bir kurye ellerini bardağa sarmış. Kask aynı mı? Emin olamıyorsun." },
    { saat:"16:30", gorsel:"b09/04", yedek:"cay_ocagi_dis", atla:b => !b.ocak,
      metin:"Kapının önünde genç bir zabıta bir şey yazıyor. Eli titriyor." },
    { saat:"17:00", gorsel:"b09/05", yedek:"cay_ocagi_dis", atla:b => !b.ocak,
      metin:"Takım elbiseli bir adam içeri giriyor. Kemal amca ayağa kalkıyor." },
    { saat:"17:01", gorsel:"b09/06", yedek:"cay_ocagi_dis", kamera:"50% 60%", atla:b => !b.ocak,
      metin:"Adam alçak sesle konuşuyor, kelimeleri duyamıyorsun. Kemal amca elindeki demliği yavaşça bırakıyor." },
    { saat:"16:20", gorsel:"b09/07", ortam:"ev", yedek:"apartman_merdiven", atla:b => !b.ev,
      metin:"Eve koşuyorsun. Paspası kaldırıyorsun: altı boş." },
    { saat:"16:22", gorsel:"b09/08", ortam:"ev", yedek:"apartman_merdiven", atla:b => !b.ev,
      metin:"Parmağın zilin üstünde. Annen dün geceden beri ayaktaydı. Basmaya kıyamıyorsun." },
    { saat:"16:40", gorsel:"b09/09", ortam:"ev", yedek:"apartman_merdiven", atla:b => !b.ev,
      metin:"Merdivene oturuyorsun. Çantandan süzülen su basamakta birikiyor." },

    /* --- BÖLÜM 10 · ⚑ SON SİMİT (17:40-18:05) --- */
    { saat:"17:40", gorsel:"b10/01", ortam:"aksam", yedek:"kose_1800", atla:b => !b.ocak,
      metin:"Hava kararıyor. Kemal amca oturmuş, boş boş bakıyor. Bardağı masaya bırakıp sessizce çıkıyorsun." },
    { saat:"17:50", gorsel:"b10/02", ortam:"aksam", yedek:"kose_1800", atla:b => !b.ocak,
      metin:"Durağa yürüyorsun. Bankın ucunda simitçi amca oturuyor; tepsisinde tek simit kalmış." },
    { saat:"17:58", gorsel:"b10/03", ortam:"aksam", yedek:"kose_1800", atla:b => !(b.ocak && b.veresiye), girince:{para:-15},
      metin:"Buruşuk on beş lirayı uzatıyorsun. “Sınav nasıl geçti?” Cevap vermiyorsun, gülümsüyorsun." },
    { saat:"17:58", gorsel:"b10/04", ortam:"aksam", yedek:"kose_1800", atla:b => !(b.ocak && !b.veresiye),
      metin:"Ağlıyorsun. Yazılı mı, yağmur mu, bilmiyorsun. Amca bir şey demeden yanına geliyor." },
    { saat:"18:00", kader:true, gorsel:"b10/05", ortam:"aksam", yedek:"kose_1800", damga:"sonsimit", kaderSatir:"Son simit sana geldi", atla:b => !b.ocak,
      metin:b => (b.kostu && !b.veresiye ? "“Sen yağmurdaki kızsın.” " : "") + "Tepsinin dibindeki son simit sana uzanıyor.",
      secimler:[
        { yazi:"Son simidi al", tip:"kendine", cekYer:[50, 76], goster:b => b.veresiye, sonuc:"“Bu da benden.”" },
        { yazi:"Son simidi al", tip:"kendine", cekYer:[50, 76], goster:b => !b.veresiye, sonuc:["“Para istemem.”", "Burnunu çekiyorsun: “Ben Deniz, amca.”"] } ] },
    { saat:"18:02", gorsel:"b10/06", ortam:"aksam", yedek:"kose_1800", atla:b => !b.ocak,
      metin:"Bankın öbür ucunda ıslak bir kurye telefonuna bakıyor: “Kapattılar.”" },
    { saat:"18:05", gorsel:"b10/07", ortam:"aksam", yedek:"kose_1800", atla:b => !b.ocak,
      metin:"Kalkarken eldivenini bankta unutuyor. Seslenecek oluyorsun, gitti bile. Eldiveni çantana atıyorsun.",
      secimler:[ { yazi:"Devam", bayrak:"eldiven" } ] },
    { saat:"18:00", kader:true, gorsel:"b10/08", ortam:"ev", yedek:"apartman_merdiven", damga:"sonsimit", kaderSatir:"Son simit sana geldi", atla:b => !b.ev,
      metin:b => (b.kostu && !b.veresiye ? "“Sen yağmurdaki kızsın. " : "“") + "Anahtarı mı unuttun? Al bakalım.” Kapıda simitçi amca, elinde son simit.",
      secimler:[ { yazi:"Son simidi al", tip:"kendine", cekYer:[48, 56] } ] },
    { saat:"18:02", gorsel:"b10/09", ortam:"ev", yedek:"apartman_merdiven", atla:b => !b.ev,
      metin:b => [(b.veresiye ? "“Sen de mi buradasın amca?”" : "“Ben Deniz, amca. Siz de mi buradasınız?”") + " “Yan bloktayım.” Yıllardır komşusunuz, bugün öğreniyorsunuz.",
                  ...(b.veresiye ? ["“On beş lira borcum var amca.” “Yarın demiştin. Yarın getir.”"] : [])] },

    /* --- BÖLÜM 11 · ANNEN (18:50-19:10) --- */
    { saat:"18:50", gorsel:"b11/01", yedek:"sokak_0600", atla:b => !b.ocak,
      metin:"Otobüsün camı buğulu. Elinde son simit; yemeye kıyamıyorsun." },
    { saat:"19:00", gorsel:"b11/02", yedek:"hasan_mutfak", atla:b => !b.ocak,
      metin:"Annen uyanmış, saçları dağınık. “Kızım, sırılsıklamsın.”" },
    { saat:"19:00", gorsel:"b11/03", yedek:"apartman_merdiven", atla:b => !b.ev,
      metin:"Kapı açılıyor. Annen, saçları dağınık: “Deniz? Burada ne işin var?” Anahtar cebinden çıkıyor; paspasa koyacaktı, unutmuş." },
    { saat:"19:05", gorsel:"b11/04", yedek:"hasan_mutfak", damga:"anne",
      girince:(b, st) => st.para >= 30 ? { huzur:+1 } : null,
      metin:(b, st) => [
        ...(st.para >= 50 ? ["“Verdiğin para duruyor anne.” Çantanın ön gözünü gösteriyorsun."] : st.para >= 30 ? ["“Verdiğin paranın çoğu duruyor anne.” Çantanın ön gözünü gösteriyorsun."] : []),
        (b.aradi ? "“Sabah sesin titriyordu.” " : "Telefonunda sabahki “Tamam” duruyor. ") + "Havluyu omzuna koyuyor: “Yazılı nasıldı?”"],
      secimler:[
        { yazi:"Yazılıyı anlat", etki:{bag:+2}, bayrak:"anlat" },
        { yazi:"Sakla", etki:{huzur:-1}, bayrak:"sakla" } ] },
    { saat:"19:06", gorsel:"b11/05", yedek:"hasan_mutfak", atla:b => !b.anlat,
      metin:b => (b.kutuphane ? "Kelimeler boğazında takılıyor. " : "") + "“Son soru boş kaldı.” Annen gülüyor: “Benim de kaldı bir zamanlar.”" },
    { saat:"19:06", gorsel:"b11/06", yedek:"hasan_mutfak", atla:b => !b.sakla,
      metin:"“İyiydi.” Annen bakıyor. Biliyor." },
    { saat:"19:10", gorsel:"b11/07", yedek:"hasan_mutfak",
      metin:"Annen önünde duruyor, gözlerinin altı mor. Hastane kokuyor.",
      secimler:[ { yazi:"Annene sarıl", tip:"saril", bayrak:"uzun", kisa:{ yazi:"Annene sarıl", bayrak:"kisa" } } ] },
    { saat:"19:11", gorsel:"b11/08", yedek:"hasan_mutfak", atla:b => !b.uzun,
      metin:"Bırakmıyorsun. Bir süre sonra onun kolları da sırtında." },
    { saat:"19:11", gorsel:"b11/09", yedek:"hasan_mutfak", atla:b => !b.kisa,
      metin:"Sırtını iki kere sıvazlıyor: “Hadi, üstünü değiştir.”" },

    /* --- BÖLÜM 12 · ⚑ ÇAY (20:00-21:20) --- */
    { saat:"20:00", gorsel:"b12/01", yedek:"hasan_mutfak",
      metin:"Kuru kazak, çorba. Çantanı kaloriferin önüne boşaltıyorsun." },
    { saat:"20:05", gorsel:"b12/02", yedek:"hasan_mutfak", kamera:"50% 60%", atla:b => !b.eldiven,
      metin:"İçinden kurye eldiveni çıkıyor. Parmak ucu yırtık. Atmaya elin varmıyor." },
    { saat:"20:20", gorsel:"b12/03", yedek:"hasan_mutfak", atla:b => !b.dondu,
      metin:"Ayağının dibindeki simit aklından çıkmıyor. Biri almıştı; sen bakmıştın." },
    { saat:"20:30", gorsel:"b12/04", efekt:"telefon", yedek:"hasan_mutfak", atla:b => !b.araba,
      metin:b => b.kostu ? "Ece'den mesaj: “O amca kimdi? Yarın anlatacaksın.”" : "Ece'den mesaj: “Neden öyle donup kaldın? Yarın konuşuruz.”" },
    { saat:"20:40", gorsel:"b12/05", yedek:"hasan_mutfak", kamera:"50% 60%",
      metin:"Son simit tezgahta, bir peçetenin üstünde. Yarıya bölüyorsun." },
    { saat:"21:00", kader:true, gorsel:"b12/06", yedek:"hasan_mutfak", damga:"cay", kaderSatir:"“Anne, bugün güzel bir şey oldu.”", muzik:null,
      metin:"Mutfakta annenle çay içiyorsunuz. Bardaklar sıcak.",
      secimler:[ { yazi:"“Anne, bugün güzel bir şey oldu.”" } ] },
    { saat:"21:02", kader:true, gorsel:"b12/07", yedek:"hasan_mutfak", atla:(b, n, st) => st.bag < 8,
      metin:"Simitçi amcayı, yağmuru anlatıyorsun. Annen çayını soğutuyor, dinliyor." },
    { saat:"21:02", kader:true, gorsel:"b12/08", yedek:"hasan_mutfak", atla:(b, n, st) => st.bag >= 8 || st.huzur > 3,
      metin:"Ne olduğunu anlatmıyorsun; annen de sormuyor. Elini tutuyor." },
    { saat:"21:02", kader:true, gorsel:"b12/07", yedek:"hasan_mutfak", atla:(b, n, st) => st.bag >= 8 || st.huzur <= 3,
      metin:"“Ne oldu?” “Bilmem. Güzel bir şey.” Annen gülümsüyor." },
    { saat:"21:20", gorsel:"b12/09", yedek:"hasan_yatak_odasi",
      metin:"Odana geçiyorsun. Rafın ucundaki defteri alıyorsun.",
      secimler:[ { yazi:"İlk boş sayfayı aç" } ] },
    { saat:"21:20", ozel:"defter", gorsel:"b12/09", yedek:"hasan_yatak_odasi" }
  ]
};

/* 21:20 "Yazdıklarım": bugünün iki kelimesi yazılır, sonra sayfalar geriye çevrilir (M7). */
HAYATLAR.deniz.defter = {
  giris: "Yıllardır bir hikayeyi bitiremedin. Bugün başka.",
  satir: () => "Bu Salı...",
  sayfalar: () => [
    { h:"Salı", satirlar:[], not:"Sayfaları geriye çevirebilirsin." },
    { h:"15 yaşında", satirlar:["Otobüste hep aynı koltuğa oturan bir adam varmış.", "Bir gün oturmamış.", "Neden? Yarın yazarım."], not:"" },
    { h:"12 yaşında", satirlar:["Bir hemşire varmış, hiç uyumazmış.", "Kızı onu uyandırmamak için", { k:45 }], not:"" },
    { h:"8 yaşında", satirlar:["Çantam benden büyük.", "Simitçi amca para almadı.", "Anneme söylemedim."], not:"Bunu unutmuşsun." },
    { kapak:true, yazi:"Yazdıklarım", not:"Hiçbirinin sonu yok." }
  ]
};
