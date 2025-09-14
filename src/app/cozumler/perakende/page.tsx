export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-6 py-16">
      <section className="space-y-6">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Perakende Çözümü</h1>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Perakende işletmelerinde tekrar alışverişi artırmaya odaklı sadakat ve kampanya çözümleri.
          </p>
        </header>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Sektör Zorlukları</h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
            <li>Düşük tekrar alışveriş oranı</li>
            <li>Stok ve kampanya yönetimi</li>
            <li>Müşteri segmentasyonu</li>
            <li>Fiyat rekabeti</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">mekanapp Çözümleri</h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
            <li>Kişiselleştirilmiş kampanyalar</li>
            <li>Sadakat puanları ve ödüller</li>
            <li>Çok kanallı bildirimler</li>
            <li>Detaylı satış analitiği</li>
          </ul>
        </div>

        <footer>
          <h2 className="text-xl font-semibold text-gray-900">Sık Sorulan Sorular</h2>
          <p className="mt-2 text-gray-700">Sektöre özel SSS içerikleri yakında eklenecek.</p>
        </footer>
      </section>
    </main>
  );
}
