export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-6 py-16">
      <section className="space-y-6">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Sağlık & Wellness Çözümü</h1>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Sağlık ve wellness işletmelerinde uzun vadeli müşteri bağlılığına odaklı çözümler.
          </p>
        </header>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Sektör Zorlukları</h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
            <li>Üyelik devamlılığı</li>
            <li>Randevu ve program yönetimi</li>
            <li>Kişiye özel hedef takibi</li>
            <li>Mevsimsellik ve motivasyon</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">mekanapp Çözümleri</h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
            <li>Üyelik sadakat ve ödül programı</li>
            <li>Hatırlatma ve hedef takip akışları</li>
            <li>Segment bazlı kampanyalar</li>
            <li>Memnuniyet ölçümü</li>
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
