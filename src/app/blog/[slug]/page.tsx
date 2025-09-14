type PageProps = {
  params: { slug: string };
};

export default function Page({ params }: PageProps) {
  const title = params.slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  return (
    <main className="container mx-auto max-w-3xl px-6 py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
        <a href="/" className="hover:underline">Ana Sayfa</a>
        <span className="mx-2">/</span>
        <a href="/blog" className="hover:underline">Blog</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900" aria-current="page">{title}</span>
      </nav>

      <article className="mt-6 space-y-6">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
          <div className="mt-2 text-sm text-gray-600">
            <span>Yazar: mekanapp Ekibi</span>
            <span className="mx-2">•</span>
            <span>Okuma süresi: 5 dk</span>
          </div>
        </header>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700">
            Bu bir örnek blog yazısı yer tutucusudur. CMS entegrasyonu sonrası içerikler dinamik olarak yüklenecek.
          </p>
        </div>

        <footer className="pt-4 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">İlgili Yazılar</h2>
          <p className="mt-2 text-gray-700">Yakında eklenecek.</p>
        </footer>
      </article>
    </main>
  );
}
