import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mekanup.com'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/demo-talep`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/urunler`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    { url: `${baseUrl}/urunler/temel-paket`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/urunler/profesyonel-paket`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/urunler/kurumsal-paket`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    { url: `${baseUrl}/cozumler`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/cozumler/restoran-kafe`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/cozumler/perakende`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/cozumler/saglik-wellness`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/cozumler/guzellik-salonu`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/kaynak-merkezi`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/kaynak-merkezi/roi-hesaplayici`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/blog/basari-hikayeleri`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog/dijital-donusum`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog/musteri-sadakati`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog/rehberler`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/partner-ol`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/destek`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/yasal`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/yasal/gizlilik`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/yasal/kvkk`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/yasal/kullanim-sartlari`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/yasal/cerez-politikasi`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
