export default function Page() {
  const products = [
    {
      id: 'temel-paket',
      name: 'Temel Paket',
      price: '₺1,500/ay',
      description: 'Başlangıç düzeyi ihtiyaçlar için ideal paket. Şans çarkı sistemi ve temel sadakat programı.',
      features: [
        'Şans çarkı sistemi',
        'Temel sadakat programı', 
        'SMS/WhatsApp entegrasyonu',
        'Yönetim paneli'
      ]
    },
    {
      id: 'profesyonel-paket',
      name: 'Profesyonel Paket',
      price: '₺3,500/ay',
      description: 'Büyüyen işletmeler için gelişmiş özellikler ve entegrasyonlar.',
      features: [
        'Gelişmiş şans çarkı kuralları',
        'Segment bazlı kampanyalar',
        'SMS/WhatsApp/Email otomasyonları',
        'Detaylı raporlama ve paneller'
      ]
    },
    {
      id: 'kurumsal-paket',
      name: 'Kurumsal Paket',
      price: 'Özel Fiyat',
      description: 'Büyük ölçekli ve çok lokasyonlu işletmeler için kapsamlı özellik seti.',
      features: [
        'Kurumsal seviye güvenlik',
        'Çok lokasyon yönetimi',
        'Gelişmiş entegrasyonlar (ERP/CRM)',
        'Özel SLA ve hesap yöneticisi'
      ]
    }
  ];

  return (
    <main className="container mx-auto max-w-7xl px-6 py-16">
      <section className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Ürünler</h1>
          <p className="mt-4 text-lg leading-8 text-design-gray-700">
            İşletmenize uygun mekanapp paketini seçin ve müşteri sadakatini artırmaya başlayın.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="rounded-lg border border-gray-300 bg-white p-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
                <p className="mt-2 text-2xl font-bold text-gray-900">{product.price}</p>
                <p className="mt-3 text-design-gray-700">{product.description}</p>
              </div>

              <ul className="mt-6 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-600">✓</span>
                    <span className="text-design-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-center">
                <a
                  href={`/urunler/${product.id}`}
                  className="inline-block rounded-md bg-gray-900 px-6 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
                >
                  Detayları Gör
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
