export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-6 py-16">
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Blog</h1>
        <p className="mt-4 text-lg leading-8 text-gray-800">
          Müşteri sadakati, dijital dönüşüm ve başarı hikayeleri hakkında uzman içerikleri keşfedin.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-gray-300 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">Müşteri Sadakati</h2>
            <p className="mt-2 text-gray-800">Müşteri bağlılığını artırmaya yönelik stratejiler ve ipuçları.</p>
            <a
              href="/blog/musteri-sadakati"
              className="mt-4 inline-block rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              Yazıları Oku
            </a>
          </div>

          <div className="rounded-lg border border-gray-300 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">Dijital Dönüşüm</h2>
            <p className="mt-2 text-gray-800">KOBİ'ler için dijitalleşme ve otomasyon rehberleri.</p>
            <a
              href="/blog/dijital-donusum"
              className="mt-4 inline-block rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              Yazıları Oku
            </a>
          </div>

          <div className="rounded-lg border border-gray-300 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">Başarı Hikayeleri</h2>
            <p className="mt-2 text-gray-800">mekanapp kullanan işletmelerin elde ettiği sonuçlar.</p>
            <a
              href="/blog/basari-hikayeleri"
              className="mt-4 inline-block rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              Hikayeleri Oku
            </a>
          </div>

          <div className="rounded-lg border border-gray-300 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">Rehberler</h2>
            <p className="mt-2 text-gray-800">Uygulanabilir rehberler, check-list'ler ve şablonlar.</p>
            <a
              href="/blog/rehberler"
              className="mt-4 inline-block rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              Rehberleri İncele
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
