export default function Page() {
  return (
    <main className="container mx-auto max-w-7xl px-6 py-16">
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Kaynak Merkezi</h1>
        <p className="mt-4 text-lg leading-8 text-gray-800">
          İşletmenizi büyütmek için ücretsiz araçlar ve rehberler.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-300 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">ROI Hesaplayıcı</h2>
            <p className="mt-2 text-gray-800">mekanapp ile elde edeceğiniz kazancı hesaplayın.</p>
            <a
              href="/kaynak-merkezi/roi-hesaplayici"
              className="mt-4 inline-block rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              Hesapla
            </a>
          </div>

          <div className="rounded-lg border border-gray-300 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">Rehberler</h2>
            <p className="mt-2 text-gray-800">Müşteri sadakati ve dijital dönüşüm rehberleri.</p>
            <span className="mt-4 inline-block rounded-md bg-gray-400 px-4 py-2 text-white cursor-not-allowed">
              Yakında
            </span>
          </div>

          <div className="rounded-lg border border-gray-300 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">Videolar</h2>
            <p className="mt-2 text-gray-800">Ürün demoları ve eğitim videoları.</p>
            <span className="mt-4 inline-block rounded-md bg-gray-400 px-4 py-2 text-white cursor-not-allowed">
              Yakında
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
