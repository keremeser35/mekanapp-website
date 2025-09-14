export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-6 py-16">
      <section className="space-y-6">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Güzellik Salonu Çözümü</h1>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Güzellik salonları için randevu tekrarını ve paket satışlarını artırmaya odaklı çözümler.
          </p>
        </header>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Sektör Zorlukları</h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
            <li>Randevu tekrar oranı</li>
            <li>Paket ve üyelik yönetimi</li>
            <li>Müşteri memnuniyeti takibi</li>
            <li>Sezonluk talep dalgalanmaları</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">mekanapp Çözümleri</h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
            <li>Paket/üyelik kampanyaları</li>
            <li>Hatırlatma ve bildirim akışları</li>
            <li>Sadakat ödülleri</li>
            <li>Memnuniyet anketleri</li>
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
