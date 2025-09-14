'use client'

import { useState, useEffect } from 'react'

// Pre-generate random positions to avoid hydration mismatch
const backgroundDots = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  animationDelay: Math.random() * 3,
  animationDuration: 2 + Math.random() * 3
}))

export default function Page() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          {backgroundDots.map((dot) => (
            <div
              key={dot.id}
              className="absolute w-1 h-1 bg-primary-500 rounded-full animate-pulse"
              style={{
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                animationDelay: `${dot.animationDelay}s`,
                animationDuration: `${dot.animationDuration}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-gaming-purple/20 to-secondary-600/20" />
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-medium mb-4 text-white drop-shadow-lg">
                🚀 Türkiye'nin İlk Oyunlaştırılmış Sadakat Platformu
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
              MEKANAPP
              <span className="block text-3xl sm:text-5xl mt-4 text-blue-600">
                HİKAYESİ
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800 max-w-4xl mx-auto mb-12">
              Şans çarkının büyüsünü dijital dünyaya taşıyan, <span className="font-semibold text-green-600">500+ işletmenin</span> müşteri sadakatini <span className="font-semibold text-blue-600">%40 artıran</span> devrim niteliğindeki platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center justify-center h-12 rounded-lg px-10 text-base bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 shadow-lg hover:shadow-xl font-semibold transition-colors">
                <span className="relative z-10">Hikayemizi Keşfet</span>
              </button>
              <button className="inline-flex items-center justify-center h-12 rounded-lg px-10 text-base text-gray-800 hover:bg-gray-100 hover:text-gray-900 font-medium transition-colors">
                Demo İzle ▶
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-gray-100/80" />
        <div className="relative z-10 container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              VİZYON & MİSYON
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-gaming-purple-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-300 rounded-3xl p-10 hover:scale-105 transition-all duration-500 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-gaming-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h3>
                <p className="text-gray-700 leading-8 text-lg">
                  KOBİ'lerin dijital dönüşümünü <span className="text-primary-500 font-semibold">hızlandırarak</span>, müşteri sadakatini artırmalarına yardımcı olmak. 
                  Oyunlaştırma teknolojileri ile işletmelerin <span className="text-gaming-purple-500 font-semibold">satışlarını artırmalarını</span> ve müşteri verilerini 
                  daha etkili kullanmalarını sağlamak.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-300 rounded-3xl p-10 hover:scale-105 transition-all duration-500 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-gaming-purple-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-gaming-purple-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Vizyonumuz</h3>
                <p className="text-gray-700 leading-8 text-lg">
                  Türkiye'de ve dünyada <span className="text-gaming-purple-500 font-semibold">oyunlaştırılmış sadakat sistemlerinin öncüsü</span> olmak. 
                  Her işletmenin müşteri deneyimini <span className="text-secondary-500 font-semibold">eğlenceli ve kazançlı</span> hale getiren teknolojileri 
                  erişilebilir kılmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/80 to-white/50" />
        <div className="relative z-10 container mx-auto max-w-6xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              BAŞLANGIÇ HİKAYESİ
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Sıfırdan 500+ işletmeye ulaşan yolculuğumuz
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gaming-gold-500 to-secondary-500 mx-auto mt-6" />
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-gaming-purple-500 to-gaming-gold-500" />
            
            <div className="space-y-16">
              <div className="flex items-start gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="bg-white/90 backdrop-blur-lg border border-gray-300 rounded-2xl p-8 flex-1 group-hover:scale-105 transition-all duration-300 shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">FİKİR İÇİN DOKUNUŞ (2019)</h3>
                  <p className="text-gray-700 leading-7">
                    KOBİ'lerin dijitalleşme sürecinde karşılaştığı müşteri sadakati sorunlarını çözmek için yola çıktık. Şans çarkının büyüsünü dijital dünyaya taşıma fikri burada doğdu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="bg-white/90 backdrop-blur-lg border border-gray-300 rounded-2xl p-8 flex-1 group-hover:scale-105 transition-all duration-300 shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">PROTOTİP GELİŞTİRME (2020)</h3>
                  <p className="text-gray-700 leading-7">
                    İlk prototypimizi geliştirdik ve pilot işletmelerle testler yaptık. Müşteri geri bildirimleri sayesinde oyunlaştırma mekaniklerini geliştirdik ve kullanıcı deneyimini optimize ettik.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="bg-white/90 backdrop-blur-lg border border-gray-300 rounded-2xl p-8 flex-1 group-hover:scale-105 transition-all duration-300 shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">PAZAR LANSMANI (2021)</h3>
                  <p className="text-gray-700 leading-7">
                    Ürünümüzü resmi olarak piyasaya sürdük ve ilk müşteri segmentimizle çalışmaya başladık. Hızlı büyüme göstererek 3 ayda 50+ işletmeye ulaştık.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-gray-100/80" />
        <div className="relative z-10 container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              DEĞERLERİMİZ
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Bizi yönlendiren temel ilkeler ve çalışma felsefemiz
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-gaming-purple-500 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center bg-white/90 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">İnovasyon</h3>
              <p className="text-gray-700 leading-6">
                Sürekli <span className="text-primary-500 font-semibold">yenilik yaparak</span> sektörde öncü olmaya devam ediyoruz.
              </p>
            </div>

            <div className="group text-center bg-white/90 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-gaming-purple-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Güvenilirlik</h3>
              <p className="text-gray-700 leading-6">
                Müşterilerimizin <span className="text-gaming-purple-500 font-semibold">başarısı bizim başarımız</span>. Sözümüzün arkasında dururuz.
              </p>
            </div>

            <div className="group text-center bg-white/90 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-gaming-green-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sonuç Odaklılık</h3>
              <p className="text-gray-700 leading-6">
                <span className="text-gaming-green-500 font-semibold">Ölçülebilir sonuçlar</span> üreterek işletmelerin büyümesine katkı sağlıyoruz.
              </p>
            </div>

            <div className="group text-center bg-white/90 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-gaming-gold-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hızlılık</h3>
              <p className="text-gray-700 leading-6">
                <span className="text-gaming-gold-500 font-semibold">Hızlı kurulum, hızlı destek</span>, hızlı sonuçlar. Zamanınızı değerli biliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-gray-100/80" />
        <div className="relative z-10 container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              EKİBİMİZ
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              mekanapp'ı hayata geçiren deneyimli ve tutkulu ekip
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gaming-purple-500 to-secondary-600 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group text-center bg-white/90 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-lg">
              <div className="relative mx-auto mb-6">
                <div className="w-28 h-28 bg-gradient-to-br from-primary-600 to-gaming-purple-500 rounded-2xl mx-auto flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
                  <span className="text-3xl font-black text-white">AK</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-gaming-gold-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">👑</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ahmet Kaya</h3>
              <p className="text-primary-500 font-semibold mb-4 text-lg">Kurucu & CEO</p>
              <p className="text-gray-700 leading-6">
                <span className="text-primary-500 font-semibold">15+ yıl</span> teknoloji sektörü deneyimi. Önceki girişimlerinde <span className="text-gaming-purple-500 font-semibold">3 başarılı çıkış</span> gerçekleştirdi.
              </p>
            </div>

            <div className="group text-center bg-white/90 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-lg">
              <div className="relative mx-auto mb-6">
                <div className="w-28 h-28 bg-gradient-to-br from-gaming-purple-500 to-secondary-600 rounded-2xl mx-auto flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
                  <span className="text-3xl font-black text-white">SY</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-gaming-green-500 to-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">⚡</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Selin Yılmaz</h3>
              <p className="text-gaming-purple-500 font-semibold mb-4 text-lg">CTO</p>
              <p className="text-gray-700 leading-6">
                <span className="text-gaming-purple-500 font-semibold">Google ve Microsoft'ta 10+ yıl</span> yazılım geliştirme deneyimi. <span className="text-secondary-500 font-semibold">Full-stack uzmanı</span>.
              </p>
            </div>

            <div className="group text-center bg-white/90 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-lg">
              <div className="relative mx-auto mb-6">
                <div className="w-28 h-28 bg-gradient-to-br from-gaming-gold-500 to-secondary-500 rounded-2xl mx-auto flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
                  <span className="text-3xl font-black text-white">MÖ</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary-500 to-gaming-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">🚀</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Murat Özkan</h3>
              <p className="text-gaming-gold-500 font-semibold mb-4 text-lg">Pazarlama Direktörü</p>
              <p className="text-gray-700 leading-6">
                Dijital pazarlama ve müşteri deneyimi alanında <span className="text-gaming-gold-500 font-semibold">12+ yıl deneyim</span>. <span className="text-secondary-500 font-semibold">E-ticaret uzmanı</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-gaming-purple/20 to-secondary-600/20" />
        <div className="relative z-10 container mx-auto max-w-6xl px-6">
          <div className="bg-white/95 backdrop-blur-2xl border border-gray-300 rounded-3xl p-12 md:p-16 text-center overflow-hidden relative shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-gaming-purple/10 to-secondary-600/10" />
            <div className="relative z-10">
              <div className="mb-8">
                <span className="inline-block px-6 py-3 bg-blue-600 backdrop-blur-sm border border-gray-300 rounded-full text-sm font-medium text-white mb-6 drop-shadow">
                  🚀 Hikayemizin Parçası Ol
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                BİZİMLE İLETİŞİME GEÇİN
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-800 max-w-4xl mx-auto mb-12">
                mekanapp hakkında daha fazla bilgi almak, <span className="font-semibold text-blue-600">ücretsiz demo</span> talep etmek veya 
                <span className="font-semibold text-green-600">işbirliği fırsatları</span> keşfetmek için
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/demo-talep"
                  className="inline-flex items-center justify-center h-12 rounded-lg px-10 text-base bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 shadow-lg hover:shadow-xl font-semibold transition-colors"
                >
                  Ücretsiz Demo Al
                </a>
                <a
                  href="/iletisim"
                  className="inline-flex items-center justify-center h-12 rounded-lg px-10 text-base border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 shadow-sm hover:shadow-md font-semibold transition-colors"
                >
                  İletişim Kur
                </a>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 shadow">
                  <div className="text-3xl mb-3">📧</div>
                  <p className="text-gray-900 font-semibold">info@mekanup.com</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 shadow">
                  <div className="text-3xl mb-3">📱</div>
                  <p className="text-gray-900 font-semibold">0850 532 0123</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 shadow">
                  <div className="text-3xl mb-3">📍</div>
                  <p className="text-gray-900 font-semibold">İzmir, Türkiye</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
