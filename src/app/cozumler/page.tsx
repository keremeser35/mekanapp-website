export default function Page() {
  const solutions = [
    {
      id: 'restoran-kafe',
      name: 'Restoran & Kafe',
      description: 'Müşteri tekrar ziyaret oranını artırmak ve sadakat oluşturmak için özel çözümler.',
      challenges: ['Düşük tekrar ziyaret', 'Yoğun rekabet', 'Müşteri verisi toplama'],
      benefits: ['%45 müşteri geri dönüşü artışı', '%30 ortalama harcama artışı', '3 ay geri ödeme']
    },
    {
      id: 'perakende',
      name: 'Perakende',
      description: 'Tekrar alışverişi artırmaya odaklı sadakat ve kampanya çözümleri.',
      challenges: ['Düşük tekrar alışveriş', 'Stok yönetimi', 'Fiyat rekabeti'],
      benefits: ['%35 tekrar alışveriş artışı', 'Kişiselleştirilmiş kampanyalar', 'Detaylı analitik']
    },
    {
      id: 'guzellik-salonu',
      name: 'Güzellik Salonu',
      description: 'Randevu tekrarını ve paket satışlarını artırmaya odaklı çözümler.',
      challenges: ['Randevu tekrar oranı', 'Paket yönetimi', 'Sezonluk dalgalanmalar'],
      benefits: ['%50 randevu tekrarı artışı', 'Paket satış artışı', 'Müşteri memnuniyeti']
    },
    {
      id: 'saglik-wellness',
      name: 'Sağlık & Wellness',
      description: 'Uzun vadeli müşteri bağlılığına odaklı çözümler.',
      challenges: ['Üyelik devamlılığı', 'Program takibi', 'Motivasyon'],
      benefits: ['%40 üyelik uzatma', 'Hedef takip sistemi', 'Motivasyon artışı']
    }
  ];

  return (
    <main className="container mx-auto max-w-7xl px-6 py-16">
      <section className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Çözümler</h1>
          <p className="mt-4 text-lg leading-8 text-gray-800">
            Sektörünüze özel mekanapp çözümlerini keşfedin ve müşteri sadakatini artırın.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {solutions.map((solution) => (
            <div key={solution.id} className="rounded-lg border border-gray-300 bg-white p-6">
              <h2 className="text-xl font-bold text-gray-900">{solution.name}</h2>
              <p className="mt-3 text-gray-800">{solution.description}</p>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900">Sektör Zorlukları:</h3>
                <ul className="mt-2 space-y-1">
                  {solution.challenges.map((challenge, index) => (
                    <li key={index} className="text-sm text-gray-800">• {challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900">Beklenen Faydalar:</h3>
                <ul className="mt-2 space-y-1">
                  {solution.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm text-gray-800">✓ {benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href={`/cozumler/${solution.id}`}
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
