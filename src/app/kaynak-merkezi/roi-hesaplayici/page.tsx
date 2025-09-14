export default function Page() {
  return (
    <main className="container mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">ROI Hesaplayıcı</h1>
        <p className="mt-4 text-lg leading-8 text-gray-700">
          mekanapp ile olası kazancı tahmini olarak hesaplamak için bilgilerinizi girin. Bu bir yer tutucu formdur; hesaplama mantığı daha sonra eklenecektir.
        </p>
      </header>

      <form className="mt-8 space-y-6" aria-labelledby="roi-form">
        <div>
          <label htmlFor="daily-customers" className="block text-sm font-medium text-gray-900">Günlük müşteri sayısı</label>
          <input
            id="daily-customers"
            type="number"
            min={0}
            inputMode="numeric"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Örn. 120"
          />
        </div>

        <div>
          <label htmlFor="avg-spending" className="block text-sm font-medium text-gray-900">Ortalama harcama (TL)</label>
          <input
            id="avg-spending"
            type="number"
            min={0}
            inputMode="numeric"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Örn. 250"
          />
        </div>

        <div>
          <label htmlFor="business-type" className="block text-sm font-medium text-gray-900">İşletme türü</label>
          <select
            id="business-type"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            defaultValue="restaurant"
          >
            <option value="restaurant">Restoran/Kafe</option>
            <option value="retail">Perakende</option>
            <option value="beauty">Güzellik Salonu</option>
            <option value="wellness">Sağlık & Wellness</option>
          </select>
        </div>

        <button
          type="button"
          className="rounded-md border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Hesapla
        </button>
      </form>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900">Tahmini Sonuçlar</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-medium text-gray-900">Aylık Ek Gelir</h3>
            <p className="mt-1 text-lg text-gray-700">₺—</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-medium text-gray-900">Yıllık ROI</h3>
            <p className="mt-1 text-lg text-gray-700">%—</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-medium text-gray-900">Geri Ödeme Süresi</h3>
            <p className="mt-1 text-lg text-gray-700">— ay</p>
          </div>
        </div>
      </section>
    </main>
  );
}
