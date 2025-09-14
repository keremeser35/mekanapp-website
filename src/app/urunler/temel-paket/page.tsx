export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-6 py-16">
      <section className="space-y-6">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Temel Paket</h1>
          <p className="mt-4 text-lg leading-8 text-design-gray-700">
            Başlangıç düzeyi ihtiyaçlar için ideal pakettir. Fiyat ve özellik detayları yakında eklenecek.
          </p>
        </header>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Öne Çıkan Özellikler</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1 text-design-gray-700">
            <li>Şans çarkı sistemi</li>
            <li>Temel sadakat programı</li>
            <li>SMS/WhatsApp entegrasyonu</li>
            <li>Yönetim paneli</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Dahil Olanlar</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1 text-design-gray-700">
            <li>Donanım listesi</li>
            <li>Kurulum hizmeti</li>
            <li>Eğitim desteği</li>
            <li>İlk ay ücretsiz</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Fiyatlandırma</h2>
          <p className="mt-2 text-design-gray-700">Kurulum, aylık abonelik ve ek hizmetler yakında yayınlanacak.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">ROI Hesaplayıcı (Yakında)</h2>
          <p className="mt-2 text-design-gray-700">Günlük müşteri sayısı ve ortalama harcama ile tahmini kazancı hesaplayın.</p>
        </div>

        <footer>
          <h2 className="text-xl font-semibold text-gray-900">Sık Sorulan Sorular</h2>
          <p className="mt-2 text-design-gray-700">SSS içerikleri yakında eklenecek.</p>
        </footer>
      </section>
    </main>
  );
}
