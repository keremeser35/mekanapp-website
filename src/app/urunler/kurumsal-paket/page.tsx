export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-6 py-16">
      <section className="space-y-6">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Kurumsal Paket</h1>
          <p className="mt-4 text-lg leading-8 text-design-gray-700">
            Büyük ölçekli ve çok lokasyonlu işletmeler için kapsamlı özellik seti ve özel destek.
          </p>
        </header>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Öne Çıkan Özellikler</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1 text-design-gray-700">
            <li>Kurumsal seviye güvenlik ve yetkilendirme</li>
            <li>Çok lokasyon yönetimi</li>
            <li>Gelişmiş entegrasyonlar (ERP/CRM)</li>
            <li>Özel SLA ve hesap yöneticisi</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Dahil Olanlar</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1 text-design-gray-700">
            <li>Kurumsal onboarding</li>
            <li>Özel eğitim programı</li>
            <li>Özel raporlama panelleri</li>
            <li>Geliştirici desteği</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">Fiyatlandırma</h2>
          <p className="mt-2 text-design-gray-700">İhtiyaca göre özelleştirilen kurumsal teklif sunulur.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">ROI Hesaplayıcı (Yakında)</h2>
          <p className="mt-2 text-design-gray-700">Çok lokasyonlu işletmeler için ROI modellemesi.</p>
        </div>

        <footer>
          <h2 className="text-xl font-semibold text-gray-900">Sık Sorulan Sorular</h2>
          <p className="mt-2 text-design-gray-700">SSS içerikleri yakında eklenecek.</p>
        </footer>
      </section>
    </main>
  );
}
