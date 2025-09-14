export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-6 py-16">
      <section className="space-y-6">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Profesyonel Paket</h1>
          <p className="mt-4 text-lg leading-8 text-design-gray-700">
            Büyüyen işletmeler için gelişmiş özellikler ve entegrasyonlarla gelir artışını hızlandırın.
          </p>
        </header>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Öne Çıkan Özellikler</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1 text-design-gray-700">
            <li>Gelişmiş şans çarkı kuralları</li>
            <li>Segment bazlı kampanyalar</li>
            <li>SMS/WhatsApp/Email otomasyonları</li>
            <li>Detaylı raporlama ve paneller</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Dahil Olanlar</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1 text-design-gray-700">
            <li>Öncelikli destek</li>
            <li>İleri seviye eğitim</li>
            <li>Başlangıç kampanya kurulumu</li>
            <li>3. parti entegrasyon desteği</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Fiyatlandırma</h2>
          <p className="mt-2 text-design-gray-700">Aylık abonelik ve kullanım bazlı ek paketler yakında yayınlanacak.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">ROI Hesaplayıcı (Yakında)</h2>
          <p className="mt-2 text-design-gray-700">Sektör ve müşteri segmentine göre beklenen ROI değerlerini görün.</p>
        </div>

        <footer>
          <h2 className="text-xl font-semibold text-gray-900">Sık Sorulan Sorular</h2>
          <p className="mt-2 text-design-gray-700">SSS içerikleri yakında eklenecek.</p>
        </footer>
      </section>
    </main>
  );
}
